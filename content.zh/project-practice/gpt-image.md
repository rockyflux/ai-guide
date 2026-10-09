---
title: GPT-Image-2
date: 2026-05-13
weight: 85
bookToc: true
bookHidden: false
---

## GPT-Image-2

> 2026 年 4 月 22 日，OpenAI 祭出一枚深水炸弹——ChatGPT Images 2.0（代號 gpt-image-2）正式上线，现在又进化了。这不仅是 DALL-E 3 的继任者，更是一次从根上重做的架构革命。一个“长了脑子”的图像模型，意味着设计师可以告别“AI 产物一看就是假货”的尴尬，也让开发者们迎来了视觉生产力全面爆发的拐点。

## GPT-Image-2.5（2026-09-08）

[ChatGPT Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5/) 已推送至 ChatGPT / Work / Codex；相对 Images 2，细节更锐、编辑更稳，延迟最高约降 50%。API 提供两档：`Flare`（更快）与 `Sunburst`（更高质量）。

## 为什么 GPT-Image-2 很强

| 老大难问题 | 传统 AI 出图 | GPT-Image-2 |
| --- | --- | --- |
| 中文文字渲染 | 字迹扭曲、缺笔画、排版错位 | 99%+ 准确率，几百字的长图稳如老狗 |
| 分辨率上限 | 2048×2048 勉强能看 | **4096×4096**<br>，直接上打印级输出 |
| 逻辑一致性 | 分镜主角脸会变，跨页排版对不齐 | 内置推理层，“边检查边画” |
| 生成速度 | 两阶段推理，等得心累 | **单步推理，速度约 2 倍飙升** |

## GPT-Image-2 与其他模型对比

| 对比维度 | GPT-Image-2 (OpenAI) | Imagen 3 (Google) | Midjourney V8.1 | Stable Diffusion 4 Ultra |
| --- | --- | --- | --- | --- |
| 核心架构 | 自回归 + 视觉推理层 | 扩散 Transformer | 扩散 + Run as HD | 扩散 Transformer (DiT) |
| 中文排版 | ★★★★★ (99%+) | ★★★ | ★★☆（文字仍偏弱） | ★★★☆ |
| 最高分辨率 | 4096×4096 | 1024×1024（8倍超分） | 原生 2K | 4096×4096 |
| API 支持 | ✅ ChatGPT + 官方 API | ✅ Vertex AI / Gemini API | ❌（Discord 独占） | ✅ 开放权重可自部署 |
| 角色一致性 | 原生支持角色锁定 | 有限 | 需靠情绪板绕路 | 有限 |
| LMSYS 盲测排行 | **领先 24 Elo** | 基准 | — | — |
| 每月费用起点 | 推荐国内镜像站 | Gemini API 按量计费 | 10<br>120 | 社区版免费 / 企业版商用 |

## 提示词库

- [awesome-gpt-image-2-API-and-Prompts（EvoLinkAI）](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts)：GPT-Image-2 API 说明与海量提示词案例（含多语言 README）
- [Banana Prompt Quicker](https://github.com/glidea/banana-prompt-quicker)：Chrome 扩展 + 在线画廊，一键插入 Gemini / AI Studio 等场景的提示词
- [无限画布 · 提示词](https://canvas.best/prompts)：canvas.best 内置提示词库
- [水仙的 AI 提示词花园](https://prompt.qqsrc.com/)：精选提示词，按主题分类逛画廊
- <https://github.com/YouMind-OpenLab/awesome-gpt-image-2>
- <https://youmind.com/zh-CN/gpt-image-2-prompts>

## 实际案例教程

- 微信教程 1：<https://mp.weixin.qq.com/s/0YAkCj8Yohw9cHGyfTH08Q>
- 微信教程 2：<https://mp.weixin.qq.com/s/vdWVO6QyWJM4G_fEh7ZhdA>
- 微信教程 3：<https://mp.weixin.qq.com/s/sqRcFTtuCdwvc5JrpGTEPA>

## 文章配图 Skills：baoyu-article-illustrator

给长文自动找插图位置、统一视觉语言出图，用 [baoyu-article-illustrator](https://github.com/JimLiu/baoyu-skills#baoyu-article-illustrator)（[JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills)）。核心是 **Type × Style × Palette** 三维组合，可自由拼，也可走预设，[README.zh.md](https://github.com/JimLiu/baoyu-skills/blob/main/README.zh.md)。

```bash
npx skills add https://github.com/jimliu/baoyu-skills --skill baoyu-article-illustrator
```

## 开源工具与画布

| 项目 | 链接 | 说明 |
| --- | --- | --- |
| 无限画布（infinite-canvas） | [GitHub](https://github.com/basketikun/infinite-canvas) · [canvas.best](https://canvas.best/) | 开源无限画布工作台：生图、参考图编辑、视频、Agent、画布编排、提示词库与素材管理；兼容 OpenAI 接口生态 |
| GPT Image Playground | [GitHub](https://github.com/CookSleep/gpt_image_playground) · [在线体验](https://gpt-image-playground.cooksleep.dev) | 基于 OpenAI gpt-image-2.5 API 的图片生成与编辑工具（React / Vite） |

## 中转站和价格

按 image2 大致单价从低到高排列（免费站靠前；价格以各站公示为准，可能变动）。

| 中转站 | 链接 | image2 价格 / 说明 |
| --- | --- | --- |
| oaichat image | <https://image.oaichat.cc/> | 免费，每天 30 张左右 |
| arena.ai | <https://arena.ai/> | 免费；选 `Direct`、`gpt-image-2` |
| ChatGPT 官网 | ChatGPT | 免费约每天 4–5 张；注册需科学上网 |
| kuaipao | <https://kuaipao.ai/pricing> | 低至 **0.05 元 / 次** |
| foxcode | <https://foxcode.rjj.cc/model-square> | `gpt-image-2` 约 0.05–0.07 元 / 张 |
| rolldek | <https://api-cn.rolldek.com/> | gpt-image-2 低至 **0.05 元 / 张**（见下表） |
| hezubus | <https://hezubus.cc/p/pricing> | 低至 **0.06 元 / 次** |
| axis.yoga | <https://axis.yoga/> | 低至 **0.08 元 / 次** |
| jiaotuai | <https://www.jiaotuai.cn/> | 选 `Image2 Pro`，约 0.1–0.2 元 / 张 |
| toapis | <https://toapis.com/pricing> | 整体调用低至约 0.1 元 / 次（含多模型） |
| aixj | <https://aixj.vip/> | 低至 **0.1 元 / 次** |
| pucoding | <https://draw.pucoding.com/> | 约 0.125 元 / 张 |

### rolldek 分模型计价

| 模型 | 参数 | 价格 |
| --- | --- | --- |
| gpt-image-2 | 1-4k，low、medium 质量 | 0.05¥ / 张 |
| gpt-image-2-high | 1-4k，high 质量 | 0.08¥ / 张 |
| gpt-image-2-official | 官渠满血全参透明底 | 0.15¥ / 张 |
| gemini-3.1-flash-image-preview | 1-4k | 0.06¥ / 张 |
| gemini-3-pro-image-preview | 1-4k | 0.07¥ / 张 |
