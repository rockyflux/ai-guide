# Claude Code 实战上手指南

约 10～15 分钟走完主路径（第 1～5 节）。用桌面版再看第 6 节。官方长文：[Best practices](https://code.claude.com/docs/zh-CN/best-practices)。

## 1. 选形态并安装

| 方式 | 适合谁 | 怎么装 |
| --- | --- | --- |
| **桌面版** | 要 GUI、多会话、diff / 预览 | [claude.com/download](https://code.claude.com/docs/zh-CN/desktop-quickstart) → 登录 → **Code** 选项卡（与 CLI 同一引擎） |
| **官方 CLI** | 终端、脚本、自动化 | 见下方命令 |
| **中转 / Coding Plan** | 国内网络或不想直连官方 | [Coding Plan](/programming/coding-plan.html) · [CC Switch](/programming/cc-switch.html) · [账号切换](/agent-tools/account-switch.html) |

CLI：

```bash
# 以官方文档为准
npm install -g @anthropic-ai/claude-code
claude --version
```

环境底子（Node、Git、终端）：[开发环境准备](/programming/dev-start.html)。Windows 上也可在 WSL 里跑：[WSL 开发环境](/practice/wsl.html)。

## 2. 第一次进项目

**CLI：** 仓库根目录执行 `claude`。  
**桌面版：** Code 里选文件夹开会话；发消息前看输入框下方一行——环境（本机 / Cloud / SSH 等）→ 文件夹 → 权限（复杂需求先 **Plan**，确认后再 **Accept edits** / **Manual**）→ 模型。

两边接着做同一件事：

1. 跑 `/init`，生成起步用的 `CLAUDE.md`，再按项目裁短。
2. 只写 Claude **从代码推不出来**的约定：构建 / 测试怎么跑、分支规范、禁止自动做的事、密钥放哪。
3. 需求、设计、接口说明放进 Agent 可读目录（常见 `docs/ref/`）。Word / PPT / PDF 先转 Markdown：[anydoc](https://anydoc.wiki/) · [MinerU](https://mineru.net/OpenSourceTools/Extractor)。

```markdown
# 项目约定
- 构建：npm run build
- 测试：npm test
- 提交前跑 lint；不要擅自 push / 改生产配置
```

臃肿的 `CLAUDE.md` 会被忽略一半——每一行都问：删掉它 Claude 会不会犯错？

## 3. 配置 MCP（按需）

概念：[MCP](/agent/mcp.html)。和 Cursor 共用的「先装这些」见 [Cursor 实战 · 配置 MCP](/practice/cursor.html#_2-配置-mcp)；Claude Code 用用户级 / 项目级 MCP 接入即可。

| 优先级 | 工具 | 场景 |
| --- | --- | --- |
| 高 | [Context7](https://context7.com/) | 当前版官方文档，减幻觉 |
| 高 | [anysearch](https://www.anysearch.com) / Tavily | 实时检索与 URL 抽取 |
| 中 | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 浏览器 / UI 验收 |
| 中 | DB / 内部 MCP | 查库、工单、监控等团队工具 |

可视化管供应商 / MCP / Skills：[CC Switch](/programming/cc-switch.html) · [magpie](https://github.com/yetone/magpie)。

## 4. Plugins / Skills

`/plugin` 装市场插件；Skills 规范见 [Agent Skills](/agent/skills.html)。

**推荐先装** [Everything Claude Code](https://github.com/affaan-m/everything-claude-code)：

```text
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code
```

插件不会自动分发 `rules`，需手动拷：

```bash
git clone https://github.com/affaan-m/everything-claude-code.git
cp -r everything-claude-code/rules/* ~/.claude/rules/
```

**工程习惯 Skills**（可与 Cursor / Codex 同装）：

```bash
npx skills add tw93/Waza -a claude-code codex cursor -g -y
```

可选：`/plugin marketplace add obra/superpowers-marketplace` → `/plugin install superpowers@superpowers-marketplace`（TDD / 调试等工作流）。跨工具管理：[Skills Manager](https://skillsmanager.dev/zh)。

## 5. 日常怎么用（少踩坑）

1. **先规划再改代码**：复杂需求先 Plan Mode（桌面用权限选择器；CLI 说「先只读、出计划」），确认文件与步骤后再实现。
2. **给可验证标准**：测试命令、期望输出、UI 截图；改完让 Claude 自己跑（桌面可开浏览器预览 / Auto-verify）。
3. **管住 context**：飘了就 `/compact` 或开新会话；大范围探索用子 Agent；桌面侧边聊天（`Cmd/Ctrl+;` 或 `/btw`）问旁支，不污染主会话。
4. **权限别一路狂点**：常用安全命令可放 allowlist；删库、强推、改生产保持确认；Bypass permissions 仅沙箱 / 虚拟机。
5. **并行**：桌面多会话；Git 仓库可开 **Worktree**，会话落在隔离副本。编排见 [多 Agent 协作工作流](/programming/ccg-workflow.html)。

开场提示可直接贴：

```text
先只读探索，不要改文件。讲清：相关目录、现有测试怎么跑、改动会影响谁。
然后给出实现计划；等我确认后再动代码，改完跑测试并汇报结果。
```

## 6. 桌面版补充（用 GUI 再看）

官方：[Desktop](https://code.claude.com/docs/zh-CN/desktop) · [快速开始](https://code.claude.com/docs/zh-CN/desktop-quickstart)。同窗还有 Chat、Cowork；本指南只抓 Code。

**相对 CLI 更顺手：**

- 窗格拼工作区：聊天 / diff / 浏览器预览 / 终端 / 文件
- 行内评论 diff；本地起 dev server 自动验证
- Computer use（控本机 GUI，研究预览；需 Pro/Max/Ultra）

**和 CLI 共用：**

- 同机可同时开；会话列表各自独立。共享 `CLAUDE.md`、权限规则、`~/.claude` / 项目级配置
- CLI 用 Claude 订阅登录时：`/desktop` 把当前会话带到桌面（macOS / x64 Windows；API Key / Bedrock 等不适用）
- `claude --desktop`（≥ v2.1.285）直接开桌面；`--continue` / `--resume <id>` 可带上已有 CLI 会话
- Desktop 读 `claude_desktop_config.json` 里的 MCP；独立 CLI **不读**。给 CLI 用：`claude mcp add-from-claude-desktop`（macOS / WSL）

**界面汉化（可选、非官方）：** [claude-desktop-zh-cn](https://github.com/javaht/claude-desktop-zh-cn)。改本机资源文件，官方更新后常需重打；微软商店版不支持，用官网安装包。装前退出 Claude，按仓库 README 选平台脚本。

## 7. 延伸阅读

- 官方最佳实践：[code.claude.com/docs/zh-CN/best-practices](https://code.claude.com/docs/zh-CN/best-practices)
- Everything Claude Code：[affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)
- WSL：[WSL 开发环境](/practice/wsl.html)
