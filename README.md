<div align="center">

# AI 编程指南

**面向有经验开发者的任务导向中文指南**

[![在线阅读](https://img.shields.io/badge/📖_在线阅读-rockyflux.github.io/ai--guide-blue?style=for-the-badge)](https://rockyflux.github.io/ai-guide/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-0.148.0-ff4088)](https://gohugo.io/)
[![Deploy](https://github.com/rockyflux/ai-guide/actions/workflows/hugo.yml/badge.svg)](https://github.com/rockyflux/ai-guide/actions/workflows/hugo.yml)
[![GitHub stars](https://img.shields.io/github/stars/rockyflux/ai-guide?style=social)](https://github.com/rockyflux/ai-guide/stargazers)

</div>

---

## 这是什么

这是一个按“任务”组织的 AI 编程中文指南，核心路径是：

```text
选模型与工具 -> 搭环境接模型 -> 协作工作流 -> 智能体工程化 -> 用项目实践跑通闭环
```

适合已经有开发经验、希望把 AI 从“偶尔能用”变成“稳定交付”的人。

![AI Guide](static/images/index/flow.png)

## 从哪里开始

当前仓库内容已经从原来的“三条主线”扩展为更清晰的“四条主线”：

| 主线 | 适合你现在要解决的问题 |
| --- | --- |
| [AI 编程](https://rockyflux.github.io/ai-guide/ai-programming/) | 选模型、选工具、搭环境、补方法论 |
| [协作与工作流](https://rockyflux.github.io/ai-guide/workflow/) | 多模型协作、多 Agent 编排、规格驱动闭环 |
| [AI 智能体](https://rockyflux.github.io/ai-guide/agent/) | Rules、Skills、MCP、Hooks、Subagents 等工程化机制 |
| [项目实践](https://rockyflux.github.io/ai-guide/project-practice/) | 从案例到 SOP，把 AI 真正用进项目交付 |

## 按任务直达

### 1. 我想先选模型、选工具、算成本

- [AI 编程模型选型](https://rockyflux.github.io/ai-guide/ai-programming/models/)
- [AI Coding Plan 订阅选型](https://rockyflux.github.io/ai-guide/ai-programming/coding-plan/)
- [AI 编程工具汇总](https://rockyflux.github.io/ai-guide/ai-programming/vb-code-tool/)
- [AI CLI 工具横评](https://rockyflux.github.io/ai-guide/ai-programming/code-cli/)
- [2026 年主流大模型盘点](https://rockyflux.github.io/ai-guide/large-models/models-2026/)
- [大模型价格与成本对比](https://rockyflux.github.io/ai-guide/large-models/model-price/)

### 2. 我想把环境和模型接口一次配好

- [开发环境准备](https://rockyflux.github.io/ai-guide/ai-programming/dev-start/)
- [AI 编程环境配置与增强工具集](https://rockyflux.github.io/ai-guide/ai-programming/env-and-tools/)
- [ZCF 零配置 Claude Code](https://rockyflux.github.io/ai-guide/ai-programming/zcf/)
- [CC-Switch 可视化配置](https://rockyflux.github.io/ai-guide/ai-programming/cc-switch/)
- [CLI 代理 API（CPA）](https://rockyflux.github.io/ai-guide/ai-programming/cpa/)

### 3. 我想把“对话”升级成“可交付工作流”

- [协作与工作流栏目入口](https://rockyflux.github.io/ai-guide/workflow/)
- [工作流项目集](https://rockyflux.github.io/ai-guide/workflow/ccg-workflow/)
- [CCG 多模型协作开发](https://rockyflux.github.io/ai-guide/workflow/ccg/)
- [GSD（Get Shit Done）](https://rockyflux.github.io/ai-guide/workflow/gsd/)
- [Superpowers](https://rockyflux.github.io/ai-guide/workflow/superpowers/)
- [oh-my-claudecode（OMC）](https://rockyflux.github.io/ai-guide/workflow/oh-my-claudecode/)
- [Trellis](https://rockyflux.github.io/ai-guide/workflow/trellis/)

### 4. 我想搭一个能长期复用的 Agent 体系

- [Agent 工作流](https://rockyflux.github.io/ai-guide/agent/workflow/)
- [Rules](https://rockyflux.github.io/ai-guide/agent/rules/)
- [Skills](https://rockyflux.github.io/ai-guide/agent/skills/)
- [MCP](https://rockyflux.github.io/ai-guide/agent/mcp/)
- [Hooks](https://rockyflux.github.io/ai-guide/agent/hooks/)
- [Subagents](https://rockyflux.github.io/ai-guide/agent/subagents/)
- [Commands](https://rockyflux.github.io/ai-guide/agent/commands/)
- [Output styles](https://rockyflux.github.io/ai-guide/agent/output-styles/)

### 5. 我想照着案例先跑通一个完整项目

- [新手端到端项目实战路径](https://rockyflux.github.io/ai-guide/project-practice/practices-two/)
- [Cursor 实战上手指南](https://rockyflux.github.io/ai-guide/project-practice/cursor/)
- [Codex 实战上手指南](https://rockyflux.github.io/ai-guide/project-practice/codex/)
- [项目实践：从一个具体案例开始](https://rockyflux.github.io/ai-guide/project-practice/practices-one/)
- [从需求到设计原型](https://rockyflux.github.io/ai-guide/project-practice/requirements-to-design-prototype/)
- [Google Stitch × Figma × MCP 实践](https://rockyflux.github.io/ai-guide/project-practice/google-stitch-figma-mcp/)
- [其他平台实践速览](https://rockyflux.github.io/ai-guide/project-practice/other-platform-practices/)
- [豆包 AI 绘图闭环小练习](https://rockyflux.github.io/ai-guide/project-practice/ai-drawing-practice/)

## 仓库结构

```text
ai-guide/
├── README.md
├── hugo.toml
├── content.zh/
│   ├── _index.md
│   ├── ai-programming/
│   ├── workflow/
│   ├── agent/
│   ├── project-practice/
│   ├── large-models/
│   ├── tutorials/
│   └── open-source-community/
├── layouts/
├── assets/
├── static/
├── .github/
└── issues/
```

## 本地开发

前置要求：

- Hugo Extended 0.148.0+
- Git

启动方式：

```bash
git submodule update --init --recursive
hugo server
```

默认访问：`http://localhost:1313`

## 参与贡献

- 仓库入口：[README.md](README.md)
- 贡献说明：[CONTRIBUTING.md](CONTRIBUTING.md)
- 安全策略：[SECURITY.md](SECURITY.md)
- 问题反馈：[GitHub Issues](https://github.com/rockyflux/ai-guide/issues)
- 交流讨论：[GitHub Discussions](https://github.com/rockyflux/ai-guide/discussions)

主要内容位于 `content.zh/`，Hugo 主题配置见 `hugo.toml`，局部覆盖在 `layouts/`。

## 许可证

本项目采用 [MIT](LICENSE) 许可证。

---

<div align="center">

**如果这个仓库对你有帮助，欢迎点个 Star。**

</div>
