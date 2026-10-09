---
title: AI 编程选型
weight: 10
bookToc: false
noTocArea: true
bookCollapseSection: false
bookFlatSection: true
---


## AI 编程选型：先决定用什么

本栏面向 **AI 编程** 场景，按决策顺序组织：

1. **选模型**：看能力边界与 Token 成本
2. **选工具 / 工作流**：IDE、Agent CLI、协作范式
3. **选接入方式与控成本**：套餐、中转站、Token 治理
4. **搭环境**：开发栈、增强工具与清理

想先把「选型 → 买 API → 网关 → Agent → 上下文」整条线看懂，读 **[全流程总览]({{< relref "ai-programming/full-pipeline" >}})**。

办公 Agent / 对话 / 绘图视频等非编程场景见 **[AI 应用选型]({{< relref "ai-products/_index" >}})**。

### 全流程总览

- [全流程总览]({{< relref "ai-programming/full-pipeline" >}}) — 选型、接入、Agent 与上下文管理怎么串成一条线

### 选模型

- [评测基准与榜单]({{< relref "ai-programming/Leaderboard" >}}) — 主流基准、榜单来源与怎么读
- [LiveBench AI 排行榜]({{< relref "ai-programming/model-comparison" >}}) — 推理 / 编程 / 数学等维度对照
- [大模型价格]({{< relref "ai-programming/model-price" >}}) — Token 单价参考（按官方口径）

### 选工具 / 工作流

- [编程工具对比]({{< relref "ai-programming/vb-code-tool" >}}) — IDE、插件与 Agent 工具对比
- [编程 Agent 横评]({{< relref "ai-programming/code-cli" >}}) — Claude Code、Codex、Gemini CLI 等
- [协作工作流选型]({{< relref "ai-programming/ccg-workflow" >}}) — 多 Agent / SDD / Skills 协作范式

### 选接入方式与控成本

- [Coding Plan 与渠道]({{< relref "ai-programming/coding-plan" >}}) — 国内 / 海外 Coding Plan 与渠道对照
- [API 中转站]({{< relref "ai-programming/api-relay-station" >}}) — 链路结构、成本倍率与渠道风险
- [AI 大模型 API 聚合平台]({{< relref "ai-programming/api-aggregation-platforms" >}}) — OpenRouter、小马算力、DMXAPI 等
- [省钱与 Token 治理]({{< relref "ai-programming/ai-coding-save-money" >}}) — 任务拆分、模型分层与上下文治理

### 搭环境与增强

- [开发环境准备]({{< relref "ai-programming/dev-start" >}}) — PowerShell 7、VS Code、Node/Python/Git 等
- [环境增强工具集]({{< relref "ai-programming/env-and-tools" >}}) — 桌面 / 路由 / 终端 / 插件选型速查
- [卸载与清理]({{< relref "ai-programming/cleanup-uninstall" >}}) — 缓存、开发产物与卸载工具
- [WSL 开发环境]({{< relref "project-practice/wsl" >}}) — Windows 下 Linux 开发环境（在项目实践栏）

### 下一步

选完模型与工具、配好环境后：

- [项目实践与案例]({{< relref "project-practice/_index" >}}) — Cursor / Codex / Kiro 开工包与交付闭环
- [学习资源]({{< relref "tutorials/_index" >}}) — 系统学习与站外资源
