---
title: AI 编程省钱之道
weight: 24
bookToc: false
noTocArea: true
bookHidden: false
---


## 一、**AI 编程省钱之道**

> **2026 年更新**：主流工具已从「固定请求次数」转向「订阅 + 用量/积分」混合计费；免费托管推理额度普遍收紧。订阅选型见 [AI Coding Plan]({{< relref "ai-programming/coding-plan" >}})；中转与 API 渠道见 [什么是 API 中转站]({{< relref "ai-programming/api-relay-station" >}})。

AI 编程省钱之道的核心在于**最大化利用免费或低成本的 AI 模型和工具，并优化 AI 交互方式，以节省令牌消耗和提高效率**。

### 1、免费 AI 模型自助餐 —— 网页AI聊天界面

充分利用各种免费的AI聊天界面进行规划和咨询。

首先，打开浏览器，加载多个标签页，分别指向强大AI模型的免费版本，以便获得多种视角和能力。常用的免费AI模型和平台包括：

• **[z.ai](https://chat.z.ai/)**：网页版可免费使用 **GLM-5 / GLM-4.7**，编程与 Agent 能力突出，适合规划与代码讨论。

• **[Kimi.com](https://kimi.com/)**：**Kimi K2.5** 长上下文与文档理解强，网页版有免费额度，适合需求梳理与大文件分析。

• **[chat.qwen.ai](https://chat.qwen.ai/)**：**Qwen3.5 Coder / Qwen3 Coder** 等编码向模型，网页免费使用，适合代码生成与调试。

• **[Google AI Studio](https://aistudio.google.com/)**：**Gemini 3 / 2.5 Pro / Flash** 通常有较高免费额度，适合规划、调试与多模态任务；[Build apps with Gemini](https://aistudio.google.com/apps) 适合 React/TypeScript 项目原型。

• **[OpenAI Playground](https://platform.openai.com/playground)**：**GPT-5.2 / GPT-5 mini** 等，部分额度与数据共享政策相关，适合快速验证 Prompt。

• **Poe.com**：每日免费积分，可试用 Claude Opus 4.6、GPT-5.2 等高级模型。

• **OpenRouter**：提供部分免费模型（如 DeepSeek、Llama 等），也支持按量付费接入多家模型。

• **ChatGPT**：免费档可用 **GPT-5 mini** 等轻量模型，高级模型有额度限制。

• **Microsoft Copilot**：集成 **GPT-5** 系列，免费网页版适合日常问答与轻量编程。

• **GitHub Copilot Free**：每月 **2,000 次补全** + 有限 Chat/Agent 用量，模型含 **Haiku 4.5、GPT-5 mini** 等（[官方套餐](https://github.com/features/copilot/plans)）。

• **Perplexity AI**：研究型问答，适合技术调研与资料检索。

• **DeepSeek**：网页端可免费使用 **DeepSeek V3.5 / R1**，推理能力强，需注意上下文与速率限制。

• **Grok.com**：少量免费 **Grok 4** 额度，适合实时信息与通用对话。

• **lmarena.ai**：LLM 竞技场，可免费对比 **GPT-5.2、Claude Opus 4.6、Sonnet 4.6** 等模型输出。

• **Claude.ai**：免费档可用 Haiku 等模型，高级模型与 Claude Code 需 Pro（$20/月）及以上。



### 2、更智能、更经济的AI编程代理工具

**在网络聊天界面直接使用 AI 通常比通过  IDE 或 AI编程代理（如 Cline,Cursor,Trae,Copilot等）更擅长解决问题和提出解决方案，但是如果用于AI编程，那么AI Agent将更专注于上下文工程和工具的调用，更适合编码和程序开发。**

> AI 模型在接收的文本越少时通常越聪明。复杂的输入，例如AI代理工具的长篇指令或与问题无关的大量上下文，会消耗模型的更多”智能“，导致其解决实际问题的能力下降。



---

* **超长上下文 AI 模型**（2026 年 3 月）：

| 模型 (Model)              | 开发者 (Developer)     | 最大上下文窗口 (Max Context Window)  | 特点（Features）                                   |
| ------------------------- | ---------------------- | ------------------------------------ | -------------------------------------------------- |
| **Gemini 3 Pro**          | Google                 | 100 万 (1M) Tokens                   | 上下文最大，多模态与架构规划能力强，AI Studio 有免费额度 |
| **Qwen3.5 / Qwen3**       | Alibaba (阿里云)       | 25.6 万 (256k) / 100 万 (扩展 1M)    | 编码性价比高，国内 Coding Plan 接入成本低          |
| **GPT-5.2**               | OpenAI                 | 40 万 (400k) Tokens                  | 综合能力强，Codex 生态集成好                       |
| **Claude Opus/Sonnet 4.6** | Anthropic              | 20 万 (200k) Tokens                  | Agent 与代码推理顶尖，订阅/API 价格偏高            |
| **Kimi K2.5**             | Moonshot AI (月之暗面) | 20 万+ (200k+) Tokens                | 长文档与 Agent 任务表现好，国内访问稳定            |
| **GLM-5**                 | Zhipu AI (智谱)        | 约 20 万 (200k) Tokens                 | 国产开源标杆，GLM Coding Plan 月费 49 元起        |

* **AI 编程代理工具**：

​	IDE：Cursor、Trae、Windsurf、Zed、Kiro  

​	插件：Cline（Roo Code、Kilo Code）、Augment、GitHub Copilot  

​	CLI：Claude Code、Codex CLI、Gemini CLI、Qwen Code、OpenCode

基于GUI的IDE（如VSCode），即使是AI原生的，在自动化和可脚本化方面也存在固有限制。而命令行是自动化、脚本编写和复杂工具链的原生环境。通过创建CLI代理，拥有最大的可脚本化性和与基于shell的工作流的集成，AI公司为开发者提供了一个可以被直接集成到这些自动化工作流中的“强大工具”。这些工具的核心功能围绕着代理式推理、工具使用和复杂的多文件编辑。这些工具的架构通常也为其他产品奠定了基础。

#### AI 编程代理工具主要特点

| 类别 (Category)             | 工具名称 (Tool)               | 主要特点                                                     |
| --------------------------- | ----------------------------- | ------------------------------------------------------------ |
| **AI 原生 IDE**             | `Cursor`                      | AI 优先的 VS Code 分支；Pro $20/月含一定用量，Auto 模式按量计费；Pro+ $60、Ultra $200。 |
|                             | `Zed`                         | 由 `Atom` 联合创始人打造的高性能、多玩家协作的开源代码编辑器，用Rust编写，内置了AI功能，性能优秀、界面整洁。在macOS/Linux系统推出，Windows可自己编译。 |
|                             | `Kiro`                        | AWS出品的一款文档优先的AI代理IDE，基于“规范驱动开发”（Spec-Driven Development, SDD），AI根据需求文档自动规划并执行编码任务，适合需要前期设计的复杂项目。 |
|                             | `Windsurf`                    | Windsurf是一个“代理式IDE”，旨在通过在人类和其AI代理“Cascade”之间创建无缝的协作体验，让开发者保持在“心流状态” 。 |
|                             | `Trae`                        | 字节跳动出品，免费档可访问高级模型；Pro 约 $10/月，适合国内开发者低成本试用。 |
| **IDE 插件**(Agent Plugins) | `GitHub Copilot`              | 2026 年改为 **订阅 + GitHub AI Credits** 按量计费；Pro $10/月含 $15 积分，补全无限，Agent/Chat 消耗积分。 |
|                             | `Augment`                     | 专注于代码搜索和上下文感知的AI插件，提供超强的仓库检索，能根据你的代码库提供精准提示和自动化编码。 |
|                             | `Kilo Code( Cline、Roo Code )` | 拥有Cline的易用性和Roo先进的上下文处理能力 ，通过简单界面来提供多模式功能（架构师、编码员、调试员），可自定义代理模式。编程任务高度自动化，支持多种模型自定义和MCP工具。内置提示词将一个命令拆分为具体小任务，高效进行编码。 |
| **命令行工具**(CLI)         | `Codex CLI`                   | OpenAI 官方终端 Agent，与 ChatGPT Plus/Pro 订阅共享额度，适合 OpenAI 生态重度用户。 |
|                             | `Gemini CLI`                  | Google 开源 CLI，OAuth 登录有免费额度（约 1,000 次/天、60 次/分钟，以官方为准）。 |
|                             | `Claude Code`                 | Anthropic 终端 Agent，包含在 Claude Pro（$20/月）及以上；Max $100/$200 适合高频编码。 |
|                             | `Qwen Code`                   | 开源 CLI，针对 Qwen3-Coder 优化；托管 OAuth 免费推理已于 2026 年 4 月结束，需自备 API Key 或国内 Coding Plan。 |
|                             | `OpenCode`                    | 开源多模型 CLI，官方 [OpenCode Go](https://opencode.ai/zh/go) 首月 $5、后续 $10/月，支持任意代理接入。 |



* **AI Agent网站，快速构建全栈项目：**

[Jules](https://jules.google.com/) 、[Bolt](https://bolt.new/)、[v0](https://v0.app/)、[Trickle](https://trickle.so/)  每天都有免费额度构建全栈的项目。

[Z.AI](https://chat.z.ai/) 的全栈开发功能，每个用户两个工作区。

---

### 3、混合方法：优质规划 + 经济执行

**与 AI 协作编程，本质上是一场高质量的对话。对话的质量，直接决定了产出的质量。高质量的命令，能极大地提升开发效率、代码质量。**

AI 的能力上限受限于你提问的水平。模糊的指令导致猜测，精确的指令引导创造。这不仅仅是减少 Token 消耗，更是为了节约你自己的时间和精力。

1. **明确开发意图**

首先要明确开发的目的，知道你的项目该做什么，要让AI怎么进行开发。可以提前在免费的AI网页聊天界面使用高级模型提前规划👌开发需求和流程，理清楚思路再让AI Agent进行开发。

2. **提升 Prompt 质量**

要提高命令的精确度，减少没必要的prompt，避免额外消耗更多token。一句话编程无法让AI精确的执行你想要的代码编写，AI只能猜测你的需求，可能增加更多没必要的输出。

你不能只告诉AI 

```
“我要开发一个博客网站”
```

这样AI不知道具体要干什么，只能猜测你的需求。

而是要把具体需求告诉AI，比如

```
“制作一个Next.js + TypeScript博客网站，要有前后端，首页简洁好看现代化。包含三个页面，首页，分类页，关于页面，全局导航栏组件TopNav左侧显示网站logo，右侧显示导航链接“首页”，”分类“，“关于”和全局深色/亮色主题切换按钮组件，左右两端对其。首页顶部是一个 Hero 区域，显示个人头像、简介和文字，背景是Banner图片。下方是垂直的文章列表以卡片组件BlogCard形式显示，卡片纵向排列，采用左右图文交错的Z字形布局。每个卡片都包含特色图片、日期、标题和摘要。后端提供CRUD API，数据库使用PostgreSQL，数据库创建一个表博客blog，要有title、slug、content、summary、header、tags、created_at字段，一个表标签tag，要有name、slug字段，请把数据库表设计用文档的形式输出出来，不要创建数据库，后续我会自己建表并提供数据库链接。”
```

然后通过数据库MCP让AI依照数据库文档建表，提供给AI Agent接入到项目后端。像这样先把网站的最小可行产品（MVP）制作好，然后再继续完善和开发其他页面。

与 AI 协作的精髓，在于将你大脑中的蓝图，通过结构化的语言，精确地传递给 AI。

3. **分解任务，化繁为简**

不要让 AI 一次性完成太庞大复杂的任务，尽可能的拆解为粒度小、独立的任务。AI 模型在接收的文本越少时通常越聪明，而一个项目上万行的的代码量足以让AI手忙脚乱，虽然各大AI Agent都在检索代码、压缩上下文窗口的方向下功夫，但是一旦上下文过长，AI就会出现”降智“，AI会陷入混乱，忘记自己在干嘛，而且上下文使用量越大，往往消耗的token越多，而且AI还容易陷入死循环。所以最好拆分出小任务给AI一个一个进行，每次功能完成后再进行调试验证，测试完成然后进行代码提交。相当于有个存档点，这样如果开发途中发生情况，比如AI进入死循环、删除代码文件、污染其他代码等等，我们就能`git reset`回到存档点！如果是复杂的功能比如解决issue，可以`checkout`创建一个新的独立分支，等到新代码验证完全没问题后，再`merge`到主分支。

这样既能提高开发效率，又能降低token的消耗，减少费用支持。

4. **善用工具，高效编程**

使用MCP工具高效地进行AI编程开发。”工欲善其事，必先利其器“，MCP工具的调用给AI Agent提供了很多额外能力，让AI不局限于现有的模型数据集。



#### 开发工作流程

1、**规划确定开发需求和文档**

* 利用智能/免费的网页模型进行**规划和头脑风暴**（如 Gemini 3、GPT-5.2、Claude Opus 4.6），确定方法、规划步骤、识别库等。

* 生成详细的**代理提示词**，让智能模型为 AI 编程代理（如 Cline、Cursor）编写任务列表，并通过其他 AI 进一步优化。

* 使用性价比高的主力模型（如 **GLM-5、Kimi K2.5、Qwen3.5 Coder、GPT-5 mini**）在代理工具中执行实际的代码编写和文件编辑。

> **Claude Opus/Sonnet 4.6** 仍是 Agent 与代码推理的顶尖选择，搭配 Claude Code 体验最好，但订阅与 Token 成本最高。**Gemini 3 Pro** 综合能力均衡，AI Studio 有免费额度，适合规划与调试。**GPT-5.2** 编码与 Agent 能力均衡，Codex 生态集成好。**国内 Coding Plan**（阿里云百炼、腾讯云等 Lite 档 7.9 元/月起）是多模型低成本接入的首选路径。

**2、问题解决与调试**：GPT-5.2、GLM-5、Claude Sonnet 4.6（Copilot/网页免费额度）、Gemini 3 Pro。

**3、实际编码执行**：Claude Sonnet 4.6（预算充足）、Gemini 3 Flash、Qwen3.5 Coder、GLM-5、Kimi K2.5。

**4、测试分析修复代码**：GPT-5.2、Gemini 3 Pro、GLM-5。

**5、代码审查和发布**：GitHub Copilot 提供 Agent 代码审查（消耗 AI Credits）；[CodeRabbit](https://www.coderabbit.ai/) 免费版每天有少量审核次数。



####  **BMad-Method：通用 AI 代理框架**

使用**[BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)** 进行规划，**BMad** 主要的两个功能：
1. 专门的智能体（分析师、项目经理、架构师）与您协作，创建详细、一致的产品需求文档和架构文档。通过先进的提示工程和人工循环优化，这些规划智能体生成的全面规范远远超出了通用的 AI 任务生成。
2. 上下文工程化开发：Scrum Master 代理随后将这些详细计划转化为超详细的开发故事，其中包含 Dev 代理所需的一切——完整上下文、实现细节和直接嵌入在故事文件中的架构指导。



**安装BMad只需运行以下任一命令：**

```bash
npx bmad-method install
# OR if you already have BMad installed:
git pull
npm run install:bmad
```



这里贴一下用户文档指南，这是一个标准的全新项目流程：**[BMAd Code 用户指南](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/user-guide.md)**，如果您打算在现有项目（一个已经存在的项目）中使用 BMad 方法，请查阅 **[在现有项目中工作](./working-in-the-brownfield.md)**。

**全新项目规划最好先在 Gemini 网页或 AI Studio 中进行（免费），不会在 IDE 中消耗大量 Token。**

这里讲一下全新项目规划的流程：

​	在开发开始之前，BMad 遵循一个结构化的规划工作流。为实现**成本效益**，该流程最好在 Web UI 中完成。

**a.在AI的Web界面生成开发需求文档和技术文档**

```markdown
如果您想在 Web 上使用 Claude（Sonnet 4.6 或 Opus 4.6）、Gemini Gem（Gemini 3 Pro）或自定义 GPT 进行规划：

1.  导航至 `dist/teams/`
2.  复制 `team-fullstack.txt` 
3.  创建新的 Gemini Gem 或 CustomGPT
4.  上传文件并附上说明：“您关键的操作说明已附上，请严格遵守角色设定”
5.  输入 `/help` 查看可用命令
```

将这个[*文件*](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/dist/teams/team-fullstack.txt) 作为提示词或者知识库放入AI助手中，然后输入`/help` 可以查看所有命令。输入命令如 `*analyst` 这样的代理直接开始创建简报。然后依照说明开始进行项目规划，比如输入`*create-project-brief “我想使用Next.js 开发一个博客网站”`让AI开始分析创建项目简报，接着跟着流程一步一步来就行，具体流程[参考](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/user-guide.md#the-planning-workflow-web-ui-or-powerful-ide-agents)。

**b.Web UI 到 IDE 的转换**

关键转换点：一旦产品负责人确认文档对齐，您必须从 Web UI 切换到 IDE 以开始开发工作流：

```markdown
1.  将文档复制到项目：确保 `docs/prd.md` 和 `docs/architecture.md` 位于您项目的 `docs` 文件夹中（或您在安装时指定的自定义位置）。
2.  切换到 IDE：在您首选的代理 IDE 中打开您的项目。
3.  文档分片：使用产品负责人（PO）代理先对产品需求文档（PRD）进行分片，然后对架构文档进行分片。
4.  开始开发：启动接下来的核心开发周期。
```

将在Web生成的的文件复制到项目的docs文件夹中，先确保项目已经安装BMad了，如果没有在目录终端输入`npx bmad-method install`安装。文档分片工作建议在IDE中进行，毕竟文件太多在Web不方便。使用/po进入产品负责人角色，执行命令 `*shard docs/prd.md`和`*shard docs/architecture.md`分别对需求文档和技术文档进行分片 。接下来具体开发的[流程图](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/user-guide.md#the-core-development-cycle-ide)。

**c.用户故事创建 (Scrum Master)**

```bash
1.  开始新的聊天/对话
2.  加载 SM (Scrum Master) 代理
3.  执行: `*draft` (运行 `create-next-story` 任务)
4.  审查生成的故事，位于 `docs/stories/`
5.  更新状态: 将状态从“草稿 (Draft)”更改为“已批准 (Approved)”
```

在新聊天窗口，接下来的开发[流程](https://github.com/Mrzhuo2022/BMAD-METHOD-zh-CN/blob/main/docs/enhanced-ide-development-workflow.md)，使用/sm 进入Scrum Master角色，执行命令`*draft` 生成开发故事。在docs/stories/文件夹下面的故事觉得没问题后将内容中的**Status**状态改为`Approved`。

**d.用户故事实现 (开发人员)**

```bash
1.  开始新的聊天/对话
2.  加载 Dev (开发人员) 代理
3.  执行: `*develop-story {selected-story}` (运行 `execute-checklist` 任务)
4.  审查生成的报告，位于 `{selected-story}`
```

在新聊天窗口，使用/dev选择进入开发人员角色，执行命令`*develop-story 故事名`，让AI进行开发。

**e.用户故事审查 (质量保证)**

```bash
1.  开始新的聊天/对话
2.  加载 QA (质量保证) 代理
3.  执行: `*review {selected-story}` (运行 `review-story` 任务)
4.  审查生成的报告，位于 `{selected-story}`
```

在新聊天窗口，使用/qa进入质量测试角色，`*review 故事名`，进行代码审查测试。

提交并推送变更

1.  **提交变更**
2.  **推送到远程仓库**

 重复直至完成

-   **SM**: 创建下一个故事 → 审查 → 批准
-   **Dev**: 实现故事 → 完成 → 标记为待审查
-   **QA**: 审查故事 → 标记为完成
-   **提交**: 所有变更
-   **推送**: 到远程仓库
-   **继续**: 直到所有功能实现



使用 BMad-Method 进行现有项目开发，为修改现有系统提供了结构和安全性。关键在于通过文档提供全面的上下文，使用考虑集成需求的专用模板，并遵循尊重现有约束同时又能推动进展的工作流。

请记住：**先文档化，仔细规划，安全集成**

---

***AI 编程的成本节省技巧（2026）：***

**国内 Coding Plan**：阿里云百炼、腾讯云、火山引擎等 **Lite 档 7.9–9.9 元/月**，多模型聚合、IDE 兼容好，是个人开发者最低成本路径之一。详见 [AI Coding Plan]({{< relref "ai-programming/coding-plan" >}})。

**Gemini CLI**：OAuth 登录仍有免费额度（约 1,000 次/天、60 次/分钟，以 [官方文档](https://github.com/google-gemini/gemini-cli) 为准）。

**Qwen Code**：CLI 本身开源免费，但托管 OAuth 免费推理已于 **2026 年 4 月**结束；可接国内 Coding Plan 或自备 API Key。

**[Claude Code Router](https://github.com/musistudio/claude-code-router)**：将 Claude Code 路由到 GLM-5、Kimi K2.5 等更便宜的 OpenAI 兼容 API。

**Google AI Studio**：Gemini 3 / 2.5 系列仍有较高免费 API 额度，适合规划与非生产验证。

**GitHub Copilot**：Pro **$10/月**含 **$15 AI Credits** + 无限补全，性价比仍高；Pro+ $39（$70 积分）、Max $100（$200 积分）适合重度 Agent 用户。[GitHub Education](https://github.com/education) 学生可免费获得 Copilot Pro。

**Cursor**：Pro **$20/月**含一定模型用量；**Auto 模式已不再普遍无限**，超额按量计费。Pro+ $60、Ultra $200。学生可领 [一年 Cursor Pro](https://cursor.com/students)。

**Trae**：仍有免费档（含高级模型试用），Pro 约 **$10/月**，Lite **$3/月**，适合预算有限的国内开发者。

**Claude Code**：包含在 Claude Pro（**$20/月**）；重度编码建议 Max 5x（$100）或 Max 20x（$200）。

**OpenCode Go**：官方低成本订阅，首月 **$5**、后续 **$10/月**，支持任意代理。

**OpenRouter / 中转 API**：部分模型有免费档；国内中转站见 [coding-plan 第三方渠道]({{< relref "ai-programming/coding-plan" >}}) 与 [API 中转站]({{< relref "ai-programming/api-relay-station" >}})。

**新用户试用**：各工具常有 7/14 天 Pro 试用，可轮换体验后选定主力工具。



***MCP工具：***

[Context7](https://github.com/upstash/context7)  最新技术文档上下文。

[mcp-feedback-enhanced](https://github.com/Minidoracat/mcp-feedback-enhanced) 反馈增强，进行交互式用户反馈和命令执行。

[Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)  通过结构化的思维流程提供用于动态且反思性问题解决的工具，让 AI 渐进式思考。

[mcp-shrimp-task-manager ](https://github.com/cjo4m06/mcp-shrimp-task-manager) 通过结构化的工作流程引导，协助 Agent 系统性规划程序开发步骤，强化任务记忆管理机制，有效避免冗余与重复的编程工作。

[firecrawl-mcp-server](https://github.com/mendableai/firecrawl-mcp-server) LLM友好型爬虫工具。提供免费额度。

[supabase-mcp](https://github.com/supabase-community/supabase-mcp) 和 [neon](https://github.com/neondatabase/neon) PostgresSQL数据库MCP。提供免费额度数据库功能。

[mcp-chrome](https://github.com/hangwin/mcp-chrome) 让AI操作有账号状态的Chrome浏览器自动化工具

[claude-context](https://github.com/zilliztech/claude-context) 将整个代码库作为任何代码代理的上下文。

[Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP)

[notion-mcp-server](https://github.com/makenotion/notion-mcp-server)

合理地调用MCP工具进行协作编码可以让Agent的编码能力和开发效率更上一个台阶！

---

> I don’t care how the code got in your IDE. 我不在乎代码是如何进入你的 IDE 的。
>
> I want you to care. 我希望你在乎。
>
> I want people to care about quality, I want them to care about consistency, I want them to care about the long-term effects of their work. LLMs are engineering marvels, and I have the utmost respect for the people who’ve created them. But we still need to build software, not productionize prototypes. 我希望人们关心质量，我希望他们关心一致性，我希望他们关心自己工作的长期影响。LLMs 是工程奇迹，我对创造它们的人怀有最崇高的敬意。但我们仍然需要构建软件，而不是将原型产品化。
>
> Write better prompts. Give better descriptions. Tell the LLM what library to use. Give it examples to follow. Write smaller files. There are no new principles - follow the ones that already exist. 编写更好的提示。提供更好的描述。告诉 LLM 使用哪个库。给它例子来遵循。编写更小的文件。没有新的原则——遵循已经存在的原则。
>
> Don’t leave a codebase’s maintainability to the weights of a model. 不要将代码库的可维护性交给模型的权重。
>
> ——[I Know When You're Vibe Coding](https://alexkondov.com/i-know-when-youre-vibe-coding/)



## 二、独立开发服务部署及低成本的“穷鬼方案”

> **2026 年更新**：Vercel Pro 改为「$20 席位 + 用量积分」混合计费；Supabase 按组织计费且 Pro 含 $10 计算积分；Neon 免费档为 100 CU-hours/项目；Clerk 免费档升至 **50,000 MRU/应用**。以下额度以各平台官方页面为准，部署前请再次核对。

本方案主要面向**盈利或准备盈利的 Web 端全栈开发项目**，目标是控制成本，快速迭代和验证产品。

### 1、最新技术栈选择

**Next.js** 是目前推荐的全栈开发框架库，因为它继承了React生态，活跃度高，有大量国内外开源库和平台优先支持，AI生成代码质量也更高。还能一键部署到 Vercel 平台直接进行项目服务启动。

**独立开发者在选择技术栈时，为何 Next.js 是首选？**

Next.js 在独立开发中被推荐为首选的全栈开发框架，主要基于以下原因：

- **React 生态优势**：Next.js 基于 React 生态系统，而 React 生态的活跃度是目前最好的。这意味着有大量的国内外开源库和平台对 Next.js 提供第一优先级支持。
- **资源丰富性**：无论开发人员有什么需求或选择什么平台，寻找相关的开源库和平台文档支持都最为方便。
- **AI 编程友好**：由于生态系统活跃且平台文档齐全，AI 和 AI IDE 在为 Next.js 编写代码时，代码质量更高，Bug 更少，更符合要求。AI更擅长 React 和 TypeScript 编程语法。
- **灵活性与多样化需求支持**：Next.js 对不同的业务需求非常友好，支持 SSR (Server-Side Rendering)、SSG (Static Site Generation)、ISR (Incremental Static Regeneration) 等多种渲染模式，可以满足大多数 Web 业务场景的需求。



**通用Next.js技术选型**：经过测试可部署在几乎任何平台，并涵盖大多数SaaS需求：

+ **数据库**：Drizzle ORM (轻量级，性能优于Prisma，支持多种数据库)

+ **鉴权**：Better Auth (全面，支持多种鉴权方式，文档好)

+ **支付**：Stripe + Creem (或Lemon Squeezy)

+ **邮件**：React Email + Resend (邮件发送服务)

+ **对象存储**：S3 / R2

+ **博客/文档**：Fumadocs with MDX support

+ **国际化**：Next-intl

+ **暗色主题**：Next-themes

+ **Analytics**：vanilla-cookieconsent + GA + umami + plausible

+ **UI/UX**：Tailwind CSS + Shadcn/UI + Radix UI + Framer Motion

+ **State管理**：Zustand + TanStack Query + React Hook Form

+ **类型安全**：Full TypeScript + Zod validation

+ **Lint & Formatter**：Biome (使用Rust，性能更好，配置更简单)

### 2、部署方案选择

针对成本敏感的用户，有三大方向：

#### 方案一：利用各大云平台的免费额度

  **优点**：完全0成本启动，无需维护服务器和备份，满足初期增长和突发流量。

  **缺点**：免费额度有限，超出后收费通常较高。部分平台免费额度不支持商业项目（如Vercel）。

1. **入门级组合（项目初期，无收入）**：

   部署：Vercel

   数据库：Supabase 或 Neon 

   认证：Clerk 或 Better-Auth 自行实现

   存储：Cloudflare R2 或 Supabase Storage

   邮件：Resend

   **月成本：$0 (在免费额度内)**

   

2. **小型盈利组合（小型商业项目）**：

   部署：Vercel Pro（**$20/月**席位 + 用量积分）

   数据库 + 认证：Supabase Pro（**$25/月**，含 $10 计算积分，覆盖一个 Micro 实例）

   存储：Cloudflare R2

   邮件：Resend

   支付：Lemon Squeezy（**5%** + **$0.50**/笔）

   **预估月成本：$45（固定）+ 支付费用 + 超额用量**

3. **稳定运营组合（小型商业项目）**

   部署：Vercel Pro（**$20/月**）

   数据库：Neon Launch（按量付费，无月最低消费）或 Supabase Pro

   认证：Clerk Pro（**$25/月**，年付 **$20/月**）

   存储：Cloudflare R2

   邮件：Resend Pro（**$20/月**，50,000 封）

   支付：Stripe（**2.9% + $0.30**/笔，美国标准费率）或 Creem（**3.9% + $0.40**/笔）

   **预估月成本：$65–150 + 支付费用 + 超额用量**

具体平台免费额度（2026 年 3 月，以官方为准）：

* **Vercel Hobby（部署）**：100 GB 带宽/月、100 万次函数调用、4 CPU-hrs 活跃计算；**仅限非商业项目**，商业用途需 Pro。

* **Vercel Pro**：**$20/月**席位 + **$20 用量积分**（可用于超额带宽、函数等）；含 1 TB 带宽等更高配额，超出按量计费（[官方定价](https://vercel.com/pricing)）。

* **Railway（部署）**：新用户 **30 天试用 $5 积分**（无需信用卡）；之后 Free 档约 **$1/月**积分，Hobby **$5/月**含 $5 用量，按 vCPU/RAM 计费。

* **Fly.io（部署）**：无永久免费计划，按资源计费；小规模月账单可能较低，但无官方免费承诺。

* **Supabase Free（数据库 + Auth + Storage）**：500 MB 数据库、**50,000 MAU**、5 GB 出口流量、1 GB 文件存储；最多 **2 个活跃项目**；**闲置 1 周自动暂停**（[官方定价](https://supabase.com/pricing)）。

* **Supabase Pro**：**$25/月**（组织级），含 **$10 计算积分**（覆盖一个 Micro 实例）；8 GB 磁盘、250 GB 出口、100 GB 存储、100K MAU。

* **Neon Free（数据库）**：每项目 **100 CU-hours**、0.5 GB 存储、5 GB 出口、10 个分支；**5 分钟无活动自动休眠**（scale-to-zero）；Launch/Scale 按量付费、无月最低消费（[官方定价](https://neon.tech/pricing)）。

* **Upstash（缓存/队列）**：Redis 免费档约 **500,000 命令/月**；Kafka 等有独立免费额度（以控制台为准）。

* **Clerk Hobby（身份认证）**：**50,000 MRU/应用**（月留存用户，非简单 MAU）、无限应用数；免费档会话固定 **7 天**有效期；Pro **$25/月**（年付 $20/月，[官方定价](https://clerk.com/pricing)）。

* **Cloudflare R2（对象存储）**：10 GB 存储/月，**无出口流量费**；读写操作有免费配额（[R2 定价](https://developers.cloudflare.com/r2/pricing/)）。

* **Resend（邮件）**：**3,000 封/月**免费，每日上限 100 封；Pro **$20/月**含 50,000 封（[官方定价](https://resend.com/pricing)）。

#### 方案二：完全利用 Cloudflare 平台

  **优点**：免费 CDN，计算、存储、数据库服务单价低。Workers Paid **$5/月**起即可获得大量配额，R2 无出口流量费，适合高流量场景。

  **缺点**：需至少 $5/月支出；Next.js 全栈部署需借助 OpenNext 等方案，社区案例相对 Vercel 少，调试成本更高。

**Cloudflare Workers Paid（$5/月起）主要配额**：

+ **Workers（计算）**：含 **1,000 万请求/月**，超出约 $0.30/百万次；CPU 时间单独计费。

+ **D1（数据库）**：按行读写计费，免费档有每日限额；基于 SQLite，适合读多写少、轻量数据场景。

+ **KV（键值存储）**：按读写次数计费，免费档约 100,000 读/天、1,000 写/天。

+ **R2（对象存储）**：10 GB 存储/月免费，**无出口流量费**。

**适用场景**：有技术基础、愿意折腾；高流量但收入尚低的项目；希望最大化性价比的用户。结合 [OpenNext Cloudflare](https://opennext.js.org/cloudflare) 可部署 Next.js 全栈应用。

#### 方案三：自托管部署

**优点**：完全自定义，自由度高，成本最低。一台VM可部署项目、数据库、邮件服务、日志、数据分析等，一站式解决所有成本。

**缺点**：需自己维护服务器，时间成本高，考虑稳定性、安全性、备份、监控、日志，并需自行规划扩容方案。

**可选择的开源自托管PaaS平台**：Dokploy、Coolify等，提供一键部署、CICD、SSL证书、自动备份等功能。

 **Dokploy常用容器服务示例**：

+ 数据分析：Plausible + Umami

+ 邮件服务：Unsend (Resend的开源替代品)

+ 数据库：PostgreSQL + Redis

+ 监控服务：Uptime Kuma

+ 备份服务：Cloudflare R2

+ 自动化：n8n

### 3、其他成本考虑

**域名**：

​	**购买平台**：推荐在 **Cloudflare Domains** 直接购买，价格稳定、解析快，便于搭配 CDN/Cache；`.com` 约 **$10–12/年**。也可在 Spaceship、NameSilo 等低价注册商购买后托管到 Cloudflare。

​	**工具**：[Tldx](https://tldx.bio/) 等域名搜索工具帮助寻找合适域名。

**邮件服务**：

​	**非必须**：如果登录注册功能通过第三方（如Clerk）或只使用社交登录，可不考虑。 

​	**推荐**：Resend或Plunk（易于集成），稳定性高。

​	**重度依赖**：可考虑AWS SES（价格低，但需自行处理），或自托管Unsend + AWS SES。

**支付平台**：

​	**成熟稳定**：**Stripe**或Paddle。一旦成功使用，后续无需折腾，提现结算方便。

​	**新开发者选择**：**Creem.io**。对于不便注册国外公司或处理税务的国内独立开发者具有诱惑力。但需注意：

​    审核严格：提交Payout Account审核前，需仔细检查产品信息和定价，确保合法合规。

​    提现问题：支付宝提现证明难以通过，建议申请**Wise (国际汇款服务) 或香港银行卡提现**。

### 4、独立开发哲学的强调

独立开发的关键在于**快速迭代、快速试错、快速找到用户需求和盈利模式，并将大部分时间投入到营销和市场中**，而非无休止地对比平台价格和学习各种技术。

人工智能的崛起正在重塑开发范式。AI编码助手极大地降低了编程的技术门槛，使得开发者可以将更多精力从繁琐的语法和底层实现中解放出来，专注于产品的核心逻辑和用户体验。这催生了一种全新的思维模式——“Vibe Coding”。Vibe coding 不仅仅是一种新的编程方式，它更代表了一种以产品构想和用户感知为导向的开发哲学。开发者可以更直观地、更快速地将脑海中的想法转化为可交互的原型，让“感觉”和“氛围”引领开发进程。AI时代让技术服务于创意，而非创意受限于技术，这使得人人都有可能构建自己喜爱的产品，并最终打造一个可持续、可盈利的个人事业 。

通过上述低成本AI编程和部署的“穷鬼方案”，独立开发者可以在严格控制成本的同时，高效地启动和运营自己的项目。

## 三、拥抱时代新范式，把想法编译成代码

AI 不再是少数人的特权，也不再需要巨额资金或神秘技能门槛。LLM是新一代编译器，编译的不是语法，而是意图，输入是你的自然语言，输出则是可运行的能力与系统。你无需天赋异禀，也不必从零敲满屏幕，只要敢把想法落在字句里，机器就能为你把它们变成原型、流程和产品。让AI做搬砖与记忆，你去做结构与创造。

AGI 也许还在路上，但“语言即接口，思维即算力”的时代已经开始。当 LLM 成为编译器，我们要做的不是跪拜未来，而是在现在动手，用免费的模型也能写出你的第一个项目，用零成本的服务部署，用最短的反馈回路打磨到能自我滚动。与AI肩并肩，你即是项目经理也是开发者。借助 AI ，你能把之前的一些奇怪但无法自己实现的想法，变成现实。



> This is what makes me so excited about a future with AI. It's a world where I don't have to spend time doing mundane work because agents do it for me. Where I'll focus only on things I think are important because agents handle everything else. Where I am more productive in the work I love doing because agents help me do it.
> 这就是让我对 AI 的未来如此兴奋的原因。在那个世界里，我不必花时间做平凡的工作，因为代理会为我完成。在那个世界里，我只会专注于我认为重要的事情，因为代理会处理其他一切。在那个世界里，我在热爱的工作中更加高效，因为代理会帮助我完成。
>
> I can't wait. 我等不及了。
>
> ——[AI Horseless Carriages](https://koomen.dev/essays/horseless-carriages/)



**AI IS ALL YOU NEED.**

---

参考文章

[How I Code with AI on a budget/free](https://wuu73.org/blog/aiguide1.html)

[独立开发穷鬼套餐(Web实践篇)](https://guangzhengli.com/blog/zh/indie-hacker-poor-stack)

[GitHub Copilot Plans & Pricing](https://github.com/features/copilot/plans)

[Cursor Pricing](https://cursor.com/pricing)

[Anthropic Pricing](https://www.anthropic.com/pricing)

[Vercel Plans & Limits](https://vercel.com/docs/plans)

[Supabase Pricing](https://supabase.com/pricing)

[Neon Pricing](https://neon.tech/pricing)

[Clerk Pricing](https://clerk.com/pricing)

[Cloudflare Workers Pricing](https://developers.cloudflare.com/workers/platform/pricing/)

[Resend Pricing](https://resend.com/pricing)