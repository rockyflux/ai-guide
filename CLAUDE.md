# CLAUDE.md（ai-guide）

**时间戳**：2026-03-04T13:47:07+08:00  
**一句话描述**：面向有经验开发者的任务导向中文指南：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用项目实践跑通闭环。  
**技术栈**：Hugo（Extended，主题 `hugo-book`）+ Markdown 内容（`content.zh/`）+ GitHub Pages 部署（`.github/workflows/hugo.yml`）。

## 关键入口（先看这些）

- **站点配置**：`hugo.toml`
- **仓库入口**：`README.md`
- **站点首页（内容入口）**：`content.zh/_index.md`
- **主线栏目入口（建议阅读起点）**
  - `content.zh/ai-programming/_index.md`：AI 编程（工具与工作方式）
  - `content.zh/agent/_index.md`：AI 智能体（Rules/Skills/MCP/Hooks/Subagents）
  - `content.zh/project-practice/_index.md`：项目实践（端到端闭环）

## 本地开发（Hugo）

```bash
git submodule update --init --recursive
hugo server
```

默认地址：`http://localhost:1313`

## 目录结构（导航用）

```text
ai-guide/
├── hugo.toml
├── content.zh/                  # 中文内容（Markdown）
│   ├── _index.md                # 站点首页/总导航
│   ├── ai-programming/          # 主线：AI 编程实战
│   ├── agent/                   # 主线：Agent 体系
│   ├── project-practice/        # 主线：项目闭环实践
│   ├── large-models/            # 支线：模型认知/对比/价格
│   ├── tutorials/               # 支线：教程/资源
│   └── open-source-community/   # 支线：开源/社区资源
├── layouts/                     # 主题覆盖（局部自定义）
│   ├── partials/docs/inject/     # head/body/footer 注入点
│   └── _default/_markup/         # Markdown 渲染覆盖（如链接策略）
├── assets/                      # 站点构建资源（如 custom.scss）
├── static/                      # 静态资源（图片、JS 等）
├── .github/                     # CI、Issue/PR 模板
├── .spec-workflow/              # 规格/需求/任务模板（可选工作流）
└── issues/                      # 仓库内的任务记录/草案
```

## 站点/内容结构图（Mermaid）

```mermaid
flowchart TB
  Root[content.zh/_index.md<br/>总导航（任务导向）]
  Root --> AP[ai-programming<br/>选型/环境/工作流]
  Root --> AG[agent<br/>Rules/Skills/MCP/Hooks/Subagents]
  Root --> PP[project-practice<br/>端到端闭环实践]
  Root --> LM[large-models<br/>市场/对比/成本]
  Root --> TU[tutorials<br/>学习资源/周边工具]
  Root --> OSC[open-source-community<br/>开源/社区资源]

  AP --> AP1[models.md<br/>编程模型选型]
  AP --> AP2[dev-start.md<br/>开发环境准备]
  AP --> AP3[env-and-tools.md<br/>配置增强工具集]
  AP --> AP4[ccg.md / ccg-workflow.md<br/>多模型/多Agent协作]

  AG --> AG1[workflow.md<br/>阶段/产物/门禁/状态]
  AG --> AG2[mcp.md<br/>工具接入协议/生态]
  AG --> AG3[skills.md<br/>SOP/可复用能力模块]

  PP --> PP1[newbie-end-to-end-project.md<br/>端到端阅读路线]
  PP --> PP2[practices-one.md<br/>案例练手]
  PP --> PP3[best-practices.md<br/>Claude Code最佳实践]
```

## 内容模块（入口与定位）

> 每个模块目录下都有模块级 `CLAUDE.md`，用于该模块内的“文章地图/关系/阅读路径”。

- **AI 编程（`content.zh/ai-programming/`）**
  - **入口**：`content.zh/ai-programming/_index.md`
  - **代表页面**：`models.md`、`dev-start.md`、`env-and-tools.md`、`ccg-workflow.md`、`ccg.md`
- **智能体（`content.zh/agent/`）**
  - **入口**：`content.zh/agent/_index.md`
  - **代表页面**：`workflow.md`、`skills.md`、`mcp.md`（以及 `rules.md/hooks.md/subagents.md/commands.md/output-styles.md`）
- **项目实践（`content.zh/project-practice/`）**
  - **入口**：`content.zh/project-practice/_index.md`
  - **代表页面**：`newbie-end-to-end-project.md`、`practices-one.md`、`best-practices.md`、`everything-claude-code.md`
- **大模型（`content.zh/large-models/`）**
  - **入口**：`content.zh/large-models/_index.md`
  - **代表页面**：`models-2026.md`、`model-comparison.md`、`Leaderboard.md`、`model-price.md`
- **教程（`content.zh/tutorials/`）**
  - **入口**：`content.zh/tutorials/_index.md`
  - **代表页面**：`ai-learning-guide.md`、`github-extensions.md`、`awesome-llm-apps.md`
- **开源与社区（`content.zh/open-source-community/`）**
  - **入口**：`content.zh/open-source-community/_index.md`
  - **代表页面**：`awesome-openclaw.md`

## 导航面包屑（统一格式）

**格式**：`ai-guide / <模块> / <页面>`  
**示例**：
- `ai-guide / ai-programming / dev-start`
- `ai-guide / agent / workflow`
- `ai-guide / project-practice / newbie-end-to-end-project`

## 主题与渲染（与导航相关的“非内容”点）

- **主题**：`hugo-book`（见 `hugo.toml` 的 `theme = 'hugo-book'`）
- **自定义注入点**：`layouts/partials/docs/inject/`
  - `head.html`：加载 `assets/custom.scss`
  - `body.html`：回到顶部按钮
  - `footer.html`：页脚额外内容 + medium-zoom 脚本
- **链接渲染覆盖**：`layouts/_default/_markup/render-link.html`（对部分链接强制 `target="_blank"`）

## 贡献与规范入口

- **贡献指南**：`CONTRIBUTING.md`
- **PR 模板**：`.github/PULL_REQUEST_TEMPLATE.md`
- **Issue 模板**：`.github/ISSUE_TEMPLATE/*.yml`
- **安全策略**：`SECURITY.md`
- **规格工作流模板（可选）**：`.spec-workflow/templates/*.md`（可由 `.spec-workflow/user-templates/` 覆盖）

