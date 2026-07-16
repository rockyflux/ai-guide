---
title: 全套插件打造免费AI编程
weight: 10
---

# CC-Switch+CPA+CCR+CC+OpenCode打造免费AI编程军团

# 一、基础 AI 编程工具安装

## 环境准备：

Node.js >= 22.0  
官网：[https://nodejs.org](https://nodejs.org/)  
下载安装包一路傻包式同意即可  
PS: 本教程着重讲各种工具的整合打通，编程工具的基础使用不在本教程的范畴

## 安装 CC 及 OpenCode

CC 即 Claude Code，以下均简称 CC

`npm -g install @anthropic-ai/claude-code npm -g install opencode-ai`

## 安装检查

`npm list -g`

![image](https://ai-guide.180813.xyz/images/practices-one/1.jpeg)


列出的包里有以上两包名即表示安装成功，这两个包为基础

# 二、AI 大模型白嫖普及

## 1\. 正规军：

iFlow：国内真神，并发限制仅 1 次，GLM4.7、MiniMax M2.1 等都可以免费蹭，但只支持在它家的 iflow cli 下使用，感觉 Kimi K2.5 也即将上新，并发 1 的问题可以通过开多帐号解决 + CPA 解决

英伟达：支持国内的顶级模型，目前蹭的用户过多，体验下来极不稳定

魔搭 \[每天 2K 次，每模型不超过 2K 次\]：上面的模型马马虎虎，好模型都不免费

## 2\. 邪修

顶级真神：[Anyrouter](https://anyrouter.top/)，开号后每天登录送 25 刀，Claude Code Opus4.5 免费蹭，Sonnet 4.5 最近不稳定  
和本社区的各种公益站 \[hotaru、随时跑路、太子公益、WONG、薄荷、黑与白 等等\]

# 三、CC 与 oh my claudecode

## oh my claudecode 科普

Oh My Claude Code。它是一组构建在 Claude Code 之上的插件集合，定位也类似于 Oh My Opencode 之于 Opencode，做的也是同一类事情。  
如果你用过一段时间 Claude Code，应该很熟悉这个流程：写提示词、等回复，必要时再手动调用子智能体，如此反复。这个流程本身没问题，但在实现复杂功能时，效率并不高。**Oh My Claude Code** （简称 OMC）正是为了解决这个问题而出现的。  
Oh My Claude Code 是一套构建在 Claude Code 之上的插件和智能体集合。它融合了多个开源项目的思路（oh-my-opencode、claude-hud、Superpowers、everything-claude-code），把原本偏单点交互的 Claude Code，扩展成一个可用的多智能体编排系统，用来处理更复杂的任务。

简单来说，它提供了三样东西：

-   多种执行模式，用来适配不同规模和复杂度的任务

-   一组分工明确的专业智能体，覆盖常见开发角色

-   尽量减少配置和学习成本，让你可以直接上手使用


## 核心能力

-   5 种执行模式 ：`Autopilot` 、`Ultrapilot` （3–5 倍并行）、`Swarm` 、`Pipeline` 、`Ecomode`

-   32 个专业智能体 ：从架构设计、编码实现到数据分析

-   自动模型路由 ：简单任务用 `Haiku` ，常规工作用 `Sonnet` ，复杂推理交给 `Opus`

-   自然语言控制 ：不需要记命令，直接描述你要做什么


它的理念很简单：你不需要花时间去学会 Claude Code，而是可以直接把 OMC 当成入口来用。

## 安装与配置

### 步骤一：把插件加入市场

在 Claude Code 的终端中执行：

`/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode`

### 步骤二：安装插件

`/plugin install oh-my-claudecode`

安装完成后，运行设置向导 \[**注意这儿的初始化会覆盖你的 CLAUDE.md，所以建议提前备份，安装完后再进行 CLAUDE.md 的新旧整合**\]：

`/oh-my-claudecode:omc-setup`

![image](https://ai-guide.180813.xyz/images/practices-one/2.png)

关于五大执行模式可以自行找相关资料

# 四、OpenCode 与 Oh My OpenCode

## 什么是 OpenCode 和 Oh My OpenCode？

### [OpenCode](https://github.com/anomalyco/opencode) 是什么？

OpenCode 是一个**开源的 AI 编程助手**，它可以：

-   分析你的代码
-   生成新功能
-   修改和优化项目
-   支持多种 AI 模型
-   运行在终端中，操作方便简单

**简单理解**：它就像一个超级聪明的代码助手，你用自然语言告诉它要做什么，它就会帮你写代码。

### Oh My OpenCode 是什么？

Oh My OpenCode 是 OpenCode 的**增强插件**（类似 Oh My Zsh 对于 Zsh 的增强），它为 OpenCode 添加了更多强大功能：

-   **多 AI 模型协作**：可以同时调用多个 AI 模型协同工作
-   **智能体系统（Agents）**：内置多个专业智能体（如 frontend-ui-ux-engineer、oracle 等）
-   **提示词优化**：自动优化你给 AI 的指令
-   **后台任务管理**：可以并行执行多个任务

**简单理解**：安装 Oh My OpenCode 后，OpenCode 就从一个 AI 助手变成了一个完整的 AI 开发团队。

### 安装 OpenCode

`npm install -g opencode-ai`

### 验证安装

安装完成后，运行以下命令验证是否安装成功：

`opencode --version`

### 选择免费模型并开始使用

安装 OpenCode 后，启动即可直接使用免费的 GLM-4.7 模型开始编程！

### 启动 OpenCode

`opencode`

![image](https://ai-guide.180813.xyz/images/practices-one/3.png)


### 安装 [Oh My OpenCode](https://github.com/code-yeongyu/oh-my-opencode)

Oh My OpenCode 是一个增强插件，安装后会让 OpenCode 变得更强大。

### 安装步骤

`npx oh-my-opencode install`

### 配置 Oh My OpenCode

Oh My OpenCode 安装后，**默认配置已经完全够用，新手可以直接跳过这一部分，开始使用即可！**  
如果你想自定义一些设置，可以参考以下内容。

### 配置文件位置

-   **全局配置**：`%USERPROFILE%\.config\opencode\oh-my-opencode.json`
-   **项目级配置**：在你的项目文件夹下创建 `.opencode\oh-my-opencode.json`

# 五、[CliProxyAPI](https://github.com/router-for-me/CLIProxyAPI)

## CliProxyAPI 是什么

CliProxyAPI 简称 CPA

-  ✅ 一个为 CLI 提供 OpenAI/Gemini/Claude/Codex/iFlow 兼容 API 接口的代理服务器。
-  ✅ 现已支持通过 OAuth 登录接入 OpenAI Codex（GPT 系列）和 Claude Code。
-  ✅ 您可以使用本地或多账户的 CLI 方式，通过任何与 OpenAI（包括 Responses）/Gemini/Claude 兼容的客户端和 SDK 进行访问。

## 快速开启 WEB 界面配置 \[本教程只速成 iFlow\]

下载放到本地后复制 config.example.yaml 重全名为 config.yaml 文件，修改配置以使 WEB 管理界面可使用，只改截图涉及的地方即可

![image](https://ai-guide.180813.xyz/images/practices-one/4.png)



完成后进入 CliProxyAPI 目录命令行启动：

`./cli-proxy-api.exe`

## WEB 界面管理 AI 提供商 - iFlow 开号以接入 CliProxyAPI

**这儿需标重点，iFlow 等 Cli 是限制 glm4.7、minimax m2.1 这些国内顶级模型在自家 cli 工具内使用的，通过 CliProxyAPI 最重要的重要就是把这些 api 嫁接提供给其它 cli 工具使用**

以上配置开启后，CliProxyAPI 的 WEB 管理界面为：

[http://localhost:8317/management.html](http://localhost:8317/management.html)

输入帐密即可管理各 AI 提供商

![API密钥](https://ai-guide.180813.xyz/images/practices-one/5.png)


![AI提供商](https://ai-guide.180813.xyz/images/practices-one/6.png)


![AI提供商认证文件](https://ai-guide.180813.xyz/images/practices-one/7.png)


![可用模型列表](https://ai-guide.180813.xyz/images/practices-one/8.png)


由于 iFlow 并发限制 1，可以考虑开多个号，如上图 3 个号可实现 3 的并发

## CliProxyAPI 接口

向外提供 OpenAI 兼容的模型接口  
输入 [http://localhost:8317](http://localhost:8317) 即可知接口格式，这儿即来到大家熟悉的接口区了  
![image](https://ai-guide.180813.xyz/images/practices-one/9.png)  
没错，在 CC-Switch、Claude Code Router 等软件中需要的三要素

-   接口
-   模型
-   密钥  
    等至此通过 CliProxyAPI 均准备好了，熟悉的大佬们至此已经知道往下如何配置了

# 六、[CC-Switch](https://github.com/farion1231/cc-switch) 多模型切换

## CC-Switch 是什么

**统一管理 Claude Code、Codex 与 Gemini CLI、OpenCode 的供应商配置、MCP 服务器、Skills 扩展和系统提示词**  
使用 CC-Switch，您可以：

-   ✅ 一键切换 API 配置 - 在多个 API 提供商之间快速切换
-   ✅ 可视化配置管理 - 通过图形界面轻松管理所有配置
-   ✅ 内置 PackyAPI 模板 - 预设了 PackyAPI 的配置模板
-   ✅ MCP 服务器管理 - 管理 Model Context Protocol 服务器
-   ✅ 系统托盘快捷操作 - 通过托盘菜单快速切换

## 软件截图

![软件截图](https://ai-guide.180813.xyz/images/practices-one/10.png)]
 
## 为 Claude Code 提供 CPA 转接模型
 
![image](https://ai-guide.180813.xyz/images/practices-one/11.png)]


直接贴关键配置：
```
{
  "alwaysThinkingEnabled": true,
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "*********",
    "ANTHROPIC_BASE_URL": "http://127.0.01:8317",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "minimax-m2.1",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "minimax-m2.1",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_MODEL": "glm-4.7",
    "ANTHROPIC_REASONING_MODEL": "glm-4.7",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "outputStyle": "engineer-professional",
}
```


如上配置即可将 iFlow 内的高级模型转给 Claude Code 命令行使用

![image](https://ai-guide.180813.xyz/images/practices-one/17.png "image")

## 干货之如何使 Claude Code 支持 AnyRouter

其实上面的配置里已经写了，重点在两行，社区有很多大佬也讲过，这儿再截图贴出来下  
![image](https://ai-guide.180813.xyz/images/practices-one/18.png)  
AnyRouter 时的关键配置如下：

```
{
  "alwaysThinkingEnabled": true,
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "*********",
    "ANTHROPIC_BASE_URL": "https://a-ocnfniawgw.cn-shanghai.fcapp.run",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-opus-4-5-20251101",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-5-20251101",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-opus-4-5-20251101",
    "ANTHROPIC_MODEL": "claude-opus-4-5-20251101",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

# [Claude Code Router](https://github.com/musistudio/claude-code-router) 接入 CC-Switch 统一管理

## Claude Code Router 是什么

Claude Code Router 简称 CCR，是一个开源工具，是 Claude Code 的扩展，旨在增强 AI 编码工作流程。它能将编码请求路由到不同的 AI 模型，为用户提供更灵活的模型交互方式。

## 功能特性

-   模型路由：根据您的需求（例如，后台任务、思维、长上下文）将请求路由到不同的模型。
-   多提供商支持：支持各种模型提供商，如 [OpenRouter](https://zhida.zhihu.com/search?content_id=263684546&content_type=Article&match_order=1&q=OpenRouter&zhida_source=entity)、[DeepSeek](https://zhida.zhihu.com/search?content_id=263684546&content_type=Article&match_order=1&q=DeepSeek&zhida_source=entity)、[Ollama](https://zhida.zhihu.com/search?content_id=263684546&content_type=Article&match_order=1&q=Ollama&zhida_source=entity)、[Gemini](https://zhida.zhihu.com/search?content_id=263684546&content_type=Article&match_order=1&q=Gemini&zhida_source=entity)、[Volcengine](https://zhida.zhihu.com/search?content_id=263684546&content_type=Article&match_order=1&q=Volcengine&zhida_source=entity) 和 [SiliconFlow](https://zhida.zhihu.com/search?content_id=263684546&content_type=Article&match_order=1&q=SiliconFlow&zhida_source=entity)。
-   请求 / 响应转换：使用转换器为不同的提供商自定义请求和响应。
-   动态模型切换：使用 /model 命令在 Claude Code 中动态切换模型。
-   GitHub Actions 集成：在 GitHub 工作流程中触发 Claude Code 任务。
-   插件系统：使用自定义转换器扩展功能

### 安装 Claude Code Router

安装 Claude Code Router 只需要在命令行终端输入如下指令：

`$ npm install -g @musistudio/claude-code-router`

## 基本使用

### 命令行参数

在命令行终端输入 ccr --help 查看命令行文档

![image](https://ai-guide.180813.xyz/images/practices-one/13.png)]

命令行参数：

-   start：启动服务器，默认使用 ccr code 时会自行启动
-   stop：停止服务器
-   restart：重启服务器，修改配置时需要重启
-   status：显示服务器状态
-   statusline：集成状态栏
-   code：执行 claude CLI 命令
-   ui：在浏览器中打开网页界面

### 网页版

使用 ccr ui 可用于启动网页版配置，启动后在浏览器  
[http://127.0.0.1:3456](http://127.0.0.1:3456) 可行配置

![image](https://ai-guide.180813.xyz/images/practices-one/12.png)]


可以看到可以你中有我，我中有你，把 CLI 的代理也接入到这边来以实现非多模态模型下的图片识别

### 将 CCR 转接到 CC-Switch

关键配置如下：

```
{
  "alwaysThinkingEnabled": true,
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "***********",
    "ANTHROPIC_BASE_URL": "http://127.0.0.1:3456",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "outputStyle": "engineer-professional"
}
```

# 八、OpenCode Agent 军团

## OpenCode 模型列表

OpenCode 原生支持的官方大模型列表可以通过命令：

`opencode models`

查询，结果如下 \[仅截部分\]，查这个东西主要为下面的军团使用，有些官模是免费的：

![image](https://ai-guide.180813.xyz/images/practices-one/14.png)]

## OpenCode 里的正规军白嫖

来源：iFlow + 英语达  
分别去相应的官网拿 apikey，然后输入命令：

`opencode auth login`

![image](https://ai-guide.180813.xyz/images/practices-one/20.png)]



![image](https://ai-guide.180813.xyz/images/practices-one/21.png)]


以上实现 iFlow 的白嫖，当然官方白嫖拿不到 iFlow 官方命令行拥有的 glm4.7、minimax m2.1 等国内顶级模型，并发也有限制  
英伟达也可以如法炮制

## OpenCode 接入 AnyRouter

此方案来自社区大佬，原贴没找到，这儿重新写一遍，感谢大佬

### 代理插件

将附件 “opencode-anthropic-auth-proxy.mjs” 放到 opencode 的配置目录下 如：~/.config/opencode [opencode-anthropic-auth-proxy.zip](https://pan.baidu.com/s/1AckrPIKvPwu7Krcmen-BSQ?pwd=3cgv) (3.2 KB)  
编辑 opencode.json 的 plugin 导入

`"plugin": [     "./opencode-anthropic-auth-proxy.mjs"   ]`

![image](https://ai-guide.180813.xyz/images/practices-one/15.png)]

### 替换 AI 提供商 \[实际是替换官方 A 除的 URL\]

`"provider": { "anthropic": {       "name": "nickname",       "options": {         "baseURL": "{中转站URL}/v1"       }     } }`

![image](https://ai-guide.180813.xyz/images/practices-one/16.png)

确保已经在配置目录安装了以下依赖，进入～/.config/opencode 安装

`npm install @openauthjs/openauth @opencode-ai/plugin`

### 贴入第三方的 APIKEY

像上面贴 iFlow 等的官方 key 一样，如法炮制贴 Anthropic 的 KEY

![image](https://ai-guide.180813.xyz/images/practices-one/19.png)

经过上述处理后，基本能完成 AnyRouter 等三方 CC 平台的 OpenCode 接入

## AI 军团

其实经过上述整合后，OpenCode 的军团就看怎么灵活配置了，我们整合下来有第三方公益站的 AI 提供商、有 iFlow、英伟达的 AI 提供商等等各种，基本全算白嫖的，灵活组装即可，比如我的 oh-my-opencode.json 配置如下：

```
{
  "$schema": "https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/master/assets/oh-my-opencode.schema.json",
  "claude_code": {
    "mcp": true,
    "commands": false,
    "skills": false,
    "agents": false,
    "hooks": false
  },
  "agents": {
    "sisyphus": {
      "model": "anthropic/claude-opus-4-5-20251101",
      "comment": "主协调器（纯决策：理解意图、拆解任务、路由分发、验收结果。严禁写代码）"
    },
	"sisyphus-junior": {
      "model": "zhipuai-coding-plan/glm-4.7",
      "comment": "Sisyphus Junior - 执行器（delegate_task category映射）"
    },
    "oracle": {
      "model": "anthropic/claude-opus-4-5-20251101",
      "comment": "架构师（低频：架构决策、复杂调试、代码审查、疑难问题终审）"
    },
    "executor": {
      "model": "zhipuai-coding-plan/glm-4.7",
      "comment": "主力开发（多文件改动、功能实现、重构）"
    },
    "executor-simple": {
      "model": "iflowcli/glm-4.7",
      "comment": "轻量开发（单文件小改动、格式化、简单修复）"
    },
    "librarian": {
      "model": "zhipuai-coding-plan/glm-4.7",
      "comment": "代码研究、外部搜索、技术调研"
    },
    "explore": {
      "model": "zhipuai-coding-plan/glm-4.5-flash",
      "comment": "代码库快速搜索、文件定位"
    },
    "frontend-ui-ux-engineer": {
      "model": "iflowcli/glm-4.7",
      "comment": "UI、UX前端相关任务"
    },
    "document-writer": {
      "model": "zhipuai-coding-plan/glm-4.5-flash",
      "comment": "文档写作、README、注释"
    },
    "multimodal-looker": {
      "model": "iflowcli/qwen3-vl-plus",
      "comment": "视觉内容分析、截图识别"
    }
  }
}
```

上述配置中我用了智谱的 Coding Plan，完全可以用 iFlow 的多帐号轮切替换掉，实现全免费使用

本篇内容主要整理自社区大佬 @beyound87 的原始教程，在此致谢。