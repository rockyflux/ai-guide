---
title: Claude Code Agent Teams
weight: 26
---

# Claude Code Agent Teams 使用指南

## 一、功能概述

Agent Teams 是 Claude Code 的实验性功能，允许协调多个 Claude Code 实例作为一个团队并行工作。

### 核心角色

-   **Team Lead（团队领导）**：主 Claude Code 会话，负责创建团队、协调工作、分配任务
-   **Teammates（队友）**：独立的 Claude Code 实例，各自拥有独立的上下文窗口，并行工作
-   **Shared Task List（共享任务列表）**：跟踪工作项，支持依赖管理和自动解锁
-   **Mailbox System（邮箱系统）**：队友之间的直接消息通信

---

## 二、如何启用

### 方式一：配置文件

在 `~/.claude/settings.json` 中添加：

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

### 方式二：环境变量

```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```

---

## 三、使用方式

### 3.1 创建团队

用自然语言告诉 Claude 创建团队即可，例如：

> "创建一个 agent team，一个队友负责前端开发，一个负责后端 API，一个负责编写测试。"

```text
Create a team with 4 teammates to refactor these modules in parallel.
Use Sonnet for each teammate.
```

### 3.2 两种显示模式

| 模式 | 说明 |
| --- | --- |
| **In-process**（默认） | 所有队友在主终端内运行，用 `Shift+Up/Down` 切换队友 |
| **Split panes** | 每个队友在 tmux/iTerm2 中有自己的独立面板 |

Split panes 模式需要在 `settings.json` 中配置：

```json
{
  "teammateMode": "tmux"
}
```

### 3.3 快捷键操作

| 快捷键 | 功能 |
| --- | --- |
| `Shift+Up/Down` | 选择队友 |
| `Enter` | 查看队友会话 |
| `Escape` | 中断队友当前操作 |
| `Ctrl+T` | 切换任务列表 |

### 3.4 常用指令

```bash
# 让特定队友停止工作
Ask the researcher teammate to shut down

# 等待所有队友完成
Wait for your teammates to complete their tasks before proceeding

# 清理团队
Clean up the team
```

---

## 四、核心优势

1.  **并行工作**：多个队友同时探索不同方面，大幅提升效率
2.  **专注推理**：每个队友聚焦更窄的范围，推理质量更高
3.  **独立质检**：不同视角审视同一问题，降低遗漏风险
4.  **自组织协调**：队友可以从共享任务列表中自主认领任务
5.  **直接协作**：队友之间可以直接沟通，而不必通过 Lead 中转
6.  **竞争性假设**：多个 Agent 可以挑战彼此的发现，得出更好的结论

---

## 五、最佳使用场景

| 场景 | 示例 |
| --- | --- |
| **研究与评审** | PR Review 时，不同队友分别关注安全性、性能、测试覆盖 |
| **新功能开发** | 前端、后端、测试分别由不同队友负责 |
| **并行调试** | 不同队友测试不同的 Bug 假设，竞争验证 |
| **跨层协调** | API 变更同时影响 UI、数据库、测试套件 |

---

## 六、与 Subagents 的区别

| 对比项 | Subagents（子代理） | Agent Teams（团队） |
| --- | --- | --- |
| 上下文 | 独立窗口，结果返回主代理 | 完全独立的实例 |
| 通信 | 只能向主代理汇报 | 队友之间可直接通信 |
| 协调 | 主代理管理所有工作 | 共享任务列表，自组织 |
| 适用场景 | 聚焦的、顺序性任务 | 需要协作的复杂工作 |
| Token 消耗 | 较低 | 较高（5人团队约5倍） |

**简单来说：简单任务用 Subagent，复杂协作用 Agent Teams。**

---

## 七、数据存储

团队数据本地存储在以下目录：

-   团队信息：`~/.claude/teams/{team-name}/`
-   任务列表：`~/.claude/tasks/{team-name}/`

---

## 八、注意事项与限制

### 8.1 成本考虑

-   每个队友是完整的 Claude 实例，5人团队约消耗 **5倍 Token**
-   适合研究、评审和新功能开发等并行价值明显的场景

### 8.2 当前限制

