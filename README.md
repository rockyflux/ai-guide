# AI 编程指南

> 一个使用 Hugo 和 Hugo Book 主题构建的中文文档网站，作为 AI 编程工具和最佳实践的知识中心。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-在线访问-blue)](https://rockyflux.github.io/ai-guide/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-0.148.0-ff4088)](https://gohugo.io/)

## 📋 项目简介

**AI 编程指南** 是一个社区维护的中文文档网站，致力于为中文开发者提供全面的 AI 编程工具使用指南、最佳实践和技术文档。本项目涵盖主流 AI 编程工具、大语言模型、提示词工程、开源社区资源等内容。

### 🎯 核心内容模块

- **🤖 AI 编程工具** (`content.zh/ai-programming/`)
  - Cursor - 基于 VSCode 的 AI 代码编辑器
  - GitHub Copilot - GitHub 的 AI 编程助手
  - Kiro - AWS 推出的完整 AI 开发平台
  - 其他主流 AI 编程工具

- **🧠 大模型** (`content.zh/large-models/`)
  - 主流大语言模型介绍
  - 模型对比分析
  - 模型选择指南

- **💬 提示词工程** (`content.zh/prompts/`)
  - 提示词基础
  - 高级技巧
  - 最佳实践
  - 真实世界示例

- **🔧 开源客户端和 API** (`content.zh/open-source-clients-api/`)
  - API 文档
  - 客户端工具
  - SDK 库

- **🌐 开源社区** (`content.zh/open-source-community/`)
  - 开源项目推荐
  - 社区资源
  - 贡献指南

- **🚀 高级应用** (`content.zh/advanced-applications/`)
  - AI 智能体
  - 自动化工作流
  - 规格驱动开发

- **📚 实践案例** (`content.zh/practical-cases/`)
  - 最佳实践
  - 项目案例
  - 迁移指南

- **📖 其他资源** (`content.zh/others/`)
  - 快速入门指南
  - 工具对比
  - 学习路径
  - 在线体验
  - 故障排除

## 🚀 快速开始

### 前置要求

- **Hugo Extended** 版本 0.148.0 或更高（必须使用 Extended 版本以支持 Dart Sass）
- **Git** 2.0 或更高
- **Node.js**（可选，用于某些主题功能）

### 安装步骤

#### 1. 克隆仓库

```bash
git clone https://github.com/rockyflux/ai-guide.git
cd ai-guide
```

#### 2. 初始化 Git 子模块

本项目使用 Hugo Book 主题作为 Git 子模块，需要初始化：

```bash
# 初始化并递归更新所有子模块
git submodule update --init --recursive
```

#### 3. 启动开发服务器

```bash
# 启动开发服务器（默认端口 1313）
hugo server

# 或使用详细输出模式
hugo server -v
```

#### 4. 访问网站

在浏览器中打开 [http://localhost:1313](http://localhost:1313)

### 验证安装

运行以下命令验证 Hugo 版本：

```bash
hugo version
```

应显示类似输出：
```
hugo v0.148.0+extended linux/amd64 BuildDate=...
```

**注意**：必须使用 `extended` 版本，否则构建可能失败。

## 📁 项目结构

```
ai-guide/
├── .github/
│   └── workflows/
│       └── hugo.yml              # GitHub Actions 部署工作流
├── archetypes/
│   └── default.md                # Hugo 内容模板
├── content.zh/                   # 中文网站内容（主要目录）
│   ├── _index.md                 # 首页内容
│   ├── ai-programming/           # AI 编程工具文档
│   │   ├── _index.md
│   │   ├── cursor.md
│   │   ├── cursor-advanced.md
│   │   ├── github-copilot.md
│   │   ├── kiro.md
│   │   └── other-tools.md
│   ├── large-models/             # 大模型相关内容
│   │   ├── _index.md
│   │   ├── mainstream-models.md
│   │   ├── model-comparison.md
│   │   └── selection-guide.md
│   ├── prompts/                  # 提示词工程
│   │   ├── _index.md
│   │   ├── basics.md
│   │   ├── advanced-techniques.md
│   │   ├── best-practices.md
│   │   └── real-world-examples.md
│   ├── open-source-clients-api/  # 开源客户端和 API
│   │   ├── _index.md
│   │   ├── api-documentation.md
│   │   ├── client-tools.md
│   │   └── sdk-libraries.md
│   ├── open-source-community/    # 开源社区
│   │   ├── _index.md
│   │   ├── open-source-projects.md
│   │   ├── community-resources.md
│   │   └── contribution-guide.md
│   ├── advanced-applications/    # 高级应用场景
│   │   ├── _index.md
│   │   ├── ai-agents.md
│   │   ├── automation-workflows.md
│   │   └── spec-driven-development.md
│   ├── practical-cases/           # 实践案例
│   │   ├── _index.md
│   │   ├── best-practices.md
│   │   ├── project-cases.md
│   │   └── migration-guide.md
│   └── others/                   # 其他资源
│       ├── _index.md
│       ├── quick-start.md
│       ├── tool-comparison.md
│       ├── troubleshooting.md
│       ├── learning-path.md
│       ├── learning-tutorials/
│       └── online-experience/
├── static/                       # 静态资源目录
│   └── .gitkeep
├── themes/                       # Hugo 主题（Git 子模块）
│   └── hugo-book/                # Hugo Book 主题
├── .gitignore                    # Git 忽略文件配置
├── .gitmodules                   # Git 子模块配置
├── hugo.toml                     # Hugo 主配置文件
├── LICENSE                       # MIT 许可证
└── README.md                     # 项目说明文档（本文件）
```

## 🛠️ 开发指南

### 常用 Hugo 命令

```bash
# 启动开发服务器（默认端口 1313）
hugo server

# 启动开发服务器并包含草稿内容
hugo server -D

# 指定端口启动
hugo server -p 1314

# 启动开发服务器并绑定到所有网络接口
hugo server --bind 0.0.0.0

# 构建生产版本（输出到 public/ 目录）
hugo

# 构建生产版本并包含草稿
hugo -D

# 构建并启用详细输出
hugo -v

# 构建并启用最小化输出（压缩 HTML、CSS、JS）
hugo --minify

# 清理构建缓存和未使用的文件
hugo --gc

# 显示构建统计信息
hugo --templateMetrics

# 验证配置文件语法
hugo config
```

### Git 子模块管理

```bash
# 更新主题子模块到最新版本
git submodule update --remote themes/hugo-book

# 同步子模块配置
git submodule sync --recursive

# 强制更新所有子模块
git submodule update --init --recursive --force

# 查看子模块状态
git submodule status
```

### 创建新内容

```bash
# 使用默认模板创建新页面
hugo new content.zh/section/new-page.md

# 创建新页面并自动打开编辑器
hugo new content.zh/section/new-page.md --editor code
```

### 本地构建测试

在推送到 GitHub 之前，建议本地构建测试：

```bash
# 构建生产版本
hugo --minify --gc

# 检查构建输出
ls -la public/

# 使用 Python 简单 HTTP 服务器预览构建结果
cd public
python3 -m http.server 8080
# 或使用 Node.js http-server
npx http-server -p 8080
```

## 🚢 部署

### GitHub Pages 自动部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

#### 部署工作流说明

- **触发条件**：
  - 推送到 `main` 分支时自动触发
  - 通过 GitHub Actions 界面手动触发（`workflow_dispatch`）

- **构建配置**：
  - Hugo 版本：0.148.0 Extended
  - 构建环境：Ubuntu Latest
  - 构建命令：`hugo --gc --minify`
  - 输出目录：`public/`

- **部署流程**：
  1. 安装 Hugo CLI（Extended 版本）
  2. 安装 Dart Sass
  3. 检出代码和子模块
  4. 更新子模块
  5. 验证主题安装
  6. 构建 Hugo 站点
  7. 上传构建产物
  8. 部署到 GitHub Pages

#### 首次设置 GitHub Pages

1. 进入仓库设置 → **Pages**
2. 将 **Source** 设置为 **"GitHub Actions"**
3. 推送到 `main` 分支以触发首次部署
4. 等待部署完成（约 1-2 分钟）
5. 访问 `https://<username>.github.io/ai-guide/` 查看网站

#### 自定义域名（可选）

如需使用自定义域名：

1. 在 `static/` 目录创建 `CNAME` 文件
2. 在文件中写入您的域名（如 `docs.example.com`）
3. 在 DNS 提供商处配置 CNAME 记录指向 GitHub Pages

### 本地部署到其他平台

#### Netlify

```bash
# 构建命令
hugo --gc --minify

# 发布目录
public
```

#### Vercel

```bash
# 构建命令
hugo --gc --minify

# 输出目录
public
```

#### 其他静态托管服务

任何支持静态网站托管的服务都可以使用，只需将 `public/` 目录的内容上传即可。

## ⚙️ 配置说明

### Hugo 配置文件

主要配置文件为 `hugo.toml`，包含以下关键配置：

- **baseURL**: 网站基础 URL
- **defaultContentLanguage**: 默认内容语言（`zh`）
- **theme**: 使用的主题（`hugo-book`）
- **languages**: 语言配置
- **menu**: 菜单配置（包含语雀文档、GitHub、萧风导航等链接）
- **params**: 主题参数配置

### 重要配置项

- `BookRepo`: GitHub 仓库地址
- `BookEditPage`: 启用页面编辑链接
- `BookSearch`: 启用搜索功能
- `BookToC`: 启用目录
- `BookServiceWorker`: 启用 Service Worker（离线支持）

详细配置请参考 [Hugo Book 主题文档](https://github.com/alex-shpak/hugo-book)。

## 🤝 贡献指南

我们欢迎所有形式的贡献！无论是修复错别字、添加新内容、改进文档结构，还是报告问题。

### 贡献流程

1. **Fork 本仓库**
   ```bash
   # 在 GitHub 上点击 Fork 按钮
   ```

2. **克隆您的 Fork**
   ```bash
   git clone https://github.com/your-username/ai-guide.git
   cd ai-guide
   ```

3. **创建特性分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-fix-name
   ```

4. **进行更改**
   - 编辑或创建 Markdown 文件
   - 遵循现有的文档风格
   - 确保内容准确且有用

5. **提交更改**
   ```bash
   git add .
   git commit -m "描述您的更改"
   ```
   
   提交信息建议格式：
   - `feat: 添加新功能或内容`
   - `fix: 修复错误或问题`
   - `docs: 更新文档`
   - `style: 格式调整`
   - `refactor: 重构内容`

6. **推送到您的 Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **创建 Pull Request**
   - 在 GitHub 上打开您的 Fork
   - 点击 "New Pull Request"
   - 填写 PR 描述，说明您的更改
   - 等待维护者审查

### 内容贡献指南

- **准确性**：确保所有信息准确、最新
- **清晰性**：使用清晰、简洁的语言
- **完整性**：提供足够的上下文和示例
- **格式**：遵循 Markdown 格式规范
- **链接**：确保所有链接有效

### 报告问题

如果发现错误或有问题建议，请：

1. 检查 [Issues](https://github.com/rockyflux/ai-guide/issues) 中是否已有相关问题
2. 如果没有，创建新 Issue
3. 提供详细的问题描述、复现步骤和预期行为

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 🙏 致谢

- [Hugo](https://gohugo.io/) - 强大的静态网站生成器
- [Hugo Book Theme](https://github.com/alex-shpak/hugo-book) - 简洁优雅的文档主题
- [Book of Kiro](https://github.com/kiro-community/book-of-kiro) - 项目结构和主题参考
- 所有贡献者和社区成员

## 📞 联系方式

- **GitHub Issues**: [报告问题或提出建议](https://github.com/rockyflux/ai-guide/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/rockyflux/ai-guide/discussions)
- **语雀文档**: [https://www.yuque.com/rocky2171/ai](https://www.yuque.com/rocky2171/ai)

---

**欢迎来到 AI 编程的未来！🚀✨**

> 如果这个项目对您有帮助，请考虑给仓库点个 ⭐，您的支持是我们持续改进的动力！
