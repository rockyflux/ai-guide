---
title: 从需求到设计原型
date: 2026-03-08
weight: 30
bookToc: true
bookHidden: false
---
## 从需求到设计原型：AI 辅助开发全链路指南

> 如果你已经走通了「PRD → 原型 → 技术栈转换」，可以继续看进阶篇：**[Google Stitch + Figma + MCP：从设计到代码，AI 统统搞定]({{< relref "project-practice/google-stitch-figma-mcp" >}})**。

本指南记录了一套利用 AI 工具链实现从“模糊构思”到“高保真原型”再到“可执行代码”的极速开发闭环。

---

## 一、 核心方法论：AI 驱动的极速流

传统的开发流程是 `需求 -> 文档 -> 设计图 -> 切图 -> 写代码`。
**AI 时代的实战流是：**

1. **需求定义** (ChatGPT/Gemini/豆包)：输出结构化 PRD。
2. **视觉建模** (Stitch / [huashu-design](https://github.com/alchaincyf/huashu-design))：通过 PRD 生成高保真 UI 原型（HTML）；或在 Agent 内用 Skill 直接交付可点击原型、幻灯片、动画。
3. **技术重构** (Stitch to Tech)：将 HTML 原型转化为目标技术栈（React/Vue/Tailwind）。
4. **工程落地** (Cursor/Claude Code)：由 AI Agent 完成生产环境代码编写。

![BQACAgUAAyEGAASHRsPbAAERjNtprjJATBqQ-JbeLIvXTU-_xVJJkAACyyEAAnZPcFXKnveKFkEMWDoE.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERjNtprjJATBqQ-JbeLIvXTU-_xVJJkAACyyEAAnZPcFXKnveKFkEMWDoE.png)

---

## 二、 工具矩阵 (Toolchain)

### 1. 需求与逻辑定义

* **ChatGPT / Gemini / 豆包**：负责深度思考，将模糊的想法转化为标准的产品需求文档（PRD）。

### 2. UI 生成与原型 (UI Generation)

* **[Stitch (Google)](https://stitch.withgoogle.com/)**：**核心原型工具**。交互感极强，支持导出 HTML，适合快速搭建应用框架。
* **[DESIGN.md（Stitch Docs）](https://stitch.withgoogle.com/docs/design-md/overview)**：Stitch 推出的“设计系统 Markdown 规范”。可以把配色、字体、圆角、间距、组件规则等写成一个 AI 可直接理解的 `DESIGN.md`，让原型生成更稳定，而不是每次都靠 prompt 临场发挥。
* **[awesome-design-md](https://github.com/VoltAgent/awesome-design-md)**：一个现成的 `DESIGN.md` 风格库，收集了大量产品 / 品牌风格模板。适合在没有专职设计师、但又想快速借鉴成熟设计语言时直接取样。
* **v0.dev / 秒多**：前端组件级生成工具。
* **[banana-slides](https://github.com/Anionex/banana-slides)**：更偏“AI 原生演示稿 / Slides 生成”。适合把想法、大纲、页面描述快速变成可导出的 PPT/PDF；如果你的目标是汇报稿、课程讲义、提案 deck，而不是 Web/App 界面原型，它会更顺手。
* **[huashu-design](https://github.com/alchaincyf/huashu-design)**（花叔设计 · MIT）：**Agent 原生的 HTML 设计 Skill**。安装在 Claude Code / Cursor / Codex 等环境后，用对话即可交付可点击 App/Web 原型、浏览器演示稿 + **可编辑 PPTX**（保留文本框）、产品动画（MP4/GIF）、信息图等。内置 20 套设计哲学与 5 维专家评审，带品牌任务时会走 **Core Asset Protocol**（logo / 产品图 / UI 截图 / 色板 / 字体，禁止凭记忆猜品牌色）。适合「不想开 Figma / Stitch 网页，希望在 IDE 里一句话出稿」的场景。

  ```bash
  npx skills add alchaincyf/huashu-design
  ```

  | 能力 | 典型产出 | 大致耗时 |
  | --- | --- | --- |
  | 交互原型（App / Web） | 单文件 HTML · iPhone 边框 · 可点击 · Playwright 校验 | 10–15 分钟 |
  | 幻灯片 | HTML 演示 + 可编辑 PPTX | 15–25 分钟 |
  | 动效 / 发布片 | MP4 / GIF / 配乐 | 8–12 分钟 |
  | 方向顾问（需求模糊时） | 5 学派 × 20 哲学中选 3 套方向并并行出 demo | ~5 分钟 |
  | 5 维设计评审 | 雷达图 + Keep/Fix/Quick Wins | ~3 分钟 |

  与 Stitch 的取舍：**Stitch** 偏图形化产品、可导出 Figma；**huashu-design** 偏终端对话、并行 Agent 不受订阅配额束缚，复杂时间轴动画更强。二者输出的 HTML 原型都可进入下文「第三步：技术栈转换」。

### 3. IDE 与代码实现 (Coding Agent)

* **Cursor**：目前最强的 AI 集成开发环境，擅长理解全项目上下文。
* **Claude Code**：Anthropic 推出的命令行 Agent，具备极高的逻辑推理和自主修复能力。

---

## 三、 全链路实战：从零开发“心语” App

### 第一步：需求产出（ChatGPT/豆包）

**操作：** 告诉 AI 你的创意，要求其输出标准的 `Product Requirements Document (PRD)`。

**推荐提示词：**

```
“我想要开发一个面向个人与小团队的任务管理系统。请作为资深产品经理，为我输出一份详细的 PRD。包含：典型使用场景、核心功能模块（收集收件箱、任务列表、日历视图、看板视图、提醒与重复任务、协作与权限）、页面层级结构、以及核心业务逻辑。”
```

### 第二步：原型构建（Stitch）

**操作：** 将上一步得到的 PRD 核心内容喂给 Stitch。

如果你不希望页面风格完全依赖一段自然语言提示，可以在这一步加入 `DESIGN.md`：

- **官方思路**：根据 [Stitch 的 DESIGN.md 文档](https://stitch.withgoogle.com/docs/design-md/overview)，`DESIGN.md` 本质上是一个给 AI 读的设计系统文件，用来持续描述“这个项目应该长什么样”。
- **实战用法**：把它放在项目根目录后，你就可以同时给 AI 两类信息：
  - `PRD / 页面需求`：告诉它做什么页面、满足什么业务目标
  - `DESIGN.md / 视觉规则`：告诉它这个页面应该呈现什么气质、层级和组件语言
- **省力办法**：如果你暂时没有自己的设计系统，可以先从 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 里挑一个接近目标产品气质的模板，复制为项目内的 `DESIGN.md`，再按你的品牌色、字体和组件习惯做小改。

一个很实用的认知是：**PRD 负责“做什么”，DESIGN.md 负责“看起来像什么”**。前者解决功能与信息架构，后者解决视觉一致性与设计约束。两者配合，通常比只写一长段 prompt 更稳。

**发给 Stitch 的提示词策略：**

```
“根据以下需求文档，请为我设计一个高保真的移动端 Web 原型。风格要求：极简治愈系，莫兰迪配色，大圆角设计，深色模式友好,请确保交互流畅.”
```

如果你已经准备了 `DESIGN.md`，提示可以改成：

```text
“请基于以下 PRD，为我生成一个高保真的移动端 Web 原型。视觉风格请严格参考项目中的 DESIGN.md；如果需求与视觉规则冲突，优先保持信息层级清晰与核心任务路径顺畅。”
```

#### 第二步备选：Agent 内原型（huashu-design）

若你已在 Cursor / Claude Code 中安装 [huashu-design](https://github.com/alchaincyf/huashu-design)，可把 PRD 直接交给 Agent，由 Skill 走「初级设计师」流程：先批量澄清需求 → 用占位块快速出稿给你确认 → 再填真实内容与变体，交付前用 Playwright 点测关键路径。

**示例提示词：**

```text
根据以下 PRD，用 huashu-design 做一个可点击的 iOS 风格番茄钟 App 原型，4 个主屏，极简治愈系、莫兰迪配色。若有品牌 logo / 主色请按 Core Asset Protocol 先收集再写 brand-spec.md。
```

需求仍模糊时，可先说：

```text
我要做一份 AI 心理学主题的 keynote，先给我 3 种差异化视觉方向并各出一张 demo 让我选。
```

产出为项目内 HTML（及可选 MP4 / PPTX）后，与 Stitch 路径一样进入第三步做技术栈转换。

### 第三步：技术栈转换（HTML 原型 -> 技术栈）

无论来自 Stitch 还是 huashu-design，得到 HTML 后都需要将其“翻译”为开发用的组件（如 React + Tailwind）。

**发给 AI 的转换提示词：**

```
“这是一段由 Stitch 生成的原始 HTML 原型代码。请将其重构为 **生产环境级别** 的代码：
1. 技术栈：Vite + Vue 3 + Tailwind CSS + 图标库（如 Lucide 或 Iconify）。
2. 要求：将页面拆分为 Header, TaskCard, StatsSection 等独立组件。
3. 逻辑：保持原有的 CSS 视觉效果，但使用 Tailwind 类名重写所有样式。
4. 交互：使用 Vue 组件状态管理简单的页面切换（如组合式 API 或 `<script setup>` 写法）。”
```

Stitch导出Figma，
安装：[Framelink_Figma_MCP](https://www.framelink.ai/docs/quickstart)
```
Figma UI设计稿：@https://www.figma.com/design/xx
你是一个大厂资深前端研发工程师，根据我提供的Figma UI设计稿，调用MCP，结合项目已有的技术实现前端页面
```

### 第四步：代码工程化（Cursor / Claude Code）

**操作：** 将转换后的代码存入项目文件夹，打开 Cursor。

**在 Cursor 中的指令：**

```
“我已经根据原型建立了基础组件。现在请基于 `@App.vue` 的结构，实现真实的业务逻辑：
1. 对接本地存储（LocalStorage）保存用户任务数据。
2. 集成图表库（如 ECharts）实现动态趋势图。
3. 优化响应式布局，确保在不同尺寸屏幕上均有完美表现。
4. 检查代码规范，确保 Typescript 类型定义严谨。”
```

---

## 四、模型分工：前端 / 后端 / 编排

在多模型协作场景下，可以按「前端 / 后端 / 编排」来分工，让各自擅长的模型做擅长的事：

- **前端任务 → Gemini**：更擅长 UI 细节、CSS 实现、交互动效和组件拆分。
- **后端任务 → Codex**：更擅长业务逻辑、算法实现、调试和性能优化。
- **全栈整合 → Claude**：负责多模型协作编排、质量把控、代码审核与最终 Patch 合并。

一个典型的工作流示意可以是：

```text
Claude Code（编排）
       │
   ┌───┴───┐
   ↓       ↓
Codex   Gemini
(后端)   (前端)
   │       │
   └───┬───┘
       ↓
  Unified Patch
（Claude 审核后应用）
```

---

## 相关产品

根据「需求 → 原型 → 代码 → 自动化」这一链路，对常用工具做一个速查索引：

### 1. 需求与 PRD / 设计提示

* **ChatGPT / 豆包**：负责深度思考，将模糊想法转化为结构化 PRD 和用户故事。
* **[DesignPrompts](https://www.designprompts.dev/)**：提供专业设计提示词，解决“不知道怎么跟 AI 描述美感”的问题。

### 2. UI 原型与视觉设计 (UI Generation)

* **[Stitch (Google)](https://stitch.withgoogle.com/)**：**首选原型工具**。交互感极强，支持导出 HTML 和 Figma，适合快速搭建应用框架。
* **[huashu-design](https://github.com/alchaincyf/huashu-design)**：花叔开源的 HTML 原生设计 Skill（MIT）。在 Claude Code / Cursor 等环境中 `npx skills add alchaincyf/huashu-design` 后，可对话生成可点击原型、可编辑 PPTX、MP4/GIF 动效与信息图；含 20 设计哲学、5 维评审与品牌资产协议。适合「PRD 已在手、希望在 IDE 内闭环到 HTML/视频/幻灯片」的团队。
* **[v0.dev (Vercel)](https://v0.dev/)**：前端组件级生成工具，可直接产出基于 Tailwind / Radix 的前端代码。
* **[banana-slides](https://github.com/Anionex/banana-slides)**：一个基于 nano banana pro 的 AI-native Slides / PPT 生成应用，支持从一句话、大纲、页面描述生成演示稿，也支持素材上传、局部口头修改以及导出 PPTX / PDF / 讲解视频。适合“需求梳理完后，先把汇报结构和视觉表达跑通”的场景。
* **[秒多 (MiaoDuo)](https://miaoduo.com/)**：国产精选。无需科学上网，响应极快，适合中文语境下的快速原型产出。
* **[即时设计 · 即时 AI](https://js.design/ai)**：国内 Figma 替代 + AI 设计助手，支持从文案到高保真设计的一站式生成。
* **[Pixso AI 生成器](https://pixso.cn/pixso-ai-generator/)**：支持用自然语言生成 UI 组件与页面结构，并与 Pixso 设计协同。
* **[Uizard](https://uizard.io)**：从草图/截图/自然语言自动生成原型和 UI，适合非设计师快速起盘产品界面。
* **[Galileo AI](https://www.usegalileo.ai/)**：根据产品描述生成高保真、多状态界面稿，适合探索多种视觉风格。
* **[Dora AI](https://www.dora.run/ai)**：通过文字描述直接生成动态网页与交互动效，适合做 Landing Page 与视觉展示页面。

### 3. 流程图与信息架构 (Flow & IA)

* **[Whimsical AI](https://whimsical.com/)**：快速生成用户流程图 (User Flow)、线框图与架构图，理清整体信息结构。
* **[Next AI Draw.io](https://next-ai-drawio.jiang.jp/zh)**：基于 AI 的流程图与架构图生成工具，可用自然语言快速生成 draw.io 图形。

### 4. 代码实现与 Agent 自动化

* **Cursor**：AI 集成开发环境，擅长理解全项目上下文并协助写 Code / Refactor / Debug。
* **Claude Code**：命令行 Agent，具备较强的多步推理与自主修复能力，适合配合 Git 仓库使用。
* **[AutoGLM](https://autoglm.zhipuai.cn/)**：适合自动化处理页面任务、批量生成内容或脚本。
* **[Coze (扣子)](https://code.coze.cn/)**：适合搭建具备业务逻辑的 AI 后端工作流与多角色 Agent 系统。

---
