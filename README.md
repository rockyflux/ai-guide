# AI 编程实践指南：从模型选型到项目闭环

> 面向「有一定经验的开发者」的任务导向中文文档：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用项目实践跑通闭环，让 AI 编程从“能用”变成“稳定产出”。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-在线访问-blue)](https://rockyflux.github.io/ai-guide/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-0.148.0-ff4088)](https://gohugo.io/)
[![Deploy](https://github.com/rockyflux/ai-guide/actions/workflows/hugo.yml/badge.svg)](https://github.com/rockyflux/ai-guide/actions/workflows/hugo.yml)

![AI Guide](static/images/index/flow.png)

**在线阅读**：[`https://rockyflux.github.io/ai-guide/`](https://rockyflux.github.io/ai-guide/)

**从这里开始**：

- **想快速上手 AI 编程**：从 [AI 编程（把代码写出来）](https://rockyflux.github.io/ai-guide/ai-programming/) 开始
- **想把 Agent 做成可执行系统**：从 [AI 智能体（让 AI 真的能干活）](https://rockyflux.github.io/ai-guide/agent/) 开始
- **想跑通端到端闭环**：从 [项目实践（跑通端到端闭环）](https://rockyflux.github.io/ai-guide/project-practice/) 开始

### 3 条主线（建议从这里开始）

- **[AI 编程（把代码写出来）](https://rockyflux.github.io/ai-guide/ai-programming/)**：选模型与工具、搭环境到建立协作工作流，目标是稳定产出代码。
- **[AI 智能体（让 AI 真的能干活）](https://rockyflux.github.io/ai-guide/agent/)**：把 Prompt / Rules / Skills / MCP / Hooks / Subagents 串成可执行系统。
- **[项目实践（跑通端到端闭环）](https://rockyflux.github.io/ai-guide/project-practice/)**：从 0 到 1 的项目路径，包含案例与可复用 SOP。

### 我现在要做什么？（超精简版）

- **快速入门（先跑通一遍）**
  - [AI 编程学习路径](https://rockyflux.github.io/ai-guide/ai-programming/guide/)
  - [Cursor 实战上手指南](https://rockyflux.github.io/ai-guide/project-practice/cursor/)
  - [新手端到端项目路径](https://rockyflux.github.io/ai-guide/project-practice/practices-two/)

- **选模型和花多少钱**
  - [AI 编程模型选型](https://rockyflux.github.io/ai-guide/ai-programming/models/)
  - [2026 年主流大模型盘点](https://rockyflux.github.io/ai-guide/large-models/models-2026/)
  - [LLM 排行榜与评测基准](https://rockyflux.github.io/ai-guide/large-models/Leaderboard/)
  - [大模型价格与成本对比](https://rockyflux.github.io/ai-guide/large-models/model-price/)
  - [AI 产品推荐](https://rockyflux.github.io/ai-guide/large-models/ai-product/)
  - [AI 编程省钱之道](https://rockyflux.github.io/ai-guide/ai-programming/ai-coding-save-money/)

- **配环境和选工具**
  - [开发环境准备](https://rockyflux.github.io/ai-guide/ai-programming/dev-start/)
  - [环境配置与增强工具集](https://rockyflux.github.io/ai-guide/ai-programming/env-and-tools/)
  - [ZCF 零配置 Claude Code](https://rockyflux.github.io/ai-guide/ai-programming/zcf/)
  - [CC-Switch 可视化配置](https://rockyflux.github.io/ai-guide/ai-programming/cc-switch/)
  - [CLI 代理 API（CPA）](https://rockyflux.github.io/ai-guide/ai-programming/cpa/)
  - [AI 编程工具汇总](https://rockyflux.github.io/ai-guide/ai-programming/vb-code-tool/)
  - [AI CLI 工具横评](https://rockyflux.github.io/ai-guide/ai-programming/code-cli/)
  - [AI Coding Plan 订阅选型](https://rockyflux.github.io/ai-guide/ai-programming/coding-plan/)

- **建工作流 / 做智能体**
  - [Coding Agent 协作实践](https://rockyflux.github.io/ai-guide/ai-programming/ccg-workflow/)
  - [CCG 多模型协作开发](https://rockyflux.github.io/ai-guide/ai-programming/ccg/)
  - [Agent 工作流](https://rockyflux.github.io/ai-guide/agent/workflow/)
  - [Rules / Skills / MCP / Hooks / Subagents / Commands / Output styles](https://rockyflux.github.io/ai-guide/agent/)
  - [Claude Code 最佳实践](https://rockyflux.github.io/ai-guide/project-practice/best-practices/)
  - [Everything Claude Code 总览](https://rockyflux.github.io/ai-guide/project-practice/everything-claude-code/)

- **进阶学习与资源**
  - [Vibe Coding 指南](https://rockyflux.github.io/ai-guide/ai-programming/vibe-coding/)
  - [AI 编程中文社区与课程](https://rockyflux.github.io/ai-guide/ai-programming/ai-resources-guide/)
  - [AI 学习路线与资料](https://rockyflux.github.io/ai-guide/tutorials/ai-learning-guide/)
  - [GitHub 周边工具速查](https://rockyflux.github.io/ai-guide/tutorials/github-extensions/)
  - [Awesome LLM Apps](https://rockyflux.github.io/ai-guide/tutorials/awesome-llm-apps/)
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
