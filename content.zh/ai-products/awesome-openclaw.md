---
aliases:
  - /open-source-community/awesome-openclaw/
  - /tutorials/awesome-openclaw/
title: Claw 生态
weight: 20
date: 2026-02-09T14:43:00+08:00
bookToc: false
noTocArea: true
bookHidden: false
---
## OpenClaw 生态分支（选型速览）

下面按 **开源项目** 和 **非开源产品** 分开整理，方便按使用场景和授权模式选型。

### 开源项目 / 工具

| 项目 | 实现 | 核心卖点 / 定位 | 资源占用 / 部署体验 | 已知问题 / 注意点 | 仓库 |
| --- | --- | --- | --- | --- | --- |
| OpenClaw（原版） | Node.js | 功能最全；Gateway 面板很强 | 跑起来内存 \(> 1GB\)；多挂 Agent 风扇起飞 | 体量臃肿（几十万行），对机器/环境要求高 | [openclaw/openclaw](https://github.com/openclaw/openclaw) |
| OpenClaw Installer（Windows 一键部署） | C#（WinForms / .NET） | Windows 免折腾安装器：隔离下载 Node.js/MinGit；自动配 NPM 镜像与 GitHub 加速 | 一键部署 + 生成 `start.ps1` 启动脚本；不污染全局环境，用完可整目录删除 | 仅 Windows；代理/加速链接建议使用你信任的来源 | [diandianti/clawInstaller](https://github.com/diandianti/clawInstaller) |
| OpenClaw Killer（卸载工具） | Shell + PowerShell | 一键卸载 OpenClaw（停服务/清配置/删状态/清 workspace），尽量做到“无残留” | 跨平台脚本；不需要 sudo；支持多 profile 清理 | **破坏性操作**：建议先通读脚本确认删除路径；Windows 可能需要调整 PowerShell 执行策略 | [orange2ai/openclaw-killer](https://github.com/orange2ai/openclaw-killer) |
| Nanobot | Python | 清爽版；港大团队；适合学源码/看架构 | 核心代码几千行；不需要 Node 环境；可 Zeabur 一键部署 | 相比原版功能取舍更多（偏学习/精简） | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) |
| ZeroClaw | Rust | 极省资源、很稳；适合软路由/旧 VPS 常驻 | 实测内存 ~5MB；无 GC 卡顿；启动快 | 生态/功能面可能不如原版“满血” | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) |
| PicoClaw | Go | 单文件二进制；上手省事；可在 Termux 跑 | 免 Docker；直接丢进去就能跑 | 偶发死锁，跑久了可能静默卡死，需要手动重启 | [sipeed/picoclaw](https://github.com/sipeed/picoclaw) |
| NanoClaw | TypeScript（Node.js） | 多 Agent/多渠道；以“容器隔离”做安全；支持 Agent Swarms | `claude` 里跑 `/setup` 一键装；默认 Docker（macOS 可选 Apple Container）；依赖 Node.js 20+ | **平台限制**：README 标注 macOS/Linux；容器运行时是硬依赖（Windows 需 WSL2 才好用） | [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) |
| IronClaw | Rust（WASM 沙箱） | 主打隐私与安全；WASM capability sandbox + prompt injection 防护；支持 MCP | 需要 PostgreSQL 15+ + pgvector；提供 Windows MSI/脚本、brew、shell installer；本地数据库持久化 | **依赖偏重**：要装并维护 Postgres/pgvector；首次 onboarding 需要完成 DB/认证初始化 | [nearai/ironclaw](https://github.com/nearai/ironclaw) |
| TinyClaw | Node.js（TS + Shell） | 多 Agent/多团队/多渠道；带 Web Portal（TinyOffice）+ TUI 可视化 | one-line install/Release 包/源码安装；依赖 Node 18+、tmux、jq、bash；可跑 TinyOffice（Next.js） | **环境要求**：偏类 Unix；Windows 通常走 WSL2；多渠道/多 Provider 时 token/权限配置工作量不小 | [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) |
| Claw-Empire | TypeScript（Node.js） | 像素风“虚拟公司”编排器；多 Provider（CLI/OAuth/API）统一看板；Agent 在隔离 git worktree 协作 | 本地优先：SQLite 持久化；对接 Claude Code/Codex/Gemini 等需要各自 CLI 或凭证 | **注意**：会创建/管理多个 worktree；多 Provider 场景下 OAuth/token 配置与权限边界要自己把控 | [GreenSheep01201/claw-empire](https://github.com/GreenSheep01201/claw-empire) |
| awesome-openclaw-skills | Markdown（列表仓库） | OpenClaw Skills “精选目录”（从 ClawHub 注册表过滤分类，方便找技能） | 无运行时；技能安装走 `npx clawhub@latest install <skill-slug>` 或手动复制到 `~/.openclaw/skills/` | **安全提示**：仓库“筛选但不审计”，技能来源可能随时变更；安装前建议自行审查源码/风险 | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) |
| Agent-Browser | Rust CLI + Node.js | 给 AI 用的浏览器自动化 CLI；`snapshot` 输出可引用的无障碍树（refs）以降 token | npm 全局装 `agent-browser`（推荐）并下载 Chromium；Linux 可用 `--with-deps` 安装系统依赖 | **注意**：`npx` 走 Node 转发会明显变慢；首次需要下载 Chromium；Linux 需补齐浏览器依赖 | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) |
| OpenFang | Rust（单二进制） | Agent OS；内置“Hands”做 24/7 定时自主工作；带 Dashboard | 安装脚本（macOS/Linux `curl … \| sh`；Windows `irm … \| iex`）；`openfang init` / `openfang start`；Dashboard 默认 `http://localhost:4200` | **版本迭代快**：官方声明首个公开版本、可能有不稳定/破坏性变更；生产建议 pin commit | [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang) |
| NullClaw | Zig（静态小二进制） | 极小/极低内存；多 Provider + 多渠道；支持 MCP；强调可移植与沙箱 | 可 brew 安装；源码构建要求 Zig 0.15.2（版本锁得很死）；提供 Windows PowerShell 配置 PATH 的示例 | **生态与兼容性**：仍在快速演进期；构建/升级对 Zig 版本敏感；部分能力依赖宿主环境（如 openssl 等） | [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) |
| CoPaw | Python + TypeScript（AgentScope） | 协作个人智能体工作站；多渠道（钉钉/飞书/QQ/Discord/iMessage）；支持本地模型（llama.cpp/MLX） | 支持 `pip` / `curl` / Docker 部署；Web 控制台默认 `http://127.0.0.1:8088/` | **项目页**：<https://copaw.bot/zh/>；多渠道接入需要分别配置 bot/token | [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) |
| AionUi | TypeScript + Electron | 本地开源 24/7 Cowork 桌面端；内置 Agent（零配置）+ 多 CLI Agent 统一管理（含 OpenClaw/Claude Code/Codex 等） | 跨平台；支持 WebUI 远程访问、Telegram/Lark/钉钉通道；支持 Cron 定时自动化 | **注意**：多 Agent/多通道能力强但配置面会变大；远程访问建议做好权限与网络边界 | [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) |
| LobsterAI（有道） | Electron + React + TypeScript（含 Python） | 7×24 全场景 AI Agent；强调“一句话→自动规划→交付多模态结果”；本地与安全（目录边界授权、工具审批、可追溯） | 提供下载；支持长时记忆、定时任务、技能；支持 Telegram/Discord 等 IM 远程控制 | **注意**：支持本地/沙箱执行与权限审批；Windows 包含内置 Python 运行时（按需安装依赖） | [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) |
| ClawX | Node.js（基于 OpenClaw） | 24/7 自主数据监控；金融研究场景；多源聚合 + AI 分析；20+ 通道推送（WhatsApp/Telegram/飞书等）；55+ Skills 开箱即用 | 可视化界面；跨平台 macOS/Windows/Linux；支持 CLI + GUI；本地优先、数据不出设备 | **项目页**：<https://claw-x.com/>；需本地常驻；自备 AI Provider 与 API Key | [ValueCell-ai/ClawX](https://github.com/ValueCell-ai/ClawX) |

### 非开源产品 / SaaS

| 项目 | 类型 / 实现 | 核心卖点 / 定位 | 官网 |
| --- | --- | --- | --- |
| AutoClaw | 飞书 IM 工作台 + 本地 Agent 执行 | 将 Agent 执行力装进飞书对话框；一条对话就是任务入口，分身自动调用本地工具完成复杂任务 | <https://autoglm.zhipuai.cn/autoclaw/> |
| Qclaw | 桌面客户端 + 微信直连 | 通过微信远程操控电脑；内置国产大模型与 5000+ Skills 生态；覆盖自动开发、社媒运营、日常提醒等场景 | <https://claw.guanjia.qq.com/> |
| EasyClaw | Web SaaS（基于 OpenClaw 能力封装） | 面向企业/团队的“AI 员工”平台；用 OpenClaw 能力编排业务流程与自动化任务 | <https://easyclaw.work/zh-CN> |
| 阶跃 AI 桌面伙伴（StepFun） | 桌面客户端（macOS/Windows） | “在操作系统上的 Agent”；支持网页/文件操作、信息收集处理、本地文件管理、主动执行与定时任务 | <https://www.stepfun.com/download> |
| WorkBuddy（CodeBuddy） | Web 产品 / 办公 Agent 平台 | “AI Agent 办公新范式”；面向工作流与办公场景的智能体化协作 | <https://www.codebuddy.cn/work/> |

## 一句话建议

- **想体验“满血完整功能”**：优先上 **原版 OpenClaw**。
- **机器配置差/想软路由或旧 VPS 常驻**：优先 **ZeroClaw**；想要“单文件随便丢就跑”可选 **PicoClaw**（注意死锁坑）。
- **想研究 Agent 架构底层源码**：优先看 **Nanobot**（更轻、更好读）。

## 使用技巧

### 使用 `clawhub` 搜索并安装 OpenClaw Skills

- **官方 Skills（ClawHub）**：[clawhub.ai](https://clawhub.ai/)
- **国内优化的 Skills 社区（Skillhub）**：[skillhub.tencent.com](https://skillhub.tencent.com/)

可直接复制的示例（对话式指令）：

```text
帮我把 `find-skills` 装到 OpenClaw 里。
然后按这份文档把 Skillhub 商店接入好：
https://skillhub-1388575217.cos.ap-guangzhou.myqcloud.com/install/skillhub.md
```

## 相关链接

- [OpenClaw 101](https://openclaw101.dev/zh)：中文学习路径 + 资源聚合站（开源免费；收录大量教程与技能推荐）
- [awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)：社区维护的 OpenClaw 用例/场景集合（awesome list）
- [Claw（Qt 站点）](https://claw.qt.cool/)：ClawPanel 产品介绍页（演示/下载/部署指南聚合）
- [ClawPanel](https://github.com/qingchencloud/clawpanel)：OpenClaw 可视化管理面板（桌面端 Tauri v2；含内置 AI 助手、诊断与一键部署）
- [Clawd](https://clawd.org.cn/)：OpenClaw 中文社区分支站点（提供一键安装脚本、渠道接入文档与 Docker 部署）
- [Open Claw（.me）](https://open-claw.me/zh)：第三方“OpenClaw 资源中心/教程”站（条款声明与官方无关联；整理安装配置与 FAQ）
- [Open Claw（.online）](https://open-claw.online/zh)：第三方生产级教程门户（按学习路径组织：本地安装、Docker/VPS 部署、渠道接入与排错）
- [Open Claw（.org）](https://open-claw.org/zh)：第三方宣传/落地页（强调“本地运行/主动性/订阅”等卖点，非官方域名）
- [OpenClaw Agent](https://openclawagent.net/zh)：OpenClaw 导航与快速上手页（聚合官方文档、GitHub 组织、速查表与技能入口）
- [OpenClaw China](https://openclawchina.com/)：第三方中文部署指南站（面向国内渠道：飞书/钉钉/企微等，提供快速开始与部署教程）
- [OpenClaw Skills](https://openclawskills.io/zh/skills)：第三方技能目录站（分类浏览技能列表与安装命令；含站点条款免责声明）
