---
title: CodingAgent协作实践
weight: 16
bookToc: false
noTocArea: true
---

#  Awesome CCG Workflow：多 Coding Agent 协作实践



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


### 1. CCB+droid 小孩子才做选择，好用的我全要！！！！

+ **基本信息**:
    - **类型**: Tool
    - **作者**: @bfly123
    - **GitHub 链接**: [GitHub - bfly123/claude_code_bridge](https://github.com/bfly123/claude_code_bridge)
+ **描述**: Real-time multi-AI collaboration: Claude, Codex & Gemini with persistent context, minimal token overhead
+ **论坛链接**: [[CCB+droid] 小孩子才做选择，好用的我全要！！！！](https://linux.do/t/topic/1497340)

**Workflow**

### 2. CCA 多模型角色控制和全自动工作流软件

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @bfly123
    - **GitHub 链接**: [GitHub - bfly123/claude_code_autoflow](https://github.com/bfly123/claude_code_autoflow)
+ **论坛链接**: [[CCA] 多模型角色控制和全自动工作流软件](https://linux.do/t/topic/1480678)

### 3. 自己动手，丰衣足食 02】人生苦短，我全都要，一个 CLAUDE.md 实现的三位一体协同办公

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @DaiSun
    - **GitHub 链接**: N/A
+ **论坛链接**: [[自己动手，丰衣足食 02】人生苦短，我全都要，一个 CLAUDE.md 实现的三位一体协同办公](https://linux.do/t/topic/1231037)

### 4. 自己动手，丰衣足食 04】一个更现代的 SKILLs 集合，一个更省时的并行化 workflow。好的 agent 怎能局限于线性 cc+codex+gemini？

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @DaiSun
    - **GitHub 链接**: [GitHub - GuDaStudio/skills](https://github.com/GuDaStudio/skills)
+ **描述**: Agent Skills 集合，Claude 与多模型/工具协作
+ **论坛链接**: [[自己动手，丰衣足食 04】一个更现代的 SKILLs 集合，一个更省时的并行化 workflow。好的 agent 怎能局限于线性 cc+codex+gemini？](https://linux.do/t/topic/1325941)

### 5. 自己动手，丰衣足食 05】大 vibe 时代，我们需要的是 "一镜到底" 的自动化，还是 "以人为本" 的 context management？

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @DaiSun
    - **GitHub 链接**: [GitHub - GuDaStudio/commands](https://github.com/GuDaStudio/commands)
+ **描述**: N/A
+ **论坛链接**: [[自己动手，丰衣足食 05】大 vibe 时代，我们需要的是 "一镜到底" 的自动化，还是 "以人为本" 的 context management？](https://linux.do/t/topic/1504029)

### 6. 开源自荐】Claude Team—— 让 Claude Code 同时用上 Opus、Gemini、Codex 的多模型协作 MCP

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @chinadoiphin
    - **GitHub 链接**: [GitHub - 7836246/claude-team-mcp](https://github.com/7836246/claude-team-mcp)
+ **描述**: Multi-Agent MCP，Claude Code / Windsurf / Cursor 编排 GPT、Claude、Gemini
+ **论坛链接**: [[开源自荐】Claude Team—— 让 Claude Code 同时用上 Opus、Gemini、Codex 的多模型协作 MCP](https://linux.do/t/topic/1346203)

### 7. 开源】CCG v1.7.39 : Claude Code 编排三 CLI 协作 | Codex + Gemini + Claude

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @feng_li
    - **GitHub 链接**: [GitHub - fengshao1227/ccg-workflow](https://github.com/fengshao1227/ccg-workflow)
+ **描述**: 多模型协作开发工具集，智能路由、代码审查、Git 工具等 17+ 命令
+ **论坛链接**: [[开源】CCG v1.7.39 : Claude Code 编排三 CLI 协作 | Codex + Gemini + Claude](https://linux.do/t/topic/1405588)

### 8. 开源】更新支持 OpenCode！Coder-Codex-Gemini（CCG），Skills + MCP 多模型编排降本提效方案！

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @FredericMN
    - **GitHub 链接**: [GitHub - FredericMN/Coder-Codex-Gemini](https://github.com/FredericMN/Coder-Codex-Gemini)
+ **描述**: CCG 多模型协作，支持 Claude Code & OpenCode 双环境
+ **论坛链接**: [[开源】更新支持 OpenCode！Coder-Codex-Gemini（CCG），Skills + MCP 多模型编排降本提效方案！](https://linux.do/t/topic/1434220)

### 9. oh-my-opencode

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: code-yeongyu (YeonGyu-Kim)
    - **GitHub 链接**: [GitHub - code-yeongyu/oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)
+ **描述**: The Best Agent Harness，Sisyphus 电池包式 Agent
+ **论坛链接**: N/A

### 10. CCW 6.3.48（Claude-Code-Workflow）新手向！一键 "造火箭"！全自动软件开发工作流！

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @catlog22
    - **GitHub 链接**: [GitHub - catlog22/Claude-Code-Workflow](https://github.com/catlog22/Claude-Code-Workflow)
+ **描述**: JSON 驱动多 Agent 开发框架，智能 CLI 编排，Gemini/Qwen/Codex
+ **论坛链接**: [[开源自荐】CCW 6.3.48（Claude-Code-Workflow）新手向！一键 "造火箭"！全自动软件开发工作流！](https://linux.do/t/topic/1508662)

### 11. CCCC】一个轻量灵活的多 AGENT CLI 合作框架 - 第一弹

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @ikb
    - **GitHub 链接**: [GitHub - ChesterRa/cccc](https://github.com/ChesterRa/cccc)
+ **描述**: 双 AI 对等协作：规划、构建、评审、收敛，TUI 或 Telegram/Slack/Discord 控制
+ **论坛链接**: [[CCCC】一个轻量灵活的多 AGENT CLI 合作框架 - 第一弹](https://linux.do/t/topic/1217360)

### 12. 开源】Superpowers 增强版 + CCG（Claude + Codex + Gemini）

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @bryanhu
    - **GitHub 链接**: [GitHub - BryanHoo/superpowers-ccg](https://github.com/BryanHoo/superpowers-ccg)
+ **描述**: Claude Code superpowers 核心技能库
+ **论坛链接**: [[开源】Superpowers 增强版 + CCG（Claude + Codex + Gemini）](https://linux.do/t/topic/1477266)

### 13. 开源】多工作流融合 x10 倍效率提升：多模型 Agent 编排 + Hooks Loop

+ **基本信息**:
    - **类型**: Workflow
    - **作者**: @benchen
    - **GitHub 链接**: N/A
+ **描述**: N/A
+ **论坛链接**: [[开源】多工作流融合 x10 倍效率提升：多模型 Agent 编排 + Hooks Loop](https://linux.do/t/topic/1506286)


---

> 关于评测：由于评测本身存在主观性，并且上述有些项目的角色定制比较灵活、有些比较固定，所以可能在不同类别的开发项目上存在较大的可用性差异，很难去做一个客观的统一评测。但是欢迎各位佬友分享自己使用上述工具的经验与体会，这样收集起来也可供大家一同参考。