---
title: 编程工具对比
weight: 20
bookHidden: false
bookToc: false
noTocArea: true
---

# 编程工具对比


> Agent ≈ LLM（推理大脑） + Skills（任务编排 / 提示词策略） + Tools（动作能力）
> Tools 可通过自定义函数调用（Function Calling）、MCP 等多种通信方式接入。[万字长文解读LLM Agent：总体框架、经典论文与实践](https://zhuanlan.zhihu.com/p/2000210358820946463)

![Agent 流程图](/images/ai-programming/agent-flowchart.png)

## 工具对照表

| # | 工具 | 类型 | 一句话定位 | 定价 |
|---|---|---|---|---|
| 1 | [Claude Code](https://claude.com/product/claude-code) | CLI / IDE / 桌面 / Web | Anthropic 代理式编码：整库读写、MCP、子代理、钩子 | [定价](https://claude.com/pricing) · Pro $20/月起 |
| 2 | [Codex](https://developers.openai.com/codex) | CLI / IDE / 桌面 / 云 | OpenAI 编码代理；优先 ChatGPT 原生登录控成本 | [定价](https://developers.openai.com/codex/pricing) · Plus $20/月起 |
| 3 | [Cursor](https://cursor.com/) | 独立 IDE / CLI / 云 | Agent + Tab + 云代理；规则 / MCP / Bugbot 偏团队 | [定价](https://cursor.com/pricing) · Pro $20/月起 |
| 4 | [GitHub Copilot](https://github.com/features/copilot) | IDE / CLI / 平台 | 补全 + Chat + Agent；与 GitHub 工作流绑定最深 | [定价](https://github.com/features/copilot/plans) · Pro $10/月起 |
| 5 | [Devin](https://devin.ai/desktop) | 独立 IDE / 桌面 | Cognition 多智能体指挥台（原 Windsurf）：本地/云 Agent + IDE | [定价](https://devin.ai/desktop) · Pro $20/月起 |
| 6 | [Cline](https://github.com/cline/cline) | IDE 扩展 / CLI | 开源 IDE 内代理；人工确认后改文件 / 跑命令 / MCP | [仓库](https://github.com/cline/cline) · 免费 BYOK |
| 7 | [OpenCode](https://opencode.ai/) | CLI / 桌面 / IDE | 模型无关开源代理；终端 + 桌面 + 扩展一体 | [官网](https://opencode.ai/) · 免费 BYOK / Zen 充值 |
| 8 | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | CLI | 终端里的 Gemini：大上下文、Search、MCP | [配额说明](https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/quota-and-pricing.md) · 免费档可用 |
| 9 | [Gemini Code Assist](https://codeassist.google/) | IDE 扩展 | Google 云 / IDE 侧编程助手；企业配额与治理 | [商业定价](https://codeassist.google/products/business) · 个人免费 |
| 10 | [Google Antigravity](https://antigravity.google/) | 独立 IDE / 桌面 | 多智能体并行开发平台；编辑器 + 管理视图 | [定价](https://antigravity.google/pricing) · 个人免费 / AI Pro 起 |
| 11 | [Kiro](https://kiro.dev/) | 独立 IDE / CLI | 规格驱动 + 钩子 / Powers；默认托管模型路由 | [定价](https://kiro.dev/pricing/) · Pro $20/月起 |
| 12 | [Trae](https://www.trae.ai/) / [TRAE 国内版](https://www.trae.cn/) | 独立 IDE / CLI | 字节跳动 AI IDE（国际/国内分发）；SOLO/Builder + 开源 Trae Agent | [定价](https://www.trae.ai/pricing) · 免费档 / Pro $10/月起 |
| 13 | [通义灵码](https://lingma.aliyun.com/) | 独立 IDE / 插件 | 阿里云智能编码；企业知识库与私有化 | [定价](https://lingma.aliyun.com/pricing) · 个人基础免费 |
| 14 | [CodeBuddy](https://www.codebuddy.ai/) | IDE / CLI | 腾讯云编码助手；Craft 智能体 + MCP | [定价](https://www.codebuddy.ai/docs/ide/Account/pricing) · 免费档 / 专业约 $10/月 |
| 15 | [文心快码](https://comate.baidu.com/) | IDE 扩展 | 百度 Comate：补全 / 对话 / Zulu 智能体 | [定价](https://comate.baidu.com/zh/pricing) · 个人标准免费 |
| 16 | [Aider](https://aider.chat/) | CLI | 终端结对编程；代码库映射 + 自动 Git 提交 | [官网](https://aider.chat/) · 免费 BYOK |
| 17 | [Continue](https://www.continue.dev/) | IDE / CLI | 开源编码代理；适合把规范 / 检查写入仓库 | [定价](https://www.continue.dev/pricing) · 按量 / 团队 $20/席 |
| 18 | [Kilo Code](https://kilo.ai/) | IDE / CLI / 云 | 开源全栈 Agent；多模式 + 多模型 | [定价](https://kilo.ai/pricing) · 免费 BYOK / Pass $19/月起 |
| 19 | [Junie](https://junie.jetbrains.com/) | CLI / JetBrains / CI | JetBrains 模型无关代理；IDE + CI 一体 | [官网](https://junie.jetbrains.com/) · 免费 BYOK / AI Pro $10/月起 |
| 20 | [Amazon Q Developer](https://aws.amazon.com/q/developer/) | IDE / CLI | AWS 托管编码助手；安全分析与 Java 升级 | [定价](https://aws.amazon.com/q/developer/pricing/) · 免费档 / 专业 $19/月 |
| 21 | [Augment](https://www.augmentcode.com/) | IDE 扩展 / CLI | 大型代码库上下文引擎 + 代理 | [定价](https://www.augmentcode.com/pricing) · $20/月起 |
| 22 | [Tabnine](https://www.tabnine.com/) | IDE / CLI | 企业隐私与私有化部署向编码平台 | [定价](https://www.tabnine.com/pricing/) · 助手约 $39/席・月 |
| 23 | [Zed](https://zed.dev/) | 独立 IDE | Rust 高性能协作编辑器；Agent 面板 + 多模型 | [定价](https://zed.dev/pricing) · 个人免费 / Pro $10/月 |
| 24 | [Warp](https://www.warp.dev/) | AI 终端 / 工作区 | 终端 + 代理编排；可挂 Claude Code / Codex 等 | [定价](https://www.warp.dev/pricing) · 免费档 / Build $18/月起 |
| 25 | [Replit](https://replit.com/) | 云 IDE / 平台 | 浏览器 IDE + Agent；从需求到部署一条链 | [定价](https://replit.com/pricing) · Core $20/月起（年付） |
| 26 | [OpenHands](https://openhands.dev/) | 平台 / CLI / SDK | 端到端工程代理；本地 / 云 / 企业自托管 | [定价](https://openhands.dev/pricing) · 开源本地免费 |
| 27 | [goose](https://goose-docs.ai/) | CLI / 桌面 / API | AAIF 本地开源代理；多提供商 + MCP | [文档](https://goose-docs.ai/) · 免费 BYOK |
| 28 | [Qwen Code](https://github.com/QwenLM/qwen-code) | CLI / IDE / SDK | 通义系终端编程代理；可接阿里云 Coding Plan | [Coding Plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan) · BYOK / Plan $50/月起 |
| 29 | [Amp](https://ampcode.com/) | CLI / IDE | Sourcegraph 终端优先多模型代理 | [定价](https://ampcode.com/manual#pricing) · 按量充值 |
| 30 | [Pi](https://github.com/earendil-works/pi) | CLI / SDK 运行时 | 可扩展终端 Coding Agent；亦作 SDK 底座（Extensions/Skills） | [仓库](https://github.com/earendil-works/pi) · 免费 BYOK |
| 31 | [oh-my-pi (omp)](https://github.com/can1357/oh-my-pi) | CLI（Pi fork） | Pi 增强：LSP/DAP、子 Agent、ACP 接 Zed 等 | [omp.sh](https://omp.sh) · 免费 BYOK |
| 32 | [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | CLI / 桌面 / 浏览器 | DeepSeek 原生终端 Agent；prefix-cache 向长时运行 | [reasonix.io](https://reasonix.io/) · 免费 BYOK |
| 33 | [Orca](https://www.onorca.dev/) | ADE 桌面工作区 | 隔离 worktree 并行跑 Claude Code / Codex / OpenCode 等 | [GitHub](https://github.com/stablyai/orca) · 开源免费 |
| 34 | [Desktop CC GUI (ccgui)](https://github.com/zhukunpenglinyutong/desktop-cc-gui) | 多引擎桌面客户端 | 一窗挂 Claude Code / Codex / Pi / OpenCode / DSH 等；聊天 + 终端 + Git | [下载](https://www.mossx.ai/download) · 开源免费 |
| 35 | [Grok Build](https://x.ai/build) | CLI / TUI / ACP | xAI 终端编程 Agent；Plan Mode、并行子 Agent + worktree | [定价](https://x.ai/pricing) · SuperGrok $30/月起 / X Premium+ |
| 36 | [Factory Droid](https://factory.ai/) | CLI / 桌面 / SDK | Factory 自主 Droids；工单到 PR、云沙箱并行 | [定价](https://factory.com/pricing) · Pro $20/月起 |
| 37 | [Deep Agents](https://www.langchain.com/deep-agents) | SDK / CLI（dcode） | LangChain 开源 Agent harness；规划 + 子 Agent + 上下文管理 | [仓库](https://github.com/langchain-ai/deepagents) · 免费 BYOK |
| 38 | [Firebender](https://firebender.com/) | Android Studio / JetBrains | Android 原生编码 Agent；写功能 → 模拟器测 → 自动修 | [定价](https://firebender.com/pricing) · Flex $9/月起 |
| 39 | [Kimi Code CLI](https://www.kimi.ai/code/en) | CLI / IDE | 月之暗面终端编程 Agent；长上下文 + Coding Plan | [Kimi Code](https://www.kimi.com/code) · BYOK / Plan 约 ¥39/月起 |
| 40 | [IBM Bob](https://bob.ibm.com/) | 独立 IDE / 企业平台 | IBM 企业多智能体编码；现代化工作流 + 成本看板 | [定价](https://www.ibm.com/products/ai-coding-agent) · 约 $20/实例・月起 |
| 41 | [Command Code](https://commandcode.ai/) | CLI | 面向开源模型的终端 Agent；工具调用修复 + 风格学习 | [定价](https://commandcode.ai/pricing) · 免费额度 / 按量 |
| 42 | [Cortex Code (CoCo)](https://www.snowflake.com/en/product/snowflake-coco/) | CLI / Snowsight | Snowflake 数据栈原生编码 Agent；SQL / dbt / 仓内上下文 | [文档](https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code) · 按 Snowflake 用量 |
| 43 | [Crush](https://github.com/charmbracelet/crush) | CLI / TUI | Charm 终端审美向编码 Agent；多模型 + LSP | [仓库](https://github.com/charmbracelet/crush) · 免费 BYOK |
| 44 | [Qoder](https://qoder.com/en) | 独立 IDE / CLI | 阿里云代理式 IDE；Quest / Repo Wiki（iFlow CLI 已引导迁移至此） | [定价](https://qoder.com/pricing) · 免费 BYOK / Pro $20/月起 |
| 45 | [Kode](https://github.com/shareAI-lab/Kode-CLI) | CLI | shareAI 终端 Agent；多模型 BYOK、偏长任务工作流 | [仓库](https://github.com/shareAI-lab/Kode-CLI) · 免费 BYOK |
| 46 | [Mistral Vibe](https://mistral.ai/news/vibe-agent/) | CLI / VS Code | Mistral 终端 / 扩展编码 Agent；Work + Code 模式 | [仓库](https://github.com/mistralai/mistral-vibe) · 免费档 / API |
| 47 | [Xum（原 Mux）](https://xum.coder.com/) | 桌面 / Web 编排 | Coder 并行 Agent 多路复用；隔离 workspace 同跑多 Agent | [仓库](https://github.com/coder/xum) · 开源免费 |
| 48 | [Neovate Code](https://github.com/neovateai/neovate-code) | CLI / 桌面 | 蚂蚁系开源编码 Agent；交互 / 无头、插件扩展 | [仓库](https://github.com/neovateai/neovate-code) · 免费 BYOK |
| 49 | [Pochi](https://docs.getpochi.com/) | IDE 扩展 | TabbyML IDE 内开源 Agent；多文件改动 + BYOK | [定价](https://www.tabbyml.com/pricing) · 免费额度 / 按量 |
| 50 | [Zencoder](https://zencoder.ai/) | IDE / 平台 | 团队向编码 Agent + Zenflow 多智能体编排 | [定价](https://zencoder.ai/pricing) · 免费档 / Starter 约 $19/月起 |
| 51 | [AdaL](https://adalagent.ai/) | CLI / 桌面 / Web | SylphAI 自动化优先 harness；编码 + 从代码库做 GTM | [仓库](https://github.com/SylphAI-Inc/adal-cli) · 免费档 / BYOK |
| 52 | [Hermes Agent](https://hermes-agent.nousresearch.com/) | CLI / 桌面 / 网关 | Nous 自进化 Agent；持久记忆、自动 Skills、定时任务 | [仓库](https://github.com/NousResearch/hermes-agent) · 免费 BYOK |
| 53 | [OpenClaw](https://github.com/openclaw/openclaw) | 自托管网关 / 多渠道 | 本机常驻多渠道 Agent；多模型编排（偏通用，非纯 IDE） | [生态速览]({{< relref "ai-products/awesome-openclaw" >}}) · 开源免费 |

## 怎么选（速查）

1. **闭源全家桶、少折腾**：Cursor / Devin / Copilot；要规格驱动看 Kiro；阿里云生态看 Qoder。
2. **代理式深度改库**：Claude Code；要 OpenAI 生态优先 Codex（原生登录）；已有 Grok 订阅看 Grok Build。
3. **开源 + 多模型 BYOK**：Cline / OpenCode / Kilo Code / Continue / Aider / Crush / Kode / Neovate。
4. **终端优先、可扩展底座**：Pi（成品 CLI + 可嵌入 SDK）；要 IDE 能力增强用 oh-my-pi；DeepSeek 向用 Reasonix；要子 Agent harness 用 Deep Agents。
5. **多引擎 / 多 Agent 桌面编排**：要一窗切多 CLI 用 Desktop CC GUI；要隔离 worktree 并行跑用 Orca / Xum；终端内编排可看 Warp。
6. **国内云厂商 / 企业私有化**：通义灵码、CodeBuddy、文心快码、Qoder、Tabnine、Amazon Q、IBM Bob。
7. **垂直场景**：Android → Firebender；Snowflake 数据栈 → Cortex Code；开源模型优先 → Command Code；Kimi 订阅 → Kimi Code CLI。

账号切换、CPA 路由、Skills 管理等**增强工具**不在本表展开，请到 [环境增强工具集]({{< relref "ai-programming/env-and-tools" >}})。
子智能体分工与并行写法见 [Subagents]({{< relref "agent/subagents" >}})。