-   **不支持会话恢复**：`/resume` 不会恢复 in-process 模式的队友
-   **任务状态可能滞后**：队友有时可能忘记标记任务完成
-   **关闭较慢**：队友会先完成当前工作再关闭
-   **每次会话仅一个团队**：不能同时管理多个团队
-   **不支持嵌套团队**：队友不能再创建自己的团队
-   **领导固定**：不能将领导权转移给队友
-   **Split panes 模式**需要 tmux 或 iTerm2，暂不支持 Windows Terminal 和 VS Code 集成终端

---

## 九、最佳实践

1.  **给队友足够的上下文**：队友不继承 Lead 的对话历史，创建时需要提供详细的任务描述
2.  **任务粒度适中**：
    -   太小 → 协调开销大于收益
    -   太大 → 没有检查点，浪费精力
    -   适中 → 自包含的工作单元，有明确交付物
3.  **避免文件冲突**：不同队友应负责不同的文件，避免并发编辑冲突
4.  **从简单场景入手**：先从研究/评审场景开始，熟悉后再做并行开发
5.  **定期检查进展**：关注队友工作状态，及时纠偏和重新分配
6.  **指定模型**：可以为队友指定不同的模型（如 Sonnet）以降低成本

---

## 十、GoodsService 项目实战指南

本项目（GoodsService）是基于 .NET 6 的商品进销存服务系统，采用 OSAPI / OSBLL / OSDAL / OSInterface / OSModel 五层分层架构，包含 11 个核心业务模块、21 个 Controller、17 个 BLL、18 个 DAL、115+ 请求模型。以下是结合项目特点的 Agent Teams 使用建议。

### 10.1 项目适配性分析

本项目有以下特征非常适合 Agent Teams：

| 特征 | 说明 |
| --- | --- |
| **分层架构清晰** | API / BLL / DAL / Interface / Model 五层分明，天然适合多队友按层并行 |
| **业务模块多且相对独立** | 采购、入库、销售、团购、调价等模块耦合度可控，适合按模块分工 |
| **已有完善的 Skills 体系** | PRD → 技术分析 → 任务拆解 → 代码生成的流水线已建立，可并行驱动 |
| **文档驱动开发** | 超过100份文档，从 PRD 到接口文档到测试报告全覆盖，为队友提供充足上下文 |

---

### 10.2 场景一：新功能全栈开发（推荐 4-5 个队友）

当开发一个全新的业务模块时（如"商品调拨"、"盘点管理"、"退货管理"），推荐按分层架构分配队友：

```text
创建一个 agent team 来开发「商品盘点」功能：

- 队友A（数据层）：负责 OSModel 实体类/请求模型/枚举 + OSDAL 数据访问层
  文件范围：OSModel/Entities/、OSModel/Requests/、OSModel/Enums/、OSDAL/

- 队友B（业务层）：负责 OSInterface 接口定义 + OSBLL 业务逻辑层
  文件范围：OSInterface/、OSBLL/

- 队友C（API层）：负责 OSAPI Controller + 路由配置
  文件范围：OSAPI/Controllers/

- 队友D（测试）：负责 Tests 单元测试 + 集成测试
  文件范围：Tests/UnitTests/、Tests/IntegrationTests/

- 队友E（文档，可选）：负责接口文档 + 开发文档
  文件范围：doc/接口文档/、doc/开发文档/
```

**为什么适合？** 项目每个模块都要涉及 5 个项目层级（Model → DAL → Interface → BLL → API），单个 Agent 上下文压力大。拆分后每个队友只需关注自己负责的层，推理质量更高。而且各层文件不冲突，不会有并发编辑问题。

**提示词示例：**

```text
创建一个 agent team 来开发商品盘点功能，参考项目的分层架构（OSAPI/OSBLL/OSDAL/OSInterface/OSModel）。
请先阅读 CLAUDE.md 了解项目规范，再阅读 doc/进销存设计文档/非油品盘点/ 下的设计文档。

- 队友A：负责 OSModel（实体类、请求模型、枚举）和 OSDAL（数据访问层），参考现有的 InboundOrderDAL 风格
- 队友B：负责 OSInterface（接口定义）和 OSBLL（业务逻辑），参考现有的 InboundOrderBLL 风格
- 队友C：负责 OSAPI Controller，参考现有的 GoodsInboundOrderController 风格
- 队友D：负责编写单元测试和集成测试，参考 Tests/UnitTests/ 和 Tests/IntegrationTests/ 的风格

Use Sonnet for each teammate.
```

---

### 10.3 场景二：跨模块重构 / 批量修改（推荐 3-4 个队友）

