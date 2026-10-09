---
title: Subagents
weight: 7
date: 2026-02-09T23:34:00+08:00
bookHidden: false
---

## 什么是子智能体

子智能体是 AI 编程工具可委派任务的专用 AI 助手。每个子智能体都在独立的上下文窗口中运行，负责处理特定类型的工作，并将结果返回给父智能体。使用子智能体可拆解复杂任务、并行处理工作，并保留主对话中的上下文。

**一句话定位**：这件事需要换角色 / 隔离上下文 / 并行推进，让长链路输出更稳。

子智能体从空白上下文起步，看不到主对话历史；父智能体必须在提示词里把必要信息带过去。Cursor、Claude Code、Codex 等都支持这一机制，文件位置与字段名略有差异。

| 能力 | 说明 |
| --- | --- |
| **上下文隔离** | 探索、跑命令、浏览器操作产生的中间垃圾不会撑爆主对话 |
| **并行执行** | 可同时启动多个子智能体，分别处理代码库不同部分 |
| **专业能力** | 可配置自定义提示词、工具权限与模型，专攻某一类任务 |
| **可复用性** | 自定义子智能体可在多项目间复用（用户级）或随仓库共享（项目级） |

官方说明见：[Cursor 子智能体](https://cursor.com/cn/docs/subagents)、[Claude Code Sub-agents](https://code.claude.com/docs/zh-CN/sub-agents)。

---

## 前台与后台

| 模式 | 行为 | 最适用场景 |
| --- | --- | --- |
| **前台** | 等待子智能体完成后再继续，立即拿到结果 | 需要输出的顺序任务 |
| **后台** | 立即返回，子智能体独立执行 | 长时间任务或并行工作流 |

---

## 内置子智能体（以 Cursor 为例）

Cursor 内置三个子智能体，Agent 会在适当时自动调用，无需配置：

| 子智能体 | 用途 | 为何要隔离 |
| --- | --- | --- |
| **Explore** | 搜索与分析代码库 | 探索会产生大量中间输出；常用更快模型做多路并行搜索 |
| **Bash** | 跑一系列 shell 命令 | 命令日志冗长；隔离后父智能体只做决策，不吞日志 |
| **Browser** | 通过 MCP 控制浏览器 | DOM / 截图噪声大；子智能体筛成相关结果再回传 |

共同动机：**中间输出多、适合专用提示与工具、易占满上下文**。隔离后父智能体只看到最终摘要，还能为子任务选更便宜的模型。

Claude Code 侧常见内置角色略有不同（如 Explore / Plan / general-purpose），概念一致：把「会撑爆窗口」的工作拆出去。

---

## 何时用子智能体（vs Skills）

| 适合子智能体 | 适合 [Skills]({{< relref "agent/skills" >}}) |
| --- | --- |
| 长期研究，需要隔离上下文 | 目的单一（生成变更日志、格式化） |
| 要并行推进多条工作流 | 需要快速、可重复执行 |
| 任务跨多步，需要领域角色 | 一次就能做完 |
| 希望独立验证工作成果 | 不需要单独的上下文窗口 |

快速区分：

- **Skills** 改变的是「知道什么」（SOP / 清单 / 方法论）
- **Subagents** 改变的是「谁在干活」（角色 / 权限 / 独立上下文 / 输出契约）

出现这些信号时，优先子智能体：方案权衡、审查把关、复杂排障、严格输入输出格式、权限隔离（只读）、主对话易被探索过程污染。

---

## 自定义子智能体

### 文件位置

| 类型 | 位置 | 适用范围 |
| --- | --- | --- |
| **项目** | `.cursor/agents/`、`.claude/agents/`、`.codex/agents/` | 仅当前项目 |
| **用户** | `~/.cursor/agents/`、`~/.claude/agents/`、`~/.codex/agents/` | 当前用户的所有项目 |

同名冲突时：项目级优先；多目录并存时，`.cursor/` 通常高于 `.claude/` / `.codex/`。

### 文件格式

每个子智能体是带 YAML frontmatter 的 Markdown 文件：

```markdown
---
name: security-auditor
description: Security specialist. Use when implementing auth, payments, or handling sensitive data.
model: inherit
readonly: true
---

You are a security expert auditing code for vulnerabilities.

When invoked:
1. Identify security-sensitive code paths
2. Check for common vulnerabilities (injection, XSS, auth bypass)
3. Verify secrets are not hardcoded
4. Review input validation and sanitization

Report findings by severity:
- Critical (must fix before deploy)
- High (fix soon)
- Medium (address when possible)
```

### 常用配置字段（Cursor）

| 字段 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `name` | string | 由文件名生成 | 显示名与标识；小写 + 连字符 |
| `description` | string | — | 出现在 Task 工具提示中；Agent 据此决定是否委派 |
| `model` | string | `inherit` | `inherit` 或具体模型 ID（可带参数，如 `claude-opus-5[effort=high]`） |
| `readonly` | boolean | `false` | `true` 时限制写入与会改状态的 shell |
| `is_background` | boolean | `false` | `true` 时后台跑，不阻塞父智能体 |

`description` 很关键：写上「主动使用」「始终用于……」等措辞，更容易被自动委派。

---

## 怎么调用

### 自动委派

Agent 会根据任务复杂度、自定义子智能体的 `description`、当前上下文与可用工具，主动把工作拆出去。

### 显式调用

用 `/name`，或在对话里直接点名：

```text
> /verifier confirm the auth flow is complete
> 使用验证方子智能体确认认证流程已完成
> 让安全审计子智能体审查支付模块
```

### 并行执行

父智能体可在一条消息里发起多个 Task 调用，多个子智能体各自独立上下文、并行跑，全部完成后再由父智能体汇总、消冲突、整合输出。

短提示：

```text
> 并行评审 API 更改并更新文档
```

更完整的委派写法（适合多独立任务）：

```text
你作为协调主智能体，把下面 3 个独立任务派发给多个子智能体并行执行。
子智能体各自独立上下文，并行执行；全部完成后由你汇总结果、解决冲突、整合输出。

任务 A：分析项目依赖，列出过时包
任务 B：扫描代码，找出所有 TODO 注释
任务 C：检查 package.json 脚本，校验是否可正常运行
```

通用模板（把任务描述换成你的清单即可）：

```text
你是主协调智能体，启用并行子智能体执行。
拆分下面独立任务，派发给多个子智能体同时运行，全部完成后汇总所有结果，处理文件冲突，输出整合后的代码与报告。
任务描述：xxx。
约束：子任务之间互不依赖，并行执行；子智能体各自独立上下文；最后由你统一合并。

```

要点：

- **写清角色**：你是协调者，负责拆派与汇总，不要自己串行做完三件事
- **任务彼此独立**：互不依赖才能真并行；有先后依赖时改用前台顺序委派
- **约定回收格式**：例如每项给出「结论 / 证据路径 / 风险」，方便主智能体合并
- **默认共享 checkout**：同时改文件可能互相覆盖；只读分析（如上例）通常安全。需要隔离写入时，让每个子智能体跑在独立 worktree / 云端环境

---

## 常见用法

### 验证方（Verifier）

独立核实「声称已完成」的工作是否真的能跑通：查实现、跑测试、找漏掉的边界，不轻信口头完成。

适合：工单结案前做端到端确认；发现「只写了一半」；确认测试是真过而不只是有测试文件。

### 编排器模式

复杂工作流由父智能体串多个专职子智能体：

1. **规划者**分析需求、出技术方案  
2. **实现者**按方案落地  
3. **验证者**对照需求验收  

每次交接用结构化输出，保证下一个智能体拿到清晰上下文。



## 性能与成本

| 优势 | 代价 |
| --- | --- |
| 上下文隔离 | 每个子智能体都要重新搜集上下文 |
| 并行执行 | 多条上下文同时跑，token 用量上升 |
| 专注特定任务 | 简单任务可能比主智能体更慢 |

子智能体各自计费；并行五个，用量大致是单智能体的数倍。简单快任务直接让主智能体做；复杂、长链路、可并行时再拆。

---

## 与其他模块的边界

- **subagents vs skills**：skills 是按需 SOP；subagents 是独立上下文里的专职角色  
- **subagents vs commands**：commands 是你显式触发的入口；subagents 可由 Agent 自动委派，也可 `/name` 点名  
- **subagents vs hooks**：hooks 在关键节点自动守卫；子智能体结束后可用 hooks 收集输出  
- **subagents vs rules**：rules 是全局底线；子智能体在底线之上再带自己的角色提示与权限  

---

## 参考链接

- [Cursor 子智能体](https://cursor.com/cn/docs/subagents)
- [Claude Code Sub-agents](https://code.claude.com/docs/zh-CN/sub-agents)
- [Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)
- [Subagents 子代理（社区整理）](https://claudecn.com/docs/claude-code/advanced/subagents/)
