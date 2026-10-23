# AGENTS.md（ai-guide）

**一句话描述**：面向有经验开发者的任务导向中文指南：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用编程与场景实战跑通闭环。  
**技术栈**：VitePress 1.6

## 关键入口

- **站点配置**：`.vitepress/config.mts`、`.vitepress/book.mjs`
- **仓库入口**：`README.md`；**命令与发布真源**：`WEBSITE.md`；**贡献流程**：`CONTRIBUTING.md`
- **篇章正文**：`preface/`、`programming/`、`agent-tools/`、`agent/`、`practice/`、`scenarios/`、`resources/`、`products/`（阅读顺序以 `.vitepress/book.mjs` 的 `parts` 为准）
- **站专用页**：`website/`
- **插图**：新增优先 `assets/images/`；部分存量章节仍用外链图床

## 本地开发

```bash
npm ci
npm run dev
```

默认路径前缀：`/ai-guide/`。校验与发布命令只维护在 `WEBSITE.md`；常用入口：

```bash
npm run check    # 章节 / 链接
npm run verify   # assert:overrides + check + build + check:build
```

## 篇章结构

| 目录 | 篇章 |
|------|------|
| `preface` | 前言 |
| `programming` | AI 编程篇 |
| `agent-tools` | Agent 工具篇 |
| `agent` | Agent 工程篇 |
| `practice` | 编程实战篇 |
| `scenarios` | 场景实战篇 |
| `resources` | 学习资源篇 |
| `products` | 应用选型篇 |

章节文件用内容 slug（如 `full-pipeline.md`），侧栏标题读正文 `#` 标题；排序与注册在 `.vitepress/book.mjs` 的 `parts` / `chapters` 数组。新增或调整后运行 `npm run check`。
