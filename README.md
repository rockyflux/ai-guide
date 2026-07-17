<div align="center">

# AI 编程指南

**面向有经验开发者的任务导向中文指南**

选模型与工具 → 搭环境接模型 → 协作工作流 → 智能体工程化 → 项目实践闭环

[![在线阅读](https://img.shields.io/badge/在线阅读-ai--guide.180813.xyz-blue?style=for-the-badge)](https://ai-guide.180813.xyz/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-0.148.0-ff4088)](https://gohugo.io/)
[![Deploy](https://github.com/rockyflux/ai-guide/actions/workflows/hugo.yml/badge.svg)](https://github.com/rockyflux/ai-guide/actions/workflows/hugo.yml)
[![GitHub stars](https://img.shields.io/github/stars/rockyflux/ai-guide?style=social)](https://github.com/rockyflux/ai-guide/stargazers)

</div>

---

## 这是什么

把 AI 从「偶尔能用」变成「稳定交付」的中文实践指南。内容按任务组织，不按概念堆砌。

适合：已有开发经验，想系统落地 AI 编程、多 Agent 协作与项目级 SOP 的人。

![AI Guide](static/images/index/flow.png)

## 四条主线

| 主线 | 解决什么问题 |
| --- | --- |
| [AI 编程](https://ai-guide.180813.xyz/ai-programming/) | 选模型、选工具、搭环境、补方法论 |
| [协作与工作流](https://ai-guide.180813.xyz/workflow/) | 多模型协作、多 Agent 编排、规格驱动闭环 |
| [AI 智能体](https://ai-guide.180813.xyz/agent/) | Rules / Skills / MCP / Hooks / Subagents |
| [项目实践](https://ai-guide.180813.xyz/project-practice/) | 从案例到 SOP，把 AI 用进真实交付 |

支线：[大模型](https://ai-guide.180813.xyz/large-models/) · [教程与资源](https://ai-guide.180813.xyz/tutorials/) · [开源与社区](https://ai-guide.180813.xyz/open-source-community/)

## 按任务直达

### 1. 选模型、选工具、控成本

- [AI 编程模型选型](https://ai-guide.180813.xyz/ai-programming/models/) — 能力 × 成本 × 任务适配
- [AI Coding Plan 订阅选型](https://ai-guide.180813.xyz/ai-programming/coding-plan/) — 套餐怎么选更划算
- [AI 编程工具汇总](https://ai-guide.180813.xyz/ai-programming/vb-code-tool/) — IDE / 插件 / Agent 工具对比
- [AI CLI 工具横评](https://ai-guide.180813.xyz/ai-programming/code-cli/) — Claude Code / Codex / Gemini CLI 等
- [AI 编程省钱之道](https://ai-guide.180813.xyz/ai-programming/ai-coding-save-money/) — 免费额度、Token 与多端复用
- [2026 年主流大模型盘点](https://ai-guide.180813.xyz/large-models/models-2026/) · [价格对比](https://ai-guide.180813.xyz/large-models/model-price/)

### 2. 一次把环境与模型接口配好

- [开发环境准备](https://ai-guide.180813.xyz/ai-programming/dev-start/) — 基础工具链一站式准备
- [WSL + Claude Code](https://ai-guide.180813.xyz/project-practice/wsl/) — Windows 下更顺手的 Linux 开发环境
- [环境配置与增强工具集](https://ai-guide.180813.xyz/ai-programming/env-and-tools/) — 环境变量、供应商切换、常用增强
- [ZCF](https://ai-guide.180813.xyz/ai-programming/zcf/) · [CC-Switch](https://ai-guide.180813.xyz/ai-programming/cc-switch/) · [CPA](https://ai-guide.180813.xyz/ai-programming/cpa/)

### 3. 把「对话」升级成可交付工作流

- [协作与工作流入口](https://ai-guide.180813.xyz/workflow/) — 编排与闭环工具总索引
- [工作流项目集](https://ai-guide.180813.xyz/workflow/ccg-workflow/) — 协作类项目列表与选型
- [CCG](https://ai-guide.180813.xyz/workflow/ccg/) · [GSD](https://ai-guide.180813.xyz/workflow/gsd/) · [Superpowers](https://ai-guide.180813.xyz/workflow/superpowers/)
- [oh-my-claudecode](https://ai-guide.180813.xyz/workflow/oh-my-claudecode/) · [Trellis](https://ai-guide.180813.xyz/workflow/trellis/)

### 4. 搭可长期复用的 Agent 体系

- [Agent 工作流](https://ai-guide.180813.xyz/agent/workflow/) — 规则、工具、子 Agent 编排
- [Rules](https://ai-guide.180813.xyz/agent/rules/) · [Skills](https://ai-guide.180813.xyz/agent/skills/) · [MCP](https://ai-guide.180813.xyz/agent/mcp/)
- [Hooks](https://ai-guide.180813.xyz/agent/hooks/) · [Subagents](https://ai-guide.180813.xyz/agent/subagents/) · [Commands](https://ai-guide.180813.xyz/agent/commands/)

### 5. 照着案例跑通完整项目

- [新手端到端路径](https://ai-guide.180813.xyz/project-practice/practices-two/) — 站内内容按闭环顺序串起来
- [Cursor 上手](https://ai-guide.180813.xyz/project-practice/cursor/) · [Codex 上手](https://ai-guide.180813.xyz/project-practice/codex/)
- [案例练手](https://ai-guide.180813.xyz/project-practice/practices-one/) · [需求到设计原型](https://ai-guide.180813.xyz/project-practice/requirements-to-design-prototype/)
- [Claude Code 最佳实践](https://ai-guide.180813.xyz/project-practice/best-practices/) · [Everything Claude Code](https://ai-guide.180813.xyz/project-practice/everything-claude-code/)
- [Kiro 实战](https://ai-guide.180813.xyz/project-practice/kiro-practice/) · [Stitch × Figma × MCP](https://ai-guide.180813.xyz/project-practice/google-stitch-figma-mcp/)

> 完整导航与更多页面见 [在线站点首页](https://ai-guide.180813.xyz/)。

## 仓库结构

```text
ai-guide/
├── content.zh/          # 中文内容（Markdown）
│   ├── ai-programming/  # 选型 / 环境 / 工具
│   ├── workflow/        # 多模型 / 多 Agent 协作
│   ├── agent/           # Rules / Skills / MCP 等
│   ├── project-practice/# 端到端闭环实践
│   ├── large-models/    # 模型认知 / 对比 / 价格
│   ├── tutorials/       # 教程与周边资源
│   └── open-source-community/
├── layouts/             # 主题局部覆盖
├── assets/ · static/    # 样式与静态资源
└── .github/             # CI 与 Issue / PR 模板
```

## 本地开发

需要 **Hugo Extended 0.148.0+** 与 Git：

```bash
git submodule update --init --recursive
hugo server
```

访问：`http://localhost:1313`

## 参与贡献

- [贡献指南](CONTRIBUTING.md) — Fork → 改 `content.zh/` → 本地预览 → PR
- [安全策略](SECURITY.md)
- [Issues](https://github.com/rockyflux/ai-guide/issues) · [Discussions](https://github.com/rockyflux/ai-guide/discussions)

## 许可证

[MIT](LICENSE)

---

<div align="center">

如果这个仓库对你有帮助，欢迎点个 Star。

</div>