当需要进行横切关注点修改（如"统一错误码"、"给所有 DAL 加操作日志"、"统一状态字段规范"）时，按业务关联度分组：

```bash
创建一个 agent team 来给所有 DAL 层添加操作日志记录：

- 队友A：负责 商品管理 + 分类 + SKU拆装 模块
  文件：GoodsBaseInfoDAL.cs、CategoryDAL.cs、SkuPackageRelationDAL.cs

- 队友B：负责 采购 + 入库 + 库存 模块
  文件：PurchaseOrderDAL.cs、InboundOrderDAL.cs、GoodsInventoryStockDAL.cs、InventoryBatchDAL.cs

- 队友C：负责 销售 + 团购 + 调价 模块
  文件：GoodsPriceDAL.cs、PriceAdjustmentDAL.cs、WholesaleOrderDAL.cs

- 队友D：负责 仓库 + 计量单位 + 供应商 模块
  文件：WarehouseDAL.cs、MeasurementUnitDAL.cs、GoodsSupplierRelationDAL.cs
```

**为什么适合？** 11 个模块让单个 Agent 修改容易遗漏。按业务关联度分组后，每组 2-3 个模块，既保证覆盖完整又避免文件冲突。

---

### 10.4 场景三：复杂 Bug 调查（推荐 3 个队友）

当遇到复杂的数据不一致问题（如"库存扣减不准确"、"负库存回填异常"）时，用竞争性假设并行排查：

```bash
创建一个 agent team 来调查库存扣减不准确的问题：

- 队友A（入口追踪）：从 Controller → BLL → DAL 追踪请求处理流程
  重点文件：GoodsInventorySalesController.cs → SalesDeductionBLL.cs → GoodsInventoryStockDAL.cs

- 队友B（数据验证）：通过 MCP 查数据库，检查 inventory_stock / batches / transactions 数据一致性
  重点：对比 goods_inventory_stock 余额与 goods_inventory_transactions 流水合计是否一致

- 队友C（并发与边界分析）：检查事务隔离级别、锁机制、MQ 消费幂等性、负库存回填逻辑
  重点文件：NegativeInventoryFillDAL.cs、InventoryTransactionDAL.cs、GoodsMQ.cs
```

**为什么适合？** 库存系统涉及批次管理、负库存回填、单位转换、MQ 异步处理等多条路径，单个 Agent 很难同时兼顾所有方向。多队友竞争性假设让 Bug 定位更快。

---

### 10.5 场景四：Skills 流水线并行驱动（推荐 3 个队友）

结合项目已有的 Skills 体系（erp-product-manager、technical-architect、dev-task-breakdown、prototype-ui-designer），从 PRD 到代码的完整流水线可以并行执行：

```bash
创建一个 agent team 来设计「退货管理」功能的完整方案：

- 队友A（产品设计）：运行 /erp-product-manager 产出 PRD，然后运行 /technical-architect 产出技术分析文档
- 队友B（原型设计）：运行 /prototype-ui-designer 根据业务需求生成前端原型页面
- 队友C（任务拆解）：等队友A完成后，运行 /dev-task-breakdown 产出开发任务拆解文档
```

**为什么适合？** 产品设计和原型设计可以并行进行，任务拆解依赖产品文档但可以在前两者完成后立即启动，整体效率比串行执行提升约 2 倍。

---

### 10.6 场景五：发版前全面质量验证（推荐 3 个队友）

```text
创建一个 agent team 来进行发版前质量检查：

- 队友A（单元测试）：运行 Tests/UnitTests/ 下所有测试，修复失败用例，关注 BLL/DAL 逻辑正确性
- 队友B（集成测试）：运行 Tests/IntegrationTests/ 下所有测试，验证端到端业务流程
- 队友C（数据库验证）：通过 MCP 连接数据库，验证关键表的数据完整性和一致性
  重点检查：goods_inventory_stock、goods_inventory_batches、goods_inventory_transactions
```

---

### 10.7 各模块适用性参考

并非所有场景都需要 Agent Teams。以下是各模块的推荐策略：

