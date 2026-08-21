---
title: Commands
weight: 5
date: 2026-02-09T23:34:00+08:00
bookHidden: false
---

### Claude Commands（斜杠命令）

>Claude Commands（斜杠命令）是 Claude（尤其 Claude Code）的快捷指令，以 / 开头，输入对话框即可触发特定操作；自定义命令可通过在项目 .claude/commands/ 目录下创建 .md 文件实现，能接管交互意图并强制执行固定流程。

>自定义命令允许你创建可复用的工作流，并在聊天输入框中通过简单的 / 前缀来触发。这些命令有助于在团队内标准化流程，并让常见任务执行得更加高效。


`commands` 负责回答：**我想显式接管这次的意图，并强制走一个固定流程。**

<div style="display:flex; gap:12px; flex-wrap:wrap; align-items:flex-start; margin: 12px 0;">
  <img alt="commands-1" src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1v1piyCsx2yBp1PfHfMhMgABFwpQpVQAAiMiAAKZcGBU8nSTufrY_Rg6BA.png" style="width:49%; height:auto;" />
  <img alt="commands-2" src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ3UFpjCl0h9oya_wN4-l8hhylspD02gACpB0AAoLCYFRb1PvMcqt0ejoE.png" style="width:49%; height:auto;" />
</div>

<div style="display:flex; gap:12px; flex-wrap:wrap; align-items:flex-start; margin: 12px 0;">
  <img alt="commands-3" src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1wNpiyGLNchUsHAVb_0oZUNN0W14AQACKiIAAplwYFQTHrlKfoM65joE.png" style="width:49%; height:auto;" />
  <img alt="commands-4" src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1wppiyJGX5-rve3m8VolEnfG76LOsAACMyIAAplwYFThUngDB5xT4DoE.png" style="width:49%; height:auto;" />
</div>


### 命令的工作方式
命令以普通 Markdown 文件的形式定义，可以存放在三个位置：

- 项目命令：存放在你项目的 .cursor/commands(.claude/commands/) 目录中
- 全局命令：存放在你主目录下的 ~/.cursor/commands 目录中
- 团队命令：由团队管理员在 Cursor Dashboard 中创建，并会自动对所有团队成员可用
- 当你在聊天输入框中键入 / 时，Cursor 会自动检测并显示来自所有位置的可用命令，让你在整个工作流中都能即时调用它们。

详细文档请查看
- [https://cursor.com/cn/docs/context/commands](https://cursor.com/cn/docs/context/commands)
- [https://cursor.com/cn/docs/context/commands](https://cursor.com/cn/docs/context/commands)

## 何时用 commands

- **重复率高**：例如生成变更说明、准备 PR、做代码审查、跑一套检查。
- **需要你显式接管意图**：你希望这次就是按某个固定流程走。
- **需要降低沟通成本**：把"怎么做"固化到命令里，把对话只保留"做什么".

## commands vs skills

- `commands`：你触发，确定性执行，强调"入口手感".
- `skills`：Agent 选择性加载，强调"按需 SOP".

## 官方更新

官方文档已更新：[Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills#configure-skills)

自定义斜杠命令已合并到技能中。您无需采取任何行动进行迁移，这也不会干扰您现有的工作流程。

此外，你还可以无缝地使用子代理与技能配合。

.claude/commands/review.md 处的文件和 .claude/skills/review/SKILL.md 处的技能都创建 /review 并工作方式相同。

您现有的 .claude/commands/ 文件仍然有效。

对于你创建的每个技能，你可以选择让它可被调用、由模型调用或两者兼有（默认为两者兼有）。

如果你不希望用户能够通过斜杠命令调用某个技能，可以将 user-invocable 设置为 false。

如果你不希望模型自动调用斜杠命令，可以设置 disable-model-invocation: true

## 指令参数（Command params）

在很多工具中，指令可以接收任意数量的参数，并在模板中通过 `$1`、`$2` 等位置变量来引用。Claude Code 的自定义斜杠指令也支持同样的模式。

这让你可以清晰表达意图，而不必重复输入完整 prompt。比如你可以这样输入：

```go
/pr 123 bot-integration - 加载 `pr` 技能 - 创建一个修复 issue #$1、并以 $2 分支为目标的 Pull Request
```

指令本身保持简短，变化的部分保持显式，而技能依然负责最难的部分：定义、约定，以及 "什么才算完成".


## 技能 vs. 指令：都可组合，但并不相同

指令（Command）是确定性的。你调用它，工具就注入对应的 prompt，agent 立刻执行。

技能（Skill）是建议性的。agent 会自行判断是否需要这些上下文，并在合适的时候加载它。

我见过的最强模式是把两者结合起来：

- 把复杂、长期有效的指令逻辑放进技能里
- 用指令作为便捷入口，触发一个或多个技能

例如：

- 一个 `/release` 指令："加载 release 技能，然后按照检查清单执行。"
- 一个 `/refactor` 指令："加载 tanstack 和 panda-css 技能，把这个 Next.js 组件重构为使用 TanStack 和 Panda CSS。如果技能中没有覆盖到文档问题，可以使用 Context7 MCP server。"

你的指令列表应该简短、好记；而你的技能库则负责承载结构化、可复用的逻辑。毕竟，指令是为了操作手感（ergonomics），所以要保持稳定；技能是策略和规范，它们需要可审查、可演进。

当你更新一个技能时，你是在改变行为本身，而不需要记住新的 "咒语"。当你更新一个指令时，你改变的则是咒语本身。




## 与其他模块的边界

- **commands vs rules / 系统提示词**：commands 需要触发；rules 自动生效.
- **commands vs skills**：commands 是入口；skills 是按需加载的专业手册.
