---
title: MCP
weight: 4
date: 2026-02-09T23:34:00+08:00
---

## MCP 能做什么

连接 MCP 服务器后，可以要求 Claude：

- 从 Issue 跟踪器实现功能："添加 JIRA issue ENG-4521 描述的功能并创建 GitHub PR"
- 分析监控数据："检查 Sentry 和 Statsig 查看 ENG-4521 功能的使用情况"
- 查询数据库："根据 PostgreSQL 数据库找出 10 个使用过 ENG-4521 功能的随机用户邮箱"
- 集成设计稿："根据 Slack 中发布的新 Figma 设计更新标准邮件模板"

## 安装 MCP 服务器

MCP 服务器支持三种传输方式：

### 远程 HTTP 服务器（推荐）

云服务的推荐方式：

```bash
# 基本语法
claude mcp add --transport http <name> <url>

# 示例：连接 Notion
claude mcp add --transport http docs https://your-mcp-server.example.com/mcp

# 带认证头
claude mcp add --transport http secure-api https://api.example.com/mcp \
  --header "Authorization: Bearer your-token"
```

### 远程 SSE 服务器

SSE（Server-Sent Events）传输已弃用，优先使用 HTTP。

```bash
claude mcp add --transport sse server https://your-mcp-server.example.com/sse
```

### 本地 stdio 服务器

在本地运行的进程，适合需要系统访问的工具：

## 什么是 MCP（Model Context Protocol）

MCP（Model Context Protocol）可以理解成**"实时外部能力接口"**：它不存储知识，而是把外部系统与工具以统一方式暴露给 Agent 调用，从而获得可追溯、可验证的结果。

## 一句话定位

`MCP` 负责回答：**我如何让 Agent 调用真实工具/真实数据源，而不是靠猜？**

## 适用场景

- **需要可靠数据源**：内部文档、工单系统、代码索引、数据库、日志平台。
- **需要可控的外部能力**：鉴权、速率限制、审计、统一错误处理。
- **希望减少幻觉**：用"工具返回的事实"替代"模型凭空猜测"。

## 快速决策

- 你缺的是**事实与实时数据**：用 MCP。
- 你缺的是**怎么做的流程与标准**：用 skills。
- 你缺的是**底线与边界**：用 rules。
- 你缺的是**关键点自动守卫**：用 hooks。
- 你缺的是**专职角色与长链路治理**：用 subagents。

补充一个常见误区：

- MCP 负责"接入能力/返回事实"，不负责"怎么一步步做"。流程与验收应该交给 `skills` / `subagents`。

## 核心特点

- **它本身不做事，只负责"连接"**
- **定义可调用的工具列表**
- **管理 AI 对外部系统的访问权限**

## 常用 MCP 示例

| MCP 名称 | 功能 | 适用场景 |
| --- | --- | --- |
| filesystem | 读写本地文件 | 代码生成、文件操作 |
| github | 操作 GitHub 仓库 | PR 管理、Issue 处理 |
| postgres/mysql | 数据库操作 | 数据查询、表结构分析 |
| browser | 浏览器自动化 | 前端测试、网页抓取 |
| codegen-engine | 代码生成引擎 | 页面生成、模板匹配 |
| sentry | 错误监控 | Bug 分析、日志查询 |
| slack/飞书 | 消息通知 | 团队协作、通知推送 |

## MCP 配置示例

```text
{
  "mcpServers": {
    "codegen-engine": {
      "command": "node",
      "args": ["/path/to/codegen-engine/src/server.js"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-filesystem"]
    }
  }
}
```

## 最小落地模板（工具规范清单）

每个工具建议至少回答清楚这些问题（越清晰，路由越稳定）：

1. **能力说明（做什么，不做什么）**
   - 解决什么问题
   - 不支持哪些场景（避免被误用）
2. **输入契约**
   - 必填参数、可选参数、默认值
   - 参数校验与范围限制
3. **输出契约**
   - 返回结构（字段含义、单位、排序/分页规则）
   - 返回不确定性（是否可能缺失、是否最终一致）
4. **失败语义（非常关键）**
   - 常见错误类型（权限不足/限流/超时/参数错误）
   - 失败时给 Agent/用户的可行动提示（下一步怎么做）
5. **权限与审计**
   - 最小权限原则
   - 哪些调用要记录（参数、调用者、时间、结果摘要）
   - 返回内容的脱敏策略
6. **成本控制**
   - 速率限制与配额
   - 大结果的截断/分页策略

## 常见坑（反模式）

- **工具过多且同质**：会让路由困难、选错率上升。
- **失败语义缺失**：一旦失败，Agent 会开始猜测，等同回到"幻觉模式"。
- **权限边界不清**：轻则泄露信息，重则造成数据破坏。
- **把流程塞进 MCP**：MCP 负责能力接入；流程应由 skills/subagents 承载。

## 与其他模块的边界

- **MCP vs skills**：MCP 提供"能力/数据"；skills 提供"方法/步骤/验收"。
- **MCP vs rules / 系统提示词**：rules 规定调用边界与禁区（例如二次确认、敏感信息）。
- **MCP vs hooks**：hooks 决定何时必须调用外部能力；MCP 提供能力本身.

## 参考链接

- [MCP 服务器](https://claudecn.com/docs/claude-code/advanced/mcp-servers/)
