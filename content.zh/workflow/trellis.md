---
title: Trellis
weight: 25
bookToc: false
noTocArea: true
---

## Trellis 是什么？

[Trellis](https://github.com/mindfold-ai/Trellis) 是面向多种 AI 编程工具的一站式 **框架与工具集**：把规范、任务与协作方式固化在仓库内的 `.trellis/` 结构中，再按所选平台生成 **Claude Code、Cursor、OpenCode、Codex、Kilo、Kiro、Gemini CLI、Antigravity、Qoder** 等工具的接入文件，使团队在不同客户端之间仍共享同一套流程与记忆。

[中文文档首页](https://docs.trytrellis.app/zh) 中的比喻：**AI 的能力像藤蔓一样生长——充满活力但四处蔓延；Trellis 是脚手架，引导它沿着规范的路径前进。**

## 解决什么问题？

| 能力 | 作用 |
| --- | --- |
| **自动注入规格（spec）** | 在 `.trellis/spec/` 写清约定，由 Trellis 在会话中注入相关上下文，减少重复说明 |
| **以任务为中心** | 在 `.trellis/tasks/` 维护 PRD、实现/审查上下文与任务状态，结构化推进 |
| **并行智能体** | 借助 git worktree 等方式并行多路 AI 任务，减轻单分支拥堵 |
| **项目记忆** | `.trellis/workspace/` 中的日志帮助跨会话延续上下文 |
| **团队共享** | 规格与任务在仓库内版本化，便于团队统一标准 |
| **多平台一套结构** | 同一套 Trellis 目录，多工具仅换接入层 |

与单独的 `CLAUDE.md`、`AGENTS.md`、`.cursorrules` 相比，Trellis 强调 **分层规格 + 任务上下文 + 工作区记忆 + 按平台接线**，避免单文件无限膨胀。

## 快速开始

```bash
npm install -g @mindfoldhq/trellis@latest

trellis init -u your-name
# 或只启用实际使用的平台，例如：
trellis init --cursor --opencode --codex -u your-name
```

- `-u your-name` 会在 `.trellis/workspace/your-name/` 下建立个人日志与连续性数据。  
- 平台参数可按需组合（`--cursor`、`--opencode`、`--codex`、`--gemini` 等，以官方文档为准）。  

## 仓库内结构（概念）

```text
.trellis/
├── spec/           # 项目规范、模式与指南
├── tasks/          # 任务 PRD、上下文与状态
├── workspace/      # 日志与开发者维度的延续信息
├── workflow.md     # 共享工作流规则
└── scripts/        # 支撑工作流的脚本
```

视启用平台不同，还可能生成 `.claude/`、`.cursor/`、`AGENTS.md`、`.agents/`、`.kilocode/`、`.kiro/` 等工具侧文件。

高层流程可概括为：**写规格 → 从任务 PRD 启动或细化 → Trellis 注入当前任务所需上下文 → 用检查、日志与 worktree 保证质量与连续性**。

## 规格模板与市场

初始化时规格多为可自定义模板；也可从自定义注册表拉取，例如：

```bash
trellis init --registry https://github.com/your-org/your-spec-templates
```

模板索引与发布方式见官方文档中的 [Spec Templates](https://docs.trytrellis.app/templates/specs-index)。

## 延伸阅读

- **GitHub**：[mindfold-ai/Trellis](https://github.com/mindfold-ai/Trellis)  
- **中文文档**：[docs.trytrellis.app/zh](https://docs.trytrellis.app/zh)  
- **快速开始**：[Quick Start](https://docs.trytrellis.app/guide/ch02-quick-start)  
- **支持的平台**：[Supported Platforms](https://docs.trytrellis.app/guide/ch13-multi-platform)  
- **实战场景**：[Real-World Scenarios](https://docs.trytrellis.app/guide/ch08-real-world)  
- **更新日志**：[Changelog](https://docs.trytrellis.app/changelog/v0.3.6)  
- **社区**：[Discord](https://discord.com/invite/tWcCZ3aRHc)  

协议：**AGPL-3.0**（以仓库 `LICENSE` 为准）。
