---
title: 编程 Agent 横评
weight: 21
bookToc: false
noTocArea: true
bookHidden: false
---
# 编程 Agent 横评
> 数据源参考截图（截止2026‑08‑07），新增Pi作为底层Agent框架
> 重点提示：**Codex优先原生登录，不建议直接接API，额度消耗大、成本难控**

|工具|定位|上手 & 推荐|核心特点|适合谁|
|---|---|---|---|---|
|Codex(OpenAI)|原生开发+工作 Agent|闭源 · 低‑中 · ⭐5/5|ChatGPT 原生登录（App/CLI/IDE/Web）；开箱即用、代码+电脑操作、多 Agent/Skills；**额度消耗大，不适合纯聊天**|✅ 新手/商家/泛工作 ❌ 只想闲聊|
|Claude Code(Anthropic)|深度代码库 Agent|闭源 · 中 · ⭐4/5|账号直登/API/云平台；整库理解、批量改文件、MCP/子 Agent；专业向、需管控用量成本|✅ 复杂项目重构调试 ❌ 零基础小白|
|OpenClaw Foundation|自托管多渠道 Agent 网关|开源 · 高 · ⭐3/5|API/OAuth/本地模型，完全自托管；多 IM 常驻、多模型编排；部署配置复杂、需自维护权限|✅ 技术玩家/小团队 ❌ 零配置开箱即用|
|Hermes(Nous Research)|带记忆、自动 Skills 开源 Agent|开源 · 中‑高 · ⭐3/5|OAuth/API/本地端点；持久记忆、自动 Skills、定时任务；需配置模型 Provider|✅ 爱折腾、长期个性化 ❌ 不想折腾配置|
|Pi|轻量 Agent SDK 底座|开源 · 高 · 非终端产品|CLI/SDK/RPC 集成；模型无关、可嵌入业务系统；**无 UI/记忆/渠道，全需上层实现**|✅ 自研 Agent 平台/内部工具 ❌ 普通终端用户|

## 选型速查
1. 普通用户快速干活：**Codex（优先原生登录，避开API）**
2. 大型代码库、项目重构：**Claude Code**
3. 多IM渠道常驻、自托管网关编排：**OpenClaw**
4. 长期记忆、自动生成技能、定时任务：**Hermes**
5. 自己开发封装一套Agent产品、做底座：**Pi**

> 补充区分：
> - OpenClaw：完整成品Agent网关，拿来部署就能对接IM渠道；
> - Pi：只是SDK底座，只提供Agent核心逻辑，IM、记忆、调度全部要自己写代码开发。

