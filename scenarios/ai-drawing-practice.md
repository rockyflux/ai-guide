# 豆包 AI 绘图

目标：从 0 跑通 **「生成提示词 → 出图 → 无水印下载」**，拿到一张可用的 AI 图。

两条出图路径任选：

1. **豆包工作模式 + Skills**（推荐）：进 [豆包工作](https://www.doubao.com/work)，选「创意设计」或自装 baoyu 等技能出图，适合成套物料、封面、信息图。
2. **豆包绘图页**：打开 [create-image](https://www.doubao.com/chat/create-image)，粘贴提示词直接生成，适合单张试图。

跑通后若要体验中文排版更强、分辨率更高的 GPT-Image-2，见进阶篇 [GPT-Image-2](/scenarios/gpt-image.html)。

---

## 会用到的工具

| 用途 | 推荐 |
| --- | --- |
| 提示词生成 / 模板库 | [ai.codefather.cn/painting](https://ai.codefather.cn/painting)、[Banana Prompt Quicker](https://glidea.github.io/banana-prompt-quicker)、[Promptoy](https://promptoy.com/app/templates) |
| 按模型逛成品提示词 | [YouMind 图像提示词库](https://youmind.com/zh-CN/prompts/image)（GPT Image、Nano Banana Pro、Seedream 等） |
| GPT-Image-2 专用库 | [awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2)、[YouMind GPT-Image-2 提示词](https://youmind.com/zh-CN/gpt-image-2-prompts) |
| 工作模式出图 | [豆包工作](https://www.doubao.com/work)（工作任务模式 + Skills / 画布） |
| 绘图 Skills | 内置「创意设计」；第三方 [baoyu-skills](https://github.com/JimLiu/baoyu-skills)（封面 / 配图 / 信息图等） |
| 绘图页（直出） | [豆包 AI 绘图](https://www.doubao.com/chat/create-image)；进阶见 [GPT-Image-2](/scenarios/gpt-image.html) |
| 无水印下载 | [无印豆包](https://github.com/ihmily/doubao-nomark)（推荐）；备选 [豆包下载器](https://github.com/LauZzL/doubao-downloader) |

---

## 一、先装无水印下载

豆包页面自带水印。装好下载工具后，生成的图（及视频）可一键存成无水印原图。

### 1. 无印豆包（推荐）

仓库：[ihmily/doubao-nomark](https://github.com/ihmily/doubao-nomark)

任选一种安装方式：

- **油猴脚本**：在 [Greasy Fork](https://greasyfork.org/) 搜「无印豆包」，或按仓库 README 安装
- **Edge 扩展**：[微软 Edge 商店 · 无印豆包](https://microsoftedge.microsoft.com/addons/detail/hjlplfcnpgglfdjafekcgahffdengaij)
- **本地 API**：`uvicorn app:app --host 0.0.0.0 --port 8000`，文档页 `http://localhost:8000/docs`

装好后，在豆包对话页会自动识别图片/视频；也可从分享链接提取无水印资源。

### 2. 豆包下载器（备选）

油猴脚本直链：[doubao-downloader.user.js](https://gh.h233.eu.org/https://github.com/LauZzL/doubao-downloader/releases/download/v1.2.6/doubao-downloader.user.js)

前提：浏览器已装 Tampermonkey / Violentmonkey 等油猴扩展。

1. 打开上面的脚本链接，油猴弹出安装页后确认安装。
2. 在扩展管理里确认：油猴已启用，且允许脚本在豆包站点运行。
3. 打开 [豆包绘图页](https://www.doubao.com/chat/create-image) 验证是否生效。

不想用油猴时，可从 [豆包下载器仓库](https://github.com/LauZzL/doubao-downloader) 下载 `.zip`，在扩展管理中开启「开发者模式」后加载已解压目录。`.crx` 在部分浏览器里装不稳，不建议优先用。

---

## 二、用 AI 生成绘画提示词

### 提示词工具（任选）

- [ai.codefather.cn/painting](https://ai.codefather.cn/painting)
- [YouMind 图像提示词库](https://youmind.com/zh-CN/prompts/image)：按模型浏览精选英文提示词，可按关键词、时间、互动量筛选；改写或翻译后也可用于豆包
- [Promptoy 模板库](https://promptoy.com/app/templates)
- [Banana Prompt Quicker](https://glidea.github.io/banana-prompt-quicker/)
- [nano-kit](https://github.com/liujuntao123/nano-kit)
- [gemini-3-pro-image-preview](https://tansuo2021.github.io/gemini-3-pro-image-preview/)
- [slides（多风格 Slides/PPT 提示词）](https://github.com/AAAAAAAJ/slides)
- [baoyu-skills](https://github.com/JimLiu/baoyu-skills)（也可从 [skills.sh](https://skills.sh/jimliu/baoyu-skills) 安装）
- [Gemini 提示词示例 001–050](https://docs.2sj.ai/gemini/prompt/001-050)

### 操作步骤

1. 打开上面任一工具。
2. 选一个接近目标风格的模板（插画、二次元、写实等）。
3. 填写画面描述：主体、场景、构图、光影、风格等。
4. 按需调整尺寸、细节等参数。
5. 生成后，复制中英文提示词备用。

> 若走下一节「工作模式 + Skills」，提示词可由技能自己展开；本节仍适合你想先写好 prompt、再贴进绘图页的情况。

---

## 三、用豆包工作模式 + Skills 画图

工作任务模式面向多步骤 Agent：会拆任务、调技能、开画布，比普通对话更适合成套出图。官方说明：[使用工作任务模式](https://www.doubao.com/work/docs/zh-cn/articles/047323472965-work-task-mode)、[在豆包工作中使用技能](https://www.doubao.com/work/docs/zh-cn/articles/081010973544-skills)。

### 1. 进入工作任务模式

1. 打开 [豆包工作](https://www.doubao.com/work)（客户端 / 网页 / 飞书里的工作任务均可，能力以实际界面为准）。
2. 点击 **新工作任务**。
3. 按需指定运行环境：**本地电脑**（可调本机技能与文件）或 **云电脑**（云端沙箱；本地与云端已装技能**不互通**）。
4. 选择模型与推理强度（不确定就选「自动」）。

### 2. 选择 / 安装 Skills

在输入框里用下面任一方式指定技能：

- 输入 `/` 或 `@`，按关键词搜索（支持拼音简拼）
- 点击输入框下方的 **更多技能**，在列表里点选
- 直接描述需求，让系统自动匹配技能

**内置（开箱即用）**

| 技能 | 适合做什么 |
| --- | --- |
| **创意设计** | 海报、主视觉、成套物料；选中后提交任务会自动进入创作画布，可对比方案、局部改图 |
| **创意视频** | 产品演示、短片等视频素材（需上传参考图时一并附上） |

也可从左侧 **插件 · 技能 · 伙伴 → 技能** 浏览官方推荐技能并点「安装」；未安装也能在任务里临时调用，安装后会记住常用参数。

**第三方：baoyu-skills（上传自定义技能）**

仓库：[JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills)（[中文 README](https://github.com/JimLiu/baoyu-skills/blob/main/README.zh.md)）

常用绘图相关技能：

| 技能 | 用途 |
| --- | --- |
| `baoyu-cover-image` | 文章 / 视频封面 |
| `baoyu-article-illustrator` | 长文自动找插图位、统一视觉语言出图 |
| `baoyu-infographic` | 信息图（流程、对比、金字塔等布局） |
| `baoyu-xhs-images` | 小红书图文卡片 |
| `baoyu-image-gen` | 通用生图（可接 Seedream 等） |

安装到豆包工作：

1. 左侧进入 **技能** 页 → 右上角 **+ 添加** → **上传技能**。
2. 上传含 `SKILL.md`（或 `skill.md`）的技能文件夹；YAML 里要有名称与描述。
3. 上传后，在新工作任务里用 `/` 搜技能名调用，例如 `/baoyu-cover-image`。

也可在 Claude Code / Codex 等环境用命令安装后再按需同步到豆包：

```bash
npx skills add https://github.com/jimliu/baoyu-skills --skill baoyu-cover-image
npx skills add https://github.com/jimliu/baoyu-skills --skill baoyu-article-illustrator
```

### 3. 发起画图任务

**路径 A：内置「创意设计」**

1. `/` 或「更多技能」选中 **创意设计**。
2. 写清交付物、尺寸、受众、必须保留的信息（品牌字、价格、日期等）；可 `@` 附参考图。
3. 发送后进入画布：对比方案 → 引用已有图继续生成 → 框选局部修改。
4. 需要成套物料时，在同一画布里从主视觉延展详情页、社媒图等。

示例提示：

> @创意设计。为「XX 活动」做主视觉海报（1080×1920）和一张方形社媒图。风格偏极简插画，主色蓝灰。标题「春季开课」必须准确；参考图只借构图，不要照搬人物。先给 2 个方向，选定后再出终稿。

**路径 B：baoyu 等自定义技能**

1. `/` 选中目标技能（如 `baoyu-cover-image`、`baoyu-infographic`）。
2. 附上文章路径、大纲或要点；需要风格时按该技能 README 写参数（type / style / palette 等）。
3. 发送后按技能流程出图；完成后再用无水印工具下载。

### 4. 画布小技巧

- 技能页可先 **创建画布**，再铺参考图与 brief，适合资料多的项目。
- 生成区模型菜单里可选 Seedream 等（以账号实际可用模型为准）。
- 局部修改时写清「只改哪里、保留哪里」，避免整张重做。

---

## 四、在豆包绘图页直接出图并下载

适合只想快速试一张图、不走 Agent / 画布时：

1. 打开 [豆包绘图页](https://www.doubao.com/chat/create-image)。
2. 粘贴第二节生成的提示词，选好模型与尺寸，点击生成。
3. 生成完成后，用已安装的脚本/扩展一键下载无水印原图。

到这里，「生成 → 出图 → 无水印下载」就跑通了。工作模式路径下，出图后同样用第一节的下载工具去水印即可。
