---
title: Cursor Skills 实战
weight: 2
bookToc: true
bookHidden: false
---

## Cursor Skills 实战


| Skill | 交付物 | 安装 |
| --- | --- | --- |
| [dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | 演示文稿 / 可编辑 PPTX | `npx dashi-ppt-skill@latest` |
| [gzh-design-skill](https://github.com/isjiamu/gzh-design-skill) | 公众号粘贴 HTML | `npx skills add https://github.com/isjiamu/gzh-design-skill -g -y` |
| [Jacky Motion](https://github.com/Jackywxsz/jacky-motion) | 16:9 录屏动画 HTML | `npx skills add https://github.com/Jackywxsz/jacky-motion --skill jacky-motion2-0-srt -g -y` |
| [remotion-video-toolkit](https://github.com/shreefentsar/remotion-video-toolkit) | 16:9 MP4 教程视频 | `npx skills add https://github.com/shreefentsar/remotion-video-toolkit -g -y` |
| [huashu-design](https://github.com/alchaincyf/huashu-design) | 可点击 Web/App 原型 | `npx skills add alchaincyf/huashu-design -g -y` |

Cursor 开 **Agent 模式**，`@` 引用源文件；未识别时说明「按 SKILL.md 执行」。

---

## 1.dashi-ppt-skill · 演示文稿

**输入**：`cursor.md` 或任意文档  
**产出**：浏览器可编辑 HTML → 导出 PPTX

```
用 dashi-ppt skill，基于 cursor.md 做 8 页演示文稿，主题 Cursor 十分钟上手。
先让我选主题，确认后再组稿。
```
## 2.gzh-design-skill · 公众号排版

**输入**：Markdown 成稿（Skill 只排版，不代写）  
**产出**：带「复制到公众号」按钮的预览 HTML

```
用 gzh-design skill，把 article.md 排成公众号 HTML，主题摸鱼绿，校验通过再交付。
```

## 3.Jacky Motion · 录屏动画

**输入**：口播稿 + **SRT 字幕**（SRT 为主时钟）  
**产出**：单文件 HTML，浏览器录屏即视频

```
使用 Jacky Motion 2.0 SRT，把口播稿和 voiceover.srt 做成 16:9 录屏动画，教程向 sketch-note 风格，按流程走确认门。
```

## 4.huashu-design · 高保真原型

**输入**：需求描述（可附 PRD）  
**产出**：单文件可点击 HTML 原型

```
用 huashu-design skill，做「Cursor 新手配置向导」Web 原型，4 屏可点击跳转，深色 IDE 风。
```

## 5.remotion-video-toolkit · MP4 教程视频

**输入**：`cursor.md` + 口播稿 / `voiceover.srt`（可选分镜 `storyboard.md`）  
**产出**：1920×1080 MP4，支持 SRT 逐词字幕、React 动画、CLI 渲染

> **Chrome Headless Shell**：本机若已安装，在提示词中指定路径，避免 Remotion 自动下载（约 110MB）。  
> 示例路径：`D:\soft\AI\chrome-headless-shell\win64\chrome-headless-shell-win64\chrome-headless-shell.exe`

```
使用 remotion-video-toolkit skill，基于 cursor.md、voiceover.srt 和 storyboard.md，
做 Cursor 十分钟上手指南 MP4（1920×1080 · sketch-note 风格 · 9 beat）。

本机 Chrome Headless Shell 路径：
D:\soft\AI\chrome-headless-shell\win64\chrome-headless-shell-win64\chrome-headless-shell.exe
请在 remotion.config.ts 中 Config.setBrowserExecutable() 指定，不要自动下载浏览器。

```



## 延伸阅读

- [Cursor 实战上手指南]({{< relref "project-practice/cursor" >}}) — 本文案例源内容
- [Agent Skills]({{< relref "agent/skills" >}}) — 规范与安装方式
