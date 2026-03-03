---
title: Rules
weight: 5
date: 2026-02-09T23:34:00+08:00
noTocArea: true
bookToc: false
---

## Rules（系统级指令 / 全局约束层）

Rules 是写给 Agent 的“系统级指令”。它们会在提示词层面提供**持久、可复用**的上下文，并在每次对话/任务中被注入到模型上下文的前部，从而让 AI 在生成代码、理解编辑、执行工作流时保持一致的行为边界与偏好。

在代理式 IDE（如 Cursor、Windsurf、Claude Code）中，AI 的行为通常由三层信息共同决定：

> **分工关系**：Rules 定义边界与默认偏好，项目说明文件（如 `AGENTS.md`、`CLAUDE.md`）提供语境，Prompt/任务描述触发具体执行。

官方说明见：[Cursor Rules 文档](https://cursor.com/cn/docs/context/rules)。

---

## Cursor 里有哪些“规则”

Cursor 支持多种规则来源（概念上优先级从高到低）：

- **Team Rules（团队规则）**：在管理后台集中配置，适用于 Team/Enterprise；可强制所有成员启用。
- **Project Rules（项目规则）**：存放在仓库内 `.cursor/rules/`，会进入版本控制；可按文件范围或智能相关性应用。
- **User Rules（用户规则）**：在本机 Cursor 设置中全局生效，适用于你所有项目。
- **`AGENTS.md`**：纯 Markdown 指令文件（无元数据），作为 `.cursor/rules` 的简洁替代方案；支持在子目录放置**嵌套 `AGENTS.md`**，就近覆盖/补充父级指令。

> 备注：旧版 `.cursorrules` 仍受支持，但官方已明确**即将废弃**，建议迁移到 `.cursor/rules/` 或 `AGENTS.md`。
>
> 另：**User Rules 仅对 Agent（Chat）生效**，不会应用到 Inline Edit（Ctrl/Cmd+K）。

---

## Project Rules（`.cursor/rules/`）怎么组织

项目规则以 Markdown 文件形式存在于 `.cursor/rules/` 中（支持 `.md` / `.mdc`）。当你希望对规则的触发条件做精细控制时，推荐用带 frontmatter 的 `.mdc`：

- **`description`**：用一句话描述此规则解决什么问题（配合“智能应用”更有效）。
- **`globs`**：规则只对匹配的文件路径生效（适合“按目录/模块约束”）。
- **`alwaysApply`**：是否每次对话都应用（一般仅用于最核心、最短的硬约束）。

示例结构：

```bash
.cursor/rules/
  api-guidelines.md
  react-patterns.mdc
  frontend/
    components.mdc
```

示例规则（`.mdc`）：

```md
---
description: "前端组件编写规范与约束"
globs:
  - "layouts/**/*.html"
  - "static/js/**/*.js"
alwaysApply: false
---

- 优先复用现有组件与局部模板，避免新增重复逻辑
- 修改样式时同步检查暗色/浅色模式与移动端断点
- 只在必要时引入新依赖，并说明原因与替代方案
```

---

## 规则类型与触发方式（实用视角）

从使用方式看，你可以把规则分成四类（对应 Cursor 的几种应用策略）：

- **Always Apply（总是应用）**：每次对话都生效；务必保持短小、稳定、少变。
- **Apply Intelligently（智能应用）**：由 Agent 根据 `description` 判断相关性，适合“按场景触发”的经验规则。
- **Apply to Specific Files（按文件生效）**：通过 `globs` 精确限定范围，适合“某目录统一规范”。
- **Apply Manually（手动应用）**：在对话中通过 `@规则名` 触发，适合模板类/检查清单类规则。

---

## 最佳实践（写出“可用的”规则）

- **聚焦高频问题**：规则最好是你反复需要提醒 AI 的内容，而不是百科全书式整理。
- **可执行、可验证**：用明确动作描述（例如“新增依赖要说明原因并给替代方案”），避免“写得更优雅”这类模糊表述。
- **控制长度与颗粒度**：把大规则拆成多个可组合的小规则；单条规则尽量控制在几百行以内。
- **引用文件而非复制代码**：需要示例时优先 `@` 引用仓库内的标准实现文件，避免规则与代码漂移。
- **避免重复既有工具职责**：纯格式/风格类问题优先交给 formatter/linter；规则只补充项目特有约束。

---

### AI 编程工具规则配置路径

| 工具                     | 全局 Rules 物理路径                                             | 项目级 Rules 物理路径                        |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| **Cursor**             | `C:\Users\用户名\.cursor\rules\`（内部存储，非单一md）                 | 项目根目录 `.cursorrules`                  |
| **Windsurf (Codeium)** | `C:\Users\用户名\.codeium\windsurf\memories\global_rules.md` | 项目根目录 `.windsurfrules`                |
| **Continue.dev**       | `C:\Users\用户名\.continue\config.json`                      | 项目 `.continue/config.json`            |
| **Claude Code**        | ❌ 无真正全局 rules 文件                                          | 项目根目录 `CLAUDE.md`                     |
| **Copilot**            | ❌ 无规则文件                                                   | 企业版 `.github/copilot-instructions.md` |



## `AGENTS.md`：更轻量的项目指令

`AGENTS.md` 是一个开放的 Markdown 指令格式，可以把“如何在这个项目里工作”的约定写成一份易读文档。它的目标是减少不同 AI 工具之间的配置碎片化，让“项目指令”更接近一份**为 AI 准备的 README**。

Cursor 支持在子目录中放置嵌套 `AGENTS.md`：它会与父目录指令**合并**，并且**越具体的指令优先级越高**（更贴近当前目录的约束会覆盖更上层的宽泛约束）。

更多信息见：[AGENTS.md 官方站点](https://agents.md/)。

一个简洁示例：

```markdown
# Project Instructions

## Language
- 所有回答与文档输出使用简体中文（代码标识符遵循既有命名）

## Workflow
- 修改前先定位现有实现与约束，再做最小改动
- 涉及用户可见行为变更时，补充更新点与回滚方式

## Docs
- 文档结构优先保持一致：背景 → 结论 → 步骤 → 注意事项 → 参考
```

---

## 参考与扩展

- [Cursor Rules 文档](https://cursor.com/cn/docs/context/rules)
- `https://cursor.directory/rules`
- `https://dotcursorrules.com/`
- `https://claudecn.com/docs/claude-code/advanced/rules-playbook/`
