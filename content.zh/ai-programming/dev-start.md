---
aliases:
  - /setup/dev-start/
title: 开发环境准备
weight: 40
bookToc: true
bookHidden: false
---

## 概述

在进入 AI 编程工具配置之前，需要先搭建基础开发环境。本文列出常用软件及安装顺序，可按需选用。

## 基础工具（必装）

现代 AI Coding Agent（例如 [OpenAI Codex CLI](https://github.com/openai/codex)、[Claude Code](https://www.anthropic.com/claude-code)、[Aider](https://github.com/Aider-AI/aider)）本质上多是下面这条链路，而不是「单靠 IDE 插件」：

```text
LLM + Shell + Git + 搜索工具 + Patch 工具
```

因此，**终端与命令行工具是否齐全**，会直接影响 Agent 能否稳定跑通 `grep` / `diff` / `patch` / 测试脚本。只装 `ripgrep` 往往不够；在 Windows 上建议用 **winget** 一次性把常用层补齐。

### 最低推荐组合（一键改善体验）

下面这一组对 **Codex、Claude Code、MCP、skills、superpowers、Aider** 等都很友好；日常开发也同样受益（脚本、工具链、CLI 依赖）：

```powershell
winget install Git.Git
winget install OpenJS.NodeJS.LTS
winget install BurntSushi.ripgrep.MSVC
winget install sharkdp.fd
winget install jqlang.jq
winget install Microsoft.PowerShell
winget install Microsoft.WindowsTerminal
```

装完后建议新开 **Windows Terminal**，默认 shell 选 **PowerShell 7**（`pwsh`），再验证各命令是否进 PATH。

### 分层说明（按需对照）

#### 必装层

**1. ripgrep（`rg`）** — Agent 与工具链里最常用的「快搜」之一。

```powershell
winget install BurntSushi.ripgrep.MSVC
```

**2. Git** — 多数 Agent 默认依赖 `git diff` / `status` / patch 流程；版本控制也是工作流基础。

```powershell
winget install Git.Git
```

验证：

```powershell
git --version
```

**3. Node.js（含 npm / npx）** — 很多 Agent 与周边用 `npm` / `npx` 启动（Codex、Claude Code、大量 MCP、skills 等）。

```powershell
winget install OpenJS.NodeJS.LTS
```

验证：

```powershell
node -v
npm -v
npx -v
```

官网备用说明：[nodejs.org](https://nodejs.org/zh-cn)（建议长期跟 LTS）。

#### 强烈建议

**4. fd** — 比传统 `find` 更符合日常习惯，Agent 也常在提示里用 `fd`。

```powershell
winget install sharkdp.fd
```

验证：`fd --version`

补充：`rg`（ripgrep）和 `fd` 经常被一起提到，职责完全不同，属于「工具链互补」而不是「互相替代」。**不是同一个作者，很多人会搞混这点**：

- **`rg` (ripgrep)**：作者是 Andrew Gallant，网名 [BurntSushi](https://github.com/BurntSushi)
- **`fd` (fd-find)**：作者是 David Peter，网名 [sharkdp](https://github.com/sharkdp)（同时也是 `bat`、`hyperfine` 这些知名 Rust CLI 工具的作者）

| 工具 | 本质 | 主要替代 |
| --- | --- | --- |
| `rg` (ripgrep) | **内容搜索**（在文件里找字符串/正则） | `grep` |
| `fd` | **文件查找**（按文件名/路径模式找文件） | `find` |

**5. bat** — 带语法高亮的「增强 cat」，不少示例会直接写 `bat 某文件`。

```powershell
winget install sharkdp.bat
```

Windows 上（含 `winget install sharkdp.bat`）命令名一般是 `bat`。`batcat` 主要出现在部分 Debian/Ubuntu 包装里（与旧包名冲突），不是 Windows 常态。

如果你不想额外安装 `bat`，PowerShell 原生命令 `Get-Content`（别名 `gc`）也能完成基础查看文件内容的需求。

**6. jq** — 处理 `package.json`、MCP 配置、API JSON 时几乎必备。

```powershell
winget install jqlang.jq
```

#### 开发环境层

**7. Python** — 不少 MCP、脚本、索引/embedding 相关工具会间接调用 Python。

```powershell
winget install Python.Python.3.12
```

安装时勾选「Add Python to PATH」，并确认可用 `pip`。官网：[python.org](https://www.python.org/)

**8. uv** — 新一代 Python 包管理/运行工具，越来越多 AI 周边默认支持。

```powershell
winget install astral-sh.uv
```

#### 终端与 Shell

**9. PowerShell 7** — Windows 自带的 Windows PowerShell 5.x 偏旧；Agent 在 **PowerShell 7（`pwsh`）** 下通常更稳。

```powershell
winget install --id Microsoft.PowerShell --source winget
```

安装完成后，在 **Windows Terminal** 里将 PowerShell 7 设为默认配置文件。文档：[PowerShell](https://learn.microsoft.com/powershell/)

**10. Windows Terminal** — 统一托管多个配置文件与 UTF-8 体验，尽量避免长期蹲在旧版 `cmd` 里跑 Agent。

```powershell
winget install Microsoft.WindowsTerminal
```

#### 可选但很有价值

**11. delta** — 美化 `git diff`，Agent 大量读 diff 时更省力。

```powershell
winget install dandavison.delta
```

**12. lazygit** — 终端里的 Git TUI，和「命令行优先」的 AI 编程工作流很搭。

```powershell
winget install JesseDuffield.lazygit
```

### 核心认知：终端质量 ≈ Agent 体验

可以把现代 AI coding 工具理解成 **shell agent**：会跑命令、会搜索、会打 patch、会读 Git、会跑测试、会扫目录。若环境缺 `rg` / `fd` / `jq`、PowerShell 过老、PATH 或编码（UTF-8）混乱，容易出现「模型变笨」的错觉——**往往是工具链没就位**。先把本节工具装齐，再调模型与提示词，性价比更高。

## 可选工具

### 1. 代码编辑器

**VS Code** 仍是主流编辑器，也是不少 AI 编程工具的常见宿主环境：Cursor 基于 VS Code 衍生；Claude Code 等则以终端 CLI 为主，并另有 VS Code 扩展。建议优先装好 VS Code（或 Cursor），再按需接 CLI / 扩展。

- 官网：[code.visualstudio.com](https://code.visualstudio.com/)
- 可选：JetBrains IDE、Vim/Neovim、[Zed](https://zed.dev/) | [Zed-ZH](https://github.com/x6nux/zed-globalization/releases) 等


### 2. Markdown

个人知识库与笔记工具，适合整理 AI 编程笔记、提示词和项目文档。

- 笔记：[Obsidian](https://obsidian.md/)、[Markpad](https://markpad.sftwr.dev/)、[Moraya](https://moraya.app/zh/)、[HorseMD](https://horsemd.yangsir.net/)
- 文档排版：[Quarkdown](https://quarkdown.com/)（Markdown 超集，可输出分页文档、笔记站点、文档站与幻灯片）

### 3. 网络与代理

使用Google或ChatGPT等需要科学上网工具。

- 客户端 [Clash Verge](https://www.clashverge.dev/install.html) 、 [Clash Party](https://clashparty.org/)、[FlClash](https://flclash.cc/download.html)
- [NoMoreWalls 免费公开节点](https://github.com/peasoft/NoMoreWalls) 、[低价机场推荐](https://github.com/DiningFactory/panda-vpn-pro) 、 [便宜好用评测](https://www.ermao.net/posts/vpn/)、 [最优的科学上网方案](https://github.com/githubvpn007/v2rayNvpn)

注意：网络访问与代理工具的使用受所在地法律法规约束，请自行确认合规后再使用。

### 4. AI 客户端（调测）
在接入 Cursor、Claude Code 等「编程向」工具之前，用独立客户端先完成 **API 配置、模型连通性、提示词试跑与流式输出观察**，能快速区分是网络/密钥问题还是 IDE 插件问题。

- Cherry-AI：[cherry-ai.com](https://cherry-ai.com/)
- Chatbox-AI：[chatboxai.app](https://chatboxai.app/)
- Jan-AI：[jan.ai](https://jan.ai/)

### 5. Google 邮箱（账号）

目前注册 Google 账号非常复杂甚至不可能，可考虑通过第三方购买现成账号。

- 购买入口 1：[https://wzyp.cn/shop/2VWX76A4](https://wzyp.cn/shop/2VWX76A4)
- 购买入口 2：[https://pay.ldxp.cn/shop/AEUQ8PP3](https://pay.ldxp.cn/shop/AEUQ8PP3)


### 6. ChatGPT 账号

- 第三方镜像 / 共享入口（非官方，可用性与安全性自负）： [EasyChat 免费账号](https://easychat.top/chatgpt/free)、[AI 镜像](https://go.github.cn.com) 、 [车队列表](https://share.github.cn.com/list)  、 [GE Chat 地址发布页](https://home.gege.chat/)

- 购买入口：[pay.ldxp.cn/shop/xcursor](https://pay.ldxp.cn/shop/xcursor)、[wafase.com](https://wafase.com/)


### 7. 其他

- 临时邮箱：[Temp Mail](https://temp-mail.org/zh/)
、 [TempInbox](https://tempmail.easya.work/zh-CN/)
、[Cloudflare 临时邮件](https://mail.awsl.uk/)

- 指纹浏览器： [ixBrowser](https://ixbrowser.com/zh)、 [adspower](https://www.adspower.net/download/)

- 信用卡 / 支付： Bybit、Fiat24、Roogoo、[goofish](https://www.goofish.com/search?q=虚拟卡) 等

- 短信接收： [火狐狸接码平台](https://web.firefox.fun/) 
、 [HeroSMS](https://hero-sms.com/cn) 
、 [5SIM](https://5sim.net/zh) 
、 [国内免费接码平台推荐](https://topstip.com/nice-patchwork-platform/) 
