---
aliases:
  - /large-models/Leaderboard/
title: 评测基准与榜单
weight: 13
date: 2026-02-09T14:43:00+08:00
bookHidden: false
---


## LLM 相关评测基准与榜单汇总｜Leaderboard

> 下列条目大致按**业内知名度 / 引用频率**排序（主观判断，非能力排名）。选型时建议交叉看 2–3 个不同方法论的榜单，不要只盯单一分数。

## 1\. Chatbot Arena（LMSYS / LMArena）

**链接**：[https://lmarena.ai/leaderboard](https://lmarena.ai/leaderboard)

**保持更新**：✅

**主办**：LMSYS / UC Berkeley

**备注**：目前最有影响力的**人类偏好**榜单：盲测对战 + Elo 排名，投票量极大，厂商与媒体常以此对标「体感强弱」。除主榜外还有 Hard、Style Control、Search 等子榜。适合看通用对话口碑，不适合单独当代码/Agent 能力结论。延伸阅读：[LMArena](https://lmarena.ai/)、[WSJ 报道](https://www.wsj.com/tech/ai/the-uc-berkeley-project-that-is-the-ai-industrys-obsession-bc68b3e3)、[Arena-Hard 博客](https://lmsys.org/blog/2024-04-19-arena-hard/)。

## 2\. SWE‑bench

**链接**：[https://www.swebench.com/](https://www.swebench.com/)

**保持更新**：✅

**主办**：Princeton / SWE‑bench 团队

**备注**：编程 Agent 领域的事实标准之一：用真实 GitHub issue 测「能不能修仓库」。含 Verified / Lite / Multimodal 等变体，结果常被论文与产品发布引用。看代码落地能力优先看这里，注意提交配置与 scaffold 差异会影响分数可比性。

## 3\. Artificial Analysis

**链接**：[https://artificialanalysis.ai/zh/leaderboards/models](https://artificialanalysis.ai/zh/leaderboards/models)

**保持更新**：✅

**主办**：Artificial Analysis

**备注**：偏「选型仪表盘」的聚合站：把质量分、价格、速度、上下文长度等放在同一视图对比，并汇总 MMLU‑Pro、AA 自有指数等。适合快速筛「够用且划算」的模型，细节仍需回看单项基准原文。

## 4\. OpenRouter Rankings

**链接**：[https://openrouter.ai/rankings](https://openrouter.ai/rankings)

**保持更新**：✅

**主办**：OpenRouter

**备注**：**用量 / 市占**榜，不是能力榜。反映聚合路由上真实调用热度与品类偏好，可用来判断「市场在用什么」，不宜当作谁更强。

## 5\. 司南（OpenCompass）

**链接**：[https://rank.opencompass.org.cn/leaderboard/llm](https://rank.opencompass.org.cn/leaderboard/llm)

**保持更新**：✅

**主办**：上海 AI 实验室 / OpenCompass

**备注**：国内最常用的统一评测框架之一，官方榜单覆盖开源与 API 模型。源码：[GitHub](https://github.com/open-compass/opencompass)；学术向补充：[Compass Academic（HF Space）](https://huggingface.co/spaces/opencompass/Compass_Academic_Leaderboard)。中文场景选型时优先对照。

## 6\. SuperCLUE

**链接**：[https://superclueai.com/](https://superclueai.com/)

**保持更新**：✅

**主办**：CLUE 团队

**备注**：长期维护的**中文通用能力**综合榜，维度贴近中文用户任务（理解、推理、生成等）。看国产/中文表现时与司南互补使用。

## 7\. aider polyglot

**链接**：[https://aider.chat/docs/leaderboards/](https://aider.chat/docs/leaderboards/)

**保持更新**：✅

**主办**：Aider

**备注**：面向**多语言代码编辑**的实战榜：基于 Exercism 225 题，覆盖 C++ / Go / Java / JS / Python / Rust。在 CLI 编程助手圈子里引用极多，适合交叉验证 SWE‑bench 之外的「改代码」能力。

## 8\. LiveBench

**链接**：[https://livebench.ai](https://livebench.ai/)

**保持更新**：✅

**主办**：LiveBench / Abacus.AI 等

**备注**：强调**抗污染**的客观基准：题库滚动更新、尽量避免 LLM-as-judge。适合看推理/知识类「硬指标」补充，方法论见 [README](https://github.com/LiveBench/LiveBench/blob/main/README.md) 与 [说明 PDF](https://livebench.ai/livebench.pdf)。

## 9\. Search Arena

**链接**：[https://beta.lmarena.ai/leaderboard/search](https://beta.lmarena.ai/leaderboard/search)

**保持更新**：✅

**主办**：LMSYS

**备注**：LMArena 的联网检索子榜：比的是「会不会查网页、引用能不能对上」，不是纯闭卷问答。需要评估实时信息能力时看这条，与主 Arena 分开解读。

## 10\. Models.dev

**链接**：[https://models.dev/](https://models.dev/)

**保持更新**：✅

**主办**：OpenCode

**备注**：开源**模型元数据库**（规格 / 定价 / Tool Call / 结构化输出等），按 Model · Provider · Lab 浏览；提供 JSON API 与 SDK（`@opencode-ai/models`）。用来查「这模型到底支持啥、多少钱」，不是打分榜。

## 11\. llm-stats

**链接**：[https://llm-stats.com/](https://llm-stats.com/)

**保持更新**：✅

**主办**：llm-stats

**备注**：多模态对比站：LLM、图像、代码、语音等榜单 + 价格/速度/上下文窗口，并跟踪新模型发布。适合一眼扫行情；单项结论仍建议回源基准核验。

## 12\. HAL（Holistic Agent Leaderboard）

**链接**：[https://hal.cs.princeton.edu/](https://hal.cs.princeton.edu/)

**保持更新**：✅

**主办**：Princeton SAgE

**备注**：Agent 能力总榜：多基准、成本感知、第三方评测视角。比 SWE‑bench 更「跨任务」，但社区曝光低于前几项；做 Agent 选型时可作补充证据。

## 13\. AI Release Tracker

**链接**：[https://aireleasetracker.com/](https://aireleasetracker.com/)

**保持更新**：✅

**主办**：AI Release Tracker

**备注**：主流实验室的**发布时间线**（非能力榜），另有 [Analytics](https://aireleasetracker.com/analytics) 节奏分析与 [Expected](https://aireleasetracker.com/expected) 预期发布页。用来回答「最近谁发了什么」，不回答「谁更强」。

## 14\. Vals AI Benchmarks

**链接**：[https://www.vals.ai/benchmarks](https://www.vals.ai/benchmarks)

**保持更新**：✅

**主办**：Vals AI

**备注**：偏**行业场景**（法律、财税、金融等）的评测与公开报告，也收录部分学术题解析。通用编程选型参考价值一般，垂直落地前值得看。[官网](https://www.vals.ai/home) · [相关报道](https://www.washingtonpost.com/politics/2025/04/22/ai-tools-mostly-fumble-basic-financial-tasks-study-finds/)。

## 15\. Yupp

**链接**：[https://yupp.ai/leaderboard](https://yupp.ai/leaderboard)

**保持更新**：✅

**主办**：Yupp

**备注**：偏代码/实战向的社区榜单，体量与权威性不及 SWE‑bench / aider，适合当作交叉验证，不宜单独决策。

## 16\. Roomote

**链接**：[https://roomote.dev/models](https://roomote.dev/models)

**保持更新**：✅

**主办**：Roomote

**备注**：Roomote 产品内的**按角色**评测（Coder / Reviewer / Advisor / Explorer / Vision / Router），并按质量·价格·速度偏好推荐。结论强绑定其工作流，迁用到其他 Agent 产品时要打折看。

## 17\. Opper TaskBench

**链接**：[https://opper.ai/models](https://opper.ai/models)

**保持更新**：✅

**主办**：Opper Technology AB

**备注**：以任务完成率为核心的小而专基准（Context / SQL / Agents / Normalization），分数 0–1。曝光度有限，适合看「小模型能不能干活」的补充样本。

## 18\. PinchBench（OpenClaw）

**链接**：[https://pinchbench.com](https://pinchbench.com/)

**保持更新**：✅

**主办**：Kilo Code 等

**备注**：OpenClaw 场景下的 Agent 任务成功率榜（含速度/成本）。任务与评分开源，但官网标明**偏娱乐、勿作关键决策**——仅作趣味参考。

## 19\. LLM Benchmark Dashboard（llm2014）

**链接**：[https://llm2014.github.io/llm_benchmark/](https://llm2014.github.io/llm_benchmark/)

**保持更新**：✅

**主办**：llm2014（个人项目）

**备注**：个人私有题库的长期跟踪看板，带成本与耗时维度。方法论不透明、样本非公开，只适合当「体感 + 性价比」旁证。
