---
title: WSL 开发环境：Claude Code 安装与使用
weight: 16
bookToc: false
noTocArea: true
---

## WSL 开发环境：Claude Code 安装与使用

## 终端选择（可选）

- Zellij：Rust 实现的 `tmux` 替代品（跨平台） - [zellij.dev](https://zellij.dev/)
- WezTerm：跨平台终端，Windows 上体验更好 - [wezterm.org](https://wezterm.org/install/windows.html)

如果你不想用 Rust 方案，直接选 WezTerm。

## 先启用 WSL（推荐 wsldashboard）

你可以用 2 种方式之一：

1. 推荐：安装并打开 `wsldashboard`，选择发行版并一键安装/启动（下载见下方）
2. 备选：Windows PowerShell（管理员）运行：

```powershell
wsl --install -d Ubuntu
wsl --set-default-version 2
```

确认 WSL 状态：

```powershell
wsl -l -v
```

然后在 WSL（Ubuntu）里执行：

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git python3-pip curl unzip zip -y
```

## 可选工具：WSL Dashboard

- 下载（v0.5.1）：[wsldashboard.v0.5.1.exe](https://gh.zwy.one/https://github.com/owu/wsl-dashboard/releases/download/v0.5.1/wsldashboard.v0.5.1.exe)
- 中文说明：[README_zh_CN.md](https://github.com/owu/wsl-dashboard/blob/main/manual/README_zh_CN.md)

## 新手一条龙：安装 Claude Code 并能跑起来

在 WSL 里执行（按顺序复制即可）：

```bash
sudo apt update && sudo apt install -y nodejs npm

# 推荐：用 npx zcf 一站式初始化（安装 Claude Code、导入工作流、接入代理/MCP 等）
npx zcf i

claude --version
```

## 进入项目目录（重点：`/mnt` 是 Windows 挂载目录）

WSL 中 Windows 磁盘会挂载到 `/mnt/<盘符>/` 下：

- `/mnt/c` = `C:\`
- `/mnt/d` = `D:\`

示例：

```bash
cd ~/projects/your-project
claude
```

如果你的项目在 Windows 盘（例如 projects）：

```bash
cd /mnt/c/Users/<你的Windows用户名>/projects
```

## 常见问题（最短排错）

1. `claude: command not found`：多半是全局 bin 没进 PATH，先重新确认 `claude --version` 能否正常输出。
2. `EACCES`（权限报错）：不要一直用 `sudo npm install -g ...`；建议直接走 `npx zcf i` 再让它完成安装/修复。
3. Node 版本太旧导致失败：改用 `nvm` 装新版 Node（如果你遇到再处理）。

## 安全建议：不要用 root 做日常开发

日常开发建议用普通用户启动 WSL（避免误操作带来系统级风险）
