# 贡献指南

感谢你愿意为本项目做贡献。

## 本地预览

### 前置要求

- **Node.js**：22 或更高（见 `.nvmrc`）
- **Git**：2.0 或更高

### 启动

```bash
git clone https://github.com/rockyflux/ai-guide.git
cd ai-guide
npm ci
npm run dev
```

然后访问终端输出的地址，默认路径前缀为 `/ai-guide/`。更多说明见 [WEBSITE.md](WEBSITE.md)。

## 内容位置

- 篇章正文在 `preface/`、`programming/`、`agent-tools/`、`agent/`、`practice/`、`scenarios/`、`resources/`、`products/`（Markdown，GitHub 可直接阅读；侧栏顺序以 `.vitepress/book.mjs` 为准）
- 站专用页在 `website/`
- 导航与稳定网址在 `.vitepress/book.mjs`
- 插图在 `assets/images/`

新增或调整章节后，请同步更新 `.vitepress/book.mjs`，并运行：

```bash
npm run check
```

## 建议贡献流程

- Fork 仓库
- 新建分支（建议用有意义的命名，例如 `fix-xxx` / `add-xxx`）
- 修改内容
- 本地预览确认无误
- 提交 Commit 并发起 PR

## 内容规范（建议）

- 尽量保持「任务导向」的写法：先给目标与使用场景，再给步骤与验证方式。
- 站内链接优先用相对 Markdown 路径，构建时会转成稳定网址。
- 图片请放在 `assets/images/` 下，并在正文中使用相对路径引用。

## 提交前自检

- `npm run check` 通过
- `npm run build` 与 `npm run check:build` 通过（改动较大时）
- 链接可访问（外链尽量避免 404）
- 文案清晰、段落结构合理

## 问题反馈与讨论

- Issues：<https://github.com/rockyflux/ai-guide/issues>
- Discussions：<https://github.com/rockyflux/ai-guide/discussions>
