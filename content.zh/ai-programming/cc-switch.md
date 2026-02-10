---
title: CC-Switch 可视化配置模型
weight: 20
bookToc: false
noTocArea: true
---

### Claude Code / Codex / Gemini CLI 全方位辅助工具

> 可视化配置管理工具，支持 MCP、Skills、Prompts 等，下载软件解压即用。

### 界面预览

|                  主界面                   |                  添加供应商                  |
| :---------------------------------------: | :------------------------------------------: |
| ![主界面](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1gNpivibSfNtvnKbHXNkz2xGtyot9AACyh8AAplwWFTobTqMGh524ToE.png) | ![添加供应商](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1j9pivneiUy3052HF8eZ4AK0hSnDewACCCAAAplwWFQtblJXJio04DoE.png) |




### 下载安装

#### 系统要求

- **Windows**: Windows 10 及以上
- **macOS**: macOS 10.15 (Catalina) 及以上
- **Linux**: Ubuntu 22.04+ / Debian 11+ / Fedora 34+ 等主流发行版

#### Windows 用户

从 [Releases](../../releases) 页面下载最新版本的 `CC-Switch-v{版本号}-Windows.msi` 安装包或者 `CC-Switch-v{版本号}-Windows-Portable.zip` 绿色版。

#### macOS 用户

**方式一：通过 Homebrew 安装（推荐）**

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

更新：

```bash
brew upgrade --cask cc-switch
```

**方式二：手动下载**

从 [Releases](../../releases) 页面下载 `CC-Switch-v{版本号}-macOS.zip` 解压使用。

> **注意**：由于作者没有苹果开发者账号，首次打开可能出现"未知开发者"警告，请先关闭，然后前往"系统设置" → "隐私与安全性" → 点击"仍要打开"，之后便可以正常打开

#### ArchLinux 用户

**通过 paru 安装（推荐）**

```bash
paru -S cc-switch-bin
```

#### Linux 用户

从 [Releases](../../releases) 页面下载最新版本的 Linux 安装包：

- `CC-Switch-v{版本号}-Linux.deb`（Debian/Ubuntu）
- `CC-Switch-v{版本号}-Linux.rpm`（Fedora/RHEL/openSUSE）
- `CC-Switch-v{版本号}-Linux.AppImage`（通用）
- `CC-Switch-v{版本号}-Linux.flatpak`（Flatpak）

Flatpak 安装与运行：

```bash
flatpak install --user ./CC-Switch-v{版本号}-Linux.flatpak
flatpak run com.ccswitch.desktop
```

## 快速开始

### 基本使用

1. **添加供应商**：点击"添加供应商" → 选择预设或创建自定义配置
2. **切换供应商**：
   - 主界面：选择供应商 → 点击"启用"
   - 系统托盘：直接点击供应商名称（立即生效）
3. **生效方式**：重启终端或 Claude Code / Codex / Gemini 客户端以应用更改
4. **恢复官方登录**：选择"官方登录"预设（Claude/Codex）或"Google 官方"预设（Gemini），重启对应客户端后按照其登录/OAuth 流程操作

### MCP 管理

- **位置**：点击右上角"MCP"按钮
- **添加服务器**：
  - 使用内置模板（mcp-fetch、mcp-filesystem 等）
  - 支持 stdio / http / sse 三种传输类型
  - 为不同应用配置独立的 MCP 服务器
- **启用/禁用**：切换开关以控制哪些服务器同步到 live 配置
- **同步**：启用的服务器自动同步到各应用的 live 文件
- **导入/导出**：支持从 Claude/Codex/Gemini 配置文件导入现有 MCP 服务器

### Skills 管理（v3.7.0 新增）

- **位置**：点击右上角"Skills"按钮
- **发现技能**：
  - 自动扫描预配置的 GitHub 仓库（Anthropic 官方、ComposioHQ、社区等）
  - 添加自定义仓库（支持子目录扫描）
- **安装技能**：点击"安装"一键安装到 `~/.claude/skills/`
- **卸载技能**：点击"卸载"安全移除并清理状态
- **管理仓库**：添加/删除自定义 GitHub 仓库

### Prompts 管理（v3.7.0 新增）

- **位置**：点击右上角"Prompts"按钮
- **创建预设**：
  - 创建无限数量的系统提示词预设
  - 使用 Markdown 编辑器编写提示词（语法高亮 + 实时预览）
- **切换预设**：选择预设 → 点击"激活"立即应用
- **同步机制**：
  - Claude: `~/.claude/CLAUDE.md`
  - Codex: `~/.codex/AGENTS.md`
  - Gemini: `~/.gemini/GEMINI.md`
- **保护机制**：切换前自动保存当前提示词内容，保留手动修改

### 配置文件

**Claude Code**

- Live 配置：`~/.claude/settings.json`（或 `claude.json`）
- API key 字段：`env.ANTHROPIC_AUTH_TOKEN` 或 `env.ANTHROPIC_API_KEY`
- MCP 服务器：`~/.claude.json` → `mcpServers`

**Codex**

- Live 配置：`~/.codex/auth.json`（必需）+ `config.toml`（可选）
- API key 字段：`auth.json` 中的 `OPENAI_API_KEY`
- MCP 服务器：`~/.codex/config.toml` → `[mcp_servers]` 表

**Gemini**

- Live 配置：`~/.gemini/.env`（API Key）+ `~/.gemini/settings.json`（保存认证模式）
- API key 字段：`.env` 文件中的 `GEMINI_API_KEY` 或 `GOOGLE_GEMINI_API_KEY`
- 环境变量：支持 `GOOGLE_GEMINI_BASE_URL`、`GEMINI_MODEL` 等自定义变量
- MCP 服务器：`~/.gemini/settings.json` → `mcpServers`
- 托盘快速切换：每次切换供应商都会重写 `~/.gemini/.env`，无需重启 Gemini CLI 即可生效

**CC Switch 存储（v3.8.0 新架构）**

- 数据库（SSOT）：`~/.cc-switch/cc-switch.db`（SQLite，存储供应商、MCP、Prompts、Skills）
- 本地设置：`~/.cc-switch/settings.json`（设备级设置）
- 备份：`~/.cc-switch/backups/`（自动轮换，保留 10 个）

### 云同步设置

1. 前往设置 → "自定义配置目录"
2. 选择您的云同步文件夹（Dropbox、OneDrive、iCloud、坚果云等）
3. 重启应用以应用
4. 在其他设备上重复操作以启用跨设备同步

> **注意**：首次启动会自动导入现有 Claude/Codex 配置作为默认供应商。



