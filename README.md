# AI 编程指南

一个使用 Hugo 和 Hugo Book 主题构建的中文文档网站。本项目作为 AI 编程工具和最佳实践的知识中心，涵盖主流 AI 编程工具、技术文档和迁移指南。

## 快速开始

### 前置要求

* Hugo (最低版本 0.128.0)
* Git

### 安装

1. 克隆仓库：

```bash
git clone https://github.com/rockyflux/ai-guide.git
cd ai-guide
```

2. 初始化并更新主题子模块：

```bash
git submodule update --init --recursive
```

3. 启动开发服务器：

```bash
hugo server
```

4. 在浏览器中打开 http://localhost:1313

## 内容组织

本文档网站为中文开发者提供全面的 AI 编程指南：

* AI 编程工具详细文档
* 各工具的功能介绍和使用指南
* 工具对比分析和迁移指南
* 详细的技术洞察和功能对比
* 最佳实践和使用案例
* 常见问题解答

## 部署

本网站使用 GitHub Actions 自动部署到 GitHub Pages。部署工作流：

* 触发：推送到 main 分支时自动触发，或通过 GitHub Actions 标签手动触发
* 构建：使用 Hugo 0.128.0 extended 版本（支持 Dart Sass）
* 部署：发布到 GitHub Pages，正确处理构建产物
* URL：部署后可在您的 GitHub Pages URL 访问

### 设置 GitHub Pages

1. 进入仓库设置 → Pages
2. 将 Source 设置为 "GitHub Actions"
3. 推送到 main 分支以触发首次部署

**重要**：配置文件已更新为 `rockyflux`，如需修改请编辑 `hugo.toml` 文件。

## 开发

### 常用命令

```bash
# 启动开发服务器（所有语言）
hugo server

# 包含草稿内容启动
hugo server -D

# 指定端口启动
hugo server -p 1314

# 预览网站
hugo server

# 构建生产版本
hugo

# 包含草稿构建
hugo -D

# 清理构建缓存
hugo --gc

# 更新主题子模块
git submodule update --remote themes/hugo-theme-next
```

### 项目结构

```
ai-guide/
├── .github/workflows/  # GitHub Actions CI/CD
├── archetypes/         # Hugo 内容模板
├── content.zh/         # 中文网站内容
│   ├── large-models/   # 大模型相关内容
│   ├── ai-programming/ # AI编程工具和平台
│   ├── open-source-community/ # 开源项目和社区
│   ├── prompts/        # 提示词最佳实践
│   ├── advanced-applications/ # 高级应用场景
│   ├── open-source-clients-api/ # 开源客户端和API
│   ├── practical-cases/ # 实践案例
│   └── others/         # 其他资源
├── static/             # 静态资源（图片、文件等）
├── themes/             # Hugo 主题（git submodule）
├── .gitignore          # Git 忽略文件
├── .gitmodules         # Git 子模块配置
├── hugo.toml           # Hugo 配置文件
└── README.md           # 项目说明文档
```

## 贡献

欢迎贡献内容！请：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

* [Hugo](https://gohugo.io/) - 静态网站生成器
* [Hugo Book Theme](https://github.com/alex-shpak/hugo-book) - 简洁的文档主题
* [Book of Kiro](https://github.com/kiro-community/book-of-kiro) - 项目结构和主题参考

---

**Welcome to the future of AI programming! 🚀✨**
