---
aliases:
  - /setup/github-extensions/
title: GitHub 周边工具速查
weight: 5
bookToc: false
noTocArea: true
bookHidden: false
---

# GitHub 周边工具速查

把仓库地址里的 `github.com` 换成下表对应域名，即可切到中文知识库、代码问答、架构图或可喂给大模型的文本视图（例如 `https://github.com/OWNER/REPO` → `https://zread.ai/OWNER/REPO`）。

| 你想做什么 | 工具 | 一句话用途 | 入口 / 打开方式 |
| --- | --- | --- | --- |
| 在线编辑仓库 | [GitHub.dev](https://github.dev/) | 浏览器里改文件、提交变更、提 PR | 仓库页按 `.`（英文句号），或把 `github.com/OWNER/REPO` 改成 `github.dev/OWNER/REPO` |
| 在线阅读代码 | [GitHub1s](https://github1s.com/) | 像 VS Code 一样浏览/搜索/跳转 | 把 `github.com/OWNER/REPO` 改成 `github1s.com/OWNER/REPO` |
| 读中文项目知识库 | [zread.ai](https://zread.ai) | 阅读整理好的中文项目说明（介绍、安装步骤等） | 把 `github.com/OWNER/REPO` 改成 `zread.ai/OWNER/REPO` |
| 快速找代码 / 问实现 | [DeepWiki](https://deepwiki.com/) | 结合参考代码定位相关文件并解释实现逻辑 | 把 `github.com/OWNER/REPO` 改成 `deepwiki.com/OWNER/REPO`，在提问框输入功能名，点回答里的源码链接跳转 |
| 把仓库交给 AI 分析 | [Gitingest](https://gitingest.com/) | 把概况、目录结构和文件内容整理成方便 AI 阅读的文本 | 把 `github.com/OWNER/REPO` 改成 `gitingest.com/OWNER/REPO`，复制输出给常用大模型 |
| 看项目架构图 | [GitDiagram](https://gitdiagram.com/) | 快速生成可视化架构图，理清模块及其相互关系 | 把 `github.com/OWNER/REPO` 改成 `gitdiagram.com/OWNER/REPO` |
| 提升 GitHub 下载速度 | [Github 增强 - 高速下载](https://greasyfork.org/zh-CN/scripts/412245-github-enhancement-high-speed-download) | 为 Clone / Release / Raw / Code(ZIP) 等入口添加多种加速源按钮 | 浏览器先安装 Tampermonkey，再打开脚本页面点击“安装脚本” |
| 代理镜像加速下载 / 克隆 | [GitHub ProxyUI](https://git.mxg.pub/) | 通过镜像节点加速 Archive、Release、Raw、Gist 等资源下载与 `git clone` | 打开站点，粘贴 GitHub 链接后选择 `git clone` / `wget` / `curl` / `url` 生成加速命令 |
| GitHub / Docker Hub / NPM 加速 | [Watt Toolkit](https://steampp.net/) | 一键加速 GitHub 等开发常用站点访问与下载 | 微软商店搜索安装后，选择 GitHub 加速选项（也支持 Docker Hub、NPM 等） |
| GitHub 界面中文化 | [github-chinese](https://github.com/maboloshi/github-chinese) | 将 GitHub 界面元素中文化（用户脚本） | 安装 Tampermonkey/Violentmonkey 后，按仓库 README 的安装指南启用 |
| 让 AI “绑定”某个仓库问答 | [GitMCP](https://gitmcp.io/) | 把仓库映射成 MCP Server（更定向、更少跑题） | `https://gitmcp.io/OWNER/REPO` |
| 看 GitHub 今日/本周/本月热门 | [GitHub Trending](https://github.com/trending) | 发现当下最火的开源项目与话题 | 打开页面后用 Language / Date range 筛选 |
| 看实时上升中的热门仓库 | [Trendshift](https://trendshift.io/) | 捕捉正在上升、尚未见顶的仓库动向（GitHub Trending 的替代视角） | 打开站点按 Daily / Weekly / Monthly / Yearly 切换时间范围 |
| 发现精选项目 | [HelloGitHub](https://hellogithub.com/) | 精选项目与趋势 | 直接浏览分类/期刊 |
| 看热门 Star 榜单 | [GhubStar](https://ghubstar.com/) | 快速了解大家都在关注什么 | 打开榜单筛选语言/时间 |
| 给 GitHub 账号打分 / 发现开发者 | [ghfind](https://ghfind.com/) | 基于公开数据给账号打 0–100 分，带锐评、排行榜与宝藏项目发现 | 打开站点搜索用户名，或浏览趋势/评分/热度榜 |


