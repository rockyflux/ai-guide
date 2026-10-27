---
aside: false
---

# 记忆 · 上下文 · 检索


换 CLI、换机器、换会话时，把「做到哪、试过什么、还开着什么问题」带过去，而不是只靠各家自带的 `MEMORY.md`。也涵盖进模型前压 tool 输出、本机代码库索引 / 混合检索（经 MCP 或 CLI 喂给 Agent）。

底层内容搜（`rg`）与找文件（`fd`）安装见 [开发环境准备](/programming/dev-start.html)。

|工具名称|star 数|项目介绍|解读|
|---|---|---|---|
|[caveman](https://github.com/JuliusBrussee/caveman)|113.5k|给 Coding Agent 省 token 的 Skill + 本机代理：短回复（代码、路径、报错原文保留），进模型前压缩日志 / JSON / 测试输出；可选 Auto 选模型与力度、Blocks 复用脚本；覆盖 Claude Code / Codex / Gemini CLI 等 30+；Apache-2.0|[文档](https://docs.caveman.so/caveman)|
|[headroom](https://github.com/headroomlabs-ai/headroom)|75.9k|进 LLM 前压缩 tool 输出 / 日志 / 文件 / RAG：编码 Agent 约少 20% token，JSON 可少 60–95%；库、本地代理、MCP；可 `wrap` Claude Code / Codex / Cursor|[GitHub](https://github.com/headroomlabs-ai/headroom)|
|[Codegraph](https://github.com/colbymchenry/codegraph)|74.4k|预索引本地代码知识图谱（SQLite + tree-sitter），文件变更自动同步；经 MCP 提供 explore/search/callers/callees/impact，减少 Explore 子代理的 grep/Read；100% 本地，覆盖 Claude Code / Codex / Cursor 等|[GitHub](https://github.com/colbymchenry/codegraph)|
|[ripgrep](https://github.com/BurntSushi/ripgrep)|69.2k|递归正则内容搜索（`rg`）：尊重 `.gitignore`、快；多数 Coding Agent / CLI 的仓库扫描强依赖，缺则常见 `spawn rg ENOENT`|[GitHub](https://github.com/BurntSushi/ripgrep)|
|[Hindsight](https://github.com/vectorize-io/hindsight)|51.3k|可学习的 Agent 记忆（非仅召回对话）：retain/recall/reflect、观察与 mental model；MCP + Claude Code / Codex / Cursor 等；Docker/自托管或 Cloud；MIT|[官网](https://hindsight.vectorize.io/)|
|[fd](https://github.com/sharkdp/fd)|44.8k|现代 `find`：按文件名 / 路径模式快速找文件；与 `rg` 互补（`fd` 找路径，`rg` 搜内容）；Agent 提示里也常直接写 `fd`|[GitHub](https://github.com/sharkdp/fd)|
|[OpenViking](https://github.com/volcengine/OpenViking)|40.3k|火山引擎开源 Agent 上下文库：用 `viking://` 虚拟文件系统统一知识 / 记忆 / Skills；目录级语义检索与 L0/L1/L2 分层加载；`ov` CLI + Hooks/MCP 接 Claude Code / Codex / Cursor 等；可自托管或火山云托管；AGPL|[官网](https://openviking.ai)|
|[WeKnora](https://github.com/Tencent/WeKnora)|34.9k|腾讯开源 LLM 知识平台：文档→可检索 RAG / 多步推理 Agent / 自维护 Wiki；混合检索与引用、Skills 沙箱、BrowserSkill 本机浏览器、内置 MCP 给 Cursor/Claude；Docker/Helm/Lite 可自托管；MIT|[官网](https://weknora.weixin.qq.com)|
|[code-review-graph](https://github.com/tirth8205/code-review-graph)|32.4k|本地优先代码知识图谱（Tree-sitter → SQLite），增量更新；经 MCP/CLI 提供 blast-radius / review context / 风险评分，减少整库重读；`install` 可接 Cursor / Claude Code / Codex 等，可选 GitHub Action；MIT|[官网](https://code-review-graph.com)|
|[context-mode](https://github.com/mksglu/context-mode)|30.8k|编码 Agent 上下文优化（MCP + hooks）：沙箱 tool 输出约省 98%、SQLite 会话记忆、强制「用代码分析」路由；覆盖 Claude Code / Codex / Cursor 等 17 端|[官网](https://context-mode.com)|
|[TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)|29.9k|腾讯云团队级 Agent 记忆中枢：对话 / 文档 / 代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph；Proxy 改 base URL 即可接 Claude Code / Codex / OpenClaw 等，Hub 面板做团队治理与装备；MIT|[文档](https://tencentcloud.github.io/TencentDB-Agent-Memory/)|
|[Zvec](https://zvec.org/zh/)|16.1k|本地优先检索：嵌入式向量库（[alibaba/zvec](https://github.com/alibaba/zvec)）+ 工作区混合检索 [Zvec-Grep](https://github.com/zvec-ai/zvec-grep)（`zg` CLI / MCP）；精确 / BM25 / 向量 / 混合，证据带路径·符号·行号；接 Claude Code / Codex / Cursor 等|[官网](https://zvec.org/zh/)|
|[ai-memory](https://github.com/akitaonrails/ai-memory)|10.6k|编码 Agent 长期记忆：Hooks 静默捕获、git 版 Markdown wiki 为真源、默认零 LLM；Claude Code / Codex / Cursor 等 20+ harness 共享，可跨机器与按项目团队检索；Linux/macOS 正式，Windows 建议 WSL2|[GitHub](https://github.com/akitaonrails/ai-memory)|
|[RepoWise](https://github.com/repowise-dev/repowise)|7.8k|本机代码库智能：调用图 / git 分析 / 健康分 / 死代码 / 决策沉淀；经 MCP 给 Claude Code / Codex / Cursor 等；本地 dashboard，图与健康分零 LLM；AGPL|[官网](https://repowise.dev/)|
|[oh-my-mermaid (omm)](https://github.com/oh-my-mermaid/oh-my-mermaid)|3.2k|AI 生成可导航架构文档：Skill `/omm-scan` 分析仓库 → 多视角 Mermaid（结构/数据流/集成等）写入 `.omm/`；`omm view` 交互查看，可推云端；`omm setup` 覆盖 Claude Code / Codex / Cursor 等；MIT|[GitHub](https://github.com/oh-my-mermaid/oh-my-mermaid)|
|[dsh-context](https://github.com/bowenliang123/dsh-context)|2.3k|[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 上下文可视化插件：Context 面板 / 浏览器 / 侧栏与 `/context`；透视组成、演进、压缩与多 Agent 编队；Apache-2.0|[GitHub](https://github.com/bowenliang123/dsh-context)|
