---
aliases:
  - /ai-programming/cpa/
title: CLI 代理 API（CPA）
weight: 24
bookToc: true
noTocArea: false
bookHidden: false
---

## 简介

**CLIProxyAPI**（常简写为 CPA）将 Gemini CLI、Antigravity、ChatGPT Codex、Claude Code、Qwen Code、iFlow 等 CLI 的访问能力，统一封装为 **OpenAI / Gemini / Claude / Codex 兼容 API**。使用各产品的订阅账号即可通过兼容客户端和 SDK 调用，无需单独购买 API Key。

**核心价值**：订阅即 API、多端复用（Cursor / Cline / Roo Code / OpenCode / Amp 等）、多账户轮询与故障转移。

---

## CPA 与 CCR 的区别

- **CPA（CLIProxyAPI）**：反代/聚合各渠道模型，对外提供统一的 API Endpoint（URL）与鉴权方式（Key）。
- **CCR**：将 Claude Code 的请求路由到其他（非 Anthropic）模型提供方。

## 快速开始

- **仓库与发行版**：[GitHub](https://github.com/router-for-me/CLIProxyAPI) · [Releases](https://github.com/router-for-me/CLIProxyAPI/releases)
- **完整文档**：[用户手册（中文）](https://help.router-for.me/cn/)

### 安装与首次运行

> quotio [macOS 用户可优先使用](https://github.com/nguyenphutrong/quotio) 一键安装/管理（会自动安装 CLIProxyAPI / CPA）。

1. 从 [Releases](https://github.com/router-for-me/CLIProxyAPI/releases) 下载对应平台版本并解压。
2. 编辑 `config.yaml`，重点配置：
   - `port`：服务端口（默认 8317）
   - `api-keys`：调用模型时的认证密钥（可多个）
   - `secret-key`：管理接口密钥（Web UI 连接时使用）
   - `proxy-url` : 如需访问codex等模型需要设置代理 （socks5://127.0.0.1:7897）
3. 启动程序（如 Windows 下运行 `cli-proxy-api.exe`）。

配置项说明见：[基础配置](https://help.router-for.me/cn/configuration/basic.html)。

### 管理方式

- **Web UI**（推荐）：内置管理界面，启动服务后访问 `http://<host>:<port>/management.html`，输入管理密钥即可使用。详见 [Web UI 说明](https://help.router-for.me/cn/management/webui.html)。
- **桌面客户端**：[EasyCLI](https://github.com/router-for-me/EasyCLI) 跨平台桌面客户端，详见 [桌面客户端说明](https://help.router-for.me/cn/management/gui.html)。

![images.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERUeRpolbKfsGvofhG7VwXbjRTv90qcAAC2BoAAgdJGFUh6x_ocXh-wjoE.png)

![images.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERUeZpolfMMGYWGtNtZZDUZydvB-5x8AAC2xoAAgdJGFUNOv32HGJUTDoE.png)

![images.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERUeVpoleRUHxxdESq7UDF_BCJ5gT6PQAC2hoAAgdJGFWnzKTZYN5K9joE.png)

![images.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERUeppolhqJiM1Sx5TfV6aRc_kBdGRCgAC3xoAAgdJGFVRJ3yn-rXrfjoE.png)

---

### 调用方式

- [cc-switch](https://github.com/farion1231/cc-switch) — 配置代理地址后可供 Claude Code 等编码工具使用
- [Cherry AI](https://www.cherry-ai.com/) — 配置代理地址后可进行直接对话
- [Chatbox AI](https://chatboxai.app/zh/) — 配置代理地址后可进行直接对话

## 相关项目

- [quotio](https://github.com/nguyenphutrong/quotio) — macOS（推荐）一键安装/管理，包含自动安装 CLIProxyAPI（CPA）。
- [EasyCLI](https://github.com/router-for-me/EasyCLI) — 跨平台 CPA 桌面客户端
- [Cli-Proxy-API-Management-Center](https://github.com/router-for-me/Cli-Proxy-API-Management-Center) — 官方 Web 管理面板
- [CPA-Dashboard](https://github.com/dongshuyan/CPA-Dashboard) — 社区 Dashboard
- [batch-auth-manager](https://github.com/SSDFDFDF/batch-auth-manager) — 批量认证管理工具

更多基于 CPA 的客户端与衍生项目见仓库 [README](https://github.com/router-for-me/CLIProxyAPI#who-is-with-us) / [README_CN](https://github.com/router-for-me/CLIProxyAPI/blob/main/README_CN.md)。
