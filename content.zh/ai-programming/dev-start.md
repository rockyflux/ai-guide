---
title: 开发环境：一站式准备
weight: 14
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

官方下载页：[ripgrep.dev/download](https://ripgrep.dev/download/)

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

补充：`rg`（ripgrep）和 `fd` 经常被一起提到，甚至 **是同一个作者 Andrew Gallant 的作品**；但它们职责完全不同，属于「工具链互补」而不是「互相替代」。

| 工具 | 本质 | 主要替代 |
| --- | --- | --- |
| `rg` (ripgrep) | **内容搜索**（在文件里找字符串/正则） | `grep` |
| `fd` | **文件查找**（按文件名/路径模式找文件） | `find` |

**5. bat** — 带语法高亮的「增强 cat」，不少示例会直接写 `bat 某文件`。

```powershell
winget install sharkdp.bat
```

在 Windows 上可执行名可能是 `bat` 或 `batcat`，以 `winget` 安装后的实际命令为准。

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
winget install jesseduffield.lazygit
```

### 核心认知：终端质量 ≈ Agent 体验

可以把现代 AI coding 工具理解成 **shell agent**：会跑命令、会搜索、会打 patch、会读 Git、会跑测试、会扫目录。若环境缺 `rg` / `fd` / `jq`、PowerShell 过老、PATH 或编码（UTF-8）混乱，容易出现「模型变笨」的错觉——**往往是工具链没就位**。先把本节工具装齐，再调模型与提示词，性价比更高。

## 可选工具

### 1. 代码编辑器

**VS Code** 仍是 AI 编程工具（Cursor、Claude Code、OpenCode 等）的常见基座，建议首选。

- 官网：[code.visualstudio.com](https://code.visualstudio.com/)
- 可选：JetBrains IDE、Vim/Neovim、[Zed](https://zed.dev/) 等
- **Zed 汉化版（ZedG）**：社区维护的 Zed 多语言构建，界面已翻译为简体中文（亦支持繁中/日语/韩语），并附带 Agent 环境变量透传等补丁。适合想用 Zed 但偏好中文界面的用户。
  - 项目：[x6nux/zed-globalization](https://github.com/x6nux/zed-globalization)
  - Windows 安装（Scoop）：

    ```powershell
    scoop bucket add zedg https://github.com/x6nux/scoop-zedg
    scoop install zedg
    ```

  - 也可从 [Releases](https://github.com/x6nux/zed-globalization/releases) 下载预编译包手动解压运行

### 2. Obsidian

个人知识库与笔记工具，适合整理 AI 编程笔记、提示词和项目文档。

- 官网：[obsidian.md](https://obsidian.md/)

### 3. 网络与代理

使用Google或ChatGPT等需要科学上网工具。

- [客户端：Clash Verge](https://www.clashverge.dev/install.html)
- [客户端：Clash Party](https://clashparty.org/)
- [客户端 FlClash：适用于 Clash 的多功能图形用户界面。](https://flclash.cc/download.html)
- [🚁🚀 2026低价机场推荐](https://github.com/DiningFactory/panda-vpn-pro)
- [2026年便宜好用的翻墙机场推荐评测(科学上网长期更新)](https://www.ermao.net/posts/vpn/)
- [最优的科学上网方案](https://github.com/githubvpn007/v2rayNvpn)

注意：网络访问与代理工具的使用受所在地法律法规约束，请自行确认合规后再使用。第三方客户端、订阅/机场服务存在隐私泄露、跑路、日志政策不透明等风险，链接仅供信息参考，不构成推荐或担保；重要流量请优先选择可信方案并做好账号与设备安全。

### 4. AI 客户端（调测）

在接入 Cursor、Claude Code 等「编程向」工具之前，用独立客户端先完成 **API 配置、模型连通性、提示词试跑与流式输出观察**，能快速区分是网络/密钥问题还是 IDE 插件问题。

#### Cherry-AI

一站式 AI 开发与工具聚合环境（具体能力与套餐以官网为准），适合希望少装几个独立应用、在同一工作台里完成多模型与周边能力的用户。

- 官网：[cherry-ai.com](https://cherry-ai.com/)

#### Chatbox

开源/跨平台的对话客户端，支持自定义 Base URL 与多家 API，适合 **本地或云端密钥调试**、对比不同模型回复、以及日常轻量问答（非编程场景也可复用同一套配置）。

- 官网：[chatboxai.app](https://chatboxai.app/)
- Web 版：[web.chatboxai.app](https://web.chatboxai.app/)

### 5. Google 邮箱（账号）

目前个人想注册 Google 账号非常复杂甚至不可能（时区、定位、语言、IP、手机验证码等限制），如果你只是为了完成开发环境准备（例如登录某些开发者工具、同步浏览器配置、使用部分 AI 平台），可考虑通过第三方购买现成账号。

- 购买入口 2：[ai666.dnxb.cc/cat/3](https://ai666.dnxb.cc/cat/3)
- 购买入口 3：[AI 创富俱乐部（makerich）](https://makerich.club/)

注意：购买/使用第三方账号可能违反平台服务条款并存在安全与合规风险。拿到账号后建议第一时间**修改密码**、启用/重置 **2FA**、绑定自己的恢复邮箱/手机号，并避免用于任何违规用途。

### 6. ChatGPT 账号（购买入口）

若需使用 ChatGPT、Codex，GPT-images2 等官方产品而暂无自有账号，部分用户会通过第三方渠道购买现成账号（与上节同理，请自行甄别渠道可信度）。

- 购买入口 1：[pay.ldxp.cn/shop/xcursor](https://pay.ldxp.cn/shop/xcursor)
- 购买入口 2：[wafase.com](https://wafase.com/)
- 购买入口 3：[AI 创富俱乐部（makerich）](https://makerich.club/)

注意：风险与合规事项同上文「Google 邮箱」— 第三方账号可能违反平台条款；到手后尽快改密、检查绑定与恢复方式，并仅用于合法用途。

### 7. 其他

#### 临时邮箱

- [Temp Mail](https://temp-mail.org/zh/)
- [TempInbox](https://tempmail.easya.work/zh-CN/)
- [Cloudflare 临时邮件](https://mail.awsl.uk/)

#### 指纹浏览器

- [ixBrowser](https://ixbrowser.com/zh)
- [adspower](https://www.adspower.net/download/)

#### 信用卡 / 支付

- Bybit、Fiat24、Roogoo 等
- [虚拟卡1](https://988.chat/)  [虚拟卡2](https://pay.ldxp.cn/shop/ERANHDWI) [虚拟卡3](https://www.779.chat/)

#### 短信接收

注册 Google、Telegram、OpenAI 等平台账号时，常需手机验证码。若暂无可用号码，可通过接码平台获取临时号码接收 SMS（与上节「Google 邮箱」场景类似，也可用于自行注册时的验证环节）。

- [火狐狸接码平台](https://web.firefox.fun/) — 全球 180+ 国家号码，覆盖 Telegram、Instagram、WhatsApp 等常见项目，提供客户端与 API
- [HeroSMS](https://hero-sms.com/cn) — 180+ 国家虚拟号码，支持网站与 API，覆盖 Google/OpenAI/Telegram 等 700+ 服务
- [5SIM](https://5sim.net/zh) — 老牌接码平台，按项目与国家选号
- 购买入口：[pay.ldxp.cn/shop/AEUQ8PP3](https://pay.ldxp.cn/shop/AEUQ8PP3)
- [国内免费接码平台推荐](https://topstip.com/nice-patchwork-platform/) — 汇总类参考

注意：接码平台号码多为共享/一次性资源，存在被平台风控、账号关联封禁等风险；仅用于合法注册与测试，勿用于违规批量注册。第三方渠道请自行甄别可信度。

