---
title: 开发环境：一站式准备
weight: 14
bookToc: true
bookHidden: true
---

## 概述

在进入 AI 编程工具配置之前，需要先搭建基础开发环境。本文列出常用软件及安装顺序，可按需选用。

---

## 基础工具（必装）

### 1. 更新至PowerShell 7.x

Windows 默认内置 Windows PowerShell 5.x，已进入维护阶段，目前大量开发工具与 AI 编程相关软件均依赖 PowerShell 作为脚本执行环境，升级至 7.x 有助于提升整体兼容性与稳定性。

```powershell
winget install --id Microsoft.Powershell --source winget
```

安装完成后，在 **Windows Terminal** 设置中将 PowerShell 7 设为默认配置文件，此后新开终端将自动使用 PowerShell 7。

- 官网：[powershell.microsoft.com](https://learn.microsoft.com/powershell/)

### 2. 代码编辑器

**VS Code** 是 AI 编程工具（Cursor、Claude Code、OpenCode 等）的常用基座，建议首选。

- 官网：[code.visualstudio.com](https://code.visualstudio.com/)
- 可选：JetBrains IDE、Vim/Neovim 等

### 3. Node.js 与 npm

多数 AI 编程工具依赖 Node.js 运行，用于安装 CLI、管理 MCP 服务器等。

- 官网：[nodejs.org](https://nodejs.org/)
- 建议安装 LTS 版本，安装后自动包含 npm

### 4. Python 与 pip

部分 CLI 和 MCP 服务基于 Python，建议一并安装。

- 官网：[python.org](https://www.python.org/)
- 安装时勾选「Add Python to PATH」，并启用 pip

### 5. Git

版本控制是 AI 编程工作流的基础，用于提交、回滚、协作。

- 官网：[git-scm.com](https://git-scm.com/)

---

## 可选工具

### 6. Obsidian

个人知识库与笔记工具，适合整理 AI 编程笔记、提示词和项目文档。

- 官网：[obsidian.md](https://obsidian.md/)

### 7. 网络与代理

使用Google或ChatGPT等需要科学上网工具。
- [客户端：Clash Verge](https://www.clashverge.dev/install.html)
- [客户端 FlClash：适用于 Clash 的多功能图形用户界面。](https://flclash.cc/download.html) 
- [最优的科学上网方案](https://github.com/githubvpn007/v2rayNvpn)


### 8. Cherry-AI

一站式 AI 开发环境与工具平台。

- 官网：[cherry-ai.com](https://cherry-ai.com/)

### 9. 其他

**临时邮箱**
- [Temp Mail](https://temp-mail.org/zh/)
- [TempInbox](https://tempmail.easya.work/zh-CN/)
- [Cloudflare 临时邮件](https://mail.awsl.uk/)

**指纹浏览器**
- [ixBrowser](https://ixbrowser.com/zh)
- [adspower](https://www.adspower.net/download/)

**信用卡 / 支付**
- Bybit、Fiat24、Roogoo 等

**短信接收**
- [5SIM](https://5sim.net/zh)
- [国内免费接码平台推荐](https://topstip.com/nice-patchwork-platform/)

---

## 下一步

环境就绪后，可继续：

- [AI 编程环境配置与增强工具集]({{< relref "ai-programming/env-and-tools" >}}) — CC Switch、CPA、ZCF 等一站式配置
- [ZCF 零配置 Claude Code]({{< relref "ai-programming/zcf" >}}) — 一键搞定 Claude Code & Codex 环境
- [AI 编程工具汇总]({{< relref "ai-programming/vb-code-tool" >}}) — 各类 AI 编程工具对比与选型
