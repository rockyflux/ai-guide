---
title: Codex 实战上手指南
weight: 2
bookToc: false
noTocArea: true
---

## Codex 实战上手指南（10～15 分钟）


OpenAI **Codex** 是面向「读仓库、改代码、跑命令」的编码代理：有 **CLI（终端）**、**IDE 扩展**（VS Code / Cursor / Windsurf 等）、**桌面端** 与 **网页版**（[chatgpt.com/codex](https://chatgpt.com/codex)）多种形式，底层能力与开源仓库 [openai/codex](https://github.com/openai/codex) 一脉相承。

---

### 1. 安装：你更适合哪一种形态？

| 形态 | 适合谁 | 说明 |
| --- | --- | --- |
| **Codex CLI** | 习惯终端、SSH 远程、要和任意编辑器组合 | 全局安装后在项目目录执行 `codex`，对仓库的读写与命令执行最直观。 |
| **IDE 扩展** | 日常主要在 VS Code / Cursor 里写代码 | 侧边栏对话、diff 审阅、与当前工作区绑定；扩展通常围绕 Codex CLI 能力封装。 |
| **桌面 / Web** | 不想配本地环境，或临时处理任务 | Web 入口见上；具体权益以当前 OpenAI 产品说明为准。 |

**CLI 常见安装方式**（择一即可，以官方文档为准）：

```bash
npm install -g @openai/codex
```

macOS 也可用 Homebrew Cask（若官方仍提供该路径）：

```bash
brew install --cask codex
```

**Windows**：除上述方式外，也可从 [Microsoft Store 的 Codex 应用页](https://apps.microsoft.com/detail/9plm9xgg6vks?hl=zh-cn&gl=CN&ocid=pdpshare) 安装；部分用户会在 **WSL** 里跑 CLI 以获得与文档一致的 Linux/macOS 体验（扩展侧也曾提示 Windows 为实验性时优先 WSL，以你当前版本说明为准）。

如果你主要在 **VS Code** 里使用，推荐直接安装官方扩展：[ChatGPT - OpenAI](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt)。

环境准备（Node、Git、终端基础）可参考：[开发环境：一站式准备]({{< relref "ai-programming/dev-start" >}})。

---

### 2. 登录、计费与 API

- **ChatGPT 账号**：Plus / Pro / Team / Edu / Enterprise 等计划是否包含 Codex、额度如何计算，以 [OpenAI 官方定价与产品页](https://openai.com/) 为准。
- **用量查询**：在 [Codex Usage](https://chatgpt.com/codex/settings/usage) 查看当前周期的使用情况与消耗进度。
- **API Key**：部分场景可用 API 方式接入（适合已有 OpenAI API 预算、要做自动化或网关的团队）。
- 海鲜市场：[https://www.goofish.com/search?q=codex](https://www.goofish.com/search?q=codex)
- yy.cool：[https://yy.cool/](https://yy.cool/)（Codex 中转站供应商）

如果你使用的是 **OpenAI 官方账号 / 官方 API**，而本机访问 OpenAI 需要代理出网，那么通常要先开启代理的 **TUN 模式**；否则即使本地能科学上网，Codex 也可能出现网络不通、登录失败或 API 无法调用的问题。

一种简单做法是创建文件 **`.codex/.env`** 写入代理环境变量，例如 Windows 下可放在 **`C:\Users\用户名\.codex`**：

```bash
HTTP_PROXY="http://127.0.0.1:7897"
HTTPS_PROXY="http://127.0.0.1:7897"
NO_PROXY="localhost,127.0.0.1"
```

其中 **`7897`** 替换为你自己的代理端口即可。等价写法就是：

```bash
HTTP_PROXY="http://127.0.0.1:<代理端口>"
HTTPS_PROXY="http://127.0.0.1:<代理端口>"
NO_PROXY="localhost,127.0.0.1"
```

这组变量的含义很直接：

- **`HTTP_PROXY` / `HTTPS_PROXY`**：让 Codex 相关请求走本地代理。
- **`NO_PROXY`**：让本机回环地址直连，避免代理把本地服务也接管走。

需要把 **Claude Code 与 Codex** 一起做「供应商 / 代理 / MCP」初始化时，可用站内介绍的零配置工具：[ZCF 零配置 Claude Code]({{< relref "ai-programming/zcf" >}})。  
更通用的 **Claude / Codex / Gemini CLI** 配置桌面端管理，见：[CC Switch]({{< relref "ai-programming/cc-switch" >}})。

---

### 3. 第一次进项目：建议做的事

1. 在**仓库根目录**打开终端（或 IDE 内置终端），执行 `codex` 进入交互（具体子命令以 `codex --help` 为准）。
2. 让 Codex **扫一遍项目结构**，生成或补全面向代理的说明文件（常见名称是 **`AGENTS.md`**，也可能配合仓库内 `.codex/` 下的约定；以你本机 Codex 版本提示为准）。
3. 把 **如何构建、如何测试、分支约定、禁止自动执行的操作** 写清楚——和用 Cursor / Claude Code 一样，**边界写清楚 = 少翻车**。
4. Agents.md https://www.codecopy.cn/embed/w7wlhs

多模型协作（例如用别的工具做规划、用 Codex 做实现/评审）可参考：[CCG 使用指南]({{< relref "workflow/ccg" >}})。

---

### 4. Skills：放哪、怎么用

Codex 支持 **Skills**（把可复用流程写成 Markdown 说明，供代理按需加载）。路径约定与生态在演进中：

- 常见位置包括项目内 **`.codex/skills/`** 与用户级目录（如 **`~/.codex/skills/`**）。
- 业界在推 **`~/.agents/skills`** 等统一目录，减少「每个工具一套文件夹」；细节见站内：[AI 智能体 · Skills]({{< relref "agent/skills" >}}) 与 [Awesome Agent Skills]({{< relref "agent/awesome-agent-skills" >}})。

**实操建议**：以官方 [Codex Skills](https://developers.openai.com/codex/skills) 为准；同一套 Skill 文档若可被多个工具读取，优先放在团队约定的**单一目录**并做好同步。

---

### 5. MCP 与其他集成

在 Codex 侧配置 **MCP 服务器** 后，代理可以调用外部工具（浏览器、文档、数据库等）。配置入口通常在用户级 **`~/.codex/config.toml`**（含 `[mcp_servers]` 等段落）；与认证相关的文件勿提交到 Git。

- 概念与选型思路：[AI 智能体 · MCP]({{< relref "agent/mcp" >}})。
- 和 Claude Code 统一的增强工具列表：[环境增强工具集]({{< relref "ai-programming/env-and-tools" >}})。

---

### 6. 平台差异与安全习惯

- **Linux**：与 macOS/Windows 相比，沙箱与安全策略可能有差异；以 [openai/codex](https://github.com/openai/codex) 发行说明为准。数据目录默认多在 **`~/.codex`**，可通过环境变量 **`CODEX_HOME`** 调整（便于备份与多账号隔离）。
- **高危标志**：社区与站内 Vibe Coding 类文章会提到类似 **`codex --yolo`** 的「跳过确认」开关——**会显著放大误删文件、乱执行命令的风险**，仅建议在隔离环境或完全清楚后果时使用。

---


### 7. 官方与参考链接

- 开源仓库：[github.com/openai/codex](https://github.com/openai/codex)
- Skills 文档：[developers.openai.com/codex/skills](https://developers.openai.com/codex/skills)

