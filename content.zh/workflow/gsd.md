---
title: Get Shit Done(GSD)
weight: 22
bookToc: false
noTocArea: true
---

## GSD 是什么？

[GSD（Get Shit Done）](https://github.com/gsd-build/get-shit-done) 是一套面向 **Claude Code、OpenCode、Gemini CLI、Codex、Copilot、Cursor、Antigravity** 等运行时的 **元提示（meta-prompting）、上下文工程与规格驱动开发** 体系，目标是在长对话中缓解 **上下文腐烂（context rot）**——即上下文窗口被填满后质量下降的问题。

项目强调：把复杂度放在系统内部，而不是让你的日常流程变复杂；通过上下文工程、XML 提示结构、子智能体编排与状态管理，让智能体既有足够信息完成工作，也能做验证。

## 适合谁？

适合希望 **说清楚要什么就能稳定落地实现**、又不想按「大企业仪式」（冲刺仪式、故事点、复杂 Jira 流等）来演戏的开发者与小团队。

## 安装与更新

一键安装（安装器会引导选择运行时与全局/本地安装位置）：

```bash
npx get-shit-done-cc@latest
```

支持 macOS、Windows、Linux。非交互场景（Docker、CI、脚本）可使用例如：

```bash
npx get-shit-done-cc --claude --global
npx get-shit-done-cc --claude --local
```

其他运行时可用 `--opencode`、`--gemini`、`--codex`、`--copilot`、`--cursor`、`--antigravity` 或 `--all`。GSD 迭代较快，可定期重新执行上述命令保持更新。

安装后可在对应工具中验证，例如 Claude Code / Gemini：`/gsd:help`（具体以 [官方仓库说明](https://github.com/gsd-build/get-shit-done) 为准）。

## 使用上的建议

文档中常建议以 **高自动化** 方式运行 Claude Code（例如使用无摩擦权限模式），避免在大量琐碎操作上反复人工确认，否则与 GSD 追求的流畅自动化相悖。更细粒度的权限也可通过项目 `settings.json` 配置。

## 延伸阅读

- **仓库与发布说明**：[gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)
- **npm 包**：[get-shit-done-cc](https://www.npmjs.com/package/get-shit-done-cc)（安装入口为 `npx get-shit-done-cc@latest`）
