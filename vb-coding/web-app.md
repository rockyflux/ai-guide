# Web 应用

这篇指南介绍如何借助 Codex、Cursor、Claude Code 等 AI 编程工具，选择合适的技术方案，开发并部署一个 Web 应用。不讲解基础语法，重点放在**技术选型、开源项目参考和 AI 开发流程**。

服务器、域名、备案与托管资源可参考[开工准备](./prep.md)。

## 1. 先确定应用类型

不同类型的网站，技术方案差别很大。先明确需求，再选框架。

| 类型 | 常见场景 | 推荐方向 |
|---|---|---|
| 静态网站 | 官网、博客、技术文档 | VitePress、Astro、Hugo |
| 前端应用 | 在线工具、管理后台、数据看板 | Vue 3 + Vite、React + Vite |
| 全栈应用 | SaaS、用户中心、电商、社区 | Next.js、Nuxt |
| AI 应用 | AI 对话、知识库、Agent 工作台 | Next.js / Nuxt + AI SDK |
| 已有后端的项目 | Java 管理后台、企业业务系统 | Vue / React + 现有 API |

选型前先确认三个问题：

- 主要是展示内容，还是需要登录和业务操作？
- 是否需要数据库、文件存储或 AI 能力？
- 是否已有后端服务，计划部署在哪里？

**原则：简单网站不要过度使用全栈框架；已有 Java 后端也不必为了 AI 编程而重写。**

## 2. 静态网站：VitePress、Astro、Hugo

如果主要是文章、博客、产品介绍和技术文档，可以选择静态站生成器。它们通常不需要单独维护后端，部署简单、成本较低。

