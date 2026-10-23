# MCP


## MCP的工作原理
在MCP的工作中，有四个核心角色：AI应用，MCP Client（客户端）,MCP Server（服务端），业务系统

- AI应用：面向用户的终端产品，如“AI旅行规划”，将用户输入的信息经过处理后，传递给内置“MCP Client”

- MCP Client：收到请求后，转换为MCP Server认识的标准请求，处理接口协议等

- MCP Server：收到客户端传来的标准请求，转换为调用内部业务系统的“API”或工具

- 业务系统：收到MCP Server的调用后，处理并返回业务数据

### 以查询天气为例
```
用户-->AI应用：今天北京天气怎么样
AI应用-->MCP Client：查询天气tool，北京，今天
MCP Client-->MCP Server：标准查询请求[北京，今天]
MCP Server-->天气系统：调用天气API查询北京今日
天气系统-->MCP Server：返回天气数据[晴，5℃，北风3级]
MCP Server-->MCP Client：格式化天气数据
MCP Client-->AI应用：北京今日天气信息
AI应用-->用户：北京今天晴天，5度，北风3级
```

## MCP资源

### 官方与规范
- [https://code.claude.com/docs/zh-CN/mcp](https://code.claude.com/docs/zh-CN/mcp) - Claude Code官方文档
- [MCP 官方文档（中文）](https://docs.modelcontextprotocol.vip/introduction) — 模型上下文协议简介、架构与快速入门
- [MCP 中文文档](https://mcp-docs.cn/docs/getting-started/intro) — 什么是 MCP、架构、服务器与客户端开发

### 客户端与工具

- [Claude Code MCP 服务器](https://claudecn.com/docs/claude-code/advanced/mcp-servers/) — Claude 桌面/编码场景下的 MCP 配置说明
- [Zapier MCP](https://actions.zapier.com/settings/mcp/) — 将 Zapier 动作暴露为 MCP 工具
- [MCP Router](https://mcp-router.net/en) · [GitHub](https://github.com/mcp-router/mcp-router) — 本地 MCP 控制平面：集中管理、工作区隔离、请求可见
- [mcp2cli](https://github.com/knowsuchagency/mcp2cli)（[PyPI](https://pypi.org/project/mcp2cli/)）— 将 MCP / OpenAPI / GraphQL 动态转为命令行；支持「懒发现」与缓存，减少每轮注入完整工具 schema 的 token 开销（官方 README 称约 96–99%）。详见下文专题。

### 服务器与市场

- [Awesome MCP Servers（中文）](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-zh.md) — 精选 MCP 服务器列表（按类别整理）
- [GitHub MCP Registry](https://github.com/mcp) — 官方/社区 MCP 服务器与工具注册
- [阿里云百炼 MCP 市场](https://bailian.console.aliyun.com/cn-beijing/?tab=mcp#/mcp-market) — 阿里云大模型平台 MCP 服务市场
- [腾讯云 MCP 广场](https://cloud.tencent.com/developer/mcp) — 腾讯云 MCP 服务、教程与托管
- [MCP World](https://www.mcpworld.com/mcp) — 海量 MCP 服务器导航

### 开发与集成

- [GitMCP](https://gitmcp.io/) — 将任意 GitHub 仓库转为远程 MCP 服务器，便于 AI 理解代码与文档



---

## 常用 MCP 示例

以下 20 个示例选自 [Awesome MCP Servers（中文）](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-zh.md)，覆盖文件、数据库、协作、搜索与开发等常见场景。

| MCP 名称 | 功能 | 适用场景 |
| --- | --- | --- |
| filesystem | 读写本地文件系统 | 代码生成、文件操作 |
| GitHub | 仓库 / PR / Issue 管理 | 协作开发、代码评审 |
| Git / GitLab | 本地仓库与 GitLab 项目管理 | 版本控制、CI/CD |
| PostgreSQL | 数据库查询与模式检查 | 数据分析、运维 |
| MySQL | 数据库访问与查询 | 业务数据、报表 |
| SQLite | 轻量数据库与内部分析 | 本地数据、原型 |
| MongoDB | 文档库查询与操作 | NoSQL、日志分析 |
| Playwright / Puppeteer | 浏览器自动化与网页抓取 | 前端测试、爬虫 |
| Slack | 频道与消息管理 | 团队协作、通知 |
| 飞书 | 文档与协作（OAuth） | 企业协作、知识库 |
| Sentry | 错误与性能监控 | Bug 分析、排障 |
| fetch | 网页内容获取与处理 | 信息抽取、RAG |
| Google Drive | 文件列表、阅读与搜索 | 文档检索、同步 |
| Notion | 笔记与待办、API 交互 | 文档管理、知识库 |
| Memory | 长期记忆与知识图谱 | 多轮对话、偏好记忆 |
| Brave Search / Tavily | 网页搜索 | 实时信息、调研 |
| Figma | 设计稿读取与实现 | 设计还原、协作 |
| Docker | 容器管理与操作 | 开发环境、部署 |
| LeetCode | 题目、题解与进度 | 刷题、面试 |
| OpenAPI / Swagger | 将 REST API 转为 MCP 工具 | 接口调试、集成 |

更多服务器（按类别整理的完整列表）见 [Awesome MCP Servers（中文）](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-zh.md)。


