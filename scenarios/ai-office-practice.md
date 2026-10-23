# 桌面 Agent 接入办公 CLI

目标：在 [WorkBuddy](https://www.codebuddy.cn/work/) / [豆包工作](https://www.doubao.com/work) 等**桌面端 Agent**里接入 **企微 / 钉钉 / 飞书官方 CLI**，用自然语言驱动消息、日程、待办、云文档、多维表格等——不用手写 SDK。

桌面端怎么选、怎么省额度，见 [WorkBuddy 与豆包工作](/scenarios/workbuddy-doubao-work.html)；产品对比见 [AI 办公桌面端](/products/ai-office-desktop.html)。

---

## 为什么要接 CLI

桌面端已经能碰本机文件、办公软件、浏览器，但平台侧能力仍常缺口：**消息、邮件、协作文档、在线 / 智能表格、待办、日程、会议、微盘、通讯录** 等。产品内**连接器**能覆盖一部分；覆盖不到或要细粒度写操作时，再上官方 CLI。

| 角色 | 负责什么 |
| --- | --- |
| **WorkBuddy / 豆包工作等** | 理解任务、拆步骤、调终端与 Skills、编排交付 |
| **企微 / 钉钉 / 飞书 CLI** | 鉴权封装好的命令，真正读写平台数据 |

装好 CLI、让 Agent 能调终端（或挂上对应 Skill）之后，在桌面端说「查今日日程并发群提醒」，由它去跑 `lark-cli` / `dws` / `wecom-cli`，不必自己翻开放平台文档。

> **连接器 → CLI → MCP（怎么选）**  
> 1. **产品内连接器 / 内置技能**：能用就先用（豆包工作偏飞书，WorkBuddy 偏腾讯文档 / 企微）。  
> 2. **官方 CLI**：要发消息、改表格、建日程等**写操作与多步编排**时补上。  
> 3. **MCP**（见 [MCP](/agent/mcp.html)）：更适合把平台当**上下文源**（知识库、文档检索）。可与 CLI 并存。

同一套 CLI 也可给 [Cursor](/practice/cursor.html) / [Codex](/practice/codex.html) / Claude Code 用；本文以**办公桌面端**为主入口。

---

## 推荐闭环

### 1. 按日常平台选 CLI

| 你日常在用 | 装哪个 | 更顺的桌面端 |
| --- | --- | --- |
| 企业微信 / 腾讯文档 | `wecom-cli` | WorkBuddy（企微 Skill 生态更熟） |
| 飞书 | `lark-cli` | 豆包工作（飞书更深） |
| 钉钉 | `dws` | 千问办公等；WorkBuddy / 豆包工作只要能跑终端也可调 |

只装你真正要用的那一家即可。三家对比与完整安装见文末「三家 CLI 速查」。

### 2. 本机先跑通，再交给 Agent

顺序很重要，否则桌面端只会「空聊」：

1. **终端安装并登录**对应 CLI（命令见文末）。  
2. **本机先跑一条只读命令**（如查今日日程），确认凭证有效。  
3. **挂 Skill（推荐）**：`npx skills add …` 后，**重启** WorkBuddy / 豆包工作（或 Cursor 等）。  
4. 若桌面端**吃不到**全局 Skill（路径 / 运行环境不同）：在任务里明确「用终端执行 `lark-cli` / `dws` / `wecom-cli`」，并保证该产品已开本机终端权限。

> WorkBuddy、豆包工作是否自动扫描 `npx skills` 的全局目录，以各产品当前版本为准。**以「终端里命令可用」为硬前提**；Skill 只是让自然语言更好对上参数。

### 3. 在任务里点名平台与动作

新建任务时写清平台、动作、完成标准；需要时点名 CLI / Skill：

- 「用飞书 CLI 查我今天的日程，整理成列表。」
- 「用企微 CLI 给张三发文字消息：……」
- 「走钉钉 CLI 看今日日程，有冲突的标出来。」

支持 `/` 或 `@` 选技能时，先选中再补约束（群名、文档标题、禁止改动的字段）。写法同 [WorkBuddy 与豆包工作](/scenarios/workbuddy-doubao-work.html) 的「说清问题、点名工具」。

### 4. 验收与边界

- 飞书写操作可先 `--dry-run`。  
- 企微是**长连接机器人凭证**，权限模型与飞书 / 钉钉 OAuth 不同；企业场景常需管理员开应用 / 机器人。  
- **一个会话一个主任务**；失败时把终端报错贴回 Agent 继续修，比新开模糊对话更省额度。

---

## 复制即用的提示词

装好 CLI（Skill 可选）后，贴进 **WorkBuddy / 豆包工作**（或 Cursor / Codex）：

### 案例 1：Markdown 存进飞书文档

> 用飞书 CLI 把 `scenarios/ai-office-practice.md` 存成飞书文档，标题叫「桌面 Agent 接入办公 CLI」。站内相对链接先换成站点完整 URL 再导入。

### 案例 2：查日程并发群提醒

> 查我今天的飞书日程，整理成列表，发到「XX 项目群」。必须用飞书 CLI 执行，不要只给操作建议。

### 案例 3：新建周报

> 在飞书新建文档《本周工作周报》，含：本周完成、下周计划、风险项。先写初稿再写入文档。

### 案例 4：待办入库

> 用飞书 CLI 在待办加几条：审「桌面 Agent 接入办公 CLI」外链、补钉钉 CLI 验收用例、同步企微测试企业权限。每条备注栏目「场景实战」。

### 案例 5：换钉钉 / 企微

> 用钉钉 CLI 查我今天的日程，有冲突的标出来。

把「飞书 / 钉钉 / 企微 CLI」互换即可，提示词结构相同。

---

## 三家 CLI 速查

> 钉钉、飞书于 **2026-03-28** 开源；企微于 **03-29** 跟进。均面向 **AI Agent + 命令行**。Star 为 **2026-08** 量级快照，选型以能力与生态为准。

### 对照表

| 项目 | 企微 `wecom-cli` | 钉钉 `dws` | 飞书 `lark-cli` |
| --- | --- | --- | --- |
| 官网 | [企业微信 AI CLI](https://work.weixin.qq.com/nl/index/aicli) | [钉钉 CLI](https://open.dingtalk.com/document/development/dingtalk-cli-performing-tasks-within) | [飞书 CLI](https://www.feishu.cn/feishu-cli) |
| 仓库 | [WecomTeam/wecom-cli](https://github.com/WecomTeam/wecom-cli) | [DingTalk-Real-AI/dingtalk-workspace-cli](https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli) | [larksuite/cli](https://github.com/larksuite/cli) |
| 协议 / 语言 | MIT / Rust | Apache-2.0 / Go | MIT / Go |
| npm | `@wecom/cli` | `dingtalk-workspace-cli` | `@larksuite/cli` |
| 安装 | `npm install -g @wecom/cli` | [官方脚本](https://open.dingtalk.com/dingtalk-cli) 或 npm 全局装 | `npx @larksuite/cli@latest install` |
| 登录 | `wecom-cli init`（Bot ID + Secret） | `dws auth login`（OAuth 扫码） | `lark-cli config init` + `auth login`（OAuth） |
| Star（约） | ~2.9k | ~2.8k | ~17k |
| Skill | `npx skills add WeComTeam/wecom-cli -y -g`（约 12 套） | 仓库内约 19 套 Agent Skill（按官方 README 安装） | `npx skills add larksuite/cli -y -g`（20+ 套） |

### 能力与选型

- **企微**：通讯录、待办、会议、消息、日程、文档、智能表格；可扩邮件、微盘。差异化在**客户联系 / 客户群**。限制：依赖长连接智能机器人；小团队（约 ≤10 人）能力更全，大企业多以文档 / 智能表格为主，受权限管控。配 **WorkBuddy** 更常见。  
- **钉钉**：消息、DING、日历、待办、多维表格、文档、通讯录、考勤、日志、开放平台应用；独有 `dws dev`（终端创建 / 发布应用）。约 200+ 精选命令，可透传大量开放 API。  
- **飞书**：消息、云文档、表格、Base、日历、会议纪要、邮箱、任务、知识库、云盘、通讯录、画板等。Skill 最熟；写操作可 `--dry-run`；凭证可进系统钥匙串。配 **豆包工作** 更顺。

一句话：要快、要生态 → 飞书；重度钉钉还要管应用 → `dws`；企微 + 客户运营 → `wecom-cli`（先在测试企业验证权限）。

### 安装备忘

**飞书**

```bash
npx @larksuite/cli@latest install
# 或：npm install -g @larksuite/cli
npx skills add larksuite/cli -y -g
lark-cli config init
lark-cli auth login --recommend
lark-cli calendar +agenda
```

官网：[飞书 CLI](https://www.feishu.cn/feishu-cli) · 文档：[开放平台](https://open.feishu.cn/feishu-cli) · [Lark CLI](https://open.larksuite.com/document/mcp_open_tools/feishu-cli-let-ai-actually-do-your-work-in-feishu)

**钉钉**

```bash
# mac / linux 官方脚本；Windows 可用 npm
curl -fsSL https://gitee.com/DingTalk-Real-AI/dingtalk-workspace-cli/raw/main/scripts/install.sh | sh
# 或：npm install -g dingtalk-workspace-cli
dws auth login
dws calendar list-today
```

官网：[钉钉 CLI](https://open.dingtalk.com/document/development/dingtalk-cli-performing-tasks-within) · 安装入口：[钉钉 CLI 2.0](https://open.dingtalk.com/dingtalk-cli)（Skill 安装以仓库 README 为准）

**企微**

```bash
npm install -g @wecom/cli
npx skills add WeComTeam/wecom-cli -y -g
wecom-cli init
wecom-cli contact get_userlist '{}'
```

官网：[企业微信 AI CLI](https://work.weixin.qq.com/nl/index/aicli) · 说明：[企业微信 CLI 开源说明](https://open.work.weixin.qq.com/help2/pc/21676)

### 关键概念

- **OpenAPI**：给人写代码（token、签名、分页）。  
- **这一代 CLI**：给 Agent——鉴权封装、结构化输出（JSON / NDJSON / table）、三层命令（`+` 快捷 → 精选 API → 原生透传）。  
- **授权**：飞书 / 钉钉 = 用户 OAuth 扫码；企微 = 长连接机器人 Bot ID + Secret。都不能越权。

---

## 小结

1. 连接器不够用时，按平台装 CLI，**终端先跑通**再交给桌面端。  
2. 有 Skill 就挂上并重启客户端；没有就明确让 Agent 调终端命令。  
3. 任务里点名平台与动作，验收「查日程 → 写文档 → 发消息」一类闭环。

桌面端负责理解与编排，CLI 负责触达真实办公数据——两者接上，才算「控得住平台」。
