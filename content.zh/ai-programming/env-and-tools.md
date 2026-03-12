---
title:  环境配置：工具与增强
weight: 15
bookToc: false
noTocArea: true
---

## 🛠️ AI 编程环境配置与增强工具集

本合集汇整了针对 Claude Code、Codex 及 Gemini CLI 的各类增强工具，涵盖桌面客户端、路由代理及快速配置脚本。

|序号|工具名称|类型/分类|项目介绍|解读|
|---|---|---|---|---|
|1|[🔥CC Switch]({{< relref "ai-programming/cc-switch" >}})|桌面应用 · 环境配置|Claude Code / Codex / Gemini CLI 跨平台桌面辅助工具：一键切换 API 供应商配置；统一管理 MCP 服务器；Skills 扫描与 Prompts 预设；内置 API 测速；Tauri2+React+Rust|[Zread](https://zread.ai/farion1231/cc-switch) |
|2|[🔥CLIProxyAPI (CPA)]({{< relref "ai-programming/cpa" >}})|服务端网关 · 统一 API|将多种 CLI 封装为 OpenAI/Gemini/Claude/Codex 兼容 API 代理：本地/多账户 CLI 统一通过兼容客户端/SDK 调用；多账户轮询与故障转移；流式/非流式、多模态、函数调用支持|[Zread](https://zread.ai/router-for-me/CLIProxyAPI)|
|3|[🔥ZCF (Zero Config)]({{< relref "ai-programming/zcf" >}})|CLI 工具 · 环境配置|零配置一键搞定 Claude Code & Codex 环境：中英文双语配置；内置智能代理系统；个性化 AI 助手配置|[Zread](https://zread.ai/UfoMiao/zcf)|
|4|[🔥Claude Code Router](https://github.com/musistudio/claude-code-router)|服务端网关 · 路由策略|自定义请求路径与模型分发的强大路由器：将 Claude Code 请求路由到不同模型；自定义任意请求逻辑；无需 Anthropic 账号；支持 DeepSeek/Gemini/Groq 等|[Zread](https://zread.ai/musistudio/claude-code-router) |
|5|[Any Code](https://github.com/anyme123/Any-code)|桌面应用 · 编程助手|专业 AI 代码助手桌面应用，多引擎现代化 GUI 工具包：支持 Claude Code CLI / OpenAI Codex / Gemini CLI 一键切换；翻译、成本追踪、MCP 管理、Hooks、上下文压缩|[Zread](https://zread.ai/anyme123/Any-code) |
|6|[ccNexus](https://github.com/lich0821/ccNexus)|服务端网关 · 流量转发|专为 Claude Code 设计的智能端点轮换代理：多端点管理；自动故障转移与无感切换；兼容 OpenAI 与 Gemini API 格式|[Zread](https://zread.ai/lich0821/ccNexus)|
|7|[ProxyCast](https://github.com/aiclientproxy/proxycast)|桌面应用 · 创作平台|面向普通创作者的一体化 AI Agent 创作工作台：把灵感、写作、出图、改稿、沉淀放进同一个工作台，让创作从"想到"直接走到"可发布"|[Zread](https://zread.ai/aiclientproxy/proxycast)|
|8|[CCometixLine](https://github.com/Haleclipse/CCometixLine)|TUI 工具 · 状态栏|基于 Rust 的 Claude Code 状态栏与 TUI 工具：Git 信息显示；API 使用量跟踪；交互式 TUI 配置；Claude Code 补丁工具|[Zread](https://zread.ai/Haleclipse/CCometixLine)|
|9|[Antigravity Manager](https://github.com/lbjlaq/Antigravity-Manager)|桌面应用 · 账号管理|专业 Antigravity 账号管理与切换工具：管理与切换 Antigravity 账号|[Zread](https://zread.ai/lbjlaq/Antigravity-Manager)|
|10|[Aether](https://github.com/fawney19/Aether)|服务端网关 · 团队平台|一站式 AI 基础设施与多租户 API 网关：支持 Claude / OpenAI / Gemini 及其 CLI 客户端的统一接入层，集中管理与路由请求|[Zread](https://zread.ai/fawney19/Aether)|
|11|[aio-coding-hub](https://github.com/dyndynjyxa/aio-coding-hub)|桌面应用 · 本地网关|本地 AI CLI 统一网关桌面应用：让 Claude Code / Codex / Gemini CLI 请求走同一个入口，统一管理本地多种 CLI 工具，并提供可视化监控与路由配置|[Zread](https://zread.ai/dyndynjyxa/aio-coding-hub)|
|12|[AionUi](https://github.com/iOfficeAI/AionUi/tree/main)|桌面应用 · 编程助手|跨平台 AI 编程桌面工具，支持 CoWork：面向 AI 编程的跨平台桌面客户端，支持 CoWork 多人协作与多引擎集成|[Zread](https://zread.ai/iOfficeAI/AionUi)|
|13|[axonhub](https://github.com/looplj/axonhub)|服务端网关 · 企业平台|现代化 AI 网关与 RBAC 权限管理系统：提供现代 AI 流量网关功能，并支持基于 RBAC 的细粒度权限与多租户管理|[Zread](https://zread.ai/looplj/axonhub)|
|14|[ccg-gateway](https://github.com/mos1128/ccg-gateway)|桌面应用 · 本地网关|Claude Code / Codex / Gemini 三合一代理网关桌面端：为 Claude Code、Codex 和 Gemini 提供统一代理网关及命令行易用工具，实现多引擎一站式接入|[Zread](https://zread.ai/mos1128/ccg-gateway)|
|15|[ccx](https://github.com/BenedictKing/ccx)|服务端网关 · 个人轻量|面向个人使用的极简快速配置 API 网关：更适合个人的极简 API 网关，专注快速配置与轻量使用场景|[Zread](https://zread.ai/BenedictKing/ccx)|
|16|[cc-switch-cli](https://github.com/SaladDay/cc-switch-cli/tree/maind)|CLI 工具 · 环境配置|cc-switch 的命令行版本：在终端中管理和快速切换 CLI 全局配置、MCP 配置和提示词等，适配服务器与无 GUI 环境|[Zread](https://zread.ai/SaladDay/cc-switch-cli)|
|17|[claude-relay-service (crs)](https://github.com/Wei-Shaw/claude-relay-service)|服务端网关 · 中转拼车|Claude Code 镜像中转与拼车平台：为 Claude Code 提供一站式镜像中转与拼车服务，多用户共享与转发流量|[Zread](https://zread.ai/Wei-Shaw/claude-relay-service)|
|18|[gpt-load](https://github.com/tbphp/gpt-load)|服务端网关 · 多渠道代理|智能密钥轮询的多渠道 AI 代理：支持多通道 API 密钥轮询与负载均衡，自动容错与路由|[Zread](https://zread.ai/tbphp/gpt-load)|
|19|[hapi](https://github.com/tiann/hapi)|服务端 · 远程控制台|支持 Web/Telegram 的远程 AI 编程控制台：通过 Web 与 Telegram 远程控制 AI 编程会话，实现跨端远程开发与协作|[Zread](https://zread.ai/tiann/hapi)|
|20|[happy](https://github.com/slopus/happy)|客户端 · 跨平台终端|面向 Claude Code / Codex 的端到端加密 AI 编程助手：为 Claude Code 和 Codex 打造的端到端加密跨平台客户端，覆盖移动端与 Web 端|[Zread](https://zread.ai/slopus/happy)|
|21|[metapi](https://github.com/cita-777/metapi)|服务端网关 · 元聚合|多中转站聚合与智能路由网关：将 New API / One API / OneHub / DoneHub / Veloera / AnyRouter / Sub2API 等站点统一为单一入口与密钥|[Zread](https://zread.ai/cita-777/metapi)|
|22|[octopus](https://github.com/bestruirui/octopus)|服务端网关 · API 聚合|个人向 LLM API 聚合与负载均衡服务：提供统一的 API 聚合、路由与负载均衡管理能力，适合多模型多渠道接入|[Zread](https://zread.ai/bestruirui/octopus)|
|23|[quotio](https://github.com/nguyenphutrong/quotio)|桌面应用 · 配额管理|macOS 菜单栏多账号 AI 配额管理工具：在 macOS 菜单栏统一管理多个 AI 账户并实时追踪配额与使用情况|[Zread](https://zread.ai/nguyenphutrong/quotio)|
|24|[🔥Cockpit Tools](https://github.com/jlcodes99/cockpit-tools)|桌面应用 · 账号管理|通用 AI IDE 账号管理工具：支持 Antigravity/Codex/GitHub Copilot/Windsurf/Kiro 多账号切换、配额监控、自动唤醒与多开实例管理|[Zread](https://zread.ai/jlcodes99/cockpit-tools)|
|25|[AI Toolbox](https://github.com/coulsontl/ai-toolbox)|桌面应用 · 配置管理|个人 AI 工具箱：一站式管理 AI 编程助手配置，覆盖 OpenCode / Claude Code / Codex 供应商与模型配置切换；集中管理 MCP 服务器；Skills 安装管理；支持 Windows/macOS/Linux，并提供 WSL 同步与备份能力|—|
