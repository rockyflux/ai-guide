---
title: Kiro 10 分钟项目实战
weight: 3
bookToc: true
bookHidden: false
---

## 10 分钟跑通一个真实项目

这篇文档按“开箱即用”的顺序，带你把 Kiro 在一个真实项目里跑通：先让它理解你的项目（Steering）→ 再把能力补齐（MCP / Skills / Hooks）→ 最后按需求复杂度选模式（Vibe / Spec）。

想深入了解 Kiro 的各个功能模块？查看：[Kiro 详细使用指南]({{< relref "ai-programming/kiro-quick-start" >}})

### 1. 打开项目

在 Kiro 中打开你的项目文件夹，或创建新项目。

### 2. 初始化项目配置

打开项目后，先生成基础 Steering 文件：点击左侧 **Kiro 面板** → **Steering** 区域 → **Generate Steering Docs**。如果项目近期有较大调整，建议重新生成一次以同步更新。

Kiro 会自动分析项目并生成三个核心文件：

- `product.md` - 产品定位、目标用户、核心功能
- `tech.md` - 技术栈、框架、工具链
- `structure.md` - 项目结构、命名规范、架构决策

在 Steering 区域选择 **Global agent steering**，创建 `rules.md`（全局规则/偏好/红线）来约束后续对话与代码修改风格。（可参考示例：[rules.md](https://www.codecopy.cn/embed/d8dwz5)）

### 3. 配置 MCP Servers

根据项目需要添加额外能力：
- [Interactive Feedback MCP](https://www.mcpworld.com/zh/detail/21bf0341701de684d4055aa8b20c6074)：交互式反馈循环 - 弹出版（推荐）
- [mcp-feedback-enhanced](https://www.mcpworld.com/zh/detail/5b391a834829050d83b1c24703c2bdd2) - 交互式反馈 - 网页版
- [Sequential Thinking](https://www.modelscope.cn/mcp/servers/@modelcontextprotocol/sequentialthinking) - 思维链推理 - 处理复杂问题

更多见：[MCP Servers 详细配置]({{< relref "ai-programming/kiro-quick-start#mcp-servers扩展-agent-能力" >}}) 和 [Awesome MCP Servers]({{< relref "agent/mcp" >}})


### 4. 配置 Skills

按需导入常用 Skills（如代码审查、测试、发布、文档生成等），让 Kiro 的“能力菜单”更贴近你的工作流。

参考：[使用 npx skills 导入]({{< relref "agent/skills/#六初始化导入推荐skills" >}})

### 5. 创建 Hooks

设置自动化工作流，如保存时自动 lint、Agent 完成后自动总结等。

请根据 [示例配置](https://www.codecopy.cn/embed/2zhgim) 手动复制代码创建。更多学习参考：[Hooks 详细配置]({{< relref "ai-programming/kiro-quick-start#hooks事件驱动自动化" >}})

一个实用原则：先上 1-2 个“高收益 Hook”（比如保存时格式化、提交前检查），跑稳了再加更多，避免一开始就把流程弄得过重。

### 6. 选择工作模式

根据需求复杂度和确定性选择合适的工作模式：

```text
需求是否明确？
├─ 是 → 需求是否复杂（多文件/多步骤）？
│         ├─ 是 → 使用 Spec 模式
│         └─ 否 → 使用 Vibe 模式
└─ 否 → 使用 Vibe 模式（边聊边探索）
```

### 7. Vibe 模式：快速迭代开发

**适用场景**：Bug 修复、小范围重构、代码优化、功能调整。

**常用提示词**：

- `#file 用架构师的标准审一遍，能优化的直接改` - 代码审查与优化
- `#file 写之前先看项目里有没有现成的，别重复造轮子` - 避免重复实现
- `#file 这两块逻辑太像了，提成公共模块` - 代码复用
- `用 Clean Code 的标准检查你刚写的代码，有问题直接改` - 代码质量检查

### 8. Spec 模式：结构化开发

**适用场景**：从零开始的新功能、复杂的多文件改动、需要设计评审的需求。建议先整理好需求文档（例如 PRD/RDM/用户故事均可），再交给 Kiro 用 Spec 模式执行。


**Spec 模式操作流程**：在项目根目录创建 `docs/` 目录，将需求文档保存为 `.md` 文件；在 Kiro 对话中通过 `#docs/需求文档.md` 引用，并输入提示词（如 `根据需求文档实现 xxx 功能`），即可生成结构化的 Spec 任务流。


**常用提示词**：

- `我要加个 xxx 功能，不要重复造轮子，不要过度设计` - 新功能开发
- `用最佳实践重构一下` - AI 会自动分析并应用最佳实践
- `用 Clean Code 的标准检查你刚才写的代码` - AI 自动理解并应用 Clean Code 原则

**Spec 模式优势**：自动拆解复杂任务为可执行步骤、每个步骤完成后自动验证、保留完整的设计和实现记录、适合团队协作和代码审查。



### 9. 常用技巧

- **上下文引用**：`#文件名` 引用特定文件、`#文件夹` 引用整个文件夹、`#Steering 文件` 调用 manual 模式的 Steering
- **调用 Skills**：直接提及关键词让 Kiro 自动激活，或使用 `/` 命令手动选择
- **查看诊断**：Kiro 会自动检测代码问题，可以直接说“修复所有错误”

---