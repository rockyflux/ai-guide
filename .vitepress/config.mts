import { defineConfig } from "vitepress";
import {
  pages,
  readingOrder,
  getPage,
  sidebar,
  readSource,
  repository,
} from "./book.mjs";
import { bookMarkdown } from "./markdown.mjs";

const base = process.env.SITE_BASE || "/ai-guide/";
if (!base.startsWith("/") || !base.endsWith("/"))
  throw new Error("SITE_BASE must start and end with /");

export default defineConfig({
  title: "AI Guide",
  titleTemplate: ":title · AI Guide",
  description:
    "面向有经验开发者的任务向指南：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用编程与场景实战跑通闭环。",
  lang: "zh-CN",
  base,
  cleanUrls: false,
  router: { prefetchLinks: false },
  lastUpdated: true,
  ignoreDeadLinks: [
    /^https?:\/\/localhost(?::\d+)?(?:\/|$)/,
    /^http:\/\/127\.0\.0\.1(?::\d+)?(?:\/|$)/,
    /\.drawio$/,
  ],
  srcExclude: [
    "node_modules/**",
    "scripts/**",
    "tests/**",
    "WEBSITE.md",
    ".github/**",
    ".spec-workflow/**",
    ".baoyu-skills/**",
    ".birdview/**",
    ".codeartsdoer/**",
    ".codegraph/**",
    ".tmp-handbook/**",
    "CONTRIBUTING.md",
    "CODE_OF_CONDUCT.md",
    "SECURITY.md",
    "AGENTS.md",
  ],
  rewrites: Object.fromEntries(pages.map((p) => [p.source, p.route + ".md"])),
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: `${base}favicon.svg` },
    ],
    ["meta", { name: "theme-color", content: "#f8f7f3" }],
    ["meta", { property: "og:type", content: "book" }],
    ["meta", { property: "og:site_name", content: "AI Guide" }],
  ],
  sitemap: {
    hostname: process.env.SITE_URL || "https://rockyflux.github.io/ai-guide/",
  },
  markdown: {
    lineNumbers: false,
    languageAlias: { mysql: "sql" },
    image: { lazyLoading: true },
    config: bookMarkdown,
  },
  transformPageData(pageData) {
    const page = getPage(pageData.relativePath);
    if (!page) return;
    const index = readingOrder.findIndex((p) => p.source === page.source);
    const link = (p) => (p ? { text: p.title, link: p.href } : false);
    const source = readSource(page.source);
    const prose = source
      .replace(/```[\s\S]*?```/g, "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "");
    const cjk = (prose.match(/[\u3400-\u9fff]/g) || []).length;
    const words = (prose.match(/[a-zA-Z]+/g) || []).length;
    pageData.title = page.title;
    Object.assign(pageData.frontmatter, {
      title: page.title,
      bookSource: page.source,
      bookPart: page.part,
      bookSlug: page.slug,
      readingMinutes: Math.max(1, Math.ceil(cjk / 450 + words / 220)),
      prev: index > 0 ? link(readingOrder[index - 1]) : false,
      next: index >= 0 ? link(readingOrder[index + 1]) : false,
      editLink: ![
        "website/index.md",
        "website/contents.md",
        "website/reading-guide.md",
      ].includes(page.source),
    });
  },
  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "AI Guide",
    nav: [
      { text: "全书目录", link: "/contents.html", activeMatch: "/contents" },
      { text: "阅读指南", link: "/reading-guide.html" },
      { text: "开发者调研", link: "/survey.html" },
      { text: "关于本站", link: "/about.html" },
    ],
    sidebar,
    outline: { level: [2, 3], label: "本章内容" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    editLink: {
      pattern: ({ frontmatter, filePath }) =>
        `https://github.com/rockyflux/ai-guide/edit/main/${(frontmatter.bookSource || filePath).split("/").map(encodeURIComponent).join("/")}`,
      text: "在 GitHub 上完善本页",
    },
    lastUpdated: { text: "最后更新", formatOptions: { dateStyle: "medium" } },
    socialLinks: [
      { icon: "github", link: repository, ariaLabel: "GitHub 仓库" },
    ],
    darkModeSwitchLabel: "阅读主题",
    lightModeSwitchTitle: "切换浅色主题",
    darkModeSwitchTitle: "切换深色主题",
    sidebarMenuLabel: "全书目录",
    returnToTopLabel: "回到顶部",
    skipToContentLabel: "跳转到正文",
    notFound: {
      title: "没有找到这一页",
      quote: "可以从全书目录继续阅读，或使用搜索寻找相关主题。",
      linkLabel: "返回首页",
      linkText: "返回首页",
    },
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const normalized = text.normalize("NFKC").toLowerCase();
              const words = Array.from(
                new Intl.Segmenter("zh-CN", { granularity: "word" }).segment(
                  normalized,
                ),
              )
                .filter((s) => s.isWordLike)
                .map((s) => s.segment);
              return [
                ...new Set([
                  ...words,
                  ...(normalized.match(/\p{Script=Han}/gu) || []),
                ]),
              ];
            },
          },
          searchOptions: {
            combineWith: "AND",
            prefix: true,
            fuzzy: false,
            boost: { title: 5, titles: 3, text: 1 },
          },
        },
        translations: {
          button: { buttonText: "搜索全书", buttonAriaLabel: "搜索全书" },
          modal: {
            displayDetails: "显示摘要",
            resetButtonTitle: "清空搜索",
            backButtonTitle: "返回",
            noResultsText: "没有找到相关内容",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    footer: {
      message: "面向有经验开发者的 AI 工具与编程实践指南",
      copyright: "MIT · 社区共同维护",
    },
  },
  vite: {
    build: { assetsInlineLimit: 0, chunkSizeWarningLimit: 1500 },
  },
});
