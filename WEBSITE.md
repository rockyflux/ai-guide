# 阅读站维护与发布

本项目使用 VitePress 1.6 构建静态阅读站。章节 Markdown 和图片仍是唯一的正文来源，不需要复制到另一套文档目录。

**本地命令以本文为准**；`README.md`、`CONTRIBUTING.md`、`AGENTS.md` 只保留最短入口，详细步骤与发布说明请看这里。

## 本地运行

需要 Node.js 22（可运行 `nvm use` 切换）。在仓库根目录执行：

```sh
npm ci
npm run dev
```

打开终端显示的地址，默认访问路径为 `/ai-guide/`。编辑原有章节 Markdown 后，浏览器自动更新。

## 校验与预览

内容、构建与站点产物检查：

```sh
npm run verify
```

等价于 `assert:overrides` → `check` → `build` → `check:build`。需要浏览器回归时再执行：

```sh
npx playwright install chromium
npm test
npm run preview
```

| 命令 | 作用 |
|------|------|
| `npm run assert:overrides` | 断言已安装的 `vite` / `esbuild` 与 `package.json` overrides 一致（含 `npm ls` 树遍历） |
| `npm run check` | 章节覆盖、地址唯一性、正文链接与图片引用 |
| `npm run build` | 生成 `.vitepress/dist/` |
| `npm run check:build` | 检查生成站点的每个页面、站内链接、锚点和资源 |
| `npm test` | Playwright：中文搜索、深层页面刷新、移动目录、阅读设置、图片放大 |

## GitHub Pages 首次启用

1. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。这一步需要有权修改仓库设置的维护者操作。
2. 将网站分支合入 `main`。
3. 在 Actions 中查看 **Build and publish reading site**。`build` 与 `e2e` 都通过后，才会部署。
4. 访问 <https://rockyflux.github.io/ai-guide/>。

后续推送到 `main` 自动更新网站。工作流拆成 `build`（校验 + 构建）与 `e2e`（Playwright，依赖构建产物）；PR 连续推送会取消进行中的旧 run，`main` 不取消。Playwright 浏览器目录会按版本缓存。Dependabot（`.github/dependabot.yml`）每周检查 npm 与 GitHub Actions；`vite` / `esbuild` 由 overrides 钉死并在 CI 里断言，升级时需同步改 `package.json` overrides。

依赖漏洞审计（`npm audit --audit-level=high`）在独立的 **Dependency audit** 工作流（`.github/workflows/audit.yml`）里每周一例行跑一次，也可在 Actions 页手动触发；结果只体现在 Actions 列表，不阻塞 Pages 部署。发现高危漏洞时，随 Dependabot 的升级 PR 修复。

正文外链巡检由 **External link check**（`.github/workflows/links.yml` + 根目录 `lychee.toml`）每周一例行跑：使用 `GITHUB_TOKEN` 提高 GitHub 限额，带重试与 `.lycheecache`；只检查 `http(s)`（须传 `--root-dir`）；全局接受 403/429（覆盖 `x.com`、`zread.ai` 等易拦爬虫与限流）。失败同样只让该工作流变红，不阻塞 Pages。站内链接与锚点仍由 `npm run check` / `check:build` 负责。

工作流使用 GitHub 官方 Pages artifact 与部署 Action，不需要 `gh-pages` 分支或个人访问令牌。`github-pages` 环境如配置了审批规则，发布会等待该环境的审批。

## 内容与导航

- `preface/`、`programming/`、`agent-tools/`、`agent/`、`practice/`、`scenarios/`、`resources/`、`products/`：篇章正文，继续在原文件编辑。篇章阅读顺序以 `.vitepress/book.mjs` 的 `parts` 为准，不以目录名为序。
- `website/2026-agent-survey-report.md`：开发者调研，公开地址仍为 `/survey.html`。
- `assets/images/`：站内插图优先放这里，正文用相对路径引用。部分存量章节仍使用外链图床（如 `img.remit.ee`）；新增插图优先入库，外链需保证可访问。保留外链时，Markdown 插件会为外链 `<img>` / `![](url)` 补上 `loading="lazy"` 与 `referrerpolicy="no-referrer"`。
- `.vitepress/book.mjs`：全书顺序、篇章与稳定网址。普通章节标题直接读取正文；新增或调整章节时在这里登记，`npm run check` 会阻止遗漏正文。
- `website/`：网站首页、全书目录与阅读指南。
- `.vitepress/theme/`：阅读界面。章节不依赖自定义组件，仍可直接在 GitHub 阅读。
- `README.md`：关于本书；`AGENTS.md`：给 Agent / 贡献者的项目入口说明。

章节文件使用内容 slug（对齐历史文件名），公开地址与文件名一致，例如 `programming/leaderboard.md` → `/programming/leaderboard.html`。侧栏标题读取正文 `#` 一级标题；排序与注册见 `.vitepress/book.mjs` 的 `parts` / `chapters` 数组。相对章节链接和目录链接由 Markdown 插件转换；正文中的 `{{input}}` 等模板示例会按字面显示。

阅读位置和字号只保存在读者自己的浏览器，无需登录。搜索索引随站点构建，不依赖外部搜索服务。章节按打开时加载，关闭目录链接的自动预取。插图均为站内静态图片，打印功能导出当前章节；全书 PDF/EPUB 不在当前构建范围内。

## 自定义域名或仓库名

本地与 GitHub Pages 项目路径默认一致：

```yaml
SITE_BASE: /ai-guide/
SITE_URL: https://rockyflux.github.io/ai-guide/
```

资源地址会带上 `/ai-guide/` 前缀（例如 `/ai-guide/assets/style.*.css`）。若误设为 `SITE_BASE=/`，在 `github.io/ai-guide/` 下访问时会出现 CSS/JS 404（请求落到 `rockyflux.github.io/` 根路径）。

**当前部署走项目路径，仓库没有 `public/CNAME`，也不需要该文件。** 仅当改用自定义域名并挂在站点根路径时，才同时：

1. 新建 `public/CNAME` 并写入域名（VitePress 会把它复制到发布根目录）
2. 工作流改为 `SITE_BASE: /` 与对应的 `SITE_URL`
3. 在仓库 Settings → Pages 确认自定义域名

`SITE_URL` 用于 sitemap、canonical 与 Open Graph URL，应与最终访问地址一致（含末尾 `/`）。更换域名或仓库名时，同步改工作流里的这两个变量。

## 章节 SEO

构建时在 `.vitepress/config.mts` 的 `transformPageData` 里为每页写入 `meta description`、`canonical`、`og:*` 与 `twitter:*`。描述优先读 frontmatter 的 `description`；未写则取正文首段并截断到约 160 字。社交预览图为 `public/og.jpg`（与首页流程封面同源）。需要覆盖某章摘要时，在该章 frontmatter 加 `description` 即可。

框架升级优先跟随稳定版。依赖使用公共 npm 源与锁文件，CI 使用 `npm ci` 以保持构建可复现。VitePress 1.6 的上游依赖仍是 Vite 5，`package.json` 显式覆盖为 Vite 6.4.4，并将 esbuild 固定到安全修复版本——这是已知脆弱点，依赖上游兼容性。CI 在构建前跑 `npm run assert:overrides`（解析版本 + `npm ls` 断言）；升级 VitePress 或改动 overrides 时，PR 需勾选「重新验证覆盖」，并完成本地 `verify`（必要时加 Playwright）。

发布流程参考 [VitePress 部署文档](https://vitepress.dev/guide/deploy#github-pages) 与 [GitHub Pages 自定义工作流文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
