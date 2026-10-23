# Agent Skills

> [!NOTE]
> **一句话理解**  
> Agent Skills 是可复用、可组合的最小能力模块：统一文件结构、按需加载，让智能体从「泛泛回应」变成「精准帮忙」——用来解决传统工具调用的上下文冗余与判断负担。

## 是什么

**定义**：扩展智能体能力的规范方案。每个 Skill 是可单独使用、也可自由组合的最小能力模块；智能体按需加载、灵活调用，适配具体场景。

**由来**：Anthropic（Claude）率先提出。2025 年 10 月以实验功能上线，同年 12 月成为跨平台开放标准并开源；随后被 Cursor、VS Code Copilot 等采用，形成行业生态。

**传统工具调用的痛点**：

- 上下文冗余、判断负担重
- 工具难以复用、缺少统一标准

**核心特点**：

| 特点 | 说明 |
|------|------|
| **原子化** | 每个技能是最小能力模块，可单独使用、自由组合 |
| **规范化** | 统一文件格式，保证兼容与复用 |
| **按需加载** | 需要时才加载完整信息，不浪费上下文——与传统工具调用的核心区别 |

---

## 相对传统工具的优势

两大收益：**省 token**、**减轻判断负担**。

### 三层渐进式披露（省 token）

Claude Code 官方明确的核心机制：技能信息分三层，按需逐步加载。

| 层级 | 内容 | 加载时机 |
|------|------|----------|
| **第一层 · 元数据** | YAML 前置：名称、用途等摘要 | 启动时始终加载，几乎不占资源 |
| **第二层 · 技能主体** | 完整 `SKILL.md`（步骤与规则） | 判断与当前任务相关时 |
| **第三层 · 附加文件** | 脚本、参考文档等 | 执行复杂操作时（如跑 SQL、处理数据） |

### 减轻判断负担

传统方式下，智能体面对功能杂乱、可能重复的工具集，执行时还要费力筛选。Skills 把能力拆成独立小技能，每个只负责单一功能；执行时精准调用对应技能，上下文更清晰，任务更准、更快。

### 对比一览

| 对比项 | 传统方式 | Agent Skills |
|--------|----------|--------------|
| 加载时机 | 无论是否有用，提前加载全部完整信息 | 按需分层（元数据 → 主体 → 附加） |
| Token | 易浪费、拖慢响应 | 按需加载，减少重复与冗余 |
| 工具形态 | 功能杂乱、可能重复 | 原子化小技能，单一职责 |
| 判断负担 | 需费力筛选合适工具 | 精准调用对应技能 |

---

## 文件规范

> [!NOTE]
> **核心约定**：每个技能对应一个独立文件夹，内必须有 `SKILL.md`。文件含 **YAML 前置（元数据）** 与 **Markdown 指令** 两部分，缺一不可——这是「三层渐进式披露」和按需加载的基础。

```text
skill/employees/
├── SKILL.md          # 元数据 + 详细指令
└── scripts/          # 第三层：附加脚本
    ├── execute_sql.py
    └── __pycache__/  # 自动生成，无需手建
```

---

## 目录统一：从配置地狱到 `.agents/skills`

Anthropic 的理念是「写一次，到处使用」。现实是各平台目录并不统一：

| 平台 | Skills 目录 |
|------|-------------|
| Codex | `.codex/skills` |
| Claude | `.claude/skills` |
| Gemini | `.gemini/skills` |

要在多平台用同一套 Skills，只能复制文件、建符号链接，或写同步工具——「写一次」变成维护多份配置。GitHub Issue #15 里有人说得很直接：工具与通信层标准化了，指令与上下文的语义层还没有。

> [!TIP]
> **从倡议到落地，约一周**  
> 2026 年 2 月 3 日，OpenAI 的 Alexander Embiricos 倡议：各 Agent 统一读 `.agents/skills`，逐步废弃各自私有目录（Codex 已启用 `.agents/skills`）。随后 OpenCode、微软 Copilot CLI（0.401）、Gemini CLI、Cursor 等迅速跟进。主流平台响应不到一周。

