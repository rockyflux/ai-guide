---
title: AI 编程指南
type: docs
translationKey: homepage
bookToc: false
noTocArea: true
---

&nbsp;
欢迎来到《AI 编程指南》。这里按「任务」组织内容：选模型与工具 → 搭环境接模型 → 建立协作工作流 → 用项目实践跑通闭环。

## 先从这里开始（3 条主线）

- **[AI 编程（工具与工作方式）]({{< relref "ai-programming/_index" >}})**：从选型、环境到协作实践，目标是「稳定产出代码」。
- **[AI 智能体（机制与工程化）]({{< relref "agent/_index" >}})**：把 Rules / Skills / MCP / Hooks / Subagents 串成可执行系统，让 AI 能在项目里持续干活。
- **[项目实践（端到端闭环）]({{< relref "project-practice/_index" >}})**：用真实案例与可复用 SOP，把“会用工具”升级为“能交付成果”。

## 我现在要做什么？（按阶段直达）

- **1) 选模型 / 选引擎（能力 × 成本 × 适配任务）**
  - [AI 编程模型选型]({{< relref "ai-programming/models" >}})：面向编程任务挑模型，知道什么时候用“重模型/轻模型”。
  - [2026 年主流大模型盘点]({{< relref "large-models/models-2026" >}})：快速建立市场全景与模型定位。
  - [大模型价格]({{< relref "large-models/model-price" >}})：用 Token 口径做成本估算与预算。
  - [LiveBench AI 排行榜]({{< relref "large-models/model-comparison" >}})：参考推理/编程/数学等维度的对比。
  - [LLM 评测基准与榜单汇总]({{< relref "large-models/Leaderboard" >}})：理解榜单来源与正确用法。

- **2) 选工具与订阅（IDE / CLI / 套餐）**
  - [AI 编程工具汇总]({{< relref "ai-programming/vb-code-tool" >}})：IDE/插件/Agent 工具怎么选（Cursor、Aider、Codex 等）。
  - [AI CLI 工具横评]({{< relref "ai-programming/code-cli" >}})：Claude Code / Codex CLI / Gemini CLI 等适用场景对比。
  - [AI Coding Plan 订阅选型]({{< relref "ai-programming/coding-plan" >}})：套餐怎么选更划算、怎么买更省心。


- **3) 搭环境 & 接模型（尽量一次配置到位）**
  - [开发环境准备]({{< relref "ai-programming/dev-start" >}})：PowerShell 7、VS Code、Node/Python/Git 等一站式准备。
  - [AI 编程环境配置与增强工具集]({{< relref "ai-programming/env-and-tools" >}})：环境变量、供应商切换、常用增强工具。
  - [ZCF 零配置 Claude Code]({{< relref "ai-programming/zcf" >}})：少折腾配置的“快速上手”通道。
  - [CC-Switch 可视化配置]({{< relref "ai-programming/cc-switch" >}})：用 UI 管理 MCP/Skills/Prompts 与多供应商配置。
  - [CLI 代理 API（CPA）]({{< relref "ai-programming/cpa" >}})：把订阅统一为 API，多端复用（IDE/CLI）。

- **4) 把“对话”变成“可交付”（工作流与协作）**
  - [Coding Agent 协作实践]({{< relref "ai-programming/ccg-workflow" >}})：多 Agent 分工协作，把任务闭环做出来。
  - [CCG 多模型协作开发]({{< relref "ai-programming/ccg" >}})：同一项目里按任务类型切换不同模型。
  - [Agent 工作流]({{< relref "agent/workflow" >}})：把规则、工具、子 Agent 编排成可执行流程。

- **5) 智能体工程化（把能力模块化、可复用、可守卫）**
  - [Rules]({{< relref "agent/rules" >}})：底线与约束（什么必须遵守 / 什么永远禁止）。
  - [Skills]({{< relref "agent/skills" >}})：把 SOP 固化为可复用流程。
  - [MCP]({{< relref "agent/mcp" >}})：把 AI 接入现实工具能力（读文件/跑命令/调接口）。
  - [Hooks]({{< relref "agent/hooks" >}})：在提交、格式化等关键节点自动守卫与兜底。
  - [Subagents]({{< relref "agent/subagents" >}})：角色与权限隔离，提高并行与安全性。
  - [Commands]({{< relref "agent/commands" >}})：给常用动作一个固定入口。
  - [Output styles]({{< relref "agent/output-styles" >}})：让输出结构化、统一、可复用。

- **6) 项目级最佳实践 / 可复用 SOP**
  - [从一个具体案例开始]({{< relref "project-practice/practices-one" >}})：用小项目练拆解、验证与协作闭环。
  - [Claude Code 最佳实践]({{< relref "project-practice/best-practices" >}})：Plan Mode、验证标准、上下文管理等项目级打法。
  - [Everything Claude Code 总览]({{< relref "project-practice/everything-claude-code" >}})：生产级配置集合，适合长期打项目。
  - [从需求到设计原型]({{< relref "project-practice/requirements-to-design-prototype" >}})：从模糊构思到高保真原型与可执行代码的闭环实践。
  - [豆包 AI 绘图闭环小练习]({{< relref "project-practice/ai-drawing-practice" >}})：从提示词到无水印成品图的一次性练习。

- **7) 资源与控成本（补短板 + 少花钱也能稳定产出）**
  - [AI 编程省钱之道]({{< relref "ai-programming/ai-coding-save-money" >}})：免费额度、Token 优化与多端复用策略。
  - [AI 资源与工具指南]({{< relref "ai-programming/ai-resources-guide" >}})：站内精选入口 + 常用社区/工具/资讯汇总（持续更新）。
  - [AI 学习路线与资料]({{< relref "tutorials/ai-learning-guide" >}})：系统学习与补基础的入口。
  - [GitHub 周边工具速查]({{< relref "tutorials/github-extensions" >}})：加速、仓库阅读与效率工具。
  - [Awesome LLM Apps]({{< relref "tutorials/awesome-llm-apps" >}})：优秀应用与灵感库，找现成轮子。
  - [Awesome OpenClaw 使用案例]({{< relref "open-source-community/awesome-openclaw" >}})：OpenClaw 生态分支速览与资源入口。

## 支持我们

如果这个文档对您有帮助，请考虑给我们的 GitHub 仓库点个 Star。您的支持是我们持续改进和添加更多内容的动力。

> [!INFO]
> **[在 GitHub 上给我们点赞](https://github.com/rockyflux/ai-guide)**
> 帮助更多开发者发现这个资源！每个 Star 都很重要！

## 社区

- [GitHub Issues](https://github.com/rockyflux/ai-guide/issues) – 报告问题或提出建议
- [GitHub Discussions](https://github.com/rockyflux/ai-guide/discussions) – 参与讨论

本指南由社区维护。

想要贡献内容或报告问题？欢迎访问我们的 [GitHub 仓库](https://github.com/rockyflux/ai-guide)！

---
