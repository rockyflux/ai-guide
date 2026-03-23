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


## 2\. 项目列表

|#|名称|项目链接|描述/关键词|仓库解读|
|---|---|---|---|---|
|1|[🔥ccg-workflow]({{< relref "workflow/ccg" >}})|[fengshao1227/ccg-workflow](https://github.com/fengshao1227/ccg-workflow)|多模型协作开发工具集 - 基于 Claude Code CLI，整合 Codex/Gemini 后端能力，提供智能路由、代码审查、Git 工具等 17+ 个命令|[Zread](https://zread.ai/fengshao1227/ccg-workflow)|
|2|[🔥claude-code-workflow](https://github.com/catlog22/Claude-Code-Workflow)|[catlog22/Claude-Code-Workflow](https://github.com/catlog22/Claude-Code-Workflow)|CCW 提供了基于 Team 架构 v2 和 Skill 工作流系统 的完整工作流体系，覆盖从快速原型到完整团队编排的软件开发全生命周期。|[Zread](https://zread.ai/catlog22/Claude-Code-Workflow)|
|3|[Claude Code Bridge (ccb)](https://github.com/bfly123/claude_code_bridge)|[bfly123/claude_code_bridge](https://github.com/bfly123/claude_code_bridge)|终端分屏多模型协作工具 Claude · Codex · Gemini · OpenCode · Droid 轻量异步通讯，交互皆可见，模型皆可控|[Zread](https://zread.ai/bfly123/claude_code_bridge)|
|4|[cca (Claude Code AutoFlow)](https://github.com/bfly123/claude_code_autoflow)|[bfly123/claude_code_autoflow](https://github.com/bfly123/claude_code_autoflow)|Claude Code AutoFlow (cca) 是一个专为 AI 辅助开发设计的结构化任务自动化工作流系统|[Zread](https://zread.ai/bfly123/claude_code_autoflow)|
|5|CLAUDE.md|[链接](https://linux.do/t/topic/1231037)|利用单个 `CLAUDE.md` 配置实现规划 / 执行 / 知识三位一体协同办公工作流，作为轻量多角色模板非常适合上手|-|
|6|[Agent Skills 集合](https://github.com/GuDaStudio/skills)|[GuDaStudio/skills](https://github.com/GuDaStudio/skills)|现代化 Agent Skills 能力库；支持 Claude 与多模型 / 多工具协作，并行化工作流编排，是 Claude Code 技能扩展包，一键集成多模型协作|[Zread](https://zread.ai/GuDaStudio/skills)|
|7|[GudaStudio Commands](https://github.com/GuDaStudio/commands)|[GuDaStudio/commands](https://github.com/GuDaStudio/commands)|围绕“大 vibe”自动化与“以人为本”上下文管理的命令集合；探索不同自动化粒度下的工作流设计取舍|[Zread](https://zread.ai/GuDaStudio/commands)|
|8|[oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)|[code-yeongyu/oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)|通过把写代码，甚至是任何可以 AI 操作的电脑任务拆解成几个部分：规划、查阅、执行，具体的 agent 带着 prompt、skills 等上下文各司其职，团队分工合作完成复杂任务，oh my opencode 3.0 也集成了 superpowers 。|[Zread](https://zread.ai/code-yeongyu/oh-my-opencode)|
|9|[oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)|[README.zh](https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/README.zh.md) / [GitHub](https://github.com/Yeachan-Heo/oh-my-claudecode)|Claude Code 的多智能体编排系统，零学习曲线；提供 Team、omc-teams、ccg、autopilot、ralph 等多种执行模式，支持多模型协作、自动并行化与持久执行|[Zread](https://zread.ai/Yeachan-Heo/oh-my-claudecode)|
|10|[CCCC](https://github.com/ChesterRa/cccc)|[ChesterRa/cccc](https://github.com/ChesterRa/cccc)|轻量级多 Agent CLI 框架；CCCC 是协作内核 — 它拥有协调层，与外部 CI/CD、编排器、部署工具保持可组合性。|[Zread](https://zread.ai/ChesterRa/cccc)|
|11|[superpowers](https://github.com/obra/superpowers)|[obra/superpowers](https://github.com/obra/superpowers)|An agentic skills framework & software development methodology that works；为 Claude Code / Cursor 提供从需求澄清、设计、规划到 TDD 与代码审查的完整 Skills 工作流体系|[Zread](https://zread.ai/obra/superpowers)|
|12|[Coder-Codex-Gemini（ccg）](https://github.com/FredericMN/Coder-Codex-Gemini)|[FredericMN/Coder-Codex-Gemini](https://github.com/FredericMN/Coder-Codex-Gemini)|Claude + Coder + Codex + Gemini，让 Claude/Sisyphus 作为架构师调度 Coder 执行代码任务、Codex 审核代码质量，Gemini 提供专家咨询，形成自动化的多方协作闭环|[Zread](https://zread.ai/FredericMN/Coder-Codex-Gemini)|
|13|[claude-team-mcp](https://github.com/7836246/claude-team-mcp)|[7836246/claude-team-mcp](https://github.com/7836246/claude-team-mcp)|Claude + Codex + Gemini，多智能体 MCP 服务器|[Zread](https://zread.ai/7836246/claude-team-mcp)|
|14|[myclaude](https://github.com/cexll/myclaude/tree/master)|[cexll/myclaude](https://github.com/cexll/myclaude/tree/master)|Claude + Codex + Gemini，双智能体架构与可插拔 AI 后端|[Zread](https://zread.ai/cexll/myclaude)|
|15|[Trellis](https://github.com/mindfold-ai/Trellis)|[mindfold-ai/Trellis](https://github.com/mindfold-ai/Trellis)|一体化 AI 框架与工具包|[Zread](https://zread.ai/mindfold-ai/Trellis)|
|16|[🔥get-shit-done](https://github.com/gsd-build/get-shit-done)|[gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)|A collaborative productivity/resource for multi-model AI coding workflows; 提供多模型协作、任务编排、以及实用工具示例|[Zread](https://zread.ai/gsd-build/get-shit-done)|
|17|[spec-workflow-mcp](https://github.com/Pimzino/spec-workflow-mcp)|[Pimzino/spec-workflow-mcp](https://github.com/Pimzino/spec-workflow-mcp)|基于 MCP 的规格驱动开发：按「需求 → 设计 → 任务」顺序产出；配套实时 Web 仪表盘、VSCode 扩展、审批流与任务进度/实现日志|[Zread](https://zread.ai/Pimzino/spec-workflow-mcp)|
|18|[Spec Kit](https://github.com/github/spec-kit)|[github/spec-kit](https://github.com/github/spec-kit)|GitHub 官方 SDD 工具包：Specify CLI 初始化 + `/speckit.*` 规格→计划→任务→实现；支持 Cursor / Claude / Codex 等多 Agent，extensions 与 presets 可定制|[文档站](https://github.github.com/spec-kit/)|
|19|[OpenSpec](https://openspec.dev/)|[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)|轻量规格驱动框架：规格与代码同仓（`openspec/specs/` 等）；变更产出 proposal、design、tasks 与 spec delta，便于评审与跨会话对齐；Claude Code / Cursor / Codex 等多工具原生斜杠命令|[官网](https://openspec.dev/)|
