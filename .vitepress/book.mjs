import { readdirSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const repository = "https://github.com/rockyflux/ai-guide";

/**
 * chapters: content slugs (filename without .md).
 * Array order = sidebar / reading order (source of truth).
 * legacy: old chapter-NN URL number for redirects.
 */
export const parts = [
  {
    id: "programming",
    dir: "programming",
    title: "编程选型篇",
    english: "Programming",
    range: "选型 · 工具 · 环境 · 工作流",
    description: "选模型、选工具 / 套餐、配环境与增强、控成本；含协作工作流选型。",
    chapters: [
      { slug: "full-pipeline", legacy: 1 },
      { slug: "leaderboard", legacy: 2 },
      { slug: "vb-code-tool", legacy: 5 },
      { slug: "code-cli", legacy: 6 },
      { slug: "ccg-workflow", legacy: 25 },
      { slug: "coding-plan", legacy: 7 },
      { slug: "api-relay-station", legacy: 8 },
      { slug: "api-aggregation-platforms", legacy: 9 },
      { slug: "ai-coding-save-money", legacy: 10 },
      { slug: "dev-start", legacy: 11 },
      { slug: "env-and-tools", legacy: 12 },
      { slug: "zcf", legacy: 13, hidden: true },
      { slug: "cc-switch", legacy: 14, hidden: true },
      { slug: "cleanup-uninstall", legacy: 16 },
    ],
  },
  {
    id: "agent",
    dir: "agent",
    title: "Agent 构建篇",
    english: "Agent",
    range: "Rules · Skills · MCP",
    description: "Rules / Skills / MCP / Hooks / Subagents，让 AI 持续干活。",
    chapters: [
      { slug: "prompt", legacy: 33 },
      { slug: "rules", legacy: 34, hidden: true },
      { slug: "skills", legacy: 35 },
      { slug: "mcp", legacy: 36 },
      { slug: "commands", legacy: 37, hidden: true },
      { slug: "hooks", legacy: 38 },
      { slug: "subagents", legacy: 39 },
      { slug: "output-styles", legacy: 40, hidden: true },
      { slug: "workflow", legacy: 41, hidden: true },
      { slug: "awesome-agent-skills", legacy: 42, hidden: true },
    ],
  },
  {
    id: "practice",
    dir: "practice",
    title: "项目实践篇",
    english: "Practice",
    range: "上手 · 案例 · SOP",
    description: "真实案例与可复用 SOP，把「会用工具」变成「能交付」。",
    chapters: [
      { slug: "cursor", legacy: 43 },
      { slug: "codex", legacy: 44 },
      { slug: "kiro-practice", legacy: 45 },
      { slug: "wsl", legacy: 46 },
      { slug: "ai-office-practice", legacy: 48 },
      { slug: "requirements-to-design-prototype", legacy: 49 },
      { slug: "best-practices", legacy: 50 },
      { slug: "everything-claude-code", legacy: 51 },
      { slug: "ai-dev-notes", legacy: 52 },
      { slug: "gpt-image", legacy: 53 },
      { slug: "ai-drawing-practice", legacy: 65 },
      { slug: "google-stitch-figma-mcp", legacy: 66 },
    ],
  },
  {
    id: "resources",
    dir: "resources",
    title: "学习资源篇",
    english: "Resources",
    range: "路线 · 资料 · 工具",
    description: "系统学习路线、社区资源与 Awesome 合集。",
    chapters: [
      { slug: "ai-learning-guide", legacy: 55 },
      { slug: "ai-resources-guide", legacy: 56 },
      { slug: "runoob-online-tutorials", legacy: 57 },
      { slug: "github-extensions", legacy: 58 },
    ],
  },
  {
    id: "products",
    dir: "products",
    title: "应用选型篇",
    english: "Products",
    range: "办公 · 对话 · 创作",
    description: "办公桌面 Agent、对话、智能体、绘图视频与开发周边。",
    chapters: [
      { slug: "ai-office-desktop", legacy: 17 },
      { slug: "ai-chat-tools", legacy: 18 },
      { slug: "ai-super-agent", legacy: 19 },
      { slug: "ai-image-tools", legacy: 20 },
      { slug: "ai-video-tools", legacy: 21 },
      { slug: "awesome-openclaw", legacy: 22 },
      { slug: "ai-software", legacy: 23 },
      { slug: "ai-product", legacy: 24 },
    ],
  },
];

export const readSource = (source) =>
  readFileSync(path.join(root, source), "utf8").replace(/^\uFEFF/, "");
export const normalizeTitle = (title) => title.replace(/\s+/g, " ").trim();
export const titleOf = (source) =>
  normalizeTitle(
    readSource(source).match(/^#\s+(.+)$/m)?.[1] ||
      path.basename(source, ".md"),
  );
export const hrefOf = (route) =>
  "/" +
  (route.endsWith("/index")
    ? route.slice(0, -5)
    : route === "index"
      ? ""
      : route + ".html");
function exactlyOne(items, context) {
  if (items.length !== 1)
    throw new Error(
      `Expected one source for ${context}, found ${items.length}`,
    );
  return items[0];
}
function page(source, route, extra = {}) {
  return {
    source,
    route,
    href: hrefOf(route),
    title: titleOf(source),
    ...extra,
  };
}

export const readingOrder = [
  page("preface/preface.md", "preface", { part: "开始阅读" }),
];
/** All chapter pages including sidebar-hidden ones (for routes / link resolution). */
export const chapterPages = [];

/** Old /{part}/chapter-NN.html → new href (for redirects + link checks). */
export const legacyRedirects = [];

for (const part of parts) {
  const files = readdirSync(path.join(root, part.dir));
  part.pages = [];
  for (const entry of part.chapters) {
    const slug = typeof entry === "string" ? entry : entry.slug;
    const legacy = typeof entry === "string" ? undefined : entry.legacy;
    const hidden = typeof entry === "string" ? false : !!entry.hidden;
    const file = exactlyOne(
      files.filter((f) => f === `${slug}.md`),
      `slug ${slug} in ${part.dir}`,
    );
    const chapter = page(`${part.dir}/${file}`, `${part.id}/${slug}`, {
      slug,
      part: part.title,
      legacy,
      hidden,
    });
    part.pages.push(chapter);
    chapterPages.push(chapter);
    if (!hidden) readingOrder.push(chapter);
    if (legacy != null) {
      legacyRedirects.push({
        from: `${part.id}/chapter-${String(legacy).padStart(2, "0")}`,
        to: chapter.href,
      });
    }
  }
  part.href = (part.pages.find((p) => !p.hidden) || part.pages[0]).href;
}

export const extraPages = [
  page("website/index.md", "index", {
    title: "把 AI 从会聊天推进到能稳定交付",
  }),
  page("website/contents.md", "contents"),
  page("website/reading-guide.md", "reading-guide"),
  page("README.md", "about"),
  page("website/2026-agent-survey-report.md", "survey"),
];
export const pages = [
  ...readingOrder.filter((p) => p.route === "preface"),
  ...chapterPages,
  ...extraPages,
];
export const bySource = new Map(pages.map((p) => [p.source, p]));
export const byRoute = new Map(pages.map((p) => [p.route + ".md", p]));
export const directoryPages = new Map();
for (const part of parts) {
  const first = part.pages.find((p) => !p.hidden) || part.pages[0];
  directoryPages.set(part.dir, first);
  directoryPages.set(part.id, first);
}
directoryPages.set("preface", readingOrder[0]);
for (const p of readingOrder)
  if (p.sourceDirectory) directoryPages.set(p.sourceDirectory, p);

export const sidebar = [
  {
    text: "开始阅读",
    items: [
      { text: "阅读指南", link: "/reading-guide.html" },
      ...readingOrder.slice(0, 1).map((p) => ({ text: p.title, link: p.href })),
    ],
  },
  ...parts.map((part) => ({
    text: part.title,
    collapsed: part.id !== "programming",
    items: part.pages
      .filter((p) => !p.hidden)
      .map((p) => ({
        text: p.title,
        link: p.href,
      })),
  })),
];

export function getPage(relativePath) {
  return bySource.get(relativePath) || byRoute.get(relativePath);
}

export function resolveBookLink(url, source) {
  if (!url || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) return url;
  const split = url.search(/[?#]/);
  const pathname = split < 0 ? url : url.slice(0, split);
  const suffix = split < 0 ? "" : url.slice(split);
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return url;
  }
  const resolved = path.posix
    .normalize(
      decoded.startsWith("/")
        ? decoded.slice(1)
        : path.posix.join(path.posix.dirname(source), decoded),
    )
    .replace(/\/$/, "");
  const target = bySource.get(resolved) || directoryPages.get(resolved);
  if (target) return target.href + suffix;
  if (resolved.startsWith("assets/"))
    return "/" + resolved.split("/").map(encodeURIComponent).join("/") + suffix;
  return url;
}

export function publicBookData() {
  const publicPage = ({ title, href, slug, children }) => ({
    title,
    href,
    slug,
    ...(children ? { children: children.map(publicPage) } : {}),
  });
  const visible = (pages) => pages.filter((p) => !p.hidden);
  return {
    parts: parts.map((p) => ({
      id: p.id,
      title: p.title,
      english: p.english,
      range: p.range,
      description: p.description,
      href: p.href,
      pages: visible(p.pages).map(publicPage),
    })),
    chapterCount: parts.reduce((n, p) => n + visible(p.pages).length, 0),
    caseCount: 0,
  };
}

/** Write meta-refresh HTML for old chapter-NN URLs into a VitePress dist root. */
export function writeLegacyRedirects(outDir) {
  for (const { from, to } of legacyRedirects) {
    const file = path.join(outDir, from + ".html");
    mkdirSync(path.dirname(file), { recursive: true });
    const dest = path.posix.basename(to.startsWith("/") ? to.slice(1) : to);
    writeFileSync(
      file,
      `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${dest}"><link rel="canonical" href="${dest}"><title>Redirect</title><a href="${dest}">Moved</a>\n`,
    );
  }
}
