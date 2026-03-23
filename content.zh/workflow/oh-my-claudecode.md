---
title: oh-my-claudecode(OMC)
weight: 24
bookToc: false
noTocArea: true
---

## oh-my-claudecode 是什么？

[oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)（简称 **OMC**）是面向 **Claude Code** 的 **多智能体编排系统**，主打 **零学习曲线**：不必先系统学习 Claude Code 的全部概念，也可通过自然语言与预设工作流驱动复杂任务。

同类体验若使用 **OpenAI Codex CLI**，可参考姊妹项目 [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)。

## 快速开始

**1. 安装插件**

```bash
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode
```

**2. 配置**

```bash
/omc-setup
```

**3. 开始构建**（示例）

在对话中使用自然语言描述目标，例如：`autopilot: build a REST API for managing tasks`。

若需求尚不清晰，可先做一次深度澄清：

```text
/deep-interview "I want to build a task management app"
```

## Team 模式（推荐）

自 **v4.1.7** 起，**Team** 是标准编排方式；旧入口 **swarm** / **ultrapilot** 仍可用，但底层会路由到 Team。示例：

```bash
/team 3:executor "fix all TypeScript errors"
```

流水线大致为：`team-plan → team-prd → team-exec → team-verify → team-fix（循环）`。若使用 Claude Code 原生团队能力，可在 `~/.claude/settings.json` 中按需设置环境变量 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`（详见上游 README）。

### tmux 与多 CLI（v4.4.0+）

可在 tmux 分屏中启动真实 **Codex / Gemini / Claude CLI** 工作者，例如：

```bash
/omc-teams 2:codex   "review auth module for security issues"
/omc-teams 2:gemini  "redesign UI components for accessibility"
```

若要在一条流程中混合 **Codex + Gemini** 等，可使用 **`/ccg`** 技能（与站内 [CCG 工作流]({{< relref "workflow/ccg" >}}) 理念相近）。需本机已安装对应 CLI 并有 tmux 会话。

## 包名说明

品牌与仓库名为 **oh-my-claudecode**，但 **npm 包** 发布为 [`oh-my-claude-sisyphus`](https://www.npmjs.com/package/oh-my-claude-sisyphus)；通过 npm/bun 全局安装 CLI 时请使用该包名。

## 主要特性（摘要）

- **开箱即用**：智能默认，减少手工配置  
- **Team 优先**：标准多智能体界面  
- **自然语言**：以描述任务为主，不必死记长命令表  
- **并行与持久**：复杂任务自动拆分；多种模式支持跑到验证完成  
- **成本与可见性**：模型路由、HUD 状态、会话分析等（详见官方文档）  
- **自定义技能**：项目级 `.omc/skills/` 与用户级 `~/.omc/skills/` 等路径，支持提取与复用  

常用「魔法关键词」包括 `team`、`omc-teams`、`ccg`、`autopilot`、`ralph`、`ulw`、`plan`、`deep-interview` 等；`swarm` / `ultrapilot` 已建议迁移到 `team`。

## 延伸阅读

- **仓库 README（中文）**：[README.zh.md](https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/README.zh.md)  
- **文档站**：[oh-my-claudecode 网站](https://yeachan-heo.github.io/oh-my-claudecode-website)  
- **CLI 与工作流**：[CLI 参考](https://yeachan-heo.github.io/oh-my-claudecode-website/docs.html#cli-reference)、[推荐工作流](https://yeachan-heo.github.io/oh-my-claudecode-website/docs.html#workflows)  
