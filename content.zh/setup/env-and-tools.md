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

本合集汇整了针对 Claude Code、Codex 及 Gemini CLI 的各类增强工具，按用途分为桌面客户端、路由代理、终端增强、配置与插件四类。

### 桌面客户端与工作区

统一管理配置、账号、会话，或作为 Agent 开发 / VibeCoding 工作台。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[🔥CC Switch]({{< relref "setup/cc-switch" >}})|130k|Claude Code / Codex / Gemini CLI 跨平台桌面辅助工具：一键切换 API 供应商配置；统一管理 MCP 服务器；Skills 扫描与 Prompts 预设；内置 API 测速；Tauri2+React+Rust|[Zread](https://zread.ai/farion1231/cc-switch) |
|[Orca](https://www.onorca.dev/)|57k|面向 AI Coding Agent 的 ADE（Agent Development Environment，YC 支持）：在隔离 git worktree 中并行跑 Claude Code / Codex / OpenCode 等；Ghostty 风格 WebGL 终端、内置编辑器、Chromium Design Mode、GitHub/Linear、SSH 远程 worktree、diff 批注回传 Agent；含移动端伴侣与 Orca CLI；开源 MIT，支持 macOS / Windows / Linux|[GitHub](https://github.com/stablyai/orca)|
|[AionUi](https://github.com/iOfficeAI/AionUi/tree/main)|32k|跨平台 AI 编程桌面工具，支持 CoWork：面向 AI 编程的跨平台桌面客户端，支持 CoWork 多人协作与多引擎集成|[Zread](https://zread.ai/iOfficeAI/AionUi)|
|[Antigravity Manager](https://github.com/lbjlaq/Antigravity-Manager)|31k|专业 Antigravity 账号管理与切换工具：管理与切换 Antigravity 账号|[Zread](https://zread.ai/lbjlaq/Antigravity-Manager)|
|[happy](https://github.com/slopus/happy)|24k|面向 Claude Code / Codex 的端到端加密 AI 编程助手：为 Claude Code 和 Codex 打造的端到端加密跨平台客户端，覆盖移动端与 Web 端|[Zread](https://zread.ai/slopus/happy)|
|[🔥Cockpit Tools](https://github.com/jlcodes99/cockpit-tools)|17k|通用 AI IDE 账号管理工具：支持 Antigravity/Codex/GitHub Copilot/Windsurf/Kiro 多账号切换、配额监控、自动唤醒与多开实例管理|[Zread](https://zread.ai/jlcodes99/cockpit-tools)|
|[OpenChamber](https://openchamber.dev/zh/)|9.4k|面向 AI 编程的开源智能体开发环境（基于 OpenCode）：桌面 / 浏览器 PWA / VS Code / 移动端统一工作区；Session Goals 持续推进、Multi-run 多模型并行与 Fusion、Changes Walkthrough、Preview 点选回传、Issue→PR、定时任务与 Private Relay 远程访问；代码与会话留在本机|[GitHub](https://github.com/openchamber/openchamber)|
|[Terax](https://github.com/crynta/terax-ai)|9.1k|轻量级（约 7MB）Terminal-first AI 原生开发工作区：Tauri2+Rust+React 构建；原生 PTY 与 WebGL 多标签终端；Agent 侧栏（BYOK 或本地 Ollama/LM Studio/MLX）；内置 CodeMirror 编辑器、文件管理、Git 图谱与 Web 预览；无遥测、无账号|[Zread](https://zread.ai/crynta/terax-ai)|
|[quotio](https://github.com/nguyenphutrong/quotio)|4.8k|macOS 菜单栏多账号 AI 配额管理工具：在 macOS 菜单栏统一管理多个 AI 账户并实时追踪配额与使用情况|[Zread](https://zread.ai/nguyenphutrong/quotio)|
|[Skills Manager](https://github.com/xingkongliang/skills-manager)|4.2k|跨 50+ 编程 Agent 的 Skills 统一管理桌面应用（Tauri2）：中央技能库安装/同步（Git、本地、zip、skills.sh 市场）；Preset 一键启用；Global / Project Workspace；符号链接或复制同步到 Claude Code / Codex / Cursor / Copilot / Gemini CLI 等；支持备份与多设备 Git 同步及配套 CLI|[GitHub](https://github.com/xingkongliang/skills-manager)|
|[Desktop CC GUI](https://github.com/zhukunpenglinyutong/desktop-cc-gui)|4.1k|面向开发者的开源 VibeCoding 桌面客户端：集成 Claude Code / Codex / OpenCode（Gemini 开发中）；内置终端、Git 面板、看板、计划面板、MCP 管理、Skills 与多 Agent 并行执行，支持 Windows/macOS/Linux|[Zread](https://zread.ai/zhukunpenglinyutong/desktop-cc-gui)|
|[claude-code-hub](https://github.com/ding113/claude-code-hub)|3.3k|面向 Claude Code 的统一管理入口：帮助集中管理 Claude Code 相关配置、会话与常用工具，适合想把 Claude Code 工作流收拢到一个地方的用户|[Zread](https://zread.ai/ding113/claude-code-hub)|
|[codeg](https://github.com/xintaofei/codeg)|3.1k|统一汇聚并浏览 AI 编程 Agent 会话（Claude Code / Codex / Gemini CLI 等）的工作台；支持桌面应用、自托管服务或 Docker；提供会话聚合、Git worktree 协作、MCP/Skills 管理、终端与聊天渠道集成|—
|[Codex-X](https://github.com/yynxxxxx/Codex-X)|2.9k|面向 OpenAI Codex 桌面端 / CLI 的跨平台可视化管理工具（Tauri2）：提示词模板注入与启用/禁用、Provider/API 切换（可从 cc-switch 导入）、会话同步与清理、Skills/MCP 管理、`config.toml`/`auth.json` 可视化；支持 macOS / Windows / Linux|[GitHub](https://github.com/yynxxxxx/Codex-X)|
|[Nezha](https://github.com/hanshuaikang/nezha)|1.9k|面向 AI Agent 时代的 Agent-First 桌面 IDE：在同一界面并行运行多个 Claude Code / Codex Agent；多项目工作区一键切换；内置终端、会话自动发现与回放；轻量代码/Markdown 编辑器；原生 Git 集成与 AI 提交信息；Token 用量统计；Tauri2+React+Rust，安装包约 7MB|[Zread](https://zread.ai/hanshuaikang/nezha)|
|[LiveAgent](https://github.com/Stack-Cairn/LiveAgent)|1.9k|Local-first AI Agent 桌面客户端（Tauri+React+Rust+Go）：多模型路由（Claude / Codex / Gemini 及自定义 Base URL）；本地文件与 Bash 执行、子 Agent 并行与 worktree；MCP / Skills；持久记忆与定时任务；可选 Gateway 提供浏览器 WebUI 远程控制；支持 macOS / Windows / Linux|[Zread](https://zread.ai/Stack-Cairn/LiveAgent)|
|[ProxyCast](https://github.com/aiclientproxy/proxycast)|1.5k|面向普通创作者的一体化 AI Agent 创作工作台：把灵感、写作、出图、改稿、沉淀放进同一个工作台，让创作从"想到"直接走到"可发布"|[Zread](https://zread.ai/aiclientproxy/proxycast)|
|[AiMaMi](https://github.com/borawong/AiMaMi)|1.5k|面向 OpenAI Codex 的本地桌面伴侣（Tauri2+React+Rust）：统一管理账号切换与配额、智能路由与中转、会话清理、MCP/Skills、插件与 AGENTS.md 自定义指令；读写 `~/.codex` 本地数据，减少手改 TOML/JSON；支持 macOS / Windows（Linux 尽力支持）|[GitHub](https://github.com/borawong/AiMaMi)|
|[Any Code](https://github.com/anyme123/Any-code)|1.3k|专业 AI 代码助手桌面应用，多引擎现代化 GUI 工具包：支持 Claude Code CLI / OpenAI Codex / Gemini CLI 一键切换；翻译、成本追踪、MCP 管理、Hooks、上下文压缩|[Zread](https://zread.ai/anyme123/Any-code) |
|[AI Toolbox](https://github.com/coulsontl/ai-toolbox)|1.3k|个人 AI 工具箱：一站式管理 AI 编程助手配置，覆盖 OpenCode / Claude Code / Codex 供应商与模型配置切换；集中管理 MCP 服务器；Skills 安装管理；支持 Windows/macOS/Linux，并提供 WSL 同步与备份能力|[Zread](https://zread.ai/coulsontl/ai-toolbox)|
|[aio-coding-hub](https://github.com/dyndynjyxa/aio-coding-hub)|652|本地 AI CLI 统一网关桌面应用：让 Claude Code / Codex / Gemini CLI 请求走同一个入口，统一管理本地多种 CLI 工具，并提供可视化监控与路由配置|[Zread](https://zread.ai/dyndynjyxa/aio-coding-hub)|
|[AI CLI Complete Notify](https://github.com/ZekerTop/ai-cli-complete-notify)|408|面向 Claude Code / Codex / OpenCode / Gemini 的多通道任务完成提醒（桌面端 + CLI）：Hooks/Watch 监听长任务结束；Webhook（飞书/钉钉/企微）、Telegram、邮件、桌面/声音提示；耗时阈值、智能防抖与可选 AI 摘要；支持 Windows / macOS|[GitHub](https://github.com/ZekerTop/ai-cli-complete-notify)|
|[OpenCow](https://github.com/OpenCowAI/opencow)|395|面向任务驱动自治 Agent 的开源平台：为每个任务分配一个自治 AI Agent，并行交付特性、活动、报告与审计；强调完整上下文与完整控制，支持桌面端与本地 MCP 协作|—
|[ccg-gateway](https://github.com/mos1128/ccg-gateway)|189|Claude Code / Codex / Gemini 三合一代理网关桌面端：为 Claude Code、Codex 和 Gemini 提供统一代理网关及命令行易用工具，实现多引擎一站式接入|[Zread](https://zread.ai/mos1128/ccg-gateway)|
|[Pi Switch](https://github.com/Wing900/Pi-switch)|105|面向 [Pi](https://github.com/earendil-works/pi) Agent 的跨平台 Provider/模型配置工具（Wails）：多 Provider 管理（DeepSeek/OpenAI/Anthropic 及任意 OpenAI 兼容）；Anthropic 原生 `anthropic-messages` 适配；模型列表拉取/手动导入；一键启动 Pi Agent|[GitHub](https://github.com/Wing900/Pi-switch)|
|[ZCode](https://zcode.z.ai/cn)|—|智谱 GLM-5.3 官方 Harness / 氛围编程桌面端：多智能体协作推进复杂目标；Goal 管理长程任务；微信 / 飞书 / Telegram Bot 远程唤起；深度适配 GLM-5.3（含 Flash 多模态）；支持 macOS / Windows / Linux，可搭配 GLM Coding Plan|[BigModel](https://www.bigmodel.cn/glm-coding)|
|[Alma](https://alma.now/)|—|优雅的 AI Provider 编排桌面应用：统一切换 OpenAI、Anthropic、Google Gemini、DeepSeek 与自定义 API；支持聊天界面、长短期记忆管理、Web 搜索与高级工具调用；当前主要在 macOS Apple Silicon 上测试|—

### 路由代理与 API 网关

把 CLI / 订阅转成兼容 API，或做多模型路由、负载均衡与拼车中转。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[🔥CLIProxyAPI (CPA)]({{< relref "setup/cpa" >}})|49k|将多种 CLI 封装为 OpenAI/Gemini/Claude/Codex 兼容 API 代理：本地/多账户 CLI 统一通过兼容客户端/SDK 调用；多账户轮询与故障转移；流式/非流式、多模态、函数调用支持|[Zread](https://zread.ai/router-for-me/CLIProxyAPI)|
|[Sub2API](https://github.com/Wei-Shaw/sub2api)|40k|开源 AI API 网关：将 Claude / OpenAI / Gemini / Antigravity 等订阅统一接入为兼容 API；多账户与 API Key 分发、Token 级计费、智能调度与会话粘性、并发与限流，支持拼车共享与原生 CLI/工具|[Zread](https://zread.ai/Wei-Shaw/sub2api)|
|[🔥Claude Code Router](https://github.com/musistudio/claude-code-router)|37k|自定义请求路径与模型分发的强大路由器：将 Claude Code 请求路由到不同模型；自定义任意请求逻辑；无需 Anthropic 账号；支持 DeepSeek/Gemini/Groq 等|[Zread](https://zread.ai/musistudio/claude-code-router) |
|[claude-relay-service (crs)](https://github.com/Wei-Shaw/claude-relay-service)|13k|Claude Code 镜像中转与拼车平台：为 Claude Code 提供一站式镜像中转与拼车服务，多用户共享与转发流量|[Zread](https://zread.ai/Wei-Shaw/claude-relay-service)|
|[gpt-load](https://github.com/tbphp/gpt-load)|6.3k|智能密钥轮询的多渠道 AI 代理：支持多通道 API 密钥轮询与负载均衡，自动容错与路由|[Zread](https://zread.ai/tbphp/gpt-load)|
|[axonhub](https://github.com/looplj/axonhub)|5.1k|现代化 AI 网关与 RBAC 权限管理系统：提供现代 AI 流量网关功能，并支持基于 RBAC 的细粒度权限与多租户管理|[Zread](https://zread.ai/looplj/axonhub)|
|[hapi](https://github.com/tiann/hapi)|4.9k|支持 Web/Telegram 的远程 AI 编程控制台：通过 Web 与 Telegram 远程控制 AI 编程会话，实现跨端远程开发与协作|[Zread](https://zread.ai/tiann/hapi)|
|[ccx](https://github.com/BenedictKing/ccx)|4.0k|面向个人使用的极简快速配置 API 网关：更适合个人的极简 API 网关，专注快速配置与轻量使用场景|[Zread](https://zread.ai/BenedictKing/ccx)|
|[metapi](https://github.com/cita-777/metapi)|3.2k|多中转站聚合与智能路由网关：将 New API / One API / OneHub / DoneHub / Veloera / AnyRouter / Sub2API 等站点统一为单一入口与密钥|[Zread](https://zread.ai/cita-777/metapi)|
|[octopus](https://github.com/bestruirui/octopus)|2.6k|个人向 LLM API 聚合与负载均衡服务：支持多通道聚合、多 Key 管理、智能路由与负载均衡，并可在 OpenAI Chat/Responses 与 Anthropic 协议间转换，适合多模型多渠道统一接入|[Zread](https://zread.ai/bestruirui/octopus)|
|[Aether](https://github.com/fawney19/Aether)|1.4k|一站式 AI 基础设施与多租户 API 网关：支持 Claude / OpenAI / Gemini 及其 CLI 客户端的统一接入层，集中管理与路由请求|[Zread](https://zread.ai/fawney19/Aether)|
|[ccNexus](https://github.com/lich0821/ccNexus)|976|专为 Claude Code 设计的智能端点轮换代理：多端点管理；自动故障转移与无感切换；兼容 OpenAI 与 Gemini API 格式|[Zread](https://zread.ai/lich0821/ccNexus)|

### 终端增强与 CLI Agent

AI 原生终端、Coding Agent Harness，以及终端内状态栏 / 多 Agent 协作。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[🔥Pi](https://github.com/earendil-works/pi)|99k|可自扩展的极简终端 Coding Agent：统一多厂商 LLM API（OpenAI/Anthropic/Google 等）；Agent 运行时（工具调用与状态管理）；交互式 coding agent CLI（read/write/edit/bash）；差分渲染 TUI；用 Extensions/Skills/Themes/Packages 适配工作流，而非 fork 内核（原 pi-mono，现 earendil-works/pi）|[Zread](https://zread.ai/earendil-works/pi)|
|[Warp](https://github.com/warpdotdev/warp)|65k|现代化 AI 原生终端：提供命令补全、命令块、工作流自动化、团队协作与内置 AI 辅助，适合提升日常开发与 AI 编程终端体验|[Zread](https://zread.ai/warpdotdev/warp)|
|[DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)|35k|DeepSeek 原生终端 Coding Agent（[reasonix.io](https://reasonix.io/)）：围绕 prefix-cache 稳定性设计，可长时间自主运行；同一本地引擎支持终端 / 桌面 / 浏览器 / ACP 编辑器；`reasonix.toml` 配置驱动多模型（DeepSeek 预设 + OpenAI 兼容）、MCP/插件、Plan 模式与权限沙箱、检查点可回退；单 Go 二进制，MIT|[GitHub](https://github.com/esengine/DeepSeek-Reasonix)|
|[oh-my-pi (omp)](https://github.com/can1357/oh-my-pi)|29k|[Pi](https://github.com/earendil-works/pi) fork，内置 IDE 能力的终端 Coding Agent（[omp.sh](https://omp.sh)）：60+ Provider / 31 工具；LSP 与 DAP 调试；子 Agent / Advisor / Collab；Hashline 编辑与进程内 shell/grep；ACP 接入 Zed 等编辑器；~80k 行 Rust 核心；MIT，支持 macOS / Linux / Windows|[GitHub](https://github.com/can1357/oh-my-pi)|
|[Claude HUD](https://github.com/jarrodwatts/claude-hud)|28k|Claude Code 插件：安装后通过 `/claude-hud:setup` 配置 statusline，在输入区下方常驻 HUD；展示上下文占用、工具/Agent/Todo、可选 Git 与订阅用量等；基于 transcript 与 Claude Code 原生 token 数据|[Zread](https://zread.ai/jarrodwatts/claude-hud)|
|[cmux](https://cmux.com/zh-CN)|27k|基于 libghostty 的免费开源原生 macOS 终端：垂直标签页（git 分支/工作目录/端口）、agent 需关注时的通知环、标签内分屏、内置可编程浏览器与 CLI/socket API；支持 Claude Code / Codex / OpenCode 等任意 CLI Agent，以及 SSH/远程 tmux|[GitHub](https://github.com/manaflow-ai/cmux)|
|[jcode](https://github.com/1jehuang/jcode)|19k|轻量开发辅助工具：偏向命令行工作流与日常编码效率提升，可作为 Claude Code 周边补充工具，适合需要更轻量操作方式的场景|[Zread](https://zread.ai/1jehuang/jcode)|
|[Kaku](https://github.com/tw93/Kaku)|5.8k|面向 AI 编程的开箱即用终端（WezTerm 深度定制）：零配置默认、主题跟随系统、内置 zsh 套件与 lazygit/yazi；内置 AI 助手（命令失败自动建议修复、`#` 自然语言转命令、Cmd+L 聊天）；可配置 Claude Code / Codex / Gemini CLI 等；兼容 WezTerm Lua 配置；当前仅 macOS|[GitHub](https://github.com/tw93/Kaku)|
|[CCometixLine](https://github.com/Haleclipse/CCometixLine)|3.5k|基于 Rust 的 Claude Code 状态栏与 TUI 工具：Git 信息显示；API 使用量跟踪；交互式 TUI 配置；Claude Code 补丁工具|[Zread](https://zread.ai/Haleclipse/CCometixLine)|
|[claude_code_bridge (ccb)](https://github.com/bfly123/claude_code_bridge)|3.5k|实时多 AI 协作终端工具：在分屏终端中联动 Claude / Codex / Gemini / OpenCode（含持久上下文与异步消息），支持 Windows（WezTerm）与 Linux/macOS/WSL（tmux）统一工作流|[Zread](https://zread.ai/bfly123/claude_code_bridge)|
|[Otty](https://otty.sh/)|—|原生 GPU 加速终端：介于传统终端与完整 Agent IDE 之间；为 Claude Code / Codex / OpenCode 等 CLI Agent 提供并行任务监控、Prompt 队列、会话分叉与 Web 预览；标签/分屏/会话恢复、命令面板与内联补全；免费无需账号，当前 macOS Apple Silicon 可用|—

### 配置脚本与编辑器插件

一键环境初始化、CLI 配置切换，以及 IDE / Web 侧辅助工具。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[paseo.sh](https://github.com/getpaseo/paseo)|15k|面向 Claude Code 的辅助服务与工具站点：提供与 Claude Code 工作流相关的在线能力与资源入口，适合用来快速了解或接入相关工具生态|[Zread](https://zread.ai/getpaseo/paseo)|
|[🔥ZCF (Zero Config)]({{< relref "setup/zcf" >}})|6.1k|零配置一键搞定 Claude Code & Codex 环境：中英文双语配置；内置智能代理系统；个性化 AI 助手配置|[Zread](https://zread.ai/UfoMiao/zcf)|
|[IDEA Claude Code GUI Plugin](https://github.com/zhukunpenglinyutong/idea-claude-code-gui)|5.7k|IntelliJ IDEA 插件：为 Claude Code 与 OpenAI Codex 提供可视化界面；支持 @file 引用、会话回溯、对比 DIFF、MCP/Skills、权限与安全控制等，提高 IDE 内 AI 编程体验|[Zread](https://zread.ai/zhukunpenglinyutong/idea-claude-code-gui)|
|[cc-switch-cli](https://github.com/SaladDay/cc-switch-cli/tree/maind)|4.9k|cc-switch 的命令行版本：在终端中管理和快速切换 CLI 全局配置、MCP 配置和提示词等，适配服务器与无 GUI 环境|[Zread](https://zread.ai/SaladDay/cc-switch-cli)|
|[GPTSession2CPAandSub2API](https://github.com/gtxx3600/GPTSession2CPAandSub2API)|1.8k|纯前端单页工具：将 ChatGPT Web 登录 session JSON 转换为 CPA、Sub2API、Cockpit Tools 或 9router 可导入 JSON；浏览器本地解析、不上传 token；Plus 账号可用 Web session 生成中转站账号数据，绕过 Codex OAuth 手机绑定；Free 账号无模型调用权限|—
|[Claudix](https://github.com/Haleclipse/Claudix)|1.1k|Gorgeous Claude Code Extend for VS Code：面向 VS Code 的 Claude Code 增强扩展，用于提升 Claude Code 在编辑器内的使用体验|—
|[Claude Code Quickstart (CCQ)](https://github.com/MrNine-666/claude-code-quickstart)|211|Windows 平台的 Claude Code 开发环境自动化安装器：通过 PowerShell 双阶段脚本（引导 + 安装/管理）一键完成依赖、供应商配置与 MCP 工作流初始化，支持后续统一更新与管理|[Zread](https://zread.ai/MrNine-666/claude-code-quickstart)|
