---
title: AI 编程工具汇总
weight: 1
---

### 前言

经常有佬友问什么 AI 编程好用，不同的有什么区别，价格如何等。

于是做了一下汇总，消除信息差，帮助佬友选择。

### 网页版

同时做了个网页汇总这些信息，并可以对工具进行打分：[AI 编程工具汇总对比](https://rysonai.com/)

### 更新日志

2026 年 1 月更新：

+ 对网页进行大幅优化和重构；
+ 增加 **Google Antigravity**、**Amazon Q Developer**、**OpenCode** 等 7 种工具；
+ 数据更新和格式优化。

2025 年 10 月更新：

+ 新增 百度文心快码、 CodeGPT 和 Qoder 等 8 种最新上市工具；
+ 对其它工具数据进行了更新；
+ 考虑到大多数人使用 codex 的 ide 插件，因此其类型由 cli 改为 ide 插件。

### 如果有错误或者遗漏，欢迎佬友批评指正！

有遗漏可以评论区留言哦，暂时只收录有**独立网站和报价**的 AI 工具。

---

### 1. Aider

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [39,200+（截至 2025-12-28）](https://github.com/Aider-AI/aider)
    - **用户 / 安装量**: [4,100,000+（截至 2025-12-28）](https://aider.chat/)
+ **工具描述**: Aider 是 "把 ChatGPT/Claude 带进 git 终端" 的开源项目。它会扫描并映射整个代码库，与 LLM 对话后生成补丁，再自动 git commit。与 IDE 无耦合，适合在大型仓库、容器或远程 SSH 环境中工作，也能通过 VS Code 插件获取图形界面。
+ [**定价详情**](https://aider.chat/):
    - **完全免费**: BYOK

---

### 2. Amazon Q Developer

+ **基本信息**:
    - **类型**: IDE 扩展 / CLI
    - **LLM API 支持**: 不支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [1,900+（截至 2025-12-28）](https://github.com/aws/aws-toolkit-vscode)
    - **用户 / 安装量**: [1,401,146（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode)
+ **工具描述**: Amazon Q Developer 是 AWS 面向开发者的 "代理式" 编码助手，可在 VS Code 等 IDE 中提供内联补全、Chat、Agentic coding，并支持通过 MCP 连接外部工具 / 上下文；同时也可在命令行（CLI）中使用，将 IDE 与 CLI 的交互统一计入同一套 "agentic requests" 用量体系。
+ [**定价详情**](https://aws.amazon.com/q/developer/pricing/):
    - **Free Tier**: $0；包含 IDE 插件与 CLI；每月 50 次 agentic requests；Java 升级转换能力每月 1,000 LOC / 用户
    - **Pro Tier**: $ 19 / 用户・月；包含 Free Tier 全部能力并提升各项限额；Java 升级转换能力为 4,000 LOC / 月 / 用户（按账号汇总池化），超额  $0.003/LOC；支持 Identity Center 管理与控制台、IP indemnity 等

---

### 3. Augment

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [668,057（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=augment.vscode-augment)
+ **工具描述**: Augment Code 是面向大型生产级代码库的 AI 编程平台，内置 Context Engine 可实时索引 20 万 token 级项目；在 VS Code / JetBrains / Vim 中提供补全、Chat、Agent、Next Edit 等多模态能力，强调团队协作与 SOC 2 合规安全。
+ [**定价详情**](https://www.augmentcode.com/pricing)（2025-10-20 起启用新的信用额度模式）:
    - **Trial**: 免费，注册后一次性 30,000 Credits（需绑定信用卡）
    - **Indie**: $20 / 月，含 40,000 Credits
    - **Standard**: $60 / 月，含 130,000 Credits
    - **Max**: $200 / 月，含 450,000 Credits
    - **Enterprise**: 自定义额度与价格，并提供过渡赠送 Credits

---

### 4. auto-coder

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [1,200+（截至 2025-12-28）](https://github.com/allwefantasy/auto-coder)
    - **用户 / 安装量**: N/A
+ **工具描述**: auto-coder 是面向真实工程代码库的终端式 AI 编程工具 / 框架，支持在本地工作流中组织多步任务，并将能力沉淀到可复用的命令与规则体系中。提供交互式聊天模式、命令行单次运行模式、会话模式以及 RAG 增强检索生成模式。
+ [**定价详情**](https://github.com/allwefantasy/auto-coder):
    - **完全免费**: BYOK

---

### 5. 百度文心快码 (Baidu Comate)

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 有限支持 (仅 Baidu ERNIE / 文心)
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [324,548（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=BaiduComate.comate)
+ **工具描述**: 基于文心大模型的编码助手，提供补全、对话与 "Zulu 智能体" 的端到端需求‑到‑代码生成，可在 IDE 内执行命令、预览页面并对多文件进行改写与采纳。面向个人与企业提供不同版本，并支持企业私有化。
+ [**定价详情**](https://cloud.baidu.com/product/comate):
    - **个人标准版 / 基础功能**: 免费
    - **其它版本**: 人民币计费（个人专业版 ¥59 / 月起、¥168 / 季、¥669 / 年；企业版按人数与周期计费，详见定价页）

---

### 6. Claude Code

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 有限支持 (仅 Anthropic)
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [2,507,107（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)
+ **工具描述**: Claude Code 建构在 Claude 4 系列模型之上，运行于本地终端，可对整座代码库进行索引理解，并通过自然语言指令执行 "生成 - 调试 - 重构 - 发布" 全链路任务；借助 MCP 工具协议，还能远程调用 CI/CD、Issue Tracker 等外部系统，充当真正的 "Agentic Coder"。
+ [**定价详情**](https://www.anthropic.com/pricing):
    - **Free**: $0 / 月
    - **Pro**: $ 20 / 月（年付约  $17 / 月，按 token 用量计费）
    - **Max 5×**: $100 / 月（约 Pro 5 倍用量配额）
    - **Max 20×**: $200 / 月（约 Pro 20 倍用量配额）
    - **API 按量计费**:
        * Sonnet 4.5: 输入 $ 3/MTok，输出  $15/MTok
        * Opus 4.5: 输入 $ 5/MTok，输出  $25/MTok

---

### 7. Cline

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [56,400+（截至 2025-12-28）](https://github.com/cline/cline)
    - **用户 / 安装量**: [2,806,425（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
+ **工具描述**: Cline 是一款本地运行的 "代理式" 编程助手，能先扫描整座代码库、生成执行计划，再在 IDE 与终端中自动完成多步修改、运行测试、修复报错，并通过 MCP 协议接入外部系统。其所有决策、文件变更与终端命令均需人工确认，可满足企业级安全合规需求。
+ [**定价详情**](https://github.com/cline/cline):
    - **完全免费**: BYOK

---

### 8. CodeBuddy

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 有限支持 (仅腾讯混元 / DeepSeek)
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [343,985（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=Tencent-Cloud.coding-copilot)
+ **工具描述**: 腾讯云 CodeBuddy 提供技术对话、智能补全、单元测试、代码评审等功能，并兼容 MCP 生态，覆盖 VS Code、JetBrains、Visual Studio 等主流 IDE。官方扩展页显示其可按需在腾讯混元与第三方 DeepSeek 等模型之间切换，以适配不同场景。
+ [**定价详情**](https://staging-codebuddy.tencent.com/pricing):
    - **Free**: 注册即自动开启 2 周 Pro 试用；一次性 500 credits；每日 50 credits（每日重置）
    - **Pro（个人订阅）**: $9.95 / 月，含 1,000 credits / 月，另赠 100 credits / 天（每日重置）

---

### 9. Codebuff

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [2,700+（截至 2025-12-28）](https://github.com/CodebuffAI/codebuff)
    - **用户 / 安装量**: N/A
+ **工具描述**: Codebuff 是开源终端 AI 编程助手，按自然语言指令对代码库进行理解与编辑，并通过多智能体协作（File Explorer、Planner、Editor、Reviewer 等专业 Agent）来完成更精确的变更。支持自定义 Agent 和 SDK 集成。
+ [**定价详情**](https://www.codebuff.com/pricing):
    - **起步价**: $49 / 月起

---

### 10. CodeGPT

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [2,208,564（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt)
+ **工具描述**: VS Code/JetBrains 内的多模型 AI 助手，支持对话、自动补全、基于代码图谱的全仓库理解，以及 "Agent 市场"。可直接使用各家官方 API Key（BYOK），也可订阅其 Plus/Teams 套餐。
+ [**定价详情**](https://codegpt.co/pricing):
    - **Free**: $0 / 用户・月；含 30 次聊天 / Agent 交互与 200 次补全；支持 BYOK
    - **BYOK**: $ 8 / 用户・月（ $7.2 / 用户・月，按年付）
    - **Teams**: $ 40 / 用户・月（ $30 / 用户・月，按年付）；含每用户每月最多 500 次聊天 / Agent 交互与最高 $30 代币成本额度

---

### 11. Codex

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 有限支持 (仅 OpenAI)
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [54,800+（截至 2025-12-28）](https://github.com/openai/codex)
    - **用户 / 安装量**: [50,010（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=CodexBuild.codex-build)
+ **工具描述**: OpenAI 推出的 Codex IDE 扩展把 "编码代理" 嵌入 VS Code（以及 Cursor、Windsurf 等 VS Code 分支），支持侧边栏对话、在本地读取 / 修改 / 运行代码，或把大任务委派到云端再回收结果。官方文档注明 macOS、Linux 支持稳定，Windows 处于实验阶段，建议在 WSL 下使用；该扩展 "围绕开源的 Codex CLI 构建"。
+ [**定价详情**](https://openai.com/chatgpt):
    - **完全免费**: BYOK
    - **Codex IDE 扩展 / Web 版**: $20 / 月起 (随 ChatGPT Plus / Pro / Business / Edu / Enterprise 订阅提供)

---

### 12. Continue

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [30,500+（截至 2025-12-28）](https://github.com/continuedev/continue)
    - **用户 / 安装量**: [1,906,265（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
+ **工具描述**: Continue 是一款可自定义的 AI 代码助手框架，开发者可以在其开源扩展上组合模型、规则与 Prompt Block，构建适合团队技术栈的专属 Agent。它支持行内补全、侧栏聊天、批量编辑以及 "Agent" 全仓库改动流程，对每一步生成的补丁都要求人工确认，从而兼顾效率与合规。
+ [**定价详情**](https://www.continue.dev/pricing):
    - **Solo**: $0 / 月（BYOK）
    - **Team**: $10 / 用户・月
    - **Models Add-on**: +$20 / 用户・月（一键接入 GPT-4o、Claude 4 等）
    - **Enterprise**: 定制报价（SSO、私有部署）

---

### 13. Crush

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 支持
    - **开源许可证**: FSL-1.1-MIT
    - **GitHub 星标**: [16,400+（截至 2025-12-28）](https://github.com/charmbracelet/crush)
    - **用户 / 安装量**: N/A
+ **工具描述**: Crush 是 Charmbracelet 推出的终端 AI 编程助手，强调多模型与会话管理，并通过 LSP 获取项目上下文；也可通过 MCP 扩展外部能力。支持 Anthropic、OpenAI、Groq、OpenRouter、Google Gemini、Amazon Bedrock 等多家模型提供方，跨平台支持 macOS、Linux、Windows、FreeBSD 等。
+ [**定价详情**](https://github.com/charmbracelet/crush):
    - **完全免费**: BYOK

---

### 14. Cursor

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary (VS Code fork)
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [1,000,000+（截至 2025-04，TapTwice Digital）](https://cursor.com/)
+ **工具描述**: Cursor 由 Anysphere 打造，主张 "Chat-Driven Development"。编辑器会索引整个代码库，允许用户在 Chat、Agent、Composer 等模式下生成或修改多文件补丁，并自动运行测试、提交 git。其 Bugbot 还能持续扫描 PR 及 CI 日志，提前捕获逻辑或安全缺陷。
+ [**定价详情**](https://cursor.com/pricing):
    - **免费版**: $0 / 月（有限使用量）
    - **Pro**: $20 / 月（按 credits 用量计费，具体额度以官网为准）
    - **Pro+**: $60 / 月（更高使用限额，部分地区 / 新用户可能不再提供）
    - **Ultra**: $200 / 月（最高使用限额）
    - **Teams**: $40 / 活跃用户・月（含约 500 条 / 月代理请求）
    - **Enterprise**: 定制报价（SAML/OIDC 认证、SCIM 用户管理）

---

### 15. Gemini CLI

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 有限支持 (仅 Google)
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [88,800+（截至 2025-12-28）](https://github.com/google-gemini/gemini-cli)
    - **用户 / 安装量**: N/A
+ **工具描述**: Gemini CLI 是 Google 面向开发者的 AI 终端代理，可在 shell 中理解与编辑百万 token 级代码库、生成应用、自动重构，并通过 Model Context Protocol 连接 Imagen、Veo 等外部工具；支持使用 Google 账号登录、Gemini API Key 或 Vertex AI 等多种鉴权方式，并可与 IDE 侧的 Gemini Code Assist 共用项目与配额。
+ [**定价详情**](https://ai.google.dev/gemini-api/docs/pricing):
    - **完全免费**: 个人账号登录 60 次 / 分钟、1,000 次 / 天；API Key 另有 100 次 / 天免费额度，更多用量按 Gemini/Vertex AI 计费

---

### 16. Gemini Code Assist

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 有限支持 (仅 Google)
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [2,535,898（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist)
+ **工具描述**: Gemini Code Assist 基于 Gemini 2.5，为 IDE 提供行内补全、对话式重构与 Agent 多步执行，支持 1M token 本地上下文，并能在 GitHub PR 中自动审阅代码；亦可与 Firebase、BigQuery、Cloud Run 等 Google Cloud 服务协同，通过与 Gemini CLI 共享项目和权限实现统一的开发工作流。
+ [**定价详情**](https://cloud.google.com/products/gemini/code-assist):
    - **个人版**: 免费（约 6,000 次 / 天代码请求额度与数百次聊天 / 分析请求 / 天，具体配额以官方文档为准）
    - **Standard**: $19 / 用户・月（年付折扣价）
    - **Enterprise**: $45 / 用户・月（年付折扣价，私有代码定制）

---

### 17. Google Antigravity

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: Google Antigravity 是 Google 推出的 "Agent-First" 开发平台 / IDE，提供 Mission Control/Agent Manager 来并行管理自主智能体；智能体可在编辑器、终端与受控浏览器中执行任务，并通过 Artifacts（任务清单、实现计划、截图、浏览器录屏等）把过程与结果可审计化，降低 "信任缺口"。内置 Gemini 3 Pro、Claude Sonnet 4.5、GPT-OSS 120B 等模型可供切换。
+ [**定价详情**](https://antigravityai.org/pricing):
    - **公测期**: 免费（所有功能对开发者免费开放）
    - **Developer（Google One）**: 随 Google AI Pro/Ultra 订阅提供更高限额
    - **Google AI Pro**: $19.99 / 月
    - **Google AI Ultra**: $249.99 / 月
    - **Team/Enterprise**: Coming soon

---

### 18. GitHub Copilot

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [65,373,018（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
+ **工具描述**: Copilot 嵌入 IDE 后可在光标位置生成整行或整段代码，并以 Chat / Agent 模式完成多文件重构、测试修复、PR 描述撰写等任务。MCP 让 Copilot 能触达 Issue、CI、数据库等上下文，逐步朝 "自治代码代理" 演进；新版本区分标准请求与 "高级请求"（如更大模型、Agent 模式），并提供统一的用量管理。
+ [**定价详情**](https://github.com/features/copilot/plans):
    - **Copilot Free**: 免费（每月 50 条聊天 / Agent 等高级请求 + 若干千行级代码补全配额）
    - **Copilot Pro**: $ 10 / 月（或  $100 / 年），无限制补全与更多高级请求配额
    - **Copilot Pro+**: $ 39 / 月（或  $390 / 年），显著更多的高级请求额度
    - **Business**: $19 / 用户・月
    - **Enterprise**: $39 / 用户・月
    - **超额费用**: 高级请求超额统一 $0.04 / 次

---

### 19. Graphite

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: 以 "堆叠 PR / 评审自动化" 为核心的代码评审与发布平台，配套 CLI 与 Web 界面，与 GitHub 深度集成。企业版提供 AI 评审、自动修复建议、队列合并与团队洞察等能力；并通过 Graphite Agent 与 MCP 支持，将 AI 助手嵌入到评审和合并流程中。
+ [**定价详情**](https://graphite.dev/pricing):
    - **Hobby**: 免费（面向个人与爱好项目，含 CLI、VS Code 插件与有限 AI 评审 / Agent 配额）
    - **Starter**: $20 / 用户・月（按年付）
    - **Team**: $40 / 用户・月（按年付），含 "无限 AI 评审"、Graphite Agent 等高级功能
    - **Enterprise**: 自定义价格（联系销售，提供 SAML、审计日志、GHES 支持等）

---

### 20. Junie

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: Junie 是 JetBrains 推出的 "代理式" 编码助手，可在 IntelliJ IDEA、PyCharm、WebStorm 等 IDE 内接收自然语言任务，自动分析代码库、生成修改计划、执行测试并提交补丁；也能在 GitHub Pull Request 上离 IDE 工作，实现异步协作。JetBrains 已将 Junie 与 AI Assistant 统一到 JetBrains AI 订阅下。
+ [**定价详情**](https://www.jetbrains.com/ai/):
    - **AI Free**: 随 IDE 附赠（不限本地补全，含少量云端 AI Credits；首启一般附带 30 天 AI Pro 试用）
    - **AI Pro**: $10 / 用户・月（亦可随 All Products Pack /dotUltimate 打包提供）
    - **AI Ultimate**: $30 / 用户・月（面向重度使用者，额度与价格 1:1 对应）

---

### 21. Kilo Code

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [13,500+（截至 2025-12-28）](https://github.com/kilocode/kilo)
    - **用户 / 安装量**: [587,278（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code)
+ **工具描述**: Kilo Code 由社区驱动，整合了 Cline 与 Roo 的特性，定位为 "多模式 AI 代理"。插件会索引整个代码库，支持 Architect（规划）、Coder（实现）、Debugger（调试）等模式；所有补丁、终端命令和浏览器自动化步骤都需开发者确认，以保持透明与可控，同时通过开源后端支持自托管与多模型配置。
+ [**定价详情**](https://kilocode.ai/pricing):
    - **完全免费**: BYOK / 首次充值赠送约 $20 的模型额度
    - **Teams**: $29 / 用户・月（集中管理、仪表板等高级功能）
    - **Enterprise**: $299 / 用户・月（SSO、审计日志等企业特性）

---

### 22. Kiro

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 有限支持 (仅 Anthropic)
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: Kiro 是一款 "代理式（agentic）"AI IDE，提供 Specs（规格驱动开发）、Hooks（事件触发自动化）、Steering（行为约束）与对话式编码等能力，面向 "从原型到生产" 的完整开发流程。官方文档与仓库指出其可连接 MCP 服务器，并在模型侧提供 Auto 与 Claude Sonnet 4.x 的选择，当前不支持自带模型密钥（BYOK）。
+ [**定价详情**](https://kiro.dev/pricing/):
    - **Kiro Free**: $0 / 月，含 50 credits / 月；新用户一次性赠送 500 credits（30 天有效）
    - **Kiro Pro**: $20 / 月，含 1,000 credits / 月
    - **Kiro Pro+**: $40 / 月，含 2,000 credits / 月
    - **Kiro Power**: $200 / 月，含 10,000 credits / 月
    - **按量计费**: $0.04/credit（所有套餐超额均按此价）

---

### 23. OpenCode

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 支持
    - **开源许可证**: MIT
    - **GitHub 星标**: [43,000+（截至 2025-12-28）](https://github.com/sst/opencode)
    - **用户 / 安装量**: [400,000+（月活开发者，官网披露）](https://opencode.ai/)
+ **工具描述**: OpenCode 是开源 AI coding agent，可在终端 / 桌面应用 / IDE 扩展中使用；支持连接多家模型提供方（Claude、OpenAI、Google 或本地模型），也支持登录复用 Claude Pro/Max 账号；强调隐私（不存储代码与上下文数据）。内置 build（全权限开发）与 plan（只读分析）两种代理模式。
+ [**定价详情**](https://opencode.ai/):
    - **OpenCode**: 免费（可连接任意模型 / 提供方）
    - **Zen**: 充值制（Pay as you go，页面示例 $20 起充）
    - **Enterprise**: N/A（联系官方）

---

### 24. PearAI

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [704（截至 2025-12-28）](https://github.com/trypear/pearai-master)
    - **用户 / 安装量**: N/A
+ **工具描述**: PearAI 是开源 AI 代码编辑器，主打 "开箱即用 + 可自带 Key（BYOK）"，并提供 PearAI Router/Hosted Servers 等托管能力来简化多模型接入与用量管理。基于 VS Code fork，整合 Continue fork 的 AI 聊天功能。
+ [**定价详情**](https://www.trypear.ai/pricing):
    - **免费**: 可下载使用（支持 BYOK）
    - **订阅**: $15 / 月

---

### 25. Qoder

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: 自称 "Agentic Coding Platform" 的桌面式 IDE / 平台，聚合多家模型并提供从需求到多文件改写与运行验证的代理式开发流程，面向个人与团队使用场景。官方强调以 "Credits" 计量用量。
+ [**定价详情**](https://docs.qoder.com/zh/account/pricing):
    - **Free**: 免费（含 14 天 Pro 试用；赠送 300 Credits）
    - **Pro**: $ 10 / 月（限时优惠；原价  $20 / 月），2,000 Credits / 月
    - **Pro+**: $ 30 / 月（限时优惠；原价  $60 / 月），6,000 Credits / 月
    - **Ultra**: $ 100 / 月（限时优惠；原价  $200 / 月），20,000 Credits / 月
    - **Teams**: Coming soon

---

### 26. Replit

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: 基于云端的浏览器 IDE，集成项目托管、包管理、运行 / 部署与 "Agents" 等 AI 能力，支持多人协作与一键托管。适合入门学习、黑客松与轻量后端原型搭建，也提供团队空间与配额管理。其 AI 侧以平台内置模型与 "集成" 能力为主。
+ [**定价详情**](https://replit.com/pricing):
    - **Starter**: $0 / 月（含基础功能）
    - **Core**: $ 20 / 月（按年付），含每月  $25 平台 Credits
    - **Teams**: $ 35 / 用户・月（按年付），含每用户每月  $40 平台 Credits

---

### 27. Roo Code

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Apache-2.0
    - **GitHub 星标**: [21,500+（截至 2025-12-28）](https://github.com/RooCodeInc/Roo-Code)
    - **用户 / 安装量**: [1,108,232（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline)
+ **工具描述**: Roo Code（前 Roo Cline）主张 "整支 AI 开发团队住进编辑器"。插件会索引整仓代码，生成差异补丁并在执行每一步前询问确认；借 MCP 协议可自动运行终端命令、调用浏览器或外部 API，实现从规划、编码到发布的多角色代理协作。
+ [**定价详情**](https://github.com/RooCodeInc/Roo-Code):
    - **完全免费**: BYOK

---

### 28. RovoDev

+ **基本信息**:
    - **类型**: CLI
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: N/A
+ **工具描述**: Rovo Dev 是 Atlassian "Rovo Software Agents" 套件中的编码代理。它在终端分析大型仓库、生成技术方案、自动编写与提交补丁，并与 Jira、Confluence、Bitbucket 等云服务无缝联动，为企业提供可审计、可控的端到端 AI 开发流水线。
+ [**定价详情**](https://www.atlassian.com/software/rovo):
    - **Beta 阶段**: 限量免费（封闭测试期间的 Agent 功能不计入额度）
    - **正式版**: 随 Jira/Confluence/JSM 的 Premium/Enterprise 版订阅启用

---

### 29. Sourcegraph Cody

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: [10,200（仓库已归档）](https://github.com/sourcegraph/sourcegraph-public-snapshot)
    - **用户 / 安装量**: [777,587（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai)
+ **工具描述**: 通过 VS Code/JetBrains 插件将 "Cody" 接入到现有工作流，结合代码搜索 / 索引，为聊天、补全与命令提供跨仓库上下文。企业侧可在多家 LLM 之间选择（如 Claude、Gemini、Mixtral 等）。
+ [**定价详情**](https://sourcegraph.com/pricing):
    - **Cody（企业）**: N/A（联系销售；Marketplace 明示 "非企业用户不再提供"）
    - **Code Search（相关）**: Starter $ 19 / 用户・月；Enterprise  $49 / 用户・月（与 Cody 分计费）

---

### 30. Tabnine

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 不支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [9,432,615（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
+ **工具描述**: 主打私有化与合规的 AI 补全 / 聊天，覆盖 VS Code、JetBrains、Eclipse、Visual Studio 等主流 IDE。企业可选自托管 / 专有实例，官方也提供在产品内切换多家第三方模型的能力。
+ [**定价详情**](https://www.tabnine.com/pricing):
    - **Dev**: $9 / 月（个人 / 专业开发者）
    - **Enterprise**: $39 / 用户・月（含 SSO、企业支持等）

---

### 31. 通义灵码 (Tongyi Lingma)

+ **基本信息**:
    - **类型**: IDE 扩展
    - **LLM API 支持**: 有限支持 (仅阿里云)
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [1,590,000+（截至 2025-12）](https://tongyi.aliyun.com/lingma)
+ **工具描述**: 通义灵码是阿里云推出的企业级 AI 编码助手，提供代码补全、智能问答、多文件编辑与编程智能体。企业版可接入私域知识库，并支持专属部署与 VPC 网络隔离，满足金融、电商等行业合规需求。
+ [**定价详情**](https://tongyi.aliyun.com/lingma/pricing):
    - **个人基础版**: 永久免费
    - **个人专业版**: 限时免费
    - **企业标准版**: ¥59 / 用户・月（年付 8 折，10 席起购）
    - **企业专属版**: ¥159 / 用户・月（或 $32 / 用户・月，100 席起购，私有 VPC 部署）

---

### 32. Trae

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 支持
    - **开源许可证**: Partial (CLI: MIT, IDE: Proprietary)
    - **GitHub 星标**: [10,400+（截至 2025-12-28）](https://github.com/bytedance/trae-agent)
    - **用户 / 安装量**: [1,070,000+（截至 2025-12）](https://www.trae.ai/)
+ **工具描述**: Trae 由字节跳动推出，定位为 "多角色 AI 开发团队" 集成 IDE + CLI。它可索引整座仓库，生成执行计划后批量修改文件、运行测试并提交补丁；所有步骤在界面中可审阅回滚，兼顾效率与合规。桌面版 UI 基于 VS Code fork，兼容原生扩展，同时支持 MCP（Model Context Protocol）调用终端、浏览器及外部 API；开源的 Trae Agent CLI 采用 MIT 许可证，支持 OpenAI、Anthropic、Doubao、Azure、OpenRouter、Ollama、Google Gemini 等多家 LLM 提供方。
+ [**定价详情**](https://www.trae.ai/pricing):
    - **Free**: 免费（基础模型每日限额）
    - **Pro**: $ 10 / 月（或  $90 / 年，首月 $3，AI 请求配额翻倍）
    - **Enterprise**: 定制方案（面向团队与企业部署）

---

### 33. Warp

+ **基本信息**:
    - **类型**: 终端模拟器
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [500,000+（截至 2025-12）](https://www.warp.dev/)
+ **工具描述**: Warp 2.0 将终端、代码编辑、Agent 管理和 Warp Drive（知识仓）整合至统一输入框，支持并行多 Agent 协作。GPU 渲染带来流畅 UI；MCP 让 Agent 能调用 CLI、CI/CD、云资源。所有变更以可审核 Patch 形式呈现，适合个人与团队端到端自动化开发。
+ [**定价详情**](https://www.warp.dev/pricing):
    - **Free**: 免费（150 次 / 月高级 AI 请求）
    - **Pro**: $15 / 月（年付，AI 请求额度提升）
    - **Turbo**: $40 / 月（年付，AI 配额最高）
    - **Enterprise**: 定制报价（BYO LLM 支持）

---

### 34. Windsurf

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 支持
    - **开源许可证**: Proprietary (VS Code fork)
    - **GitHub 星标**: N/A
    - **用户 / 安装量**: [3,337,398（截至 2025-12-28）](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)
+ **工具描述**: Windsurf 将终端、编辑器与多代理协作整合为一体，核心代理 Cascade 能对整仓库生成 "计划 - 执行 - 回滚" 闭环，并通过 MCP 接入终端命令、浏览器、外部 API，帮助个人或团队完成从需求到部署的全链路开发。
+ [**定价详情**](https://windsurf.com/pricing):
    - **Free**: 免费（25 条 Prompt 请求 / 月）
    - **Pro**: $15 / 月（500 条 Prompt 请求 / 月）
    - **额外包**: $10/250 条 Prompt 请求
    - **Teams/Enterprise**: 定制报价（私有部署、SSO、BYO-LLM）

---

### 35. Zed

+ **基本信息**:
    - **类型**: 独立 IDE
    - **LLM API 支持**: 支持
    - **开源许可证**: GPL-3.0
    - **GitHub 星标**: [72,200+（截至 2025-12-28）](https://github.com/zed-industries/zed)
    - **用户 / 安装量**: N/A
+ **工具描述**: Rust 编写的高性能多人协作代码编辑器，内置 AI"编辑预测"（Edit Predictions）、对话与多文件改写，并通过 Agent Client Protocol 与外部 Agent 集成。支持 macOS/Linux，Windows 版本持续推进中，其仓库中也增加了与 Gemini/Cursor 等工具协作的规则文件。
+ [**定价详情**](https://zed.dev/pro):
    - **Personal**: $0 / 永远；含每月 2,000 次接受的编辑预测，且可无限使用自带 API Key 或外部 Agent
    - **Pro**: $ 10 / 月；无限编辑预测，含  $5 代币额度，超出按量计费
    - **Enterprise**: N/A（联系销售）