| 业务模块 | 复杂度 | 单Agent够用？ | 推荐 Teams 场景 | 说明 |
| --- | --- | --- | --- | --- |
| 商品基础信息 | 中 | 小改动够用 | 新功能/重构时用 | 涉及双模式（预包装+散件） |
| 商品分类 | 低 | 够用 | 不需要 | 简单 CRUD |
| 库存管理（批次/流水/余额） | **高** | **不够** | **强烈推荐** | 批次、流水、余额三表联动 |
| 采购单 | 中高 | 勉强 | 有审批流时推荐 | 含审批流程 |
| 入库单（含负库存回填） | **高** | **不够** | **强烈推荐** | 逻辑最复杂的模块 |
| 销售扣减 | 中高 | 勉强 | 涉及并发时推荐 | 含批次扣减、单位转换 |
| 团购订单 | 中高 | 勉强 | 有 MQ/并发时推荐 | 含 MQ 异步处理 |
| 调价单 | 中 | 够用 | 批量调价时推荐 | 含审批流程 |
| 计量单位/单位转换 | 低 | 够用 | 不需要 | 简单 CRUD + 转换逻辑 |
| 仓库管理 | 低 | 够用 | 不需要 | 简单 CRUD |
| 供应商关系 | 低 | 够用 | 不需要 | 简单 CRUD |

---

### 10.8 关键原则

1.  **按层分配 > 按文件分配**：项目的五层架构天然适合每个队友负责一层，避免文件冲突
2.  **复杂模块才用 Teams**：简单 CRUD（分类、仓库、计量单位）用单 Agent + Subagent 即可
3.  **重点关注库存和入库**：这两个模块涉及批次、负库存回填、单位转换、MQ，复杂度最高，最能体现 Teams 价值
4.  **给队友参考文件**：创建团队时明确指出参考哪个已有模块的代码风格（如"参考 InboundOrderDAL"）
5.  **利用 MCP 验证**：至少安排一个队友通过 MySQL MCP 做数据验证，确保代码改动的正确性
6.  **Token 成本权衡**：3 层以上联动的复杂任务才值得使用 Teams，简单任务用 Teams 反而浪费

---

## 十一、Agent Teams 与 Skills 工作流的区别

### 11.1 本质区别

#### Skills 工作流 — "流水线上的专家"

Skills 的工作模式是**单人串行**，一个 Skill 完成后才能启动下一个：

```bash
用户 → 调用 /erp-product-manager → 产出 PRD
     → 调用 /technical-architect → 产出技术文档
     → 调用 /dev-task-breakdown  → 产出任务拆解
     → 调用 /dev-pipeline-orchestrator → 生成代码
     → 调用 /prototype-ui-designer → 生成原型
```

特点：

-   **串行执行**：一个 Skill 完成后才能启动下一个
-   **同一上下文**：所有 Skill 共享同一个对话窗口的上下文
-   **预定义角色**：每个 Skill 本质是一套专家提示词模板
-   **单兵作战**：始终只有一个 Agent 在干活

#### Agent Teams — "协作的团队"

Agent Teams 的工作模式是**多人并行**，所有队友同时工作：

```text
Team Lead（你） ──┬── 队友A（独立实例）──→ 并行干活
                  ├── 队友B（独立实例）──→ 并行干活
                  ├── 队友C（独立实例）──→ 并行干活
                  └── 队友D（独立实例）──→ 并行干活
                         ↕ 队友之间可以直接沟通
```

特点：

-   **并行执行**：所有队友同时工作
-   **独立上下文**：每个队友有自己的完整上下文窗口
-   **动态协作**：队友之间可以通信、挑战、协商
-   **团队作战**：多个 Agent 同时干活

---

### 11.2 关键差异对比表

| 对比维度 | Skills 工作流 | Agent Teams |
| --- | --- | --- |
| **执行方式** | 串行，一个接一个 | 并行，同时执行 |
| **上下文** | 共享同一个窗口，后期会被压缩 | 每人独立窗口，互不挤占 |
| **角色定义** | 预定义的固定提示词模板 | 临时灵活分配 |
| **沟通方式** | 通过文件传递（上一步的产出是下一步的输入） | 队友之间直接消息通信 |
| **适合的任务** | 有明确先后顺序的流水线 | 可以并行的协作任务 |
| **灵活性** | 流程固定，适合标准化场景 | 高度灵活，适合探索性场景 |
| **Token 成本** | 较低（始终一个实例） | 较高（N 个实例同时运行） |
| **上下文质量** | 后期上下文可能被压缩丢失信息 | 每个队友上下文干净独立 |

---

