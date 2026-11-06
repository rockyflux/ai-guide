---
aside: false
---

# 终端与 CLI Agent


AI 原生终端、Coding Agent Harness，以及终端内状态栏 / 分屏联动 / 任务完成通知。

浏览器自动化、本机 Computer Use 见 [浏览器与桌面操控](/agent-tools/browser-desktop.html)。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[🔥Pi](https://github.com/earendil-works/pi)|120.3k|可自扩展的极简终端 Coding Agent：多厂商 LLM、工具运行时、差分 TUI；用 Extensions/Skills 扩展而非 fork 内核|[Zread](https://zread.ai/earendil-works/pi)|
|[Warp](https://github.com/warpdotdev/warp)|65.9k|AI 原生终端：命令补全、命令块、工作流与团队协作|[Zread](https://zread.ai/warpdotdev/warp)|
|[herdr](https://github.com/herdrdev/herdr)|48.3k|Coding Agent 运行时（Rust 单二进制）：后台保活终端、多机同窗、pane 工作/阻塞/空闲态；托管而非包装 Claude Code / Codex / Cursor 等；Agent 可经 CLI/socket 开 pane；Apache-2.0|[官网](https://herdr.dev)|
|[oh-my-pi (omp)](https://github.com/can1357/oh-my-pi)|38k|[Pi](https://github.com/earendil-works/pi) fork（[omp.sh](https://omp.sh)）：内置 LSP/DAP、子 Agent、Hashline 编辑；Rust 核心；跨平台|[GitHub](https://github.com/can1357/oh-my-pi)|
|[DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)|36.1k|DeepSeek 原生终端 Agent（[reasonix.io](https://reasonix.io/)）：prefix-cache 友好、长时自主；终端/桌面/浏览器/ACP；`reasonix.toml` 驱动 MCP/Plan/沙箱|[GitHub](https://github.com/esengine/DeepSeek-Reasonix)|
|[Claude HUD](https://github.com/jarrodwatts/claude-hud)|29.1k|Claude Code statusline HUD：上下文占用、工具/Agent/Todo、可选 Git 与用量|[Zread](https://zread.ai/jarrodwatts/claude-hud)|
|[cmux](https://cmux.com/zh-CN)|28.7k|基于 libghostty 的原生 macOS 终端：垂直标签、Agent 通知环、分屏、可编程浏览器；适合 CLI Agent|[GitHub](https://github.com/manaflow-ai/cmux)|
|[jcode](https://github.com/1jehuang/jcode)|21.5k|轻量命令行开发辅助，作 Claude Code 周边补充|[Zread](https://zread.ai/1jehuang/jcode)|
|[Kaku](https://github.com/tw93/Kaku)|6.2k|WezTerm 深度定制终端（仅 macOS）：零配置、内置 AI 助手与 lazygit/yazi；可接 Claude Code / Codex / Gemini CLI|[GitHub](https://github.com/tw93/Kaku)|
|[Pebrel](https://github.com/Kuddev/pebrel)|3.7k|GPU 加速 AI 原生终端（Rust+GPUI，原 Nebula）：分屏/标签、SSH/SFTP、会话常驻；Claude Code / Codex 等 CLI 活动态与 Markdown 阅读器；Win 稳定，macOS/Linux Preview|[GitHub](https://github.com/Kuddev/pebrel)|
|[claude_code_bridge (ccb)](https://github.com/bfly123/claude_code_bridge)|3.6k|分屏终端联动 Claude / Codex / Gemini / OpenCode；Windows 用 WezTerm，Linux/macOS/WSL 用 tmux|[Zread](https://zread.ai/bfly123/claude_code_bridge)|
|[CCometixLine](https://github.com/Haleclipse/CCometixLine)|3.5k|Rust 写的 Claude Code 状态栏与 TUI：Git、用量、交互配置|[Zread](https://zread.ai/Haleclipse/CCometixLine)|
|[tty7](https://github.com/l0ng-ai/tty7)|1.4k|持久化终端工作台（纯 Rust + gpui）：关窗 shell 仍跑、重启可恢复；Agent 感知（28+ CLI 状态/通知/resume）；CLI+Skills 让 Agent 开 pane/交接；原生 SSH 远程；macOS/Win/Linux|[官网](https://tty7.io)|
|[AI CLI Complete Notify](https://github.com/ZekerTop/ai-cli-complete-notify)|0.4k|多通道任务完成提醒（桌面+CLI）：飞书/钉钉/企微/Telegram/邮件|[GitHub](https://github.com/ZekerTop/ai-cli-complete-notify)|
|[Otty](https://otty.sh/)|—|GPU 加速终端：CLI Agent 并行监控、Prompt 队列、会话分叉与 Web 预览；当前 macOS Apple Silicon|[官网](https://otty.sh/)|
