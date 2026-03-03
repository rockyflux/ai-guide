---
title: Claude Code 最佳实践
weight: 30
date: 2026-02-09T23:34:00+08:00
---

# Claude Code 最佳实践

本篇文章来源官方出品 [https://code.claude.com/docs/zh-CN/best-practices](https://code.claude.com/docs/zh-CN/best-practices)

> 从配置环境到跨并行会话扩展，充分利用 Claude Code 的提示和模式。

Claude Code 是一个代理式编码环境。与等待回答问题的聊天机器人不同，Claude Code 可以读取你的文件、运行命令、进行更改，并在你观看、重定向或完全离开的情况下自主解决问题。

这改变了你的工作方式。与其自己编写代码并要求 Claude 审查，不如描述你想要什么，让 Claude 弄清楚如何构建它。Claude 会探索、规划和实现。

但这种自主性仍然伴随着学习曲线。Claude 在某些约束条件下工作，你需要理解这些约束。

本指南涵盖了在 Anthropic 内部团队和在各种代码库、语言和环境中使用 Claude Code 的工程师中已被证明有效的模式。有关代理循环如何在幕后工作的信息，请参阅 [Claude Code 如何工作](https://code.claude.com/docshttps://code.claude.com/docs/zh-CN/how-claude-code-works)。

***

大多数最佳实践都基于一个约束：Claude 的 context window 填充速度很快，随着填充，性能会下降。

Claude 的 context window 保存你的整个对话，包括每条消息、Claude 读取的每个文件和每个命令输出。但这可能会很快填满。单个调试会话或代码库探索可能会生成并消耗数万个令牌。

这很重要，因为当 context 填充时，LLM 性能会下降。当 context window 即将满时，Claude 可能会开始"遗忘"早期的指令或犯更多错误。context window 是最重要的资源。有关减少令牌使用的详细策略，请参阅 [减少令牌使用](https://code.claude.com/docshttps://code.claude.com/docs/zh-CN/costs#reduce-token-usage)。

***

## 给 Claude 一种验证其工作的方式

<Tip>
  包括测试、屏幕截图或预期输出，以便 Claude 可以检查自己。这是你能做的最高杠杆的事情。
</Tip>

当 Claude 能够验证自己的工作时，例如运行测试、比较屏幕截图和验证输出，它的表现会显著提高。

没有明确的成功标准，它可能会产生看起来正确但实际上不起作用的东西。你成为唯一的反馈循环，每个错误都需要你的关注。

|策略| 之前 | 之后                                                                                                                                  |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **提供验证标准**        | *"实现一个验证电子邮件地址的函数"* | *"编写一个 validateEmail 函数。示例测试用例：[user@example.com](mailto:user@example.com) 为真，invalid 为假，[user@.com](mailto:user@.com) 为假。实现后运行测试"* |
| **以视觉方式验证 UI 更改** | *"让仪表板看起来更好"*       | *"\[粘贴屏幕截图] 实现此设计。对结果进行屏幕截图并与原始设计进行比较。列出差异并修复它们"*                                                                                   |
| **解决根本原因，而不是症状**  | *"构建失败"*            | *"构建失败，出现此错误：\[粘贴错误]。修复它并验证构建成功。解决根本原因，不要抑制错误"*                                                                                     |

UI 更改可以使用 [Chrome 中的 Claude 扩展](https://code.claude.com/docshttps://code.claude.com/docs/zh-CN/chrome) 进行验证。它在浏览器中打开新标签页，测试 UI，并迭代直到代码工作。

你的验证也可以是测试套件、linter 或检查输出的 Bash 命令。投资使你的验证非常可靠。

***

## 先探索，再规划，最后编码

<Tip>
  将研究和规划与实现分开，以避免解决错误的问题。
</Tip>

让 Claude 直接跳到编码可能会产生解决错误问题的代码。使用 [Plan Mode](https://code.claude.com/docs/zh-CN/common-workflows#use-plan-mode-for-safe-code-analysis) 将探索与执行分开。

推荐的工作流有四个阶段：

<Steps>
  <Step title="探索">
    进入 Plan Mode。Claude 读取文件并回答问题，不进行任何更改。

    read /src/auth and understand how we handle sessions and login.
    also look at how we manage environment variables for secrets.

  </Step>

  <Step title="规划">
    要求 Claude 创建详细的实现计划。

    I want to add Google OAuth. What files need to change?
    What's the session flow? Create a plan.
    
    按 `Ctrl+G` 在文本编辑器中打开计划进行直接编辑，然后 Claude 再继续。
  </Step>

  <Step title="实现">
    切换回 Normal Mode 并让 Claude 编码，根据其计划进行验证。

    implement the OAuth flow from your plan. write tests for the
    callback handler, run the test suite and fix any failures.

  </Step>

  <Step title="提交">
    要求 Claude 使用描述性消息进行提交并创建 PR。

    commit with a descriptive message and open a PR

  </Step>
</Steps>

<Callout>
  Plan Mode 很有用，但也增加了开销。

  对于范围明确且修复很小的任务（如修复拼写错误、添加日志行或重命名变量），要求 Claude 直接进行。

  当你对方法不确定、更改修改多个文件或你不熟悉被修改的代码时，规划最有用。如果你能用一句话描述差异，跳过计划。
</Callout>

***

## 在提示中提供具体的上下文

<Tip>
  你的指令越精确，你需要的更正就越少。
</Tip>

Claude 可以推断意图，但它不能读心术。引用特定文件、提及约束条件并指出示例模式。

| 策略                               | 之前                                   | 之后                                                                                                                  |
| -------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **限定任务范围。** 指定哪个文件、什么场景和测试偏好。    | *"为 foo.py 添加测试"*                    | *"为 foo.py 编写测试，涵盖用户已注销的边界情况。避免使用 mocks。"*                                                                          |
| **指向来源。** 指导 Claude 查看可以回答问题的来源。 | *"为什么 ExecutionFactory 有这样奇怪的 api？"* | *"查看 ExecutionFactory 的 git 历史记录并总结其 api 是如何演变的"*                                                                   |
| **引用现有模式。** 指向代码库中的模式。           | *"添加日历小部件"*                          | *"查看主页上现有小部件的实现方式以了解模式。HotDogWidget.php 是一个很好的例子。按照模式实现一个新的日历小部件，让用户选择月份并向前/向后分页以选择年份。从头开始构建，除了代码库中已使用的库外，不使用其他库。"* |
| **描述症状。** 提供症状、可能的位置以及"修复"的样子。   | *"修复登录错误"*                           | *"用户报告会话超时后登录失败。检查 src/auth/ 中的身份验证流程，特别是令牌刷新。编写一个失败的测试来重现问题，然后修复它"*                                                |

当你在探索并能够纠正方向时，模糊的提示可能很有用。像 `"你会改进这个文件的什么？"` 这样的提示可以表面化你不会想到要问的东西。

### 提供丰富的内容

<Tip>
  使用 `@` 引用文件、粘贴屏幕截图/图像或直接管道数据。
</Tip>

你可以通过多种方式向 Claude 提供丰富的数据：

* **使用 `@` 引用文件**，而不是描述代码的位置。Claude 在响应前读取文件。
* **直接粘贴图像**。将图像复制/粘贴或拖放到提示中。
* **提供 URL** 用于文档和 API 参考。使用 `/permissions` 将常用域名加入白名单。
* **管道数据**，通过运行 `cat error.log | claude` 直接发送文件内容。
* **让 Claude 获取它需要的东西**。告诉 Claude 使用 Bash 命令、MCP 工具或通过读取文件来自己拉取上下文。

***

## 配置你的环境

一些设置步骤使 Claude Code 在所有会话中的效果显著提高。有关扩展功能的完整概述和何时使用每个功能，请参阅 [扩展 Claude Code](https://code.claude.com/docs/zh-CN/features-overview)。

### 编写有效的 CLAUDE.md

<Tip>
  运行 `/init` 根据你当前的项目结构生成一个启动 CLAUDE.md 文件，然后随时间推移进行改进。
</Tip>

CLAUDE.md 是一个特殊文件，Claude 在每次对话开始时都会读取。包括 Bash 命令、代码风格和工作流规则。这给 Claude 提供了持久的上下文**它无法从代码中推断出来**。

`/init` 命令分析你的代码库以检测构建系统、测试框架和代码模式，为你提供坚实的基础来改进。

CLAUDE.md 文件没有必需的格式，但要保持简短和易读。例如：

```markdown CLAUDE.md
# Code style
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')

# Workflow
- Be sure to typecheck when you're done making a series of code changes
- Prefer running single tests, and not the whole test suite, for performance
```

CLAUDE.md 在每个会话中加载，所以只包括广泛适用的东西。对于仅在某些时候相关的域知识或工作流，改用 [skills](https://code.claude.com/docs/zh-CN/skills)。Claude 按需加载它们，不会使每次对话都变得臃肿。

保持简洁。对于每一行，问自己：*"删除这一行会导致 Claude 犯错吗？"* 如果不会，删除它。臃肿的 CLAUDE.md 文件会导致 Claude 忽略你的实际指令！

| ✅ 包括                 | ❌ 排除                    |
| -------------------- | ----------------------- |
| Claude 无法猜测的 Bash 命令 | Claude 可以通过读取代码弄清楚的任何东西 |
| 与默认值不同的代码风格规则        | Claude 已经知道的标准语言约定      |
| 测试指令和首选测试运行器         | 详细的 API 文档（改为链接到文档）     |
| 存储库礼仪（分支命名、PR 约定）    | 经常变化的信息                 |
| 特定于你的项目的架构决策         | 长篇解释或教程                 |
| 开发人员环境怪癖（必需的环境变量）    | 自明的实践，如"编写干净的代码"        |
| 常见的陷阱或非显而易见的行为       | 文件逐个描述代码库               |

如果 Claude 继续做你不想做的事情，尽管有反对的规则，该文件可能太长了，规则被遗漏了。如果 Claude 问你 CLAUDE.md 中回答的问题，措辞可能不明确。像对待代码一样对待 CLAUDE.md：当事情出错时审查它，定期修剪它，并通过观察 Claude 的行为是否真的改变来测试更改。

你可以通过添加强调（例如"IMPORTANT"或"YOU MUST"）来调整指令以改进遵守。将文件检入 git，以便你的团队可以贡献。该文件随时间推移而增加价值。

CLAUDE.md 文件可以使用 `@path/to/import` 语法导入其他文件：

```markdown CLAUDE.md
See @README.md for project overview and @package.json for available npm commands.

# Additional Instructions
- Git workflow: @docs/git-instructions.md
- Personal overrides: @~/.claude/my-project-instructions.md
```

你可以将 CLAUDE.md 文件放在多个位置：

* **主文件夹（`~/.claude/CLAUDE.md`）**：适用于所有 Claude 会话
* **项目根目录（`./CLAUDE.md`）**：检入 git 以与你的团队共享，或将其命名为 `CLAUDE.local.md` 并将其 `.gitignore`
* **父目录**：对于 monorepos 很有用，其中 `root/CLAUDE.md` 和 `root/foo/CLAUDE.md` 都会自动拉入
* **子目录**：当处理这些目录中的文件时，Claude 按需拉入子 CLAUDE.md 文件

### 配置权限

<Tip>
  使用 `/permissions` 将安全命令加入白名单或使用 `/sandbox` 进行操作系统级隔离。这减少了中断，同时让你保持控制。
</Tip>

默认情况下，Claude Code 请求可能修改你的系统的操作的权限：文件写入、Bash 命令、MCP 工具等。这是安全的但很繁琐。在第十次批准后，你实际上不是在审查，而是在点击。有两种方法可以减少这些中断：

* **权限白名单**：允许你知道是安全的特定工具（如 `npm run lint` 或 `git commit`）
* **沙箱**：启用操作系统级隔离，限制文件系统和网络访问，允许 Claude 在定义的边界内更自由地工作

或者，使用 `--dangerously-skip-permissions` 绕过所有权限检查以进行包含的工作流，如修复 lint 错误或生成样板。

<Warning>
  让 Claude 运行任意命令可能导致数据丢失、系统损坏或通过提示注入进行数据泄露。仅在没有互联网访问的沙箱中使用 `--dangerously-skip-permissions`。
</Warning>

阅读更多关于 [配置权限](https://code.claude.com/docs/zh-CN/settings) 和 [启用沙箱](https://code.claude.com/docs/zh-CN/sandboxing#sandboxing)。

### 使用 CLI 工具

<Tip>
  告诉 Claude Code 在与外部服务交互时使用 CLI 工具，如 `gh`、`aws`、`gcloud` 和 `sentry-cli`。
</Tip>

CLI 工具是与外部服务交互的最上下文高效的方式。如果你使用 GitHub，安装 `gh` CLI。Claude 知道如何使用它来创建问题、打开拉取请求和读取评论。没有 `gh`，Claude 仍然可以使用 GitHub API，但未经身份验证的请求经常会触发速率限制。

Claude 也很有效地学习它不知道的 CLI 工具。尝试像 `Use 'foo-cli-tool --help' to learn about foo tool, then use it to solve A, B, C.` 这样的提示。

### 连接 MCP servers

<Tip>
  运行 `claude mcp add` 连接外部工具，如 Notion、Figma 或你的数据库。
</Tip>

使用 [MCP servers](https://code.claude.com/docs/zh-CN/mcp)，你可以要求 Claude 从问题跟踪器实现功能、查询数据库、分析监控数据、集成来自 Figma 的设计并自动化工作流。

### 设置 hooks

<Tip>
  对必须每次发生且没有例外的操作使用 hooks。
</Tip>

[Hooks](https://code.claude.com/docs/zh-CN/hooks-guide) 在 Claude 工作流中的特定点自动运行脚本。与 CLAUDE.md 指令不同，hooks 是确定性的并保证操作发生。

Claude 可以为你编写 hooks。尝试像 *"编写一个在每次文件编辑后运行 eslint 的 hook"* 或 *"编写一个阻止写入迁移文件夹的 hook。"* 这样的提示。运行 `/hooks` 进行交互式配置，或直接编辑 `.claude/settings.json`。

### 创建 skills

<Tip>
  在 `.claude/skills/` 中创建 `SKILL.md` 文件，为 Claude 提供特定于项目的域知识和可重用工作流。
</Tip>

[Skills](https://code.claude.com/docs/zh-CN/skills) 使用特定于你的项目、团队或域的信息扩展 Claude 的知识。Claude 在相关时自动应用它们，或者你可以使用 `/skill-name` 直接调用它们。

通过向 `.claude/skills/` 添加带有 `SKILL.md` 的目录来创建 skill：

```markdown .claude/skills/api-conventions/SKILL.md
---
name: api-conventions
description: REST API design conventions for our services
---
# API Conventions
- Use kebab-case for URL paths
- Use camelCase for JSON properties
- Always include pagination for list endpoints
- Version APIs in the URL path (/v1/, /v2/)
```

Skills 也可以定义你直接调用的可重复工作流：

```markdown .claude/skills/fix-issue/SKILL.md
---
name: fix-issue
description: Fix a GitHub issue
disable-model-invocation: true
---
Analyze and fix the GitHub issue: $ARGUMENTS.

1. Use `gh issue view` to get the issue details
2. Understand the problem described in the issue
3. Search the codebase for relevant files
4. Implement the necessary changes to fix the issue
5. Write and run tests to verify the fix
6. Ensure code passes linting and type checking
7. Create a descriptive commit message
8. Push and create a PR
```

运行 `/fix-issue 1234` 来调用它。对于具有你想手动触发的副作用的工作流，使用 `disable-model-invocation: true`。

### 创建自定义 subagents

<Tip>
  在 `.claude/agents/` 中定义专门的助手，Claude 可以委托给它们进行隔离的任务。
</Tip>

[Subagents](https://code.claude.com/docs/zh-CN/sub-agents) 在自己的上下文中运行，拥有自己的一组允许的工具。它们对于读取许多文件或需要专门关注而不会使主对话变得混乱的任务很有用。

```markdown .claude/agents/security-reviewer.md
---
name: security-reviewer
description: Reviews code for security vulnerabilities
tools: Read, Grep, Glob, Bash
model: opus
---
You are a senior security engineer. Review code for:
- Injection vulnerabilities (SQL, XSS, command injection)
- Authentication and authorization flaws
- Secrets or credentials in code
- Insecure data handling

Provide specific line references and suggested fixes.
```

明确告诉 Claude 使用 subagents：*"使用 subagent 审查此代码以查找安全问题。"*

### 安装 plugins

<Tip>
  运行 `/plugin` 浏览市场。Plugins 添加 skills、工具和集成，无需配置。
</Tip>

[Plugins](https://code.claude.com/docs/zh-CN/plugins) 将 skills、hooks、subagents 和 MCP servers 捆绑到来自社区和 Anthropic 的单个可安装单元中。如果你使用类型化语言，安装 [代码智能 plugin](https://code.claude.com/docs/zh-CN/discover-plugins#code-intelligence) 为 Claude 提供精确的符号导航和编辑后的自动错误检测。

**推荐：Superpowers 插件** — 来自 [Superpowers Marketplace](https://github.com/obra/superpowers-marketplace) 的核心技能库（TDD、调试、协作模式等）。在 Claude Code 中依次执行：

```bash
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

安装后可获得 20+ 技能、`/brainstorm`、`/write-plan`、`/execute-plan` 等斜杠命令及 SessionStart 上下文注入。

有关在 skills、subagents、hooks 和 MCP 之间选择的指导，请参阅 [扩展 Claude Code](https://code.claude.com/docs/zh-CN/features-overview#match-features-to-your-goal)。

***

## 有效沟通

你与 Claude Code 沟通的方式会显著影响结果的质量。

### 提出代码库问题

<Tip>
  问 Claude 你会问资深工程师的问题。
</Tip>

当加入新代码库时，使用 Claude Code 进行学习和探索。你可以问 Claude 你会问另一位工程师的相同类型的问题：

* 日志记录如何工作？
* 我如何创建新的 API 端点？
* `foo.rs` 第 134 行的 `async move { ... }` 是什么意思？
* `CustomerOnboardingFlowImpl` 处理哪些边界情况？
* 为什么这段代码在第 333 行调用 `foo()` 而不是 `bar()`？

以这种方式使用 Claude Code 是一个有效的入职工作流，改进了入职时间并减少了对其他工程师的负担。无需特殊提示：直接提问。

### 让 Claude 采访你

<Tip>
  对于较大的功能，让 Claude 先采访你。从最小的提示开始，并要求 Claude 使用 `AskUserQuestion` 工具采访你。
</Tip>

Claude 会询问你可能还没有考虑过的事情，包括技术实现、UI/UX、边界情况和权衡。

```
I want to build [brief description]. Interview me in detail using the AskUserQuestion tool.

Ask about technical implementation, UI/UX, edge cases, concerns, and tradeoffs. Don't ask obvious questions, dig into the hard parts I might not have considered.

Keep interviewing until we've covered everything, then write a complete spec to SPEC.md.
```

规范完成后，启动一个新会话来执行它。新会话有干净的上下文，完全专注于实现，你有一个书面规范可以参考。

***

## 管理你的会话

对话是持久的和可逆的。利用这一点！

### 尽早且经常纠正方向

<Tip>
  一旦你注意到 Claude 偏离轨道，立即纠正它。
</Tip>

最好的结果来自紧密的反馈循环。虽然 Claude 有时会在第一次尝试时完美地解决问题，但快速纠正通常会更快地产生更好的解决方案。

* **`Esc`**：使用 `Esc` 键停止 Claude 的中途操作。上下文被保留，所以你可以重定向。
* **`Esc + Esc` 或 `/rewind`**：按 `Esc` 两次或运行 `/rewind` 打开 rewind 菜单并恢复之前的对话和代码状态。
* **`"撤销那个"`**：让 Claude 恢复其更改。
* **`/clear`**：重置不相关任务之间的上下文。具有无关上下文的长会话可能会降低性能。

如果你在一个会话中对同一问题纠正了 Claude 两次以上，上下文会被失败的方法污染。运行 `/clear` 并使用更具体的提示重新开始，该提示包含你学到的东西。具有更好提示的干净会话几乎总是优于具有累积更正的长会话。

### 积极管理上下文

<Tip>
  在不相关的任务之间频繁运行 `/clear` 以重置上下文。
</Tip>

当你接近上下文限制时，Claude Code 会自动压缩对话历史，这保留了重要的代码和决策，同时释放空间。

在长会话中，Claude 的 context window 可能会被无关的对话、文件内容和命令填满。这可能会降低性能，有时会分散 Claude 的注意力。

* 在任务之间频繁使用 `/clear` 以完全重置 context window
* 当自动压缩触发时，Claude 总结最重要的内容，包括代码模式、文件状态和关键决策
* 为了更好地控制，运行 `/compact <instructions>`，如 `/compact Focus on the API changes`
* 在 CLAUDE.md 中自定义压缩行为，使用像 `"When compacting, always preserve the full list of modified files and any test commands"` 这样的指令，以确保关键上下文在总结中幸存

### 使用 subagents 进行调查

<Tip>
  使用 `"use subagents to investigate X"` 委托研究。它们在单独的上下文中探索，为实现保持你的主对话干净。
</Tip>

由于上下文是你的基本约束，subagents 是最强大的可用工具之一。当 Claude 研究代码库时，它读取许多文件，所有这些都会消耗你的上下文。Subagents 在单独的 context windows 中运行并报告摘要：

```
Use subagents to investigate how our authentication system handles token
refresh, and whether we have any existing OAuth utilities I should reuse.
```

subagent 探索代码库、读取相关文件并报告发现，所有这些都不会使你的主对话变得混乱。

你也可以在 Claude 实现某些东西后使用 subagents 进行验证：

```
use a subagent to review this code for edge cases
```

### 使用检查点进行 Rewind

<Tip>
  Claude 进行的每个操作都会创建一个检查点。你可以将对话、代码或两者恢复到任何之前的检查点。
</Tip>

Claude 在更改前自动创建检查点。双击 `Escape` 或运行 `/rewind` 打开检查点菜单。你可以仅恢复对话（保留代码更改）、仅恢复代码（保留对话）或恢复两者。

与其仔细规划每一步，不如告诉 Claude 尝试一些冒险的事情。如果不起作用，rewind 并尝试不同的方法。检查点在会话中持续，所以你可以关闭终端并稍后仍然 rewind。

<Warning>
  检查点仅跟踪 Claude 进行的更改，不跟踪外部进程。这不是 git 的替代品。
</Warning>

### 恢复对话

<Tip>
  运行 `claude --continue` 从你离开的地方继续，或 `--resume` 从最近的会话中选择。
</Tip>

Claude Code 在本地保存对话。当任务跨越多个会话时（你开始一个功能，被中断，第二天回来），你不必重新解释上下文：

``` 
claude --continue    # Resume the most recent conversation
claude --resume      # Select from recent conversations
```

使用 `/rename` 给会话起描述性名称（`"oauth-migration"`、`"debugging-memory-leak"`），以便你稍后可以找到它们。像对待分支一样对待会话。不同的工作流可以有单独的、持久的上下文。

***

## 自动化和扩展

一旦你对一个 Claude 有效，通过并行会话、headless 模式和扇出模式来增加你的输出。

到目前为止，一切都假设一个人、一个 Claude 和一个对话。但 Claude Code 可以水平扩展。本部分中的技术展示了你如何完成更多工作。

### 运行 headless 模式

<Tip>
  在 CI、pre-commit hooks 或脚本中使用 `claude -p "prompt"`。添加 `--output-format stream-json` 用于流式 JSON 输出。
</Tip>

使用 `claude -p "your prompt"`，你可以无头运行 Claude，无需交互式会话。Headless 模式是你将 Claude 集成到 CI 管道、pre-commit hooks 或任何自动化工作流中的方式。输出格式（纯文本、JSON、流式 JSON）让你以编程方式解析结果。

``` 
# One-off queries
claude -p "Explain what this project does"

# Structured output for scripts
claude -p "List all API endpoints" --output-format json

# Streaming for real-time processing
claude -p "Analyze this log file" --output-format stream-json
```

### 运行多个 Claude 会话

<Tip>
  并行运行多个 Claude 会话以加快开发、运行隔离的实验或启动复杂的工作流。
</Tip>

有三种主要方式来运行并行会话：

* [Claude Desktop](https://code.claude.com/docs/zh-CN/desktop)：以视觉方式管理多个本地会话。每个会话都获得自己的隔离 worktree。
* [网络上的 Claude Code](https://code.claude.com/docs/zh-CN/claude-code-on-the-web)：在 Anthropic 的安全云基础设施中的隔离 VM 上运行。
* [Agent teams](https://code.claude.com/docs/zh-CN/agent-teams)：具有共享任务、消息和团队主管的多个会话的自动协调。

除了并行化工作外，多个会话还支持质量聚焦的工作流。新鲜的上下文改进代码审查，因为 Claude 不会偏向于它刚刚编写的代码。

例如，使用 Writer/Reviewer 模式：

| 会话 A（Writer）               | 会话 B（Reviewer）                                                            |
| -------------------------- | ------------------------------------------------------------------------- |
| `为我们的 API 端点实现速率限制器`       |                                                                           |
|                            | `审查 @src/middleware/rateLimiter.ts 中的速率限制器实现。查找边界情况、竞态条件和与我们现有中间件模式的一致性。` |
| `这是审查反馈：[会话 B 输出]。解决这些问题。` |                                                                           |

你可以对测试做类似的事情：让一个 Claude 编写测试，然后另一个编写代码来通过它们。

### 跨文件扇出

<Tip>
  循环遍历任务，为每个任务调用 `claude -p`。使用 `--allowedTools` 限定批量操作的权限。
</Tip>

对于大型迁移或分析，你可以在许多并行 Claude 调用中分配工作：

<Steps>
  <Step title="生成任务列表">
    让 Claude 列出所有需要迁移的文件（例如，`list all 2,000 Python files that need migrating`）
  </Step>

  <Step title="编写脚本来循环遍历列表">
    ``` 
    for file in $(cat files.txt); do
      claude -p "Migrate $file from React to Vue. Return OK or FAIL." \
        --allowedTools "Edit,Bash(git commit *)"
    done
    ```
  </Step>

  <Step title="在几个文件上测试，然后大规模运行">
    根据前 2-3 个文件出错的情况改进你的提示，然后在完整集合上运行。`--allowedTools` 标志限制 Claude 可以做什么，这在你无人值守运行时很重要。
  </Step>
</Steps>

你也可以将 Claude 集成到现有的数据/处理管道中：

``` 
claude -p "<your prompt>" --output-format json | your_command
```

在开发期间使用 `--verbose` 进行调试，在生产中关闭它。

### 安全自主模式

使用 `claude --dangerously-skip-permissions` 绕过所有权限检查并让 Claude 不间断地工作。这对于修复 lint 错误或生成样板代码等工作流很有效。

<Warning>
  让 Claude 运行任意命令是有风险的，可能导致数据丢失、系统损坏或数据泄露（例如，通过提示注入攻击）。为了最小化这些风险，在没有互联网访问的容器中使用 `--dangerously-skip-permissions`。

  启用沙箱（`/sandbox`）后，你会获得类似的自主权，但安全性更好。沙箱预先定义边界，而不是绕过所有检查。
</Warning>

***

## 避免常见的失败模式

这些是常见的错误。尽早识别它们可以节省时间：

* **厨房水槽会话。** 你从一个任务开始，然后问 Claude 一些无关的东西，然后回到第一个任务。上下文充满了无关的信息。
  > **修复**：在不相关的任务之间使用 `/clear`。
* **一次又一次地纠正。** Claude 做错了什么，你纠正它，它仍然是错的，你再次纠正。上下文被失败的方法污染。
  > **修复**：在两次失败的纠正后，`/clear` 并写一个更好的初始提示，包含你学到的东西。
* **过度指定的 CLAUDE.md。** 如果你的 CLAUDE.md 太长，Claude 会忽略一半，因为重要的规则在噪音中丢失。
  > **修复**：无情地修剪。如果 Claude 已经在没有指令的情况下正确地做某事，删除它或将其转换为 hook。
* **信任然后验证的差距。** Claude 产生一个看起来合理的实现，但不处理边界情况。
  > **修复**：始终提供验证（测试、脚本、屏幕截图）。如果你无法验证它，不要发布它。
* **无限探索。** 你要求 Claude "调查"某些东西而不限定范围。Claude 读取数百个文件，填满上下文。
  > **修复**：狭隘地限定调查范围或使用 subagents，以便探索不会消耗你的主上下文。

***

## 培养你的直觉

本指南中的模式不是一成不变的。它们是通常效果很好的起点，但可能不是每种情况的最优选择。

有时你\_应该\_让上下文累积，因为你深入一个复杂的问题，历史很有价值。有时你应该跳过规划，让 Claude 弄清楚，因为任务是探索性的。有时模糊的提示正是你想要的，因为你想看看 Claude 如何解释问题，然后再限制它。

注意什么有效。当 Claude 产生很好的输出时，注意你做了什么：提示结构、你提供的上下文、你所在的模式。当 Claude 遇到困难时，问为什么。上下文太嘈杂了吗？提示太模糊了吗？任务对于一次通过来说太大了吗？

随着时间的推移，你会培养任何指南都无法捕捉的直觉。你会知道何时具体以及何时开放，何时规划以及何时探索，何时清除上下文以及何时让它累积。

## 相关资源

<CardGroup cols={2}>
  <Card title="Claude Code 如何工作" icon="gear" href="https://code.claude.com/docs/zh-CN/how-claude-code-works">
    理解代理循环、工具和上下文管理
  </Card>

  <Card title="扩展 Claude Code" icon="puzzle-piece" href="https://code.claude.com/docs/zh-CN/features-overview">
    在 skills、hooks、MCP、subagents 和 plugins 之间选择
  </Card>

  <Card title="常见工作流" icon="list-check" href="https://code.claude.com/docs/zh-CN/common-workflows">
    调试、测试、PR 等的分步配方
  </Card>

  <Card title="CLAUDE.md" icon="file-lines" href="https://code.claude.com/docs/zh-CN/memory">
    存储项目约定和持久上下文
  </Card>
</CardGroup>