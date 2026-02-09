# noTocArea 支持（隐藏右侧 TOC 占位区）

## 背景

- 需要在指定页面 front-matter 中通过 `noTocArea: true` 隐藏右侧目录（TOC）占位区。
- 现有主题 `toc-show` 仅识别 `.Params.bookToC`，而内容里常写 `bookToc: false`，导致关闭目录参数不生效。

## 方案（采用：方案 1）

- 在 `body` 上追加 class：当 `.Params.noTocArea` 为 true 时添加 `no-toc-area`。
- 在自定义样式中通过 `body.no-toc-area` 隐藏 `.book-toc`。
- 更新 `toc-show`：兼容 `bookToC` 与 `bookToc`（以及站点级配置）。

## 变更点

- `themes/hugo-book/layouts/baseof.html`
  - `body` 的 `class` 末尾追加：`{{ if .Params.noTocArea }} no-toc-area{{ end }}`
- `themes/hugo-book/layouts/_partials/docs/toc-show.html`
  - 使用 `$pageToc := default .Params.bookToC .Params.bookToc`
  - 使用 `$siteToc := default .Site.Params.BookToC .Site.Params.BookToc`
- `assets/custom.scss`
  - 新增：`body.no-toc-area .book-toc { display: none !important; }`

## 验收

- 对设置了 `noTocArea: true` 的页面：右侧 `.book-toc` 不可见且无空白占位。
- 对设置了 `bookToc: false` 或 `bookToC: false` 的页面：TOC 逻辑可正确关闭。
- 其他页面行为不变。
