# 浏览器插件

这篇指南重点是：**选择哪些开源项目、让 AI 参考哪些成熟实现，以及如何给 AI 编写开发提示词。** 不展开讲解浏览器 API 和底层技术细节。

目标：使用 Vue 3 + TypeScript，开发同时支持 Chrome 和 Edge 的浏览器插件。可使用 Codex、Cursor、Claude Code 等 AI 编程工具协助开发。

## 1. 浏览器插件开发框架对比

建议先了解三个主流方案，再确定一个作为项目底座。不要把多个框架混装在同一个项目中。

| 项目 | 定位与特点 | 适合场景 | 建议 |
|---|---|---|---|
| [WXT](https://github.com/wxt-dev/wxt) | 现代浏览器扩展框架，支持 Vue、React、TypeScript 和 Manifest V3 | Vue 3、React、多入口扩展项目 | **本教程首选** |
| [Plasmo](https://github.com/PlasmoHQ/plasmo) | 浏览器扩展开发框架，React 生态和开发体验较突出 | React 技术栈项目 | 值得对比，Vue 不是首选方向 |
| [CRXJS](https://github.com/crxjs/chrome-extension-tools) | 将浏览器扩展开发能力集成到 Vite | 希望直接使用 Vite 和自定义工程结构的项目 | Vue + Vite 项目可评估 |

### 如何选择

- **Vue 3 + TypeScript：优先 WXT。** 扩展开发约定比较完整，适合作为长期维护的通用底座。
- **React：可以重点比较 Plasmo 与 WXT。** 根据当前维护状态、文档和依赖兼容性决定。
- **已有 Vite 项目：可以评估 CRXJS。** 适合希望沿用 Vite 工程组织方式的团队。

建议让 AI 在正式开发前检查三个项目的最新版本、维护状态、Vue 支持情况和构建方式，再给出选型结论。不要只凭项目介绍或旧教程判断。

## 2. 值得让 AI 阅读的开源项目

这些项目不一定作为工程底座，而是为 AI 提供成熟的功能实现参考。

### 框架与模板

| 项目 | 用途 |
|---|---|
| [WXT](https://github.com/wxt-dev/wxt) | 主框架与官方开发规范 |
| [WXT Examples](https://github.com/wxt-dev/examples) | 官方功能示例，优先查找可复用实现 |
| [CRXJS](https://github.com/crxjs/chrome-extension-tools) | Vite 扩展开发方案对比 |
| [Plasmo](https://github.com/PlasmoHQ/plasmo) | React 扩展框架方案对比 |
| [webext-core](https://github.com/aklinker1/webext-core) | 扩展消息通信等工具库 |

### 成熟插件：按功能借鉴

| 项目 | 借鉴方向 |
|---|---|
| [Automa](https://github.com/AutomaApp/automa) | 可视化网页自动化、工作流设计 |
| [Dark Reader](https://github.com/darkreader/darkreader) | 网页样式增强、站点适配 |
| [Refined GitHub](https://github.com/refined-github/refined-github) | 网页注入、网站功能增强 |
| [沉浸式翻译](https://github.com/immersive-translate/immersive-translate) | 网页翻译、阅读辅助等产品功能参考 |

AI 编程时，应让 AI 只阅读与当前任务相关的源码，不要把所有项目都复制进工程，也不要为了参考某个项目而引入整套依赖。

## 3. 推荐的 AI 开发流程

1. **先做项目调研**：让 AI 对比 WXT、Plasmo、CRXJS，检查项目维护状态和技术适配。
2. **确定唯一主框架**：本方案默认选择 WXT + Vue 3 + TypeScript。
3. **先搭建最小工程**：确保 Chrome、Edge 都能加载运行。
4. **按功能逐项开发**：一次完成一个明确需求，测试通过后再继续。
5. **优先参考成熟源码**：遇到自动化、翻译、网页增强等功能，先让 AI 查找相近实现。
6. **让 AI 检查结果**：执行构建、类型检查，说明需要人工验证的浏览器行为。

不要只对 AI 说“帮我开发一个浏览器插件”。应提供使用场景、交互方式、适用网站和验收标准。

## 4. 项目开发提示词

下面的提示词可以直接交给 Codex、Cursor 或 Claude Code。建议在项目目录中使用。

### 提示词一：调研并选择开发框架

```text
我准备使用 AI 编程开发 Chrome 和 Edge 浏览器插件，技术栈倾向 Vue 3 + TypeScript。

请调研并比较以下开源项目：
1. WXT：https://github.com/wxt-dev/wxt
2. Plasmo：https://github.com/PlasmoHQ/plasmo
3. CRXJS：https://github.com/crxjs/chrome-extension-tools

重点对比：
- 项目近期维护情况、版本活跃度和社区情况。
- Vue 3 + TypeScript 的支持程度和实际使用方式。
- Chrome、Edge 兼容情况。
- 开发体验、项目结构、构建和调试体验。
- 文档质量、示例完整度和 AI 编程时的可参考程度。
- 已知限制、迁移成本和长期维护风险。

请以官方文档和仓库现状为依据，不要根据过时文章下结论。
最后给出推荐顺序和选择理由。
当前阶段只做调研，不要创建或修改项目。
```

### 提示词二：创建通用插件项目

```text
你是一名有经验的浏览器扩展工程师，请协助我使用 AI 编程创建一个可长期扩展的浏览器插件项目。

【项目目标】
开发 Chrome 和 Microsoft Edge 通用浏览器插件。
后续用于开发网页增强、效率工具、AI 助手和浏览器自动化等功能。

【技术方向】
- Vue 3 + TypeScript
- 优先评估并采用 WXT
- Manifest V3
- pnpm

【参考项目】
- WXT：https://github.com/wxt-dev/wxt
- WXT Examples：https://github.com/wxt-dev/examples
- Plasmo：https://github.com/PlasmoHQ/plasmo
- CRXJS：https://github.com/crxjs/chrome-extension-tools
- webext-core：https://github.com/aklinker1/webext-core

【开发要求】
1. 先检查当前目录和已有文件，不要覆盖无关内容。
2. 阅读所选框架的官方文档和示例，使用当前版本支持的方式。
3. 先输出实施计划、项目结构和依赖清单，确认后再开始开发。
4. 项目结构清晰，功能模块可独立扩展，避免过度设计。
5. 优先复用成熟项目和官方示例，不要凭空重复造轮子。
6. 权限按实际功能最小化申请。
7. 确保 Chrome 和 Edge 都能构建和运行。
8. 每完成一个阶段就执行构建和检查，不要一次性生成全部功能。

【实施步骤】
第一步：创建最小可运行工程。
第二步：完成插件基础界面和公共能力。
第三步：开发一个示例功能，验证整体流程。
第四步：分别在 Chrome 和 Edge 中测试。
第五步：完善 README、运行说明和后续扩展规范。

【交付要求】
- 项目能够安装依赖并正常启动。
- 能分别构建 Chrome 和 Edge 版本。
- 构建和 TypeScript 检查通过。
- README 说明如何启动、构建和加载插件。
- 汇报完成内容、未完成事项和需要人工验证的内容。

现在先调研和规划，不要直接大规模写代码。
```

### 提示词三：开发单个插件功能

```text
请在当前浏览器插件项目中增加功能：[填写功能名称]。

需求说明：
- 使用场景：[用户在什么情况下使用]
- 操作方式：[点击、右键菜单、自动触发等]
- 交互效果：[期望看到什么]
- 适用范围：[所有网页或指定网站]
- 数据要求：[是否保存、保存哪些内容]

开发要求：
1. 先阅读现有项目和相关模块，沿用已有规范。
2. 优先查找官方示例或成熟开源项目中的类似实现。
3. 不要随意重构无关模块，不要重复造已有功能。
4. 注意权限最小化和 Chrome、Edge 兼容性。
5. 完成后执行构建和类型检查，修复发现的问题。
6. 汇报修改文件、实现方式、测试结果和需要我手动验证的内容。

先给出简短实施计划，再开始修改。
```

## 5. 推荐的实际落地顺序

| 顺序 | 工作内容 | 目标 |
|---|---|---|
| 1 | 对比 WXT、Plasmo、CRXJS | 确定框架 |
| 2 | 创建 Vue 3 插件工程 | Chrome、Edge 均可运行 |
| 3 | 做一个简单网页增强功能 | 验证从界面到网页交互的完整流程 |
| 4 | 根据需求增加 AI 或自动化能力 | 形成实际产品功能 |
| 5 | 完善测试、打包和发布 | 可持续维护和分发 |

## 6. 官方资料

- [WXT 文档](https://wxt.dev/)
- [WXT GitHub](https://github.com/wxt-dev/wxt)
- [Plasmo 文档](https://docs.plasmo.com/)
- [Plasmo GitHub](https://github.com/PlasmoHQ/plasmo)
- [CRXJS 文档](https://crxjs.dev/)
- [CRXJS GitHub](https://github.com/crxjs/chrome-extension-tools)
- [Chrome Extensions 文档](https://developer.chrome.com/docs/extensions)
- [Edge 扩展开发文档](https://learn.microsoft.com/microsoft-edge/extensions-chromium/)

**核心思路：先选成熟框架，再让 AI 阅读成熟插件源码，最后通过清晰的提示词分阶段实现功能。** 对 Vue 3 项目，优先从 WXT 开始；Plasmo 和 CRXJS 保留为对比选项。