---
title: AI 办公实战指南
weight: 15
bookToc: false
noTocArea: true
bookHidden: false
---

## AI 办公实战指南

[AI 办公桌面端]({{< relref "ai-products/ai-office-desktop" >}})（WorkBuddy、DuMate、千问办公等）已经能帮你处理文档、表格、数据分析等任务，但覆盖面仍有明显缺口：**消息、邮件、文档协作、在线表格、智能表格、待办、日程、会议、微盘、通讯录** 等平台原生能力，单靠桌面端 Agent 往往触达不到。

更可行的路径是：**AI 客户端软件**（[Codex]({{< relref "project-practice/codex" >}})、WorkBuddy 等）+ **办公平台官方 CLI**，把企微 / 钉钉 / 飞书的能力封装成终端命令，由 Agent 直接调用——无需手写 SDK，即可覆盖消息、DING、日历、待办、多维表格、文档、通讯录、考勤、日志、开放平台应用管理等场景。

> **CLI vs MCP**：飞书等平台也提供 [MCP 远程接入]({{< relref "project-practice/other-platform-practices" >}})（侧重知识库、文档检索）。CLI 覆盖更广、命令更细，适合「读写消息 / 改表格 / 发日程」等**写操作与全链路编排**；MCP 更适合把平台当**上下文源**。两者可并存，按任务选型。

---

## 企微 CLI / 钉钉 CLI / 飞书 CLI 对比

> 钉钉、飞书于 **2026 年 3 月 28 日**开源；企微于 **3 月 29 日**跟进。三者均面向 **AI Agent + 命令行**，把办公平台能力封装成终端命令，不用写 SDK 即可调用消息、文档、日程、表格等能力。

### 1. 基础信息总览

