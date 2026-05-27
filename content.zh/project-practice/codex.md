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

#### 前置：`ripgrep`（`rg`）——CLI 强依赖，建议先装

[Codex 开源仓库与 CLI 说明](https://github.com/openai/codex) 表明：**Codex CLI 默认把 `rg` 当作已在 PATH 中的系统能力**，用于文件发现、关键词搜索、大仓库扫描与上下文收集（类似把 ripgrep 当作「快速读仓库 / 缩小上下文」的默认后端）。**Codex 并不是内置一套独立文件搜索引擎**，而是 **LLM + 终端工具编排**；其中 **`rg` 承担大量「找文件、搜代码」路径**。

若系统找不到 `rg`，常见直接报错：

```text
Error: spawn rg ENOENT
```

社区已在官方仓库讨论过该依赖与安装预期，例如：[Issue #43](https://github.com/openai/codex/issues/43)、[Issue #1205](https://github.com/openai/codex/issues/1205)。许多实践也会写「**优先用 `rg` / `rg --files`，少用慢速的 `grep` / `ls -R`**」——对 Agent 来说，瓶颈往往在**快速定位相关代码**，而不是生成代码本身。

| 工具 | 速度 | 大仓库 | 尊重 `.gitignore` 等 |
| --- | --- | --- | --- |
| `grep` | 较慢 | 一般 | 差 |
| `find` / 递归列目录 | 很慢 | 差 | 无 |
| **`rg`（ripgrep）** | 很快 | 适合 | 原生支持 |

除 Codex 外，不少 AI 编程类工具（如 [Aider](https://github.com/Aider-AI/aider)、[Claude Code](https://www.anthropic.com/claude-code)、[Cline](https://github.com/cline/cline)、[Cursor](https://www.cursor.com/) 等）的实现或提示也普遍偏向 **`rg`**（甚至会出现 *Prefer rg over grep* 一类表述）。

**Windows 建议主动安装**（安装后**新开一个终端**，再跑 `codex`，避免 PATH 未刷新）：

```powershell
winget install BurntSushi.ripgrep.MSVC
```

若使用 [Scoop](https://scoop.sh/)：

```powershell
scoop install ripgrep
```

验证：

```bash
rg --version
```

**macOS / Linux**：若已装 Homebrew，常用 `brew install ripgrep`；各发行版软件源里包名多为 `ripgrep`。

未装 `rg` 时，除 `ENOENT` 外，还可能表现为：扫仓库失败、上下文不完整、长时间卡在目录遍历等。**Windows** 上若再叠加 Codex 仍在演进中的平台差异，体感可能更明显；官方起步说明见：[OpenAI Help：Codex CLI getting started](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started)。

#### Codex++：桌面端外部增强（可选）

若你主要用 **Codex 桌面端（Codex App）**，且遇到「API Key 模式下插件入口不可用」「会话只能归档、无法真正删除」「切换 model provider 后历史会话消失」等痛点，可尝试社区项目 **[Codex++（CodexPlusPlus）](https://github.com/BigPizzaV3/CodexPlusPlus)**。

它是**外部启动器**：不修改 Codex 安装目录里的 `app.asar`，通过 **Chromium DevTools Protocol（CDP）** 注入增强脚本，并附带本地 helper 服务处理删除、导出、移动等操作。

| 能力 | 说明 |
| --- | --- |
| **插件入口解锁** | API Key 登录时，解除「需要 ChatGPT 登录」导致的插件不可用 |
| **会话删除** | 列表悬停显示删除按钮，支持确认与撤销 |
| **Markdown 导出** | 按本地 rollout 导出带时间戳的会话 |
| **会话项目移动** | 将会话移到其他本地项目 |
| **对话 Timeline** | 右侧用户提问时间线，悬停摘要、点击跳转 |
| **Provider 同步** | 切换供应商前同步 metadata，减少历史会话「看不见」 |

**安装与启动**（需本机 Python 3）：

```bash
git clone https://github.com/BigPizzaV3/CodexPlusPlus.git
cd CodexPlusPlus
python -m pip install -e .
python -m codex_session_delete setup    # 生成快捷方式 / macOS .app
python -m codex_session_delete launch   # 启动（勿直接点原版 Codex）
```

**Windows** 也可双击项目根目录 `setup.bat`，选 `[1] Install Codex++`，之后用桌面 **`Codex++.lnk`** 启动。

**使用注意**：

- 必须从 **Codex++** 快捷方式启动，顶部才会出现 `Codex++` 菜单；原版 Codex 不会加载注入。
- 启动时会为 Codex 附加 `--remote-debugging-port=9229`；若端口被占用，查看 `%USERPROFILE%\.codex-session-delete\launcher.log`（Windows）或 `~/.codex-session-delete/launcher.log`。
- **Provider 同步**需在 Codex++ 设置里开启后重启；只修复会话可见性 metadata，不改写消息正文。
- 技能推荐若 `git fetch failed`，可像官方 Codex 一样在环境里设置 `HTTP_PROXY` / `HTTPS_PROXY`（项目也会尝试探测常见本地代理端口）。

更完整的命令（更新、卸载、Windows watcher 自动接管等）见仓库 [README](https://github.com/BigPizzaV3/CodexPlusPlus#readme)。

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

### 3. SSH 远程连接（remote_connections）

如果你希望在本地 Codex App 里连远程机器开发，关键是三步：**满足前提、打开开关、重启生效**。

**前提条件**：

- **本地**：Codex App 升到最新版（需支持远程连接）。
- **远程服务器**：安装 Codex CLI `>= 0.121.0`，并完成 `codex login`。
- **连接方式**：本地到远程可通过 SSH 直连，优先密钥免密，减少反复输密码。

**开启配置**：

1. 编辑配置文件  
   - macOS / Linux：`~/.codex/config.toml`  
   - Windows：`%USERPROFILE%\.codex\config.toml`
2. 添加功能开关：

```toml
[features]
remote_connections = true
```

保存后**完全退出并重启 Codex App**，设置中会出现 `Connections / 连接`。

---

### 4. 第一次进项目：建议做的事

1. 确认本机已安装 **`ripgrep`（`rg`）** 且 `rg --version` 正常（见上文「安装」中的前置说明）；否则 CLI 可能无法可靠扫描仓库。
2. 在**仓库根目录**打开终端（或 IDE 内置终端），执行 `codex` 进入交互（具体子命令以 `codex --help` 为准）。
3. 让 Codex **扫一遍项目结构**，生成或补全面向代理的说明文件（常见名称是 **`AGENTS.md`**，也可能配合仓库内 `.codex/` 下的约定；以你本机 Codex 版本提示为准）。
4. 把 **如何构建、如何测试、分支约定、禁止自动执行的操作** 写清楚——和用 Cursor / Claude Code 一样，**边界写清楚 = 少翻车**。
5. `AGENTS.md` 示例参考：[codecopy.cn/embed/w7wlhs](https://www.codecopy.cn/embed/w7wlhs)

多模型协作（例如用别的工具做规划、用 Codex 做实现/评审）可参考：[CCG 使用指南]({{< relref "workflow/ccg" >}})。

---

### 5. Skills：放哪、怎么用

Codex 支持 **Skills**（把可复用流程写成 Markdown 说明，供代理按需加载）。路径约定与生态在演进中：

- 常见位置包括项目内 **`.codex/skills/`** 与用户级目录（如 **`~/.codex/skills/`**）。
- 业界在推 **`~/.agents/skills`** 等统一目录，减少「每个工具一套文件夹」；细节见站内：[AI 智能体 · Skills]({{< relref "agent/skills" >}}) 与 [Awesome Agent Skills]({{< relref "agent/awesome-agent-skills" >}})。

**实操建议**：以官方 [Codex Skills](https://developers.openai.com/codex/skills) 为准；同一套 Skill 文档若可被多个工具读取，优先放在团队约定的**单一目录**并做好同步。

---

### 6. MCP 与其他集成

在 Codex 侧配置 **MCP 服务器** 后，代理可以调用外部工具（浏览器、文档、数据库等）。配置入口通常在用户级 **`~/.codex/config.toml`**（含 `[mcp_servers]` 等段落）；与认证相关的文件勿提交到 Git。

- 概念与选型思路：[AI 智能体 · MCP]({{< relref "agent/mcp" >}})。
- 和 Claude Code 统一的增强工具列表：[环境增强工具集]({{< relref "ai-programming/env-and-tools" >}})。

---

### 7. 平台差异与安全习惯

- **Linux**：与 macOS/Windows 相比，沙箱与安全策略可能有差异；以 [openai/codex](https://github.com/openai/codex) 发行说明为准。数据目录默认多在 **`~/.codex`**，可通过环境变量 **`CODEX_HOME`** 调整（便于备份与多账号隔离）。
- **高危标志**：社区与站内 Vibe Coding 类文章会提到类似 **`codex --yolo`** 的「跳过确认」开关——**会显著放大误删文件、乱执行命令的风险**，仅建议在隔离环境或完全清楚后果时使用。

---

### 8. 官方与参考链接

- 开源仓库：[github.com/openai/codex](https://github.com/openai/codex)
- 桌面端增强（社区）：[github.com/BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)（Codex++）
- Skills 文档：[developers.openai.com/codex/skills](https://developers.openai.com/codex/skills)
- ripgrep（`rg`）：[github.com/BurntSushi/ripgrep](https://github.com/BurntSushi/ripgrep)
- Codex CLI 起步（Help Center）：[OpenAI Codex CLI – Getting Started](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started)
