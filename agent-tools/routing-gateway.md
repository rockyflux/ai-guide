---
aside: false
---

# 路由与本地网关


把 CLI / 订阅转成兼容 API，或做多模型路由、负载均衡与拼车中转。中转站程序分工与选型见 [API 中转站](/programming/api-relay-station.html)。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[LiteLLM](https://github.com/BerriAI/litellm)|61.5k|开源 AI 网关（Python SDK + Proxy）：100+ LLM 以 OpenAI/原生格式统一调用；成本追踪、护栏、负载均衡与日志；Bedrock/Azure/Anthropic/Vertex/vLLM 等|[GitHub](https://github.com/BerriAI/litellm)|
|[🔥CLIProxyAPI (CPA)](https://github.com/router-for-me/CLIProxyAPI)|55.6k|将多种 CLI 封装为 OpenAI/Gemini/Claude/Codex 兼容 API：多账户轮询与故障转移；流式/非流式、多模态、函数调用|[Zread](https://zread.ai/router-for-me/CLIProxyAPI)|
|[New API](https://github.com/QuantumNous/new-api)|50.2k|统一模型聚合与分发网关：OpenAI / Claude / Gemini 协议互转；额度、倍率、渠道管理（个人与企业）|[GitHub](https://github.com/QuantumNous/new-api)|
|[Sub2API](https://github.com/Wei-Shaw/sub2api)|44.3k|开源 API 网关：Claude / OpenAI / Gemini / Antigravity 等订阅转兼容 API；Key 分发、计费、调度、限流与拼车|[Zread](https://zread.ai/Wei-Shaw/sub2api)|
|[🔥Claude Code Router](https://github.com/musistudio/claude-code-router)|37.7k|Claude Code 请求路由到任意模型；自定义分发逻辑；无需 Anthropic 账号；支持 DeepSeek/Gemini/Groq 等|[Zread](https://zread.ai/musistudio/claude-code-router)|
|[FreeLLMAPI](https://github.com/tashfeenahmed/freellmapi)|37.1k|本机一个 `/v1` 聚合 30+ 家免费档 LLM（及自备 OpenAI 兼容端点）：智能路由、故障转移、密钥加密；仅个人实验|[GitHub](https://github.com/tashfeenahmed/freellmapi)|
|[opencodex](https://github.com/lidge-jun/opencodex)|17.6k|Codex / Claude Code 通用 Provider 代理：任意 LLM（Claude、Gemini、Grok、DeepSeek、Ollama 等）接 Codex CLI/App/SDK 与 Claude Code|[GitHub](https://github.com/lidge-jun/opencodex)|
|[magpie](https://github.com/yetone/magpie)|16.2k|本机网关：任意 Agent（Claude Code / Codex / Gemini CLI 等）接任意模型；OpenAI / Anthropic / Gemini 协议互转；Claude/ChatGPT/Copilot 订阅共享；智能路由与故障转移；菜单栏 + CLI/TUI；MIT|[官网](https://usemagpie.ai/zh/)|
|[claude-relay-service (crs)](https://github.com/Wei-Shaw/claude-relay-service)|12.7k|Claude Code 镜像中转与拼车，多用户共享转发|[Zread](https://zread.ai/Wei-Shaw/claude-relay-service)|
|[Bifrost](https://github.com/maximhq/bifrost)|8.9k|企业向高性能 AI 网关：OpenAI 兼容统一接入 23+ 供应商；故障转移、负载均衡、语义缓存、护栏与 MCP；零配置 `npx`/Docker 起；Web UI 监控；Apache-2.0|[官网](https://www.getmaxim.ai/bifrost)|
|[gpt-load](https://github.com/tbphp/gpt-load)|7.1k|多通道 API Key 轮询与负载均衡，自动容错|[Zread](https://zread.ai/tbphp/gpt-load)|
|[axonhub](https://github.com/looplj/axonhub)|5.4k|AI 流量网关 + RBAC / 多租户权限|[Zread](https://zread.ai/looplj/axonhub)|
|[ccx](https://github.com/BenedictKing/ccx)|4.0k|个人向极简 API 网关，快速配置、轻量使用|[Zread](https://zread.ai/BenedictKing/ccx)|
|[metapi](https://github.com/cita-777/metapi)|3.3k|聚合 New API / One API / Sub2API 等中转站为单一入口与密钥|[Zread](https://zread.ai/cita-777/metapi)|
|[octopus](https://github.com/bestruirui/octopus)|2.7k|个人向 LLM API 聚合与负载均衡；OpenAI ↔ Anthropic 协议转换|[Zread](https://zread.ai/bestruirui/octopus)|
|[Aether](https://github.com/fawney19/Aether)|1.5k|多租户 AI 基础设施网关：Claude / OpenAI / Gemini 及 CLI 统一接入|[Zread](https://zread.ai/fawney19/Aether)|
|[ccNexus](https://github.com/lich0821/ccNexus)|1.0k|Claude Code 端点轮换代理：故障转移；兼容 OpenAI / Gemini 格式|[Zread](https://zread.ai/lich0821/ccNexus)|
|[aio-coding-hub](https://github.com/dyndynjyxa/aio-coding-hub)|0.7k|本地 AI CLI 统一网关桌面端：多 CLI 入口、可视化监控与路由|[Zread](https://zread.ai/dyndynjyxa/aio-coding-hub)|
|[ccg-gateway](https://github.com/mos1128/ccg-gateway)|0.2k|Claude Code / Codex / Gemini 三合一代理网关桌面端|[Zread](https://zread.ai/mos1128/ccg-gateway)|
