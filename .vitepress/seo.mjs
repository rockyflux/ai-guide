import { bySource, readSource } from "./book.mjs";

export const siteUrl = (
  process.env.SITE_URL || "https://rockyflux.github.io/ai-guide/"
).replace(/\/*$/, "/");

export const siteDescription =
  "面向有经验开发者的任务向指南：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用编程与场景实战跑通闭环。";

export const ogImageUrl = new URL("og.jpg", siteUrl).href;

/** Absolute public URL for a book page href (`/` or `/foo.html`). */
export function pageUrl(href) {
  return new URL(href.replace(/^\//, ""), siteUrl).href;
}

/**
 * Prefer frontmatter description; otherwise first prose paragraph from source.
 * Truncates to ~160 chars for search/snippet limits.
 */
export function resolveDescription(source, frontmatterDescription) {
  const explicit =
    typeof frontmatterDescription === "string"
      ? frontmatterDescription.trim()
      : frontmatterDescriptionField(source);
  if (explicit) return clipDescription(explicit);
  const extracted = clipDescription(extractDescription(source));
  if (extracted) return extracted;
  // Home / component-only pages keep the site blurb.
  if (source === "website/index.md") return siteDescription;
  // Table / list-led pages: title + site blurb stays unique per chapter.
  const title = bySource.get(source)?.title;
  return title
    ? clipDescription(`${title}。${siteDescription}`)
    : siteDescription;
}

function frontmatterDescriptionField(source) {
  const fm = readSource(source).match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!fm) return "";
  const match = fm[1].match(
    /^description:\s*(?:"([^"]*)"|'([^']*)'|(.+))\s*$/m,
  );
  return (match?.[1] ?? match?.[2] ?? match?.[3] ?? "").trim();
}

function extractDescription(source) {
  let text = readSource(source).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  text = text
    .replace(/```[\s\S]*?```/g, "\n")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/<[^>\n]+>/g, "");

  const paragraphs = [];
  let buf = [];
  const flush = () => {
    if (!buf.length) return;
    const joined = buf
      .join(" ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_~`]+/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (joined) paragraphs.push(joined);
    buf = [];
  };

  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t) {
      flush();
      continue;
    }
    if (/^#{1,6}\s/.test(t)) continue;
    if (/^([-*_])\1{2,}$/.test(t)) continue;
    if (/^\|/.test(t)) continue;
    if (/^<[A-Za-z]/.test(t)) continue;
    const body = t.replace(/^>\s*/, "");
    // Skip list markers so numbered / bullet blocks don't become the snippet.
    if (/^[-*+]\s+/.test(body) || /^\d+\.\s+/.test(body)) continue;
    buf.push(body);
  }
  flush();

  const solid = paragraphs.filter(
    (p) => p.length >= 24 && !/[：:]$/.test(p),
  );
  return (
    solid.find((p) => p.length >= 40 && !/[——-]$/.test(p)) ||
    solid.find((p) => p.length >= 40) ||
    solid[0] ||
    ""
  );
}

function clipDescription(text, max = 160) {
  // VitePress writes pageData.description into HTML without escaping quotes;
  // prefer Chinese quotation marks so meta content stays well-formed.
  const normalized = text
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
    .replace(/"([^"]*)"/g, "“$1”")
    .replace(/"/g, "”")
    .replace(/\s+/g, " ")
    .trim();
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max - 1);
  const breakAt = Math.max(
    slice.lastIndexOf("，"),
    slice.lastIndexOf("。"),
    slice.lastIndexOf("；"),
    slice.lastIndexOf("、"),
    slice.lastIndexOf(" "),
  );
  const cut = breakAt >= max * 0.6 ? slice.slice(0, breakAt) : slice;
  return cut.replace(/[，。；、\s]+$/, "") + "…";
}
