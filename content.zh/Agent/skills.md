---
title: Agent Skills
weight: 2
date: 2026-02-09T23:34:00+08:00
---

## 为什么使用 Skills

Skills 是可复用的、基于文件系统的资源，为 Claude 提供领域特定专业知识：工作流、上下文和最佳实践，将通用代理转变为专家。

关键优势：

- 专业化 Claude：为特定领域任务定制能力
- 减少重复：创建一次，自动使用
- 组合能力：组合 Skills 构建复杂工作流

## 使用 Skills

Anthropic 为常见文档任务（PowerPoint、Excel、Word、PDF）提供预构建的 Agent Skills，你也可以创建自己的自定义 Skills。两者工作方式相同，Claude 在相关时自动使用它们。

## 什么是 agent 技能（Claude skills）

技能可以理解为针对某类任务的 **SOP/检查清单/成功标准**：把“怎么做、做到什么程度算完成、何时必须停下来问人”写清楚，让 Agent 在相关任务出现时按需加载并遵循。

写技能时通常有两条很重要的原则：

**1、描述是用来 "路由" 的，不是用来阅读的。**

描述需要简短、具体，并且包含任务实际会用到的关键词。如果你写得太抽象或太 "诗意"，Claude 很可能会直接略过它。

**2、正文是流程说明，而不是百科全书。**

重点放在检查清单和成功标准上。如果你有很长的参考文档，最好放在单独的文件中，然后在技能中链接它们，让 Agent 只在必要时才去读。

## 技能如何帮助 agent

技能的作用不是“让 Agent 更聪明”，而是**让信息更聚焦、更容易被正确使用**：把某类任务的关键约束与验收标准集中起来，减少反复解释与遗漏。

## 技能 vs. 规则：有意把规则写短

技能并不是用来取代规则的。规则是不可妥协的底线。但一旦你开始使用技能，你写规则的方式就应该彻底改变.

一个很好的默认划分是：

- **规则（Rules）**：仓库级要求、安全约束、命名规范、以及如何运行测试
- **技能（Skills）**：针对特定工作流、工具使用方式或代码评审规范的操作手册

如果你纠结某条内容该放在哪里，可以用这个判断标准：即使你完全没特意考虑的情况，你也希望这条指令始终生效吗？

- 是？那就是规则.
- 否？那就是技能.

下面是一些更具体的例子：

- 永远不要提交 `.env` 文件 → 规则
- 当你修改计费相关代码时，运行这三个集成测试 → 技能
- 设计系统使用这些 token 名称 → 规则
- 编写发布说明时，遵循这个格式和检查清单 → 技能

一个非常实用的模式，是把规则和技能结合起来，让仓库里的规则主要承担 "路由" 的作用。例如：

- 当你修改 UI 组件时，加载 ui-change 技能.
- 当你在调试生产环境错误时，加载 incident-triage 技能.

这样可以让始终生效的 prompt 保持很小，同时让 agent 变得更加灵活、可适配.

## 如何写一个优秀的技能

技能很容易走上和文档一模一样的老路：一开始目标清晰，最后却变成一堵谁都不想读的文字墙 —— 包括你的 AI agent.

下面是一些保持技能可控的方法：

- 写一个真的能 "路由" 的描述。如果 agent 根据你的 prompt 都找不到这个技能，那里面写得再好也没用.
- 保持技能定义文件极简。把它当成快速上手指南，而不是资料仓库.
- 把重内容链接出去。使用渐进式暴露，把大模板和长参考文档放到单独的文件里，保持上下文窗口干净.
- 清楚地定义 "完成" 的标准。技能的目标是减少歧义，而不是制造更多噪音.

### 一个最小化的技能示例：UI 修改

