---
title: 豆包 AI 绘图闭环小练习
weight: 60
bookToc: false
noTocArea: true
bookCollapseSection: false
bookFlatSection: true
---

## 豆包 AI 绘图闭环小练习

目标：**从 0 到拿到一张「无水印」AI 图**，按「生成提示词 → 出图 → 无水印下载」走一遍流程。本文以豆包为主线；跑通后若要体验中文排版更强、分辨率更高的 **GPT-Image-2**，可看进阶篇 **[GPT-Image2.0]({{< relref "project-practice/gpt-image" >}})**（可用站点、提示词库与费用对比已汇总）。

会用到这些工具：

- **提示词生成器 / 提示词库**：[ai.codefather.cn/painting](https://ai.codefather.cn/painting) 或 [Banana Prompt Quicker](https://glidea.github.io/banana-prompt-quicker) 或 [Promptoy 模板库](https://promptoy.com/app/templates)；按模型浏览成品提示词时可看 [YouMind 图像提示词库](https://youmind.com/zh-CN/prompts/image)（覆盖 GPT Image、Nano Banana Pro、Seedream 等，支持站内 AI 搜索与排序）；专用于 GPT-Image-2 的库见 [awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2) 与 [YouMind GPT-Image-2 提示词](https://youmind.com/zh-CN/gpt-image-2-prompts)
- **绘图平台**：豆包 AI（[doubao.com/chat/create-image](https://www.doubao.com/chat/create-image)）；进阶可选 GPT-Image-2（站点与费用见 [GPT-Image2.0]({{< relref "project-practice/gpt-image" >}})）
- **无水印下载脚本/扩展**：豆包下载器脚本/扩展

---

## 一、豆包 AI 无水印下载脚本

把豆包生成的图片，**一键下载成无水印原图**。

油猴脚本下载地址：  [doubao-downloader.user.js](https://gh.h233.eu.org/https://github.com/LauZzL/doubao-downloader/releases/download/v1.2.6/doubao-downloader.user.js)

### 1. 油猴脚本用法（推荐）

前提：浏览器已装 Tampermonkey / Violentmonkey 等油猴扩展。

1. 打开上面的脚本链接，油猴会自动弹出安装页。
2. 点击确认安装。
3. 在扩展管理里确认：油猴启用，且允许脚本在豆包站点运行。

装完之后，访问豆包绘图页：[doubao.com/chat/create-image](https://www.doubao.com/chat/create-image)。

### 2. 浏览器扩展用法（可选）

不想用油猴时，可以装打包好的扩展：

1. 从项目页下载 `.zip` 包。
2. 打开浏览器扩展管理，开启「开发者模式」。
3. 选择「加载已解压的扩展程序」，指向解压目录，或按项目文档说明安装。

`.crx` 在部分浏览器里装起来有限制，也可能异常，不推荐优先选择。

---

## 二、用 AI 生成绘画提示词

1. 打开提示词工具之一：
   - [ai.codefather.cn/painting](https://ai.codefather.cn/painting)
   - [YouMind 图像提示词库](https://youmind.com/zh-CN/prompts/image)：按模型（如 GPT Image 2、Nano Banana Pro、Seedream 4.5 等）浏览精选英文提示词，可配合站内 AI 搜索按关键词、时间、互动量筛选；把合适条目改写或翻译后也可用于豆包
   - [Promptoy（提示词模板库）](https://promptoy.com/app/templates)
   - [nano-kit](https://github.com/liujuntao123/nano-kit)
   - [gemini-3-pro-image-preview](https://tansuo2021.github.io/gemini-3-pro-image-preview/)
   - [slides（多风格 Slides/PPT 提示词库）](https://github.com/AAAAAAAJ/slides)
   - [Banana Prompt Quicker](https://glidea.github.io/banana-prompt-quicker/)
   - [baoyu-skills（GitHub 仓库）](https://github.com/JimLiu/baoyu-skills) ，或通过 [skills.sh 市场页面](https://skills.sh/jimliu/baoyu-skills) 安装相关技能
   - [Gemini 提示词示例 001–050](https://docs.2sj.ai/gemini/prompt/001-050)
2. 选一个接近目标风格的模板（插画、二次元、写实等）。
3. 填写画面描述：主体、场景、构图、光影、风格等关键信息。
4. 按需调整尺寸、细节等参数。
5. 点击「生成提示词」，复制生成的中英文提示词。

---

## 三、在豆包中出图并用脚本下载

1. 打开豆包绘图页面：[doubao.com/chat/create-image](https://www.doubao.com/chat/create-image)
2. 将上一步生成的提示词粘贴到输入框中，选择合适的模型与尺寸，点击生成。
3. 等待图片生成完成后，使用前面安装好的下载脚本/扩展，一键下载原图（无水印版本）。

到这里，「生成 → 出图 → 无水印下载」的闭环就跑通了。

---

## 四、可选：体验 Nano Banana 2（Gemini 绘图）

想顺便体验另一种图像模型时，可以试试 Google Gemini 里的 **Nano Banana 2**：

1. 打开 Gemini 网页版：[gemini.google.com/app](https://gemini.google.com/app)
2. 需先开通 Gemini Pro（如通过 [goofish.com/search?q=Gemini](https://www.goofish.com/search?q=Gemini) 等渠道购买账号或额度，请自行评估风险）。
3. 把提示词工具生成的英文提示词粘贴到 Gemini，对话中选择图像生成功能，获取另一组风格的图片。

如果想自己搭建 Banana Pro / Gemini 类绘图 API，可参考开源项目 [flow2api](https://github.com/TheSmallHanCat/flow2api)。

可以简单对比豆包和 Gemini 的出图风格/质量，为后续选型和调参提供直观参考。

---

## 五、可选：体验 GPT-Image-2（中文排版 / 4K 出图）

需要**海报、长图文、带中文排版的插画**时，豆包和 Gemini 往往不如 **GPT-Image-2** 稳。该模型在中文文字渲染（99%+ 准确率）、4096×4096 分辨率、角色一致性等方面有明显优势，适合把第二节生成的提示词直接用于「可交付」视觉稿。


---

## 六、实战案例参考

- 实战案例（豆包）：[白板手绘风格的前端开发流程](https://www.doubao.com/thread/w9e5eb8e975fb1fdb) , [吉伊卡哇风格科普插画](https://www.doubao.com/thread/wff08465288bcc53d)
- 实战案例（Gemini）：[Nano Banana 2 吉伊卡哇风格科普插画](https://gemini.google.com/share/7f284e2b5718)
- 实战案例（GPT-Image-2）：见 [GPT-Image2.0]({{< relref "project-practice/gpt-image" >}}) 中的「实际案例教程」
