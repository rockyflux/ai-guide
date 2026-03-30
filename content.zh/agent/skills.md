---
title: Agent Skills
weight: 1
date: 2026-02-09T23:34:00+08:00
---


## Agent Skills


### 一、Agent Skills 出现的背景

{{% hint info %}}
**一句话理解**  
大模型智能体向专业化、高效化发展时，Agent Skills 作为一套规范、轻便的能力扩展方案，已成为解决工具调用混乱、上下文冗余等核心问题的关键——让智能体从「泛泛回应」升级为「精准帮忙」。
{{% /hint %}}

**定义**：Agent Skills 是用于扩展智能体能力的规范方案，本质是可复用、可自由组合的**最小能力模块**。通过统一文件结构，智能体可按需加载、灵活调用，精准适配特定场景。

**由来**：由开发 Claude 的 Anthropic 率先研发。2025 年 10 月以实验功能上线，同年 12 月成为跨平台开放标准并开源，随后被 Cursor、VS Code Copilot 等平台采用，逐步形成行业生态。

**核心痛点**（传统工具调用常见问题）：

- 上下文冗余、判断负担重
- 工具无法复用、缺乏统一标准

**核心特点**：

| 特点 | 说明 |
|------|------|
| **原子化** | 每个技能是最小能力模块，可单独使用、自由组合 |
| **规范化** | 所有技能遵循统一文件格式，保证兼容复用 |
| **按需加载** | 仅在需要时加载技能完整信息，不浪费上下文——与传统工具调用的核心区别 |


### 二、相比传统工具的优势

与传统方式相比，Agent Skills 有两大优势：**节省 token 资源**、**减轻智能体判断负担**。

{{% steps %}}
1. ## 三层渐进式披露（节省 token）
   Claude Code 官方明确的核心功能：将技能信息分为三层，按需逐步加载，既不遗漏关键步骤，也不浪费上下文。
   - **第一层 · 元数据**：YAML 前置信息，仅技能名称、用途等摘要；智能体启动时只加载这部分，几乎不占资源。
   - **第二层 · 技能主体**：完整 SKILL.md，仅在判断与当前任务相关时加载详细步骤和规则。
   - **第三层 · 附加文件**：如 .py 工具、参考文档，仅在做复杂操作（如执行 SQL、处理数据）时才加载或运行。
2. ## 减轻判断负担
   传统方式中，智能体要面对功能杂乱、可能重复的工具集合，执行时还要费力筛选。Agent Skills 将能力拆成独立小技能，每个只负责单一功能，无重复冗余；执行时只需精准调用对应技能，上下文更清晰，任务更准、更快。
{{% /steps %}}

**传统方式 vs Agent Skills**：

| 对比项 | 传统方式 | Agent Skills |
|--------|----------|--------------|
| 加载时机 | 无论是否有用，提前加载全部完整信息 | 按需分层加载（元数据 → 主体 → 附加） |
| Token | 易浪费、拖慢响应 | 按需加载，减少重复与冗余 |
| 工具形态 | 功能杂乱、可能重复 | 原子化小技能，单一职责 |
| 判断负担 | 需费力筛选合适工具 | 精准调用对应技能，负担小 |

### 三、配置地狱

Anthropic 推出 Agent Skills 时，核心理念是“写一次，到处使用”，开发者编写一次技能配置，就能在不同 Agent 平台上复用。但现实是，各家平台的目录规范各不相同：

| 平台 | Skills 目录 |
|------|-------------|
| Codex | `.codex/skills` |
| Claude | `.claude/skills` |
| Gemini | `.gemini/skills` |


这意味着开发者要在多个平台使用同一套 Skills，就得在不同目录间复制文件、创建符号链接，或者写同步工具。原本承诺的“写一次”，变成了维护多份配置、管理一堆软链接。GitHub Issue #15 里有人说得很直接：“我们在技术层面（工具、通信）实现了标准化，但在语义层面（指令、上下文）没做到。这是个问题。”


{{% hint success %}}
**从倡议到落地，只用了一周**  
2026 年 2 月 3 日，OpenAI 的 Alexander Embiricos 在推特上发起倡议：所有 Agent 统一读取 .agents/skills 目录，用户不用再为每个 Agent 管理独立文件夹。推文写道：“今天我们为 Codex 启用了 .agents/skills。目标是逐步废弃 .codex/skills。"主要平台的响应速度很快：Anomaly 的 dax 直接回复“done”，附上 OpenCode 的 PR 链接；微软 Copilot CLI 在 0.401 版本支持自动加载；谷歌 Gemini CLI 提交代码变更；Cursor 也表示在下个版本跟进。从提议到主流平台响应，不到一周。
{{% /hint %}}

