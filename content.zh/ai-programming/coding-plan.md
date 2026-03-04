---
title: AI Coding Plan
weight: 10
bookToc: false
noTocArea: true
bookHidden: true
---


## Claude Code 中转站套餐

> 官方账号的订阅费用较高，个人开发者通常难以长期承担；同时在部分地区访问存在网络与合规风险，账号也可能因使用方式不当被限制，Claude 最经典的就是封 ip，检测到节点不行就封，这公司本就不让中国人用的。
>
> 因此，一些用户会选择第三方 API 中转服务。此类服务通常按月收费，价格区间大约在 20–200 元/月，提供一定额度的请求量以及相对稳定的 API 访问能力，更适合个人开发者或小团队做测试与轻量开发使用。
>
> **Claude Code API 来源方式**：① 官方 API 账号直接接入；② 购买 Claude Max 订阅后由服务方聚合分发；③ 非官方接口（如逆向 IDE 内部 API 等）。


### 中转站服务参考

| 服务 / 渠道 | 特点 | 链接 |
|---|---|---|
| **foxcode** | 35块/1亿token额度 | https://foxcode.rjj.cc/ |
| **88code** | 价格实惠，多种套餐选择，适合不同需求 | https://www.88code.ai/ |
| **YesCode** | 价格实惠，多种套餐选择，适合不同需求 | https://co.yes.vg/ |
| **IKunCode** | 按量使用 | https://api.ikuncode.cc/ |
| **rightCodes** | 价格实惠，多种套餐选择，适合不同需求 | https://www.right.codes/ |
| **packyapi** | 稳定 API 访问，价格合理，适合个人开发者 | https://www.packyapi.com/ |
| **AICodeMirror** | 低至¥259/月 | https://www.aicodemirror.com/ |
| **AIGetCode** | 低至¥399/4周 | https://www.aigocode.com/ |
| **APIs.you** | API 目录聚合，多服务可选 | https://apis.you/catalog |
| **淘宝** | 搜索「claude code」可找到各类中转套餐 | [淘宝搜索](https://s.taobao.com/search?q=claude+code) |
| **闲鱼** | 二手/代购 Claude Code 账号或中转服务 | [闲鱼搜索](https://www.goofish.com/search?q=claude+code) |

{{% hint warning %}}
中转服务依赖第三方实现，稳定性与合规性需自行评估；电商平台交易请谨慎核实卖家与套餐详情。
{{% /hint %}}


## 国内企业集中采购策略
-  cursor 或者 copilot 的团队版
-  Claude Code Max/OpenRouter API分发Key


<br>

## 国内主流大模型 Coding Plan
以下是国内主流大模型 Coding Plan 完整列表，含价格、特点、官方链接（截至2026年2月28日）：

### 一、云厂商聚合型 Coding Plan
| 平台 | 套餐 | 价格（首月/续费） | 核心特点 | 官方链接 |
|---|---|---|---|---|
| **阿里云百炼** | Lite | 7.9元/40元/月 | 多模型聚合（Qwen3.5/GLM-5/Kimi/MiniMax），兼容OpenAI/Anthropic协议，月18,000次请求 | https://www.aliyun.com/benefit/ai/aistar |
| | Pro | 39.9元/200元/月 | 月90,000次请求，适合高频开发 | https://bailian.console.aliyun.com/cn-beijing/?tab=model#/efm/coding_plan |
| **火山引擎方舟** | Lite | 9.9元/40元/月 | 字节自研Doubao-Seed-Code+第三方模型，Auto路由，256K上下文 | https://www.volcengine.com/activity/codingplan |
| | Pro | 49.9元/200元/月 | 额度为Lite 5倍，适合复杂项目 | https://www.volcengine.com/product/ark |
| **百度千帆** | Lite | 9.9元/40元/月 | 集成GLM-4.7/DeepSeek-V3.2，控制台一键切换模型，兼容主流工具 | https://cloud.baidu.com/product/codingplan.html |
| | Pro | 49.9元/200元/月 | 月90,000次请求，企业级支持 | https://cloud.baidu.com/product/qianfan |
| **无问芯穹** | Lite | 19.9元/月 | 低价聚合，适配IDE/终端，月12,000次请求 | https://cloud.infini-ai.com/genstudio/code |
| | Pro | 49.9元/月 | 月60,000次请求，团队协作友好 | https://docs.infini-ai.com/gen-studio/coding-plan/ |


### 二、大模型厂商原厂 Coding Plan
| 平台 | 套餐 | 价格（月/包季） | 核心特点 | 官方链接 |
|---|---|---|---|---|
| **智谱AI** | Lite | 49元/44元 | GLM-5/4.7，MCP/联网/视觉，SWE-Bench领先 | https://www.bigmodel.cn/glm-coding |
| | Pro | 149元/134元 | 额度×5，优先保障 | https://docs.bigmodel.cn/cn/coding-plan/overview |
| | Max | 469元/422元 | 额度×20，高峰优先 | 同上 |
| **MiniMax** | Starter | 29元/月 | M2.5模型，40 prompts/5h，高推理能力 | https://platform.minimaxi.com/subscribe/coding-plan |
| | Plus | 49元/月 | 100 prompts/5h | 同上 |
| | Max | 119元/月 | 300 prompts/5h | 同上 |
| **月之暗面（Kimi）** | Code | 49元/月 | K2.5，262K上下文，长文本/文档转代码强 | https://kimi.com/code |
| **华为云码道** | 公测 | 免费 | 盘古模型，行业定制（电力/港口），AIGC代码占比高 | https://www.huaweicloud.com/product/codearts/ai.html |


### 三、国内AI代码工具
| 工具名称 | 开发商 | 个人版价格  | 官方链接 |
|---|---|---|---|
| **Trae** | 字节跳动 | Pro $15/人/月起 | https://www.trae.ai |
| **Qoder** | 阿里云 | Pro $10/月起  | https://qoder.com |
| **CodeBuddy** | 腾讯云 | 专业版58元/月  | https://www.codebuddy.cn |
| **CodeArts 码道** | 华为云 | 公测免费 | https://www.huaweicloud.com/product/codearts/ai.html |



<br>

## 国外主流AI编程订阅产品

以下是**国外主流AI编程订阅产品**的完整列表，含**价格、核心特点、官方链接**（截至2026年2月28日，价格为美元/月）：

### 一、主流IDE集成型（最常用）
| 产品 | 套餐 | 价格 | 核心特点 | 官方链接 |
|---|---|---|---|---|
| **GitHub Copilot** | Free | $0 | 每月50次高级请求，基础补全 | https://github.com/features/copilot/plans |
| | Pro | $10 | 无限补全、GPT-5 mini、300次高级请求/月 | 同上 |
| | Pro+ | $39 | 全模型（含Claude Opus）、1500次高级请求 | 同上 |
| | Business | $19/用户 | 企业管理、安全审计、团队策略 | 同上 |
| **Cursor** | Free | $0 | 基础功能、有限Agent请求 | https://cursor.sh/ |
| | Pro | $20 | 全文件重构、Claude-3.7/GPT-4o、无限聊天 | 同上 |
| | Pro+ | $60 | 更高优先级、更大上下文 | 同上 |
| **Windsurf** | Free | $0 | 每月25次请求 | https://windsurf.dev/ |
| | Pro | $20 | 无限请求、多文件编辑 | 同上 |

第三方续杯工具：
- https://wwaoo.lanzoue.com/b00od5g23a
- https://pay.ldxp.cn/shop/xxdlzs

### 二、大模型原厂编程订阅
| 产品 | 套餐 | 价格 | 核心特点 | 官方链接 |
|---|---|---|---|---|
| **Claude Code (Anthropic)** | Pro | $20 | Sonnet 4.6、200K上下文、代码推理强 | https://www.anthropic.com/claude/code |
| | Max | $100 | 5倍用量、优先访问 | 同上 |
| | Ultra | $200 | 20倍用量、生产级 | 同上 |
| **Gemini Code Assist (Google)** | Free | $0 | Gemini 2.5 Flash、基础补全 | https://cloud.google.com/gemini/code-assist |
| | Pro | $20 | 1500请求/天、Gemini 3.1 Pro | 同上 |
| | Ultra | $200 | 2000请求/天、Gemini 3.1 Ultra | 同上 |
| **OpenAI Codex** | Plus | $20 | GPT-5.2、代码生成/调试、API | https://platform.openai.com/docs/models/codex |
| | Pro | $200 | 无限制、企业级支持 | 同上 |


## 其他

- [公益站导航](https://ldoh.105117.xyz/) [https://github.com/JoJoJotarou/LDOH](https://github.com/JoJoJotarou/LDOH)
- [https://github.com/qixing-jk/all-api-hub](https://github.com/qixing-jk/all-api-hub) 一站式管理 New API 兼容中转站账号：余额/用量看板、自动签到、密钥一键导出到常用应用、网页内 API 可用性测试、渠道与模型同步/重定向
