---
title: Kiro 详细使用指南
weight: 32
bookToc: true
bookHidden: true
---

## 快速开始

访问 [kiro.dev](https://kiro.dev) 下载对应系统版本，使用[海鲜市场](https://www.goofish.com/search?q=kiro)搞来的账号登录。

如果你想快速上手项目开发，请查看：[Kiro 实战指南]({{< relref "project-practice/kiro-practice" >}})

## 什么是 Kiro

Kiro 是一个 **Agent IDE**，核心特点是"规格驱动（Spec-Driven）"：通过 Spec 文档让 AI 自动拆解任务、修改代码、运行验证。

与传统 AI 编程工具不同，Kiro 提供了完整的 Agent 工程体系：

- **Steering**：持久化项目知识，避免重复说明规范
- **Skills**：可复用的专业能力模块
- **MCP Servers**：扩展工具和外部能力
- **Hooks**：事件驱动的自动化工作流
- **Spec Mode**：结构化的需求到实现流程

---

## Steering：项目知识管理

Steering 通过 markdown 文件为 Kiro 提供持续的项目上下文，解决传统 AI 工具每次对话都要重复说明项目规范的问题。

### 作用域与优先级

- **项目基础文件**：自动生成的 `product.md`、`tech.md`、`structure.md`
  - `product.md` - 产品定位、目标用户、核心功能
  - `tech.md` - 技术栈、框架、工具链
  - `structure.md` - 项目结构、命名规范、架构决策
  
- **工作区 Steering**：`.kiro/steering/`（当前项目特定规范）
- **全局 Steering**：`~/.kiro/steering/`（跨项目通用规范）

优先级：工作区 > 全局

### 创建 Steering

点击 Kiro 面板的 **Steering** 区域，点击 `+` 按钮：

1. **Project steering files**：自动生成项目基础文件
2. **工作区 Steering**：创建项目特定规范（API 设计、组件标准、测试策略）
3. **全局 Steering**：创建跨项目规范（编码风格、安全策略、团队规范）

### 加载模式

在 steering 文件顶部添加 YAML front matter 配置：

**1. 始终加载（默认）**

```yaml
---
inclusion: always
---
```

适用于：全局编码规范、技术栈偏好、安全策略；

<iframe onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' loading="lazy" style="width: 100%;height: 300px;"  src="https://www.codecopy.cn/embed/d8dwz5"  border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


**2. 条件加载**

```yaml
---
inclusion: fileMatch
fileMatchPattern: "components/**/*.tsx"
---
```

或匹配多个模式：

```yaml
---
inclusion: fileMatch
fileMatchPattern: ["**/*.ts", "**/*.tsx"]
---
```

适用于：组件规范、API 设计规则、测试标准

**3. 手动调用**

```yaml
---
inclusion: manual
---
```

在聊天中使用 `#文件名` 或 `/` 命令调用。

适用于：故障排查指南、迁移流程、性能优化文档

**4. 自动匹配**

```yaml
---
inclusion: auto
name: api-design
description: REST API 设计规范。用于创建或修改 API 端点时。
---
```

Kiro 根据描述自动判断是否加载。

适用于：领域知识、复杂工作流、详细参考文档

### 文件引用

在 steering 中引用项目文件：

```markdown
#[[file:api/openapi.yaml]]
#[[file:components/ui/button.tsx]]
```

详见：[Kiro 官方 Steering 文档](https://kiro.dev/docs/steering/)

---

## Skills：可复用能力

Skills 将特定领域的专业知识（如 React 性能优化、Web 可访问性审查）打包成可复用模块，避免每次都要重新描述专业要求。

### 作用域

- **工作区 Skills**：`.kiro/skills/`（项目特定技术栈能力）
- **全局 Skills**：`~/.kiro/skills/`（跨项目通用能力）

### 导入 Skills

点击 Kiro 面板的 **Steering** 区域，点击 `+` 按钮，选择 Skills 导入：

- **工作区 Skills**：项目特定能力（如特定框架的最佳实践）
- **全局 Skills**：通用能力（如 Web 可访问性审查、性能优化）

### 常见 Skills

- Web 设计规范审查
- React/Next.js 性能优化
- 可访问性检查

### 使用方式

在聊天中提及相关关键词，Kiro 会自动激活对应 Skill。也可以通过 `/` 命令手动调用。

详见：[Skills 实战使用]({{< relref "agent/skills" >}}) | [Kiro 官方 Skills 文档](https://kiro.dev/docs/skills/)

---

## MCP Servers：扩展 Agent 能力

MCP（Model Context Protocol）Servers 为 Kiro 提供额外的工具和能力，如数据库访问、API 调用、文件系统操作等。

### 配置方式

MCP 通过 `mcp.json` 配置文件管理：

- **工作区配置**：`.kiro/settings/mcp.json`（仅当前项目）
- **全局配置**：`~/.kiro/settings/mcp.json`（所有项目）
- **优先级**：工作区配置 > 全局配置

### 配置示例

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ],
      "autoApprove": [
        "sequentialthinking"
      ]
    }, 
    "interactive-feedback-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "D:\\soft\\develop\\nodejs-config\\node_global\\node_modules\\interactive-feedback-mcp-main",
        "run",
        "server.py"
      ],
      "timeout": 600,
      "autoApprove": [
        "interactive_feedback"
      ]
    }
}
```

### 常用 MCP Servers
- **[Interactive Feedback MCP](https://www.mcpworld.com/zh/detail/21bf0341701de684d4055aa8b20c6074)**：交互式反馈循环
- **filesystem**：文件系统操作
- **sqlite**：SQLite 数据库访问
- **fetch**：HTTP 请求和网页抓取
- **git**：Git 仓库操作

### 管理 MCP

- 命令面板搜索 "MCP" 查看相关命令
- Kiro 面板的 MCP Server 视图可查看和重连服务器
- 配置文件修改后自动重连

详见：[MCP Servers]({{< relref "agent/mcp" >}})

---

## Hooks：事件驱动自动化

Hooks 允许你在 IDE 中发生特定事件时触发操作，从而自动化 Agent 工作流。可以在保存文件、完成 Agent 执行、输入提示词或手动点击按钮时运行。

参考：[Kiro Hooks 最佳实践](https://github.com/awsdataarchitect/kiro-best-practices/tree/main/.kiro/hooks)

### 支持的事件类型

- `fileEdited` / `fileCreated` / `fileDeleted` - 文件变更
- `promptSubmit` - 发送消息时
- `agentStop` - Agent 执行完成后
- `preToolUse` / `postToolUse` - 工具调用前后
- `preTaskExecution` / `postTaskExecution` - Spec 任务执行前后
- `userTriggered` - 手动触发

### Hook 示例

**Agent 结束后自动总结**

```json
{
  "version": "1.0.0",
  "enabled": true,
  "name": "agent-summary",
  "when": {
    "type": "agentStop"
  },
  "then": {
    "type": "askAgent",
    "prompt": "总结刚刚完成的任务，包括修改的文件、实现的功能以及后续建议。"
  }
}
```

**手动触发代码审查**

```json
{
  "version": "1.0.0",
  "enabled": true,
  "name": "code-review",
  "when": {
    "type": "userTriggered"
  },
  "then": {
    "type": "askAgent",
    "prompt": "对当前项目代码进行一次代码审查，找出潜在 bug、性能问题和安全风险，并给出优化建议。"
  }
}
```

---

## Spec Mode：结构化开发

Spec Mode 适合复杂需求，流程为：

需求 → Spec 文档 → 设计方案 → 任务拆解 → 自动实现

1. 创建 Spec 文件描述需求
2. Kiro 生成设计方案
3. 自动拆解为可执行任务
4. Agent 逐个完成任务并验证

---

## 与其他工具对比

| 维度 | Cursor | Kiro | Claude Code |
|------|--------|------|-------------|
| 定位 | AI + IDE | Agent IDE | AI CLI Agent |
| 工作方式 | 人驱动 | AI 规划 | 命令驱动 |
| 规则系统 | `.cursor/rules` | Steering + Hooks | `CLAUDE.md` |
| Agent 能力 | 中等 | 强 | 强 |
| 自动化程度 | 辅助 | 高度自动化 | 高度自动化 |

---

## 参考资源

- [Kiro 官方文档](https://kiro.dev/docs/)
- [Kiro 实战指南]({{< relref "project-practice/kiro-practice" >}})
- [Awesome Agent Skills]({{< relref "agent/awesome-agent-skills" >}})
