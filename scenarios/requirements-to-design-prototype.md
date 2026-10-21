# 从需求到设计原型

目标：用 AI 把「模糊想法」跑成 **结构化 PRD → 高保真原型 → 目标技术栈代码**，再交给 Cursor / Claude Code 做工程落地。

已跑通 PRD → 原型 → 技术栈转换后，可看进阶篇：[从设计到代码（Stitch + Figma + MCP）](/scenarios/google-stitch-figma-mcp.html)。

---

## 四步流程

传统路径多是 `需求 → 文档 → 设计图 → 切图 → 写代码`。本篇实战流压成四步：

| 步骤 | 做什么 | 常用工具 |
| --- | --- | --- |
| 1. 需求定义 | 模糊想法 → 结构化 PRD | ChatGPT / Gemini / 豆包 |
| 2. 视觉建模 | PRD → 高保真可点击原型（HTML） | [Stitch](https://stitch.withgoogle.com/) · [huashu-design](https://github.com/alchaincyf/huashu-design) |
| 3. 技术重构 | HTML 原型 → React / Vue + Tailwind 等 | Stitch 导出 / Agent 转换；可选 Figma + MCP |
| 4. 工程落地 | 业务逻辑、存储、图表、规范 | Cursor / Claude Code |

![从需求到设计原型流程示意](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERjNtprjJATBqQ-JbeLIvXTU-_xVJJkAACyyEAAnZPcFXKnveKFkEMWDoE.png)

---

## 工具怎么选

### 需求与逻辑

| 工具 | 适合 |
| --- | --- |
| ChatGPT / Gemini / 豆包 | 深度梳理，输出标准 PRD、用户故事 |
| [DesignPrompts](https://www.designprompts.dev/) | 不会描述「美感」时，借专业设计提示词 |

### UI 原型与视觉

| 工具 | 定位 | 何时用 |
| --- | --- | --- |
| **[Stitch (Google)](https://stitch.withgoogle.com/)** | 核心原型：交互强，可导出 HTML / Figma | 要快速搭应用框架、后续进 Figma |
| [DESIGN.md（Stitch Docs）](https://stitch.withgoogle.com/docs/design-md/overview) | 设计系统 Markdown：配色、字体、圆角、间距、组件规则 | 不想每次靠临场 prompt 控风格 |
| [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 现成 `DESIGN.md` 风格库 | 无专职设计师时先借成熟气质 |
| **[huashu-design](https://github.com/alchaincyf/huashu-design)** | Agent 内 HTML 设计 Skill（MIT） | 不想开 Stitch 网页，希望在 IDE 里对话出稿 |
| [v0.dev (Vercel)](https://v0.dev/) | 前端组件级生成，可出 Tailwind / Radix 代码 | 已有页面结构，要直接落组件 |
| [秒多 (MiaoDuo)](https://miaoduo.com/) | 国产组件 / 原型生成 | 中文语境、无需科学上网、要快 |
| [banana-slides](https://github.com/Anionex/banana-slides) | AI 原生演示稿：一句话 / 大纲 → PPTX / PDF / 讲解视频 | 目标是汇报稿、讲义、提案 deck，不是 Web/App 界面 |
| [即时设计 · 即时 AI](https://js.design/ai) | 国内 Figma 替代 + AI，文案到高保真 | 要一站式设计协同 |
| [Pixso AI 生成器](https://pixso.cn/pixso-ai-generator/) | 自然语言生成 UI 组件与页面结构 | 已在 Pixso 里协作 |
| [Uizard](https://uizard.io) | 草图 / 截图 / 自然语言 → 原型与 UI | 非设计师快速起盘界面 |
| [Galileo AI](https://www.usegalileo.ai/) | 产品描述 → 高保真、多状态界面稿 | 探索多种视觉风格 |
| [Dora AI](https://www.dora.run/ai) | 文字描述 → 动态网页与交互动效 | Landing Page、视觉展示页 |

**Stitch vs huashu-design**

| | Stitch | huashu-design |
| --- | --- | --- |
| 入口 | 图形化网页产品 | 终端 / IDE 对话（Claude Code、Cursor、Codex） |
| 导出 | HTML、Figma | 单文件 HTML、可编辑 PPTX、MP4/GIF |
| 风格约束 | 可挂 `DESIGN.md` | 20 套设计哲学 + 5 维评审；品牌任务走 Core Asset Protocol |
| 更适合 | 要进 Figma、多人设计协同 | 订阅配额外的并行 Agent、复杂时间轴动画 |

安装 huashu-design：

```bash
npx skills add alchaincyf/huashu-design
```

| 能力 | 典型产出 | 大致耗时 |
| --- | --- | --- |
| 交互原型（App / Web） | 单文件 HTML · iPhone 边框 · 可点击 · Playwright 校验 | 10–15 分钟 |
| 幻灯片 | HTML 演示 + 可编辑 PPTX | 15–25 分钟 |
| 动效 / 发布片 | MP4 / GIF / 配乐 | 8–12 分钟 |
| 方向顾问（需求模糊时） | 5 学派 × 20 哲学中选 3 套方向并并行出 demo | ~5 分钟 |
| 5 维设计评审 | 雷达图 + Keep / Fix / Quick Wins | ~3 分钟 |

### 流程图与信息架构

| 工具 | 适合 |
| --- | --- |
| [Whimsical AI](https://whimsical.com/) | 用户流程、线框、架构图 |
| [Next AI Draw.io](https://next-ai-drawio.jiang.jp/zh) | 自然语言生成 draw.io 图形 |

### 代码与 Agent

| 工具 | 适合 |
| --- | --- |
| **Cursor** | 全项目上下文：写代码、重构、Debug |
| **Claude Code** | 命令行 Agent：多步推理、自主修复、配合 Git |
| [Framelink Figma MCP](https://www.framelink.ai/docs/quickstart) | Figma 设计稿暴露给 AI（进阶见 [从设计到代码](/scenarios/google-stitch-figma-mcp.html)） |
| [AutoGLM](https://autoglm.zhipuai.cn/) | 自动化处理页面任务、批量生成内容或脚本 |
| [Coze (扣子)](https://code.coze.cn/) | 搭建业务逻辑工作流与多角色 Agent |

> **PRD 负责「做什么」，DESIGN.md 负责「看起来像什么」。**  
> 功能与信息架构靠 PRD；视觉一致性靠设计系统文件。两者一起喂，通常比只写一长段 prompt 更稳。

---

## 实战：从零做「心语」类 App

下面以「个人 / 小团队任务管理」为例，按四步走完。产品名可换成你自己的。

### 1. 需求产出

告诉大模型你的创意，要求输出标准 PRD。

**推荐提示词**

```text
我想要开发一个面向个人与小团队的任务管理系统。请作为资深产品经理，为我输出一份详细的 PRD。包含：典型使用场景、核心功能模块（收集收件箱、任务列表、日历视图、看板视图、提醒与重复任务、协作与权限）、页面层级结构、以及核心业务逻辑。
```

### 2. 原型构建（两条路径任选）

#### 路径 A：Stitch（网页）

把上一步 PRD 核心内容喂给 [Stitch](https://stitch.withgoogle.com/)。不想风格完全靠临场发挥时，先准备 `DESIGN.md`：

1. 读 [Stitch DESIGN.md 文档](https://stitch.withgoogle.com/docs/design-md/overview)，理解它是「给 AI 读的设计系统」。
2. 把文件放在项目根目录：同时给 AI **PRD（做什么）** + **DESIGN.md（长什么样）**。
3. 没有自己的设计系统时，从 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 挑接近目标气质的模板，复制为 `DESIGN.md`，再改品牌色、字体、组件习惯。

**发给 Stitch（无 DESIGN.md）**

```text
根据以下需求文档，请为我设计一个高保真的移动端 Web 原型。风格要求：极简治愈系，莫兰迪配色，大圆角设计，深色模式友好，请确保交互流畅。
```

**发给 Stitch（已有 DESIGN.md）**

```text
请基于以下 PRD，为我生成一个高保真的移动端 Web 原型。视觉风格请严格参考项目中的 DESIGN.md；如果需求与视觉规则冲突，优先保持信息层级清晰与核心任务路径顺畅。
```

#### 路径 B：huashu-design（Agent 内）

已在 Cursor / Claude Code 安装 huashu-design 时，把 PRD 直接交给 Agent。Skill 会走「初级设计师」流程：先澄清需求 → 占位块确认 → 再填真实内容与变体，交付前用 Playwright 点测关键路径。

**示例提示词**

```text
根据以下 PRD，用 huashu-design 做一个可点击的 iOS 风格番茄钟 App 原型，4 个主屏，极简治愈系、莫兰迪配色。若有品牌 logo / 主色请按 Core Asset Protocol 先收集再写 brand-spec.md。
```

需求仍模糊时，可先说：

```text
我要做一份 AI 心理学主题的 keynote，先给我 3 种差异化视觉方向并各出一张 demo 让我选。
```

产出 HTML（及可选 MP4 / PPTX）后，与 Stitch 路径一样进入第 3 步。

### 3. 技术栈转换（HTML → 组件）

无论来自 Stitch 还是 huashu-design，HTML 都要「翻译」成开发用组件（如 React / Vue + Tailwind）。

**转换提示词**

```text
这是一段由原型工具生成的原始 HTML。请将其重构为生产环境级别的代码：
1. 技术栈：Vite + Vue 3 + Tailwind CSS + 图标库（如 Lucide 或 Iconify）。
2. 要求：将页面拆分为 Header、TaskCard、StatsSection 等独立组件。
3. 逻辑：保持原有视觉效果，但使用 Tailwind 类名重写所有样式。
4. 交互：用 Vue 组件状态管理简单的页面切换（组合式 API 或 <script setup>）。
```

**可选：经 Figma + MCP**

Stitch 可导出 Figma。装好 [Framelink Figma MCP](https://www.framelink.ai/docs/quickstart) 后，在 Cursor / Claude Code 里：

```text
Figma UI 设计稿：@https://www.figma.com/design/xx
你是资深前端工程师，根据我提供的 Figma UI 设计稿，调用 MCP，结合项目已有的技术栈实现前端页面。
```

完整 SOP（组件树 → 一文件一组件 → 验证）见 [从设计到代码](/scenarios/google-stitch-figma-mcp.html)。

### 4. 代码工程化

把转换后的代码放进项目文件夹，打开 Cursor / Claude Code。

**工程化指令示例**

```text
我已经根据原型建立了基础组件。现在请基于 @App.vue 的结构，实现真实的业务逻辑：
1. 对接本地存储（LocalStorage）保存用户任务数据。
2. 集成图表库（如 ECharts）实现动态趋势图。
3. 优化响应式布局，确保不同尺寸屏幕表现正常。
4. 检查代码规范，确保 TypeScript 类型定义严谨。
```

---

## 小结

1. **PRD + DESIGN.md** 一起喂，比单靠超长 prompt 稳。  
2. 原型两条路：**Stitch**（要 Figma / 图形化）或 **huashu-design**（要 IDE 内对话）。  
3. HTML 先转成目标栈组件，再进 Cursor / Claude Code 补业务与工程化。  
4. 要持续以设计稿为中枢迭代，接上 [Stitch → Figma → MCP](/scenarios/google-stitch-figma-mcp.html)。

跑通一次后，这条「需求 → 原型 → 代码」就会变成做 Side Project 时的默认打法。
