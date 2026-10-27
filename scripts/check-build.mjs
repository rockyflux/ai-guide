import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import { pages, root } from "../.vitepress/book.mjs";
import {
  ogImageUrl,
  pageUrl,
  resolveDescription,
  siteDescription,
} from "../.vitepress/seo.mjs";

const base = process.env.SITE_BASE || "/ai-guide/";
const output = path.join(root, ".vitepress/dist");
const origin = "https://book.test";
const errors = [];
const cache = new Map();
function fileFor(pathname) {
  if (!pathname.startsWith(base)) return null;
  const relative = decodeURIComponent(pathname.slice(base.length));
  let file = path.join(output, relative);
  if (!file.startsWith(output + path.sep) && file !== output) return null;
  if (existsSync(file) && statSync(file).isDirectory())
    file = path.join(file, "index.html");
  return file;
}
function document(file) {
  if (!cache.has(file)) cache.set(file, load(readFileSync(file, "utf8")));
  return cache.get(file);
}
assert.ok(
  existsSync(path.join(output, "og.jpg")),
  "Missing built og.jpg (copy of social preview image)",
);
for (const page of pages) {
  const url = new URL(base + page.href.slice(1), origin);
  const file = fileFor(url.pathname);
  assert.ok(file && existsSync(file), `Missing built page: ${page.href}`);
  const $ = document(file);
  assert.ok($("h1").length, `Missing page title: ${page.href}`);
  const expectedDescription = resolveDescription(page.source);
  const metaDescription = $('meta[name="description"]').attr("content") || "";
  if (metaDescription !== expectedDescription)
    errors.push(
      `${page.href}: meta description mismatch (got ${JSON.stringify(metaDescription.slice(0, 48))}…)`,
    );
  if (
    page.source !== "website/index.md" &&
    metaDescription === siteDescription
  )
    errors.push(
      `${page.href}: chapter meta description fell back to site description`,
    );
  const canonical = $('link[rel="canonical"]').attr("href");
  if (canonical !== pageUrl(page.href))
    errors.push(`${page.href}: canonical expected ${pageUrl(page.href)}`);
  for (const [attr, key, value] of [
    ["property", "og:title", null],
    ["property", "og:description", expectedDescription],
    ["property", "og:url", pageUrl(page.href)],
    ["property", "og:image", ogImageUrl],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", null],
    ["name", "twitter:description", expectedDescription],
    ["name", "twitter:image", ogImageUrl],
  ]) {
    const content = $(`meta[${attr}="${key}"]`).attr("content");
    if (!content)
      errors.push(`${page.href}: missing meta ${key}`);
    else if (value != null && content !== value)
      errors.push(`${page.href}: ${key} expected ${value}`);
  }
  for (const element of $(
    "a[href], img[src], script[src], link[href]",
  ).toArray()) {
    const raw = $(element).attr("href") || $(element).attr("src");
    if (!raw || /^(mailto:|tel:|data:|javascript:)/.test(raw)) continue;
    const target = new URL(raw, url);
    if (target.origin !== origin) continue;
    const linkedFile = fileFor(target.pathname);
    if (!linkedFile || !existsSync(linkedFile)) {
      errors.push(`${page.href}: missing ${raw}`);
      continue;
    }
    if (target.hash && linkedFile.endsWith(".html")) {
      const id = decodeURIComponent(target.hash.slice(1));
      // VitePress adds this accessible anchor in the browser layout.
      if (
        id !== "VPContent" &&
        !document(linkedFile)("[id]")
          .toArray()
          .some((e) => document(linkedFile)(e).attr("id") === id)
      )
        errors.push(`${page.href}: missing anchor ${raw}`);
    }
  }
}
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exit(1);
}
console.log(
  `Built site checked: all ${pages.length} pages, SEO meta, local links, fragment targets and assets resolve under ${base}.`,
);