#### 工具层的过渡方案
Vercel 团队推出的 [skills.sh](http://skills.sh "skills.sh") 提供了一个过渡期的解决方案：
```shell
npx skills add vercel-labs/agent-skills
```
原理很直接：将 Skill 下载到 .agents/skills/，检测系统中的 AI 工具（Claude、Cursor、Windsurf 等），在各工具的 Skills 目录创建指向 .agents/skills/ 的软链接。开发者只需维护一份源文件，所有工具实时同步。这也是小编之前写过的《为什么我劝你使用 skills.sh 管理 skills》，对于它的使用可以转战这篇文章。随着平台原生支持 .agents/skills，软链接这种过渡方案会逐渐退出，但 skills.sh 的方案默认就是在 .agents 目录下，所以软链接方案会被淘汰，但 skills.sh 仍然好用。将来，你可以直接把 Skills 放在 .agents/skills 下，让所有平台自动识别，也可以继续使用 skills.sh。



### 四、Agent Skills 规范说明

{{% hint info %}}
**核心规范**：每个技能对应一个独立文件夹，文件夹内必须包含一个 `SKILL.md` 文件。该文件是技能的核心，包含 **YAML 前置信息（元数据）** 和 **Markdown 指令** 两部分，共同明确技能的功能、触发条件和执行步骤，二者缺一不可。这也是实现「三层渐进式披露」和按需加载的基础。
{{% /hint %}}

```
skill/employees/
├── SKILL.md  # 技能核心文件（包含元数据+详细指令）
└── scripts/  # 附加脚本文件夹（三层结构的第三层）
    ├── execute_sql.py  # SQL执行脚本（复杂操作时调用）
    └── __pycache__/  # 脚本缓存（自动生成，无需手动创建）
```


### 五、配置截图

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-start;">
  <img src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ105piyq05dQMLekrhQuQoE3V27hZnQACiyIAAplwYFSwAiyjwL9lzToE.png" alt="配置截图 1" style="max-width: 48%; flex: 1; min-width: 200px;" />
  <img src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ11NpiysK-od2MFrUDLB446skM7Mt0gACkiIAAplwYFRTDh2do3GupDoE.png" alt="配置截图 2" style="max-width: 48%; flex: 1; min-width: 200px;" />
</div>


### 六、初始化导入推荐Skills
```
# 技能搜索/发现：从大量 Skills 中快速找到需要的（find-skills）
npx skills add https://github.com/vercel-labs/skills --skill find-skills
# 创建/封装自己的 Skill：把你的流程沉淀成可复用能力（skill-creator）
npx skills add https://github.com/anthropics/skills --skill skill-creator
# Agent 工具集：给智能体配一套常用小工具（agent-tools）
npx skills add https://github.com/toolshell/skills --skill agent-tools
# 超能力使用指南：教你如何发挥技能与工具的最大价值（using-superpowers）
npx skills add https://github.com/obra/superpowers --skill using-superpowers
# MCP 构建器：快速搭建 MCP 服务，让 AI 连外部工具/数据（mcp-builder）
npx skills add https://github.com/anthropics/skills --skill mcp-builder
# 头脑风暴：创意/需求澄清优先，避免直接上手跑偏（brainstorming）
npx skills add https://github.com/obra/superpowers --skill brainstorming
```

```
# 前端和设计skills
npx skills add pbakaus/impeccable
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/wshobson/agents --skill tailwind-design-system
```

### 推荐 Top10：面向前端 / 产品 / UI 的 Agent Skills

这 10 个 Skills 按**设计落地频率**、对**视觉与交互质量**的直接提升、以及在 **Codex / Claude Code** 等环境中的**高复用性**来选，适合前端、产品与 UI 协作场景。

| # | Skill | 来源 | 说明 | 仓库 |
|---|--------|------|------|------|
| 1 | `frontend-skill` | OpenAI | landing / 品牌 / demo；视觉论点、内容节奏、首屏 | [源码](https://github.com/openai/skills/tree/main/skills/.curated/frontend-skill) |
| 2 | `frontend-design` | Anthropic | 高完成度、强风格；页面更有辨识度 | [源码](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| 3 | `figma-implement-design` | OpenAI | 设计稿到代码；产设研协作常用 | [源码](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design) |
| 4 | `web-design-guidelines` | Vercel | UI 审查：a11y、表单、动效、排版、交互补漏 | [源码](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) |
| 5 | `react-best-practices` | Vercel | React / Next.js 实现与性能质量 | [源码](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) |
| 6 | `playwright` | OpenAI | 真实浏览器验证；UI 调试与回归执行层 | [源码](https://github.com/openai/skills/tree/main/skills/.curated/playwright) |
| 7 | `webapp-testing` | Anthropic | 本地应用验证；行为、截图、日志、交互回归 | [源码](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) |
| 8 | `canvas-design` | Anthropic | 画布式视觉探索、展示页、概念设计 | [源码](https://github.com/anthropics/skills/tree/main/skills/canvas-design) |
| 9 | `brand-guidelines` | Anthropic | 官网 / 营销 / 设计系统 / 品牌一致性 | [源码](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) |
| 10 | `vercel-deploy-claimable` | Vercel | 非设计类；快速部署预览、缩短反馈闭环 | [源码](https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-deploy-claimable) |

### 推荐 Top10：面向通用办公场景的 Agent Skills
这 10 个精选认证 Skills（Anthropic + OpenAI）覆盖了办公高频链路：Office 四件套、PDF 处理、会议转录、协作写作、知识沉淀、截图留痕与演示美化。

**什么时候用什么？**

- 基础四件套：`pptx`、`pdf`、`docx`、`xlsx`
- 会议与知识沉淀：`transcribe`、`notion-knowledge-capture`
- 组织沟通与写作：`internal-comms`、`doc-coauthoring`
- 辅助交付与美化：`screenshot`、`theme-factory`

| # | Skill | 来源 | 典型用途 | 仓库 |
|---|-------|------|----------|------|
| 1 | `pptx` | Anthropic | 做汇报、改汇报、读 PPT、按模板生成 deck | [源码](https://github.com/anthropics/skills/tree/main/skills/pptx) |
| 2 | `pdf` | Anthropic | 提取、合并、OCR、表单处理、拆分 PDF | [源码](https://github.com/anthropics/skills/tree/main/skills/pdf) |
| 3 | `docx` | Anthropic | 正式报告、方案、备忘录、函件、模板文档 | [源码](https://github.com/anthropics/skills/tree/main/skills/docx) |
| 4 | `xlsx` | Anthropic | Excel 表格处理、公式、格式化、图表、交付工作簿 | [源码](https://github.com/anthropics/skills/tree/main/skills/xlsx) |
| 5 | `transcribe` | OpenAI | 会议录音、访谈、音频转文字 | [源码](https://github.com/openai/skills/tree/main/skills/.curated/transcribe) |
| 6 | `internal-comms` | Anthropic | 周报、项目更新、公告、内部沟通稿 | [源码](https://github.com/anthropics/skills/tree/main/skills/internal-comms) |
| 7 | `doc-coauthoring` | Anthropic | 协作写作，把零散想法整理成正式文档 | [源码](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring) |
| 8 | `notion-knowledge-capture` | OpenAI | 把会议、讨论、决策沉淀进 Notion 知识库 | [源码](https://github.com/openai/skills/tree/main/skills/.curated/notion-knowledge-capture) |
| 9 | `screenshot` | OpenAI | 截图留痕、问题反馈、操作说明、培训材料 | [源码](https://github.com/openai/skills/tree/main/skills/.curated/screenshot) |
| 10 | `theme-factory` | Anthropic | 统一文档/演示的视觉主题和正式感 | [源码](https://github.com/anthropics/skills/tree/main/skills/theme-factory) |


**怎么选？**

| 场景 | 推荐 Skills |
|------|-------------|
| 偏品牌官网 / 营销页 | `frontend-skill`、`frontend-design`、`brand-guidelines` |
| 偏产品 UI / 设计稿还原 | `figma-implement-design`、`react-best-practices`、`web-design-guidelines` |
| 偏交互验证 / 可用性 | `playwright`、`webapp-testing` |
| 偏创意探索 | `canvas-design` |

更多可以查看开发提示词：[https://skillsmp.com/zh/categories/development](https://skillsmp.com/zh/categories/development)

### 七、OpenClaw：养虾 + Skills（案例）

- [OpenClaw 养虾 + Skills（微信文章）](https://mp.weixin.qq.com/s/DVhQ_mWNtn9P39ydlmtyUg)
- [龙虾指南（InStreet）](https://instreet.coze.site/skill.md)：也可以去 [InStreet](https://instreet.coze.site/) 逛逛、发帖交流。

### 八、参考链接与第三方网站

- **文档与导航**
  - [Claude 官方 Skills 文档](https://code.claude.com/docs/zh-CN/skills)：最权威的 Agent Skills 规范与功能说明。
  - [Agent Skills（claudecn）](https://claudecn.com/docs/agent-skills/)：面向中文用户的解读与示例，更贴近国内使用场景。
  - [Agent Skills（agentskills.io）](https://agentskills.io/home)：社区维护的 Skills 导航站，按场景浏览和搜索技能。
  - [SkillsHunt](https://skillshunt.io/)：支持标签与热度筛选的技能发现与搜索平台。
  - [YouMind Skills](https://youmind.com/zh-CN/skills)：面向学习与创作场景的技能导航与技能包推荐。
- **工具与仓库**
  - [Skills.sh](https://skills.sh/)：命令行技能管理工具，一条命令即可安装 / 更新 Skills。
  - [MCPMarket Skills Leaderboard](https://mcpmarket.com/zh/tools/skills/leaderboard)：技能榜单与工具导航（第三方）。
  - [Impeccable](https://impeccable.style/)：对 `frontend-design` 的增强版与设计指令集（含 /polish、/audit、/distill 等），并提供一键安装方式。
  - [Vercel Skills](https://github.com/vercel-labs/skills)：Vercel 团队维护的示例技能仓库，偏 Web / 全栈场景。
  - [MiniMax Skills](https://github.com/MiniMax-AI/skills)：MiniMax 官方维护的开发技能库（Beta），面向 Claude Code、Cursor、Codex、OpenCode 等工具。
  - [baoyu-skills](https://github.com/jimliu/baoyu-skills)：根据文本内容自动生成高质量配图。
  - [ClawHub Skills](https://clawhub.ai/skills)：ClawHub 平台的技能市场与发现页。
  - [Skill Creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)：Anthropic 官方提供的技能模板与创建向导。
- **合集网站：快速使用**
  - [agent-skills.md](https://agent-skills.md)：收录 6000+ 高频常用技能，强调开箱即用、上手快。
  - [Skills Directory](https://www.skillsdirectory.com)：来自 Reddit 社区的技能推荐与整理，更像口碑榜单，适合对比评价后再决定安装。
  - [SkillsMP](https://skillsmp.com/zh)：聚合 GitHub 上超过 11 万个开源技能，适合「全网搜技能」和溯源到原始仓库。
  - [Agent Skills Me](https://agentskills.me)：人工精选的小而精技能集，适合不想自己筛选太久的用户。
  - [SkillStore](https://skillstore.io/zh-hans)：中文友好，并强调做过安全审查，适合团队或合规敏感场景。
  - [SkillHub（腾讯）](https://skillhub.tencent.com/)：腾讯推出的技能市场与导航平台，支持按模型、场景筛选，并与自家工具生态深度集成。
  - [Skills.sh 热门技能页](https://skills.sh)：关注热门趋势技能，支持一键安装，适合快速尝鲜。
- **源码仓库：工程实现**
  - [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills)：精选的 Claude Skills 清单与资源索引，覆盖 Claude.ai / Claude Code / Claude API 场景。
  - [Ultimate Agent Skills Collection](https://github.com/ZhanlinCui/Ultimate-Agent-Skills-Collection)：终极大杂烩，汇总大量不同来源的技能项目，更像一个「总目录」，适合深挖与扫货。
  - [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)：前后端结合的示例仓库，适合参考如何在 Web / 全栈应用里集成 Skills。
  - [Antfu Skills](https://github.com/antfu/skills)：由 Antfu 维护的实践仓库，代码风格统一、工程化好，适合学习高质量个人实践。
  - [Anthropic Skills](https://github.com/anthropics/skills)：Anthropic 官方的技能实现仓库，适合参考「官方最佳实践」。
  - [Awesome Agent Skills](https://github.com/JackyST0/awesome-agent-skills)：社区维护的优质技能索引库，「awesome 系」风格，可作为导航入口。
  一个完整的 Agent Skills 实战案例是股票尽调系统仓库 **Claude Code Stock Deep Research Agent**（GitHub：[`liangdabiao/Claude-Code-Stock-Deep-Research-Agent`](https://github.com/liangdabiao/Claude-Code-Stock-Deep-Research-Agent)）。


{{% hint info %}}
**延伸阅读 · Agent Skills 终极指南**  
想要系统了解推荐技能、最新资讯和实战案例，可查看专题页：  
《Agent Skills 终极指南：快速入门、推荐技能、最新资讯与实战案例 ｜ The Definitive Guide to Agent Skills: Quick Start, Recommended Skills, Latest News, and Practical Case Studies》

👉 [点击跳转到 Awesome Agent Skills]({{< ref "Agent/awesome-agent-skills" >}})
{{% /hint %}}