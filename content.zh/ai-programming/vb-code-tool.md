---
title: AI 编程工具：汇总与对比
weight: 10
---

# 1 Aider

- **基本信息**:
  - **类型**: CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [43,900+（截至 2026-04-24）](https://github.com/Aider-AI/aider)
  - **用户 / 安装量**: [6,800,000+（官网披露；截至 2026-04-24）](https://aider.chat/)
- **工具描述**:  
Aider 是运行在终端中的开源 AI 结对编程工具，可在新项目或既有代码库中与 LLM 协作。它会为整个代码库生成映射，将相关上下文提供给模型，并支持文件创建 / 编辑、自动 Git 提交、静态检查 / 测试与 IDE 监听模式。Aider 可连接云端与本地模型，也支持通过网页对话复制粘贴流程使用不提供 API 的模型。
- **[定价详情](https://aider.chat/)**:
- **免费**: BYOK

# 2 Amazon Q Developer

- **基本信息**:
  - **类型**: IDE 扩展 / CLI
  - **LLM API 支持**: 不支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [6（截至 2026-04-24）](https://github.com/aws/amazon-q-vscode)
  - **用户 / 安装量**: [1,660,217（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode)
- **工具描述**:  
Amazon Q Developer 是 AWS 面向开发者的生成式 AI 编码助手，覆盖 VS Code 等 IDE 与命令行工作流。它可基于原生工具与 MCP 服务器读取文件、生成代码差异、运行命令，并提供内联补全、对话、安全分析与 Java 应用升级等能力。其模型与账号体系由 AWS 托管，公开产品形态不提供通用 BYOK 配置。
- **[定价详情](https://aws.amazon.com/q/developer/pricing/)**:
  - **免费档**: $0；每月 50 次代理请求，Java 升级 1,000 LOC / 用户・月
  - **专业版**: $19 / 用户・月；Java 升级 4,000 LOC / 用户・月，超额 $0.003/LOC

---

# 3 Amp

- **基本信息**:
  - **类型**: CLI/IDE 集成
  - **LLM API 支持**: 有限支持 (平台代管模型)
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [105,874（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=sourcegraph.amp)
- **工具描述**:  
Amp 是 Sourcegraph 推出的终端优先编码代理，也可连接 VS Code、JetBrains、Neovim、Zed 等编辑器。它使用多模型调度，并提供 smart、rush、deep 等代理模式，用于在不同复杂度与成本目标之间切换。Amp 支持线程分享、代码审查面板、子代理与工具箱等协作能力。
- **[定价详情](https://ampcode.com/manual#pricing)**:
  - **个人 / 非企业工作区**: 按实际模型和工具用量计费；最低充值 $5；模型成本零加价
  - **企业版**: 企业用量为个人 / 非企业工作区的 1.5 倍；首次 $1,000 起

---

# 4 Augment

- **基本信息**:
  - **类型**: IDE 扩展 / CLI / 独立 IDE
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [744,242（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=augment.vscode-augment)
- **工具描述**:  
Augment Code 是面向大型、复杂代码库的 AI 编程平台，核心能力包括上下文引擎、智能体、补全、对话与下一步编辑。它可通过 VS Code、JetBrains、Intent 与 CLI 使用，并支持 MCP 与原生工具集成。产品重点在于让代理理解整个代码库的结构、依赖与历史上下文，再生成可审阅的修改。
- **[定价详情](https://www.augmentcode.com/pricing)**:
  - **独立开发者版**: $20 / 月；40,000 点数
  - **标准版**: $60 / 开发者・月；130,000 点数
  - **最高档**: $200 / 开发者・月；450,000 点数
  - **加购包**: $15/24,000 点数

---

# 5 auto-coder

- **基本信息**:
  - **类型**: CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [1,200+（截至 2026-04-24）](https://github.com/allwefantasy/auto-coder)
  - **用户 / 安装量**: N/A
- **工具描述**:  
auto-coder 是面向真实工程代码库的终端式 AI 编程工具 / 框架，可通过 pip 安装并在本地项目中运行。它提供交互式聊天、命令行单次运行、会话恢复、服务器模式与 RAG 模式等工作方式。用户可通过环境变量或配置文件接入 OpenAI、Anthropic 等模型 API。
- **[定价详情](https://github.com/allwefantasy/auto-coder)**:
  - **免费**: BYOK

---

# 6 百度文心快码 (Baidu Comate)

- **基本信息**:
  - **类型**: IDE 扩展
  - **LLM API 支持**: 有限支持 (仅 Baidu ERNIE / 文心)
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [364,384（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=BaiduComate.comate)
- **工具描述**:  
百度文心快码（Baidu Comate）是百度基于文心大模型研发的 IDE 编码助手，提供代码补全、对话、代码解释、测试生成与注释生成等能力。插件侧栏包含 Zulu 智能体入口，可用自然语言完成从需求到代码的端到端生成，并支持代码库问答与开发环境启动。产品面向个人开发者与企业用户提供不同版本，并支持企业私有化方案。
- **[定价详情](https://comate.baidu.com/zh/pricing)**:
  - **个人标准版 / 基础功能**: 免费
  - **个人专业版**: ¥59 / 月、¥168 / 季、¥599 / 年
  - **企业版 / 私有化版本**: N/A；联系官方报价

---

# 7 Claude Code

- **基本信息**:
  - **类型**: CLI/IDE 扩展 / 桌面端 / Web
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [11,512,526（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)
- **工具描述**:  
Claude Code 是 Anthropic 的代理式编码工具，可读取代码库、编辑文件、运行命令，并与开发工具集成。它可在终端、VS Code、JetBrains、桌面端与浏览器中使用，支持 MCP、子代理、自定义斜杠命令、钩子、CI/CD 代码审查与 Slack 等协作入口。终端 CLI 与 VS Code 形态还支持第三方提供商接入。
- **[定价详情](https://claude.com/pricing)**:
  - **免费版**: $0 / 月；基础额度
  - **专业版**: $20 / 月（月付）或 $17 / 月（年付）；包含 Claude Code
  - **最高档**: $100 / 月起；专业版 5 倍或 20 倍用量
  - **API 按量**: Sonnet 输入 $3/MTok、输出 $15/MTok；Opus 输入 $5/MTok、输出 $25/MTok

---

# 8 Cline

- **基本信息**:
  - **类型**: IDE 扩展 / CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [60,800+（截至 2026-04-24）](https://github.com/cline/cline)
  - **用户 / 安装量**: [3,714,550（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
- **工具描述**:  
Cline 是开源的 IDE 内代理式编程助手，可在人工确认下创建 / 编辑文件、执行终端命令、使用浏览器并调用 MCP 工具。它会先读取文件结构、AST、搜索结果与相关文件，再逐步完成多文件修改、测试运行与错误修复。Cline 支持 OpenRouter、Anthropic、OpenAI、Google Gemini、AWS Bedrock、Azure、GCP Vertex、Cerebras、Groq、OpenAI-compatible API 以及 LM Studio/Ollama 本地模型。
- **[定价详情](https://github.com/cline/cline)**:
  - **免费**: BYOK
  - **企业版**: N/A

---

# 9 CodeBuddy

- **基本信息**:
  - **类型**: IDE 扩展 / CLI
  - **LLM API 支持**: 有限支持 (腾讯混元 / DeepSeek/GLM 等平台模型)
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [448,588（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=Tencent-Cloud.coding-copilot)
- **工具描述**:  
腾讯云 CodeBuddy 是腾讯云自研的 AI 编码助手，覆盖 VS Code、JetBrains IDE、Visual Studio、CloudStudio、微信开发者工具、Xcode 等开发环境。它基于腾讯混元、DeepSeek、GLM 等模型，提供 AI 技术问答、Craft 编码智能体、智能补全、单元测试、代码评审、代码修复与规则管理。CodeBuddy 兼容 MCP 开放生态，并支持团队知识库、自定义智能体、多模型接入与企业账号集成。
- **[定价详情](https://www.codebuddy.ai/docs/ide/Account/pricing)**:
  - **免费版**: 免费；250 点数 / 2 周
  - **专业版**: $9.95 / 月；1,000 点数 / 月
  - **团队版**: $40 / 人・月；1,000 点数 / 席・月，团队池化
  - **加购包**: 专业版加购 1,000 点数为 $9.95 / 月

---

# 10 Codebuff

- **基本信息**:
  - **类型**: CLI/SDK
  - **LLM API 支持**: 有限支持 (平台代管 / OpenRouter 模型)
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [4,600+（截至 2026-04-24）](https://github.com/CodebuffAI/codebuff)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Codebuff 是开源终端 AI 编程助手，可通过自然语言指令理解并编辑代码库。它采用多智能体协作方式，由文件选择、规划、编辑、审阅等专门智能体共同完成任务，并支持自定义智能体与 SDK 集成。其免费版为广告支持版本，不需要订阅、点数或额外配置。
- **[定价详情](https://www.codebuff.com/pricing)**:
  - **免费版**: 免费；广告支持
  - **按量计费**: 每月 500 点数免费；超额 $0.01 / 点数
  - **高强度套餐**: $100 / 月、$200 / 月、$500 / 月；分别约 1 倍、2.5 倍、7 倍用量

---

# 11 CodeGPT

- **基本信息**:
  - **类型**: IDE 扩展
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [2,360,347（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt)
- **工具描述**:  
CodeGPT 是面向 VS Code 与 JetBrains 的多模型 AI 编程助手，提供对话、自动补全、智能体模式与智能差异。它可连接 OpenAI、Anthropic、Google、Mistral、Groq、DeepSeek、Azure、Bedrock 等 20+ 提供方，也支持 Ollama、LM Studio 等本地模型。智能体可在项目中创建、编辑和读取文件，并在应用更改前通过差异视图让开发者审阅。
- **[定价详情](https://www.codegpt.co/pricing)**:
  - **免费**: BYOK；$0 / 月
  - **自动补全加购包**: $8 / 席・月（月付）或 $6.67 / 席・月（年付）
  - **AI 优先服务**: N/A

---

# 12 Codex

- **基本信息**:
  - **类型**: CLI/IDE 扩展 / 桌面端 / 托管平台
  - **LLM API 支持**: 有限支持 (仅 OpenAI)
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [77,400+（截至 2026-04-24）](https://github.com/openai/codex)
  - **用户 / 安装量**: [7,659,326（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt)
- **工具描述**:  
Codex 是 OpenAI 的编码代理，覆盖本地 CLI、VS Code / 兼容编辑器扩展、桌面端与云端任务。CLI 可在本机终端读取、修改和运行仓库代码；IDE 扩展可在编辑器中对话、编辑、预览更改，并把长任务委托到 Codex Cloud。它可使用 ChatGPT 账号额度，也可在 CLI、SDK 或 IDE 扩展场景下使用 OpenAI API Key 按 API 用量计费。
- **[定价详情](https://developers.openai.com/codex/pricing)**:
  - **免费版**: $0 / 月；基础使用额度
  - **Go**: $8 / 月
  - **Plus 版**: $20 / 月；包含 Web、CLI、IDE 扩展与 iOS Codex
  - **专业版**: $100 / 月起；更高 Codex 使用限额

---

# 13 Continue

- **基本信息**:
  - **类型**: IDE 扩展 / CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [32,800+（截至 2026-04-24）](https://github.com/continuedev/continue)
  - **用户 / 安装量**: [2,731,063（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
- **工具描述**:  
Continue 是开源 AI 编码代理，提供 VS Code 扩展与 Continue CLI。IDE 侧包含智能体、对话、编辑与自动补全；CLI 侧可把 Markdown 编写的智能体作为 GitHub PR 状态检查运行，并在检查失败时给出建议差异。它适合把团队编码规范、安全检查和自动修复流程纳入版本库管理。
- **[定价详情](https://www.continue.dev/pricing)**:
  - **入门版**: 输入 $3/MTok，输出 $3/MTok；按量计费
  - **团队版**: $20 / 席・月；含 $10 点数 / 席
  - **公司版**: N/A

---

# 14 Crush

- **基本信息**:
  - **类型**: CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: FSL-1.1-MIT
  - **GitHub 星标**: [23,400+（截至 2026-04-24）](https://github.com/charmbracelet/crush)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Crush 是 Charmbracelet 推出的终端 AI 编程助手，强调在终端中连接开发者已有工具、代码与工作流。它支持多模型会话，可通过 OpenAI-compatible 或 Anthropic-compatible API 接入自有模型，并能在会话中切换模型。Crush 还结合 LSP 获取项目上下文，通过 MCP 扩展外部能力，支持 macOS、Linux、Windows、Android、FreeBSD、OpenBSD 与 NetBSD。
- **[定价详情](https://github.com/charmbracelet/crush)**:
  - **免费**: BYOK

---

# 15 Cursor

- **基本信息**:
  - **类型**: 独立 IDE/CLI/ 托管平台
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary (VS Code fork)
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Cursor 是 Anysphere 打造的 VS Code 分支独立 IDE，围绕智能体、Tab 补全、对话、云端代理与 CLI 组织开发流程。它可索引代码库、执行多文件编辑、运行命令与测试，并支持 MCP、技能、钩子、共享规则与团队级用量管理。Bugbot 可对 PR 进行代码审查，面向团队提供分析报表、隐私模式、RBAC 与 SAML/OIDC SSO。
- **[定价详情](https://cursor.com/pricing)**:
  - **爱好者版**: $0 / 月；有限代理请求与 Tab 补全次数
  - **专业版**: $20 / 月；扩展代理限额
  - **专业增强版**: $60 / 月；更高模型用量
  - **旗舰版**: $200 / 月；最高个人模型用量

---

# 16 Factory Droid

- **基本信息**:
  - **类型**: CLI / 桌面端 / Web
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Factory Droid 是 Factory.ai 的软件开发代理，覆盖 Desktop、Web 与 CLI，并支持云端和本地后台代理。它可执行重构、测试、代码审查、自动化 QA、仓库分析与任务编排等软件工程工作流。CLI 支持 BYOK，可接入自有 OpenAI/Anthropic API Key、开源模型提供方或本地模型；自定义模型仅在 CLI 中可用。
- **[定价详情](https://docs.factory.ai/pricing)**:
  - **专业版**: $20 / 月；最多 2 名团队成员，额外席位 $5 / 席
  - **最高档**: $200 / 月；约专业版 10 倍用量，最多 5 席，额外席位 $5 / 席
  - **企业版**: N/A

---

# 17 Gemini CLI

- **基本信息**:
  - **类型**: CLI
  - **LLM API 支持**: 有限支持 (仅 Google)
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [102,000+（截至 2026-04-24）](https://github.com/google-gemini/gemini-cli)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Gemini CLI 是 Google 开源的终端 AI 代理，把 Gemini 直接带入命令行。它提供 Gemini 3 模型、1M 词元上下文、Google Search 增强、文件操作、终端命令、网页抓取与 MCP 扩展，并可用于代码理解、应用生成、调试、重构和自动化脚本。用户可通过 Google 账号、Gemini API 密钥、Vertex AI 或 Google Workspace/Code Assist 相关订阅鉴权。
- **[定价详情](https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/quota-and-pricing.md)**:
  - **Google 账号 / Gemini Code Assist 个人版**: 免费；1,000 次模型请求 / 用户・天
  - **Gemini API Key 免费层**: 免费；250 次模型请求 / 用户・天，仅 Flash 模型
  - **Google AI Pro**: $19.99 / 月；1,500 次模型请求 / 用户・天
  - **Google AI Ultra**: $249.99 / 月；2,000 次模型请求 / 用户・天

---

# 18 Gemini Code Assist

- **基本信息**:
  - **类型**: IDE 扩展
  - **LLM API 支持**: 有限支持 (仅 Google)
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [3,894,105（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist)
- **工具描述**:  
Gemini Code Assist 是 Google 面向 IDE 与 Google Cloud 工作流的 Gemini 编程助手。它支持代码补全、代码生成、聊天、调试、单元测试生成、源引用、GitHub 自动代码审查，以及 Firebase、Android Studio、IntelliJ、BigQuery、Apigee 等环境中的开发辅助。企业方案提供标准版与企业版，并将 Gemini CLI、智能体模式、本地代码库感知和 Google Cloud 相关功能纳入统一配额与管理。
- **[定价详情](https://codeassist.google/products/business)**:
  - **个人版**: 免费
  - **标准版**: $22.80 / 用户・月（月付）或 $19 / 用户・月（年付）
  - **企业版**: $54 / 用户・月（月付）或 $45 / 用户・月（年付）
  - **Google 开发者计划高级版**: $299 / 年

---

# 19 GitHub Copilot

- **基本信息**:
  - **类型**: IDE 扩展 / CLI / 托管平台
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [73,120,761（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- **工具描述**:  
GitHub Copilot 是 GitHub 的 AI 编程助手，覆盖 VS Code、Visual Studio、JetBrains、Eclipse、Xcode、[GitHub.com](http://GitHub.com)、GitHub Mobile 与 CLI。IDE 中包含内联建议、下一步编辑建议、对话、编辑与智能体模式，可进行多文件修改、自动处理编译 /lint/ 测试反馈并迭代完成任务。Copilot 还支持 MCP、自定义指令、云端代理、代码审查、第三方编程代理（专业增强版公开预览）与多模型选择。
- **[定价详情](https://github.com/features/copilot/plans)**:
  - **Copilot 免费版**: $0 / 月；50 次高级请求 / 月，2,000 次补全 / 月
  - **Copilot 专业版**: $10 / 月；300 次高级请求 / 月，无限补全
  - **Copilot 专业增强版**: $39 / 月；1,500 次高级请求 / 月
  - **商业版 / 企业版**: $19 / 席・月 或 $39 / 席・月；300 或 1,000 次高级请求 / 用户・月

---

# 20 Google Antigravity

- **基本信息**:
  - **类型**: 独立 IDE / 桌面端
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Google Antigravity 是 Google 的智能体开发平台，提供编辑器视图与管理界面来并行管理自主智能体。智能体可在编辑器、终端与浏览器中规划、执行和验证任务，并通过任务清单、实现计划、截图、浏览器录屏等产物让过程可审阅。平台内置模型访问包括 Gemini 3.1 Pro、Gemini 3 Flash、Claude Sonnet/Opus 4.6 与 gpt-oss-120b 等，但未披露 BYOK 或自定义 LLM API 接入能力。
- **[定价详情](https://antigravity.google/pricing)**:
  - **个人版**: $0 / 月；个人功能额度
  - **Google AI Pro**: $19.99 / 月；更高智能体模型速率限制
  - **Google AI Ultra**: $249.99 / 月；最高智能体模型速率限制
  - **组织方案**: N/A

---

# 21 goose

- **基本信息**:
  - **类型**: CLI / 桌面端 / API
  - **LLM API 支持**: 支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [43,100+（截至 2026-04-24）](https://github.com/aaif-goose/goose)
  - **用户 / 安装量**: N/A
- **工具描述**:  
goose 是 AAIF/Linux Foundation 体系下的开源本地 AI 代理，提供桌面端、CLI 和 API，可用于代码、研究、自动化和数据分析等工作流。它支持 15+ 模型提供商、API 密钥、现有 Claude/ChatGPT/Gemini 订阅和 MCP 扩展，并可通过 ACP 连接其它代理客户端。
- **[定价详情](https://goose-docs.ai/)**:
  - **免费**: BYOK

---

# 22 Graphite

- **基本信息**:
  - **类型**: 托管平台 / CLI/IDE 扩展
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [52,530（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=Graphite.gti-vscode)
- **工具描述**:  
Graphite 是以堆叠 PR、评审自动化和合并队列为核心的 AI 代码评审平台，配套 Web、CLI 与 VS Code 扩展。它与 GitHub 深度集成，提供 Graphite 对话、AI 评审、建议修复、CI 摘要、团队洞察和企业治理能力。
- **[定价详情](https://graphite.com/pricing)**:
  - **爱好者版**: 免费；有限 Graphite 对话与 AI 评审
  - **入门版**: $20 / 用户・月（年付）
  - **团队版**: $40 / 用户・月（年付）；无限 Graphite 对话与 AI 评审
  - **企业版**: N/A

---

# 23 Jules

- **基本信息**:
  - **类型**: 托管平台 / CLI/API
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Jules 是 Google 的异步云端编码代理，可选择 GitHub 仓库和分支并提交任务提示词。代理会在云端环境中克隆仓库、制定计划、生成差异，并可创建 PR；官方同时提供 Jules Tools CLI 与 REST API，便于从终端或自动化流程调用。
- **[定价详情](https://jules.google/docs/usage-limits/)**:
  - **Jules 免费版**: 免费；15 个任务 / 天，3 个并发任务
  - **Pro 版内含 Jules**: 随 Google AI Pro（$19.99 / 月）；100 个任务 / 天，15 个并发任务
  - **Ultra 版内含 Jules**: 随 Google AI Ultra（$249.99 / 月）；300 个任务 / 天，60 个并发任务

---

# 24 Junie

- **基本信息**:
  - **类型**: CLI/IDE 集成 / CI/CD 集成
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: [183（截至 2026-04-24）](https://github.com/JetBrains/junie)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Junie 是 JetBrains 的模型无关编码代理，可在终端、JetBrains IDE、GitLab CI/CD、GitHub Action、Air 与 Zed 等环境中运行。它支持自然语言任务、规划、子代理、技能、MCP、人类确认控制和 BYOK，可用 OpenAI、Anthropic、Gemini、xAI、OpenRouter 等模型密钥。
- **[定价详情](https://junie.jetbrains.com/)**:
  - **免费**: BYOK
  - **AI 专业版**: $10 / 用户・月；10 个 AI 点数 / 30 天
  - **AI 旗舰版**: $30 / 用户・月；35 个 AI 点数 / 30 天
  - **AI 企业版**: $60 / 用户・月；官方标注即将推出

---

# 25 Kilo Code

- **基本信息**:
  - **类型**: IDE 扩展 / CLI / 云端代理
  - **LLM API 支持**: 支持
  - **开源许可证**: MIT
  - **GitHub 星标**: [18,500+（截至 2026-04-24）](https://github.com/Kilo-Org/kilocode)
  - **用户 / 安装量**: [1,013,612（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code)
- **工具描述**:  
Kilo Code 是面向 VS Code、JetBrains 与 CLI 的开源代理式编码助手，提供代码生成、补全、终端命令、浏览器自动化、重构和多模式工作流。它支持 500+ 模型、Kilo Gateway、BYOK、共享团队密钥、云端代理和代码评审，补丁与命令执行可由开发者确认。
- **[定价详情](https://kilo.ai/pricing)**:
  - **免费**: BYOK
  - **Kilo Pass 入门版**: $19 / 月；最高 $26.60 / 月点数
  - **Kilo Pass 专业版**: $49 / 月；最高 $68.60 / 月点数
  - **Kilo Pass 专家版**: $199 / 月；最高 $278.60 / 月点数

---

# 26 Kiro

- **基本信息**:
  - **类型**: 独立 IDE/CLI
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Kiro 是一款代理式 AI IDE 与 CLI，围绕规格驱动开发、引导规则、智能体钩子、Powers 与多模态对话组织从原型到生产的开发流程。其模型侧默认使用自动路由，也可选择官方托管的 Claude、MiniMax、GLM、DeepSeek 等模型；当前未披露可自带第三方模型 API 密钥的通用 BYOK 能力。
- **[定价详情](https://kiro.dev/pricing/)**:
  - **Kiro 免费版**: $0 / 月；50 点数 / 月，新用户可获 500 赠送点数（30 天）
  - **Kiro 专业版**: $20 / 月；1,000 点数 / 月
  - **Kiro 专业增强版**: $40 / 月；2,000 点数 / 月
  - **Kiro 高能版**: $200 / 月；10,000 点数 / 月

---

# 27 OpenCode

- **基本信息**:
  - **类型**: CLI / 桌面端 / IDE 扩展
  - **LLM API 支持**: 支持
  - **开源许可证**: MIT
  - **GitHub 星标**: [148,000+（截至 2026-04-24）](https://github.com/anomalyco/opencode)
  - **用户 / 安装量**: [6,500,000+（月活开发者，官网披露；截至 2026-04-24）](https://opencode.ai/)
- **工具描述**:  
OpenCode 是开源 AI 编码代理，可在终端、桌面应用与 IDE 扩展中使用，并通过客户端 / 服务器架构支持多种前端。它不绑定单一模型提供商，可使用内置免费模型、OpenCode Zen/Go、Claude、OpenAI、Google 或本地模型，并内置构建、规划与通用等代理模式。
- **[定价详情](https://opencode.ai/)**:
  - **免费**: BYOK
  - **OpenCode Go**: $5 首月，之后 $10 / 月
  - **OpenCode Zen**: $20 余额起充；按请求计费，零加价
  - **企业版**: N/A

---

# 28 OpenHands

- **基本信息**:
  - **类型**: 托管平台 / CLI/SDK
  - **LLM API 支持**: 支持
  - **开源许可证**: Partial (MIT; enterprise/ source-available)
  - **GitHub 星标**: [72,000+（截至 2026-04-24）](https://github.com/OpenHands/OpenHands)
  - **用户 / 安装量**: N/A
- **工具描述**:  
OpenHands 是模型无关的端到端工程代理平台，提供 SDK、CLI、本地 GUI、云端 SaaS 与企业自托管 / VPC 方案。它支持本地或云端运行代理、Git 集成、沙箱执行、API 自动化，以及 Slack/Jira/Linear 等企业协作能力；核心代码 MIT，enterprise/ 目录为 source-available。
- **[定价详情](https://openhands.dev/pricing)**:
  - **开源版**: 免费；本地运行
  - **个人云端版**: 免费；BYOK 或按成本使用 OpenHands 模型提供商
  - **企业版**: N/A

---

# 29 Qoder

- **基本信息**:
  - **类型**: 独立 IDE/IDE 扩展 / CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Qoder 是面向真实软件开发的代理式编码平台，包含独立 IDE、JetBrains 插件和 CLI。它通过上下文工程、仓库 Wiki、任务模式、智能体对话、下一步编辑建议和自动化 PR/Issue 工作流来理解代码库并执行多文件任务；支持自带 API Key 接入自定义模型，方便按自己的模型与预算使用。
- **[定价详情](https://docs.qoder.com/account/pricing)**:
  - **免费版**: 免费；300 点数，含 2 周专业版试用
  - **专业版**: $10 / 月（常规 $20 / 月）；2,000 点数 / 月
  - **专业增强版**: $30 / 月（常规 $60 / 月）；6,000 点数 / 月
  - **旗舰版**: $100 / 月（常规 $200 / 月）；20,000 点数 / 月

---

# 30 Qwen Code

- **基本信息**:
  - **类型**: CLI/IDE 集成 / SDK
  - **LLM API 支持**: 支持
  - **开源许可证**: Apache-2.0
  - **GitHub 星标**: [23,800+（截至 2026-04-24）](https://github.com/QwenLM/qwen-code)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Qwen Code 是 QwenLM 的开源终端 AI 编程代理，面向命令行开发者，支持大型代码库理解、自动化任务、技能 / 子智能体、多协议模型提供方和 IDE 集成。官方仓库说明 2026-04-15 起 Qwen OAuth 免费层已停止，需切换阿里云 Coding Plan、OpenRouter、Fireworks AI 或自带 API 密钥。
- **[定价详情](https://www.alibabacloud.com/help/en/model-studio/coding-plan)**:
  - **免费**: BYOK
  - **阿里云 Coding Plan 专业版**: $50 / 月；6,000 次请求 / 5 小时、45,000 次请求 / 周、90,000 次请求 / 月
  - **精简版**: 不再接受新订阅
  - **其它模型 / API**: 按对应提供商计费

---

# 31 Replit

- **基本信息**:
  - **类型**: 托管平台 / 独立 IDE
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [50,000,000+（官方博客披露；截至 2026-04-24）](https://blog.replit.com/google-cloud-partner-award-winner)
- **工具描述**:  
Replit 是基于云端的浏览器 IDE 与 AI 应用构建平台，集成项目托管、运行环境、数据库、部署、团队协作与 Replit 智能体。第 4 代智能体可通过自然语言生成应用、网站、幻灯片、移动端原型与动画，并配合设计画布、可视化编辑器、连接器、规划模式与多智能体并行工作，帮助个人、团队和企业完成从需求到上线的全流程开发。
- **[定价详情](https://replit.com/pricing)**:
  - **入门版**: $0 / 月；含每日智能体点数，可发布 1 个应用
  - **Replit Core 版**: $20 / 月（年付）或 $25 / 月（月付）；含 $25 / 月平台点数
  - **Replit 专业版**: $95 / 月（年付）或 $100 / 月（月付）；含 $100 / 月点数
  - **企业版**: N/A

---

# 32 RovoDev

- **基本信息**:
  - **类型**: CLI/IDE 扩展 / 托管平台
  - **LLM API 支持**: 不支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: N/A
- **工具描述**:  
Rovo Dev 是 Atlassian 面向软件团队的代理式 AI 编码工具，基于团队协作图谱与前沿模型，把 Jira、Bitbucket、GitHub、VS Code 和命令行中的工程上下文连接起来。它可用于代码规划、代码生成、PR / 代码评审、构建部署与重复研发任务自动化，也支持自定义子代理、MCP 与图片 / PDF 等多模态输入。
- **[定价详情](https://www.atlassian.com/software/rovo-dev/pricing)**:
  - **Rovo Dev 标准版**: $20 / 开发者・月；2,000 Rovo Dev 点数 / 开发者・月
  - **额外用量**: $0.01 / 点数
  - **试用 / 免费额度**: 30 天免费试用；部分站点可获 350 点数 / 用户・月

---

# 33 Superset

- **基本信息**:
  - **类型**: 独立 IDE / 桌面端
  - **LLM API 支持**: 支持
  - **开源许可证**: Elastic-2.0
  - **GitHub 星标**: [10,000+（截至 2026-04-24）](https://github.com/superset-sh/superset)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Superset 是面向 AI 代理时代的桌面代码编辑器，用于在本机编排 Claude Code、OpenCode、Codex、Gemini CLI、Cursor 代理等 CLI 编程代理。它通过 Git 工作树为每个任务隔离工作区，支持同时运行 100+ 个代理、查看差异、审阅结果，并可一键转交到 VS Code、Cursor、Xcode 或 JetBrains 等外部 IDE；模型和代理密钥通常由外部代理或用户自备。
- **[定价详情](https://superset.sh/pricing)**:
  - **免费版**: $0 / 月；本地工作区与基础代理编排
  - **专业版**: $15 / 用户・月（年付）或 $20 / 用户・月（月付）
  - **企业版**: N/A
  - **额外费用**: 外部 CLI 代理、模型 API 或订阅另计

---

# 34 Tabnine

- **基本信息**:
  - **类型**: IDE 扩展 / CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [9,538,831（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- **工具描述**:  
Tabnine 是主打企业隐私、部署灵活性与治理能力的 AI 编码平台，覆盖 VS Code、JetBrains、Eclipse、Visual Studio 等主流 IDE；VS Marketplace 安装量沿用其旧版 VS Code 扩展口径。代码助手提供补全、聊天与上下文感知问答，可使用 Anthropic、OpenAI、Google、Meta、Mistral 等模型，也可连接企业自有 LLM 端点；智能体平台进一步提供 CLI、MCP、自治智能体工作流与企业上下文引擎，支持 SaaS、VPC、本地部署与隔离网络等部署形态。
- **[定价详情](https://www.tabnine.com/pricing/)**:
  - **代码助手**: $39 / 用户・月（年付）
  - **智能体平台**: $59 / 用户・月（年付）
  - **托管模型用量**: 模型供应商价格 + 5% 手续费

---

# 35 通义灵码 (Tongyi Lingma)

- **基本信息**:
  - **类型**: 独立 IDE/IDE 扩展
  - **LLM API 支持**: 有限支持 (仅阿里云 / 通义)
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [2,418,952（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=Alibaba-Cloud.tongyi-lingma)
- **工具描述**:  
通义灵码是阿里云推出的智能编码助手，提供 Lingma IDE 以及 VS Code、Visual Studio、JetBrains IDEs 插件形态，支持代码补全、智能问答、多文件修改、编程智能体、MCP 工具使用与终端命令执行。企业版提供私域知识增强、企业知识库问答、审计日志、统计报表、自定义扩展管理、专用推理服务，以及专属 VPC、IP 白名单和专有网络访问等能力。
- **[定价详情](https://lingma.aliyun.com/pricing)**:
  - **个人基础版**: 免费
  - **个人专业版**: 限时免费；原价 ¥59 / 月
  - **企业标准版**: ¥79 / 人 / 月；10 人起购
  - **企业专属版**: ¥159 / 人 / 月；100 人起购

---

# 36 Trae

- **基本信息**:
  - **类型**: 独立 IDE/CLI
  - **LLM API 支持**: 支持
  - **开源许可证**: Partial (CLI: MIT, IDE: Proprietary)
  - **GitHub 星标**: [11,400+（截至 2026-04-24）](https://github.com/bytedance/trae-agent)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Trae 是字节跳动推出的 AI 开发环境，包含桌面 IDE 与开源 Trae Agent CLI。IDE 支持 SOLO/Builder 等代理式开发工作流、仓库上下文理解、多文件编辑、终端命令、测试执行与 MCP；开源 CLI 面向通用软件工程任务，也支持自带 API Key 接入 OpenAI、Anthropic、Doubao、Azure、OpenRouter、Ollama、Google Gemini 等多家 LLM 提供方，适合将代理式编码流程接入终端与自动化脚本。
- **[定价详情](https://www.trae.ai/pricing)**:
  - **免费版**: $0 / 月
  - **轻量版**: $3 / 月
  - **专业版**: $10 / 月；新用户可 7 天免费试用
  - **专业增强版 / 旗舰版**: $30 / 月 或 $100 / 月

---

# 37 Warp

- **基本信息**:
  - **类型**: 终端模拟器 / 智能体开发环境
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [700,000+（官网披露；截至 2026-04-24）](https://www.warp.dev/)
- **工具描述**:  
Warp 已从现代终端扩展为智能体开发环境，把终端、代码编辑、云端代理编排、Warp Drive 知识库与团队协作整合在一起。它支持 Warp 代理、Claude Code、Codex、Gemini CLI、OpenCode 等代理 / CLI 工具，能够集中运行多个代理、跟踪变更并介入审阅；构建版与商业版支持 BYOK，可连接 OpenAI、Anthropic 和 Google 模型。
- **[定价详情](https://www.warp.dev/pricing)**:
  - **免费版**: $0 / 月；有限 AI 点数、模型访问、云代理与代码库索引
  - **构建版**: $18 / 月（年付）或 $20 / 月（月付）；1,500 点数 / 月
  - **最高档**: $180 / 月（年付）或 $200 / 月（月付）；12 倍点数 / 月
  - **商业版**: $45 / 用户・月（年付）或 $50 / 用户・月（月付）

---

# 38 Windsurf

- **基本信息**:
  - **类型**: 独立 IDE/IDE 扩展
  - **LLM API 支持**: 支持
  - **开源许可证**: Proprietary (VS Code fork)
  - **GitHub 星标**: N/A
  - **用户 / 安装量**: [3,671,782（截至 2026-04-24）](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)
- **工具描述**:  
Windsurf 是 Cognition 旗下的 AI 原生开发环境，提供独立 Windsurf 编辑器与 VS Code 插件。核心能力包括 Cascade 代理、Tab 补全、快速上下文、浏览器预览、部署、Devin Cloud 后台开发会话，以及 SWE-1.6/SWE-1.5 等面向软件工程的模型；个人用户可对部分模型使用 BYOK，团队与企业方案提供集中计费、管理后台、知识库、SSO、RBAC、混合部署与客户管理能力。
- **[定价详情](https://windsurf.com/pricing)**:
  - **免费版**: $0 / 月；轻量使用额度
  - **专业版**: $20 / 月；标准使用额度
  - **最高档**: $200 / 月；重度使用额度
  - **团队版**: $40 / 用户・月；标准使用额度

---

# 39 Zed

- **基本信息**:
  - **类型**: 独立 IDE
  - **LLM API 支持**: 支持
  - **开源许可证**: GPL-3.0-only OR AGPL-3.0-only OR Apache-2.0
  - **GitHub 星标**: [79,700+（截至 2026-04-24）](https://github.com/zed-industries/zed)
  - **用户 / 安装量**: N/A
- **工具描述**:  
Zed 是用 Rust 编写的高性能多人协作代码编辑器，主打低延迟编辑、实时协作与每周发布。AI 能力包括编辑预测、智能体面板、对话、多文件改写、代理客户端协议与外部代理集成；用户可使用 Zed 托管模型，也可自备 API 密钥，支持 Amazon Bedrock、Anthropic、GitHub Copilot、Deepseek、Google AI、LM Studio、Mistral、Ollama、OpenAI、OpenRouter、Vercel 等模型提供方。
- **[定价详情](https://zed.dev/pricing)**:
  - **个人版**: $0 / 永久；每月 2,000 次已接受编辑预测
  - **专业版**: $10 / 月；无限编辑预测，含 $5 词元额度
  - **专业版试用**: 14 天；含 $20 词元额度
  - **企业版**: N/A

---

> 以上是 30+ 个 AI 编程工具的对比汇总，涵盖了从 IDE 插件到独立平台、从开源到商业、从单模型到多模型支持的丰富生态。每款工具都有其独特的定位与优势，开发者可以根据自己的需求、技术栈和预算选择最合适的 AI 助手来提升生产力。[在线AI编程工具汇总对比](https://rysonai.com/)。数据来源感谢作者@RyanVan

> BYOK 是 **Bring Your Own Key** 的缩写，意思是“自带密钥”。在 AI 编程工具里，通常表示你可以使用自己申请的模型 API Key 来接入工具，而不是只依赖工具官方提供的账号、额度或内置模型。这样更适合已经有 OpenAI、Anthropic、Google 等平台账号的用户，也方便按自己的预算和模型选择来使用。

