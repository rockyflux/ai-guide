---
title: AI 智能体（Agent）
weight: 3
bookCollapseSection: false
bookFlatSection: true
---

## 省流版

- **Prompt**：「**每次都要说**」
- **Rules**：「**永远生效**」
- **Agent**：「**负责思考和行动，但会遵守你给的规矩**」
- **Claude.md**：「**告诉它你是谁、你在什么环境下工作**」
- **Skill**：「**告诉它这类事情要按什么流程来，不能乱来**」
- **MCP**：「**让它真的能读文件、跑命令、调接口**」


## 从打工人视角理解这些概念

| 概念 | 类比 | 核心作用 |
| --- | --- | --- |
| Agent | 打工人 | 理解任务、分析问题、做决策 |
| Claude.md | 企业文化 / 业务定位 | 给员工一个长期稳定的大方向 |
| Skill | SOP / 内部流程文档 | 规定某类事情必须 / 禁止怎么做 |
| MCP | 电脑 / 手机 / 内部系统 | 生产工具，高效解决问题 |

**一句话总结：**

> **Agent 是 “人”，Claude.md 是 “环境”，Skill 是 “规矩”，MCP 是 “工具”。**

## 如何判断 Skill / Claude.md / Prompt 的使用场景

| 判断维度 | Claude.md | Skill | Prompt |
| --- | --- | --- | --- |
| 作用半径 | 全项目 / 全会话 | 某一类任务 | 当前一次对话 |
| 是否长期稳定 | 是 | 通常是 | 否 |
| 是否任务相关 | 否（与任务无关） | 是（高度相关） | 是（强相关） |
| 是否流程 / 边界控制 | 否 | 是 | 偶尔 |
| 是否需要可启用 / 禁用 | 否 | 是 | 是（天然） |
| 失败成本高时是否适合 | 否 | 是 | 否 |
| 是否可能干扰其他任务 | 高（若写错） | 低（可控） | 最低 |
| 典型内容 | 环境、事实入口、约定 | SOP、护栏、禁止 / 必须 | 临时目标、说明 |
| 一句话定位 | 世界观 / 背景设定 | 怎么干 & 不能乱来 | 这次你要干啥 |

补充：本目录还包含 `Rules / Commands / Hooks / Subagents` 等模块，它们分别解决“底线约束”“显式入口”“关键点自动守卫”“角色/权限隔离”等问题。

## 例子：规则应该写在哪

| 规则示例 | 正确位置 | 原因 |
| --- | --- | --- |
| 使用 Windows，命令用 PowerShell | Claude.md | 环境常量 |
| 代码风格：可读性优先 | Claude.md | 长期风格约束 |
| 修改前声明 Allow / Deny 文件 | Skill | 执行边界控制 |
| 多 Agent 协作避免修改同一文件 | Skill | 执行阶段约束 |
| 输出前请自检逻辑 | Prompt | 成本高、非必需 |
| 尽量简洁回答 | Prompt / Claude.md | 表达偏好 |
| 本次只读代码不允许修改 | Prompt 或 Skill | 场景性限制 |

---
🎯 终极目标：
通过 Rules 守底线 + Skills 提能力 + MCP 接现实 + Prompt 精调度，
让 AI 从“聊天机器人”进化为“能干活的数字员工” 。

## 入口页

- [Prompt](Prompt.md)
- [Rules](rules.md)
- [Commands 指令系统](commands.md)
- [Agent Skills](skills.md)
- [Model Context Protocol (MCP)](mcp.md)
- [Hook](hook.md)
- [Subagents](subagents.md)
