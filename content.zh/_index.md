---
title: AI 编程指南
type: docs
translationKey: homepage
bookToc: false
noTocArea: true
---

<br>
欢迎来到《AI 编程指南》。这里按「任务」组织内容：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用项目实践跑通闭环。

## ✅ 先从这里开始（3 条主线）

- **[AI 编程（把代码写出来）]({{< relref "ai-programming/_index" >}})**：从选模型与工具、搭环境到建立协作工作流，目标是「稳定产出代码」。
- **[AI 智能体（让 AI 真的能干活）]({{< relref "agent/_index" >}})**：把 Prompt/Rules/Skills/MCP/Hooks/Subagents 串成可执行系统，让 AI 不止会聊。
- **[项目实践（跑通端到端闭环）]({{< relref "project-practice/_index" >}})**：给新手一条从 0 到 1 的项目路径，包含真实案例与可复用 SOP。

## 🧭 我现在要做什么？（按任务直达）

- **选模型 / 选引擎（能力、榜单与价格）**
  - [AI 编程模型选型]({{< relref "ai-programming/models" >}})：面向编程任务挑模型，知道该用“重模型”还是“轻模型”。
  - [2026 年主流大模型盘点]({{< relref "large-models/models-2026" >}})：快速了解各家模型定位与差异。
  - [LiveBench AI 排行榜]({{< relref "large-models/model-comparison" >}})：看推理/编程/数学等维度的能力对比。
  - [LLM 评测基准与榜单汇总]({{< relref "large-models/Leaderboard" >}})：知道这些榜单怎么来的、该怎么参考。
  - [大模型价格]({{< relref "large-models/model-price" >}})：评估成本（按 Token 计费）与预算。

- **选工具与订阅（IDE/CLI/套餐对照）**
  - [AI 编程工具汇总]({{< relref "ai-programming/vb-code-tool" >}})：IDE/插件/Agent 工具怎么选（Cursor、Aider、Codex 等）。
  - [AI CLI 工具横评]({{< relref "ai-programming/code-cli" >}})：命令行流派（Claude Code / Codex CLI / Gemini CLI 等）适用场景对比。
  - [AI Coding Plan 订阅选型]({{< relref "ai-programming/coding-plan" >}})：套餐怎么选更划算、怎么买更省心。

- **搭环境 & 接模型（尽量一次配置到位）**
  - [开发环境准备]({{< relref "ai-programming/dev-start" >}})：PowerShell 7、VS Code、Node/Python/Git 等一站式准备。
  - [AI 编程环境配置与增强工具集]({{< relref "ai-programming/env-and-tools" >}})：环境变量、供应商切换、常用增强工具。
  - [ZCF 零配置 Claude Code]({{< relref "ai-programming/zcf" >}})：想少折腾配置，走“零配置上手”通道。
  - [CC-Switch 可视化配置]({{< relref "ai-programming/cc-switch" >}})：用 UI 管理 MCP/Skills/Prompts 与多供应商配置。
  - [CLI 代理 API（CPA）]({{< relref "ai-programming/cpa" >}})：把订阅统一为 API，多端复用（IDE/CLI）。

- **把“对话”变成“可交付”（工作流与协作）**
  - [Coding Agent 协作实践]({{< relref "ai-programming/ccg-workflow" >}})：多 Agent 分工协作，把任务闭环做出来。
  - [CCG 多模型协作开发]({{< relref "ai-programming/ccg" >}})：同一项目里按任务类型切换不同模型。
  - [Agent 工作流]({{< relref "agent/workflow" >}})：如何把规则、工具、子 Agent 编排成可执行流程。

- **理解智能体关键模块（Rules / Skills / MCP / Hooks / Subagents）**
  - [Rules（底线与约束）]({{< relref "agent/rules" >}})：告诉 AI 什么永远要遵守、什么永远禁止。
  - [Skills（SOP 与流程）]({{< relref "agent/skills" >}})：把“怎么做”固化成可复用流程。
  - [MCP（让 AI 能读文件/跑命令/调接口）]({{< relref "agent/mcp" >}})：把 AI 接入现实工具能力。
  - [Hooks（关键节点自动守卫）]({{< relref "agent/hooks" >}})：在提交、格式化等环节自动检查与兜底。
  - [Subagents（角色与权限隔离）]({{< relref "agent/subagents" >}})：把不同角色分开，提高并行与安全性。
  - [Commands（显式入口）]({{< relref "agent/commands" >}})：给常用动作一个固定“指令入口”。
  - [Output styles（输出模板）]({{< relref "agent/output-styles" >}})：让输出更统一、可复用（报告/清单/规范等）。

- **新手端到端路径（按顺序跑通一次闭环）**
  - [新手端到端项目实战路径]({{< relref "project-practice/practices-two" >}})：从选型到做完第一个小项目，把整条链路串起来。

