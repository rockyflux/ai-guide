---
aside: false
---

# 多 Agent 工作区


在同一界面跑 Agent、编辑、预览与会话编排；含远程控制台与面向 Agent 的 Git 客户端。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[Orca](https://www.onorca.dev/)|96.9k|面向 AI Coding Agent 的 ADE（YC）：隔离 git worktree 并行跑 Claude Code / Codex / OpenCode；WebGL 终端、内置编辑器、SSH 远程 worktree、diff 批注回传；MIT，跨平台|[GitHub](https://github.com/stablyai/orca)|
|[Multica](https://github.com/multica-ai/multica)|53.1k|人与 AI Agent 同看板协作：把 Issue 派给 Claude Code / Codex / Cursor 等 26+ CLI；本机 daemon 跑代码、执行日志与 Review 门禁；可自托管（Docker/Helm），Web/桌面/移动端|[官网](https://multica.ai)|
|[Buzz](https://github.com/block/buzz)|36.1k|Block 开源：人与 Agent 同房间协作的可自托管工作区（Nostr relay）；频道/补丁/CI/审批同一事件流；桌面（Tauri）+ `buzz-cli`（JSON I/O）+ ACP（Goose/Codex/Claude Code）；Apache-2.0|[GitHub](https://github.com/block/buzz)|
|[AionUi](https://github.com/iOfficeAI/AionUi)|33.6k|跨平台 AI 编程桌面客户端：CoWork 协作、多引擎集成|[Zread](https://zread.ai/iOfficeAI/AionUi)|
|[T3 Code](https://github.com/pingdotgg/t3code)|28.4k|Agent harness 控制面：用本机已登录的 Claude Code / Codex / Cursor / Grok Build / OpenCode / Antigravity；Electron 桌面 + Web + iOS/Android；远程从手机/另一台机器操控；开源 MIT|[官网](https://t3.codes)|
|[happy](https://github.com/slopus/happy)|24.2k|Claude Code / Codex 端到端加密客户端，覆盖桌面、移动与 Web|[Zread](https://zread.ai/slopus/happy)|
|[GitButler](https://github.com/gitbutlerapp/gitbutler)|21.8k|面向 AI/Agent 的 Git 客户端（GUI + `but` CLI，Tauri/Rust/Svelte）：并行/堆叠分支、易改 commit、无限撤销、冲突可延后；内置 AI 写 commit/PR；可装 hooks/skills 给各 Agent 管 Git|[官网](https://gitbutler.com)|
|[OpenChamber](https://openchamber.dev/zh/)|11.8k|基于 OpenCode 的开源智能体开发环境：桌面 / PWA / VS Code / 移动端；Session Goals、多模型 Multi-run、Issue→PR、Private Relay|[GitHub](https://github.com/openchamber/openchamber)|
|[Octop](https://github.com/TencentCloud/Octop)|9.9k|腾讯云开源自托管多用户多 Agent：Web/CLI/桌面；IM 通道；ACP 对接 OpenCode / Claude Code / Codex|[GitHub](https://github.com/TencentCloud/Octop)|
|[Terax](https://github.com/crynta/terax-ai)|9.3k|约 7MB 的 Terminal-first 工作区（Tauri2）：WebGL 多标签终端、Agent 侧栏、CodeMirror、Git 图谱；无遥测|[Zread](https://zread.ai/crynta/terax-ai)|
|[PI-Desktop](https://github.com/vastsa/pi-desktop)|7.0k|基于 [Pi](https://github.com/earendil-works/pi) 的 Local-first 桌面工作区：Agent/Plan/Goal、Subagent 编排、插件市场；可导入多端会话|[GitHub](https://github.com/vastsa/pi-desktop)|
|[hapi](https://github.com/tiann/hapi)|5.3k|Web / Telegram 远程 AI 编程控制台|[Zread](https://zread.ai/tiann/hapi)|
|[PilotDeck](https://github.com/OpenBMB/PilotDeck)|4.7k|清华 THUNLP / OpenBMB 等开源任务向 Agent 生产力平台：WorkSpace 隔离文件/记忆/Skills；白盒可追溯记忆、智能路由省 token、Always-on 后台执行；Web/CLI/IM，原生 MCP；AGPL|[官网](https://pilotdeck.openbmb.cn)|
|[Desktop CC GUI](https://github.com/zhukunpenglinyutong/desktop-cc-gui)|4.5k|开源 VibeCoding 桌面端：Claude Code / Codex / OpenCode；终端、Git、看板、MCP/Skills、多 Agent 并行|[Zread](https://zread.ai/zhukunpenglinyutong/desktop-cc-gui)|
|[codeg](https://github.com/xintaofei/codeg)|4.0k|聚合 Claude Code / Codex / Gemini CLI 等会话的工作台；桌面或自托管 Docker|[GitHub](https://github.com/xintaofei/codeg)|
|[LiveAgent](https://github.com/Stack-Cairn/LiveAgent)|2.2k|Local-first Agent 桌面端：多模型路由、子 Agent/worktree、MCP/Skills、可选 Gateway WebUI|[Zread](https://zread.ai/Stack-Cairn/LiveAgent)|
|[Nezha](https://github.com/hanshuaikang/nezha)|1.9k|Agent-First 桌面 IDE：并行多 Claude Code / Codex；会话回放、轻量编辑器、Token 统计（约 7MB）|[Zread](https://zread.ai/hanshuaikang/nezha)|
|[ProxyCast](https://github.com/aiclientproxy/proxycast)|1.5k|创作者向 Agent 工作台（写作/出图/改稿）；非纯 Coding IDE|[Zread](https://zread.ai/aiclientproxy/proxycast)|
|[Any Code](https://github.com/anyme123/Any-code)|1.3k|多引擎 AI 代码助手 GUI：Claude Code / Codex / Gemini CLI 切换；成本追踪、MCP、Hooks|[Zread](https://zread.ai/anyme123/Any-code)|
|[CLI-Manager](https://github.com/dark-hxx/CLI-Manager)|0.8k|跨平台 AI CLI 工作台（Tauri）：本地/SSH 终端、多项目与 Worktree、Claude Code/Codex 深度集成（Hook 通知、会话 Diff、用量看板）；cc-switch 项目级供应商切换；Telegram/飞书手机对话|[GitHub](https://github.com/dark-hxx/CLI-Manager)|
|[diri](https://github.com/cristicretu/diri)|0.5k|多 Agent 并行工作区（Rust+GPUI）：Claude Code / Codex / Cursor / Gemini 等 22+ CLI 并排；独立 worktree、MCP 让 Agent 互相拉起；侧栏状态与 diff 审阅；会话进程独立于 App；本地或 SSH；macOS 正式，Linux beta|[官网](https://diri.sh)|
|[OpenCow](https://github.com/OpenCowAI/opencow)|0.4k|任务驱动自治 Agent 平台：每任务一 Agent，并行交付；桌面端 + 本地 MCP|[GitHub](https://github.com/OpenCowAI/opencow)|
|[Todos](https://todos.dev/zh)|—|人与 Agent 的任务驱动工作台：一个工作台调度所有 Agent，分配模型和角色，并行协作，高效交付|[官网](https://todos.dev/zh)|
|[ZCode](https://zcode.z.ai/cn)|—|智谱 GLM 官方氛围编程桌面端：多智能体、Goal 长程任务、IM Bot 远程唤起|[BigModel](https://www.bigmodel.cn/glm-coding)|
|[Alma](https://alma.now/)|—|AI Provider 编排桌面端：多厂 API 切换、聊天、记忆与工具调用；主测 macOS Apple Silicon|[官网](https://alma.now/)|
