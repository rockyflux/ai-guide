---
title: LLM 相关评测基准与榜单汇总
weight: 999
date: 2026-02-09T14:43:00+08:00
---

# LLM 相关评测基准与榜单汇总｜Leaderboard

## 1\. LiveBench

**链接**：[https://livebench.ai](https://livebench.ai/)

**保持更新**：✅

**主办**：LiveBench/Abacus.AI 等

**备注**：动态题库、客观打分、避免“LLM裁判”，官方说明每月释出新题/更难题；有论文与数据手册可查。可参考其GitHub仓库（[https://github.com/LiveBench/LiveBench/blob/main/README.md](https://github.com/LiveBench/LiveBench/blob/main/README.md)）及官方文档（[https://livebench.ai/livebench.pdf](https://livebench.ai/livebench.pdf)）。

## 2\. Artificial Analysis

**链接**：[https://artificialanalysis.ai/leaderboards/models](https://artificialanalysis.ai/leaderboards/models)

**保持更新**：✅

**主办**：Artificial Analysis

**备注**：综合聚合类榜单，包含 MMLU‑Pro、AAII 等多个基准数据，提供性能、价格、速度、上下文长度等多维度对比。详细信息可查看其官方榜单页面（[https://artificialanalysis.ai/leaderboards/models](https://artificialanalysis.ai/leaderboards/models)）。

## 3\. aider polyglot

**链接**：[https://aider.chat/docs/leaderboards/](https://aider.chat/docs/leaderboards/)

**保持更新**：✅

**主办**：Aider

**备注**：专注于多语言代码编辑能力的基准，基于 Exercism 平台的 225 道难题构建，覆盖 C++、Go、Java、JavaScript、Python、Rust 六种编程语言，是旧版 Python 代码榜单的替代版本。官方详情可参考（[https://aider.chat/docs/leaderboards/](https://aider.chat/docs/leaderboards/)）。

## 4\. Chatbot Arena（LMSYS）

**链接**：[https://lmarena.ai/leaderboard](https://lmarena.ai/leaderboard)

**保持更新**：✅

**主办**：LMSYS / UC Berkeley

**备注**：基于人类偏好投票的 Elo 排名体系，已累计覆盖 350 万+ 次投票；除主榜外，还设有 Hard、HARDAuto、Search 等子榜单。相关参考包括 LMArena 官网（[https://lmarena.ai/](https://lmarena.ai/)）、《华尔街日报》报道（[https://www.wsj.com/tech/ai/the-uc-berkeley-project-that-is-the-ai-industrys-obsession-bc68b3e3](https://www.wsj.com/tech/ai/the-uc-berkeley-project-that-is-the-ai-industrys-obsession-bc68b3e3)）及 LMSYS 技术博客（[https://lmsys.org/blog/2024-04-19-arena-hard/](https://lmsys.org/blog/2024-04-19-arena-hard/)）。

## 5\. 司南（OpenCompass）

**链接**：[https://github.com/open-compass/opencompass](https://github.com/open-compass/opencompass)

**保持更新**：✅

**主办**：上海AI实验室 / OpenCompass

**备注**：面向开源模型与 API 模型的统一评测框架，配套有 **Compass Academic** 学术榜单（部署于 Hugging Face Space）。可通过 GitHub 仓库（[https://github.com/open-compass/opencompass](https://github.com/open-compass/opencompass)）查看源码，或在 Hugging Face（[https://huggingface.co/spaces/opencompass/Compass\_Academic\_Leaderboard](https://huggingface.co/spaces/opencompass/Compass_Academic_Leaderboard)）查看学术榜单数据。

## 6\. SuperCLUE

**链接**：[https://superclueai.com/](https://superclueai.com/)

**保持更新**：✅

**主办**：CLUE 团队

**备注**：专注于中文通用能力的综合榜单与评测体系，长期维护更新，是中文大模型评测的重要参考之一。详细评测内容可访问官网（[https://superclueai.com/](https://superclueai.com/)）。

## 7\. AlpacaEval 2.0

**链接**：[https://tatsu-lab.github.io/alpaca\_eval/](https://tatsu-lab.github.io/alpaca_eval/)

**保持更新**：✅

**主办**：Stanford Tatsu Lab

**备注**：自动化指令跟随偏好评测基准，包含 length‑controlled（长度控制）版本，可有效缓解评测中的“长度偏置”问题。官方榜单（[https://tatsu-lab.github.io/alpaca\_eval/](https://tatsu-lab.github.io/alpaca_eval/)）及源码（[https://github.com/tatsu-lab/alpaca\_eval](https://github.com/tatsu-lab/alpaca_eval)）可在对应平台查看。

## 8\. SWE‑bench（总榜）

**链接**：[https://www.swebench.com/](https://www.swebench.com/)

**保持更新**：✅

**主办**：Princeton / SWE‑bench 团队

**备注**：聚焦真实开源项目 issue 修复能力的评测，包含 Verified（验证版）、Lite（精简版）、Multimodal（多模态版）等子榜单，并提供云端提交流程供模型测试。详细排名可参考官网（[https://www.swebench.com/](https://www.swebench.com/)）。

## 9\. OpenRouter Rankings

**链接**：[https://openrouter.ai/rankings](https://openrouter.ai/rankings)

**保持更新**：✅

**主办**：OpenRouter

**备注**：非纯能力榜单，核心统计 LLM 的**使用量/市占率**与品类热度，可帮助洞察当前市场中模型的“流行度”趋势。具体数据可查看 OpenRouter 排名页面（[https://openrouter.ai/rankings](https://openrouter.ai/rankings)）。

## 10\. HAL（Holistic Agent Leaderboard）

**链接**：[https://hal.cs.princeton.edu/](https://hal.cs.princeton.edu/)

**保持更新**：✅

**主办**：Princeton SAgE

**备注**：专注于 Agent（智能体）能力的总榜，采用多基准评测、成本感知机制及第三方独立评测，可直观查看模型在跨任务、跨数据集场景下的代理能力。官网（[https://hal.cs.princeton.edu/](https://hal.cs.princeton.edu/)）提供完整榜单数据。

## 11\. LLMDB（聚合）

**链接**：[https://llmdb.com/benchmarks](https://llmdb.com/benchmarks)

**保持更新**：✅

**主办**：LLMDB

**备注**：多基准数据汇总与可视化平台，包含 AIME、LiveCodeBench、BFCL、WMT24、FACTS 等多个专题评测页面，可一站式查看不同基准下的模型表现。详情可访问（[https://llmdb.com/benchmarks](https://llmdb.com/benchmarks)）。

## 12\. Vals AI Benchmarks

**链接**：[https://www.vals.ai/benchmarks](https://www.vals.ai/benchmarks)

**保持更新**：✅

**主办**：Vals AI

**备注**：聚焦**行业/场景化**评测的基准，覆盖法律、财税、金融等垂直领域，同时提供公开评测报告，并收录 MGSM、AIME 等学术基准的解析内容。参考资料包括 Vals AI 官网（[https://www.vals.ai/home](https://www.vals.ai/home)）及《华盛顿邮报》相关报道（[https://www.washingtonpost.com/politics/2025/04/22/ai-tools-mostly-fumble-basic-financial-tasks-study-finds/](https://www.washingtonpost.com/politics/2025/04/22/ai-tools-mostly-fumble-basic-financial-tasks-study-finds/)）。

## 13\. Search Arena

**链接**：[https://beta.lmarena.ai/leaderboard/search](https://beta.lmarena.ai/leaderboard/search)

**保持更新**：✅

**主办**：LMSYS

**备注**：专注于**联网问答**能力的榜单，核心考察模型的网页检索效率与引用内容的可溯源性，是评估模型实时信息获取能力的重要参考。可访问 beta 版页面（[https://beta.lmarena.ai/leaderboard/search](https://beta.lmarena.ai/leaderboard/search)）查看排名。

## 14\. Opper TaskBench

**链接**：[https://opper.ai/models](https://opper.ai/models)

**保持更新**：✅

**主办**：Opper Technology AB

**备注**：以**任务完成率**为核心的实战型基准，评分范围 0.0–1.0，覆盖 Context（上下文理解）、SQL（数据库操作）、Agents（智能体协作）、Normalization（数据标准化）四类任务，同时收录 GPT-5-mini、GPT-5-nano 等小模型的评测数据。详情可参考（[https://opper.ai/models](https://opper.ai/models)）。

## 15\. Roo Code

**链接**：[https://roocode.com/evals](https://roocode.com/evals)

**保持更新**：✅

**主办**：Roo Code

**备注**：代码能力评测基准，其使用的练习题与 aider polyglot 几乎一致，可作为代码类基准评测结果的交叉验证参考。具体评测内容可访问（[https://roocode.com/evals](https://roocode.com/evals)）。

## 16\. Yuapp

**链接**：[https://yupp.ai/leaderboard](https://yupp.ai/leaderboard)

**保持更新**：✅

**备注**：AI 模型评测排行榜网站，专注于代码能力评估，可作为代码类基准评测结果的交叉验证参考。。