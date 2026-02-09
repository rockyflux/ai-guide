---
title: CodingAgent协作实践
weight: 20
---

#  Awesome CCG Workflow：多 Coding Agent 协作实践 & 开源资源导航

> 前言：因为在 Linux Do 上看到了很多大佬发布的 **多 Coding Agent 协作 / 工作流（CCG Workflow）** 的帖子，对我的个人工作产生了很大启发。所以为了方便定期跟进大佬们不断更新的优秀项目，也为大家提供一些方便检索和复用的内容，我把站内关于 **多 Coding Agent 协作 / 工作流（CCG Workflow）** 的优质原帖、讨论、工具链与开源项目集中到了本帖。  
> 本帖持续更新：欢迎在回复里补充链接 / 实践经验，我会定期整理进正文。

---

## 目录

-   [1\. 这是什么 & 适合谁](#1-%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88--%E9%80%82%E5%90%88%E8%B0%81)
-   [2\. 快速上手路线](#2-%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E8%B7%AF%E7%BA%BF)
-   [3\. 汇总索引（总表）](#3-%E6%B1%87%E6%80%BB%E7%B4%A2%E5%BC%95%E6%80%BB%E8%A1%A8)
-   [4\. 贡献方式](#4-%E8%B4%A1%E7%8C%AE%E6%96%B9%E5%BC%8F)
-   [5\. 更新日志](#5-%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97)

---

## 1\. 这是什么 & 适合谁

**CCG Workflow**（这里暂指：多 Agent 分工协作的 Coding 工作流）常见场景：

-   需要借助 Coding Agent 实现项目开发，又避免单一 Agent 性能不足或是成本消耗太高
-   需要 “架构 + 实现 + 审查 + 修复 + 文档” 等闭环的工程任务
-   需要对工具链进行编排：终端 CI、协作配置（MCP/Skills 等）、各 Agent 的 Prompt 及行为准则等

**适合人群**

-   想从 “聊天写代码” 升级到 “可控的自动写代码”
-   想快速复用别人已配好的 Workflow
-   想综合评判对比不同 Workflow 、实现差异，取长补短

---

## 2\. 快速上手路线

> 想快速入门的，可以按下面顺序看（从易到难 / 从通用到进阶）

1.  **基础概念**：单 Agent vs 多 Agent、角色分工、上下文管理、工具调用边界
2.  **最小可用工作流**：Planner → Implementer → Reviewer → Tester
3.  **工程化**：仓库规则（AGENTS.md/CLAUDE.md/GEMINI.md）、CI、统一格式化与测试
4.  **高级**：任务路由、自动回归、代码搜索 / 知识库、长任务拆解、成本与延迟优化

---

## 3\. 汇总索引（总表）

> 说明：以下统一收录「站内帖」与「开源链接」两项内容，便于检索与复用。  
> 注意：收录顺序随机。

**Tool**
- **[\[CCB+droid\] 小孩子才做选择，好用的我全要！！！！](https://linux.do/t/topic/1497340)** — 作者：@bfly123  
  [GitHub - bfly123/claude_code_bridge](https://github.com/bfly123/claude_code_bridge)（Real-time multi-AI collaboration: Claude, Codex & Gemini with persistent context, minimal token overhead）

**Workflow**

- **[\[CCA\] 多模型角色控制和全自动工作流软件](https://linux.do/t/topic/1480678)** — 作者：@bfly123  
  [GitHub - bfly123/claude_code_autoflow](https://github.com/bfly123/claude_code_autoflow)

- **[【自己动手，丰衣足食 02】人生苦短，我全都要，一个 CLAUDE.md 实现的三位一体协同办公](https://linux.do/t/topic/1231037)** — 作者：@DaiSun

- **[【自己动手，丰衣足食 04】一个更现代的 SKILLs 集合，一个更省时的并行化 workflow。好的 agent 怎能局限于线性 cc+codex+gemini？](https://linux.do/t/topic/1325941)** — 作者：@DaiSun  
  [GitHub - GuDaStudio/skills](https://github.com/GuDaStudio/skills)（Agent Skills 集合，Claude 与多模型/工具协作）

- **[【自己动手，丰衣足食 05】大 vibe 时代，我们需要的是 “一镜到底” 的自动化，还是 “以人为本” 的 context management？](https://linux.do/t/topic/1504029)** — 作者：@DaiSun  
  [GitHub - GuDaStudio/commands](https://github.com/GuDaStudio/commands)

- **[【开源自荐】Claude Team—— 让 Claude Code 同时用上 Opus、Gemini、Codex 的多模型协作 MCP](https://linux.do/t/topic/1346203)** — 作者：@chinadoiphin  
  [GitHub - 7836246/claude-team-mcp](https://github.com/7836246/claude-team-mcp)（Multi-Agent MCP，Claude Code / Windsurf / Cursor 编排 GPT、Claude、Gemini）

- **[【开源】CCG v1.7.39 : Claude Code 编排三 CLI 协作 | Codex + Gemini + Claude](https://linux.do/t/topic/1405588)** — 作者：@feng_li  
  [GitHub - fengshao1227/ccg-workflow](https://github.com/fengshao1227/ccg-workflow)（多模型协作开发工具集，智能路由、代码审查、Git 工具等 17+ 命令）

- **[【开源】更新支持 OpenCode！Coder-Codex-Gemini（CCG），Skills + MCP 多模型编排降本提效方案！](https://linux.do/t/topic/1434220)** — 作者：@FredericMN  
  [GitHub - FredericMN/Coder-Codex-Gemini](https://github.com/FredericMN/Coder-Codex-Gemini)（CCG 多模型协作，支持 Claude Code & OpenCode 双环境）

- **[oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)** — 维护者：code-yeongyu (YeonGyu-Kim)  
  [GitHub - code-yeongyu/oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)（The Best Agent Harness，Sisyphus 电池包式 Agent）

- **[\[开源\] CCW 6.3.48（Claude-Code-Workflow）新手向！一键 “造火箭”！全自动软件开发工作流！](https://linux.do/t/topic/1508662)** — 作者：@catlog22  
  [GitHub - catlog22/Claude-Code-Workflow](https://github.com/catlog22/Claude-Code-Workflow)（JSON 驱动多 Agent 开发框架，智能 CLI 编排，Gemini/Qwen/Codex）

- **[【CCCC】一个轻量灵活的多 AGENT CLI 合作框架 - 第一弹](https://linux.do/t/topic/1217360)** — 作者：@ikb  
  [GitHub - ChesterRa/cccc](https://github.com/ChesterRa/cccc)（双 AI 对等协作：规划、构建、评审、收敛，TUI 或 Telegram/Slack/Discord 控制）

- **[【开源】Superpowers 增强版 + CCG（Claude + Codex + Gemini）](https://linux.do/t/topic/1477266)** — 作者：@bryanhu  
  [GitHub - BryanHoo/superpowers-ccg](https://github.com/BryanHoo/superpowers-ccg)（Claude Code superpowers 核心技能库）

- **[【开源】多工作流融合 x10 倍效率提升：多模型 Agent 编排 + Hooks Loop](https://linux.do/t/topic/1506286)** — 作者：@benchen

---

## 4. 贡献方式

欢迎按以下格式回帖补充（我会整理进总表）：

-   类型：Tool / Workflow
-   标题 / 项目：
-   作者 / 维护者（可选）：
-   关键词（可选）：
-   一句话摘要：
-   链接：

---

## 5. 更新日志

-   2026-01-08：创建帖子框架和初始内容
-   2026-01-09：感谢佬友 [@feishu](/u/feishu) 提醒，新增 CCW [@catlog22](/u/catlog22)
-   2026-01-24：更新已收录条目的链接，并新增孙佬新版工作流、CCCC 和 Superpowers+CCG

---

> 关于评测：由于评测本身存在主观性，并且上述有些项目的角色定制比较灵活、有些比较固定，所以可能在不同类别的开发项目上存在较大的可用性差异，很难去做一个客观的统一评测。但是欢迎各位佬友分享自己使用上述工具的经验与体会，这样收集起来也可供大家一同参考。