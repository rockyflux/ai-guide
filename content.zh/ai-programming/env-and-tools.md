---
aliases:
  - /setup/env-and-tools/
title: 环境增强工具集
weight: 41
bookToc: false
noTocArea: true
bookHidden: false
---

## 环境增强工具集

本合集汇整 Claude Code、Codex、Gemini CLI 的增强工具，按用途分为桌面（配置·账号 / 工作区 / 周边）、路由代理、终端增强、配置与插件。表格按收录时大致 star 数降序（快照，非实时）；🔥 为站内有专页的推荐项。解读列：有 Zread 用 Zread，否则 GitHub / 官网。新项目可先看 [GitHubVC · AI Trending](https://github.attentionvc.ai/trending/repos?c=ai)。

环境变量与基础栈见 [开发环境准备]({{< relref "ai-programming/dev-start" >}})；供应商 / MCP 可视化深读见 [CC Switch]({{< relref "setup/cc-switch" >}})、[ZCF]({{< relref "setup/zcf" >}})、[CPA]({{< relref "setup/cpa" >}})。

**怎么选（按任务）**

- 换供应商 / 管 MCP·Skills → [CC Switch]({{< relref "setup/cc-switch" >}}) 或 CLI 版 `cc-switch-cli`；一键初始化看 [ZCF]({{< relref "setup/zcf" >}})
- 多账号 / 配额监控 → Cockpit Tools、quotio、Antigravity Manager
- 订阅转兼容 API / 多模型路由 → [LiteLLM](https://github.com/BerriAI/litellm)、[CPA]({{< relref "setup/cpa" >}})、[New API](https://github.com/QuantumNous/new-api)、Sub2API、Claude Code Router、opencodex、[Bifrost](https://github.com/maximhq/bifrost)、[magpie](https://github.com/yetone/magpie)；白嫖多家免费档 → FreeLLMAPI
- 多 Agent 并行工作区 → Orca、[Multica](https://github.com/multica-ai/multica)、[Buzz](https://github.com/block/buzz)、[T3 Code](https://github.com/pingdotgg/t3code)、OpenChamber、Nezha、Desktop CC GUI、CLI-Manager、[diri](https://github.com/cristicretu/diri)
- 终端里写代码 / 状态栏 → Pi、oh-my-pi、Warp、Pebrel、Claude HUD、[tty7](https://github.com/l0ng-ai/tty7)
- 网站 / 已登录 Chrome 变成 CLI，给 Agent 操作网页 → [OpenCLI](https://github.com/jackwener/opencli)
- 团队共享 Skills / Rules / MCP → TeamAI
- Windows 一键装环境 → Claude Code Quickstart (CCQ)
- 远程盯会话 → hapi；云端 Agent（ChatGPT/Claude）接本机仓库与工具链 → [WebCodex](https://github.com/yyjeqhc/webcodex)；任务完成提醒 → AI CLI Complete Notify
- Agent 友好的 Git（并行/堆叠分支、`but` CLI、Agent hooks/skills）→ [GitButler](https://github.com/gitbutlerapp/gitbutler)
- 跨会话 / 跨 Agent 长期记忆与交接 → [ai-memory](https://github.com/akitaonrails/ai-memory)、[TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)；进模型前压 tool 输出 / 上下文沙箱 → [headroom](https://github.com/headroomlabs-ai/headroom)、[context-mode](https://github.com/mksglu/context-mode)；代码库检索 / 调用图 → [Codegraph](https://github.com/colbymchenry/codegraph)、[Zvec](https://zvec.org/zh/)、[RepoWise](https://github.com/repowise-dev/repowise)；内容搜 / 找文件 → [ripgrep](https://github.com/BurntSushi/ripgrep)（`rg`）、[fd](https://github.com/sharkdp/fd)（现代 `find`）

### 桌面：配置 · 账号 · 配额

切供应商、管 MCP/Skills、多账号与配额；不是完整 IDE。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[🔥CC Switch]({{< relref "setup/cc-switch" >}})|135k|Claude Code / Codex / Gemini CLI 跨平台桌面辅助：一键切换 API 供应商；统一管理 MCP；Skills 扫描与 Prompts 预设；内置 API 测速（Tauri2+React+Rust）|[Zread](https://zread.ai/farion1231/cc-switch)|
|[Antigravity Manager](https://github.com/lbjlaq/Antigravity-Manager)|32k|Antigravity 多账号管理与切换，偏账号/配额运维|[Zread](https://zread.ai/lbjlaq/Antigravity-Manager)|
|[🔥Cockpit Tools](https://github.com/jlcodes99/cockpit-tools)|18k|通用 AI IDE 账号管理：Antigravity/Codex/Copilot/Windsurf/Kiro 多账号切换、配额监控、自动唤醒与多开|[Zread](https://zread.ai/jlcodes99/cockpit-tools)|
|[Skills Manager](https://github.com/xingkongliang/skills-manager)|4.9k|跨 50+ Agent 的 Skills 桌面管理：中央库安装/同步、Preset，同步到 Claude Code / Codex / Cursor 等|[GitHub](https://github.com/xingkongliang/skills-manager)|
|[quotio](https://github.com/nguyenphutrong/quotio)|4.9k|macOS 菜单栏多账号 AI 配额追踪（仅 macOS）|[Zread](https://zread.ai/nguyenphutrong/quotio)|
|[Codex-X](https://github.com/yynxxxxx/Codex-X)|3.9k|OpenAI Codex 桌面/CLI 可视化：提示词模板、Provider 切换（可从 cc-switch 导入）、会话与 Skills/MCP|[GitHub](https://github.com/yynxxxxx/Codex-X)|
|[claude-code-hub](https://github.com/ding113/claude-code-hub)|3.4k|Claude Code 配置/会话/常用工具的统一入口|[Zread](https://zread.ai/ding113/claude-code-hub)|
|[AI Toolbox](https://github.com/coulsontl/ai-toolbox)|1.7k|个人工具箱：OpenCode / Claude Code / Codex 供应商切换、MCP、Skills；支持 WSL 同步与备份|[Zread](https://zread.ai/coulsontl/ai-toolbox)|
|[AiMaMi](https://github.com/borawong/AiMaMi)|1.5k|Codex 本地桌面伴侣：账号/配额、路由中转、会话清理、MCP/Skills；读写 `~/.codex`|[GitHub](https://github.com/borawong/AiMaMi)|
|[Pi Switch](https://github.com/Wing900/Pi-switch)|0.1k|[Pi](https://github.com/earendil-works/pi) 的 Provider/模型配置工具（Wails）：多 Provider、Anthropic 原生协议适配、一键启动|[GitHub](https://github.com/Wing900/Pi-switch)|

### 桌面：多 Agent 工作区

在同一界面跑 Agent、编辑、预览与会话编排。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[Orca](https://www.onorca.dev/)|76k|面向 AI Coding Agent 的 ADE（YC）：隔离 git worktree 并行跑 Claude Code / Codex / OpenCode；WebGL 终端、内置编辑器、SSH 远程 worktree、diff 批注回传；MIT，跨平台|[GitHub](https://github.com/stablyai/orca)|
|[Multica](https://github.com/multica-ai/multica)|52.1k|人与 AI Agent 同看板协作：把 Issue 派给 Claude Code / Codex / Cursor 等 26+ CLI；本机 daemon 跑代码、执行日志与 Review 门禁；可自托管（Docker/Helm），Web/桌面/移动端|[官网](https://multica.ai)|
|[Buzz](https://github.com/block/buzz)|35.7k|Block 开源：人与 Agent 同房间协作的可自托管工作区（Nostr relay）；频道/补丁/CI/审批同一事件流；桌面（Tauri）+ `buzz-cli`（JSON I/O）+ ACP（Goose/Codex/Claude Code）；Apache-2.0|[GitHub](https://github.com/block/buzz)|
|[AionUi](https://github.com/iOfficeAI/AionUi)|33k|跨平台 AI 编程桌面客户端：CoWork 协作、多引擎集成|[Zread](https://zread.ai/iOfficeAI/AionUi)|
|[T3 Code](https://github.com/pingdotgg/t3code)|26.2k|Agent harness 控制面：用本机已登录的 Claude Code / Codex / Cursor / Grok Build / OpenCode / Antigravity；Electron 桌面 + Web + iOS/Android；远程从手机/另一台机器操控；开源 MIT|[官网](https://t3.codes)|
|[happy](https://github.com/slopus/happy)|24k|Claude Code / Codex 端到端加密客户端，覆盖桌面、移动与 Web|[Zread](https://zread.ai/slopus/happy)|
|[OpenChamber](https://openchamber.dev/zh/)|10k|基于 OpenCode 的开源智能体开发环境：桌面 / PWA / VS Code / 移动端；Session Goals、多模型 Multi-run、Issue→PR、Private Relay|[GitHub](https://github.com/openchamber/openchamber)|
|[Todos](https://todos.dev/zh)|—|人与 Agent 的任务驱动工作台：一个工作台调度所有 Agent，分配模型和角色，并行协作，高效交付|[官网](https://todos.dev/zh)|
|[Terax](https://github.com/crynta/terax-ai)|9.2k|约 7MB 的 Terminal-first 工作区（Tauri2）：WebGL 多标签终端、Agent 侧栏、CodeMirror、Git 图谱；无遥测|[Zread](https://zread.ai/crynta/terax-ai)|
|[PI-Desktop](https://github.com/vastsa/pi-desktop)|5.3k|基于 [Pi](https://github.com/earendil-works/pi) 的 Local-first 桌面工作区：Agent/Plan/Goal、Subagent 编排、插件市场；可导入多端会话|[GitHub](https://github.com/vastsa/pi-desktop)|
|[Octop](https://github.com/TencentCloud/Octop)|4.7k|腾讯云开源自托管多用户多 Agent：Web/CLI/桌面；IM 通道；ACP 对接 OpenCode / Claude Code / Codex|[GitHub](https://github.com/TencentCloud/Octop)|
|[Desktop CC GUI](https://github.com/zhukunpenglinyutong/desktop-cc-gui)|4.3k|开源 VibeCoding 桌面端：Claude Code / Codex / OpenCode；终端、Git、看板、MCP/Skills、多 Agent 并行|[Zread](https://zread.ai/zhukunpenglinyutong/desktop-cc-gui)|
|[codeg](https://github.com/xintaofei/codeg)|3.7k|聚合 Claude Code / Codex / Gemini CLI 等会话的工作台；桌面或自托管 Docker|[GitHub](https://github.com/xintaofei/codeg)|
|[LiveAgent](https://github.com/Stack-Cairn/LiveAgent)|2.2k|Local-first Agent 桌面端：多模型路由、子 Agent/worktree、MCP/Skills、可选 Gateway WebUI|[Zread](https://zread.ai/Stack-Cairn/LiveAgent)|
|[Nezha](https://github.com/hanshuaikang/nezha)|1.9k|Agent-First 桌面 IDE：并行多 Claude Code / Codex；会话回放、轻量编辑器、Token 统计（约 7MB）|[Zread](https://zread.ai/hanshuaikang/nezha)|
|[Any Code](https://github.com/anyme123/Any-code)|1.3k|多引擎 AI 代码助手 GUI：Claude Code / Codex / Gemini CLI 切换；成本追踪、MCP、Hooks|[Zread](https://zread.ai/anyme123/Any-code)|
|[CLI-Manager](https://github.com/dark-hxx/CLI-Manager)|0.8k|跨平台 AI CLI 工作台（Tauri）：本地/SSH 终端、多项目与 Worktree、Claude Code/Codex 深度集成（Hook 通知、会话 Diff、用量看板）；cc-switch 项目级供应商切换；Telegram/飞书手机对话|[GitHub](https://github.com/dark-hxx/CLI-Manager)|
|[OpenCow](https://github.com/OpenCowAI/opencow)|0.4k|任务驱动自治 Agent 平台：每任务一 Agent，并行交付；桌面端 + 本地 MCP|[GitHub](https://github.com/OpenCowAI/opencow)|
|[diri](https://github.com/cristicretu/diri)|0.4k|多 Agent 并行工作区（Rust+GPUI）：Claude Code / Codex / Cursor / Gemini 等 22+ CLI 并排；独立 worktree、MCP 让 Agent 互相拉起；侧栏状态与 diff 审阅；会话进程独立于 App；本地或 SSH；macOS 正式，Linux beta|[官网](https://diri.sh)|
|[ZCode](https://zcode.z.ai/cn)|—|智谱 GLM 官方氛围编程桌面端：多智能体、Goal 长程任务、IM Bot 远程唤起|[BigModel](https://www.bigmodel.cn/glm-coding)|
|[Alma](https://alma.now/)|—|AI Provider 编排桌面端：多厂 API 切换、聊天、记忆与工具调用；主测 macOS Apple Silicon|[官网](https://alma.now/)|

### 桌面：周边（通知 · 远程 · 网关 GUI · Git · 创作）

不单独成「工作区」，但常与上两类搭配。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[GitButler](https://github.com/gitbutlerapp/gitbutler)|21.8k|面向 AI/Agent 的 Git 客户端（GUI + `but` CLI，Tauri/Rust/Svelte）：并行/堆叠分支、易改 commit、无限撤销、冲突可延后；内置 AI 写 commit/PR；可装 hooks/skills 给各 Agent 管 Git|[官网](https://gitbutler.com)|
|[hapi](https://github.com/tiann/hapi)|5.1k|Web / Telegram 远程 AI 编程控制台|[Zread](https://zread.ai/tiann/hapi)|
|[WebCodex](https://github.com/yyjeqhc/webcodex)|2.2k|让 ChatGPT / Claude 等云端 Agent 经 MCP 用本机真实开发环境：仓库、Git、编译/测试与工具链留在本地；Desktop/CLI/Server/Runner；可单机或自托管多机；Apache-2.0|[GitHub](https://github.com/yyjeqhc/webcodex)|
|[ProxyCast](https://github.com/aiclientproxy/proxycast)|1.5k|创作者向 Agent 工作台（写作/出图/改稿）；非纯 Coding IDE|[Zread](https://zread.ai/aiclientproxy/proxycast)|
|[aio-coding-hub](https://github.com/dyndynjyxa/aio-coding-hub)|0.7k|本地 AI CLI 统一网关桌面端：多 CLI 入口、可视化监控与路由|[Zread](https://zread.ai/dyndynjyxa/aio-coding-hub)|
|[AI CLI Complete Notify](https://github.com/ZekerTop/ai-cli-complete-notify)|0.4k|多通道任务完成提醒（桌面+CLI）：飞书/钉钉/企微/Telegram/邮件|[GitHub](https://github.com/ZekerTop/ai-cli-complete-notify)|
|[ccg-gateway](https://github.com/mos1128/ccg-gateway)|0.2k|Claude Code / Codex / Gemini 三合一代理网关桌面端|[Zread](https://zread.ai/mos1128/ccg-gateway)|

### 路由代理与 API 网关

把 CLI / 订阅转成兼容 API，或做多模型路由、负载均衡与拼车中转。远程控制台见上方「桌面：周边」中的 hapi。中转站程序分工见 [API 中转站]({{< relref "ai-programming/api-relay-station" >}})。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[LiteLLM](https://github.com/BerriAI/litellm)|60k|开源 AI 网关（Python SDK + Proxy）：100+ LLM 以 OpenAI/原生格式统一调用；成本追踪、护栏、负载均衡与日志；Bedrock/Azure/Anthropic/Vertex/vLLM 等|[GitHub](https://github.com/BerriAI/litellm)|
|[🔥CLIProxyAPI (CPA)]({{< relref "setup/cpa" >}})|53k|将多种 CLI 封装为 OpenAI/Gemini/Claude/Codex 兼容 API：多账户轮询与故障转移；流式/非流式、多模态、函数调用|[Zread](https://zread.ai/router-for-me/CLIProxyAPI)|
|[New API](https://github.com/QuantumNous/new-api)|49k|统一模型聚合与分发网关：OpenAI / Claude / Gemini 协议互转；额度、倍率、渠道管理（个人与企业）|[GitHub](https://github.com/QuantumNous/new-api)|
|[Sub2API](https://github.com/Wei-Shaw/sub2api)|42k|开源 API 网关：Claude / OpenAI / Gemini / Antigravity 等订阅转兼容 API；Key 分发、计费、调度、限流与拼车|[Zread](https://zread.ai/Wei-Shaw/sub2api)|
|[🔥Claude Code Router](https://github.com/musistudio/claude-code-router)|37k|Claude Code 请求路由到任意模型；自定义分发逻辑；无需 Anthropic 账号；支持 DeepSeek/Gemini/Groq 等|[Zread](https://zread.ai/musistudio/claude-code-router)|
|[FreeLLMAPI](https://github.com/tashfeenahmed/freellmapi)|31k|本机一个 `/v1` 聚合 30+ 家免费档 LLM（及自备 OpenAI 兼容端点）：智能路由、故障转移、密钥加密；仅个人实验|[GitHub](https://github.com/tashfeenahmed/freellmapi)|
|[opencodex](https://github.com/lidge-jun/opencodex)|17k|Codex / Claude Code 通用 Provider 代理：任意 LLM（Claude、Gemini、Grok、DeepSeek、Ollama 等）接 Codex CLI/App/SDK 与 Claude Code|[GitHub](https://github.com/lidge-jun/opencodex)|
|[claude-relay-service (crs)](https://github.com/Wei-Shaw/claude-relay-service)|13k|Claude Code 镜像中转与拼车，多用户共享转发|[Zread](https://zread.ai/Wei-Shaw/claude-relay-service)|
|[Bifrost](https://github.com/maximhq/bifrost)|8.7k|企业向高性能 AI 网关：OpenAI 兼容统一接入 23+ 供应商；故障转移、负载均衡、语义缓存、护栏与 MCP；零配置 `npx`/Docker 起；Web UI 监控；Apache-2.0|[官网](https://www.getmaxim.ai/bifrost)|
|[gpt-load](https://github.com/tbphp/gpt-load)|7.0k|多通道 API Key 轮询与负载均衡，自动容错|[Zread](https://zread.ai/tbphp/gpt-load)|
|[axonhub](https://github.com/looplj/axonhub)|5.3k|AI 流量网关 + RBAC / 多租户权限|[Zread](https://zread.ai/looplj/axonhub)|
|[magpie](https://github.com/yetone/magpie)|5.1k|本机网关：任意 Agent（Claude Code / Codex / Gemini CLI 等）接任意模型；OpenAI / Anthropic / Gemini 协议互转；Claude/ChatGPT/Copilot 订阅共享；智能路由与故障转移；菜单栏 + CLI/TUI；MIT|[官网](https://usemagpie.ai/zh/)|
|[ccx](https://github.com/BenedictKing/ccx)|4.0k|个人向极简 API 网关，快速配置、轻量使用|[Zread](https://zread.ai/BenedictKing/ccx)|
|[metapi](https://github.com/cita-777/metapi)|3.3k|聚合 New API / One API / Sub2API 等中转站为单一入口与密钥|[Zread](https://zread.ai/cita-777/metapi)|
|[octopus](https://github.com/bestruirui/octopus)|2.6k|个人向 LLM API 聚合与负载均衡；OpenAI ↔ Anthropic 协议转换|[Zread](https://zread.ai/bestruirui/octopus)|
|[Aether](https://github.com/fawney19/Aether)|1.5k|多租户 AI 基础设施网关：Claude / OpenAI / Gemini 及 CLI 统一接入|[Zread](https://zread.ai/fawney19/Aether)|
|[ccNexus](https://github.com/lich0821/ccNexus)|1.0k|Claude Code 端点轮换代理：故障转移；兼容 OpenAI / Gemini 格式|[Zread](https://zread.ai/lich0821/ccNexus)|

### 终端增强与 CLI Agent

AI 原生终端、Coding Agent Harness、网站转 CLI / 登录态浏览器自动化，以及终端内状态栏 / 多 Agent 协作。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[🔥Pi](https://github.com/earendil-works/pi)|109k|可自扩展的极简终端 Coding Agent：多厂商 LLM、工具运行时、差分 TUI；用 Extensions/Skills 扩展而非 fork 内核|[Zread](https://zread.ai/earendil-works/pi)|
|[Warp](https://github.com/warpdotdev/warp)|65k|AI 原生终端：命令补全、命令块、工作流与团队协作|[Zread](https://zread.ai/warpdotdev/warp)|
|[DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)|36k|DeepSeek 原生终端 Agent（[reasonix.io](https://reasonix.io/)）：prefix-cache 友好、长时自主；终端/桌面/浏览器/ACP；`reasonix.toml` 驱动 MCP/Plan/沙箱|[GitHub](https://github.com/esengine/DeepSeek-Reasonix)|
|[oh-my-pi (omp)](https://github.com/can1357/oh-my-pi)|33k|[Pi](https://github.com/earendil-works/pi) fork（[omp.sh](https://omp.sh)）：内置 LSP/DAP、子 Agent、Hashline 编辑；Rust 核心；跨平台|[GitHub](https://github.com/can1357/oh-my-pi)|
|[OpenCLI](https://github.com/jackwener/opencli)|30k|网站 / 已登录 Chrome / Electron 应用变成确定性 CLI：内置 B站/知乎/小红书等 100+ 适配；Agent 经 `opencli browser` 操作登录态浏览器；可选 OpenCLIApp|[Zread](https://zread.ai/jackwener/OpenCLI)|
|[Claude HUD](https://github.com/jarrodwatts/claude-hud)|28k|Claude Code statusline HUD：上下文占用、工具/Agent/Todo、可选 Git 与用量|[Zread](https://zread.ai/jarrodwatts/claude-hud)|
|[cmux](https://cmux.com/zh-CN)|27k|基于 libghostty 的原生 macOS 终端：垂直标签、Agent 通知环、分屏、可编程浏览器；适合 CLI Agent|[GitHub](https://github.com/manaflow-ai/cmux)|
|[jcode](https://github.com/1jehuang/jcode)|20k|轻量命令行开发辅助，作 Claude Code 周边补充|[Zread](https://zread.ai/1jehuang/jcode)|
|[Kaku](https://github.com/tw93/Kaku)|6.0k|WezTerm 深度定制终端（仅 macOS）：零配置、内置 AI 助手与 lazygit/yazi；可接 Claude Code / Codex / Gemini CLI|[GitHub](https://github.com/tw93/Kaku)|
|[claude_code_bridge (ccb)](https://github.com/bfly123/claude_code_bridge)|3.5k|分屏终端联动 Claude / Codex / Gemini / OpenCode；Windows 用 WezTerm，Linux/macOS/WSL 用 tmux|[Zread](https://zread.ai/bfly123/claude_code_bridge)|
|[CCometixLine](https://github.com/Haleclipse/CCometixLine)|3.5k|Rust 写的 Claude Code 状态栏与 TUI：Git、用量、交互配置|[Zread](https://zread.ai/Haleclipse/CCometixLine)|
|[Pebrel](https://github.com/Kuddev/pebrel)|2.6k|GPU 加速 AI 原生终端（Rust+GPUI，原 Nebula）：分屏/标签、SSH/SFTP、会话常驻；Claude Code / Codex 等 CLI 活动态与 Markdown 阅读器；Win 稳定，macOS/Linux Preview|[GitHub](https://github.com/Kuddev/pebrel)|
|[tty7](https://github.com/l0ng-ai/tty7)|1.2k|持久化终端工作台（纯 Rust + gpui）：关窗 shell 仍跑、重启可恢复；Agent 感知（28+ CLI 状态/通知/resume）；CLI+Skills 让 Agent 开 pane/交接；原生 SSH 远程；macOS/Win/Linux|[官网](https://tty7.io)|
|[Otty](https://otty.sh/)|—|GPU 加速终端：CLI Agent 并行监控、Prompt 队列、会话分叉与 Web 预览；当前 macOS Apple Silicon|[官网](https://otty.sh/)|

### 记忆、检索与跨 Agent 交接

换 CLI、换机器、换会话时，把「做到哪、试过什么、还开着什么问题」带过去，而不是只靠各家自带的 `MEMORY.md`。进模型前压 tool 输出、本机代码库索引 / 混合检索（经 MCP 或 CLI 喂给 Agent），以及底层内容搜（`rg`）与找文件（`fd` / `find`）也放这里。`rg` / `fd` 安装见 [开发环境准备]({{< relref "ai-programming/dev-start" >}})。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[headroom](https://github.com/headroomlabs-ai/headroom)|74k|进 LLM 前压缩 tool 输出 / 日志 / 文件 / RAG：编码 Agent 约少 20% token，JSON 可少 60–95%；库、本地代理、MCP；可 `wrap` Claude Code / Codex / Cursor|[GitHub](https://github.com/headroomlabs-ai/headroom)|
|[Codegraph](https://github.com/colbymchenry/codegraph)|73.6k|预索引本地代码知识图谱（SQLite + tree-sitter），文件变更自动同步；经 MCP 提供 explore/search/callers/callees/impact，减少 Explore 子代理的 grep/Read；100% 本地，覆盖 Claude Code / Codex / Cursor 等|[GitHub](https://github.com/colbymchenry/codegraph)|
|[ripgrep](https://github.com/BurntSushi/ripgrep)|68.9k|递归正则内容搜索（`rg`）：尊重 `.gitignore`、快；多数 Coding Agent / CLI 的仓库扫描强依赖，缺则常见 `spawn rg ENOENT`|[GitHub](https://github.com/BurntSushi/ripgrep)|
|[fd](https://github.com/sharkdp/fd)|44.7k|现代 `find`：按文件名 / 路径模式快速找文件；与 `rg` 互补（`fd` 找路径，`rg` 搜内容）；Agent 提示里也常直接写 `fd`|[GitHub](https://github.com/sharkdp/fd)|
|[TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)|28k|腾讯云团队级 Agent 记忆中枢：对话 / 文档 / 代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph，跨 Agent 治理与共享|[GitHub](https://github.com/TencentCloud/TencentDB-Agent-Memory)|
|[context-mode](https://github.com/mksglu/context-mode)|25.7k|编码 Agent 上下文优化（MCP + hooks）：沙箱 tool 输出约省 98%、SQLite 会话记忆、强制「用代码分析」路由；覆盖 Claude Code / Codex / Cursor 等 17 端|[官网](https://context-mode.com)|
|[Zvec](https://zvec.org/zh/)|16k|本地优先检索：嵌入式向量库（[alibaba/zvec](https://github.com/alibaba/zvec)）+ 工作区混合检索 [Zvec-Grep](https://github.com/zvec-ai/zvec-grep)（`zg` CLI / MCP）；精确 / BM25 / 向量 / 混合，证据带路径·符号·行号；接 Claude Code / Codex / Cursor 等|[官网](https://zvec.org/zh/)|
|[ai-memory](https://github.com/akitaonrails/ai-memory)|8.8k|编码 Agent 长期记忆：Hooks 静默捕获、git 版 Markdown wiki 为真源、默认零 LLM；Claude Code / Codex / Cursor 等 20+ harness 共享，可跨机器与按项目团队检索；Linux/macOS 正式，Windows 建议 WSL2|[GitHub](https://github.com/akitaonrails/ai-memory)|
|[RepoWise](https://github.com/repowise-dev/repowise)|7.2k|本机代码库智能：调用图 / git 分析 / 健康分 / 死代码 / 决策沉淀；经 MCP 给 Claude Code / Codex / Cursor 等；本地 dashboard，图与健康分零 LLM；AGPL|[官网](https://repowise.dev/)|

### 配置脚本与编辑器插件

一键环境初始化、CLI 配置切换，以及 IDE / Web 侧辅助工具。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[paseo.sh](https://github.com/getpaseo/paseo)|18k|Claude Code 相关在线能力与资源入口|[Zread](https://zread.ai/getpaseo/paseo)|
|[IDEA Claude Code GUI Plugin](https://github.com/zhukunpenglinyutong/idea-claude-code-gui)|6.5k|IntelliJ 插件：Claude Code / Codex 可视化；@file、DIFF、MCP/Skills、权限控制|[Zread](https://zread.ai/zhukunpenglinyutong/idea-claude-code-gui)|
|[🔥ZCF (Zero Config)]({{< relref "setup/zcf" >}})|6.1k|零配置一键搞定 Claude Code & Codex：中英双语、智能代理、个性化助手|[Zread](https://zread.ai/UfoMiao/zcf)|
|[cc-switch-cli](https://github.com/SaladDay/cc-switch-cli)|5.2k|cc-switch 的 CLI 版：无 GUI 环境下切换全局配置、MCP 与提示词|[Zread](https://zread.ai/SaladDay/cc-switch-cli)|
|[TeamAI](https://github.com/Tencent/teamai-cli)|5.0k|腾讯开源团队 AI Native 底座：Git 共享 Skills / Rules / MCP / Agents；`teamai init` 同步；覆盖 Claude Code / Codex / Cursor / CodeBuddy|[GitHub](https://github.com/Tencent/teamai-cli)|
|[GPTSession2CPAandSub2API](https://github.com/gtxx3600/GPTSession2CPAandSub2API)|1.8k|纯前端：ChatGPT Web session → CPA / Sub2API 等可导入 JSON；本地解析不上传 token|[GitHub](https://github.com/gtxx3600/GPTSession2CPAandSub2API)|
|[Claudix](https://github.com/Haleclipse/Claudix)|1.1k|VS Code 的 Claude Code 增强扩展|[GitHub](https://github.com/Haleclipse/Claudix)|
|[Claude Code Quickstart (CCQ)](https://github.com/MrNine-666/claude-code-quickstart)|0.2k|Windows PowerShell 一键安装器：依赖、供应商与 MCP 初始化|[Zread](https://zread.ai/MrNine-666/claude-code-quickstart)|
