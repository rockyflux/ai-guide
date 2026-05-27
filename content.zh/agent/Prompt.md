---
title: Prompt
weight: 7
date: 2026-02-09T23:34:00+08:00
bookToc: false
noTocArea: true
---

## 一、通过烹饪类比快速掌握五大概念

### 一句话理解

你点菜（Prompt）→ 按菜谱做（Skills）→ 开冰箱取料（MCP）→ 查食材说明（Knowledge）→ 遵守厨房规矩（Rules）→ 上菜（成品）

### 概念速查表

| 概念 | 做饭场景 | 写代码场景 | 一句话解释 |
| --- | --- | --- | --- |
| Prompt | 今晚吃红烧肉 | 帮我做个列表页 | 你说的那句话 |
| Skills | 焯水→煸炒→焖煮 | hooks→组件→检查 | 执行指南 |
| MCP | 冰箱、调料柜、厨具架 | 数据库/代码库 | 连接外部资源的通道 |
| Knowledge | 五花肉切2cm | ProTable API | 参考资料 |
| Rules | 少油少盐 | 先hooks后组件 | 必须遵守的规范 |

## 二、概念详解

### 1. Prompt（用户提示词）

### 定义

您输入给 AI 的提示词，是整个交互的起点。

Prompt 通常只描述**本次对话**要达成的目标与约束，不适合承载长期稳定的项目背景或流程规范。

### 写好 Prompt 的技巧

| 类型 | 示例 |
| --- | --- |
| ❌ 模糊 | "做一个列表页" |
| ✅ 清晰 | "基于 @types/employee.ts，使用 ProTable 组件，做一个员工管理列表页，支持增删改查" |

### Prompt 优化要点

- 明确任务类型（列表页/表单页/详情页）
- 指定使用的组件库
- 附带相关文件上下文（@file）
- 描述具体功能需求

## 三、相关链接

以下是学习和使用 Prompt 的相关资源链接：

| 描述 | 链接 |
| --- | --- |
| Prompts.chat - 新建提示词 | [https://prompts.chat/prompts/new](https://prompts.chat/prompts/new) |
| AI Gist - 本地提示词管理工具软件 | [https://getaigist.com/](https://getaigist.com/) |
| 提示词优化器（评估与优化） | [https://n8n.keyi.ma/webhook/better-prompt](https://n8n.keyi.ma/webhook/better-prompt) |
| GPTS 提示词集合 | [https://github.com/B3o/GPTS-Prompt-Collection](https://github.com/B3o/GPTS-Prompt-Collection) |
| 精选提示词库 | [https://prmbr.com/](https://prmbr.com/) |
| LangGPT - 提示词专家框架 | [https://github.com/langgptai/LangGPT](https://github.com/langgptai/LangGPT) |
| Awesome ChatGPT Prompts 中文版 | [https://github.com/PlexPt/awesome-chatgpt-prompts-zh/](https://github.com/PlexPt/awesome-chatgpt-prompts-zh/) |
| ChatGPT 引导语 | [https://prompts.fresns.cn/](https://prompts.fresns.cn/) |
| AI 绘图提示词模板大全 | [https://ai.codefather.cn/painting](https://ai.codefather.cn/painting) |
| YouMind（大规模免费提示词库：图像 / 视频 / 网页，按模型与媒介分类，支持站内 AI 搜索与排序） | [https://youmind.com/zh-CN/prompts](https://youmind.com/zh-CN/prompts) |
| AI 工具系统提示词与模型清单（英文原仓库） | [https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) |
| AI 工具系统提示词与模型清单（中文整理版） | [https://github.com/IsHexx/system-prompts-and-models-of-ai-tools-chinese](https://github.com/IsHexx/system-prompts-and-models-of-ai-tools-chinese) |

### UI Prompt 灵感库（复制即用）

| 描述 | 链接 |
| --- | --- |
| UI Prompt Explorer：生成UI主题与提示词 | [https://uiprompt.art/](https://uiprompt.art/) |
| UI Style Prompt：70+现代UI风格，输出AI提示词 | [https://www.uiprompt.site/zh/home](https://www.uiprompt.site/zh/home) |
| HuggingPT：UI 风格提示词（230+） | [https://huggingpt.com/ui-prompts](https://huggingpt.com/ui-prompts) |
| Design Prompts：31+设计风格渲染与AI可用提示词 | [https://www.designprompts.dev/](https://www.designprompts.dev/) |
| StyleKit：120+视觉样式 + 设计令牌/组件配方 + AI提示词 | [https://www.stylekit.top/zh](https://www.stylekit.top/zh) |
| MotionSites：Hero动效/灵感提示词集合 | [https://motionsites.ai/](https://motionsites.ai/) |
| Lexica：UI风格搜索结果（用于找参考） | [https://lexica.art/?q=UI](https://lexica.art/?q=UI) |
| Aura：AI着陆页生成器，可导出HTML与Figma | [https://www.aura.build/](https://www.aura.build/) |
| UI UX Pro Max Skill：57种UI风格/配色与UX指南（面向AI助手） | [https://ui-ux-pro-max-skill.com/#styles](https://ui-ux-pro-max-skill.com/#styles) / [https://github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| UI Inspiration（Notion）：UI灵感集合/工作区 | [https://uxchi.notion.site/UI-Inspiration-881b4c0179a74935a3f607ad3521cdb5](https://uxchi.notion.site/UI-Inspiration-881b4c0179a74935a3f607ad3521cdb5) |
