---
title: Subagents
weight: 20
date: 2026-02-09T23:34:00+08:00
---


## 子代理架构（Sub-Agent）

>子代理是 Cursor/Claude Code 主代理可以将任务委派给的专业化 AI 助手。每个子代理都在自己的上下文窗口中运行，处理特定类型的工作，并将结果返回给父代理。使用子代理可以拆解复杂任务、并行开展工作，并在主对话中保留上下文。

>Subagents 是处理特定类型任务的专门 AI 助手。每个 subagent 在自己的上下文窗口中运行，具有自定义系统提示、特定的工具访问权限和独立的权限。当 Claude 遇到与 subagent 描述相匹配的任务时，它会委托给该 subagent，该 subagent 独立工作并返回结果。

>子代理架构则换了一个思路：既然一个模型的上下文有限，那就让多个模型分工合作，每个模型只需要关注自己负责的那部分上下文，即分而治之。[http://localhost:1313/large-models/context-scarcity-rag-memory-skills/#3子代理架构sub-agent通过分工实现上下文隔离](http://localhost:1313/large-models/context-scarcity-rag-memory-skills/#3子代理架构sub-agent通过分工实现上下文隔离)

`subagents` 的价值是“**换脑子**”：把某类任务的角色、目标、输出格式与权限边界隔离出来，让它像专职同事一样稳定完成长链路工作。

- [https://cursor.com/cn/docs/context/subagents](https://cursor.com/cn/docs/context/subagents)
- [https://code.claude.com/docs/zh-CN/sub-agents](https://code.claude.com/docs/zh-CN/sub-agents)






## 为什么使用 Subagents

Subagents 帮助你：

- 保留上下文 - 将探索和实现保留在独立上下文中，不污染主对话
- 强制约束 - 限制 Subagent 可使用的工具
- 复用配置 - 用户级 Subagent 跨项目可用
- 专业化行为 - 使用专注的系统提示处理特定领域
- 控制成本 - 将任务路由到更快、更便宜的模型如 Haiku

## 内置 Subagents

Claude Code 包含以下内置 Subagent，Claude 会在适当时自动使用：

### Explore
快速、只读的代理，优化用于搜索和分析代码库。

模型：Haiku（快速、低延迟）
工具：只读工具（禁止 Write 和 Edit）
用途：文件发现、代码搜索、代码库探索

Claude 在需要搜索或理解代码库但不做修改时委托给 Explore。

### Plan
计划模式下使用的研究代理，在呈现计划之前收集上下文。

模型：继承主对话模型
工具：只读工具
用途：规划阶段的代码库研究

### general-purpose
通用代理，处理需要探索和操作的复杂多步任务。

## 一句话定位

`subagents` 负责回答：**这件事需要换角色/隔离权限/治理过程，让输出更稳定。**

## 适用场景

- **需要专职角色**：架构评审、代码审查、安全审计、复杂排障、发布把关。
- **链路长/步骤多**：需要更强的过程治理（阶段划分、停顿点、验收项）。
- **需要权限隔离**：例如只允许做只读分析，或所有写入/执行都需要二次确认。
- **需要降低上下文污染**：把子任务从主对话拆出去。

## 快速决策

一个好用的区分法是：

- **skills 改变的是“知道什么”（SOP/清单/方法论）**。
- **subagent 改变的是“谁在干活”（角色/权限/工作流/输出契约）**。

当你遇到以下信号，优先 subagent：

- 需要做**方案权衡**，并给出取舍理由。
- 需要做**审查/把关**（质量、安全、边界、兼容性）。
- 需要做**复杂排障**（多轮假设验证、反复收集证据）。
- 需要**严格的输入/输出格式**，否则无法落地。
- 需要**权限隔离**：例如只读分析/禁止写入/外部请求需确认。
- 主对话上下文容易被污染：需要把子任务拆出去并行探索。



### 配置截图
<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-start;">
  <img src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1-Fpi0tZOZ-8nWOeTfnnV3kqKIVURgACSyMAAplwYFRi2eSXcI-O_joE.png" alt="subagents-diagram-1" style="max-width: 48%; flex: 1; min-width: 200px;" />
  <img src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1_Vpi0zBlNh8e1ZYzTM_fiKstrg9twACYCMAAplwYFT1_Npmb9yXkjoE.png" alt="subagents-diagram-2" style="max-width: 48%; flex: 1; min-width: 200px;" />
</div>


## 参考链接

- [Subagents 子代理](https://claudecn.com/docs/claude-code/advanced/subagents/)
- [https://github.com/VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)
