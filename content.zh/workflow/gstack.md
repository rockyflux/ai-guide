---
title: gstack(YC)
weight: 24
bookToc: false
noTocArea: true
---

## 一句话介绍

gstack 是 YC（Y Combinator）CEO Garry Tan 开源的一套 Claude Code 技能包，把“单人写代码”升级为“可管理的虚拟工程团队”。

参考：

- 微信文章：[mp.weixin.qq.com/s/-kJeOfYHMvetALarZOuZFw](https://mp.weixin.qq.com/s/-kJeOfYHMvetALarZOuZFw)
- GitHub：[garrytan/gstack](https://github.com/garrytan/gstack)

## 核心逻辑：职责分离 + 流程化

它把一次典型研发链路拆成明确阶段，并用一组 `/slash command`（全部以 Markdown 编写、MIT 协议免费开源）来强制执行流程：

- 15 个专家角色（按 Sprint 顺序编排）
- 6 个增强工具（可选强化安全/审查/并行协作等）

你买到的不是“提示词”，而是一套让团队协作跑起来的“工作方式”。

## 15 个专家角色（按 Sprint 顺序）

下面这些命令把“思考、规划、构建、审查、测试、发布”串成一条流水线：

1. `/office-hours`：产品重构。在你写一行代码之前，重新定义问题本身。
2. `/plan-ceo-review`：CEO 视角。支持扩展/收缩/维持范围，并找出隐藏的更好产品方向。
3. `/plan-eng-review`：工程负责人。锁定架构、数据流、边界情况与测试方案，把隐藏假设逼出来。
4. `/plan-design-review`：资深设计师。对每个设计维度 0-10 打分，明确“满分标准”，并推进方案达标；带 AI 低质量内容检测。
5. `/design-consultation`：设计合伙人。从零构建完整设计系统，提出创意风险并生成真实产品原型图。
6. `/review`：Staff 工程师。定位“CI 通过但生产会炸”的 bug，自动修明显问题并标记完整性缺口。
7. `/investigate`：调试专家。系统性根因分析；铁律是“不调查不修复”，验证假设，连续 3 次失败后停止。
8. `/design-review`：会写代码的设计师。沿用 `/plan-design-review` 的审计方式，修复问题并做原子提交与前后对比截图。
9. `/qa`：QA 负责人。测试应用、找 bug、原子修复、重新验证，并为每次修复自动生成回归测试。
10. `/qa-only`：QA 报告员。与 `/qa` 类似，但只出报告不改代码。
11. `/ship`：发布工程师。同步主分支、跑测试、审计覆盖率、推送并开 PR（一条命令）。
12. `/document-release`：技术写作。更新所有项目文档，自动发现过时的 README 等内容。
13. `/retro`：工程负责人。团队维度的周度复盘：个人数据、发布连续性、测试健康趋势等。
14. `/browse`：QA 工程师。给代理装上“眼睛”：真实 Chromium 浏览器、真实点击、真实截图（约 100ms/次命令量级）。
15. `/setup-browser-cookies`：会话管理。把 Chrome/Arc/Brave/Edge 的 cookie 导入无头浏览器会话增强工具。

## 6 个增强工具（可选强化）

- `/codex`：OpenAI Codex CLI 的第二意见，对同一个 diff 做独立代码审查（审查/对抗性挑战/开放咨询）。
- `/careful`：安全护栏。在执行 `rm -rf`、`DROP TABLE`、强制推送等破坏性命令前发出警告。
- `/freeze`：编辑锁定，把文件编辑限制在一个目录内，调试时防止意外改动范围外代码。
- `/guard`：完整安全，把 `/careful` + `/freeze` 合并成一条命令。
- `/unfreeze`：解除 `/freeze` 限制。
- `/gstack-upgrade`：自我更新，把 gstack 升级到最新版本。

## 一个典型 Sprint 长什么样（示例）

当你说“我想做一个日历日报应用”时，第一步不是假设需求，而是运行：

- `/office-hours`：Claude 会追问具体痛点，并质疑你的表述框架；它不会“顺着你说的题目”假设场景，而是拆解你无意识描述的能力与前提假设，给出实现方案与工作量评估。

随后它会写出设计文档并流入下游技能，然后按工程链路推进，例如：

- `/plan-ceo-review`：审查范围，跑多个维度评估。
- `/plan-eng-review`：输出数据流 ASCII 图、状态机、错误路径、测试矩阵、故障模式与安全问题。

批准方案后进入落地阶段：通过 `/review`、`/qa`、`/ship` 等命令完成修复、验证与发布。

## 为什么能并行：Sprint 结构让代理知道“什么时候停”

gstack 单个 Sprint 就很强，但真正的变化来自并行运行多个 Sprint。

Garry Tan 使用名为 Conductor 的方式，让多个 Claude Code 会话并行运行在彼此隔离的工作区里：有的会话在跑 `/office-hours`，有的在跑 `/review`，也可能在 Staging 跑 `/qa` 或推动实现到其他分支。

并行能工作，靠的不是“运气”，而是 Sprint 流程结构本身：

- 没流程：代理会各自探索，形成混乱来源。
- 有流程：代理能在“思考、规划、构建、审查、测试、发布”之间知道自己该做什么、什么时候该停。

管理方式也类似 CEO 管团队：在关键决策节点介入，其余阶段让代理执行。

## 几个值得单独说的能力

- `/qa` 让并行能力翻倍：从 6 个并行工作流扩展到 12 个。Claude 不仅指出问题，还能修复并生成回归测试、验证修复结果。
- 设计贯穿整个系统：`/design-consultation` 不只选字体，它会研究领域现状、提出保守选择与创意风险，生成原型并产出 `DESIGN.md`；后续 `/design-review` 与 `/plan-eng-review` 会读取并沿用这些设计选择。
- 文档不再滞后：`/document-release` 读取项目里每个文档文件，交叉对比 diff 并更新所有漂移内容（README、架构文档、CONTRIBUTING、`CLAUDE.md`、TODO 等）；`/ship` 还会自动触发这一过程。
- 浏览器“交接”让代理卡住时也能继续：遇到验证码/认证墙/MFA 时，浏览器交接会在同一页面打开可见 Chrome 窗口（带所有 cookie 和标签页）。你处理完告诉 Claude，它从原地继续；代理在连续失败 3 次后会自动建议这个操作。
- 双 AI 交叉审查：`/codex` 让 OpenAI Codex CLI 对同一个 diff 做独立审查。当 `/review` 与 `/codex` 都审查过同一分支，可以得到交叉分析（共同发现 vs 各自独有），并主动建议下一步。
- 阶段感知的“下一步建议”：gstack 会判断你所处阶段（头脑风暴/审查/调试/测试等），推荐合适技能；如果不需要，可以停止建议，它会跨会话记住。

## 安装与更新

安装需要：

- Claude Code
- Git
- Bun v1.0 及以上版本

### 第一步：安装到本机（约 30 秒）

打开 Claude Code，粘贴以下内容（由 Claude 完成后续步骤）：

```bash
Install gstack:
run git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack &&
cd ~/.claude/skills/gstack &&
./setup
```

然后在 `CLAUDE.md` 添加 `gstack` 配置段，核心要求包括：

- 网页浏览使用 gstack 的 `/browse`
- 不使用 `mcp__claude-in-chrome__*` 相关工具
- 列出可用的技能，方便 Claude 知道有哪些 slash command 可调

### 技能列表（可直接粘贴到 CLAUDE.md）

```md
gstack
Use the /browse skill from gstack for all web browsing, never use mcp__claude-in-chrome__* tools.

Available skills:
/office-hours
/plan-ceo-review
/plan-eng-review
/plan-design-review
/design-consultation
/review
/ship
/browse
/qa
/qa-only
/design-review
/setup-browser-cookies
/retro
/investigate
/document-release
/codex
/careful
/freeze
/guard
/unfreeze
/gstack-upgrade
```

通常 Claude 会询问你是否也把 gstack 添加到当前项目（方便团队成员共享）。

### 第二步（可选）：添加到项目仓库，让团队成员共享

如果你希望团队在同一项目里直接可用，把技能包复制进仓库并执行 setup（由 Claude 引导你完成配置段写入）：

```bash
Add gstack to this project:
run cp -Rf ~/.claude/skills/gstack .claude/skills/gstack &&
rm -rf .claude/skills/gstack/.git &&
cd .claude/skills/gstack &&
./setup
```

说明：

- 实际文件会被提交到仓库（不是子模块）；`git clone` 后即可直接使用
- 所有内容都在 `.claude/` 目录内，不会修改 `PATH`，也不会在后台运行任何东西

## 结尾

AI 编程从个人玄学 -> 团队操作系统。
