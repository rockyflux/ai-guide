---
aliases:
  - /project-practice/wsl/
title: WSL 开发环境
weight: 11
bookToc: false
noTocArea: true
bookHidden: false
---

## WSL 开发环境：Claude Code 安装与使用

## 终端选择（可选）

- Zellij：Rust 实现的 `tmux` 替代 - [zellij.dev](https://zellij.dev/)
- WezTerm：跨平台终端，Windows 上更稳 - [wezterm.org](https://wezterm.org/install/windows.html)

不想用 Rust 方案就直接选 WezTerm。

## 启用 WSL

推荐用 [WSL Dashboard](https://github.com/owu/wsl-dashboard) 一键装发行版；或管理员 PowerShell：

```powershell
wsl --install -d Ubuntu
wsl --set-default-version 2
wsl -l -v
```

手动兜底：从 [WSL Releases](https://github.com/microsoft/WSL/releases) 下载 `wsl.x64.msi` 安装，再执行 `wsl --version`。

装好后进 Ubuntu 补基础包：

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git python3-pip curl unzip zip -y
```

Dashboard 下载（v0.7.0）：[wsldashboard.v0.7.0.exe](https://gitee.com/bye/wsl-dashboard/releases/download/v0.7.0/wsldashboard.v0.7.0.exe) · [中文说明](https://github.com/owu/wsl-dashboard/blob/main/manual/README_zh_CN.md)

## 2026 值得知道的变化

微软 2026 年持续推 WSL 大更新，对开发者最有用的几点：

| 方向 | 你能感知到什么 |
|------|----------------|
| 跨盘性能 | `/mnt/c` 等 Windows 分区访问提速（小文件 / npm 等场景更明显） |
| 网络统一 | 本地服务多可直接 `localhost:<端口>`，少手动端口转发 |
| 安装简化 | `wsl --install` / Store 装发行版更顺；默认偏 WSL 2 |
| WSL Containers | 2.9.3 预览起可用 `wslc`（或 `container`），Docker 兼容 CLI，**不必装 Docker Desktop** |

预览容器能力：

```powershell
wsl --update --pre-release
wslc --version   # 或 container --version
wslc pull ubuntu && wslc run -it ubuntu bash
```

> Public Preview，正式版预计 2026 秋季。文档：[WSL container](https://learn.microsoft.com/en-us/windows/wsl/wsl-container) · 反馈：[microsoft/WSL Issues](https://github.com/microsoft/WSL/issues)

近期版本速览：`2.9.3`（WSLC + VirtioFS）→ `2.7.1`（目录挂载、DNS 隧道、CVE 修复）→ `2.7.0`（内核 6.6 LTS）。

## 安装 Claude Code

在 WSL 里按顺序执行：

```bash
sudo apt update && sudo apt install -y nodejs npm

# 推荐：npx zcf 一站式初始化（装 Claude Code、工作流、代理/MCP 等）
npx zcf i

claude --version
```

## 进入项目目录

WSL 里 Windows 盘挂在 `/mnt/<盘符>/`：`/mnt/c` = `C:\`，`/mnt/d` = `D:\`。

```bash
# 建议项目放在 Linux 家目录（性能更好）
cd ~/projects/your-project && claude

# 若项目在 Windows 盘
cd /mnt/c/Users/<你的Windows用户名>/projects
```

## 常见问题

1. `claude: command not found`：全局 bin 未进 PATH，先确认 `claude --version`。
2. `EACCES`：别反复 `sudo npm install -g`；走 `npx zcf i` 让它装/修。
3. Node 太旧：用 `nvm` 换新版再试。

## 安全建议

日常开发用普通用户跑 WSL，不要用 root。
