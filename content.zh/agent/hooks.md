---
title: Hooks
weight: 5
date: 2026-02-09T23:34:00+08:00
---

## Claude Code 钩子入门


## 什么是 Hook

`hooks` 的定位是"**必须发生什么**"：在关键节点自动执行守卫与校验，让系统更稳定、更可控，而不是让 Agent 做更多"聪明但不可控"的事。

- Hooks 的价值在于：把你曾经踩过的坑（忘跑测试、dev server 没日志、误 push、console.log 遗留、文档碎片化）变成自动化护栏。下面挑选最通用的几类配方，并说明适用边界。

- Claude Code 钩子是用户定义的 shell 命令，在 Claude Code 生命周期的各个点执行。钩子提供对 Claude Code 行为的确定性控制，确保某些操作总是发生，而不是依赖 LLM 选择运行它们。

**注意**：Hooks 会直接影响你的工作流。建议先用"提醒型"，再逐步上"阻断型"。

## 一句话定位

`hooks` 负责回答：**在什么关键节点，要自动做哪些守卫/校验/记录？**

## 适用场景

- **强制校验**：在交付前必须完成验证（检查/测试/构建等）。
- **风险闸门**：高风险动作前必须二次确认，并明确影响范围。
- **一致性守卫**：关键输出必须包含某些字段（验收项、回滚方案、验证步骤）。
- **审计与记录**：对关键动作做可追溯记录。



## 配置 
[https://code.claude.com/docs/zh-CN/hooks#hooks](https://code.claude.com/docs/zh-CN/hooks#hooks)
- Claude Code hooks 在您的 设置文件 中配置：
- ~/.claude/settings.json - 用户设置
- .claude/settings.json - 项目设置
```text
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/prompt-validator.py"
          }
        ]
      }
    ]
  }
}
```
#### Skills、Agents 和 Slash Commands 中的 Hooks
除了设置文件和插件外，hooks 还可以直接在 Skills、subagents 和 slash commands 中使用 frontmatter 定义。这些 hooks 的作用域限于组件的生命周期，仅在该组件处于活动状态时运行。
支持的事件：PreToolUse、PostToolUse 和 Stop

```text
name: secure-operations
description: Perform operations with security checks
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/security-check.sh"
```

## 快速决策

- 需要"总是生效的底线"：用 `rules`。
- 需要"在关键点自动发生"：用 `hooks`。
- 需要"按需加载的流程手册"：用 `skills`。
- 需要"专职角色执行长链路任务"：用 `subagents`。

## 常用分层（建议从守卫开始）

1. **守卫类**：阻断或要求确认（最推荐优先做）。
2. **记录类**：记录关键输入/输出摘要，便于审计与复盘。
3. **提醒类**：给出提示，但不强制阻断（避免过度自动化）。


## 常见坑（反模式）

- **过度自动化**：hook 做太多事，误触发后很难定位。
- **副作用不可控**：自动修改环境/文件却缺少回滚与审计。
- **用 hook 替代 rules**：hook 是执行点，不是底线本身。
- **一条 hook 管太多事**：难以评审、难以回滚。

## 与其他模块的边界

- **hooks vs commands**：commands 由你主动触发；hooks 被动自动触发。
- **hooks vs rules / 系统提示词**：rules 规定底线；hooks 让底线更容易被执行与审计。
- **hooks vs MCP**：hooks 决定何时必须调用外部能力；MCP 提供能力本身。

## 参考链接

- [Hooks 配方：把经验变成自动化护栏](https://claudecn.com/docs/claude-code/advanced/hooks-recipes/)
- [https://code.claude.com/docs/zh-CN/hooks-guide](https://code.claude.com/docs/zh-CN/hooks-guide)