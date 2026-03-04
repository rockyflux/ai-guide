---
title: 新手端到端项目实战路径
weight: 20
bookToc: false
noTocArea: true
bookCollapseSection: false
bookFlatSection: true
---

## 新手端到端项目实战路径

这一篇会把「做完第一个小项目」相关的所有文章，串成一条尽量不走弯路的完整路径：  
从选模型 / 配环境 → 建立工作流 → 练手小项目 → 完整端到端纪实 → 进阶方法论。

下面每一节都对应若干具体文章链接，你可以按顺序一路看下来，也可以根据自己当前阶段「按需跳读」。

### 0\. 总导航：AI 编程阅读指南

- [AI 编程阅读指南]({{< relref "ai-programming/guide" >}}) — 整个 AI 编程板块的总索引。你也可以理解为：下面各小节，就是在这篇索引的基础上，按「端到端项目」的视角重新编排了一次。

### 1\. 起步前：选模型和工具

在真正开始做项目之前，先解决一个前置问题：「我用什么模型 / 工具栈」：

- [AI 编程模型选型]({{< relref "ai-programming/models" >}}) — 不同模型（Claude、Gemini、GPT、国产模型等）的能力、价格与适用场景。
- [AI Coding Plan 订阅选型]({{< relref "ai-programming/coding-plan" >}}) — 国内 / 海外 Coding Plan 与中转套餐对照，帮你决定怎么买最划算。
- [AI 产品推荐]({{< relref "large-models/ai-product" >}}) — 桌面 Agent、API 客户端、翻译与辅助工具选型。
- [AI 编程省钱之道]({{< relref "ai-programming/ai-coding-save-money" >}}) — 最大化免费额度、控制 Token、合理分配「重模型 / 轻模型」。
- [AI 编程工具汇总]({{< relref "ai-programming/vb-code-tool" >}}) — IDE / 插件 / Agent 工具横向对比（Cursor、Claude Code、OpenCode 等）。
- [AI CLI 工具横评]({{< relref "ai-programming/code-cli" >}}) — OpenCode、Claude Code、Codex CLI、Gemini CLI 等主流 CLI 工具的优劣与适用场景。

### 2\. 搭建战斗环境：开发环境与模型配置

确定好「用什么」之后，下一步就是搭环境、接模型，让命令行与 IDE 都能顺利开工：

- [GitHub 周边工具速查]({{< relref "tutorials/github-extensions" >}}) — GitHub 加速、仓库阅读、周边工具准备，为后续拉代码、看项目做准备。
- [开发环境准备]({{< relref "ai-programming/dev-start" >}}) — PowerShell 7、VS Code、Node.js、Python、Git 及常用辅助工具（代理、临时邮箱等）一站式安装。
- [AI 编程环境配置与增强工具集]({{< relref "ai-programming/env-and-tools" >}}) — 环境变量、供应商切换、常见 CLI 与增强工具（Any Code、CC Switch 等）。
- [ZCF 零配置 Claude Code]({{< relref "ai-programming/zcf" >}}) — 如果你想「不用折腾配置就上手 Claude Code / Codex」，可以从这里走快速通道。
- [CC-Switch 可视化配置]({{< relref "ai-programming/cc-switch" >}}) — 用图形界面管理 Claude Code / Codex / OpenCode 的供应商配置、MCP 服务器、Skills 与系统提示。
- [CLI 代理 API（CPA）]({{< relref "ai-programming/cpa" >}}) — 把订阅统一变成 API，给 Cursor / Cline / OpenCode / Claude Code 等多端复用。

### 3\. 建立 AI 协作工作流：从能用到好用

环境都通了之后，下一步就是设计一套「让 AI 真正变成团队成员」的工作流：

- [Coding Agent 协作实践]({{< relref "ai-programming/ccg-workflow" >}}) — 如何让多个 Coding Agent（不同角色的 AI）协同完成一个功能，形成任务闭环。
- [CCG 多模型协作开发]({{< relref "ai-programming/ccg" >}}) — Claude + Codex + Gemini 等多模型编排，在一个项目里按任务类型自动切模型。
- [Claude Code 最佳实践]({{< relref "project-practice/best-practices" >}}) — 特别针对 Claude Code 的使用模式：Plan Mode、验证标准、上下文管理、子 Agent 与会话管理。
- [Everything Claude Code 总览]({{< relref "project-practice/everything-claude-code" >}}) — 一整套生产级 Claude Code 插件、技能、Hooks、规则配置，适合准备长期用 Claude Code 打项目的同学。

这一阶段的目标是：**形成一套「可复用」的 AI 协作习惯，而不是每次都临时瞎试。**

### 4\. 上手项目：从练手到完整端到端

前面准备工作都就绪之后，就可以真正开始做项目了，从「小练手」到「完整端到端」：

- [项目实践栏目说明]({{< relref "project-practice/_index" >}}) — 说明整个「项目实践」栏目的定位：真实案例、可复用 SOP、从 0 到 1 的完整过程。
- [项目实践：从一个具体案例开始]({{< relref "project-practice/practices-one" >}}) — 用一个相对可控的小项目，练习需求拆解、工作流设计、如何把任务拆给 AI。
- **本篇：个人开发者用 AI 做完第一个小项目（完整纪实）**  
  这一篇会按「真实开发日志」的方式，记录一个端到端项目的完整过程，主要包括：
  - 从想法到需求文档：如何让 AI 帮你补齐、澄清与拆解需求
  - 选模型与工具：什么时候用 Claude Code / Cursor / OpenCode / CLI 工具
  - 设计工作流：如何把一个项目拆成可交给 AI 的任务批次
  - 编码与调试：如何让 AI 主动跑测试、读错误日志、做重构
  - 部署与交付：项目上线前需要哪些「最后一公里」工作
  - 复盘与模板化：如何把这次经验沉淀成 SOP，为下一个项目节省时间

随着内容补充，这一节会逐步加入更细的章节与截图，让你可以「照着一条线做完第一个完整项目」。

### 5\. 项目之后：进阶方法论与社区生态

完成第一个端到端项目之后，不用急着立刻上更大项目，可以先把这次经验抽象成「自己的打法」：

- [Vibe Coding 指南]({{< relref "ai-programming/vibe-coding" >}}) — 以「规划驱动 + AI 结对编程」为核心的方法论，帮你形成稳定的项目节奏。
- [Everything Claude Code（进阶视角）]({{< relref "project-practice/everything-claude-code" >}}) — 从项目实战回头看这套配置仓库，挑真正适合自己团队 / 个人习惯的部分落地。
- [AI 编程中文社区与课程]({{< relref "ai-programming/ai-resources-guide" >}}) — 找到同路人，了解 Claude Code、Cursor、OpenCode 等相关中文资源与课程。
- [上下文设计哲学]({{< relref "large-models/context-scarcity-rag-memory-skills" >}}) — 从更高一层理解「上下文稀缺性、RAG、Memory、Skills」这些设计理念，指导你下一步做更复杂的系统（Agent、知识库、自动化工作流等）。

最终目标是：从「能在 AI 帮助下完成一个小项目」，升级为「有一套自己的项目方法论和工具栈，能稳定复用在多个项目上」。

