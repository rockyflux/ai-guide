import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const repository = "https://github.com/rockyflux/ai-guide";

/**
 * chapters: content slugs (filename without .md).
 * Array order = sidebar / reading order (source of truth).
 */
export const parts = [
  {
    id: "programming",
    dir: "programming",
    title: "AI 编程篇",
    english: "AI Coding",
    range: "总览 · 模型 · 工具 · 套餐 · 环境 · 协作",
    description: "选模型与工具、买套餐与渠道、配环境、控成本，再定协作工作流。",
    chapters: [
      "full-pipeline",
      "leaderboard",
      "vb-code-tool",
      "code-cli",
      "coding-plan",
      "api-relay-station",
      "ai-coding-save-money",
      "dev-start",
      "ccg-workflow",
      "cleanup-uninstall",
      { slug: "zcf", hidden: true },
      { slug: "cc-switch", hidden: true },
    ],
  },
  {
    id: "agent-tools",
    dir: "agent-tools",
    title: "Agent 工具篇",
    english: "Agent Tools",
    range: "账号 · 安装 · 工作区 · 终端 · 浏览器 · 网关 · 记忆",
    description:
      "Coding Agent 周边：账号切换、安装脚本、多 Agent 工作区、终端、浏览器操控、路由网关与记忆检索。",
    chapters: [
      "account-switch",
      "bootstrap-ide",
      "agent-workspace",
      "terminal-cli",
      "browser-desktop",
      "routing-gateway",
      "memory-retrieval",
    ],
  },
  {
    id: "agent",
    dir: "agent",
    title: "Agent 工程篇",
    english: "Agent Engineering",
    range: "Prompt · Rules · Skills · MCP · Hooks · Subagents",
    description:
      "Prompt / Rules / Skills / MCP / Hooks / Subagents，让 AI 持续干活。",
    chapters: [
      "prompt",
      { slug: "rules", hidden: true },
      "skills",
      "mcp",
      { slug: "commands", hidden: true },
      "hooks",
      "subagents",
      { slug: "output-styles", hidden: true },
      { slug: "workflow", hidden: true },
      { slug: "awesome-agent-skills", hidden: true },
    ],
  },
  {
    id: "practice",
    dir: "practice",
    title: "编程实战篇",
    english: "Coding Practice",
    range: "Cursor · Codex · Kiro · WSL · Claude Code",
    description: "Coding Agent 上手包与可复用 SOP，把「会用工具」变成「能交付代码」。",
    chapters: [
      "cursor",
      "codex",
      "kiro-practice",
      "wsl",
      "best-practices",
      "everything-claude-code",
    ],
  },
  {
    id: "scenarios",
    dir: "scenarios",
    title: "场景实战篇",
    english: "Scenarios",
    range: "桌面 Agent · 办公 CLI · 设计 · 绘图",
    description: "桌面端 Agent、接入办公 CLI、需求到原型、AI 绘图与设计到代码，把 AI 用进非纯编码场景。",
    chapters: [
      "workbuddy-doubao-work",
      "ai-office-practice",
      "requirements-to-design-prototype",
      "gpt-image",
      "ai-drawing-practice",
      "google-stitch-figma-mcp",
    ],
  },
  {
    id: "resources",
    dir: "resources",
    title: "学习资源篇",
    english: "Resources",
    range: "路线 · 开源 · 社区 · 教程 · 速查",
    description: "系统学习路线、开源与社区资源、教程速查与日常实践笔记。",
    chapters: [
      "ai-learning-guide",
      "agent-engineer-roadmap",
      "open-source-learning",
      "ai-resources-guide",
      "runoob-online-tutorials",
      "github-extensions",
      "ai-dev-notes",
    ],
  },
  {
    id: "products",
    dir: "products",
    title: "应用选型篇",
    english: "Products",
    range: "办公 · 对话 · 智能体 · 创作 · 生态 · 开发周边",
    description: "产品导航总览，以及办公桌面 Agent、对话、智能体、绘图视频与开发周边。",
    chapters: [
      "ai-product",
      "ai-office-desktop",
      "ai-chat-tools",
      "ai-super-agent",
      "ai-image-tools",
      "ai-video-tools",
      "awesome-openclaw",
      "ai-software",
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

for (const part of parts) {
  const files = readdirSync(path.join(root, part.dir));
  part.pages = [];
  for (const entry of part.chapters) {
    const slug = typeof entry === "string" ? entry : entry.slug;
    const hidden = typeof entry === "string" ? false : !!entry.hidden;
    const file = exactlyOne(
      files.filter((f) => f === `${slug}.md`),
      `slug ${slug} in ${part.dir}`,
    );
    const chapter = page(`${part.dir}/${file}`, `${part.id}/${slug}`, {
      slug,
      part: part.title,
      hidden,
    });
    part.pages.push(chapter);
    chapterPages.push(chapter);
    if (!hidden) readingOrder.push(chapter);
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
      ...readingOrder.slice(0, 1).map((p) => ({ text: p.title, link: p.href })),
      { text: "阅读指南", link: "/reading-guide.html" },
    ],
  },
  ...parts.map((part) => ({
    text: part.title,
    collapsed: false,
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
    pageCount: pages.length,
  };
}
