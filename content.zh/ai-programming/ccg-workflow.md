---
aliases:
  - /workflow/ccg-workflow/
title: 协作工作流选型
weight: 22
bookToc: true
noTocArea: false
bookHidden: false
---

## 怎么选（按目标）

- 复杂需求怕 AI 自由发挥 → **规格驱动**：Spec Kit、OpenSpec、[GSD]({{< relref "workflow/gsd" >}})、cc-sdd、OPSX（见 [CCG]({{< relref "workflow/ccg" >}})）
- 要把经验固化成可复用能力 → **Skills / SOP**：[Superpowers]({{< relref "workflow/superpowers" >}})、Everything Claude Code、BMAD、gstack
- Claude + Codex + Gemini 分工执行 → **[CCG]({{< relref "workflow/ccg" >}})**；同类多模型桥还可看 myclaude / Coder-Codex-Gemini
- 只在 Claude Code 里多智能体并行 → **[OMC]({{< relref "workflow/oh-my-claudecode" >}})**、[Agent Teams]({{< relref "workflow/agent-teams" >}})、wshobson/agents
- 跨客户端统一规范与任务目录 → **[Trellis]({{< relref "workflow/trellis" >}})**
- Issue / 看板派活给多 Agent → vibe-kanban、paperclip、Task Master、ai-dev-tasks
- 还没配好 CLI / 供应商 → 先回 [开发环境准备]({{< relref "ai-programming/dev-start" >}}) 与 [环境增强]({{< relref "ai-programming/env-and-tools" >}})

## 规格驱动 / SDD

把需求写成约束与计划，再执行与验收；适合怕跑偏、要可审计交付。

