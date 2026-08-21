---
aliases:
  - /ai-programming/env-and-tools/
title:  环境配置：工具与增强
weight: 20
bookToc: false
noTocArea: true
bookHidden: false
---

## 🛠️ AI 编程环境配置与增强工具集

本合集汇整了针对 Claude Code、Codex 及 Gemini CLI 的各类增强工具，涵盖桌面客户端、路由代理、终端增强及快速配置脚本。

|序号|工具名称|star 数|类型/分类|项目介绍|解读|
|---|---|---|---|---|---|
|1|[🔥CC Switch]({{< relref "setup/cc-switch" >}})|109.8k|桌面应用 · 环境配置|Claude Code / Codex / Gemini CLI 跨平台桌面辅助工具：一键切换 API 供应商配置；统一管理 MCP 服务器；Skills 扫描与 Prompts 预设；内置 API 测速；Tauri2+React+Rust|[Zread](https://zread.ai/farion1231/cc-switch) |
|2|[🔥CLIProxyAPI (CPA)]({{< relref "setup/cpa" >}})|38.6k|服务端网关 · 统一 API|将多种 CLI 封装为 OpenAI/Gemini/Claude/Codex 兼容 API 代理：本地/多账户 CLI 统一通过兼容客户端/SDK 调用；多账户轮询与故障转移；流式/非流式、多模态、函数调用支持|[Zread](https://zread.ai/router-for-me/CLIProxyAPI)|
|3|[🔥ZCF (Zero Config)]({{< relref "setup/zcf" >}})|6.1k|CLI 工具 · 环境配置|零配置一键搞定 Claude Code & Codex 环境：中英文双语配置；内置智能代理系统；个性化 AI 助手配置|[Zread](https://zread.ai/UfoMiao/zcf)|
|4|[🔥Claude Code Router](https://github.com/musistudio/claude-code-router)|35.4k|服务端网关 · 路由策略|自定义请求路径与模型分发的强大路由器：将 Claude Code 请求路由到不同模型；自定义任意请求逻辑；无需 Anthropic 账号；支持 DeepSeek/Gemini/Groq 等|[Zread](https://zread.ai/musistudio/claude-code-router) |
|5|[Warp](https://github.com/warpdotdev/warp)|62.5k|终端工具 · AI 原生终端|现代化 AI 原生终端：提供命令补全、命令块、工作流自动化、团队协作与内置 AI 辅助，适合提升日常开发与 AI 编程终端体验|[Zread](https://zread.ai/warpdotdev/warp)|
|5|[Any Code](https://github.com/anyme123/Any-code)|1.3k|桌面应用 · 编程助手|专业 AI 代码助手桌面应用，多引擎现代化 GUI 工具包：支持 Claude Code CLI / OpenAI Codex / Gemini CLI 一键切换；翻译、成本追踪、MCP 管理、Hooks、上下文压缩|[Zread](https://zread.ai/anyme123/Any-code) |
|6|[ccNexus](https://github.com/lich0821/ccNexus)|967|服务端网关 · 流量转发|专为 Claude Code 设计的智能端点轮换代理：多端点管理；自动故障转移与无感切换；兼容 OpenAI 与 Gemini API 格式|[Zread](https://zread.ai/lich0821/ccNexus)|
|7|[ProxyCast](https://github.com/aiclientproxy/proxycast)|1.5k|桌面应用 · 创作平台|面向普通创作者的一体化 AI Agent 创作工作台：把灵感、写作、出图、改稿、沉淀放进同一个工作台，让创作从"想到"直接走到"可发布"|[Zread](https://zread.ai/aiclientproxy/proxycast)|
|8|[CCometixLine](https://github.com/Haleclipse/CCometixLine)|3.3k|TUI 工具 · 状态栏|基于 Rust 的 Claude Code 状态栏与 TUI 工具：Git 信息显示；API 使用量跟踪；交互式 TUI 配置；Claude Code 补丁工具|[Zread](https://zread.ai/Haleclipse/CCometixLine)|
|9|[Antigravity Manager](https://github.com/lbjlaq/Antigravity-Manager)|29.9k|桌面应用 · 账号管理|专业 Antigravity 账号管理与切换工具：管理与切换 Antigravity 账号|[Zread](https://zread.ai/lbjlaq/Antigravity-Manager)|
|10|[Aether](https://github.com/fawney19/Aether)|1.3k|服务端网关 · 团队平台|一站式 AI 基础设施与多租户 API 网关：支持 Claude / OpenAI / Gemini 及其 CLI 客户端的统一接入层，集中管理与路由请求|[Zread](https://zread.ai/fawney19/Aether)|
|11|[aio-coding-hub](https://github.com/dyndynjyxa/aio-coding-hub)|593|桌面应用 · 本地网关|本地 AI CLI 统一网关桌面应用：让 Claude Code / Codex / Gemini CLI 请求走同一个入口，统一管理本地多种 CLI 工具，并提供可视化监控与路由配置|[Zread](https://zread.ai/dyndynjyxa/aio-coding-hub)|
|12|[AionUi](https://github.com/iOfficeAI/AionUi/tree/main)|29.0k|桌面应用 · 编程助手|跨平台 AI 编程桌面工具，支持 CoWork：面向 AI 编程的跨平台桌面客户端，支持 CoWork 多人协作与多引擎集成|[Zread](https://zread.ai/iOfficeAI/AionUi)|
|13|[codeg](https://github.com/xintaofei/codeg)|1.8k|桌面应用 · AI 编程工作台|统一汇聚并浏览 AI 编程 Agent 会话（Claude Code / Codex / Gemini CLI 等）的工作台；支持桌面应用、自托管服务或 Docker；提供会话聚合、Git worktree 协作、MCP/Skills 管理、终端与聊天渠道集成|—
|14|[axonhub](https://github.com/looplj/axonhub)|4.5k|服务端网关 · 企业平台|现代化 AI 网关与 RBAC 权限管理系统：提供现代 AI 流量网关功能，并支持基于 RBAC 的细粒度权限与多租户管理|[Zread](https://zread.ai/looplj/axonhub)|
|14|[ccg-gateway](https://github.com/mos1128/ccg-gateway)|169|桌面应用 · 本地网关|Claude Code / Codex / Gemini 三合一代理网关桌面端：为 Claude Code、Codex 和 Gemini 提供统一代理网关及命令行易用工具，实现多引擎一站式接入|[Zread](https://zread.ai/mos1128/ccg-gateway)|
|15|[ccx](https://github.com/BenedictKing/ccx)|3.7k|服务端网关 · 个人轻量|面向个人使用的极简快速配置 API 网关：更适合个人的极简 API 网关，专注快速配置与轻量使用场景|[Zread](https://zread.ai/BenedictKing/ccx)|
|16|[cc-switch-cli](https://github.com/SaladDay/cc-switch-cli/tree/maind)|3.8k|CLI 工具 · 环境配置|cc-switch 的命令行版本：在终端中管理和快速切换 CLI 全局配置、MCP 配置和提示词等，适配服务器与无 GUI 环境|[Zread](https://zread.ai/SaladDay/cc-switch-cli)|
|17|[claude-relay-service (crs)](https://github.com/Wei-Shaw/claude-relay-service)|12.2k|服务端网关 · 中转拼车|Claude Code 镜像中转与拼车平台：为 Claude Code 提供一站式镜像中转与拼车服务，多用户共享与转发流量|[Zread](https://zread.ai/Wei-Shaw/claude-relay-service)|
|18|[gpt-load](https://github.com/tbphp/gpt-load)|6.2k|服务端网关 · 多渠道代理|智能密钥轮询的多渠道 AI 代理：支持多通道 API 密钥轮询与负载均衡，自动容错与路由|[Zread](https://zread.ai/tbphp/gpt-load)|
|19|[hapi](https://github.com/tiann/hapi)|4.4k|服务端 · 远程控制台|支持 Web/Telegram 的远程 AI 编程控制台：通过 Web 与 Telegram 远程控制 AI 编程会话，实现跨端远程开发与协作|[Zread](https://zread.ai/tiann/hapi)|
|20|[happy](https://github.com/slopus/happy)|22.3k|客户端 · 跨平台终端|面向 Claude Code / Codex 的端到端加密 AI 编程助手：为 Claude Code 和 Codex 打造的端到端加密跨平台客户端，覆盖移动端与 Web 端|[Zread](https://zread.ai/slopus/happy)|
|21|[metapi](https://github.com/cita-777/metapi)|3.0k|服务端网关 · 元聚合|多中转站聚合与智能路由网关：将 New API / One API / OneHub / DoneHub / Veloera / AnyRouter / Sub2API 等站点统一为单一入口与密钥|[Zread](https://zread.ai/cita-777/metapi)|
|22|[octopus](https://github.com/bestruirui/octopus)|2.3k|服务端网关 · API 聚合|个人向 LLM API 聚合与负载均衡服务：支持多通道聚合、多 Key 管理、智能路由与负载均衡，并可在 OpenAI Chat/Responses 与 Anthropic 协议间转换，适合多模型多渠道统一接入|[Zread](https://zread.ai/bestruirui/octopus)|
|23|[quotio](https://github.com/nguyenphutrong/quotio)|4.5k|桌面应用 · 配额管理|macOS 菜单栏多账号 AI 配额管理工具：在 macOS 菜单栏统一管理多个 AI 账户并实时追踪配额与使用情况|[Zread](https://zread.ai/nguyenphutrong/quotio)|
|24|[🔥Cockpit Tools](https://github.com/jlcodes99/cockpit-tools)|12.2k|桌面应用 · 账号管理|通用 AI IDE 账号管理工具：支持 Antigravity/Codex/GitHub Copilot/Windsurf/Kiro 多账号切换、配额监控、自动唤醒与多开实例管理|[Zread](https://zread.ai/jlcodes99/cockpit-tools)|
|25|[claude-code-hub](https://github.com/ding113/claude-code-hub)|3.2k|桌面/CLI 管理 · 统一入口|面向 Claude Code 的统一管理入口：帮助集中管理 Claude Code 相关配置、会话与常用工具，适合想把 Claude Code 工作流收拢到一个地方的用户|[Zread](https://zread.ai/ding113/claude-code-hub)|
|26|[paseo.sh](https://github.com/getpaseo/paseo)|9.4k|Web 服务 · Claude Code 生态|面向 Claude Code 的辅助服务与工具站点：提供与 Claude Code 工作流相关的在线能力与资源入口，适合用来快速了解或接入相关工具生态|[Zread](https://zread.ai/getpaseo/paseo)|
|27|[🔥Pi](https://github.com/earendil-works/pi)|94.1k|CLI/Agent · Coding Agent Harness|可自扩展的极简终端 Coding Agent：统一多厂商 LLM API（OpenAI/Anthropic/Google 等）；Agent 运行时（工具调用与状态管理）；交互式 coding agent CLI（read/write/edit/bash）；差分渲染 TUI；用 Extensions/Skills/Themes/Packages 适配工作流，而非 fork 内核（原 pi-mono，现 earendil-works/pi）|[Zread](https://zread.ai/earendil-works/pi)|
|28|[jcode](https://github.com/1jehuang/jcode)|7.8k|CLI/编程工具 · 开发辅助|轻量开发辅助工具：偏向命令行工作流与日常编码效率提升，可作为 Claude Code 周边补充工具，适合需要更轻量操作方式的场景|[Zread](https://zread.ai/1jehuang/jcode)|
|28|[AI Toolbox](https://github.com/coulsontl/ai-toolbox)|939|桌面应用 · 配置管理|个人 AI 工具箱：一站式管理 AI 编程助手配置，覆盖 OpenCode / Claude Code / Codex 供应商与模型配置切换；集中管理 MCP 服务器；Skills 安装管理；支持 Windows/macOS/Linux，并提供 WSL 同步与备份能力|[Zread](https://zread.ai/coulsontl/ai-toolbox)|
|29|[IDEA Claude Code GUI Plugin](https://github.com/zhukunpenglinyutong/idea-claude-code-gui)|4.1k|IDE 插件 · 可视化 GUI|IntelliJ IDEA 插件：为 Claude Code 与 OpenAI Codex 提供可视化界面；支持 @file 引用、会话回溯、对比 DIFF、MCP/Skills、权限与安全控制等，提高 IDE 内 AI 编程体验|[Zread](https://zread.ai/zhukunpenglinyutong/idea-claude-code-gui)|
|30|[Desktop CC GUI](https://github.com/zhukunpenglinyutong/desktop-cc-gui)|3.4k|桌面应用 · VibeCoding 平台|面向开发者的开源 VibeCoding 桌面客户端：集成 Claude Code / Codex / OpenCode（Gemini 开发中）；内置终端、Git 面板、看板、计划面板、MCP 管理、Skills 与多 Agent 并行执行，支持 Windows/macOS/Linux|[Zread](https://zread.ai/zhukunpenglinyutong/desktop-cc-gui)|
|31|[Sub2API](https://github.com/Wei-Shaw/sub2api)|29.4k|服务端网关 · 订阅配额与 API 网关|开源 AI API 网关：将 Claude / OpenAI / Gemini / Antigravity 等订阅统一接入为兼容 API；多账户与 API Key 分发、Token 级计费、智能调度与会话粘性、并发与限流，支持拼车共享与原生 CLI/工具|[Zread](https://zread.ai/Wei-Shaw/sub2api)|
|32|[Claude HUD](https://github.com/jarrodwatts/claude-hud)|25.9k|Claude Code 插件 · 状态栏|Claude Code 插件：安装后通过 `/claude-hud:setup` 配置 statusline，在输入区下方常驻 HUD；展示上下文占用、工具/Agent/Todo、可选 Git 与订阅用量等；基于 transcript 与 Claude Code 原生 token 数据|[Zread](https://zread.ai/jarrodwatts/claude-hud)|
|33|[Claude Code Quickstart (CCQ)](https://github.com/MrNine-666/claude-code-quickstart)|208|CLI 脚本 · Windows 环境安装|Windows 平台的 Claude Code 开发环境自动化安装器：通过 PowerShell 双阶段脚本（引导 + 安装/管理）一键完成依赖、供应商配置与 MCP 工作流初始化，支持后续统一更新与管理|[Zread](https://zread.ai/MrNine-666/claude-code-quickstart)|
|34|[Alma](https://alma.now/)|—|桌面应用 · AI Provider 编排|优雅的 AI Provider 编排桌面应用：统一切换 OpenAI、Anthropic、Google Gemini、DeepSeek 与自定义 API；支持聊天界面、长短期记忆管理、Web 搜索与高级工具调用；当前主要在 macOS Apple Silicon 上测试|—
|35|[OpenCow](https://github.com/OpenCowAI/opencow)|394|桌面应用 · 自主 Agent 编排|面向任务驱动自治 Agent 的开源平台：为每个任务分配一个自治 AI Agent，并行交付特性、活动、报告与审计；强调完整上下文与完整控制，支持桌面端与本地 MCP 协作|—
|36|[Claudix](https://github.com/Haleclipse/Claudix)|1.1k|VS Code 扩展 · Claude Code 增强|Gorgeous Claude Code Extend for VS Code：面向 VS Code 的 Claude Code 增强扩展，用于提升 Claude Code 在编辑器内的使用体验|—
|37|[claude_code_bridge (ccb)](https://github.com/bfly123/claude_code_bridge)|3.1k|CLI 协作工具 · 多模型联动|实时多 AI 协作终端工具：在分屏终端中联动 Claude / Codex / Gemini / OpenCode（含持久上下文与异步消息），支持 Windows（WezTerm）与 Linux/macOS/WSL（tmux）统一工作流|[Zread](https://zread.ai/bfly123/claude_code_bridge)|
|38|[GPTSession2CPAandSub2API](https://github.com/gtxx3600/GPTSession2CPAandSub2API)|1.3k|Web 工具 · Session 转换|纯前端单页工具：将 ChatGPT Web 登录 session JSON 转换为 CPA、Sub2API、Cockpit Tools 或 9router 可导入 JSON；浏览器本地解析、不上传 token；Plus 账号可用 Web session 生成中转站账号数据，绕过 Codex OAuth 手机绑定；Free 账号无模型调用权限|—
|39|[Nezha](https://github.com/hanshuaikang/nezha)|1.7k|桌面应用 · VibeCoding 平台|面向 AI Agent 时代的 Agent-First 桌面 IDE：在同一界面并行运行多个 Claude Code / Codex Agent；多项目工作区一键切换；内置终端、会话自动发现与回放；轻量代码/Markdown 编辑器；原生 Git 集成与 AI 提交信息；Token 用量统计；Tauri2+React+Rust，安装包约 7MB|[Zread](https://zread.ai/hanshuaikang/nezha)|
|40|[Terax](https://github.com/crynta/terax-ai)|7.5k|桌面应用 · AI 原生工作区|轻量级（约 7MB）Terminal-first AI 原生开发工作区：Tauri2+Rust+React 构建；原生 PTY 与 WebGL 多标签终端；Agent 侧栏（BYOK 或本地 Ollama/LM Studio/MLX）；内置 CodeMirror 编辑器、文件管理、Git 图谱与 Web 预览；无遥测、无账号|[Zread](https://zread.ai/crynta/terax-ai)|
|41|[Otty](https://otty.sh/)|—|终端工具 · AI 原生终端|原生 GPU 加速终端：介于传统终端与完整 Agent IDE 之间；为 Claude Code / Codex / OpenCode 等 CLI Agent 提供并行任务监控、Prompt 队列、会话分叉与 Web 预览；标签/分屏/会话恢复、命令面板与内联补全；免费无需账号，当前 macOS Apple Silicon 可用|—
|42|[cmux](https://cmux.com/zh-CN)|26.3k|终端工具 · 多 Agent 终端|基于 libghostty 的免费开源原生 macOS 终端：垂直标签页（git 分支/工作目录/端口）、agent 需关注时的通知环、标签内分屏、内置可编程浏览器与 CLI/socket API；支持 Claude Code / Codex / OpenCode 等任意 CLI Agent，以及 SSH/远程 tmux|[GitHub](https://github.com/manaflow-ai/cmux)|
