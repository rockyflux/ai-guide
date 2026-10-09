---
aliases:
  - /setup/cleanup-uninstall/
title: 卸载与清理
weight: 42
bookToc: true
bookHidden: false
---
## 卸载与清理 

按 [环境增强工具集]({{< relref "ai-programming/env-and-tools" >}}) 试用、测评各类 Agent 工具时，往往会装上一堆软件；每个都会留下缓存与配置目录，磁盘很快被占满。因此定期卸载与清理很有必要。

## 先判断：该删什么

磁盘空间不足时，先找出大目录，再决定清缓存、删项目产物、卸软件，还是搬安装目录。**不要直接删除不认识的配置目录**，尤其是含 API Key、MCP、Rules 或会话记录的目录；需要删除时先备份。

| 看到什么 | 怎么处理 |
|------|------|
| npm、uv 等包管理器缓存 | 用对应命令清缓存；下次安装会重新下载 |
| 闲置项目的 `node_modules`、`target`、`.next`、`dist` | 确认项目不用或产物可重建后再删 |
| 不再使用的软件 | 正常卸载，再检查残留 |
| 还要用的软件占满 C 盘 | 确认占空间的是安装目录后再考虑迁移 |

## 第一步：查磁盘占用

- **Windows**：
  1. **系统自带（优先）**：设置 → 系统 → 存储 → 其他。会列出占用 C 盘的文件夹；做 AI 编程时，这里常见的大户往往是工具关联目录（如用户目录下的 `.claude`、`.codex`、`.cursor`、模型/缓存目录、安装目录等）。确认用途后：还要用就用 [FolderMove](https://foldermove.com/) 迁到其他盘，确定不用再删。
  2. **细查**：用 [WizTree](https://www.diskanalyzer.com/) 或 [MangoDisk](https://github.com/harry0703/MangoDisk) 扫描磁盘，按大小查看目录和文件。
- **macOS**：安装 [Mole](https://github.com/tw93/mole) 后运行 `mo analyze`，或用 [MangoDisk](https://github.com/harry0703/MangoDisk) 查看磁盘占用。

[MangoDisk](https://github.com/harry0703/MangoDisk) 可跨平台查占用、清缓存并卸载应用（含残留）。

重点看包管理器缓存、旧项目、应用安装目录，以及 AI 工具的会话和索引目录。确认用途后再清理，不确定的先别删。

## 第二步：清缓存和项目产物

npm 和 uv 缓存可以通过命令清理，不会删除已装进项目的依赖：

```bash
npm cache clean --force
uv cache clean
```

如果还用 pnpm、yarn 或 bun，先查各自的缓存命令。Windows 的 npm 缓存通常在 `%LocalAppData%\npm-cache`；uv 缓存位置以本机配置为准。

要按项目找可重建产物，可以用 [Dev Janitor](https://github.com/cocojojo5213/Dev-Janitor) 扫描 `node_modules`、`target`、日志和 AI 工具残留。**先核对扫描结果**，不要把仍在使用的配置当缓存删除。安装包见 [Releases](https://github.com/cocojojo5213/Dev-Janitor/releases)（Windows、macOS、Linux）。它还提供 AI CLI 管理及端口、PATH、本地凭证检查。

## 第三步：卸载或搬迁软件

### Windows：卸载用 Geek / MangoDisk，搬家用 FolderMove

**不再使用**：用 [Geek Uninstaller](https://geekuninstaller.com/) 或 [MangoDisk](https://github.com/harry0703/MangoDisk) 找到程序，先正常卸载，再核对并清除扫描出的残留。卸载失败时才考虑强制删除，先确认选中的程序名称。

**仍要使用，但目录占满 C 盘**：在「存储 → 其他」里点开大目录确认用途后，用 [FolderMove](https://foldermove.com/) 迁到其他盘（原路径保留链接）。以管理员身份运行，迁移后打开程序验证；不要迁移关键系统组件。如果占空间的是缓存，先清缓存，不必搬软件。

### macOS：用 Mole / MangoDisk 清理和卸载

[Mole](https://github.com/tw93/mole) 提供交互菜单，也可以按需运行：

```bash
brew install mole
mo                  # 交互菜单
mo clean --dry-run  # 先预览清理内容
mo clean            # 清缓存、日志及卸载残留
mo uninstall        # 卸载应用及关联文件
mo purge            # 清理可重建的项目产物
mo analyze          # 查看磁盘占用
```

执行清理前先预览；需要保留特定缓存时，可用 `mo clean --whitelist` 设置白名单。Mole 的主力平台是 macOS，Windows 分支仍属实验性支持。

## 日常怎么做

每月检查一次磁盘占用，按“缓存 → 闲置项目产物 → 卸载残留”的顺序清理；换工具时再检查旧工具目录。动安装目录或配置文件之前，先确认用途并备份需要保留的内容。

装环境见 [开发环境准备]({{< relref "ai-programming/dev-start" >}})；日常工具见 [环境增强工具集]({{< relref "ai-programming/env-and-tools" >}})。
