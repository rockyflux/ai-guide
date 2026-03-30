# 贡献指南

感谢你愿意为本项目做贡献。

## 本地预览

### 前置要求

- **Hugo Extended**：0.148.0 或更高（需要 Extended 才能支持 Dart Sass）
- **Git**：2.0 或更高

### 启动

```bash
git clone https://github.com/rockyflux/ai-guide.git
cd ai-guide
git submodule update --init --recursive
hugo server
```

然后访问 `http://localhost:1313`。

## 内容位置

- 主要内容在 `content.zh/`（Markdown）。

## 建议贡献流程

- Fork 仓库
- 新建分支（建议用有意义的命名，例如 `fix-xxx` / `add-xxx`）
- 修改内容
- 本地预览确认无误
- 提交 Commit 并发起 PR

## 内容规范（建议）

- 尽量保持「任务导向」的写法：先给目标与使用场景，再给步骤与验证方式。
- 链接尽量使用站内相对链接（站点内页面优先用站点链接，不要贴本地路径）。
- 图片请放在 `static/images/` 下，并在正文中使用相对路径引用。

## 提交前自检

- 页面能正常渲染（本地 `hugo server` 无明显报错）
- 链接可访问（外链尽量避免 404）
- 文案清晰、段落结构合理

## 问题反馈与讨论

- Issues：<https://github.com/rockyflux/ai-guide/issues>
- Discussions：<https://github.com/rockyflux/ai-guide/discussions>
