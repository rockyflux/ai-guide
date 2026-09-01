---
title: Skills
weight: 3
date: 2026-02-09T23:34:00+08:00
bookHidden: false
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


### 五、按用途推荐 Skills

本节按任务场景归类推荐。先定用途，再选对应 Skill 或仓库；安装统一用 `npx skills add <仓库> [--skill <名称>]`，跨类别资源见第六节。

#### 底座 / 工程工作流

- [`find-skills`](https://github.com/vercel-labs/skills)：技能搜索与发现；`npx skills add https://github.com/vercel-labs/skills --skill find-skills`
- [`skill-creator`](https://github.com/anthropics/skills/tree/main/skills/skill-creator)：封装自己的 Skill；`npx skills add https://github.com/anthropics/skills --skill skill-creator`
- [`agent-tools`](https://github.com/toolshell/skills)：Agent 常用小工具；`npx skills add https://github.com/toolshell/skills --skill agent-tools`
- [`using-superpowers`](https://github.com/obra/superpowers) / [`brainstorming`](https://github.com/obra/superpowers)：工作流元能力与需求澄清；`npx skills add https://github.com/obra/superpowers --skill using-superpowers`
- [Waza](https://github.com/tw93/Waza)：把常见工程习惯收成 8 个可链式调用的 Skill（`/think` 决策规划、`/ui` 前端审美、`/check` 合并前审查、`/hunt` 根因调试、`/write` 中英润色、`/learn` 调研写作、`/read` URL/PDF、`/health` Agent 健康审计）；比 Superpowers / gstack 更轻量；`npx skills add tw93/Waza -a claude-code codex cursor antigravity-cli -g -y`
- [`mcp-builder`](https://github.com/anthropics/skills/tree/main/skills/mcp-builder)：连接外部工具的 MCP 构建器
- [Matt Pocock / skills](https://github.com/mattpocock/skills)：工程交付工作流（`grill-with-docs`、`to-prd`、`to-issues`、`tdd`、`diagnose`）；`npx skills add mattpocock/skills`
- [Anthropic Skills](https://github.com/anthropics/skills)：官方技能实现与 `skill-creator` / `mcp-builder`
- [Vercel Skills](https://github.com/vercel-labs/skills)：含 `find-skills` 等示例
- [MiniMax Skills](https://github.com/MiniMax-AI/skills)：官方开发技能库（Beta）
- [Antfu Skills](https://github.com/antfu/skills)：高质量个人工程实践
- [Claude Code Stock Deep Research Agent](https://github.com/liangdabiao/Claude-Code-Stock-Deep-Research-Agent)：实战案例

#### 前端 / 设计

- [`frontend-skill`](https://github.com/openai/skills/tree/main/skills/.curated/frontend-skill)（OpenAI）：landing / 品牌 / demo；视觉论点、内容节奏、首屏
- [`frontend-design`](https://github.com/anthropics/skills/tree/main/skills/frontend-design)（Anthropic）：高完成度、强风格；页面更有辨识度
- [`figma-implement-design`](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design)（OpenAI）：设计稿到代码；产设研协作常用
- [`web-design-guidelines`](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)（Vercel）：UI 审查（a11y、表单、动效、排版、交互补漏）
- [`react-best-practices`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices)（Vercel）：React / Next.js 实现与性能质量
- [`playwright`](https://github.com/openai/skills/tree/main/skills/.curated/playwright)（OpenAI）：真实浏览器验证；UI 调试与回归
- [`webapp-testing`](https://github.com/anthropics/skills/tree/main/skills/webapp-testing)（Anthropic）：本地应用验证；行为、截图、日志、交互回归
- [`canvas-design`](https://github.com/anthropics/skills/tree/main/skills/canvas-design)（Anthropic）：画布式视觉探索、展示页、概念设计
- [`brand-guidelines`](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines)（Anthropic）：官网 / 营销 / 设计系统 / 品牌一致性
- [`vercel-deploy-claimable`](https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-deploy-claimable)（Vercel）：快速部署预览、缩短反馈闭环
- [taste-skill](https://github.com/Leonxlnx/taste-skill)：Anti-slop 前端审美；默认 `design-taste-frontend`（v2）；`npx skills add https://github.com/Leonxlnx/taste-skill`
- [Impeccable](https://impeccable.style/)：`frontend-design` 增强（/polish、/audit、/distill）；`npx skills add pbakaus/impeccable`
- [OpenAI Skills](https://github.com/openai/skills)：策展含 `frontend-skill`、`playwright`、`figma-implement-design` 等
- [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)：`web-design-guidelines`、`react-best-practices` 等

{{% hint info %}}
**社区增强 · 前端审美**  
官方偏「做出好看的页面」；要压住 AI 通用 slop（紫渐变、卡片堆砌），优先用 [taste-skill](https://github.com/Leonxlnx/taste-skill) 或 [Impeccable](https://impeccable.style/)。
{{% /hint %}}

#### 通用办公

- [`pptx`](https://github.com/anthropics/skills/tree/main/skills/pptx)（Anthropic）：做汇报、改汇报、读 PPT、按模板生成 deck
- [`pdf`](https://github.com/anthropics/skills/tree/main/skills/pdf)（Anthropic）：提取、合并、OCR、表单处理、拆分 PDF
- [`docx`](https://github.com/anthropics/skills/tree/main/skills/docx)（Anthropic）：正式报告、方案、备忘录、函件
- [`xlsx`](https://github.com/anthropics/skills/tree/main/skills/xlsx)（Anthropic）：表格、公式、格式化、图表
- [`transcribe`](https://github.com/openai/skills/tree/main/skills/.curated/transcribe)（OpenAI）：会议录音、访谈转文字
- [`internal-comms`](https://github.com/anthropics/skills/tree/main/skills/internal-comms)（Anthropic）：周报、项目更新、公告
- [`doc-coauthoring`](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring)（Anthropic）：协作写作，整理成正式文档
- [`notion-knowledge-capture`](https://github.com/openai/skills/tree/main/skills/.curated/notion-knowledge-capture)（OpenAI）：会议与决策沉淀进 Notion
- [`screenshot`](https://github.com/openai/skills/tree/main/skills/.curated/screenshot)（OpenAI）：截图留痕、操作说明
- [`theme-factory`](https://github.com/anthropics/skills/tree/main/skills/theme-factory)（Anthropic）：统一文档 / 演示视觉主题

{{% hint info %}}
**边界说明**  
官方 `pptx` 属于「办公文档读写」。若要「浏览器里快速出完整 deck、改字换图再导出 PPTX」，请看 [**PPT / 演示文稿**](#ppt--演示文稿)（[dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill)），不要和通用办公混选。
{{% /hint %}}

#### 公众号 / 内容创作

- [gzh-design-skill](https://github.com/isjiamu/gzh-design-skill)：Markdown → 可粘贴进公众号编辑器的 HTML（6 套主题 + 主题生成器）；`npx skills add https://github.com/isjiamu/gzh-design-skill`
- [baoyu-skills](https://github.com/jimliu/baoyu-skills)：文配图 / 插画生成

#### PPT / 演示文稿

- [dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill)：网页可编辑 PPT → 导出 HTML / PDF / 可编辑 PPTX（12 主题、1020 版式）；`npx dashi-ppt-skill@latest`（需 Node.js 20+，导出 PPTX/PDF 需本机 Chrome / Chromium / Edge）
- [`pptx`](https://github.com/anthropics/skills/tree/main/skills/pptx)（Anthropic）：按模板读写 / 精修现有 PPT
- [`theme-factory`](https://github.com/anthropics/skills/tree/main/skills/theme-factory)（Anthropic）：统一演示视觉主题

#### 视频制作

- [jacky-motion](https://github.com/Jackywxsz/jacky-motion)：口播稿 + SRT → 可录屏的 16:9 自动播放 HTML（不直接出 MP4）；`npx skills add https://github.com/Jackywxsz/jacky-motion`
- [OpenMontage](https://github.com/calesthio/OpenMontage)：Agent 全流程视频制片（pipeline + 700+ 技能/知识文件）；`git clone` + `make setup`（需 Python 3.10+、FFmpeg、Node.js 18+）

更多未覆盖场景可浏览：[SkillsMP · development](https://skillsmp.com/zh/categories/development)

### 六、参考链接与第三方网站

本节只放**跨类别**资源（文档、安装工具、市场、Awesome）。按用途的推荐已写在第五节，此处不再重复。

#### 文档与规范

- [Claude 官方 Skills 文档](https://code.claude.com/docs/zh-CN/skills)：最权威的 Agent Skills 规范与功能说明。
- [Agent Skills（claudecn）](https://claudecn.com/docs/agent-skills/)：面向中文用户的解读与示例。
- [Agent Skills（agentskills.io）](https://agentskills.io/)：社区导航站，按场景浏览和搜索技能。
- [SkillsHunt](https://skillshunt.io/)：标签与热度筛选的技能发现平台。
- [YouMind Skills](https://youmind.com/zh-CN/skills)：学习与创作向技能导航。

#### 安装与管理工具

- [Skills.sh](https://skills.sh/)：CLI 安装 / 更新 Skills；[热门技能页](https://skills.sh) 可看趋势。
- [Skill Creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)：Anthropic 官方技能模板与创建向导。
- [MCPMarket Skills Leaderboard](https://mcpmarket.com/zh/tools/skills/leaderboard)：第三方技能榜单与工具导航。
- [ClawHub Skills](https://clawhub.ai/skills)：ClawHub 平台技能市场。

#### 市场与合集网站

- [agent-skills.md](https://agent-skills.md)：6000+ 高频技能，开箱即用。
- [Skills Directory](https://www.skillsdirectory.com)：Reddit 社区口碑向整理。
- [SkillsMP](https://skillsmp.com/zh)：聚合 GitHub 上大量开源技能，适合全网搜与溯源。
- [Agent Skills Me](https://agentskills.me)：人工精选的小而精集合。
- [SkillStore](https://skillstore.io/zh-hans)：中文友好，强调安全审查。
- [SkillHub（腾讯）](https://skillhub.tencent.com/)：按模型 / 场景筛选，与自家工具生态集成。
- [Linux.do Awesome Skills](https://github.com/jochne/linuxdo-awesome-skills)：社区导航（能做什么、前置、标签、Star）；[在线浏览](https://linuxdo-awesome-skills.tencents.ltd/)。
- [CocoLoop Skill 商店](https://hub.cocoloop.cn/)：聚合大量 Skills、多平台、国内镜像加速，含 OpenClaw 专题。

#### Awesome / 索引清单

- [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills)：Claude.ai / Claude Code / API 场景索引。
- [Awesome Agent Skills](https://github.com/JackyST0/awesome-agent-skills)：社区优质技能索引。
- [Ultimate Agent Skills Collection](https://github.com/ZhanlinCui/Ultimate-Agent-Skills-Collection)：多来源总目录，适合深挖扫货。

{{% hint info %}}
**延伸阅读 · Agent Skills 终极指南**  
想要系统了解推荐技能、最新资讯和实战案例，可查看专题页：  
《Agent Skills 终极指南：快速入门、推荐技能、最新资讯与实战案例 ｜ The Definitive Guide to Agent Skills: Quick Start, Recommended Skills, Latest News, and Practical Case Studies》

👉 [点击跳转到 Awesome Agent Skills]({{< ref "Agent/awesome-agent-skills" >}})
{{% /hint %}}