| 项目 | 特点 | 适合场景 |
|---|---|---|
| [VitePress](https://vitepress.dev/) | Vue + Markdown，文档体验成熟 | 技术文档、知识库、教程 |
| [Astro](https://astro.build/) | 内容优先，可组合 Vue / React 等组件 | 官网、博客、内容网站 |
| [Hugo](https://gohugo.io/) | Go 编写，构建速度快 | 博客、资讯站、企业官网 |
| [Zensical](https://zensical.org/) | Markdown 文档站工具 | 产品文档、开发者文档 |
| [VuePress](https://vuepress.vuejs.org/) | Vue + Markdown | Vue 生态文档 |

**怎么选：**
- 技术文档：优先 VitePress。
- 产品官网、博客：优先 Astro。
- 大型内容站：可以考虑 Hugo。
- 已有项目：没有明显问题就继续使用，不必为了追新而迁移。

## 3. 前端框架与 UI 组件

在线工具和管理后台通常需要 Vue 或 React。确定框架后，再选择对应的 UI 组件体系。

### 前端框架

| 项目 | 特点 | 适合场景 |
|---|---|---|
| [Vue 3 + Vite](https://vuejs.org/) | 上手直观、工程轻量 | 管理后台、工具站 |
| [React + Vite](https://react.dev/) | 生态丰富、组件资源多 | 交互应用、React 项目 |
| [Nuxt](https://nuxt.com/) | Vue 全栈框架，支持 SSR / SSG | Vue 官网、全栈应用 |
| [Next.js](https://nextjs.org/) | React 全栈框架 | SaaS、内容平台、AI 应用 |
| [SvelteKit](https://svelte.dev/docs/kit) | Svelte 全栈开发框架 | Svelte 技术栈项目 |

### UI 组件与设计体系

| 项目 | 适合场景 |
|---|---|
| [Element Plus](https://element-plus.org/) | Vue 管理后台 |
| [TDesign](https://tdesign.tencent.com/) | 企业后台、业务系统 |
| [Ant Design](https://ant.design/) | React 企业级后台 |
| [shadcn/ui](https://ui.shadcn.com/) | React 定制化界面、SaaS |
| [HeroUI](https://www.heroui.com/) | React 现代化界面 |
| [Tailwind CSS](https://tailwindcss.com/) | 自定义页面样式 |
| [assistant-ui](https://www.assistant-ui.com/) | AI 对话界面，不是通用后台组件库 |

推荐组合：

- Vue 管理后台：Vue 3 + Vite + TypeScript + Element Plus。
- React 管理后台：React + Vite + TypeScript + Ant Design。
- React SaaS：Next.js + shadcn/ui。
- AI 对话产品：Next.js + assistant-ui。

一个项目尽量只使用一套 UI 组件体系，不要混装多个组件库。

## 4. 全栈框架与后端

需要登录、数据库和业务接口时，可以选择全栈框架，也可以让前端连接独立后端。

### 全栈框架

| 项目 | 技术栈 | 适合场景 |
|---|---|---|
| [Next.js](https://nextjs.org/) | React + Node.js | React SaaS、AI 应用 |
| [Nuxt](https://nuxt.com/) | Vue + Nitro | Vue 全栈应用 |
| [SvelteKit](https://svelte.dev/docs/kit) | Svelte | Svelte 全栈应用 |
| [TanStack Start](https://tanstack.com/start/latest) | React / TanStack 生态 | 类型安全要求较高的应用 |

React 项目可以优先考虑 Next.js，Vue 项目可以优先考虑 Nuxt。若已有独立后端，不需要为了使用全栈框架而重建服务端。

### 独立 API 服务

| 项目 | 特点 |
|---|---|
| [Hono](https://hono.dev/) | 轻量，支持 Node.js、Bun、Deno、Cloudflare Workers 等环境 |
| [NestJS](https://nestjs.com/) | 模块化结构，适合中大型业务服务 |
| [Elysia](https://elysiajs.com/) | Bun 生态，TypeScript 类型体验好 |
| [Fastify](https://fastify.dev/) | 轻量、高性能的 Node.js API 框架 |
| [Express](https://expressjs.com/) | 简单灵活，生态成熟 |

### 已有 Java 后端怎么办？

如果已经有 Spring Boot 服务，通常直接开发 Vue / React 前端，通过 REST API 对接即可：

```text
浏览器
  │
Vue / React 前端
  │ HTTPS API
  ▼
Java Spring Boot
  ├── MySQL
  ├── Redis
  └── 文件存储 / AI 服务
```

不要为了统一技术栈，重复开发已有的登录、权限和业务接口。

## 5. 数据库与认证服务

如果项目需要保存用户、业务数据和文件，可以考虑托管服务，也可以继续使用已有数据库。

| 项目 | 类型 | 主要用途 |
|---|---|---|
| [Supabase](https://supabase.com/) | PostgreSQL 后端平台 | 数据库、认证、文件存储 |
| [Neon](https://neon.com/) | Serverless PostgreSQL | 托管 PostgreSQL |
| [Turso](https://turso.tech/) | SQLite / libSQL | 轻量应用、边缘场景 |
| [Cloudflare D1](https://developers.cloudflare.com/d1/) | SQLite 数据库 | Cloudflare Workers 应用 |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | 文档数据库 | 文档型数据 |

认证可以选择 [Better Auth](https://www.better-auth.com/)、[Supabase Auth](https://supabase.com/docs/guides/auth)、[Clerk](https://clerk.com/) 或现有企业 SSO。

TypeScript 项目还可以使用 [Drizzle ORM](https://orm.drizzle.team/) 或 [Prisma](https://www.prisma.io/docs/orm) 管理数据库访问。

注意：用户身份和数据权限必须由服务端验证，不能只依靠前端隐藏按钮。文件上传也应设置类型、大小和访问权限限制。

## 6. AI Web 应用

如果要开发 AI 对话、知识库或 Agent 工作台，可以参考以下项目：

| 项目 | 作用 |
|---|---|
| [assistant-ui](https://www.assistant-ui.com/) | AI 对话界面组件 |
| [Vercel AI SDK](https://ai-sdk.dev/) | 模型调用、流式输出、工具调用 |
| [AI Elements](https://ai-sdk.dev/elements) | AI 应用 UI 组件 |
| [LangGraph](https://www.langchain.com/langgraph) | 有状态 Agent 工作流 |

典型结构：

```text
浏览器 AI 对话界面
        │
        ▼
     业务后端
        ├── 用户认证与权限
        ├── 会话和消息存储
        ├── 模型调用与流式响应
        ├── 工具调用 / Agent
        └── 文件处理 / 知识库
```

开发时注意：

- API Key 只保存在服务端。
- 支持流式输出、停止生成和错误处理。
- 会话数据按用户隔离。
- 工具调用设置权限、白名单和超时。
- 对模型调用设置频率和用量限制。

## 7. 如何参考开源项目

不要让 AI 只看项目名称就开始开发。建议按以下顺序提供参考资料：

1. **官方文档**：确认当前版本和 API 用法。
2. **官方示例**：参考项目结构和集成方式。
3. **成熟开源项目**：借鉴登录、权限、表格、文件上传等具体功能。

值得参考的项目：

- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [shadcn/ui](https://github.com/shadcn-ui/ui)
- [assistant-ui](https://github.com/assistant-ui/assistant-ui)
- [Supabase Examples](https://github.com/supabase/supabase/tree/master/examples)
- [Nuxt Examples](https://github.com/nuxt/examples)
- [Hono Examples](https://github.com/honojs/examples)

让 AI 参考时，要求它说明参考了哪些文件、借鉴了什么功能，并确认开源许可证。不要直接复制整个项目，也不要混用不同版本的 API。

## 8. llms.txt：让 AI 更容易理解网站

如果项目包含技术文档、产品说明或开发者文档，可以考虑提供 `llms.txt`。

规范：[llmstxt.org](https://llmstxt.org/)

通常放在网站根目录：

```text
https://example.com/llms.txt
```

常见文件：

| 文件 | 用途 |
|---|---|
| `llms.txt` | 网站介绍、重要页面和文档索引 |
| `llms-full.txt` | 可选，集中整理完整文档 |

可以手动编写，也可以在构建时自动生成，或让 AI 扫描项目文档后生成。

### AI 生成提示词

```text
请为当前 Web 项目生成符合 https://llmstxt.org/ 规范的 llms.txt。

要求：
1. 阅读 README、项目目录、站点配置和实际页面路由。
2. 整理网站简介、核心功能和重要文档链接。
3. 只收录真实存在且适合公开访问的页面。
4. 不要包含私有接口、密钥、内部页面或用户数据。
5. 使用简洁的 Markdown，不要虚构内容。
6. 将文件放到最终发布后的站点根目录，确保 /llms.txt 可以访问。
7. 检查链接有效性，并说明生成路径。

先分析项目，再生成文件，不要修改无关内容。
```

## 9. 部署上线

常见部署平台：

| 平台 | 适合场景 |
|---|---|
| [Vercel](https://vercel.com/) | Next.js、前端和全栈应用 |
| [Cloudflare](https://www.cloudflare.com/) | 静态站、边缘 API、全栈应用 |
| [Netlify](https://www.netlify.com/) | 官网、博客、静态站 |
| [GitHub Pages](https://pages.github.com/) | 文档站、项目主页 |
| [Render](https://render.com/) | Node.js、Docker 服务 |
| 自建 VPS | Nginx、Docker、独立 API 服务 |

部署前检查：

- 配置生产环境变量，不要把密钥提交到 Git。
- 正式服务启用 HTTPS。
- 检查 API 权限、跨域和文件上传限制。
- 配置数据库备份和错误日志。
- 面向中国大陆用户时，确认域名、服务器和业务所需的备案及合规要求。

服务器、域名和备案的详细说明见[开工准备](./prep.md)。

## 10. 给 AI 编程工具的提示词

以下提示词可以用于 Codex、Cursor、Claude Code 等工具。建议分阶段执行，不要一次性要求 AI 开发完整产品。

### 提示词一：项目调研与技术选型

```text
请作为 Web 架构师，帮我分析并规划一个 Web 应用。

项目需求：
- 产品用途：[填写]
- 核心功能：[填写]
- 是否需要登录：[是 / 否]
- 是否需要数据库：[是 / 否]
- 是否需要 AI 功能：[填写]
- 是否已有后端：[Java / Node.js / 无]
- 部署环境：[填写]

要求：
1. 检查当前项目目录和已有代码，不要覆盖现有内容。
2. 判断项目适合静态站、前端应用还是全栈应用。
3. 推荐合适的前端、后端、UI 组件和数据库方案。
4. 优先复用已有服务，不要重复建设。
5. 参考官方文档，确认技术方案和版本。
6. 输出架构图、技术选型理由和开发计划。

本阶段只做调研和规划，不要修改代码。
```

### 提示词二：项目开发

```text
请根据已经确认的技术方案开发当前 Web 项目。

要求：
1. 先阅读项目结构、README 和现有代码。
2. 沿用已确定的框架和 UI 组件库，不要擅自更换技术栈。
3. 先完成公共布局、导航和基础组件。
4. 按页面逐步实现业务功能和交互。
5. 接入真实 API；暂时没有接口时，将 mock 数据独立管理。
6. 处理加载、空数据、错误和无权限状态。
7. 每完成一个阶段，运行检查并修复问题。
8. 不要修改与当前需求无关的代码。

先给出实施计划，确认后再开始开发。
```

### 提示词三：接入后端与 AI 功能

```text
请为当前 Web 项目接入后端 API 和 AI 能力。

后端信息：
- API 地址：[填写]
- 接口文档：[填写]
- 认证方式：[Cookie / JWT / SSO]
- AI 模型服务：[填写]
- 需要的功能：[填写]

要求：
1. 先阅读接口文档，不要猜测接口字段。
2. 统一封装 API 请求和异常处理。
3. 正确处理登录、退出和权限验证。
4. 模型 API Key 只能保存在服务端。
5. 支持流式响应、停止生成和错误提示。
6. 会话和文件按用户隔离。
7. 工具调用设置权限和白名单。
8. 完成后验证真实接口和主要业务流程。

先给出实施方案，再分阶段修改代码。
```

### 提示词四：上线前检查

```text
请检查当前 Web 项目是否具备上线条件。

重点检查：
1. 项目能否正常安装、运行和构建。
2. 页面、按钮和主要业务流程是否完整。
3. 登录、权限和数据隔离是否正确。
4. 是否存在密钥泄露、未授权接口等安全问题。
5. 数据库备份、环境变量和 HTTPS 是否配置。
6. 手机和桌面端显示是否正常。
7. 是否存在明显错误、死链和无效交互。

先输出问题清单，按严重程度排序，再修复问题。
不要虚构测试结果，完成后重新执行构建和相关测试。
```

## 11. 推荐开发流程

| 阶段 | 主要工作 |
|---|---|
| 1. 需求梳理 | 明确用户、功能和使用场景 |
| 2. 技术选型 | 确定框架、UI、后端和数据库 |
| 3. UI 设计 | 确定页面结构和交互 |
| 4. 工程搭建 | 初始化项目和开发环境 |
| 5. 功能开发 | 按页面和业务模块逐步实现 |
| 6. 接口联调 | 接入登录、数据库和真实 API |
| 7. 测试部署 | 检查问题并发布上线 |

**核心思路：先明确需求，再选一套合适的技术方案；让 AI 参考官方文档和成熟开源项目，分阶段完成开发与验证。不要堆叠技术，也不要把代码生成完成当成产品已经上线。**

## 参考资料

- [VitePress](https://vitepress.dev/) · [Astro](https://astro.build/) · [Hugo](https://gohugo.io/)
- [Vue](https://vuejs.org/) · [React](https://react.dev/) · [Next.js](https://nextjs.org/) · [Nuxt](https://nuxt.com/)
- [Element Plus](https://element-plus.org/) · [Ant Design](https://ant.design/) · [shadcn/ui](https://ui.shadcn.com/)
- [Hono](https://hono.dev/) · [NestJS](https://nestjs.com/) · [Supabase](https://supabase.com/)
- [assistant-ui](https://www.assistant-ui.com/) · [Vercel AI SDK](https://ai-sdk.dev/) · [LangGraph](https://www.langchain.com/langgraph)
- [llms.txt](https://llmstxt.org/) · [开工准备](./prep.md)
