---
title: Vibe Coding 指南
weight: 12
---

# Vibe Coding 指南
**一个通过与 AI 结对编程，将想法变为现实的终极工作站**

---

## 🖼️ 概览
**Vibe Coding** 是一个与 AI 结对编程的终极工作流程，旨在帮助开发者丝滑地将想法变为现实。本指南详细介绍了从项目构思、技术选型、实施规划到具体开发、调试和扩展的全过程，强调以**规划驱动**和**模块化**为核心，避免让 AI 失控导致项目混乱。

> **核心理念**: _规划就是一切。_ 谨慎让 AI 自主规划，否则你的代码库会变成一团无法管理的乱麻。
>

**注意**：以下经验分享并非普遍适用，请在具体实践中结合场景，辩证采纳。

## 🔑 元方法论 (Meta-Methodology)
该思想的核心是构建一个能够**自我优化**的 AI 系统。其递归本质可分解为以下步骤：

> 延伸阅读：[A Formalization of Recursive Self-Optimizing Generative Systems](https://github.com/2025Emma/vibe-coding-cn/blob/main/i18n/zh/documents/Methodology%20and%20Principles/A%20Formalization%20of%20Recursive%20Self-Optimizing%20Generative%20Systems.md)
>

#### 1. 定义核心角色：
+ **α-提示词 (生成器)**: 一个"母体"提示词，其唯一职责是**生成**其他提示词或技能。
+ **Ω-提示词 (优化器)**: 另一个"母体"提示词，其唯一职责是**优化**其他提示词或技能。

#### 2. 描述递归的生命周期：
1. **创生 (Bootstrap)**：
    - 使用 AI 生成 `α-提示词` 和 `Ω-提示词` 的初始版本 (v1)。
2. **自省与进化 (Self-Correction & Evolution)**：
    - 使用 `Ω-提示词 (v1)` **优化** `α-提示词 (v1)`，从而得到一个更强大的 `α-提示词 (v2)`。
3. **创造 (Generation)**：
    - 使用**进化后的** `α-提示词 (v2)` 生成所有需要的目标提示词和技能。
4. **循环与飞跃 (Recursive Loop)**：
    - 将新生成的、更强大的产物（甚至包括新版本的 `Ω-提示词`）反馈给系统，再次用于优化 `α-提示词`，从而启动持续进化。

#### 3. 终极目标：
通过此持续的**递归优化循环**，系统在每次迭代中实现**自我超越**，无限逼近预设的**预期状态**。

## 🧭 道
+ **凡是 ai 能做的，就不要人工做**
+ **一切问题问 ai**
+ **目的主导：开发过程中的一切动作围绕"目的"展开**
+ **上下文是 vibe coding 的第一性要素，垃圾进，垃圾出**
+ **系统性思考，实体，链接，功能/目的，三个维度**
+ **数据与函数即是编程的一切**
+ **输入，处理，输出刻画整个过程**
+ **多问 ai 是什么？，为什么？，怎么做？**
+ **先结构，后代码，一定要规划好框架，不然后面技术债还不完**
+ **奥卡姆剃刀定理，如无必要，勿增代码**
+ **帕累托法则，关注重要的那20%**
+ **逆向思考，先明确你的需求，从需求逆向构建代码**
+ **重复，多试几次，实在不行重新开个窗口，**
+ **专注，极致的专注可以击穿代码，一次只做一件事（神人除外）**

## 🧩 法
+ **一句话目标 + 非目标**
+ **正交性，功能不要太重复了，（这个分场景）**
+ **能抄不写，不重复造轮子，先问 ai 有没有合适的仓库，下载下来改**
+ **一定要看官方文档，先把官方文档爬下来喂给 ai**
+ **按职责拆模块**
+ **接口先行，实现后补**
+ **一次只改一个模块**
+ **文档即上下文，不是事后补**

## 🛠️ 术
+ 明确写清：**能改什么，不能改什么**
+ Debug 只给：**预期 vs 实际 + 最小复现**
+ 测试可交给 AI，**断言人审**
+ 代码一多就**切会话**

## 📋 器
### 集成开发环境 (IDE) & 终端
+ [**Visual Studio Code**](https://code.visualstudio.com/): 一款功能强大的集成开发环境，适合代码阅读与手动修改。其 `Local History` 插件对项目版本管理尤为便捷。
+ **虚拟环境 (.venv)**: 强烈推荐使用，可实现项目环境的一键配置与隔离，特别适用于 Python 开发。
+ [**Cursor**](https://cursor.com/): 已经占领用户心智高地，人尽皆知。
+ [**Warp**](https://www.warp.dev/): 集成 AI 功能的现代化终端，能有效提升命令行操作和错误排查的效率。
+ [**Neovim (nvim)**](https://github.com/neovim/neovim): 一款高性能的现代化 Vim 编辑器，拥有丰富的插件生态，是键盘流开发者的首选。
+ [**LazyVim**](https://github.com/LazyVim/LazyVim): 基于 Neovim 的配置框架，预置了 LSP、代码补全、调试等全套功能，实现了开箱即用与深度定制的平衡。

### AI 模型 & 服务
+ [**Claude Opus 4.5**](https://claude.ai/new): 性能强大的 AI 模型，通过 Claude Code 等平台提供服务，并支持 CLI 和 IDE 插件。
+ [**gpt-5.1-codex.1-codex (xhigh)**](https://chatgpt.com/codex/): 适用于处理大型项目和复杂逻辑的 AI 模型，可通过 Codex CLI 等平台使用。
+ [**Droid**](https://factory.ai/news/terminal-bench): 提供对 Claude Opus 4.5 等多种模型的 CLI 访问。
+ [**Kiro**](https://kiro.dev/): 目前提供免费的 Claude Opus 4.5 模型访问，并提供客户端及 CLI 工具。
+ [**Gemini CLI**](https://geminicli.com/): 提供对 Gemini 模型的免费访问，适合执行脚本、整理文档和探索思路。
+ [**antigravity**](https://antigravity.google/): 目前由 Google 提供的免费 AI 服务，支持使用 Claude Opus 4.5 和 Gemini 3.0 Pro。
+ [**AI Studio**](https://aistudio.google.com/prompts/new_chat): Google 提供的免费服务，支持使用 Gemini 3.0 Pro 和 Nano Banana。
+ [**Gemini Enterprise**](https://cloud.google.com/gemini-enterprise): 面向企业用户的 Google AI 服务，目前可以免费使用。
+ [**GitHub Copilot**](https://github.com/copilot): 由 GitHub 和 OpenAI 联合开发的 AI 代码补全工具。
+ [**Kimi K2**](https://www.kimi.com/): 一款国产 AI 模型，适用于多种常规任务。
+ [**GLM**](https://bigmodel.cn/): 由智谱 AI 开发的国产大语言模型。
+ [**Qwen**](https://qwenlm.github.io/qwen-code-docs/zh/cli/): 由阿里巴巴开发的 AI 模型，其 CLI 工具提供免费使用额度。

### 开发与辅助工具
+ [**Augment**](https://app.augmentcode.com/): 提供强大的上下文引擎和提示词优化功能。
+ [**Windsurf**](https://windsurf.com/): 为新用户提供免费额度的 AI 开发工具。
+ [**Ollama**](https://ollama.com/): 本地大模型管理工具，可通过命令行方便地拉取和运行开源模型。
+ [**Mermaid Chart**](https://www.mermaidchart.com/): 用于将文本描述转换为架构图、序列图等可视化图表。
+ [**NotebookLM**](https://notebooklm.google.com/): 一款用于 AI 解读资料、音频和生成思维导图的工具。
+ [**Zread**](https://zread.ai/): AI 驱动的 GitHub 仓库阅读工具，有助于快速理解项目代码。
+ [**tmux**](https://github.com/tmux/tmux): 强大的终端复用工具，支持会话保持、分屏和后台任务，是服务器与多项目开发的理想选择。
+ [**DBeaver**](https://dbeaver.io/): 一款通用数据库管理客户端，支持多种数据库，功能全面。

### 资源与模板
+ [**提示词库 (在线表格)**](https://docs.google.com/spreadsheets/d/1ngoQOhJqdguwNAilCl1joNwTje7FWWN9WiI2bo5VhpU/edit?gid=2093180351#gid=2093180351&range=A1): 一个包含大量可直接复制使用的各类提示词的在线表格。
+ [**第三方系统提示词学习库**](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools): 用于学习和参考其他 AI 工具的系统提示词。
+ [**Skills 制作器**](https://github.com/yusufkaraaslan/Skill_Seekers): 可根据需求生成定制化 Skills 的工具。
+ [**元提示词**](https://docs.google.com/spreadsheets/d/1ngoQOhJqdguwNAilCl1joNwTje7FWWN9WiI2bo5VhpU/edit?gid=1770874220#gid=1770874220): 用于生成提示词的高级提示词。
+ [**通用项目架构模板**](./i18n/zh/documents/Templates%20and%20Resources/通用项目架构模板.md): 可用于快速搭建标准化的项目目录结构。
+ [**元技能：Skills 的 Skills**](./i18n/zh/skills/claude-skills/SKILL.md): 用于生成 Skills 的元技能。
+ [**tmux快捷键大全**](./i18n/zh/documents/Tutorials%20and%20Guides/tmux快捷键大全.md): tmux 的快捷键参考文档。
+ [**LazyVim快捷键大全**](./i18n/zh/documents/Tutorials%20and%20Guides/LazyVim快捷键大全.md): LazyVim 的快捷键参考文档。
+ [**二哥的Java进阶之路**](https://javabetter.cn/): 包含多种开发工具的详细配置教程。
+ [**虚拟卡**](https://www.bybit.com/cards/?ref=YDGAVPN&source=applet_invite): 可用于注册云服务等需要国际支付的场景。

---

## 编码模型性能分级参考
建议只选择第一梯队模型处理复杂任务，以确保最佳效果与效率。

+ **第一梯队**: `codex-5.1-max-xhigh`, `claude-opus-4.5-xhigh`, `gpt-5.2-xhigh`
+ **第二梯队**: `claude-sonnet-4.5`, `kimi-k2-thinking`, `minimax-m2`, `glm-4.6`, `gemini-3.0-pro`, `gemini-2.5-pro`
+ **第三梯队**: `qwen3`, `SWE`, `grok4`

---

## 🚀 入门指南
要开始 Vibe Coding，你只需要以下两种工具之一：

+ **Claude Opus 4.5**，在 Claude Code 中使用
+ **gpt-5.1-codex.1-codex (xhigh)**，在 Codex CLI 中使用

本指南同时适用于 CLI 终端版本和 VSCode 扩展版本（Codex 和 Claude Code 都有扩展，且界面更新）。

(注：本指南早期版本使用的是 **Grok 3**，后来切换到 **Gemini 2.5 Pro**，现在我们使用的是 **Claude 4.5**（或 **gpt-5.1-codex.1-codex (xhigh)**）)

---

### ⚙️ 完整设置流程
#### 1. 游戏设计文档（Game Design Document）
+ 把你的游戏创意交给 **gpt-5.1-codex** 或 **Claude Opus 4.5**，让它生成一份简洁的 **游戏设计文档**，格式为 Markdown，文件名为 `game-design-document.md`。
+ 自己审阅并完善，确保与你的愿景一致。初期可以很简陋，目标是给 AI 提供游戏结构和意图的上下文。不要过度设计，后续会迭代。

#### 2. 技术栈与 `CLAUDE.md` / `Agents.md`
+ 让 **gpt-5.1-codex** 或 **Claude Opus 4.5** 为你的游戏推荐最合适的技术栈（例如：多人3D游戏用 ThreeJS + WebSocket），保存为 `tech-stack.md`。
    - 要求它提出 **最简单但最健壮** 的技术栈。
+ 在终端中打开 **Claude Code** 或 **Codex CLI**，使用 `/init` 命令，它会读取你已创建的两个 .md 文件，生成一套规则来正确引导大模型。
+ **关键：一定要审查生成的规则。** 确保规则强调 **模块化**（多文件）和禁止 **单体巨文件**（monolith）。可能需要手动修改或补充规则。
    - **极其重要：** 某些规则必须设为 **"Always"**（始终应用），确保 AI 在生成任何代码前都强制阅读。例如添加以下规则并标记为 Always：

```markdown
# 重要提示：
# 写任何代码前必须完整阅读 memory-bank/@architecture.md（包含完整数据库结构）
# 写任何代码前必须完整阅读 memory-bank/@game-design-document.md
# 每完成一个重大功能或里程碑后，必须更新 memory-bank/@architecture.md
```

    - 其他（非 Always）规则要引导 AI 遵循你技术栈的最佳实践（如网络、状态管理等）。
    - _如果想要代码最干净、项目最优化，这一整套规则设置是强制性的。_

#### 3. 实施计划（Implementation Plan）
+ 将以下内容提供给 **gpt-5.1-codex** 或 **Claude Opus 4.5**：
    - 游戏设计文档（`game-design-document.md`）
    - 技术栈推荐（`tech-stack.md`）
+ 让它生成一份详细的 **实施计划**（Markdown 格式），包含一系列给 AI 开发者的分步指令。
+ 每一步要小而具体。
+ 每一步都必须包含验证正确性的测试。
+ 严禁包含代码——只写清晰、具体的指令。
+ 先聚焦于 **基础游戏**，完整功能后面再加。

#### 4. 记忆库（Memory Bank）
+ 新建项目文件夹，并在 VSCode 中打开。
+ 在项目根目录下创建子文件夹 `memory-bank`。
+ 将以下文件放入 `memory-bank`：
    - `game-design-document.md`
    - `tech-stack.md`
    - `implementation-plan.md`
    - `progress.md`（新建一个空文件，用于记录已完成步骤）
    - `architecture.md`（新建一个空文件，用于记录每个文件的作用）

---

### 🎮 Vibe Coding 开发基础游戏
现在进入最爽的阶段！

#### 确保一切清晰
+ 在 VSCode 扩展中打开 **Codex** 或 **Claude Code**，或者在项目终端启动 Claude Code / Codex CLI。
+ 提示词：阅读 `/memory-bank` 里所有文档，`implementation-plan.md` 是否完全清晰？你有哪些问题需要我澄清，让它对你来说 100% 明确？
+ 它通常会问 9-10 个问题。全部回答完后，让它根据你的回答修改 `implementation-plan.md`，让计划更完善。

#### 你的第一个实施提示词
+ 打开 **Codex** 或 **Claude Code**（扩展或终端）。
+ 提示词：阅读 `/memory-bank` 所有文档，然后执行实施计划的第 1 步。我会负责跑测试。在我验证测试通过前，不要开始第 2 步。验证通过后，打开 `progress.md` 记录你做了什么供后续开发者参考，再把新的架构洞察添加到 `architecture.md` 中解释每个文件的作用。
+ **永远** 先用 "Ask" 模式或 "Plan Mode"（Claude Code 中按 `shift+tab`），确认满意后再让 AI 执行该步骤。
+ **极致 Vibe：** 安装 [Superwhisper](https://superwhisper.com)，用语音随便跟 Claude 或 gpt-5.1-codex 聊天，不用打字。

#### 工作流
+ 完成第 1 步后：
    - 把改动提交到 Git（不会用就问 AI）。
    - 新建聊天（`/new` 或 `/clear`）。
    - 提示词：阅读 memory-bank 所有文件，阅读 progress.md 了解之前的工作进度，然后继续实施计划第 2 步。在我验证测试前不要开始第 3 步。
+ 重复此流程，直到整个 `implementation-plan.md` 全部完成。

#### ✨ 添加细节功能
恭喜！你已经做出了基础游戏！可能还很粗糙、缺少功能，但现在可以尽情实验和打磨了。

+ 想要雾效、后期处理、特效、音效？更好的飞机/汽车/城堡？绝美天空？
+ 每增加一个主要功能，就新建一个 `feature-implementation.md`，写短步骤+测试。
+ 继续增量式实现和测试。

#### 🐞 修复 Bug 与卡壳情况
##### 常规修复
+ 如果某个提示词失败或搞崩了项目：
    - Claude Code 用 `/rewind` 回退；用 gpt-5.1-codex 的话多提交 git，需要时 reset。
+ 报错处理：
    - **JavaScript 错误：** 打开浏览器控制台（F12），复制错误，贴给 AI；视觉问题截图发给它。
    - **懒人方案：** 安装 [BrowserTools](https://browsertools.agentdesk.ai/installation)，自动复制错误和截图。

##### 疑难杂症
+ 实在卡住：
    - 回退到上一个 git commit（`git reset`），换新提示词重试。
+ 极度卡壳：
    - 用 [RepoPrompt](https://repoprompt.com/) 或 [uithub](https://uithub.com/) 把整个代码库合成一个文件，然后丢给 **gpt-5.1-codex 或 Claude** 求救。

---

### 💡 技巧与窍门
#### Claude Code & Codex 使用技巧
+ **终端版 Claude Code / Codex CLI：** 在 VSCode 终端里运行，能直接看 diff、喂上下文，不用离开工作区。
+ **Claude Code 的 **`/rewind`**：** 迭代跑偏时一键回滚到之前状态。
+ **自定义命令：** 创建像 `/explain $参数` 这样的快捷命令，触发提示词："深入分析代码，彻底理解 $参数 是怎么工作的。理解完告诉我，我再给你任务。" 让模型先拉满上下文再改代码。
+ **清理上下文：** 经常用 `/clear` 或 `/compact`（保留历史对话）。
+ **省时大法（风险自负）：** 用 `claude --dangerously-skip-permissions` 或 `codex --yolo`，彻底关闭确认弹窗。

#### 其他实用技巧
+ **小修改：** 用 gpt-5.1-codex (medium)
+ **写顶级营销文案：** 用 Opus 4.1
+ **生成优秀 2D 精灵图：** 用 ChatGPT + Nano Banana
+ **生成音乐：** 用 Suno
+ **生成音效：** 用 ElevenLabs
+ **生成视频：** 用 Sora 2
+ **提升提示词效果：**
    - 加一句："慢慢想，不着急，重要的是严格按我说的做，执行完美。如果我表达不够精确请提问。"
    - 在 Claude Code 中触发深度思考的关键词强度：`think` < `think hard` < `think harder` < `ultrathink`。

---

### ❓ 常见问题解答 (FAQ)
+ **Q: 我在做应用不是游戏，这个流程一样吗？**
    - **A:** 基本完全一样！把 GDD 换成 PRD（产品需求文档）即可。你也可以先用 v0、Lovable、Bolt.new 快速原型，再把代码搬到 GitHub，然后克隆到本地用本指南继续开发。
+ **Q: 你那个空战游戏的飞机模型太牛了，但我一个提示词做不出来！**
    - **A:** 那不是一个提示词，是 ~30 个提示词 + 专门的 `plane-implementation.md` 文件引导的。用精准指令如"在机翼上为副翼切出空间"，而不是"做一个飞机"这种模糊指令。
+ **Q: 为什么现在 Claude Code 或 Codex CLI 比 Cursor 更强？**
    - **A:** 完全看个人喜好。我们强调的是：Claude Code 能更好发挥 Claude Opus 4.5 的实力，Codex CLI 能更好发挥 gpt-5.1-codex 的实力，而 Cursor 对这两者的利用都不如原生终端版。终端版还能在任意 IDE、使用 SSH 远程服务器等场景工作，自定义命令、子代理、钩子等功能也能长期大幅提升开发质量和速度。最后，即使你只是低配 Claude 或 ChatGPT 订阅，也完全够用。
+ **Q: 我不会搭建多人游戏的服务器怎么办？**
    - **A:** 问你的 AI。




