---
title: 工作流项目集
weight: 20
bookToc: false
noTocArea: true
---


## 1\. 介绍说明

下面的项目列表围绕 Claude Code、Codex、Gemini CLI 等工具构建的多模型协作开发工具集。这些项目通过不同的架构设计和功能实现，探索了多 Agent 协作开发、工程闭环任务管理以及工具链编排等场景。

| 场景 | 说明 |
| --- | --- |
| 多 Agent 协作开发 | 需要借助 Coding Agent 实现项目开发，又避免单一 Agent 性能不足或成本消耗太高 |
| 工程闭环任务 | 需要“架构 + 实现 + 审查 + 修复 + 文档”等闭环的工程任务 |
| 工具链编排 | 需要对工具链进行编排：终端 CI、协作配置（MCP/Skills 等）、各 Agent 的 Prompt 与行为准则等 |

## 2\. 参考项目

| 序号 | 项目名称 | 地址 | star 数 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | anomalyco/opencode | [GitHub](https://github.com/anomalyco/opencode) | 124000 | 开源编码代理。 |
| 2 | obra/superpowers | [GitHub](https://github.com/obra/superpowers) | 94100 | 一个真正有效的智能体技能框架与软件开发方法论。 |
| 3 | affaan-m/everything-claude-code | [GitHub](https://github.com/affaan-m/everything-claude-code) | 83800 | 面向 Claude Code、Codex、Opencode、Cursor 等的智能体编排与性能优化系统，涵盖 skills、memory、安全与研究优先开发。 |
| 4 | github/spec-kit | [GitHub](https://github.com/github/spec-kit) | 78000 | 帮助你快速开始规格驱动开发（Spec-Driven Development）的工具包。 |
| 5 | msitarzewski/agency-agents | [GitHub](https://github.com/msitarzewski/agency-agents) | 52600 | 把完整 AI agency 带到你手边：从前端专家到社区运营、从创意注入到现实校验，每个智能体都有明确人格、流程与交付物。 |
| 6 | ComposioHQ/awesome-claude-skills | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills) | 45500 | 精选的 Claude Skills、资源与工具清单，用于定制 Claude AI 工作流。 |
| 7 | bmad-code-org/BMAD-METHOD | [GitHub](https://github.com/bmad-code-org/BMAD-METHOD) | 41200 | 敏捷 AI 驱动开发的突破性方法。 |
| 8 | code-yeongyu/oh-my-openagent | [GitHub](https://github.com/code-yeongyu/oh-my-openagent) | 41000 | OMO：最佳智能体运行框架（原 oh-my-opencode），为 OpenCode / 开放式编码代理提供异步子代理、精选工具与更强的代理体验。 |
| 9 | gsd-build/get-shit-done | [GitHub](https://github.com/gsd-build/get-shit-done) | 33600 | 由 TACHES 打造的轻量而强大的元提示、上下文工程与规格驱动开发系统，适用于 Claude Code。 |
| 10 | Fission-AI/OpenSpec | [GitHub](https://github.com/Fission-AI/OpenSpec) | 31900 | 面向 AI 编码助手的规格驱动开发（SDD）。 |
| 11 | wshobson/agents | [GitHub](https://github.com/wshobson/agents) | 31600 | 面向 Claude Code 的智能自动化与多智能体编排。 |
| 12 | paperclipai/paperclip | [GitHub](https://github.com/paperclipai/paperclip) | 28500 | 面向零人工公司的开源编排系统。 |
| 13 | eyaltoledano/claude-task-master | [GitHub](https://github.com/eyaltoledano/claude-task-master) | 26000 | 可嵌入 Cursor、Lovable、Windsurf、Roo 等环境的 AI 任务管理系统。 |
| 14 | BloopAI/vibe-kanban | [GitHub](https://github.com/BloopAI/vibe-kanban) | 23400 | 让 Claude Code、Codex 或任何编码代理发挥 10 倍效率。 |
| 15 | garrytan/gstack | [GitHub](https://github.com/garrytan/gstack) | 22100 | 复现 Garry Tan 的 Claude Code 配置：10 个带强观点的工具，分别扮演 CEO、工程经理、发布经理、文档工程师和 QA。 |
| 16 | charmbracelet/crush | [GitHub](https://github.com/charmbracelet/crush) | 21600 | 为终端打造的华丽 AI 编码代理。 |
| 17 | steveyegge/beads | [GitHub](https://github.com/steveyegge/beads) | 19300 | 为编码代理提供记忆增强。 |
| 18 | OthmanAdi/planning-with-files | [GitHub](https://github.com/OthmanAdi/planning-with-files) | 16400 | 在 Claude Code 中实现类 Manus 的持久化 Markdown 规划技能，即支撑那次 20 亿美元收购背后的工作流模式。 |
| 19 | muratcankoylan/Agent-Skills-for-Context-Engineering | [GitHub](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 14000 | 面向上下文工程、多智能体架构与生产级智能体系统的综合 Agent Skills 集合。 |
| 20 | steveyegge/gastown | [GitHub](https://github.com/steveyegge/gastown) | 12500 | Gas Town：多智能体工作区管理器。 |
| 21 | Yeachan-Heo/oh-my-claudecode | [GitHub](https://github.com/Yeachan-Heo/oh-my-claudecode) | 10300 | 面向 Claude Code 的多智能体编排系统，支持 Autopilot、Ultrapilot、Swarm、Pipeline、Ecomode 五种执行模式，并内置大量 skills 与专用 agents。 |
| 22 | diet103/claude-code-infrastructure-showcase | [GitHub](https://github.com/diet103/claude-code-infrastructure-showcase) | 9300 | 展示 Claude Code 基础设施实践示例，包含 skill 自动激活、hooks 与 agents。 |
| 23 | snarktank/ai-dev-tasks | [GitHub](https://github.com/snarktank/ai-dev-tasks) | 7600 | 一个用于管理 AI 开发智能体的简洁任务管理系统。 |
| 24 | UfoMiao/zcf | [GitHub](https://github.com/UfoMiao/zcf) | 5700 | 面向 Claude Code 与 Codex 的零配置代码流。 |
| 25 | breaking-brake/cc-wf-studio | [GitHub](https://github.com/breaking-brake/cc-wf-studio) | 4500 | 面向 AI 智能体的可视化工作流编辑器，支持自然语言编辑、导出并运行工作流。 |
| 26 | Pimzino/spec-workflow-mcp | [GitHub](https://github.com/Pimzino/spec-workflow-mcp) | 4000 | 一个 MCP 服务器，为 AI 辅助软件开发提供结构化规格驱动工作流工具，并带有实时 Web 仪表盘与 VSCode 扩展。 |
| 27 | fengshao1227/ccg-workflow | [GitHub](https://github.com/fengshao1227/ccg-workflow) | 4000 | 多模型协作开发系统：Claude 负责编排，Codex 负责后端，Gemini 负责前端，提供一键安装与覆盖全流程的命令集。 |
| 28 | OneRedOak/claude-code-workflows | [GitHub](https://github.com/OneRedOak/claude-code-workflows) | 3700 | 作者长期重度使用 Claude Code 后沉淀出的最佳工作流与配置，基于 AI 原生创业实践经验。 |
| 29 | Pimzino/claude-code-spec-workflow | [GitHub](https://github.com/Pimzino/claude-code-spec-workflow) | 3500 | 面向 Claude Code 的自动化工作流，提供新功能的规格驱动开发流程与缺陷修复流程。 |
| 30 | gotalab/cc-sdd | [GitHub](https://github.com/gotalab/cc-sdd) | 2800 | 把 AI 编码代理转化为生产可用的规格驱动开发系统，覆盖需求、设计、任务到实现。 |
| 31 | stellarlinkco/myclaude | [GitHub](https://github.com/stellarlinkco/myclaude) | 2500 | 多智能体编排工作流系统，支持 Claude Code、Codex、Gemini 与 OpenCode。 |
| 32 | Yeachan-Heo/oh-my-codex | [GitHub](https://github.com/Yeachan-Heo/oh-my-codex) | 2200 | OmX：为 OpenAI Codex CLI 提供 hooks、智能体团队、HUD 等增强能力。 |
| 33 | bfly123/claude_code_bridge | [GitHub](https://github.com/bfly123/claude_code_bridge) | 1700 | Claude、Codex 与 Gemini 的实时多 AI 协作桥接，具备持久上下文和较低 token 开销。 |
| 34 | Q00/ouroboros | [GitHub](https://github.com/Q00/ouroboros) | 1500 | 停止提示式写作，开始精确定义。 |
| 35 | catlog22/Claude-Code-Workflow | [GitHub](https://github.com/catlog22/Claude-Code-Workflow) | 1500 | JSON 驱动的多智能体开发框架，具备智能 CLI 编排、上下文优先架构和自动化工作流执行。 |
| 36 | feiskyer/claude-code-settings | [GitHub](https://github.com/feiskyer/claude-code-settings) | 1300 | 面向氛围编程（vibe coding）的 Claude Code 设置、命令与 agents。 |
| 37 | Ido-Levi/Hephaestus | [GitHub](https://github.com/Ido-Levi/Hephaestus) | 1100 | 半结构化智能体框架：工作流会随着智能体发现需求而自我构建，而不是完全依赖预先预测。 |
| 38 | bfly123/claude_code_autoflow | [GitHub](https://github.com/bfly123/claude_code_autoflow) | 112 | Claude Code AutoFlow (cca) 是一个专为 AI 辅助开发设计的结构化任务自动化工作流系统。 |
| 39 | GuDaStudio/skills | [GitHub](https://github.com/GuDaStudio/skills) | 1939 | 现代化 Agent Skills 能力库；支持 Claude 与多模型 / 多工具协作，并行化工作流编排。 |
| 40 | GuDaStudio/commands | [GitHub](https://github.com/GuDaStudio/commands) | 877 | 围绕“大 vibe”自动化与“以人为本”上下文管理的命令集合。 |
| 41 | code-yeongyu/oh-my-opencode | [GitHub](https://github.com/code-yeongyu/oh-my-opencode) | 42870 | 多智能体分工协作工作流；将任务拆分为规划、查阅、执行并支持并行协作。 |
| 42 | ChesterRa/cccc | [GitHub](https://github.com/ChesterRa/cccc) | 578 | 轻量级多 Agent CLI 框架，强调协作内核与外部工具可组合性。 |
| 43 | FredericMN/Coder-Codex-Gemini | [GitHub](https://github.com/FredericMN/Coder-Codex-Gemini) | 162 | Claude + Coder + Codex + Gemini 的多方协作闭环。 |
| 44 | 7836246/claude-team-mcp | [GitHub](https://github.com/7836246/claude-team-mcp) | 46 | Claude + Codex + Gemini 的多智能体 MCP 服务器。 |
| 45 | cexll/myclaude | [GitHub](https://github.com/cexll/myclaude/tree/master) | 2512 | 双智能体架构与可插拔 AI 后端。 |
| 46 | mindfold-ai/Trellis | [GitHub](https://github.com/mindfold-ai/Trellis) | 4069 | 一体化 AI 框架与工具包。 |
