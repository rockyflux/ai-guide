---
title: AI 编程指南
type: docs
translationKey: homepage
bookToc: false
noTocArea: true
---

<br>
欢迎来到《AI 编程指南》。这里按「任务」组织内容：选模型与工具 → 搭环境接模型 → 协作工作流（多工具编排） → 智能体工程化 → 用项目实践跑通闭环。

## 先从这里开始（4 条主线）

- **[AI 编程（工具与工作方式）]({{< relref "ai-programming/_index" >}})**：从选型、环境到方法论，目标是「稳定产出代码」。
- **[协作与工作流]({{< relref "workflow/_index" >}})**：CCG、GSD、Superpowers、Trellis、oh-my-claudecode 等多模型 / 多 Agent 编排与工程闭环工具集。
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

- **4) 把“对话”变成“可交付”（协作工作流 + Agent 编排）**
  - [协作与工作流（栏目入口）]({{< relref "workflow/_index" >}})：多模型协作、规格驱动与工具链编排的一站式索引。
  - [工作流项目集]({{< relref "workflow/ccg-workflow" >}})：围绕 Claude Code / Codex / Gemini CLI 等构建的协作类项目列表与选型提示。
  - [CCG 多模型协作开发]({{< relref "workflow/ccg" >}})：Claude + Codex + Gemini 路由与命令集。
  - [GSD（Get Shit Done）]({{< relref "workflow/gsd" >}})：元提示、上下文工程与规格驱动，缓解长对话中的上下文腐烂。
  - [Superpowers]({{< relref "workflow/superpowers" >}})：基于可组合 Skills 的完整软件开发工作流。
  - [oh-my-claudecode（OMC）]({{< relref "workflow/oh-my-claudecode" >}})：面向 Claude Code 的多智能体编排与预设工作流。
  - [Trellis]({{< relref "workflow/trellis" >}})：跨 Claude Code、Cursor、Codex、Kiro 等客户端的统一规范与生成式接入。
  - [Agent 工作流]({{< relref "agent/workflow" >}})：把规则、工具、子 Agent 在项目内编排成可执行流程。

- **5) 智能体工程化（把能力模块化、可复用、可守卫）**
  - [Rules]({{< relref "agent/rules" >}})：底线与约束（什么必须遵守 / 什么永远禁止）。
  - [Skills]({{< relref "agent/skills" >}})：把 SOP 固化为可复用流程。
  - [MCP]({{< relref "agent/mcp" >}})：把 AI 接入现实工具能力（读文件/跑命令/调接口）。
  - [Hooks]({{< relref "agent/hooks" >}})：在提交、格式化等关键节点自动守卫与兜底。
  - [Subagents]({{< relref "agent/subagents" >}})：角色与权限隔离，提高并行与安全性。
  - [Commands]({{< relref "agent/commands" >}})：给常用动作一个固定入口。

- **6) 项目级最佳实践 / 可复用 SOP**
  - [新手端到端项目实战路径]({{< relref "project-practice/practices-two" >}})：把站内内容按端到端顺序串成路线图。
  - [Cursor 实战上手指南（10 分钟）]({{< relref "project-practice/cursor" >}})：快速跑通配置、订阅与日常用法。
  - [Codex 实战上手指南]({{< relref "project-practice/codex" >}})：CLI / 扩展 / Web 与 Skills、MCP 衔接。
  - [从一个具体案例开始]({{< relref "project-practice/practices-one" >}})：用小项目练拆解、验证与协作闭环。
  - [Claude Code 最佳实践]({{< relref "project-practice/best-practices" >}})：Plan Mode、验证标准、上下文管理等项目级打法。
  - [Everything Claude Code 总览]({{< relref "project-practice/everything-claude-code" >}})：生产级配置集合，适合长期打项目。
  - [从需求到设计原型]({{< relref "project-practice/requirements-to-design-prototype" >}})：从模糊构思到高保真原型与可执行代码的闭环实践。
  - [Google Stitch × Figma × MCP 实践]({{< relref "project-practice/google-stitch-figma-mcp" >}})：设计稿、原型与 MCP 工具链联动。
  - [其他平台实践速览]({{< relref "project-practice/other-platform-practices" >}})：除主线工具外的补充平台与用法入口。
  - [豆包 AI 绘图闭环小练习]({{< relref "project-practice/ai-drawing-practice" >}})：从提示词到无水印成品图的一次性练习。
  - [Kiro 实战：旧项目改 bug / 新项目新需求]({{< relref "project-practice/kiro-practice" >}})：Spec-Driven Agent IDE 两套可照做流程。

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
