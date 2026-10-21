---
aside: false
---

# 浏览器与桌面操控


网站转 CLI / 登录态与无头浏览器自动化，以及 Windows 桌面 Computer Use；让 Agent 操作真实网页与本机 GUI。

终端与 Coding Agent Harness 见 [终端与 CLI Agent](/agent-tools/terminal-cli.html)。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[Lightpanda](https://github.com/lightpanda-io/browser)|36.7k|为 AI Agent 与自动化从零写的无头浏览器（Zig，非 Chromium/WebKit）：比 Headless Chrome 约省 16× 内存、快 9×；CDP / WebDriver BiDi，可接 Puppeteer / Playwright；`lightpanda agent` 用自然语言操作网页并导出可回放脚本；原生 MCP；Linux/macOS 与 Docker，Windows 走 WSL2；AGPL|[官网](https://lightpanda.io)|
|[OpenCLI](https://github.com/jackwener/opencli)|30.4k|网站 / 已登录 Chrome / Electron 应用变成确定性 CLI：内置 B站/知乎/小红书等 100+ 适配；Agent 经 `opencli browser` 操作登录态浏览器；可选 OpenCLIApp|[Zread](https://zread.ai/jackwener/OpenCLI)|
|[ego lite](https://github.com/citrolabs/ego-lite)|17.6k|给人与 AI Agent 并行共用的本机浏览器：Agent 在隔离 Space 跑网页自动化，可继承 Chrome 登录态；经 `ego-browser` Skill 接 Claude Code / Codex / Cursor；代码驱动（非 CLI 循环），零配置；当前 macOS，Win 内测中|[官网](https://lite.ego.app)|
|[Windows-MCP](https://github.com/CursorTouch/Windows-MCP)|9.8k|Windows 桌面 Computer Use 的 MCP：键鼠/截图/UI Snapshot、启停应用、文件系统与 PowerShell；`uvx windows-mcp`，接 Claude Code / Codex / Cursor 等；仅 Win10/11；MIT|[GitHub](https://github.com/CursorTouch/Windows-MCP)|
|[BrowserSkill](https://github.com/Tencent/BrowserSkill)|9.2k|腾讯开源：Agent 用本机已登录 Chrome/Edge（独立 Agent Window，可借还标签）；`bsk` CLI + 扩展，Skill 接 Cursor / Claude Code / Codex 等；另有 DeepSeek Harness 插件；MIT|[GitHub](https://github.com/Tencent/BrowserSkill)|
|[WebCodex](https://github.com/yyjeqhc/webcodex)|2.4k|让 ChatGPT / Claude 等云端 Agent 经 MCP 用本机真实开发环境：仓库、Git、编译/测试与工具链留在本地；Desktop/CLI/Server/Runner；可单机或自托管多机；Apache-2.0|[GitHub](https://github.com/yyjeqhc/webcodex)|
