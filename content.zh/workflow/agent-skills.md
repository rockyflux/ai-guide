---
title: Agent Skills 推荐
weight: 27
---

# 精选 Skills 推荐：10 个让 Coding Agent 如虎添翼的Skills + 优质来源分享

## 推荐 Skills/Skills framework等相关一览
| #  | 名称 | 类型 | 热度 | 一句话说清楚 |
|----|------|------|------|-------------|
| 1  | Superpowers | Skills Framework | ⭐ 90k+ | 强制 coding agent 走 TDD + 代码审查，不让 coding agent 偷懒 |
| 2  | SuperClaude Framework | Skills 命令框架 | ⭐ 21.8k | 30 条 slash 命令，指挥 coding agent 干活 |
| 3  | MiniMax Skills | Skills 集合包 | ⭐ 1.8k | 10 个工业级流程卡，前端全栈移动端文档都有 |
| 4  | Anthropic Official Skills | 官方 Skills | 官方出品 | 官方的 skills 参考实现，`skill-creator` 必装 |
| 5  | Vercel Agent Skills | Skills 集合包 | ⭐ 23.6k | Vercel 官方出品，React/Web 设计 140+ 条审查规则 |
| 6  | Planning with Files | 专项 Skill | 高引用 | 用 Markdown 文件给 coding agent 当外挂记忆库|
| 7  | Context Engineering Skills | Skills 集合包 | 社区热门 | 教 coding agent 管理自己的上下文 |
| 8  | Composio Skills | Skills + MCP | 团队出品 | MCP + Skills 双层配合，教 coding agent 认证和调用外部服务 |
| 9  | Antfu Skills | 个人 Skills | 开发者标杆 | 高手是怎么写 Skills 的 |
| 10 | Awesome Agent Skills | Skills 索引 | ⭐ 12.4k | 500+ 各大厂 Skills 的索引，当目录翻 |

---

## 1. Superpowers（⭐ 90k+）

