---
title: 输出风格
weight: 3
date: 2026-02-09T23:34:00+08:00
bookHidden: true
---

# 输出样式

> 将 Claude Code 适配用于软件工程之外的用途

输出样式允许你将 Claude Code 用作任何类型的代理，同时保留其核心功能，例如运行本地脚本、读取/写入文件和跟踪 TODO。

## 内置输出样式

Claude Code 的**默认**输出样式是现有的系统提示，旨在帮助你高效地完成软件工程任务。

还有两个额外的内置输出样式，专注于教你了解代码库和 Claude 的运作方式：

* **Explanatory**：在帮助你完成软件工程任务的同时提供教育性的"Insights"。帮助你理解实现选择和代码库模式。

* **Learning**：协作式的边学边做模式，Claude 不仅会在编码时分享"Insights"，还会要求你自己贡献小的、战略性的代码片段。Claude Code 将在你的代码中添加 `TODO(human)` 标记供你实现。

## 输出样式如何工作

输出样式直接修改 Claude Code 的系统提示。

* 所有输出样式都排除了高效输出的说明（例如简洁回复）。
* 自定义输出样式排除了编码说明（例如用测试验证代码），除非 `keep-coding-instructions` 为 true。
* 所有输出样式都在系统提示的末尾添加了自己的自定义说明。
* 所有输出样式都会在对话期间触发提醒，让 Claude 遵守输出样式说明。

## 更改你的输出样式

你可以：

* 运行 `/output-style` 来访问菜单并选择你的输出样式（这也可以从 `/config` 菜单访问）

* 运行 `/output-style [style]`，例如 `/output-style explanatory`，直接切换到某个样式

这些更改应用于[本地项目级别](/zh-CN/settings)，并保存在 `.claude/settings.local.json` 中。你也可以直接编辑不同级别的设置文件中的 `outputStyle` 字段。

## 创建自定义输出样式

自定义输出样式是包含 frontmatter 和将添加到系统提示的文本的 Markdown 文件：

```markdown
---
name: My Custom Style
description:
  A brief description of what this style does, to be displayed to the user
---

# Custom Style Instructions

You are an interactive CLI tool that helps users with software engineering
tasks. [Your custom instructions here...]

## Specific Behaviors

[Define how the assistant should behave in this style...]
```

你可以在用户级别（`~/.claude/output-styles`）或项目级别（`.claude/output-styles`）保存这些文件。

### Frontmatter

输出样式文件支持 frontmatter，用于指定有关命令的元数据：

| Frontmatter                | 目的                                  | 默认值    |
| :------------------------- | :---------------------------------- | :----- |
| `name`                     | 输出样式的名称，如果不是文件名                     | 从文件名继承 |
| `description`              | 输出样式的描述。仅在 `/output-style` 的 UI 中使用 | 无      |
| `keep-coding-instructions` | 是否保留 Claude Code 系统提示中与编码相关的部分。     | false  |

## 与相关功能的比较

### 输出样式 vs. CLAUDE.md vs. --append-system-prompt

输出样式完全"关闭"了 Claude Code 默认系统提示中特定于软件工程的部分。CLAUDE.md 和 `--append-system-prompt` 都不编辑 Claude Code 的默认系统提示。CLAUDE.md 将内容作为用户消息添加到 Claude Code 默认系统提示\_之后\_。`--append-system-prompt` 将内容附加到系统提示。

### 输出样式 vs. [Agents](/zh-CN/sub-agents)

输出样式直接影响主代理循环，仅影响系统提示。Agents 被调用来处理特定任务，可以包括额外的设置，如要使用的模型、可用的工具以及有关何时使用代理的一些上下文。

### 输出样式 vs. [Skills](/zh-CN/skills)

输出样式修改 Claude 的响应方式（格式、语气、结构），一旦选择就始终处于活动状态。Skills 是特定于任务的提示，你可以使用 `/skill-name` 调用或 Claude 在相关时自动加载。使用输出样式来实现一致的格式化偏好；使用 skills 来实现可重用的工作流和任务。
