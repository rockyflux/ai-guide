---
aside: false
---

# AI 视频工具


## AI 视频工具：对比与选型

主流 AI 文生视频 / 图生视频产品速览。下表覆盖国内常用创作台与国际高质量模型入口，具体时长、分辨率与计费以各产品官网为准。

## 速览对比表

| 产品 | 厂商 | 核心定位 | 链接 |
| --- | --- | --- | --- |
| 可灵 AI | 快手 | 文 / 图生视频、动作稳定、数字人与特效 | [klingai.com](https://klingai.com) |
| 即梦 AI | 字节 | 中文理解强、口型匹配、短视频与分镜 | [jimeng.jianying.com](https://jimeng.jianying.com) |
| 海螺 AI | MiniMax | 文 / 图生视频、国产高性价比 | [hailuoai.com](https://hailuoai.com) |
| 通义万相 | 阿里 | 图生视频、与万相生图同一生态 | [万相视频创作](https://tongyi.aliyun.com/wanxiang/videoCreation) |
| Vidu | 生数科技 | 长时长、高一致性、参考视频生成 | [vidu.com](https://www.vidu.com/zh) |
| 智谱清影 | 智谱 | 快速生成短片、支持 API 调用 | [chatglm.cn/video](https://chatglm.cn/video) |
| Sora | OpenAI | 电影感叙事、物理与镜头运动 | [sora.com](https://sora.com) |
| Runway | Runway | Gen-4 视频生成、专业剪辑工作流 | [runway.com](https://runway.com) |
| Google Veo | Google | 高写实视频、DeepMind 视频模型 | [labs.google/veo](https://labs.google/veo) |
| Pika | Pika | 轻量创意、特效与风格化短片 | [pika.art](https://pika.art) |
| 腾讯智影 | 腾讯 | 数字人播报、模板化短视频剪辑 | [zenvideo.qq.com](https://zenvideo.qq.com) |
| 闪剪 | 闪剪 | 数字人口播、图文转视频 | [shanjian.tv](https://shanjian.tv) |

## 开源项目

本地部署、自动化流水线与 Agent 制片方案，与上文 SaaS 文生视频产品互补。站内相关条目见 [Skills · 视频制作](/agent/skills.html)、[Cursor 实践 · Skills](/practice/cursor.html)。

| 项目 | 核心定位 | 链接 |
| --- | --- | --- |
| MoneyPrinterTurbo | 主题 / 关键词一键生成高清短视频（脚本、素材、字幕、配乐、成片） | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) |
| OpenMontage | Agent 全流程视频制片（pipeline + 700+ 技能 / 知识文件） | [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) |
| jacky-motion | 口播稿 + SRT → 可录屏的 16:9 自动播放 HTML | [Jackywxsz/jacky-motion](https://github.com/Jackywxsz/jacky-motion) |
| remotion-video-toolkit | Agent Skill：生成 16:9 MP4 教程视频 | [shreefentsar/remotion-video-toolkit](https://github.com/shreefentsar/remotion-video-toolkit) |
| remotion-dev/skills | Remotion 官方 Skills：用代码创作视频内容 | [remotion-dev/skills](https://github.com/remotion-dev/skills) |

## 选型建议

1. **国内日常创作**：可灵、即梦、海螺 — 中文提示与短视频场景覆盖广，上手成本低。
2. **图生视频 / 一致性**：Vidu、通义万相 — 适合产品展示、分镜延续与参考图驱动。
3. **国际高质量 / 电影感**：Sora、Runway、Veo — 镜头语言与物理表现更强，通常需订阅或 API。
4. **数字人 / 口播**：腾讯智影、闪剪 — 模板化口播与营销短视频，不等同于生成式文生视频。
5. **开源自建 / 自动化**：MoneyPrinterTurbo（一键短视频流水线）、OpenMontage（Agent 制片）；讲解动画可看 jacky-motion / Remotion Skills。