| 项目 | 企微 CLI wecom-cli | 钉钉 CLI dingtalk-workspace-cli (dws) | 飞书 CLI lark-cli |
| --- | --- | --- | --- |
| 官方仓库 | [WecomTeam/wecom-cli](https://github.com/WecomTeam/wecom-cli) | [DingTalk-Real-AI/dingtalk-workspace-cli](https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli) | [larksuite/cli](https://github.com/larksuite/cli) |
| 开源协议 | MIT | Apache-2.0 | MIT |
| 实现语言 | Rust | Go | Go |
| 二进制命令 | `wecom-cli` | `dws` | `lark-cli` |
| npm 包 | `@wecom/cli` | `dingtalk-workspace-cli` | `@larksuite/cli` |
| 一键安装 | `npm install -g @wecom/cli` | [官方脚本](https://open.dingtalk.com/dingtalk-cli) / `npm install -g dingtalk-workspace-cli` | `npx @larksuite/cli@latest install` |
| 登录授权 | `wecom-cli init`（长连接机器人 Bot ID + Secret） | `dws auth login` 扫码（OAuth） | `lark-cli config init` + `lark-cli auth login` 扫码（OAuth） |
| GitHub Star（2026-08） | ~2.9k | ~2.8k | ~17k，社区最活跃 |
| AI Skill 预制 | 内置 12 套 Skill，需 `npx skills add WeComTeam/wecom-cli -y -g` | 内置 19 套 Agent Skill | 内置 20+ 套开箱即用 Skill，Cursor / Claude Code 深度适配 |

### 2. 能力覆盖

#### 企微 CLI（wecom-cli）

覆盖 7 大业务域：通讯录、待办、会议、消息、日程、文档、智能表格；并扩展邮件、微盘等能力。

- 可发文本 / 图片 / 文件消息；读写文档、编辑 Markdown 内容；管理日程与预约会议；智能表格增删改查。
- 特点：**客户联系 / 客户群能力是差异化优势**（相对钉钉 / 飞书 CLI），适合客户运营、客情分析场景；WorkBuddy 等已内置企微 CLI Skill。
- 限制：需绑定**长连接智能机器人**凭证；**≤10 人**小团队与个人场景能力更全，大企业场景目前以文档 / 智能表格 CLI 为主，部分能力受企微官方权限管控。

#### 钉钉 CLI（dws）

覆盖：消息、DING 消息、日历、待办、多维表格、文档、通讯录、考勤、日志、开放平台应用管理等。

- 独有：`dws dev`，终端直接创建钉钉应用、配置权限、发布版本，不用登录开发者后台。
- 200+ 精选命令，三层架构（快捷命令 / API 命令 / 原生 API），底层可透传 2500+ 钉钉开放 API。
- 适配：Claude Code、Cursor、通义 Qwen Code。

#### 飞书 CLI（lark-cli）

覆盖 11 大业务域：消息群组、云文档、电子表格、多维表格（Base）、日历、会议纪要、邮箱、任务、知识库、云盘、通讯录、画板等。

- 200+ 命令，封装 2500+ API；多维表格支持导出 NDJSON 供 pandas / jq 分析。
- Skill 体系最成熟，Agent 直接自然语言调用：「查今日日程」「新建多维表格并写入数据」。
- 社区迭代最快；支持 `--dry-run` 预览写操作，凭证存 OS 钥匙串。

### 3. 快速安装示例

#### 飞书 CLI

```bash
npx @larksuite/cli@latest install
# 或：npm install -g @larksuite/cli
npx skills add larksuite/cli -y -g    # 安装 AI Skills（推荐）
lark-cli config init                  # 配置 App ID / App Secret
lark-cli auth login --recommend       # 扫码授权（推荐最小权限）
# 示例命令
lark-cli calendar +agenda             # 查看今日日程
lark-cli im +messages-send --chat-id "oc_xxx" --text "hello"
```

官方文档：[飞书 CLI 使用指南](https://open.feishu.cn/feishu-cli) · [Lark CLI 文档](https://open.larksuite.com/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu)

#### 钉钉 CLI

```bash
# mac / linux（官方脚本）
curl -fsSL https://gitee.com/DingTalk-Real-AI/dingtalk-workspace-cli/raw/main/scripts/install.sh | sh
# 或：npm install -g dingtalk-workspace-cli
dws auth login
dws calendar list-today
```

官方入口：[钉钉 CLI 2.0](https://open.dingtalk.com/dingtalk-cli)

#### 企微 CLI

```bash
npm install -g @wecom/cli
npx skills add WeComTeam/wecom-cli -y -g   # 安装 AI Skills（必需，否则 Agent 无法识别）
wecom-cli init                             # 配置长连接机器人 Bot ID + Secret
# 示例命令
wecom-cli contact get_userlist '{}'
wecom-cli msg send_message '{"chat_type":1,"chatid":"zhangsan","msgtype":"text","text":{"content":"消息内容"}}'
```

官方说明：[企业微信支持 CLI 开源](https://open.work.weixin.qq.com/help2/pc/21676)

### 4. 选型建议

1. **做 Agent 原型、快速调试、追求社区生态 → 优先飞书 CLI**  
   Skill 最完备，文档多，Star 最高，MCP 与 CLI 可并存。
2. **企业重度使用钉钉，还要终端管理钉钉应用 → 钉钉 CLI**  
   `dws dev` 应用管理是独有的杀手锏能力。
3. **企业微信生态，需要客户联系、客户群数据、外部客户运营 → 企微 CLI**  
   客户侧能力是另外两者没有的；已内置 12 套 Skill，但授权模式与能力边界与另两家差异最大，上线前建议在测试企业验证。

### 5. 关键概念：CLI vs 传统 OpenAPI

- **OpenAPI**：面向开发者写代码，要处理 token、签名、分页、错误处理。
- **这一代 CLI**：**面向 AI Agent**，做了鉴权封装、结构化输出（JSON / NDJSON / table）、错误标准化；普遍采用**三层命令**（`+` 快捷命令 → 精选 API 命令 → 原生 API 透传），Agent 直接调用子命令，不需要理解复杂接口参数。

> **授权差异**：飞书 / 钉钉 CLI 走 **OAuth 用户扫码**；企微 CLI 走 **长连接智能机器人 Bot ID + Secret**（`wecom-cli init`），三者均受平台权限管控，不能越权访问没有权限的文档 / 消息。

---

## 实际使用案例

装好对应 CLI 和 Skill 后，**直接复制提示词**发给 Cursor / Claude Code / Codex 即可，Agent 会自己调命令。

### 案例 1：把 Markdown 存到飞书文档

> 用飞书 CLI 把 `content.zh/project-practice/ai-office-practice.md` 存成飞书文档，标题叫「AI 办公实战指南」。站内链接先换成完整 URL 再导入。

### 案例 2：查今日日程，发群消息提醒

> 查我今天的飞书日程，整理成列表，发到「XX 项目群」。

### 案例 3：新建周报文档

> 在飞书新建文档《本周工作周报》，包含：本周完成、下周计划、风险项。内容你先帮我写一版初稿。

### 案例 4：待写文章记进飞书待办

> 帮我在飞书待办加几条 ai-guide 待写文章：[飞书 CLI 实战]、[钉钉 CLI 实战]、[Claude Code 10分钟上手]，备注所属栏目。

### 案例 5：钉钉查今日日程（换平台同理）

> 用钉钉 CLI 查我今天的日程，有冲突的会标出来。

钉钉 / 企微把「飞书 CLI」换成「钉钉 CLI / 企微 CLI」即可，提示词写法一样。

---

## 实战路径：桌面 Agent + 平台 CLI

一条可复用的闭环：

1. **选办公平台 CLI**：按上表安装；飞书 / 钉钉完成 OAuth 扫码，企微完成 `init` 配置机器人凭证。
2. **安装对应 Skill**：三家的 Skill 安装命令不同，装完后**重启 AI 客户端**（Cursor / Claude Code / Codex 等）。
3. **在 AI 客户端里暴露 CLI**：上述客户端已具备终端执行能力；装好 Skill 后可直接用自然语言驱动「查日程 → 写文档 → 发消息」。
4. **用结构化输出做编排**：CLI 默认输出 JSON，Agent 可串联多步任务，比 GUI 自动化更稳；飞书写操作可先用 `--dry-run` 预览。
5. **权限与边界**：个人 / 小团队与企业场景能力不同（尤其企微）；企业场景需管理员开通对应应用与机器人权限。

桌面端负责「理解与编排」，平台 CLI 负责「触达真实办公数据」——两者组合，才能覆盖消息到文档、从待办到会议的全链路办公场景。