- **项目级最佳实践 / 可复用 SOP**
  - [Claude Code 最佳实践]({{< relref "project-practice/best-practices" >}})：Plan Mode、验证标准、上下文管理等项目级打法。
  - [Everything Claude Code 总览]({{< relref "project-practice/everything-claude-code" >}})：一套生产级配置集合，适合长期打项目。

- **控成本（少花钱也能稳定产出）**
  - [AI 编程省钱之道]({{< relref "ai-programming/ai-coding-save-money" >}})：免费额度、Token 优化与多端复用策略。

- **补基础教程与资源**
  - [AI 学习路线与资料]({{< relref "tutorials/ai-learning-guide" >}})：系统学习与补基础的入口。
  - [GitHub 周边工具速查]({{< relref "tutorials/github-extensions" >}})：加速、仓库阅读与效率工具。
  - [Awesome LLM Apps]({{< relref "tutorials/awesome-llm-apps" >}})：优秀应用与灵感库，找现成轮子。

- **开源与社区资源**
  - [Awesome OpenClaw]({{< relref "open-source-community/awesome-openclaw" >}})：开源项目与社区资源索引。

## 🗺️ 栏目地图（精简版）

### 1) [AI 编程（工具与工作方式）]({{< relref "ai-programming/_index" >}})

- [环境配置与增强工具集]({{< relref "ai-programming/env-and-tools" >}})：变量/供应商切换/工具箱。
- [Coding Agent 协作实践]({{< relref "ai-programming/ccg-workflow" >}})：协作闭环与分工。
- [AI CLI 工具横评]({{< relref "ai-programming/code-cli" >}})：命令行编程流派。
- [AI 编程工具汇总]({{< relref "ai-programming/vb-code-tool" >}})：IDE/插件/Agent 对比。

### 2) [大模型（认知与选型）]({{< relref "large-models/_index" >}})

- [2026 年主流大模型盘点]({{< relref "large-models/models-2026" >}})：市场全景与定位。
- [大模型价格]({{< relref "large-models/model-price" >}})：成本估算与预算。
- [LiveBench AI 排行榜]({{< relref "large-models/model-comparison" >}})：能力维度对比。
- [LLM 评测基准与榜单汇总]({{< relref "large-models/Leaderboard" >}})：榜单解读与参考方式。

### 3) [AI 智能体（概念与机制）]({{< relref "agent/_index" >}})

- [Rules]({{< relref "agent/rules" >}})：底线与约束。
- [Skills]({{< relref "agent/skills" >}})：SOP 与流程。
- [MCP]({{< relref "agent/mcp" >}})：接入工具能力。
- [Hooks]({{< relref "agent/hooks" >}})：关键点自动守卫。
- [Subagents]({{< relref "agent/subagents" >}})：角色/权限隔离。
- [Commands]({{< relref "agent/commands" >}})：显式入口。
- [Output styles]({{< relref "agent/output-styles" >}})：输出模板。

### 4) [项目实践（端到端闭环）]({{< relref "project-practice/_index" >}})

- [新手端到端项目实战路径]({{< relref "project-practice/practices-two" >}})：跑通第一次闭环。
- [从一个具体案例开始]({{< relref "project-practice/practices-one" >}})：用小项目练拆解与协作。
- [Claude Code 最佳实践]({{< relref "project-practice/best-practices" >}})：项目级打法。
- [Everything Claude Code 总览]({{< relref "project-practice/everything-claude-code" >}})：生产级配置集合。

### 5) [学习教程（系统学习资源）]({{< relref "tutorials/_index" >}})

- [AI 学习路线与资料]({{< relref "tutorials/ai-learning-guide" >}})：补基础与系统学习。
- [GitHub 周边工具速查]({{< relref "tutorials/github-extensions" >}})：效率工具与加速。
- [Awesome LLM Apps]({{< relref "tutorials/awesome-llm-apps" >}})：应用灵感与轮子。

### 6) [开源和社区（参与与资源）]({{< relref "open-source-community/_index" >}})

- [Awesome OpenClaw]({{< relref "open-source-community/awesome-openclaw" >}})：开源与社区资源索引。

## ⭐ 支持我们

如果这个文档对您有帮助，请考虑给我们的 GitHub 仓库点个 ⭐！您的支持是我们持续改进和添加更多内容的动力。

> [!INFO]
> 🌟 **[在 GitHub 上给我们点赞](https://github.com/rockyflux/ai-guide)** 🌟
> 帮助更多开发者发现这个资源！每个 ⭐ 都很重要！

## 🌍 社区

- [GitHub Issues](https://github.com/rockyflux/ai-guide/issues) – 报告问题或提出建议
- [GitHub Discussions](https://github.com/rockyflux/ai-guide/discussions) – 参与讨论

本指南由社区维护。❤️

想要贡献内容或报告问题？欢迎访问我们的 [GitHub 仓库](https://github.com/rockyflux/ai-guide)！

---
