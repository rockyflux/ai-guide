---
aliases:
  - /project-practice/ai-software/
title: AI 开发软件
weight: 30
bookToc: false
noTocArea: true
bookHidden: false
---

## AI 开发软件

编码 Agent（Cursor / Claude Code / Codex）解决「写代码」；日常还要连库、登服务器、查日志。下面四款把 **AI 嵌进数据库客户端 / SSH 终端**，可按场景直接选。

| 工具 | 一句话 | 官网 |
|------|--------|------|
| **DBX** | ~20MB 开源数据库工作台，内置 AI + MCP，给 Agent 喂库结构 | [dbxio.com/cn](https://dbxio.com/cn) |
| **Xterminal** | 国产桌面 SSH / 本地终端，AI 命令提示与解答 | [terminal.icu](https://www.terminal.icu/) |
| **OrcaTerm** | 腾讯云网页 / 客户端终端，自然语言转命令、云上免密登录 | [orcaterm.cloud.tencent.com](https://orcaterm.cloud.tencent.com/terminal) |
| **Netcatty** | 开源 AI SSH 工作空间，内置 Agent，可接 Claude Code / Codex | [netcatty.app/zh](https://netcatty.app/zh/) |

---

### 1. DBX：给 Agent 接上真实数据库

[DBX](https://dbxio.com/cn) 是开源轻量数据库客户端（桌面 + Docker），覆盖连接管理、SQL 编辑、数据表、结构浏览、ER 图、Schema 对比；支持 MySQL / PostgreSQL / SQLite / Redis / MongoDB / DuckDB 等 **60+** 引擎。

和「普通客户端」的差别：

- **内置 AI 助手**：自然语言生成 / 解释 / 优化 SQL  
- **MCP Server**：把已配置的连接暴露给 Claude Code、Cursor 等，Agent 可直接查表结构、跑查询  
- **CLI**：终端 / 脚本 / Codex 也能复用同一套连接

**接 MCP（推荐）**：

```bash
npm install -g @dbx-app/mcp-server
```

项目或用户级 MCP 配置示例：

```json
{
  "mcpServers": {
    "dbx": {
      "command": "npx",
      "args": ["-y", "@dbx-app/mcp-server"]
    }
  }
}
```

Windows 便携版需设 `DBX_DATA_DIR` 指向 `DBX.exe` 同级的 `data` 目录。装好后可直接说：「列出连接」「描述 users 表」「查最近 7 天订单量」。

文档：[MCP 集成](https://dbxio.com/cn/docs/mcp) · 仓库：[t8y2/dbx](https://github.com/t8y2/dbx)

---

### 2. Xterminal：日常 SSH 的 AI 增强桌面端

[Xterminal](https://www.terminal.icu/) 面向「更好用的开发工具，但不止于 SSH」：多级分组、登录凭证、自定义布局、文件管理、系统监控，并带 **AI 解答 / 智能命令提示 / 命令补全**。

适合：

- 本机长期维护一批主机，要分组、书签、代理  
- 不想换到浏览器，只要桌面 SSH + 轻度 AI 提示  

下载覆盖 Windows / macOS（Apple Silicon & Intel）/ Linux（deb、rpm；含 aarch64），另有 Win7 与免安装包。

---

### 3. OrcaTerm：腾讯云上的 AI 终端

[OrcaTerm（遨驰终端）](https://orcaterm.cloud.tencent.com/terminal) 是腾讯云统一网页终端（亦有客户端公测）：浏览器一键登 CVM / 轻量 / 裸金属，也支持第三方云与 SSH / RDP。

AI 相关能力（以官方文档为准）：

- **OrcaTerm AI**：自然语言问答与运维建议（基础版约 1000 次/月，专业版更高）  
- **AI 命令搜索**：终端内右键，用描述搜命令  
- 自定义模型（专业版起）

云上额外加分：免密登录（TAT）、会话协作、文件管理 / 在线编辑、批量运维、快捷命令。人在腾讯云、要「打开就能登」时优先它。

产品页：[cloud.tencent.com/product/orcaterm](https://cloud.tencent.com/product/orcaterm) · AI 指引：[使用指引](https://cloud.tencent.com/document/product/1665/100093)

---

### 4. Netcatty：SSH 工作空间 + 多 Agent

[Netcatty](https://netcatty.app/zh/) 是开源（GPL-3.0）现代 SSH 工作空间：终端、双栏 SFTP、端口转发、密钥库、50+ 主题；macOS / Windows / Linux。

和 Xterminal 的差异在 **Agent 工作流**：

| Agent | 说明 |
|-------|------|
| **Catty**（内置） | 懂主机上下文，诊断、多机编排 |
| **Claude Code** | 插件接入每个终端面板 |
| **Codex CLI** | 在会话里直接跑 |

典型四步：**连接 → 用自然语言问 → 审阅后执行 → 验证 / 改配置**。适合多机运维、想在 SSH 里直接跑编码 Agent 的人。

仓库：[binaricat/Netcatty](https://github.com/binaricat/Netcatty)

---

### 怎么选？

| 你的场景 | 优先 |
|----------|------|
| Agent 要读真实库结构 / 跑 SQL | **DBX**（+ MCP） |
| 本机 SSH 日常，要分组凭证 + 轻 AI | **Xterminal** |
| 主要管腾讯云，要网页免密 / 协作 | **OrcaTerm** |
| 多机运维，要内置 Agent 或接 Claude / Codex | **Netcatty** |

可组合：用 **DBX MCP** 给 Cursor / Claude Code 喂库；用 **Netcatty / Xterminal / OrcaTerm** 管机器。Agent 概念与 MCP 配置见：[AI 智能体 · MCP]({{< relref "agent/mcp" >}})。