### 本机多工具：skills.sh

[skills.sh](https://skills.sh/) 解决「一个人、多工具」的目录同步：

```shell
npx skills add vercel-labs/agent-skills
```

Skill 下载到 `.agents/skills/`，检测本机已装的 AI 工具（Claude、Cursor、Windsurf 等），在各自 Skills 目录创建指向 `.agents/skills/` 的软链接。维护一份源文件即可。平台原生支持 `.agents/skills` 后，软链接会逐渐退出；skills.sh 默认落在 `.agents` 下，仍可继续用来发现与安装。

### 团队共享：TeamAI

多人要把 Skills / Rules / MCP / Agents 等资产统一分发，可用腾讯开源的 [TeamAI](https://github.com/Tencent/teamai-cli)：以 Git 仓库为底座，成员 `teamai init` 后自动拉取最新资产，覆盖 Claude Code、Codex、Cursor、CodeBuddy 等。

```shell
npm install -g teamai-cli
# 或在 Agent 里安装 skill 后对话引导：
# Install the teamai skill: https://github.com/Tencent/teamai-cli/tree/main/skills/teamai
```

> [!NOTE]
> **怎么选**  
> 本机多工具装同一套 Skill → [skills.sh](https://skills.sh/)；多人共享团队 AI 资产并持续同步 → [TeamAI](https://github.com/Tencent/teamai-cli)。

---

## 按用途推荐

先定场景，再选 Skill。安装统一：

```shell
npx skills add <仓库> [--skill <名称>]
```

跨类别市场与文档见 [参考链接](#参考链接)。更多未覆盖场景可逛 [SkillsMP · development](https://skillsmp.com/zh/categories/development)。

### 底座 / 工程工作流

| Skill / 仓库 | 用途 | 安装 |
|--------------|------|------|
| [`find-skills`](https://github.com/vercel-labs/skills) | 技能搜索与发现 | `npx skills add https://github.com/vercel-labs/skills --skill find-skills` |
| [`skill-creator`](https://github.com/anthropics/skills/tree/main/skills/skill-creator) | 封装自己的 Skill | `npx skills add https://github.com/anthropics/skills --skill skill-creator` |
| [`mcp-builder`](https://github.com/anthropics/skills/tree/main/skills/mcp-builder) | 连接外部工具的 MCP 构建器 | 见 [Anthropic Skills](https://github.com/anthropics/skills) |
| [`agent-tools`](https://github.com/toolshell/skills) | Agent 常用小工具 | `npx skills add https://github.com/toolshell/skills --skill agent-tools` |
| [`using-superpowers`](https://github.com/obra/superpowers) / [`brainstorming`](https://github.com/obra/superpowers) | 工作流元能力与需求澄清 | `npx skills add https://github.com/obra/superpowers --skill using-superpowers` |
| [Waza](https://github.com/tw93/Waza) | 8 个可链式工程习惯（`/think`、`/ui`、`/check`、`/hunt`、`/write`、`/learn`、`/read`、`/health`）；比 Superpowers / gstack 更轻 | `npx skills add tw93/Waza -a claude-code codex cursor antigravity-cli -g -y` |
| [Birdview](https://github.com/Qiuner/birdview) | 改代码前先出架构与约束地图（HTML 可打开） | `npx skills add Qiuner/birdview --skill birdview` |
| [Answer me with HTML](https://github.com/QingYunA/answer-me-with-html) | 复杂问题用一页 HTML 回答（图、表、时间线）；亦可出 3b1b 风格讲解视频 | `npx skills add QingYunA/answer-me-with-html` |
| [diagram-design](https://github.com/cathrynlavery/diagram-design) | 架构 / 流程 / 时序等图（45 种），输出自包含 HTML + SVG | `npx skills add cathrynlavery/diagram-design` |
| [Matt Pocock / skills](https://www.aihero.dev/skills) | 工程交付（`grill-with-docs`、`to-prd`、`to-issues`、`tdd`、`diagnose`） | `npx skills add mattpocock/skills` |
| [HumanLayer Skills](https://github.com/humanlayer/skills) | 工程可视化与控制环（`show-me`、`visual-pr`、`design-control-loop` 等） | `npx skills add humanlayer/skills --skill show-me` |

**合集仓库**（一次装一批，再按需选 skill）：

| 仓库 | 说明 |
|------|------|
| [Anthropic Skills](https://github.com/anthropics/skills) | 官方实现，含 `skill-creator` / `mcp-builder` |
| [Vercel Skills](https://github.com/vercel-labs/skills) | 含 `find-skills` 等示例 |
| [MiniMax Skills](https://github.com/MiniMax-AI/skills) | 官方开发技能库（Beta） |
| [Antfu Skills](https://github.com/antfu/skills) | 高质量个人工程实践 |
| [Claude Code Stock Deep Research Agent](https://github.com/liangdabiao/Claude-Code-Stock-Deep-Research-Agent) | 实战案例 |

### 调研 / 互联网

| Skill | 用途 | 安装 |
|-------|------|------|
| [Agent Reach](https://github.com/Panniantong/Agent-Reach) | 读网能力层：网页 / YouTube 字幕 / GitHub / RSS / B 站 / 语义搜索等；部分平台需登录态。选型 + 安装 + 体检，读取走上游工具；`agent-reach doctor` 看当前后端 | 复制给 Agent：`帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md`（不要从 PyPI 装同名包） |

> [!NOTE]
> **边界**  
> Agent Reach 负责从网上**取内容**（读、搜、字幕），不负责写报告 / 发帖。登录态平台用**专用小号**；默认 `install` 只体检不改系统，真正装依赖要显式 `--system`。

### 前端 / 设计

| Skill | 来源 | 用途 |
|-------|------|------|
| [`frontend-skill`](https://github.com/openai/skills/tree/main/skills/.curated/frontend-skill) | OpenAI | landing / 品牌 / demo；视觉论点、内容节奏、首屏 |
| [`frontend-design`](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Anthropic | 高完成度、强风格；页面更有辨识度 |
| [`figma-implement-design`](https://github.com/openai/skills/tree/main/skills/.curated/figma-implement-design) | OpenAI | 设计稿到代码 |
| [`web-design-guidelines`](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | Vercel | UI 审查（a11y、表单、动效、排版、交互） |
| [`react-best-practices`](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) | Vercel | React / Next.js 实现与性能 |
| [`playwright`](https://github.com/openai/skills/tree/main/skills/.curated/playwright) | OpenAI | 真实浏览器验证；UI 调试与回归 |
| [`webapp-testing`](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | Anthropic | 本地应用验证（行为、截图、日志） |
| [`canvas-design`](https://github.com/anthropics/skills/tree/main/skills/canvas-design) | Anthropic | 画布式视觉探索、展示页、概念设计 |
| [`brand-guidelines`](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) | Anthropic | 官网 / 营销 / 设计系统 / 品牌一致性 |
| [`vercel-deploy-claimable`](https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-deploy-claimable) | Vercel | 快速部署预览、缩短反馈闭环 |

**社区增强**（审美、动效、系统审界面）：

| Skill | 用途 | 安装 |
|-------|------|------|
| [taste-skill](https://github.com/Leonxlnx/taste-skill) | Anti-slop 前端审美；默认 `design-taste-frontend`（v2） | `npx skills add https://github.com/Leonxlnx/taste-skill` |
| [Impeccable](https://impeccable.style/) | `frontend-design` 增强（`/polish`、`/audit`、`/distill`） | `npx skills add pbakaus/impeccable` |
| [emilkowalski / skills](https://github.com/emilkowalski/skills/tree/main) | 动效与界面品味（`animate`、`apple-design`、`break-ui` 等） | `npx skills add emilkowalski/skills` |
| [jakubkrehel / skills](https://github.com/jakubkrehel/skills) | 按维度审界面（a11y / 布局 / 文案 / 排版 / 色彩）；含 PR 回归与设计落地 | `npx skills add jakubkrehel/skills`；Claude Code：`/plugin marketplace add jakubkrehel/skills` → `/plugin install interfaces@interfaces` |

合集入口：[OpenAI Skills](https://github.com/openai/skills)、[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)。

> [!NOTE]
> **怎么选 · 前端审美**  
> 官方偏「做出好看的页面」；要压住 AI 通用 slop（紫渐变、卡片堆砌），优先 [taste-skill](https://github.com/Leonxlnx/taste-skill) 或 [Impeccable](https://impeccable.style/)。动效与「该不该动」用 [emilkowalski / skills](https://github.com/emilkowalski/skills/tree/main)。按维度系统审界面或审 PR 界面回归，用 [jakubkrehel / skills](https://github.com/jakubkrehel/skills)。

### 通用办公

| Skill | 来源 | 用途 |
|-------|------|------|
| [`pptx`](https://github.com/anthropics/skills/tree/main/skills/pptx) | Anthropic | 做 / 改 / 读 PPT，按模板生成 deck |
| [`pdf`](https://github.com/anthropics/skills/tree/main/skills/pdf) | Anthropic | 提取、合并、OCR、表单、拆分 |
| [`docx`](https://github.com/anthropics/skills/tree/main/skills/docx) | Anthropic | 正式报告、方案、备忘录、函件 |
| [`xlsx`](https://github.com/anthropics/skills/tree/main/skills/xlsx) | Anthropic | 表格、公式、格式化、图表 |
| [anydoc](https://anydoc.wiki/)（[Firecrawl](https://github.com/firecrawl/anydoc)） | Firecrawl | 14 种办公文档 → 干净 GFM Markdown（本地毫秒级）；`npx @firecrawl/anydoc` |
| [`transcribe`](https://github.com/openai/skills/tree/main/skills/.curated/transcribe) | OpenAI | 会议录音、访谈转文字 |
| [`internal-comms`](https://github.com/anthropics/skills/tree/main/skills/internal-comms) | Anthropic | 周报、项目更新、公告 |
| [`doc-coauthoring`](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring) | Anthropic | 协作写作，整理成正式文档 |
| [`notion-knowledge-capture`](https://github.com/openai/skills/tree/main/skills/.curated/notion-knowledge-capture) | OpenAI | 会议与决策沉淀进 Notion |
| [`screenshot`](https://github.com/openai/skills/tree/main/skills/.curated/screenshot) | OpenAI | 截图留痕、操作说明 |
| [`theme-factory`](https://github.com/anthropics/skills/tree/main/skills/theme-factory) | Anthropic | 统一文档 / 演示视觉主题 |

> [!NOTE]
> **边界**  
> 官方 `pptx` / `docx` / `pdf` 偏「读写与精修办公文档」。本地文档**转成给 Agent 读的 Markdown** → [anydoc](https://anydoc.wiki/)。浏览器里快速出完整 deck、改字换图再导出 PPTX → [PPT / 演示文稿](#ppt-演示文稿)（[dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill)）。

### 公众号 / 内容创作

| Skill | 用途 | 安装 |
|-------|------|------|
| [gzh-design-skill](https://github.com/isjiamu/gzh-design-skill) | Markdown → 可粘贴进公众号编辑器的 HTML（6 套主题 + 主题生成器） | `npx skills add https://github.com/isjiamu/gzh-design-skill` |
| [Humanizer-zh](https://github.com/op7418/Humanizer-zh) | 中文润色：去空话、套话与 AI 痕迹，保留事实与作者声音 | `npx skills add https://github.com/op7418/Humanizer-zh.git` |
| [baoyu-skills](https://github.com/jimliu/baoyu-skills) | 文配图 / 插画生成 | 见仓库说明 |

### PPT / 演示文稿

| Skill | 用途 | 安装 / 入口 |
|-------|------|-------------|
| [dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | 网页可编辑 PPT → 导出 HTML / PDF / 可编辑 PPTX（12 主题、1020 版式；需 Node 20+；导出需本机 Chrome / Chromium / Edge） | `npx dashi-ppt-skill@latest` |
| [`pptx`](https://github.com/anthropics/skills/tree/main/skills/pptx) | 按模板读写 / 精修现有 PPT | [Anthropic Skills](https://github.com/anthropics/skills) |
| [`theme-factory`](https://github.com/anthropics/skills/tree/main/skills/theme-factory) | 统一演示视觉主题 | 同上 |

### 视频制作

| Skill | 用途 | 安装 |
|-------|------|------|
| [jacky-motion](https://github.com/Jackywxsz/jacky-motion) | 口播稿 + SRT → 可录屏的 16:9 自动播放 HTML（不直接出 MP4） | `npx skills add https://github.com/Jackywxsz/jacky-motion` |
| [OpenMontage](https://github.com/calesthio/OpenMontage) | Agent 全流程视频制片（pipeline + 700+ 技能/知识文件；需 Python 3.10+、FFmpeg、Node 18+） | `git clone` + `make setup` |

---

## 参考链接

只放**跨类别**资源（文档、安装工具、市场、Awesome）。按用途的推荐见上一节，此处不重复。

### 文档与规范

- [Claude 官方 Skills 文档](https://code.claude.com/docs/zh-CN/skills) — 最权威的规范与功能说明
- [Agent Skills（claudecn）](https://claudecn.com/docs/agent-skills/) — 中文解读与示例
- [Agent Skills（agentskills.io）](https://agentskills.io/) — 社区导航，按场景浏览
- [SkillsHunt](https://skillshunt.io/) — 标签与热度筛选
- [YouMind Skills](https://youmind.com/zh-CN/skills) — 学习与创作向导航

### 安装与管理

- [Skills.sh](https://skills.sh/) — CLI 安装 / 更新；[热门技能页](https://skills.sh) 看趋势
- [TeamAI](https://github.com/Tencent/teamai-cli) — 团队级 Skills / Rules / MCP / Agents 共享（`npm install -g teamai-cli`）
- [Skill Creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) — Anthropic 官方模板与创建向导
- [MCPMarket Skills Leaderboard](https://mcpmarket.com/zh/tools/skills/leaderboard) — 第三方榜单与导航
- [ClawHub Skills](https://clawhub.ai/skills) — ClawHub 平台技能市场

### 市场与合集

- [agent-skills.md](https://agent-skills.md) — 6000+ 高频技能
- [Skills Directory](https://www.skillsdirectory.com) — Reddit 社区口碑向整理
- [SkillsMP](https://skillsmp.com/zh) — 聚合 GitHub 开源技能，适合全网搜与溯源
- [Agent Skills Me](https://agentskills.me) — 人工精选、小而精
- [SkillStore](https://skillstore.io/zh-hans) — 中文友好，强调安全审查
- [SkillHub（腾讯）](https://skillhub.tencent.com/) — 按模型 / 场景筛选
- [Linux.do Awesome Skills](https://github.com/jochne/linuxdo-awesome-skills) — 社区导航（[在线浏览](https://linuxdo-awesome-skills.tencents.ltd/)）
- [CocoLoop Skill 商店](https://hub.cocoloop.cn/) — 聚合 Skills、国内镜像、OpenClaw 专题

### Awesome / 索引

- [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills) — Claude.ai / Claude Code / API 场景
- [Awesome Agent Skills](https://github.com/JackyST0/awesome-agent-skills) — 社区优质技能索引
- [Ultimate Agent Skills Collection](https://github.com/ZhanlinCui/Ultimate-Agent-Skills-Collection) — 多来源总目录

> [!NOTE]
> **延伸阅读**  
> 推荐技能、资讯与实战案例的专题汇总：  
> [Agent Skills 终极指南](/agent/awesome-agent-skills.html)
