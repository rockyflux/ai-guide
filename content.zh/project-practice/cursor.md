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
   [月卡](https://www.goofish.com/item?id=1019865131158&categoryId=201453616) | 
   [额度卡](https://www.goofish.com/item?&id=1015413302415&categoryId=201449620)   
- **官方订阅**：$20/月（Cursor Pro 的用量通常是“额度池”，大致等价于 $20 的模型调用价值，而不是固定请求次数）。
- **试用/共享账号**：市面上也有“按月售卖的试用账号/共享账号”等形式（同样注意稳定性与合规风险）。


### 2. 配置 Rules、Skills、Subagents、MCP、Commands

![Cursor 配置](/images/index/cursor-config.png)

- **Rules**：规则库，新建`User Rule` 复制下方的`Cursor简洁版`保存。

> 优先级：**系统级规则 > 项目级 Cursor rules > CLAUDE.md > 当前对话指令**

<iframe onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' loading="lazy" style="width: 100%;height: 300px;"  src="https://www.codecopy.cn/embed/z4poh9"  border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

- **MCP**：请导入到mcp.json

- `server-sequential-thinking`：用户反馈
- `Context7`：查询最新库文档/示例
- `mcp-feedback-enhanced`：数据库增删改查

- **其他**

> 如需要自定义 Commands、Skills、Subagent 等可以后续再深入；用下方的 CCG/ZCF 一键导入一套通用配置即可。  
> 更完整的概念与用法入口见：[AI 智能体]({{< relref "agent" >}})


### 3. 使用开源项目导入工作流

#### 3.1 CCG 工作流

教程：[CCG 使用指南]({{< relref "ai-programming/ccg" >}})

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

![初始化](/images/index/project-init.png)

### 5. 常用指令

初始化完成后，可使用以下指令：

- `/ccg:feat` - 新开发功能
- `/ccg:review` - 代码审查
- `/ccg:debug` - 问题诊断
- `/ccg:commit` - 提交代码

更多指令请查看：[CCG 完整指南]({{< relref "ai-programming/ccg" >}})




