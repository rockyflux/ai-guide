---
title: Cursor 实战上手指南
weight: 1
bookToc: false
noTocArea: true
---

## Cursor 实战上手指南（10分钟）

### 1. 安装 Cursor 并开通账号

如果你还在纠结怎么买、怎么省钱，可以先看：
   [AI 编程省钱之道]({{< relref "ai-programming/ai-coding-save-money" >}}) |
   [AI 订阅套餐]({{< relref "ai-programming/coding-plan" >}})。

- **第三方渠道**：可在 [闲鱼搜索](https://www.goofish.com/search?q=cursor) 购买月卡/额度卡（自行甄别风险与售后）。
   [月卡1](https://pay.ldxp.cn/shop/W6IZFM8B) 
   [月卡2](https://www.goofish.com/item?id=1019865131158&categoryId=201453616) 
   [月卡3](https://pay.ldxp.cn/shop/xxdlzs)  
   [额度卡](https://www.goofish.com/item?&id=1015413302415&categoryId=201449620)   
- **官方订阅**：$20/月（Cursor Pro 的用量通常是“额度池”，大致等价于 $20 的模型调用价值，而不是固定请求次数）。
- **试用/共享账号**：市面上也有“按月售卖的试用账号/共享账号”等形式（同样注意稳定性与合规风险）。


### 2. 配置 Rules、Skills、Subagents、MCP、Commands

![Cursor 配置](https://rockyflux.github.io/ai-guide/images/index/cursor-config.png)

- **Rules**：规则库，新建`User Rule` 复制下方的`Cursor简洁版`保存。

> 优先级：**系统级规则 > 项目级 Cursor rules > CLAUDE.md > 当前对话指令**

<iframe onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' loading="lazy" style="width: 100%;height: 300px;"  src="https://www.codecopy.cn/embed/z4poh9"  border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

- **MCP**：请导入到mcp.json

| 工具                        | 核心职能 | 使用场景 |
|---------------------------|----------|----------|
| **[universal-db-mcp](https://github.com/Anarkh-Lee/universal-db-mcp)** | 通用数据库 MCP：多库适配、schema 缓存、默认只读 | 在 Cursor 内用自然语言查表结构、执行只读 SQL、对接业务库（MySQL/PostgreSQL/达梦等） |
| **[Context7](https://context7.com/)** | 为 LLM/代码编辑器注入「当前版本」的官方文档上下文（Upstash 项目） | 查某库最新 API/用法、降低过时示例与幻觉；写集成代码、对照文档改调用签名 |
| **[mcp-feedback-enhanced](https://github.com/Minidoracat/mcp-feedback-enhanced)** | 反馈增强工具 | 本地定制化的反馈增强工具，支持长时间等待反馈、图片上传和断网重连功能。 |
| **Sequential Thinking**   | 深度逻辑推理与决策链 | I 阶段方案推演、复杂 Bug 根因分析 |
| **Time Server**           | 精确时间基准 | **强制**：所有日志必须使用，禁止猜测 |
| **DeepWiki**              | 外部知识检索 | 查询最新文档、补充知识缺口 |
| **Browser Control**       | Web 前端交互与调试 | UI 开发、实时调试、E2E 测试、截图录屏 |
| **[spec-workflow-mcp](https://github.com/Pimzino/spec-workflow-mcp)** | 规格驱动开发（需求→设计→任务） | 与 `.spec-workflow` 等模板衔接；Web 仪表盘、审批流、任务进度与实现日志 |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)**（`@playwright/mcp`） | Playwright 浏览器自动化 | E2E、页面操作与结构化抓取、辅助生成/验证测试；与 Browser Control 可按栈二选一或并用 |
| **Memory**                | 持久化知识图谱 | R1 recall 历史经验，R2 commit 新经验 |

- **其他**

> 如需要自定义 Commands、Skills、Subagent 等可以后续再深入；用下方的 CCG/ZCF 一键导入一套通用配置即可。  
> 更完整的概念与用法入口见：[AI 智能体]({{< relref "agent" >}})


### 3. 使用开源项目导入工作流

#### 3.1 CCG 工作流

教程：[CCG 使用指南]({{< relref "workflow/ccg" >}})

```bash
npx ccg-workflow
```

选择安装 Claude Code（如未安装），然后初始化 CCG 配置。

**注意**：运行前请确保已安装 Node.js 与 npm/npx（环境准备可参考：[开发环境：一站式准备]({{< relref "ai-programming/dev-start" >}})）。

#### 3.2 ZCF 工作流

教程：[ZCF 使用指南]({{< relref "ai-programming/zcf" >}})

```bash
npx zcf
```

使用 ZCF 进行完整初始化，安装 Claude Code 并导入工作流配置（Cursor 会自动读取 Claude Code 的工作流等设置）。

### 4. 在 Cursor 中打开项目

1. 打开 Cursor，选择 Agent 模式
2. 输入初始化命令：
   - `/zcf/init-project` 或
   - `/ccg/init-project`

接下来会根据项目上下文自动创建 `CLAUDE.md`。

![初始化](https://rockyflux.github.io/ai-guide/images/index/project-init.png)

### 5. 常用指令

初始化完成后，可使用以下指令：

- `/ccg:feat` - 新开发功能
- `/ccg:review` - 代码审查
- `/ccg:debug` - 问题诊断
- `/ccg:commit` - 提交代码

更多指令请查看：[CCG 完整指南]({{< relref "workflow/ccg" >}})




