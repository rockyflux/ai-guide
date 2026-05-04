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

## 2026 官方重大更新（先看这个）

微软于 2026 年 3 月 24 日官方宣布 WSL 大更新，重点解决三大痛点：跨文件系统慢、网络割裂、安装复杂，目标是让 Windows 成为 Linux 开发者首选平台。

### 四大核心升级（2026 重磅）

1. 跨文件系统性能提升（5-10 倍）
   - 重写协议栈，重点优化 `/mnt/c` 等 Windows 分区访问瓶颈
   - 小文件场景（代码、依赖、npm 安装）普遍提速，体验接近原生 ext4
   - 统一缓存，Windows 和 Linux 访问更一致
   - Docker 镜像拉取和构建性能有明显改善
2. 网络栈统一
   - Windows 与 WSL 共用同一网络能力（localhost、端口、防火墙规则）
   - 常见本地开发服务可直接通过 `localhost:<端口>` 访问，弱化手动端口转发
   - DNS 与跨系统网络稳定性增强，减少端口冲突与延迟问题
3. 安装更简单
   - `wsl --install` 支持更完整自动化流程
   - Microsoft Store 安装 Ubuntu、Debian、Fedora 等发行版更直接
   - 默认配置更完善（WSL 2、GUI、GPU 能力）
4. 企业级安全与管理
   - 内核隔离与沙箱能力加强
   - 支持通过组策略统一管理权限、资源与发行版
   - 审计与合规能力更完善

### 当前已推送版本（2026.4）

- **WSL 2.7.1（Pre-Release，2026.3.28）**
  - 修复高危漏洞 `CVE-2026-26127`（.NET 10）
  - 支持按目录挂载（不再仅限整盘）
  - VirtioProxy 网络模式启用 DNS 隧道
  - 内核升级到 `Linux 6.6.114+ LTS`
- **WSL 2.7.0（2026.2）**
  - 内核从 `6.1 LTS` 升级到 `6.6 LTS`
  - 含大量安全补丁，以及 I/O、调度优化

### 发布时间线

- 预览版：2026.3 起，Win11 Dev/Canary（>=26200）可体验
- 正式版：预计 2026 年 9-10 月随 Win11 25H2 推送

### 手动下载安装（兜底方案）

如果你所在网络或系统策略导致自动安装失败，可走手动安装：

1. 打开 [WSL Releases](https://github.com/microsoft/WSL/releases)
2. 下载最新版 `wsl.x64.msi`（x64 系统）
3. 双击安装，按向导完成
4. 安装后验证：

```powershell
wsl --version
wsl -l -v
```

然后在 WSL（Ubuntu）里执行：

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git python3-pip curl unzip zip -y
```

## 可选工具：WSL Dashboard

- 下载（v0.5.1）：[wsldashboard.v0.7.0.exe](https://gitee.com/bye/wsl-dashboard/releases/download/v0.7.0/wsldashboard.v0.7.0.exe)
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
