# 前言

打开对话窗口就能得到像样的答案，已经不稀奇。真正拉开差距的是：同样一批模型与工具，有人能稳定交付，有人却卡在「偶尔很强、经常翻车、账单不明」。

差距很少出在「会不会问问题」，而在于有没有把整条链路当成工程来管：选什么模型、怎么接入、用什么 Agent、Rules / Skills / MCP 怎么配、多轮任务如何拆、失败后如何恢复。

本指南面向有开发经验的读者，按任务组织，回答三件事：先做什么、后做什么、卡在哪一环该翻哪一章。目标是把 AI 从「会聊天」推进到「能稳定交付」。

## 全书讲什么

侧栏顺序即阅读主线：

| 篇章 | 解决什么 |
|------|----------|
| [AI 编程](/programming/full-pipeline.html) | 选模型与工具、买套餐与渠道、配环境、控成本，再定协作工作流 |
| [AI Agent 工具](/agent-tools/account-switch.html) | 账号切换、多 Agent 工作区、终端 / 浏览器、路由网关、记忆检索 |
| [Agent 自定义](/agent/prompt.html) | Prompt → Skills → MCP → Hooks → Subagents |
| [编程实战](/practice/cursor.html) | Cursor / Codex / Kiro 上手包，以及 Claude Code 实践 |
| [场景实战](/scenarios/workbuddy-doubao-work.html) | 桌面 Agent、办公 CLI、需求到原型、AI 绘图与设计到代码 |
| [学习资源](/resources/ai-learning-guide.html) | 学习路线、社区资源与教程速查（按需查阅） |
| [应用选型](/products/ai-office-desktop.html) | 办公、对话、智能体、绘图视频与 OpenClaw 生态 |

## 怎么读

按当前任务跳读即可。更细的路径见 [阅读指南](/reading-guide.html)，章节入口见 [全书目录](/contents.html)。

1. 先读 [全流程总览](/programming/full-pipeline.html)，串起选型 → 接入 → Agent → 上下文。
2. 按手头任务从目录或阅读指南进入对应篇章。
3. 要立刻开工，优先：[Cursor](/practice/cursor.html)、[Codex](/practice/codex.html)、[Kiro](/practice/kiro-practice.html)。

工具与模型变化很快，内容以开源方式维护。欢迎在 [GitHub](https://github.com/rockyflux/ai-guide) 反馈问题、纠正过时信息、贡献实践经验。