| 项目 | star | 说明 | 深读 |
| --- | ---: | --- | --- |
| [github/spec-kit](https://github.com/github/spec-kit) | 141k | 快速上手 Spec-Driven Development 的工具包 | [Zread](https://zread.ai/github/spec-kit) |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 71k | 面向 AI 编码助手的规格驱动开发（SDD） | [Zread](https://zread.ai/Fission-AI/OpenSpec) |
| [🔥GSD]({{< relref "workflow/gsd" >}}) | 64k | 元提示 + 上下文工程 + 规格驱动；多运行时 | [Zread](https://zread.ai/gsd-build/get-shit-done) |
| [planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 27k | Claude Code 持久化 Markdown 规划（类 Manus 模式） | [Zread](https://zread.ai/OthmanAdi/planning-with-files) |
| [ouroboros](https://github.com/Q00/ouroboros) | 6.2k | 停止提示式写作，用精确定义驱动实现 | [Zread](https://zread.ai/Q00/ouroboros) |
| [spec-workflow-mcp](https://github.com/Pimzino/spec-workflow-mcp) | 4.3k | MCP + Web 仪表盘的结构化规格工作流 | [Zread](https://zread.ai/Pimzino/spec-workflow-mcp) |
| [claude-code-spec-workflow](https://github.com/Pimzino/claude-code-spec-workflow) | 3.9k | Claude Code：新功能 SDD + 缺陷修复流程 | [Zread](https://zread.ai/Pimzino/claude-code-spec-workflow) |
| [cc-sdd](https://github.com/gotalab/cc-sdd) | 3.7k | 需求 → 设计 → 任务 → 实现的规格驱动系统 | [Zread](https://zread.ai/gotalab/cc-sdd) |

## Skills / SOP 方法论

把「先澄清 → 再设计 → 再实现 → 再审查」固化成 Skills / 角色命令；适合沉淀团队 SOP。

| 项目 | star | 说明 | 深读 |
| --- | ---: | --- | --- |
| [🔥Superpowers]({{< relref "workflow/superpowers" >}}) | 297k | 可组合 Skills + 软件开发方法论，强制澄清与计划后再写码 | [Zread](https://zread.ai/obra/superpowers) |
| [Everything Claude Code](https://github.com/affaan-m/everything-claude-code) | 276k | 生产级 agents / skills / hooks / MCP 编排与优化（仓库亦见 `affaan-m/ECC`） | [Zread](https://zread.ai/affaan-m/everything-claude-code) |
| [gstack](https://github.com/garrytan/gstack) | 136k | Garry Tan 风格：多角色 slash 命令（CEO/EM/发布/文档/QA） | [Zread](https://zread.ai/garrytan/gstack) |
| [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | 54k | 敏捷 AI 驱动开发方法 | [Zread](https://zread.ai/bmad-code-org/BMAD-METHOD) |
| [Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 18k | 上下文工程、多智能体与生产级 Agent Skills | [Zread](https://zread.ai/muratcankoylan/Agent-Skills-for-Context-Engineering) |
| [claude-code-infrastructure-showcase](https://github.com/diet103/claude-code-infrastructure-showcase) | 10k | skill 自动激活、hooks 与 agents 的基础设施示例 | [Zread](https://zread.ai/diet103/claude-code-infrastructure-showcase) |
| [claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows) | 3.9k | 重度使用者沉淀的最佳工作流与配置 | [Zread](https://zread.ai/OneRedOak/claude-code-workflows) |
| [GuDaStudio/skills](https://github.com/GuDaStudio/skills) | 2.0k | Agent Skills 能力库；多模型并行编排 | [Zread](https://zread.ai/GuDaStudio/skills) |

## 多模型 / 多 Agent 编排

把任务拆给多个模型或子 Agent；适合单 Agent 能力/成本不够、要并行分工。

| 项目 | star | 说明 | 深读 |
| --- | ---: | --- | --- |
| [agency-agents](https://github.com/msitarzewski/agency-agents) | 158k | 完整 AI agency 角色包：人格、流程与交付物 | [Zread](https://zread.ai/msitarzewski/agency-agents) |
| [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) | 70k | OpenCode / 开放代理的异步子代理与精选工具（原 oh-my-opencode） | [Zread](https://zread.ai/code-yeongyu/oh-my-openagent) |
| [wshobson/agents](https://github.com/wshobson/agents) | 40k | Claude Code 智能自动化与多智能体编排 | [Zread](https://zread.ai/wshobson/agents) |
| [🔥OMC]({{< relref "workflow/oh-my-claudecode" >}}) | 40k | Claude Code：Autopilot / Swarm / Pipeline 等模式 | [Zread](https://zread.ai/Yeachan-Heo/oh-my-claudecode) |
| [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | 33k | Codex CLI：hooks、智能体团队、HUD（OMC 姊妹） | [Zread](https://zread.ai/Yeachan-Heo/oh-my-codex) |
| [Gas Town](https://github.com/gastownhall/gastown) | 18k | 多智能体工作区管理器 | [Zread](https://zread.ai/gastownhall/gastown) |
| [🔥Trellis]({{< relref "workflow/trellis" >}}) | 15k | `.trellis/` 统一规格与任务，多客户端一套结构 | [Zread](https://zread.ai/mindfold-ai/Trellis) |
| [🔥CCG]({{< relref "workflow/ccg" >}}) | 5.9k | Claude 编排 + Codex/Gemini 等后端；智能路由与 17+ 命令 | [Zread](https://zread.ai/fengshao1227/ccg-workflow) |
| [myclaude](https://github.com/stellarlinkco/myclaude) | 2.8k | 多智能体编排；Claude / Codex / Gemini / OpenCode | [Zread](https://zread.ai/stellarlinkco/myclaude) |
| [cccc](https://github.com/ChesterRa/cccc) | 1.3k | 轻量多 Agent CLI：协作内核 + 外部工具组合 | [Zread](https://zread.ai/ChesterRa/cccc) |
| [Hephaestus](https://github.com/Ido-Levi/Hephaestus) | 1.2k | 半结构化：工作流随发现自构建，非全预规划 | [Zread](https://zread.ai/Ido-Levi/Hephaestus) |

Claude Code **原生**多队友并行见 [Agent Teams（蜂群）]({{< relref "workflow/agent-teams" >}})（非第三方仓库，实验性能力）。

## 任务看板 / 工程闭环

看板、任务拆解、可视化编排；适合「派活 → 执行 → 审查」要看得见进度。

| 项目 | star | 说明 | 深读 |
| --- | ---: | --- | --- |
| [paperclip](https://github.com/paperclipai/paperclip) | 99k | 面向零人工公司的开源编排系统 | [Zread](https://zread.ai/paperclipai/paperclip) |
| [vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 28k | 让 Claude Code / Codex 等编码代理按看板提效 | [Zread](https://zread.ai/BloopAI/vibe-kanban) |
| [Task Master](https://github.com/eyaltoledano/claude-task-master) | 28k | 可嵌入 Cursor / Lovable / Windsurf 等的 AI 任务管理 | [Zread](https://zread.ai/eyaltoledano/claude-task-master) |
| [ai-dev-tasks](https://github.com/snarktank/ai-dev-tasks) | 7.8k | 简洁的 AI 开发智能体任务管理 | [Zread](https://zread.ai/snarktank/ai-dev-tasks) |
| [cc-wf-studio](https://github.com/breaking-brake/cc-wf-studio) | 5.4k | 可视化工作流编辑：自然语言编辑、导出并运行 | [Zread](https://zread.ai/breaking-brake/cc-wf-studio) |

多 Agent **桌面工作区**（Orca、Multica、Buzz 等）属环境增强，见 [桌面：多 Agent 工作区]({{< relref "ai-programming/env-and-tools" >}})。

## 站内深读

| 专页 | 何时点开 |
| --- | --- |
| [CCG：多模型协作]({{< relref "workflow/ccg" >}}) | 要装命令、看阶段流、对接 OPSX / Agent Teams |
| [GSD：规格驱动]({{< relref "workflow/gsd" >}}) | 要缓解长对话 context rot、规格→执行分层 |
| [Superpowers]({{< relref "workflow/superpowers" >}}) | 要 Skills 驱动的完整开发 SOP |
| [OMC]({{< relref "workflow/oh-my-claudecode" >}}) | 要 Claude Code 上的多智能体模式 |
| [Agent Teams]({{< relref "workflow/agent-teams" >}}) | 要用原生蜂群并行，而非第三方框架 |
| [Trellis]({{< relref "workflow/trellis" >}}) | 要跨 Cursor / Claude / Codex 等统一仓库内规范 |