**仓库**：[obra/superpowers](https://github.com/obra/superpowers)

**作者**：Jesse Vincent

**类型**：Skills Framework，准确的说，这其实是一整套工程方法论系统

**兼容**：Claude Code（Marketplace 已收录）、Codex、Gemini CLI、OpenCode、Cursor

GitHub 上非常非常火的 Coding Agent 框架

但很多佬友以为它是一堆 SKILL.md 卡片，其实它是一套完整的系统：包含Skills + 子智能体 + Slash 命令 + 会话钩子 + 多平台适配器。

### 完整结构

```
superpowers/
├── skills/           ← 14 个核心 Skills（带 references/ 按需加载）
├── agents/           ← 子智能体（code-reviewer）
├── commands/         ← 3 个命令（/brainstorm /write-plan /execute-plan）
├── hooks/            ← 会话钩子（启动时自动注入）
├── .claude-plugin/   ← Claude Code 插件配置
├── .codex/           ← Codex 适配
├── .opencode/        ← OpenCode 适配
├── GEMINI.md         ← Gemini CLI 适配
└── docs/
```

### 14 个 Skills

| 类别 | Skill | 用途 |
|------|-------|----------|
| 方法论 | `brainstorming` | 动手之前按照上下文-问问题-出方案-写文档的流程来走 |
| 方法论 | `writing-plans` | 把设计变成分步计划 |
| 方法论 | `executing-plans` | 按计划严格执行，禁止 Coding Agent 跳步 |
| TDD | `test-driven-development` | 先写测试再写码，如果跳过了测试就重来 |
| 调试 | `systematic-debugging` | 系统化排雷（光引用文件就 11 个），不让 Coding Agent 自己乱试 |
| 子智能体 | `subagent-driven-development` | 多个子智能体协同干活 |
| 子智能体 | `dispatching-parallel-agents` | 并行分派 Agent 出去 |
| 代码审查 | `requesting-code-review` | 发起审查 |
| 代码审查 | `receiving-code-review` | 接收审查反馈 |
| Git | `using-git-worktrees` | worktree 物理隔离分支 |
| Git | `finishing-a-development-branch` | 分支收尾清单 |
| 质量 | `verification-before-completion` | 做完了必须跑验证，而不是等Agent自我感觉良好了就输出 |
| 元技能 | `using-superpowers` | 路由器，告诉 Coding Agent 什么时候该用哪个 Skill |
| 元技能 | `writing-skills` | 写新的 Skill |

### 为什么把它排第一

它解决了一个让大家头痛很久的问题：coding agent 拿到需求就直接开写，不想不规划不测试。Superpowers 把完整的工程流水线用skills固化了下来：

```
收到任务 → brainstorming（先想清楚）
        → writing-plans（写计划）
        → test-driven-development（TDD 写码）
        → verification-before-completion（跑验证）
        → requesting-code-review（代码审查）
        → finishing-a-development-branch（收尾提交）
```

每个环节都有门控——前一步没过是到不了下一步。装了之后 coding agent 的输出质量是能明显感觉到提升的。

### 安装

支持 Claude Code / Codex / Cursor / Gemini CLI / OpenCode，各平台方式不一样。

👉 **直达仓库 README**：[github.com/obra/superpowers#installation](https://github.com/obra/superpowers#installation)

---

## 2. SuperClaude Framework（⭐ 21.8k）

**仓库**：[SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework)

**类型**：Skills 命令框架

**兼容**：Claude Code

这是一个元编程配置框架而不是标准的 skill.md 的格式，但做的事情却和 skills 高度相似，SuperClaude Framework定义了 Coding Agent 的行为模式、工作流程、输出约束，所以我还是把这个项目放到了 skills 推荐专栏，它和 Superpowers 的区别是，Superpowers 管的是“怎么正确地开发”（TDD、代码审查），SuperClaude 管的是怎么高效地指挥 coding agent 干活。两个可以配合着用。

### 30 条命令一览

| 类别 | 命令 | 用途 |
|------|------|------|
| 规划设计 | `/brainstorm` `/design` `/estimate` `/spec-panel` | 想点子、画架构、估工时 |
| 开发 | `/implement` `/build` `/improve` `/cleanup` `/explain` | 写码、构建、改进、重构 |
| 测试质量 | `/test` `/analyze` `/troubleshoot` `/reflect` | 测试、分析、排障、复盘 |
| 文档 | `/document` `/help` | 写文档、看帮助 |
| 版本控制 | `/git` | Git 操作 |
| 项目管理 | `/pm` `/task` `/workflow` | 项目管理、任务跟踪 |
| 研究 | `/research` `/business-panel` | 深度调研、商业分析 |
| 工具 | `/agent` `/spawn` `/index-repo` `/save` `/load` 等 | 子 Agent、并行任务、会话管理 |

### 安装

👉 **直达仓库 README**：[github.com/SuperClaude-Org/SuperClaude_Framework#-quick-installation](https://github.com/SuperClaude-Org/SuperClaude_Framework#-quick-installation)

---

## 3. MiniMax Skills（⭐ 1.8k）

**仓库**：[MiniMax-AI/skills](https://github.com/MiniMax-AI/skills)

**类型**：Skills 集合包（10 个）

**兼容**：Claude Code / Cursor / Codex / OpenCode

昨天晚上看到佬友分享后马上就去了解了一下，这个repo是MiniMax 官方出的 10 个技能，每个都带完整工作流、设计系统、质量门控，是可以直接拿来用在生产环境的。

### 10 个技能

| Skill | 定位 | 用途 |
|-------|------|------|
| `frontend-dev` | 前端 | 设计 + 动画（Framer Motion / GSAP）+ AI 资源生成 + 文案 |
| `fullstack-dev` | 全栈 | 7 条规范 + 三层架构 + 13 种模式 |
| `android-native-dev` | Android | Kotlin/Compose + Material Design 3 |
| `ios-application-dev` | iOS | UIKit + SwiftUI + Apple HIG |
| `shader-dev` | 着色器 | 36 种 GLSL 技术 |
| `gif-sticker-maker` | GIF 贴纸 | 照片转 Funko Pop 风格动画 GIF |
| `minimax-pdf` | PDF | 从零创建 / 填表 / 重排版 |
| `pptx-generator` | PPT | PptxGenJS + 完整设计系统 |
| `minimax-xlsx` | Excel | 创建/读/分析/编辑/验证 |
| `minimax-docx` | Word | OpenXML SDK + XSD 验证 |

### 安装

支持 Claude Code / Cursor / Codex / OpenCode。

👉 **直达仓库 README**：[github.com/MiniMax-AI/skills#installation](https://github.com/MiniMax-AI/skills#installation)

---

## 4. Anthropic Official Skills（官方出品）

**仓库**：[anthropics/skills](https://github.com/anthropics/skills)

**类型**：官方 Skills

**兼容**：Claude Code（原生支持）

Anthropic 自己出的 Skills，算是 Skills 的标杆了，这个 skill-creator 在站内也有很多佬友推荐， frontend-design 也很不错。

| Skill | 用途 |
|-------|------|
| `skill-creator` | **教你怎么写 Skill 的 Skill**，入门必装 |
| `frontend-design` | 前端设计、UI/UX |
| `web-artifacts-builder` | 构建 HTML artifacts（React + Tailwind） |
| `mcp-builder` | 创建 MCP Server |
| `webapp-testing` | Playwright 测试 |
| `docx` / `pptx` / `xlsx` / `pdf` | 文档四件套 |
| `algorithmic-art` | p5.js 生成艺术 |
| `canvas-design` | PNG/PDF 可视化设计 |

如果佬友们打算自己写 Skills，先装 `skill-creator`。它会引导你按标准格式来，包括 SKILL.md 怎么写、元数据怎么填。

---

## 5. Vercel Agent Skills（⭐ 23.6k）

**仓库**：[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)

**类型**：Skills 集合包（前端最佳实践）

**兼容**：Claude Code / Cursor / Codex / 通用

Vercel 工程团队出品的 5 个 Skills，每个都是 SKILL.md 标准格式。做 React / Next.js / Web 开发的佬友可能会感兴趣，它不教如何写代码，而是教 coding agent 按 Vercel 团队的工程标准来审查和优化代码。

| Skill | 用途 |
|-------|--------|
| `react-best-practices` | 40+ 条 React/Next.js 性能优化规则，按影响程度分级（消除 waterfall、包体积优化、SSR 性能…） |
| `web-design-guidelines` | 100+ 条 Web 设计审查规则：无障碍、焦点状态、表单、动画、暗色模式、国际化… |
| `react-native-guidelines` | 16 条 RN/Expo 最佳实践：FlashList、Reanimated、手势处理、平台适配 |
| `composition-patterns` | 用组合模式替代 boolean prop 泛滥：compound components、状态提升 |
| `vercel-deploy-claimable` | 一键部署到 Vercel，自动检测 40+ 框架，返回预览链接 |

特别推荐 `web-design-guidelines`——100 多条规则覆盖了你能想到的所有 UI 细节，coding agent 做完 UI 后让它跑一遍这个 Skill 的审查，能抓出不少自己根本审不到的问题。

### 安装

👉 **直达仓库 README**：[github.com/vercel-labs/agent-skills#installation](https://github.com/vercel-labs/agent-skills#installation)

---

## 6. Planning with Files

**仓库**：[OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files)

**类型**：专项 Skill（上下文工程）

**兼容**：Claude Code / Codex / 通用

做过长任务的佬都知道，coding agent 做到一半就忘了最初的目标，上下文太长前面的指令就被稀释掉了。这个 Skill 用 Markdown 文件给 coding agent 做了一个外挂记忆库：

- `task_plan.md` → 任务规划
- `findings.md` → 调研发现
- `progress.md` → 进度追踪

coding agent 做重大决策会先重读计划，在推进过程中更新进度，十分适合跨多轮对话的复杂任务。

---

## 7. Context Engineering Skills

**仓库**：[muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)

**类型**：Skills 集合包（上下文治理）

**兼容**：通用

现在社区慢慢意识到了：提示词工程只是冰山一角，左右 coding agent 输出质量的还有很大的一部分是上下文工程，给它看什么、按什么顺序看、什么时候该压缩、什么时候该忘掉是很重要的一环。

| Skill | 教 coding agent 什么 |
|-------|-----------|
| `context-fundamentals` | 理解上下文的本质 |
| `context-degradation` | 识别上下文退化：识别丢信息、注意力分散的情况 |
| `context-compression` | 长对话压缩策略 |
| `context-optimization` | 缓存、掩码策略 |
| `multi-agent-patterns` | 编排者/对等/层级式多智能体架构 |
| `memory-systems` | 短期/长期/图结构记忆 |

---

## 8. Composio Skills

**仓库**：[ComposioHQ/skills](https://github.com/ComposioHQ/skills)

**类型**：Skills + MCP（双层配合）

**兼容**：通用（`npx skills add composiohq/skills` 一键安装）

日常开发里 coding agent 经常要和外部服务打交道——读写 GitHub Issues、发 Slack 通知、操作 Google Sheets、查 Jira。每个服务都自己写 MCP Server 来对接对很麻烦，Composio 把这些都封装好了。

它比较特殊的一点是：**MCP + Skills 配合**。Composio 本身提供 MCP Server（`composio mcp`），coding agent 通过标准 MCP 协议调用外部服务；同时还有一层 SKILL.md + rules 文件，教 coding agent 怎么正确地使用这些 MCP 工具——session 怎么管、多用户怎么隔离、OAuth 怎么走、各框架怎么集成。光有 MCP 工具 coding agent 只知道能调，加上 Skills 它才知道怎么调才对。

Composio Skills 的模式也是我觉得很有参考价值的模式，用 MCP + Skills 配合来提高agent调用工具的质量和效率。

### 仓库结构

```
skills/composio/
├── SKILL.md       ← 主入口，概览和规则索引
├── AGENTS.md      ← 单文件合并版（自动生成）
└── rules/         ← 各类规则文件
    ├── tr-*.md        ← Tool Router 规则
    └── triggers-*.md  ← 触发器规则
```

### 四块能力

| 模块 | 用途 |
|------|--------|
| Tool Router | 教 coding agent 怎么选工具、管 session、做用户隔离。还附了 Vercel / OpenAI Agents / LangChain / Claude / CrewAI 各框架的集成指南 |
| Authentication | 自动认证（在对话里直接搞定 OAuth）和手动授权流程 |
| Toolkits & Connections | 查询可用工具集、管理连接状态 |
| Triggers & Events | 创建实时事件触发器、Webhook 验证、生产环境部署模式 |

和其他 Skills 不一样的地方是：Composio 的 rules 文件是按场景拆的小卡片（`tr-session-management.md`、`tr-framework-integration.md`），coding agent 按需读取，不会一次性全加载。

---

## 9. Antfu Skills

**仓库**：[antfu/skills](https://github.com/antfu/skills)

**类型**：个人 Skills

**兼容**：通用

[Anthony Fu](https://github.com/antfu) 的个人 Skills 仓库。他是 Vue / Vite / UnoCSS / Vitest 的核心维护者，代码风格和工程标准就是行业标杆。与其一口气装一堆别人写的 Skills，不如先看看顶级大佬是怎么组织和写 Skills 的，学到手之后自己写的才好用。

---

## 10. Awesome Agent Skills（⭐ 12.4k）

**仓库**：[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)

**类型**：Skills 索引

**兼容**：Claude Code / Codex / Antigravity / Gemini CLI / Cursor 等

严格说这不是一个 Skill，而是一个 500+ Skills 的索引仓库，正因为它整合的 skills 实在是全面，所以我决定放进来。里面收录的都是 Anthropic、Google Labs、Vercel、Stripe、Cloudflare、Netlify、Trail of Bits、Sentry、Expo、Hugging Face 这些团队贡献的高质量 skills。

| 来源团队 | 代表 Skills |
|----------|-------------|
| Stripe | `stripe-best-practices`（支付集成）、`upgrade-stripe`（SDK 升级） |
| Supabase | `postgres-best-practices` |
| Google Gemini | Gemini API / Vertex AI 开发指南 |
| Vercel | 部署和开发最佳实践 |
| Cloudflare | Workers / Pages 开发 |
| Trail of Bits | 安全审计 |

直接把这个项目当成skills索引即可，千万不要一口气都装下来！

---

## 怎么选？

| 情况 | 选这个 |
|----------|--------|
| coding agent 写码太随意，需要引入规范 | **Superpowers**（#1） |
| 想要一套命令系统指挥 coding agent | **SuperClaude Framework**（#2） |
| 需要特定领域指导（前端/全栈/移动端） | **MiniMax Skills**（#3） |
| 想用官方标准 Skills | **Anthropic Official**（#4） |
| 做 React/Web 前端想要工程标准 | **Vercel Agent Skills**（#5） |
| coding agent 做长任务忘了最初目标 | **Planning with Files**（#6） |
| 想深入上下文管理 | **Context Engineering**（#7） |
| 要对接外部 API 和服务 | **Composio Skills**（#8） |
| 想学怎么写好 Skills | **Antfu Skills**（#9） |
| 想看大厂团队都用什么 | **Awesome Agent Skills**（#10） |

---

## Skills 加载机制

很多佬友以为 Skills 是“coding agent 检测到任务后按需调的”——只对了一半，不同工具之间还是有差异的

### 两种模式

| 模式 | 工作方法 |
|------|----------|
| 全量加载 | 启动时把 skills 目录里所有 SKILL.md 一股脑塞进 system prompt |
| 按需路由 | 只读 name + description，匹配到了才加载完整内容 |

全量加载的工具，Skills 装多了会吃掉大量 token，最后导致留给实际对话的空间骤减，而按需路由的可以多装一些。

### references/ 目录

好的 Skill 会把详细内容拆到 `references/` 子目录：

```
my-skill/
├── SKILL.md              ← 先读这个（比较短，用来做路由）
└── references/
    ├── detailed-guide.md     ← 需要时才读
    └── anti-patterns.md      ← QA 阶段才读
```

主 SKILL.md 越短越好，这个确实很重要。Superpowers 的 `systematic-debugging` 有 11 个引用文件，但主文件很短，只在任务匹配时才加载详细指南。


## 装之前看这里

### 不要贪多

```
参考分层：
层 1：一个 Framework（Superpowers 或 SuperClaude，二选一）
层 2：1-2 个领域 Skill
层 3：Awesome 系列当skills索引，而不要整个装
```


### 自己写一个

用了别人的 Skills 之后，建议佬友们也自己写一个。回顾一下你和 coding agent 协作最顺畅的那几次，把那套流程固化下来就行。用前文提到的 Anthropic 的 `skill-creator` 来引导编写一下。

---

## 附录一：Skills 整合平台

除了上面推荐的 10 个，找更多 Skills 可以去这些地方翻：

| 平台 | 特点 | 链接 |
|------|------|------|
| Skills.sh | Vercel 出的，3.5 万+ 技能包，支持一键安装 | [skills.sh](https://skills.sh/) |
| SkillsMP | 聚合 GitHub 12.1 万+ 开源技能，AI 语义搜索 | [skillsmp.com](https://skillsmp.com/zh) |
| Agent Skills Me | 人工精选 | [agentskills.me](https://agentskills.me) |
| agent-skills.md | 6000+ 高频技能 | [agent-skills.md](https://agent-skills.md) |
| Agent Skills Hub | 29,000+ Skills + MCP Servers | [agentskillshub.top](https://agentskillshub.top/) |
| agent-skills.cc | 从 63,000+ GitHub Skills 里精选 1,000+ | [agent-skills.cc](https://agent-skills.cc/) |
| Claude Marketplaces | Claude Code 插件市场 | [claudemarketplaces.com](https://claudemarketplaces.com/) |
| AI Templates | 1000+ Agents / Commands / Skills / MCP | [aitmpl.com](https://www.aitmpl.com/) |
| SkillStore | 中文友好，有安全审查 | [skillstore.io](https://skillstore.io/zh-hans) |
| Skills Directory | Reddit 社区推荐的口碑榜 | [skillsdirectory.com](https://www.skillsdirectory.com) |
| SkillHub（腾讯） | 2.2 万+ 技能，国内高速镜像 | [skillhub.tencent.com](https://skillhub.tencent.com/) |
| ClawHub | OpenClaw 官方技能仓库，像 npm 一样管理 | [clawhub.ai](https://clawhub.ai/) |

---

## 附录二：Repo推荐



| 仓库 | 定位 |
|------|------|
| [anthropics/skills](https://github.com/anthropics/skills) | Anthropic 官方 Skills |
| [obra/superpowers](https://github.com/obra/superpowers) | Superpowers 框架 |
| [SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework) | SuperClaude 命令框架 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | MiniMax 10 个生产级 Skills |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 500+ Skills 索引 |
| [ComposioHQ/skills](https://github.com/ComposioHQ/skills) | Composio MCP + Skills |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel 官方 |
| [antfu/skills](https://github.com/antfu/skills) | Antfu 的个人实践 |
| [ZhanlinCui/Agent-Skills-Hunter](https://github.com/ZhanlinCui/Agent-Skills-Hunter) | 大杂烩（400+ Skills） |

## 来源

- [https://github.com/1EchA/how-to-vibecoding/](https://github.com/1EchA/how-to-vibecoding/)
