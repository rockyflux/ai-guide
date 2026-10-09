---
title: Cursor 实战上手指南
weight: 1
bookToc: true
bookHidden: false
---

## Cursor 实战上手指南（10分钟）

## 1. 安装 Cursor 并开通账号

- **第三方渠道**：可在 [闲鱼搜索](https://www.goofish.com/search?q=cursor) 购买月卡/额度卡（Auto模型，自行甄别风险与售后）。
   [月卡1](https://pay.ldxp.cn/shop/W6IZFM8B) 
   [月卡2](https://wzyp.cn/shop/xxdlzs) 
   [月卡3](https://wzyp.cn/shop/9NW8O5U5) 
- **官方订阅**：$20/月（Cursor Pro 的用量通常是“额度池”）。
- **BYOK工具**：
  - [cursor-byok](https://github.com/leookun/cursor-byok)：本机跑 Cursor 模型网关，接入自有 OpenAI/Anthropic 兼容 API；
  - [go-cursor-help](https://github.com/yuaotian/go-cursor-help)：处理免费试用期常见限制。
- **界面汉化**：官方暂无完整中文界面。可用 [cursor-localization-zh](https://github.com/vibepm666/cursor-localization-zh)（可选）；

```text
帮我汉化cursor，用这个方案https://github.com/vibepm666/cursor-localization-zh
```


## 2. 配置 MCP

| # | 工具 | 职能与场景 | 必装 |
|:-:|------|------------|:----:|
| 1 | **[Codegraph](https://github.com/colbymchenry/codegraph)** | 本地代码图谱：大仓导航、调用链与影响面分析 | ✅ |
| 2 | **[Context Mode](https://github.com/mksglu/context-mode)** | 上下文窗口优化：沙箱化工具输出、会话记忆持久化、跨平台路由 | ✅ |
| 3 | **[DBX MCP](https://dbxio.com/cn/docs/mcp)** | 接 DBX 查结构/跑 SQL；自然语言查表查数 | ✅ |
| 4 | **[Context7](https://context7.com/)** | 注入当前版官方文档；查最新 API、减幻觉 | ✅ |
| 5 | **[anysearch](https://www.anysearch.com)** | 统一实时搜索（通用/垂域/批量/URL 抽取） | ✅ |
| 6 | **[mcp-feedback-enhanced](https://github.com/Minidoracat/mcp-feedback-enhanced)** | 本地反馈增强：长等待、传图、断网重连 | ☐ |
| 7 | **[Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)** | 深度推理；方案推演、复杂 Bug 根因 | ☐ |
| 8 | **[Time Server](https://github.com/modelcontextprotocol/servers/tree/main/src/time)** | 精确时间基准；日志时间戳禁止猜测 | ☐ |
| 9 | **[tavily-remote-mcp](https://github.com/tavily-ai/tavily-mcp)** | 网页检索/抽取/爬取/调研（需 [API Key](https://www.tavily.com/)） | ☐ |
| 10 | **[DeepWiki](https://docs.devin.ai/zh/work-with-devin/deepwiki-mcp)** | 外部知识检索；补最新文档缺口 | ☐ |
| 11 | **[Browser Control](https://browsermcp.io/)** | Web 交互与调试；UI/E2E/截图录屏 | ☐ |
| 12 | **[spec-workflow-mcp](https://github.com/Pimzino/spec-workflow-mcp)** | 规格驱动（需求→设计→任务）；审批与进度 | ☐ |
| 13 | **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** | 浏览器自动化；E2E/抓取；可与 Browser Control 二选一 | ☐ |
| 14 | **[Zvec MCP](https://zvec.org/zh/docs/db/agents/mcp/)** | 向量库操作（Collection/CRUD/语义搜索）；对话内直连 Zvec | ☐ |



## 3. 在 Cursor 中打开项目

1. 打开 Cursor，选择 Agent 模式
2. 在项目里建 Codegraph 索引：

```bash
codegraph init
```

> 首次使用需先全局安装 CLI：`npm install -g @colbymchenry/codegraph`；`codegraph install --target cursor --yes`；建图完成后重启 Cursor。

3. 输入初始化提示词（下方示例面向 Java 项目；其他技术栈可在 [Plainraw](https://plainraw.com/) 自行生成对应 URL）：

```text
读取并严格执行：https://plainraw.com/raw/yq-project-init
```

4. 把项目相关文档放进 Agent 可读的资料目录（常见为 `docs/ref/` 或 Init 后规划出的目录），需求/设计/接口说明都往这里丢即可。

Word / PPT / Excel / PDF 等先转成 Markdown，再放进该目录：

- [anydoc](https://anydoc.wiki/)：本地/浏览器转 Markdown，14 种办公格式，文件不出设备
- [MinerU 在线解析](https://mineru.net/OpenSourceTools/Extractor)：复杂 PDF、扫描件、版式文档更合适


## 5. Cursor Skills 实战

用 Skills 把同一份内容交付为 PPT、公众号、动画、原型。Agent 模式下 `@` 引用源文件；未识别时说明「按 SKILL.md 执行」。更多规范见：[Agent Skills]({{< relref "agent/skills" >}})。

**技能管理客户端**：[Skills Manager](https://skillsmanager.dev/zh)（开源桌面端 + CLI）。技能只装一次，可分发给 Cursor、Claude Code、Codex 等；支持从 Git / zip / [skills.sh](https://skills.sh) 安装，全局与项目工作区同步。装好后技能落在 `~/.cursor/skills`，Cursor 无需额外配置。

| Skill | 交付物 | 安装 |
| --- | --- | --- |
| [dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | 演示文稿 / 可编辑 PPTX | `npx dashi-ppt-skill@latest` |
| [gzh-design-skill](https://github.com/isjiamu/gzh-design-skill) | 公众号粘贴 HTML | `npx skills add https://github.com/isjiamu/gzh-design-skill -g -y` |
| [Jacky Motion](https://github.com/Jackywxsz/jacky-motion) | 16:9 录屏动画 HTML | `npx skills add https://github.com/Jackywxsz/jacky-motion --skill jacky-motion2-0-srt -g -y` |
| [remotion-video-toolkit](https://github.com/shreefentsar/remotion-video-toolkit) | 16:9 MP4 教程视频 | `npx skills add https://github.com/shreefentsar/remotion-video-toolkit -g -y` |
| [huashu-design](https://github.com/alchaincyf/huashu-design) | 可点击 Web/App 原型 | `npx skills add alchaincyf/huashu-design -g -y` |

