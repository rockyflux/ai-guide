---
title: AI 模型：选型指南
weight: 10
bookToc: false
noTocArea: true
bookHidden: false
---

## 编程模型选型

本栏目按**选型决策路径**组织：从了解背景 → 认识市场 → 选型对比 → 成本评估。

### 1. 了解背景

- [2025年大模型发展总结]({{< relref "large-models/ai-2025" >}}) — 推理能力、智能体、开源生态等年度趋势

### 2. 认识市场

- [2026年主流大模型盘点]({{< relref "ai-programming/models-2026" >}}) — 国内外主流模型一览（OpenAI、Google、国产等）
- [Models.dev](https://models.dev/) — 开源 AI 模型规格数据库（OpenCode 维护），按 Model / Provider / Lab 聚合上下文长度、输入输出模态、推理与 Tool Call、Structured Output、权重开放程度及 API 价格；数据以 GitHub TOML 维护，可通过 `api.json`、`models.json`、`catalog.json` 程序化查询

### 3. 选型对比

- [LiveBench AI 排行榜]({{< relref "ai-programming/model-comparison" >}}) — 能力排行榜（推理、编程、数学等维度）
- [LLM 评测基准与榜单汇总]({{< relref "ai-programming/Leaderboard" >}}) — 评测基准、榜单来源与参考

### 4. 成本评估

- [大模型价格]({{< relref "ai-programming/model-price" >}}) — 国内外模型 API 价格参考（元/1M Tokens）
- [Models.dev](https://models.dev/) — 各 Provider 下同名模型的 USD 定价对照（Input / Output per 1M tokens），便于跨平台比价；可与上表交叉参考
- [AI Coding Plan 订阅选型]({{< relref "ai-programming/coding-plan" >}}) — 国内云厂商/原厂 Coding Plan、Claude Code 中转站、国外编程订阅产品价格对照
- [Roo Code Evals](https://roocode.com/evals) — 通过对最前沿大模型执行数百项多语言任务评测，给出每个模型在性能与成本之间的权衡指标

### 5. 产品与客户端

- [AI 产品推荐]({{< relref "ai-products/ai-product" >}}) — 桌面 Agent、API 客户端、翻译等实用产品


> 实践经验参考：有预算可优先考虑 Claude Opus / Codex，预算有限可优先评估国产 Coding Plan，零预算可以从 CPA 方案入手。
