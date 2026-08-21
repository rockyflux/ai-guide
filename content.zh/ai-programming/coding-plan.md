---
title: AI Coding Plan
weight: 22
bookToc: false
noTocArea: true
bookHidden: false
---

## AI Coding Plan 怎么选
这页只回答一个问题：如果你准备长期使用 AI 编程工具，应该买哪一类订阅。内容按「先判断路径，再查具体套餐」组织，适合已经有基础、只想快速完成选型的人。

## 先看结论
- 想优先解决可用性和接入问题：先看国内云厂商聚合型 Coding Plan。
- 已经确定要深度使用某一家模型：优先看原厂 Coding Plan。
- 主要在 IDE 内工作，且更关注开箱即用：直接看工具型订阅，例如 Cursor、GitHub Copilot、Trae、CodeBuddy。

{{% hint info %}}
推荐先按「使用场景」做第一层筛选，再比较价格。同价位产品的真实差异，通常不在模型名字，而在稳定性、额度策略、上下文长度、工具兼容性和封控风险。
{{% /hint %}}

## 第三方中转与采购渠道
这类渠道的核心价值不是“更强”，而是降低接入门槛或绕过官方订阅不便。

适用场景：
- 官方账号购买和支付不方便。
- 需要用 API 方式接入 Claude Code、Cursor、OpenCode、Cline 一类工具。
- 需要 IDE 工具额度、共享账号或代充，预算有限，只想轻量试用或临时项目。

主要风险：
- 稳定性、额度口径、风控策略都由第三方决定。
- 某些服务的上游来源并不透明，套餐规则也可能频繁调整。
- 私有渠道可能违反平台服务条款，存在封号、额度缩水、跑路等风险。
- 电商平台购买尤其要核实售后、退款、封号与更换策略。

常见来源方式：1. 官方 API 账号直接接入。2. 购买订阅后由服务方聚合分发。3. 非官方接口或兼容层转发。4. 非官方店铺、分发页获取 IDE 额度或代充。

### 服务与渠道参考

