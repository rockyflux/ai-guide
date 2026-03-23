---
title: 从设计到代码，AI 统统搞定
date: 2026-03-13
weight: 80
bookToc: true
bookHidden: true
---

## Google Stitch + Figma + MCP：从设计到代码，AI 统统搞定

## 场景：我只想画界面，不想手写前端

很多开发者做 Side Project 时都有同一个痛点：

- 你有一堆产品想法，但不想陷在「像素级对齐」里；
- 你能写 React/Vue，但切 Figma 图、对设计稿像素走查很耗精力；
- 你希望**从一份设计稿直接得到工程级代码**，自己只做「架构 + 业务」。

这一篇就是把前一篇《从需求到设计原型》里提到的那条链路：

> **PRD → Stitch → Figma → MCP → 代码**

真正拉直成一套可复制的闭环 SOP。

---

## 一、整体链路概览：谁在干什么？

先把每个工具的职责说清楚：

1. **Stitch（Google）**：根据文字需求生成高保真 UI 原型，适合「从 0 到一版像样的设计」。
2. **Figma**：作为设计中枢，承载 UI 资产、组件库、交互状态，方便多人协作和版本管理。
3. **Framelink Figma MCP**：把 Figma 设计稿「暴露」给 AI，变成可检索、可解析的结构化数据。
4. **Claude Code / Cursor（MCP 客户端）**：通过 MCP 调 Figma，将设计稿翻译成目标技术栈代码。

一句话总结：

> **Stitch 负责“长出 UI”，Figma 负责“管理 UI”，MCP 负责“把 UI 变成代码”。**

你要做的事情只有三件：

1. 把需求讲清楚（给 Stitch / 大模型）；  
2. 在 Figma 里把生成的界面整理成合理的 Page / Frame / Component 结构；  
3. 在 Claude Code / Cursor 里给出清晰的**实现约束**，让 AI 根据 Figma 自动写代码。

---

## 二、准备工作：把工具链串起来

### 1. Stitch：搞定从文案到界面

- 访问 `https://stitch.withgoogle.com/`，用 Google 账号登录；
- 选择合适的模板（Web / Mobile），新建一个 Project；
- 把你的 PRD 核心内容丢给 Stitch，例如：

```text
我要做一个「心语」应用，帮助用户每天记录一句自己的心情/想法，并形成时间轴：
- 入口：今日一句话 + 最近一周卡片
- 主要页面：时间轴视图、单条详情页、标签筛选页
- 风格：极简、温柔、偏莫兰迪色、大圆角、暗色模式友好
请按照这些需求设计一个移动端 Web 原型。
```

得到第一版原型后，你可以在 Stitch 里先做一次粗调：删掉明显不需要的页面、统一色板、调整排版节奏。

**生态更新（值得跟进）**：近来 Stitch 侧还补齐了 **MCP** 与 **SDK**，便于把 Stitch 能力接进你自己的工具链；同时官方维护了一个 **Skills** 仓库，收录可与 Stitch / 设计工作流配合的技能与示例，非常建议浏览一遍，按需拷贝或改造。