### 11.3 有了 Skills 还需要 Agent Teams 的四个原因

#### 原因一：Skills 解决不了"并行"问题

Skills 流水线是严格串行的：

```text
PRD(20分钟) → 技术文档(15分钟) → 任务拆解(15分钟) → 代码生成(30分钟)
总耗时：约 80 分钟
```

但实际上，原型设计和技术分析之间没有依赖关系，完全可以并行：

```text
Agent Teams 方式：
队友A：PRD ──→ 技术文档 ──┐
队友B：原型设计 ──────────┤──→ 队友C：任务拆解 → 代码生成
总耗时：约 50 分钟（节省 30 分钟）
```

#### 原因二：Skills 解决不了"上下文爆炸"问题

用 Skills 流水线开发一个复杂模块时，一个对话窗口要装下：

```text
PRD 文档（5000+ 字）
+ 技术分析文档（5000+ 字）
+ 任务拆解文档（3000+ 字）
+ Model 层代码
+ DAL 层代码
+ Interface 层代码
+ BLL 层代码
+ Controller 层代码
+ 测试代码
= 上下文严重膨胀，后期生成质量下降
```

Agent Teams 每个队友只关注自己的层，上下文干净，推理质量始终在线。

#### 原因三：Skills 解决不了"交叉验证"问题

Skills 是"一个人说了算"，没有质疑和验证机制。

Agent Teams 可以做到：

-   队友 A 写完代码 → 队友 B 审查 → 发现问题 → 互相纠正
-   队友 A 说"Bug 在入库逻辑" → 队友 B 说"不对，问题在 MQ 消费" → 竞争验证

#### 原因四：Skills 不适合"非流水线"场景

Skills 是为"PRD → 代码"这条主线设计的。但很多任务不走这条线：

| 场景 | Skills 能做？ | Agent Teams 能做？ |
| --- | --- | --- |
| 跨模块批量重构 | 不适合 | 适合，按模块分组并行 |
| 复杂 Bug 调查 | 不适合 | 适合，竞争性假设 |
| 代码评审 | 不适合 | 适合，多角度并行审查 |
| 发版前全面测试 | 不适合 | 适合，测试类型并行 |

---

### 11.4 最佳策略：Skills + Agent Teams 组合使用

Skills 和 Agent Teams 不是替代关系，而是**互补关系**。最强的用法是**让 Agent Teams 的队友调用 Skills**：

```bash
场景：开发「商品盘点」功能

Team Lead 创建团队：

队友A（产品线）：                              ┐
  → 调用 /erp-product-manager 写 PRD          │ 同时进行
  → 调用 /technical-architect 写技术文档       │
                                               │
队友B（原型线）：                              │
  → 调用 /prototype-ui-designer 画原型页面     ┘

队友C（开发线）：等 A 完成后
  → 调用 /dev-task-breakdown 拆任务
  → 调用 /dev-pipeline-orchestrator 生成代码

队友D（质量线）：等 C 完成后
  → 审查代码质量
  → 通过 MCP 验证数据库
```

这样就把 **Skills 的专业深度** 和 **Agent Teams 的并行广度** 结合起来了。

---

### 11.5 选择决策指南

```text
你的任务是什么？
│
├── 标准化流水线任务（PRD → 技术文档 → 代码）
│   └── ✅ 用 Skills 工作流即可
│
├── 简单 CRUD 开发（分类、仓库、计量单位）
│   └── ✅ 用单 Agent + Subagent 即可
│
├── 复杂新功能开发（涉及 3 层以上联动）
│   └── ✅ 用 Agent Teams，队友按层分工
│
├── 跨模块批量修改 / 重构
│   └── ✅ 用 Agent Teams，队友按模块分组
│
├── 复杂 Bug 调查
│   └── ✅ 用 Agent Teams，竞争性假设
│
├── 代码评审 / 质量检查
│   └── ✅ 用 Agent Teams，多角度并行审查
│
└── 复杂功能的完整生命周期（产品设计 + 开发 + 测试）
    └── ✅ 用 Agent Teams + Skills 组合
```

**一句话总结：Skills 是"一个全能专家按流程干活"，Agent Teams 是"一个团队分工协作"。简单的标准化流程用 Skills 就够了，复杂的、可并行的、需要交叉验证的任务用 Agent Teams。最佳实践是让团队成员在各自岗位上调用 Skills。**

