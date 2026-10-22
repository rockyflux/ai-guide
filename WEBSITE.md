# 阅读站维护与发布

本项目使用 VitePress 1.6 构建静态阅读站。章节 Markdown 和图片仍是唯一的正文来源，不需要复制到另一套文档目录。

## 本地运行

需要 Node.js 22（可运行 `nvm use` 切换）。在仓库根目录执行：

```sh
npm ci
npm run dev
```

打开终端显示的地址，默认访问路径为 `/ai-guide/`。编辑原有章节 Markdown 后，浏览器自动更新。

检查并预览发布产物：

```sh
npm run check
npm run build
npm run check:build
npx playwright install chromium
npm test
npm run preview
```

`check` 检查章节覆盖、地址唯一性、正文链接和图片；`check:build` 检查生成站点的每个页面、站内链接、锚点和资源；浏览器测试覆盖中文搜索、深层页面刷新、移动目录、阅读设置、图片放大和全部 Mermaid 图。输出目录是 `.vitepress/dist/`。

## GitHub Pages 首次启用

1. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。这一步需要有权修改仓库设置的维护者操作。
2. 将网站分支合入 `main`。
3. 在 Actions 中查看 **Build and publish reading site**。检查和浏览器测试通过后，会自动部署。
4. 访问 <https://rockyflux.github.io/ai-guide/>。

后续推送到 `main` 自动更新网站。Pull Request 只执行构建和测试；在其他分支手动运行也只执行验证。`github-pages` 环境如配置了审批规则，发布会等待该环境的审批。

工作流使用 GitHub 官方 Pages artifact 与部署 Action，不需要 `gh-pages` 分支或个人访问令牌。

## 内容与导航

- `preface/`、`programming/`、`agent-tools/`、`agent/`、`practice/`、`scenarios/`、`resources/`、`products/`：篇章正文，继续在原文件编辑。篇章阅读顺序以 `.vitepress/book.mjs` 的 `parts` 为准，不以目录名为序。
- `website/2026-agent-survey-report.md`：开发者调研，公开地址仍为 `/survey.html`。
- `assets/`：现有插图。继续使用 Markdown 相对路径，构建时自动复制并生成资源地址。
- `.vitepress/book.mjs`：全书顺序、篇章、稳定网址与案例对应关系。普通章节标题直接读取正文；新增章节或案例时在这里登记，`npm run check` 会阻止遗漏正文。
- `website/`：网站首页、全书目录、阅读指南和案例分组页。
- `.vitepress/theme/`：阅读界面。章节不依赖自定义组件，仍可直接在 GitHub 阅读。
- `README.md`：关于本书。

章节文件使用内容 slug（对齐历史文件名），公开地址与文件名一致，例如 `programming/leaderboard.md` → `/programming/leaderboard.html`。侧栏标题读取正文 `#` 一级标题；排序与注册见 `.vitepress/book.mjs` 的 `parts` / `chapters` 数组。相对章节链接和目录链接由 Markdown 插件转换；正文中的 `{{input}}` 等模板示例会按字面显示。Mermaid 图在进入视野时加载，源码始终可展开查看。

阅读位置和字号只保存在读者自己的浏览器，无需登录。搜索索引随站点构建，不依赖外部搜索服务。章节按打开时加载，关闭目录链接的自动预取；Mermaid 使用 Dagre 布局，避免首次阅读额外下载大型 ELK 模块。打印功能导出当前章节；全书 PDF/EPUB 不在当前构建范围内。

## 自定义域名或仓库名

本地与 GitHub Pages 项目路径默认一致：

```yaml
SITE_BASE: /ai-guide/
SITE_URL: https://rockyflux.github.io/ai-guide/
```

资源地址会带上 `/ai-guide/` 前缀（例如 `/ai-guide/assets/style.*.css`）。若误设为 `SITE_BASE=/`，在 `github.io/ai-guide/` 下访问时会出现 CSS/JS 404（请求落到 `rockyflux.github.io/` 根路径）。

若改用自定义域名挂在站点根路径，需同时：

1. 在 `public/CNAME` 写入域名
2. 工作流改为 `SITE_BASE: /` 与对应的 `SITE_URL`
3. 在仓库 Settings → Pages 确认自定义域名

`SITE_URL` 用于 sitemap，应与最终访问地址一致（含末尾 `/`）。更换域名或仓库名时，同步改工作流里的这两个变量。

框架升级优先跟随稳定版。依赖使用公共 npm 源与锁文件，CI 使用 `npm ci` 以保持构建可复现。VitePress 1.6 的上游依赖仍是 Vite 5，`package.json` 显式覆盖为 Vite 6.4.4，并将 esbuild、KaTeX 固定到安全修复版本。本项目通过构建、开发预览和浏览器测试验证这个组合；升级 VitePress 或 Mermaid 时应重新检查这些覆盖配置，并重新执行验证。

发布流程参考 [VitePress 部署文档](https://vitepress.dev/guide/deploy#github-pages) 与 [GitHub Pages 自定义工作流文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
