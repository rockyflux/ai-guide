---
title: 全站地图
linkTitle: 全站地图
bookHidden: true
bookToc: true
translationKey: site-map
---

按阶段直达站内主要页面。日常入口仍建议从 [首页]({{< relref "/" >}}) 的五条主线进入。

## 0) 全流程总览（先串线，再钻细节）

- [全流程总览]({{< relref "ai-programming/full-pipeline" >}})：选型 → 买 API → 网关 → cc-switch → Agent → 上下文与多轮工具调用（核心）。

## 1) 选模型 / 选引擎（能力 × 成本 × 适配任务）

- [大模型价格]({{< relref "ai-programming/model-price" >}})：用 Token 口径做成本估算与预算。
- [LiveBench AI 排行榜]({{< relref "ai-programming/model-comparison" >}})：参考推理/编程/数学等维度的对比。
- [评测基准与榜单]({{< relref "ai-programming/Leaderboard" >}})：理解榜单来源与正确用法。

## 2) 选工具与订阅（IDE / CLI / 套餐 / 办公 Agent）

- [AI 办公桌面端]({{< relref "ai-products/ai-office-desktop" >}})：WorkBuddy、DuMate、千问办公等对比。
- [AI 对话工具]({{< relref "ai-products/ai-chat-tools" >}})：ChatGPT、豆包、Kimi、DeepSeek 等。
- [AI 智能体平台]({{< relref "ai-products/ai-super-agent" >}})：Manus、AutoGLM、Genspark、天工等。
- [AI 绘图工具]({{< relref "ai-products/ai-image-tools" >}})：即梦、豆包、Midjourney、FLUX 等。
- [AI 视频工具]({{< relref "ai-products/ai-video-tools" >}})：可灵、即梦、海螺、Sora、Runway 等。
- [编程工具对比]({{< relref "ai-programming/vb-code-tool" >}})：IDE/插件/Agent 工具怎么选。
- [编程 Agent 横评]({{< relref "ai-programming/code-cli" >}})：Claude Code / Codex CLI / Gemini CLI 等适用场景对比。
- [Coding Plan 与渠道]({{< relref "ai-programming/coding-plan" >}})：套餐怎么选更划算。
- [AI 大模型 API 聚合平台]({{< relref "ai-programming/api-aggregation-platforms" >}})：第三方代理 / 聚合怎么选。
- [省钱与 Token 治理]({{< relref "ai-programming/ai-coding-save-money" >}})：同样做事、尽量少耗 Token。
- 选完即上手：[Cursor]({{< relref "project-practice/cursor" >}}) · [Codex]({{< relref "project-practice/codex" >}}) · [Kiro]({{< relref "project-practice/kiro-practice" >}})

## 3) 搭环境 & 接模型（已并入 AI 编程选型）

- [开发环境准备]({{< relref "ai-programming/dev-start" >}})：PowerShell 7、VS Code、Node/Python/Git 等一站式准备。
- [环境增强工具集]({{< relref "ai-programming/env-and-tools" >}})：环境变量、供应商切换、常用增强工具。
- [卸载与清理]({{< relref "ai-programming/cleanup-uninstall" >}})：缓存、开发产物与卸载工具。
- [WSL 开发环境]({{< relref "project-practice/wsl" >}})：Windows 下 Linux + Claude Code（在项目实践栏）。
- 以下专页侧栏隐藏，可经增强工具集或直链访问：[ZCF]({{< relref "setup/zcf" >}}) · [CC-Switch]({{< relref "setup/cc-switch" >}}) · [CPA]({{< relref "setup/cpa" >}})。

## 4) 工作流选型（已并入 AI 编程选型）

- [协作工作流选型]({{< relref "ai-programming/ccg-workflow" >}})：多 Agent / SDD / Skills 协作范式选型（主入口）。
- 以下专页侧栏隐藏，可经协作工作流选型或直链访问：[CCG]({{< relref "workflow/ccg" >}}) · [GSD]({{< relref "workflow/gsd" >}}) · [Superpowers]({{< relref "workflow/superpowers" >}}) · [OMC]({{< relref "workflow/oh-my-claudecode" >}}) · [Trellis]({{< relref "workflow/trellis" >}})。

## 5) 智能体工程化（把能力模块化、可复用、可守卫）

- [Rules]({{< relref "agent/rules" >}})：底线与约束。
- [Skills]({{< relref "agent/skills" >}})：把 SOP 固化为可复用流程。
- [MCP]({{< relref "agent/mcp" >}})：把 AI 接入现实工具能力。
- [Hooks]({{< relref "agent/hooks" >}})：在关键节点自动守卫与兜底。
- [Subagents]({{< relref "agent/subagents" >}})：角色与权限隔离。
- [Commands]({{< relref "agent/commands" >}})：给常用动作一个固定入口。

## 6) 项目级最佳实践 / 可复用 SOP

- [新手端到端项目实战路径]({{< relref "project-practice/practices-two" >}})：把站内内容按端到端顺序串成路线图。
- [Cursor 实战上手指南（10 分钟）]({{< relref "project-practice/cursor" >}})：快速跑通配置、订阅与日常用法。
- [Codex 实战上手指南]({{< relref "project-practice/codex" >}})：CLI / 扩展 / Web 与 Skills、MCP 衔接。
- [从一个具体案例开始]({{< relref "project-practice/practices-one" >}})：用小项目练拆解、验证与协作闭环。
- [Claude Code 最佳实践]({{< relref "project-practice/best-practices" >}})：Plan Mode、验证标准、上下文管理等。
- [Everything Claude Code 总览]({{< relref "project-practice/everything-claude-code" >}})：生产级配置集合。
- [从需求到设计原型]({{< relref "project-practice/requirements-to-design-prototype" >}})：从模糊构思到高保真原型。
- [Kiro 实战]({{< relref "project-practice/kiro-practice" >}})：Spec-Driven Agent IDE 两套可照做流程。

## 7) 资源与补基础

- [AI 学习路线与资料]({{< relref "tutorials/ai-learning-guide" >}})：系统学习与补基础的入口。
- [AI 资源与工具指南]({{< relref "tutorials/ai-resources-guide" >}})：站内精选 + 常用社区/工具/资讯。
- [菜鸟教程 AI / 智能开发]({{< relref "tutorials/runoob-online-tutorials" >}})：RUNOOB 中文 AI 教程速查表。
- [GitHub 周边工具速查]({{< relref "tutorials/github-extensions" >}})：加速、仓库阅读与效率工具。
- [Awesome OpenClaw 使用案例]({{< relref "ai-products/awesome-openclaw" >}})：OpenClaw 生态分支速览（亦见 **[AI 应用选型]({{< relref "ai-products/_index" >}})**）。