- Skills 仓库：[`https://github.com/google-labs-code/stitch-skills`](https://github.com/google-labs-code/stitch-skills)

### 2. Figma：让原型落到设计资产

当前 Stitch 支持**导出到 Figma**，通常包括：

- 每个页面对应一个 Frame；
- 常用组件（按钮、输入框、卡片）会被整理成 Component；
- 文本样式 / 色板会自动映射为 Figma Style。

推荐在 Figma 里做三件事：

1. **整理 Page 结构**：比如 `App Shell`、`Auth`、`Timeline`、`Settings` 等。  
2. **抽出组件**：把重复使用的卡片、按钮、列表项都提升为 Component，并放入 `Components` Page。
3. **标记关键 Frame**：对后续要生成代码的页面，起清晰的名字，例如 `Timeline / Mobile`、`Timeline / Desktop`。

---

## 三、安装 Framelink Figma MCP：把 Figma 接入 AI

Framelink 的作用，是把「Figma 设计 → 可供 AI 调用的结构化 API」：

- 文档：[`https://www.framelink.ai/docs/quickstart`](https://www.framelink.ai/docs/quickstart)
- Stitch 官方 MCP 接入文档：[`https://stitch.withgoogle.com/docs/mcp/setup`](https://stitch.withgoogle.com/docs/mcp/setup)（可与 SDK、[`stitch-skills`](https://github.com/google-labs-code/stitch-skills) 仓库一起对照阅读）
- 你需要完成三步：

1. 在 Framelink 注册并创建一个 Figma 集成，拿到相关 Token / 配置；
2. 根据文档将 Framelink 配置为 Claude Code / Cursor 的 MCP Server；
3. 在项目的 `mcp` 配置（或 Cursor / Claude 的配置文件）中，声明 `framellink_figma` 之类的 server。

完成后，你在对话中就可以使用：

- **指令式**：直接在对话里写 `Figma UI 设计稿：@<figma-link>`；  
- **工具式**：在 Claude Code / Cursor 里显式调用 Framelink 提供的 Figma 相关指令。

如果你想找更多现成的 MCP Server（包括 Figma 之外的各种服务），可以逛一下社区导航站：[`https://www.mcpworld.com/zh/detail/fb8174bfa016d10733bd7fefb85eb949`](https://www.mcpworld.com/zh/detail/fb8174bfa016d10733bd7fefb85eb949)。

---

## 四、从 Figma 拉代码：一个可复制的提示词范式

假设你已经有了一份 Figma 设计稿，包含移动端 `Timeline` 页面，下面是一套可直接抄的工作流。

### 1. 先把设计稿挂进上下文

在 Claude Code / Cursor 中，用类似下面的提示词：

```text
Figma UI 设计稿：@https://www.figma.com/design/xxxx-xxxx-xxxx

你是一个大厂资深前端工程师，当前项目技术栈是：
- Vite + React + TypeScript
- Tailwind CSS
- Zustand 做轻量状态管理

请先通过 MCP 读取这份 Figma 设计稿，重点关注名为
`Timeline / Mobile` 的 Frame，描述一下它的布局结构和组件构成。
```

为什么要先「让 AI 复述」？  
因为这一步可以同时完成：

- 检查 Framelink / MCP 是否工作正常；  
- 让 AI 把设计稿里的结构语言化，方便你确认理解是否一致；  
- 为后续「组件拆分 + 代码生成」埋下铺垫。

### 2. 让 AI 输出组件树设计

确认布局理解正确后，请 AI 帮你先设计组件树，而不是直接写代码：

```text
基于你刚才对 `Timeline / Mobile` 的理解，请先只输出一个组件拆分方案：
- 给出组件树（例如：TimelinePage -> DaySection -> MoodCard）
- 说明每个组件需要哪些 props、会有哪些交互
- 标记哪些适合做成通用组件（如 Button、Tag、Dialog）

先不要写任何代码，只输出组件设计方案。
```

这一步的产物，相当于你平时画在白板上的组件架构图，用来对齐抽象边界。

### 3. 按「一组件一文件」生成代码

确定组件树后，再让 AI 按「自顶向下」的顺序生成代码：

```text
现在请按以下规则开始实现代码：
1. 从 `TimelinePage` 顶层页面组件开始，实现布局骨架。
2. 每次只实现一个组件，给出对应的 `.tsx` 文件内容。
3. 所有视觉细节以 Figma 为准：颜色 / 间距 / 圆角请尽量使用 Tailwind 类名表达。
4. 所有涉及业务逻辑的地方，先用假数据和 TODO 标记出接口。

先从 `src/pages/TimelinePage.tsx` 开始。
```

在每一轮生成后，你可以：

- 把代码应用到本地项目；  
- 用 `npm run dev` / `pnpm dev` 启动，肉眼对比 Figma 设计与实际效果；  
- 把截图（或 DOM 结构）再丢回给 AI，让它继续微调。

### 4. 可选思路：`DESIGN.md` 设计系统 + 「Claude 设计 → Codex 落地」

社区里有一种做法，和「直接把一坨 HTML 丢给另一个模型」不同：**先用 Claude Code（或同类助手）把界面、样式、交互跑出一版可讨论的设计实现，再让 AI 从这套实现里抽象出一份接近真实设计系统的说明文档**（常见命名是仓库根目录的 `DESIGN.md`，或项目内的设计系统说明），**最后把这份文档（而不是原始 HTML）交给更偏工程落地的工具——例如 OpenAI Codex——去生成目标技术栈代码**。

这样做的直觉是：

- 原始 HTML/CSS 往往噪声大、结构随意，换模型容易「照抄 markup」而不是「理解设计意图」；
- 提炼后的 **设计系统**（色板、字号阶梯、间距、圆角、组件层级、状态与变体）更像**给工程师的规格**，下游模型更容易稳定输出可维护代码；
- 不少人主观感受里 **Codex 的编程/重构能力更强**，于是把「想清楚长什么样」交给 Claude 线，把「按规格写进仓库」交给 Codex 线，形成分工。

操作上可以简化为三步（提示词可按你栈调整）：

1. 在 Claude Code 里完成一版高保真页面或组件（或 Stitch → 导出后再由 Claude 整理结构）。  
2. 要求 AI：**不要**输出整页 HTML，而是根据当前视觉与结构，写一份 `DESIGN.md`（或等价的设计系统摘要）：Token、排版规则、组件清单与交互约定。  
3. 在 Codex（或你惯用的「强编码」助手）里只投喂：`DESIGN.md` + 技术栈约束 + 目录/框架要求，让它从零实现或增量改代码。

这与下文「从已有代码提炼 Design System」方向一致，差别在于**把提炼步骤前置**，让「编码主力」始终对着规格而不是对着一次性生成的标记层。

---

## 五、让「设计到代码」真正闭环：加入验证与重构

只从 Figma 拉一版代码，并不意味着闭环完成。为了让这条链路真的可复用，建议加上两层「保护」：

### 1. 验证：用 Storybook / Playwright 做 UI 回归

在代码生成阶段，就要求 AI：

- 为每个关键组件生成一个 Story（`*.stories.tsx`），覆盖主状态；  
- 为关键交互（如添加心语、编辑、删除）编写基础的 Playwright / Cypress 用例。

这样一来：

- 你后续在 Figma 里改一版设计 → 重新走一遍「MCP 拉代码」流程；  
- 跑一遍 Storybook / E2E 用例，就能快速验证这次更新是不是「只变 UI、不伤逻辑」。

### 2. 重构：把一次性代码升级为设计系统

当你对某个项目的 UI 比较满意时，可以让 AI 帮你「提炼设计系统」：

```text
请基于当前项目的组件，提炼出一份初步的 Design System：
- 颜色 Token（主色、辅色、语义色）
- 间距与圆角（如 spacing-2/4/6，radius-sm/md/lg）
- 字体层级（标题、正文、辅助文本）
并在 Tailwind 配置中落地这些设计 Token，重构现有组件中的硬编码样式。
```

这一步做完，你的项目就从「一次性生成的 UI」升级为「有设计系统支撑的可持续演进项目」。

---

## 六、总结：一条可以反复套用的公式

把这一整套流程压缩成一句话，就是：

> **用 Stitch 快速生长 UI → 用 Figma 管理与迭代设计 → 用 MCP 把设计暴露给 AI → 用 Claude Code / Cursor 生成并维护工程级代码。**

如果你已经熟悉上一篇《从需求到设计原型》里讲的 PRD → Stitch → 技术栈转换，那么这一篇可以看作是它的「升级版」：

- 把「一次性导出 HTML」升级为「以 Figma 为中枢的持续迭代」；  
- 把「手工看设计稿写代码」升级为「通过 MCP 让 AI 直接理解 Figma」；  
- 把「纯 UI 生成」升级为「配合测试与设计系统的可维护前端工程」；  
- 需要对接官方示例与技能时，可结合 Stitch 的 MCP/SDK 与 [`stitch-skills`](https://github.com/google-labs-code/stitch-skills)；若你更信任另一套「写代码」模型，也可尝试上文 **`DESIGN.md` 中转**：先提炼设计系统，再交给对方实现。

建议你挑一个体量适中的 Side Project，完整跑一遍：

1. 写一份简单 PRD；  
2. 用 Stitch 生成第一版原型并导出到 Figma；  
3. 配置 Framelink Figma MCP；  
4. 在 Claude Code / Cursor 中走完「组件树 → 代码生成 → 验证 → 重构」四步。

跑通一次之后，这条「Google Stitch + Figma + MCP」链路就会变成你做前端产品时的默认打法：  
**从设计到代码，AI 统统搞定，而你只负责做判断与决策。**
