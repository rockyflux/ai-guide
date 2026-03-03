# AI 编程指南（AI 编程实践教程）

> 一个使用 Hugo + Hugo Book 主题构建的中文文档站，内容以「任务导向」组织：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用项目实践跑通闭环。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-在线访问-blue)](https://rockyflux.github.io/ai-guide/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-0.148.0-ff4088)](https://gohugo.io/)

### 在线阅读

- **站点入口**：[`https://rockyflux.github.io/ai-guide/`](https://rockyflux.github.io/ai-guide/)

### 3 条主线（建议从这里开始）

- **[AI 编程（把代码写出来）](https://rockyflux.github.io/ai-guide/ai-programming/)**：选模型与工具、搭环境到建立协作工作流，目标是稳定产出代码。
- **[AI 智能体（让 AI 真的能干活）](https://rockyflux.github.io/ai-guide/agent/)**：把 Prompt / Rules / Skills / MCP / Hooks / Subagents 串成可执行系统。
- **[项目实践（跑通端到端闭环）](https://rockyflux.github.io/ai-guide/project-practice/)**：从 0 到 1 的项目路径，包含案例与可复用 SOP。

### 我现在要做什么？（按任务直达）

- **选模型 / 选引擎（能力、榜单与价格）**
  - [AI 编程模型选型](https://rockyflux.github.io/ai-guide/ai-programming/models/)
  - [2026 年主流大模型盘点](https://rockyflux.github.io/ai-guide/large-models/models-2026/)
  - [LiveBench AI 排行榜](https://rockyflux.github.io/ai-guide/large-models/model-comparison/)
  - [LLM 评测基准与榜单汇总](https://rockyflux.github.io/ai-guide/large-models/leaderboard/)
  - [大模型价格](https://rockyflux.github.io/ai-guide/large-models/model-price/)

- **选工具与订阅（IDE/CLI/套餐对照）**
  - [AI 编程工具汇总](https://rockyflux.github.io/ai-guide/ai-programming/vb-code-tool/)
  - [AI CLI 工具横评](https://rockyflux.github.io/ai-guide/ai-programming/code-cli/)
  - [AI Code Plan 订阅选型](https://rockyflux.github.io/ai-guide/ai-programming/code-plan/)

- **搭环境 & 接模型（尽量一次配置到位）**
  - [开发环境准备](https://rockyflux.github.io/ai-guide/ai-programming/dev-start/)
  - [AI 编程环境配置与增强工具集](https://rockyflux.github.io/ai-guide/ai-programming/env-and-tools/)
  - [ZCF 零配置 Claude Code](https://rockyflux.github.io/ai-guide/ai-programming/zcf/)
  - [CC-Switch 可视化配置](https://rockyflux.github.io/ai-guide/ai-programming/cc-switch/)
  - [CLI 代理 API（CPA）](https://rockyflux.github.io/ai-guide/ai-programming/cpa/)

- **把“对话”变成“可交付”（工作流与协作）**
  - [Coding Agent 协作实践](https://rockyflux.github.io/ai-guide/ai-programming/ccg-workflow/)
  - [CCG 多模型协作开发](https://rockyflux.github.io/ai-guide/ai-programming/ccg/)
  - [Agent 工作流](https://rockyflux.github.io/ai-guide/agent/workflow/)

- **理解智能体关键模块（Rules / Skills / MCP / Hooks / Subagents）**
  - [Rules](https://rockyflux.github.io/ai-guide/agent/rules/)
  - [Skills](https://rockyflux.github.io/ai-guide/agent/skills/)
  - [MCP](https://rockyflux.github.io/ai-guide/agent/mcp/)
  - [Hooks](https://rockyflux.github.io/ai-guide/agent/hooks/)
  - [Subagents](https://rockyflux.github.io/ai-guide/agent/subagents/)
  - [Commands](https://rockyflux.github.io/ai-guide/agent/commands/)
  - [Output styles](https://rockyflux.github.io/ai-guide/agent/output-styles/)

- **新手端到端路径**
  - [新手端到端项目实战路径](https://rockyflux.github.io/ai-guide/project-practice/newbie-end-to-end-project/)

- **项目级最佳实践 / 可复用 SOP**
  - [Claude Code 最佳实践](https://rockyflux.github.io/ai-guide/project-practice/best-practices/)
  - [Everything Claude Code 总览](https://rockyflux.github.io/ai-guide/project-practice/everything-claude-code/)

- **控成本（少花钱也能稳定产出）**
  - [AI 编程省钱之道](https://rockyflux.github.io/ai-guide/ai-programming/ai-coding-save-money/)

- **补基础教程与资源**
  - [AI 学习路线与资料](https://rockyflux.github.io/ai-guide/tutorials/ai-learning-guide/)
  - [GitHub 周边工具速查](https://rockyflux.github.io/ai-guide/tutorials/github-extensions/)
  - [Awesome LLM Apps](https://rockyflux.github.io/ai-guide/tutorials/awesome-llm-apps/)

- **开源与社区资源**
  - [Awesome OpenClaw](https://rockyflux.github.io/ai-guide/open-source-community/awesome-openclaw/)

### 本地开发

#### 前置要求

- **Hugo Extended**：0.148.0 或更高（需要 Extended 才能支持 Dart Sass）
- **Git**：2.0 或更高

#### 启动

```bash
git clone https://github.com/rockyflux/ai-guide.git
cd ai-guide
git submodule update --init --recursive
hugo server
```

然后访问 `http://localhost:1313`。

### 贡献方式

- **内容位置**：主要内容在 `content.zh/`（Markdown）。
- **建议流程**：Fork → 新分支 → 修改 → 提交 → PR。
- **问题反馈**：用 GitHub Issues 提交问题与建议：[`https://github.com/rockyflux/ai-guide/issues`](https://github.com/rockyflux/ai-guide/issues)
- **参与讨论**：GitHub Discussions：[`https://github.com/rockyflux/ai-guide/discussions`](https://github.com/rockyflux/ai-guide/discussions)

### 许可证

本项目采用 [MIT 许可证](LICENSE)。
