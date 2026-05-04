---
title: Superpowers
weight: 23
bookToc: false
noTocArea: true
---

## Superpowers 是什么？

[Superpowers](https://github.com/obra/superpowers) 是面向编程智能体的 **完整软件开发工作流**，建立在 **可组合的 Skills（技能）** 与一组初始指令之上，确保智能体在合适的时机自动启用这些技能，而不是一上来就盲目写代码。

核心理念：先弄清「真正要做什么」，把规格从对话里整理出来并分段展示便于阅读；设计确认后产出 **足够具体、可执行** 的实现计划（强调红/绿 TDD、YAGNI、DRY）；执行阶段通过 **子智能体驱动开发** 等机制推进任务、审查产出，使智能体能在计划约束下较长时间自主工作。

## 安装（按平台选择）

**Claude Code 官方插件市场**（示例）：

```bash
/plugin install superpowers@claude-plugins-official
```

**通过 obra 市场**：

```bash
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

**Cursor**：在插件市场中搜索 `superpowers` 或使用 `/add-plugin superpowers`（以当前客户端文档为准）。

**Codex / OpenCode / Gemini CLI** 等需按仓库内说明拉取安装指引，例如：

- Codex：按 [`.codex/INSTALL.md`](https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.codex/INSTALL.md) 执行  
- OpenCode：按 [`.opencode/INSTALL.md`](https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md) 执行  
- Gemini CLI：`gemini extensions install https://github.com/obra/superpowers`

安装后在新会话中尝试会触发技能的任务（例如「帮我规划这个功能」），确认智能体自动调用了 Superpowers 相关技能。更新插件：`/plugin update superpowers`。

## 基本工作流（技能链）

技能会在任务前被检查，属于 **强制性流程**（而非可有可无的建议），典型顺序包括：

1. **brainstorming** — 写代码前澄清想法、分段呈现设计并保存设计文档  
2. **using-git-worktrees** — 设计通过后在新分支上隔离工作区、验证干净测试基线  
3. **writing-plans** — 将工作拆成可执行的小任务（含路径、验证步骤等）  
4. **subagent-driven-development / executing-plans** — 按计划派生子智能体并审查，或分批执行并设检查点  
5. **test-driven-development** — 红-绿-重构，先写失败测试再实现  
6. **requesting-code-review** — 任务间按严重度审查，关键问题阻塞继续  
7. **finishing-a-development-branch** — 收尾：测试、合并/PR/保留/丢弃等选项与清理  

## 技能库概览（节选）

- **测试**：`test-driven-development`  
- **调试**：`systematic-debugging`、`verification-before-completion`  
- **协作**：`writing-plans`、`executing-plans`、`using-git-worktrees`、`subagent-driven-development`、`requesting-code-review` 等  
- **元**：`writing-skills`、`using-superpowers`  

完整列表见 [GitHub 仓库 README](https://github.com/obra/superpowers/blob/main/README.md)。

## 理念

- 测试驱动，先写测试  
- 系统化优于临场发挥  
- 以简化为目标，主动控制复杂度  
- 用证据验证，而非口头宣称完成  

## 延伸阅读

- **仓库**：[obra/superpowers](https://github.com/obra/superpowers)  
- **中文镜像 / 翻译**：[jnMetaCode/superpowers-zh](https://github.com/jnMetaCode/superpowers-zh)  
- **市场**：[superpowers-marketplace](https://github.com/obra/superpowers-marketplace)  
- **文章**：[Superpowers for Claude Code](https://blog.fsck.com/2025/10/09/superpowers/)  
- **社区**：[Discord](https://discord.gg/Jd8Vphy9jq)  
- 中文导读可参考站内 [多 Agent 协作工作流实践]({{< relref "workflow/ccg-workflow" >}}) 中的 Superpowers 小节与外部导读链接  
