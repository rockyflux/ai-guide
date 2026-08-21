---
aliases:
  - /ai-programming/zcf/
title: ZCF 零配置 Claude Code
weight: 22
bookToc: false
noTocArea: true
bookHidden: false
---

### ZCF - Zero-Config Code Flow
> ZCF（Zero-Config Code Flow）是一个面向专业开发者的 CLI 工具，目标是在几分钟内完成 Claude Code 与 Codex 的端到端环境初始化。通过 npx zcf 可以一站式完成配置目录创建、API/代理接入、MCP 服务接入、工作流导入、输出风格与记忆配置，以及常用工具安装

![images.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1mBpiwABzWxuj6V3Q2VYiSiabQY7occAAkAgAAKZcFhUyC3eiq_vtxA6BA.png)

## 🚀 快速开始

- 推荐：`npx zcf` 打开交互式菜单，按需选择。
- 常用命令：

```bash
npx zcf i        # 完整初始化：安装 + 工作流 + API/CCR + MCP
npx zcf u        # 仅更新工作流
npx zcf --lang zh-CN  # 切换界面语言示例
```

- 无交互示例（预设提供商）：

```bash
npx zcf i -s -p 302ai -k "sk-xxx"
```

更多用法、参数与工作流说明请查看文档。

## 📖 完整文档

- https://zcf.ufomiao.com/zh-CN/