```go
--- name: ui-change description: Use this skill when you're changing UI components, styling, layout, or interaction behavior. ---

This skill helps you to review and implement UI changes using the design system.

## Constraints

- Important: Use existing design tokens and components
- Do not use magic numbers or raw pixel values
- Keep accessibility intact: keyboard, labels, focus, contrast
- Keep diffs small and avoid unrelated refactors

## Tokens

The repo's global tokens are in `variables.css`.

### Spacing
[info about when to use which spacing]

### Color
[info about using color tokens]

### [etc.]

## Components
[]

## Workflow

1. Restate the change in one sentence.
2. Identify the closest existing component patterns.
3. Implement the smallest diff that matches the spec.
4. Verify responsive behavior, focus states, and keyboard navigation.
5. If anything is ambiguous, stop and ask for confirmation.
6. Ensure your change meets the below success criteria.

## Success Criteria

- Your change does not use new tokens, magic numbers, raw pixel values, or new design components unless the user explicitly asked you for this.
- Your change does not break on mobile, table, or desktop viewports.
- Your change can be completely usable if the end user does not have a mouse or is using a screen reader.
- You have told the user exactly what you changed and confirmed verbally with them the above three points.
```

### 一个值得拥有的入门级技能库

如果你真的在做生产级的 AI 编程配置，你迟早会反复造这些轮子.

不如直接从下面这些基础技能开始：

- **仓库定位**：入口在哪里？测试放在哪？约定是什么？
- **UI 修改**：如何使用设计 token，如何检查可访问性？
- **调试**：如何复现问题？哪些日志才重要？
- **验证**：需要运行哪些命令才能证明修改是有效的？
- **PR 规范**：如何写提交信息？如何更新变更日志？
- **安全**：边界在哪里？（比如：请不要删除生产数据库。）

这些技能不需要写成小说。关键不是字数，而是让 agent 停止猜测，开始遵循你的标准.

### 一个 "好技能" 检查清单

如果你想让技能保持小而有用，可以用下面这份清单来检查。每个技能都应该能回答这 6 个问题：

- **1、触发条件（描述）**：agent 在什么情况下应该加载它？
- **2、输入**：开始之前，它需要你或仓库提供哪些信息？
- **3、步骤**：具体流程是什么？
- **4、检查**：如何证明它真的成功了？
- **5、停止条件**：什么时候应该停下来，向人类提问？
- **6、恢复方式**：如果检查失败了，该怎么办？

### 常见失败模式（技能的问题）

这些错误人人都会犯，关键是能识别出来：

- **百科全书型**：如果一个技能读起来像 wiki 页面，就把它拆开。拆成多个小文件，只在需要时加载.
- **全都要型**：如果一个技能适用于所有任务，那它就不是技能，而是规则或仓库约定.
- **暗号型**：如果 agent 从来不加载这个技能，说明你的描述太抽象。改成你日常真正会用的说法.
- **脆弱型**：如果仓库一变技能就坏，说明你硬编码了太多细节。把具体内容移到被引用的文件中，让技能本身只保留流程逻辑.

## 向前走，用好技能（Go forth and skill）

技能并不是什么魔法。它们只是一种打包和加载指令的策略.

把规则用于那些不变的约束，把指令用于明确、可控的工作流；把技能留给可选但具体的专业能力；而当你已经尝试用技能却仍然频频出问题时，再考虑使用 agent / 子 agent.

如果你能坚持这样的划分，你就能在更少 "prompt 淤泥" 的情况下，交付更好的自动化成果。你的 agent 也会不再像一个脆弱的脚本，而是开始真正表现得像一个协作伙伴.

## 参考链接

- Agent Skills：<https://claudecn.com/docs/agent-skills/>
- SkillsHunt：<https://skillshunt.io/>
- baoyu-skills：<https://github.com/jimliu/baoyu-skills>
- Agent Skills：<https://agentskills.io/home>
- Skills.sh：<https://skills.sh/>
- Vercel Skills：<https://github.com/vercel-labs/skills>
- ClawHub Skills：<https://clawhub.ai/skills>
- Skill Creator：https://github.com/anthropics/skills/tree/main/skills/skill-creator