选购或接入前，可用 [禾维 AI](https://hvoy.ai/) 做 API 连通性测试、真假鉴定与价格对比；支持按模型查看在线率、延迟、掺水率等指标，降低踩坑风险。

| 服务 / 渠道 | 简述 | 链接 |
|---|---|---|
| **禾维 AI** | 中转站真假检测、价格对比与站点推荐 | https://hvoy.ai/ |
| **foxcode** | 低门槛套餐，适合先试用 | https://foxcode.rjj.cc/ |
| **XCode** | 套餐较多，适合按预算选择 | https://xcode.best/ |
| **88code** | 套餐较多，适合对比价格 | https://www.88code.ai/ |
| **YesCode** | 常规月付型中转服务 | https://co.yes.vg/ |
| **IKunCode** | 偏按量使用 | https://api.ikuncode.cc/ |
| **rightCodes** | 常规套餐型服务 | https://www.right.codes/ |
| **packyapi** | 偏向个人开发者 API 使用 | https://www.packyapi.com/ |
| **AICodeMirror** | 月付型套餐 | https://www.aicodemirror.com/ |
| **AIGetCode** | 周期订阅型套餐 | https://www.aigocode.com/ |
| **OpenCode Go** | OpenCode 官方低成本订阅，支持任意代理，首月 $5、后续 $10/月，可按需充值 | https://opencode.ai/zh/go |
| **CodeRefill** | 一套 License 覆盖 Cursor、Windsurf、Kiro、Codex，IDE 高级模型配额补能 | https://zy.harsidol.cn/codeRefill/ |
| **B.AI** | Credits + 订阅制聚合平台，支持全系列模型访问，Pro 为 $200/月、Max 为 $2000/月，偏高频用户 | https://b.ai/ |
| **UniAPI** | 多模型聚合，按量付费 | https://uniapi.ai/ |
| **ToAPIs** | OpenAI 兼容 API 网关，文本/图像/视频多模型统一接入 | https://toapis.com/ |
| **CodexAPIs** | API 中转，CDK 充值兑换，可查模型价格 | https://codexapis.com/ |
| **APIs.you** | API 目录聚合入口 | https://apis.you/catalog |
| **淘宝** | 可搜索不同卖家套餐 | [淘宝搜索](https://s.taobao.com/search?q=claude+code) |
| **闲鱼** | 常见于拼车、代购、转售 | [闲鱼搜索](https://www.goofish.com/search?q=claude+code) / [team 拼车](https://www.goofish.com/search?q=team拼车) |
| **ldxp 小店（xxdlzs）** | 非官方店铺，IDE 额度、代充 | https://pay.ldxp.cn/shop/xxdlzs |
| **ldxp 小店（xcursor）** | 非官方店铺，偏 Cursor | https://pay.ldxp.cn/shop/xcursor |
| **ldxp 小店（AEUQ8PP3）** | 非官方店铺 | https://pay.ldxp.cn/shop/AEUQ8PP3 |
| **wafase** | 非官方店铺 | https://wafase.com/ |
| **Acc-OTAOR** | 非官方店铺，账号采购（Google / ChatGPT 等） | https://acc.otaor.com/ |

### 配套工具

已有 ChatGPT Web session 时，可用 [GPTSession2CPAandSub2API](https://github.com/gtxx3600/GPTSession2CPAandSub2API) 在浏览器本地转为 CPA / sub2api 等可导入 JSON（面向 Plus，与上表中转套餐无关）。

{{% hint warning %}}
上表服务与渠道更适合「补接入能力」或短期试用，不适合承载高敏感、强稳定性或长期不可中断的生产流程。部分私有渠道可能违反平台服务条款，存在账号封禁、额度缩水、跑路等风险；链接仅供信息参考，不构成推荐或担保。重要项目请优先走官方订阅或企业采购路径。
{{% /hint %}}

## 国内企业常见采购路径
如果是团队统一采购，常见做法通常只有三类：
- 直接采购 Cursor 或 GitHub Copilot 团队版。
- 采购 Claude Code Max 或 OpenRouter 一类可统一分发的上游能力。
- 采购国内聚合平台，再统一下发 Key 和接入规范。

可配合阅读：[AI 大模型 API 聚合平台]({{< relref "ai-programming/api-aggregation-platforms" >}}) — OpenRouter、小马算力、DMXAPI 等第三方代理平台对比。

## 国内主流 Coding Plan
以下信息用于快速横向比较，价格与套餐说明以各平台页面为准。

## 一、云厂商聚合型（多模型统一接入，适合需要灵活切换、统一管理的开发者）
| 平台 | 套餐 | 价格（首月 / 次月 / 续费） | 适合人群 | 核心亮点 | 官方链接 |
|---|---|---|---|---|---|
| **阿里云百炼** | Lite | 7.9 元 / 20 元 / 40 元/月 | 低成本试水、多模型切换、预算有限的个人开发者 | 通义千问全家桶+GLM+Kimi+MiniMax多模型聚合，单次请求成本低 | https://www.aliyun.com/benefit/ai/aistar |
|  | Pro | 39.9 元 / 100 元 / 200 元/月 | 高频开发、复杂项目、团队协作 | 高额度请求、企业级支持，兼容主流IDE | https://bailian.console.aliyun.com/cn-beijing/?tab=model#/efm/coding_plan |
| **腾讯云 Coding Plan** | Lite | 7.9 元 / 20 元 / 40 元/月（限时至2026.04.19） | 混元模型用户、需要兼容主流工具的开发者 | 混元2.0自研+GLM+Kimi+MiniMax多模型，工具生态完善 | https://cloud.tencent.com/act/pro/codingplan |
|  | Pro | 39.9 元 / 100 元 / 200 元/月（限时至2026.04.19） | 复杂项目、团队协作、高频使用 | 高配额、企业级服务，腾讯云生态联动 | https://cloud.tencent.com/act/pro/codingplan |
| **火山引擎方舟** | Lite | 9.9 元 / 20 元 / 40 元/月 | 希望自动路由、多模型接入、豆包模型用户 | 豆包大模型+DeepSeek+Kimi+GLM等6款模型，自动路由优化体验 | https://www.volcengine.com/activity/codingplan |
|  | Pro | 49.9 元 / 100 元 / 200 元/月 | 高配额使用场景、企业级开发 | 高额度、字节内部技术打磨，稳定性强 | https://www.volcengine.com/product/ark |
| **百度千帆** | Lite | 9.9 元 / 20 元 / 40 元/月 | 需要控制台切换模型、文心一言用户 | 文心一言+多模型支持，控制台操作便捷，无需改代码切换 | https://cloud.baidu.com/product/codingplan.html |
|  | Pro | 49.9 元 / 100 元 / 200 元/月 | 高频开发、企业支持、百度生态用户 | 企业级服务、高额度，百度云生态联动 | https://cloud.baidu.com/product/qianfan |
| **无问芯穹** | Lite | 19.9 元/月（无首月优惠） | 预算有限、需要IDE/CLI接入的开发者 | 轻量多模型支持，IDE/CLI全适配，适合小团队 | https://cloud.infini-ai.com/genstudio/code |
|  | Pro | 49.9 元/月（无首月优惠） | 小团队长期协作、稳定开发 | 团队协作功能完善，长期使用性价比高 | https://docs.infini-ai.com/gen-studio/coding-plan/ |
| **华为云码道** | 公测版 | 免费（无收费计划） | 想体验行业化方案、华为生态用户 | 华为自研模型，行业化编码方案，公测全功能免费 | https://www.huaweicloud.com/product/codearts/ai.html |

---

## 二、大模型厂商原厂计划（原生模型能力，适合明确偏好某家模型的开发者）
| 平台 | 套餐 | 价格（月付 / 包季优惠） | 适合人群 | 核心亮点 | 官方链接 |
|---|---|---|---|---|---|
| **智谱 AI（GLM）** | Lite | 49 元 / 44 元（约9折） | 直接使用GLM Coding能力、普通个人开发者 | GLM-5原生模型，20+款IDE/工具适配，自带MCP工具链 | https://www.bigmodel.cn/glm-coding |
|  | Pro | 149 元 / 134 元（约9折） | 高额度需求、专业开发者、小团队 | 更高请求额度、优先级调度，复杂项目支持 | https://docs.bigmodel.cn/cn/coding-plan/overview |
|  | Max | 469 元 / 422 元（约9折） | 高频、长时段使用、企业级开发 | 超高额度、专属服务，企业级稳定性 | 同上 |
| **MiniMax（国内）** | Starter | 29 元/月（无包季） | 偏重推理能力、低成本试用的轻量开发者 | M2.5模型推理能力强，轻量开发友好 | https://platform.minimaxi.com/subscribe/coding-plan |
|  | Plus | 49 元/月（无包季） | 中频开发者、日常编码需求 | 平衡额度与价格，适合日常开发 | 同上 |
|  | Max | 119 元/月（无包季） | 高频使用、复杂项目、专业开发者 | 高额度、优先调度，复杂编码场景适配 | 同上 |
| **月之暗面（Kimi）** | Code | 49 元/月（无包季） | 长上下文、文档转代码、Kimi模型用户 | Kimi长上下文原生能力，文档转代码、大文件分析优势明显 | https://kimi.com/code |



### 3. 国内 AI 代码工具订阅
适合主要在 IDE 内完成编码，希望少折腾 API 和接入细节的人。

| 工具 | 开发商 | 个人版价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **Trae** | 字节跳动 | Pro $15/人/月起 | 工具体验完整，适合 IDE 内闭环使用 | https://www.trae.ai |
| **Qoder** | 阿里云 | Pro $10/月起 | 面向代码助手场景 | https://qoder.com |
| **CodeBuddy** | 腾讯云 | 专业版 58 元/月 | 国内团队接入成本较低 | https://www.codebuddy.cn |
| **CodeArts 码道** | 华为云 | 公测免费 | 企业场景导向明显 | https://www.huaweicloud.com/product/codearts/ai.html |

## 国外主流 AI 编程订阅
如果你的支付、网络和账号环境已经稳定，海外原厂订阅通常体验更直接，产品节奏也更快。

### 1. IDE 集成型
| 产品 | 套餐 | 价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **GitHub Copilot** | Free | $0 | 适合轻量试用 | https://github.com/features/copilot/plans |
|  | Pro | $10 | 补全 + 聊天的标准入门档 | 同上 |
|  | Pro+ | $39 | 更高高级请求额度 | 同上 |
|  | Business | $19/用户 | 团队管理与安全审计 | 同上 |
| **Cursor** | Free | $0 | 基础功能可体验 | https://cursor.sh/ |
|  | Pro | $20 | 目前最主流的个人开发档 | 同上 |
|  | Pro+ | $60 | 更高优先级和上下文 | 同上 |
| **Windsurf** | Free | $0 | 适合先试用 Agent 能力 | https://windsurf.dev/ |
|  | Pro | $20 | 多文件编辑和更高请求量 | 同上 |

### 2. 大模型原厂编程订阅
| 产品 | 套餐 | 价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **Claude Code (Anthropic)** | Pro | $20 | 强代码推理，适合终端流工作方式 | https://www.anthropic.com/claude/code |
|  | Max | $100 | 更高用量与优先访问 | 同上 |
|  | Ultra | $200 | 面向重度使用者 | 同上 |
| **Gemini Code Assist (Google)** | Free | $0 | 适合先体验 Google 生态 | https://cloud.google.com/gemini/code-assist |
|  | Pro | $20 | 请求额度更高 | 同上 |
|  | Ultra | $200 | 更高档位使用场景 | 同上 |
| **OpenAI Codex** | Plus | $20 | 适合 OpenAI 生态用户 | https://platform.openai.com/docs/models/codex |
|  | Pro | $200 | 高频或团队级使用 | 同上 |

## 怎么做最后决策
如果你只想快速落地，可以直接按下面的顺序判断：
1. 先确定自己买的是 `工具订阅`、`原厂订阅` 还是 `聚合型 Coding Plan`。
2. 再看主要工作位置：IDE、CLI、网页控制台还是 API 集成。
3. 最后再比较价格、额度、模型名单和上下文长度。

简单经验：
- 不想折腾接入：优先工具订阅。
- 想追求原厂体验：优先原厂计划。
- 想兼顾成本、模型切换和多工具复用：优先聚合型。

## 其他参考
- [禾维 AI](https://hvoy.ai/) — 中转站真假检测、价格对比与站点推荐
- [公益站导航](https://ldoh.105117.xyz/) — 第三方资源导航页
- [LDOH 仓库](https://github.com/JoJoJotarou/LDOH) — 对应开源仓库
- [all-api-hub](https://github.com/qixing-jk/all-api-hub) — 统一管理兼容中转站账号、余额、用量和密钥分发
- [awesome-claude-api](https://github.com/peter123023/awesome-claude-api) — Claude API 相关资源与项目汇总
