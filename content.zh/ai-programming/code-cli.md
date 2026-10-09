---
title: 编程 Agent 横评
weight: 21
bookToc: false
noTocArea: true
bookHidden: false
---
# 编程 Agent 横评

|工具|核心特点|适合谁|
|---|---|---|
|[Codex](https://developers.openai.com/codex)(OpenAI)|ChatGPT 原生登录（App/CLI/IDE/Web）；开箱即用、代码+电脑操作、多 Agent/Skills；**额度消耗大，不适合纯聊天**|✅ 新手/商家/泛工作 ❌ 只想闲聊|
|[Claude Code](https://claude.com/product/claude-code)(Anthropic)|账号直登/API/云平台；整库理解、批量改文件、MCP/子 Agent；专业向、需管控用量成本|✅ 复杂项目重构调试 ❌ 零基础小白|
|[OpenClaw Foundation](https://github.com/openclaw/openclaw)|API/OAuth/本地模型，完全自托管；多 IM 常驻、多模型编排；部署配置复杂、需自维护权限|✅ 技术玩家/小团队 ❌ 零配置开箱即用|
|[Hermes](https://github.com/NousResearch/hermes-agent)(Nous Research)|OAuth/API/本地端点；持久记忆、自动 Skills、定时任务；需配置模型 Provider|✅ 爱折腾、长期个性化 ❌ 不想折腾配置|
|[Pi](https://github.com/earendil-works/pi)|CLI/SDK/RPC 集成；模型无关、可嵌入业务系统；**无 UI/记忆/渠道，全需上层实现**|✅ 自研 Agent 平台/内部工具 ❌ 普通终端用户|
|[Grok CLI](https://x.ai/news/grok-build-cli)(xAI / Grok Build)|账号直登（SuperGrok / X Premium+）；Plan Mode、并行子 Agent + worktree、ACP/无头模式；原生 AGENTS.md / MCP / Skills|✅ 已有 Grok 订阅、终端优先 ❌ 无订阅 / 要多厂商 BYOK|
|[Kilo Code](https://github.com/Kilo-Org/kilocode)|VS Code / JetBrains / CLI 同栈；500+ 模型可中途切换、按厂商原价零加价；Code/Plan/Ask/Debug/Review 专用 Agent + MCP；另有 Cloud / PR Review / KiloClaw|✅ 要开源、多 IDE、多模型切换 ❌ 只想闭源全家桶|

## 选型速查
1. 普通用户快速干活：**Codex（优先原生登录，避开API）**
2. 大型代码库、项目重构：**Claude Code**
3. 开源、多 IDE/CLI、多模型切换：**Kilo Code**
4. 已有 Grok 订阅、要 Plan/并行子 Agent：**Grok CLI**
5. 多IM渠道常驻、自托管网关编排：**OpenClaw**
6. 长期记忆、自动生成技能、定时任务：**Hermes**
7. 自己开发封装一套Agent产品、做底座：**Pi**

> 补充区分：
> - OpenClaw：完整成品Agent网关，拿来部署就能对接IM渠道；
> - Pi：只是SDK底座，只提供Agent核心逻辑，IM、记忆、调度全部要自己写代码开发。
> - Grok CLI（Grok Build）：xAI 官方终端 Agent；harness 开源，使用侧绑定 Grok 账号订阅。
> - Kilo Code：开源编程 Agent 成品（VS Code / JetBrains / CLI），偏日常写改代码，不是网关也不是 SDK。

