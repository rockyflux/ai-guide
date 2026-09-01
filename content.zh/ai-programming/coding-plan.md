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

深入理解中转站的程序结构、成本倍率与渠道风险，见 [什么是 API 中转站]({{< relref "ai-programming/api-relay-station" >}})。

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

先按**用途**选类，再比价格。订阅型中转、按量网关、电商代充的风险与计费口径都不一样。倍率 / 平台币换算逻辑见 [什么是 API 中转站]({{< relref "ai-programming/api-relay-station" >}})。选型检测、IDE 补能等见文末 [其他参考](#其他参考)。

{{% hint info %}}
下表价格为约 2026-09 公开页可见标价，中转站调价极快；「登录后见价」表示首页无稳定公开套餐。比价时重点看：**人民币实付**、**额度口径（美元额度 / 积分 / 日重置）**、**倍率与缓存规则**，不要只看「折合多少美金」。
{{% /hint %}}

#### 1. Coding 订阅 / 月付型中转（偏 Claude Code、Codex、Gemini CLI）

适合：想用人民币买「包月或充值额度」，改 Base URL 就能接主流 Coding Agent。这类更接近 Sub2API / 订阅分发逻辑，稳定性与上游来源差异大。

| 服务 | 公开价格参考 | 简述 | 链接 |
|---|---|---|---|
| **foxcode** | 按量约 35 元起（1 亿额度）；月卡约 218–369 元/月（日重置额度） | 低门槛试用；多渠道（含特价 AWS / MAX 等），按量与月卡可叠加 | https://foxcode.rjj.cc/ |
| **88code** | PAYGO ¥66 / $165 额度；月付约 ¥198/月（日额度不滚动） | 统一线路接主流 Coding 客户端；按官方价计 token，站点宣称实付可低至约 ¥0.15/$ | https://www.88code.ai/ |
| **AICodeMirror** | PRO ¥259（约 ¥305 额度）/ MAX ¥559 / ULTRA ¥1259（均约 30 天） | 月付额度包；偏 Claude Code / Codex / Gemini CLI；企业可开票 | https://www.aicodemirror.com/ |
| **AIGetCode** | 标准 ¥399 / 专业 ¥899 / 大师 ¥1799（每 4 周；额度按周发放） | 周期订阅；也支持按量预充；额度可在多 Agent 间共享 | https://www.aigocode.com/ |
| **YesCode** | 按量（宣称无加价，跟上游结算）；团队可设席位配额 | 单 Key 路由 Claude Code / Codex / Gemini，自动故障切换 | https://co.yes.vg/ |
| **XCode** | 登录后见价 | 套餐档位较多，适合按预算挑 | https://xcode.best/ |
| **rightCodes** | 登录后见价（宣传按量 / 包月，成本约官网 1/10） | 企业向 Agent 中转；Codex / Claude Max 等号池 | https://www.right.codes/ |
| **IKunCode** | 登录后见价（偏按量） | 轻量按量接入 | https://api.ikuncode.cc/ |

#### 2. 聚合 API / 按量网关（New API 类，偏多模型统一接入）

适合：已有工具链、接受按 token / 倍率计费、需要 GPT / Claude / Gemini / 国产模型一站式 Key。价格几乎都在控制台定价页，公开首页很少写死套餐。

| 服务 | 公开价格参考 | 简述 | 链接 |
|---|---|---|---|
| **B.AI** | 充值 / Credits（首页促销常见「充值送 credits」；具体档位以控制台为准） | 多模型统一接入与 Agent 向基础设施；偏高频 / 加密支付场景 | https://b.ai/ |
| **packyapi** | 登录后见价（按量） | 统一 LLM 网关，偏个人 / 团队 API 管控 | https://www.packyapi.com/ |
| **快跑API** | 登录后见价（按量） | 多模型聚合，OpenAI 兼容，500+ 模型 | https://kuaipao.ai/ |
| **AtlasAPI** | 登录后见价（按量） | 多供应商路由与故障切换 | https://aixoras.com/ |
| **UniAPI** | 按量；站点示例汇率约 1 USD = 7.3 CNY | 多模型聚合，企业 / 高校向 | https://uniapi.ai/ |
| **ToAPIs** | 登录后见价（按量） | 文本 / 图像 / 视频多模型统一接入 | https://toapis.com/ |
| **APIKEY.FUN** | 登录后见价（按量） | 适配 Claude Code / Codex 的多模型网关 | https://apikey.fun/ |
| **CodexAPIs** | 登录后见价（CDK 充值兑换） | 可查模型价；偏 Codex / Coding 场景 | https://codexapis.com/ |
| **合租巴士** | 登录后见价（宣传低倍率，可开票） | 偏 Claude Code / Codex 的按量中转 | https://hezubus.cc/ |
| **ooioo** | 登录后见价 | Coding Agent 模型接入，OpenAI / Anthropic 兼容 | https://ooioo.work/ |
| **嘀嘀嘀 AI** | 登录后见价 | New API 架构多模型网关 | https://dddai.dev/ |
| **SHUAI API** | 登录后见价 | 统一网关与管理面板 | https://api.shuaiapi.com/ |
| **CodeRelay** | 登录后见价 | New API 架构统一网关 | https://cdn.coderelay.cn/ |
| **GateAI** | 登录后见价 | 单 Key 多模型，智能路由 | https://gateai.cc/ |
| **FastAIToken** | 登录后见价 | 统一鉴权与路由的 OpenAI 兼容中转 | https://www.fastaitoken.com/ |

#### 3. 电商与非官方店铺（代充 / 拼车 / 账号）

风险最高：售后、封号、额度缩水、跑路都更常见；只适合临时试用，且务必核实退款与换号策略。

| 渠道 | 价格口径 | 简述 | 链接 |
|---|---|---|---|
| **淘宝** | 卖家自标 | 搜索不同卖家套餐 | [淘宝搜索](https://s.taobao.com/search?q=claude+code) |
| **闲鱼** | 卖家自标 | 常见拼车、代购、转售 | [闲鱼搜索](https://www.goofish.com/search?q=claude+code) / [team 拼车](https://www.goofish.com/search?q=team拼车) |
| **AtlasAI 店铺** | 店铺标价 | Atlas 聚合中转相关卡密 / 充值（标注自动或人工发货） | https://shop.aixoras.com/ |
| **ldxp 小店（xxdlzs）** | 店铺标价 | IDE 额度、代充 | https://pay.ldxp.cn/shop/xxdlzs |
| **ldxp 小店（xcursor）** | 店铺标价 | 偏 Cursor | https://pay.ldxp.cn/shop/xcursor |
| **ldxp 小店（AEUQ8PP3）** | 店铺标价 | 非官方店铺 | https://pay.ldxp.cn/shop/AEUQ8PP3 |
| **wafase** | 店铺标价 | 非官方店铺 | https://wafase.com/ |
| **Acc-OTAOR** | 店铺标价 | 账号采购（Google / ChatGPT 等） | https://acc.otaor.com/ |

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
| **OpenCode Go** | Go | $10/月（可按需充值） | 想低成本用开源编程模型、可配合任意代理的开发者 | OpenCode 官方低成本订阅；充裕限额，覆盖主流开源 Coding 模型 | https://opencode.ai/zh/go |

---

## 二、大模型厂商原厂计划（原生模型能力，适合明确偏好某家模型的开发者）

{{% hint info %}}
价格随模型与额度策略调整较快（如智谱 2026 年 7 月国内版大幅调价并改为积分制）。下表为约 2026-09 的公开标价，下单前请以各平台页面为准；连续包月 / 包季 / 包年折扣也可能变动。
{{% /hint %}}

| 平台 | 套餐 | 价格（月付标价） | 适合人群 | 核心亮点 | 官方链接 |
|---|---|---|---|---|---|
| **智谱 AI（GLM）** | Lite | 118 元/月 | 直接使用 GLM Coding、普通个人开发者 | GLM-5.3 / Flash；积分制（5 小时 + 周额度）；兼容 Claude Code、Cursor、TRAE 等 | https://www.bigmodel.cn/glm-coding |
|  | Pro | 538 元/月 | 高额度需求、专业开发者、小团队 | 约 6× Lite 积分额度；含图像/视频理解与 MCP 工具链 | https://docs.bigmodel.cn/cn/coding-plan/overview |
|  | Max | 1078 元/月 | 高频、长时段、重度 Agent 场景 | 约 14× Lite 积分额度；非高峰时段积分消耗减半 | 同上 |
| **MiniMax（国内 Token Plan）** | Plus | 49 元/月 | 个人项目、把 M3 装进日常工作流 | 已由旧 Coding Plan 迁至 Token Plan；M3 / M2.7 等多模态共额度；约 3–4 Agent 并发 | https://platform.minimaxi.com/subscribe/token-plan |
|  | Max | 119 元/月 | 每日高频编码与 Agent | 更高周/5 小时窗口额度；约 4–5 Agent 并发；含 Hailuo 视频配额 | 同上 |
|  | Ultra | 469 元/月 | 重度高频、多项目并行 | 最高额度；约 6–7 Agent 并发；适合长会话与多模态工作流 | 同上 |
| **月之暗面（Kimi Code）** | Andante | 约 39 元/月（连续包月；原价约 49） | 轻度 Coding、学习与业余项目 | Kimi Code CLI / IDE 入门档；长上下文文档与代码库分析 | https://www.kimi.com/code |
|  | Moderato | 约 79 元/月（连续包月；原价约 99） | 中频日常开发 | Moderato 起可用 K3（以官网为准）；额度约为 Andante 数倍 | 同上 |
|  | Allegretto | 约 159 元/月（连续包月；原价约 199） | 高频个人开发 | 更高 Code 额度与 Agent 容量 | 同上 |
|  | Allegro | 约 559 元/月（连续包月；原价约 699） | 重度使用或小团队共用 | 最高档 Code 额度；适合长时间高并发 | 同上 |

## 三、国内 AI 代码工具订阅
适合主要在 IDE 内完成编码，希望少折腾 API 和接入细节的人。

| 工具 | 开发商 | 个人版价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **Trae** | 字节跳动 | Lite $3 / Pro $10 / Pro+ $30 / Ultra $100（连续包月；单月更高） | 按 Dollar Usage 计费；Pro 起含 SOLO；新用户可领 7 天 Pro 试用 | https://www.trae.ai/pricing |
| **Qoder** | 阿里云 | Pro $20 / Pro+ $60 / Ultra $200 | Credits 制；Pro 含 Quest Mode / Repo Wiki；支持 BYOK 免费档 | https://qoder.com/pricing |
| **CodeBuddy** | 腾讯云 | Pro $10/月（年付约 $8/月）；Team $40/坐席/月 | 个人 Pro 月给 2,000 积分；插件 / IDE / CLI 三端；国内支付友好 | https://www.codebuddy.ai/docs/zh/ide/Account/pricing |
| **CodeArts 码道** | 华为云 | 公测免费 | 企业场景与华为云生态导向 | https://www.huaweicloud.com/product/codearts/ai.html |

## 国外主流 AI 编程订阅
如果你的支付、网络和账号环境已经稳定，海外原厂订阅通常体验更直接，产品节奏也更快。

### 1. IDE 集成型
| 产品 | 套餐 | 价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **GitHub Copilot** | Free | $0 | 适合轻量试用 | https://github.com/features/copilot/plans |
|  | Pro | $10/月 | 补全 + 聊天的标准入门档（含基础 AI credits） | 同上 |
|  | Pro+ | $39/月 | 更高高级模型与 credits 额度 | 同上 |
|  | Max | $100/月 | 个人最高用量档 | 同上 |
|  | Business | $19/用户/月 | 团队管理与安全审计 | 同上 |
| **Cursor** | Hobby | $0 | 基础 Agent / Composer 可体验 | https://cursor.com/pricing |
|  | Pro | $20/月 | 目前最主流的个人开发档 | 同上 |
|  | Pro+ | $60/月 | 约 3× Pro Agent 额度 | 同上 |
|  | Ultra | $200/月 | 约 20× Pro Agent 额度；优先新功能 | 同上 |
| **Windsurf** | Free | $0 | 轻量日/周配额，可先试用 Agent | https://windsurf.com/pricing |
|  | Pro | $20/月 | 标准配额 + Cascade / 云会话 | 同上 |
|  | Max | $200/月 | 重度 Agent 与前沿模型用户 | 同上 |

### 2. 大模型原厂编程订阅
| 产品 | 套餐 | 价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **Claude（含 Claude Code）** | Pro | $20/月（年付约 $17/月） | 含 Claude Code / Cowork；强代码推理与终端流 | https://claude.com/pricing |
|  | Max 5x | $100/月 | 约 5× Pro 用量；优先高峰访问 | 同上 |
|  | Max 20x | $200/月 | 约 20× Pro 用量；面向重度使用者 | 同上 |
| **Gemini Code Assist (Google)** | Standard | $22.80/用户/月（年付约 $19） | 面向团队的 IDE / CLI 助手；个人 Free/Pro 路径已迁移调整 | https://codeassist.google/products/business |
|  | Enterprise | $54/用户/月（年付约 $45） | 代码定制、更高 Agent/CLI 配额、企业治理 | 同上 |
| **OpenAI Codex（随 ChatGPT）** | Free / Go | $0 / $8/月 | 轻量 Codex 试用；Go 适合轻度任务 | https://learn.chatgpt.com/docs/pricing |
|  | Plus | $20/月 | Web / CLI / IDE / iOS 的 Codex 标准档 | 同上 |
|  | Pro | $100/月起（可选 5x / 20x，20x 为 $200） | 更高 Codex 速率与额度；适合高频 Agent 编码 | 同上 |

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

### 选型与检测
选购或接入中转前，可用下列工具做连通性、真假鉴定与目录检索。

| 服务 | 价格口径 | 简述 | 链接 |
|---|---|---|---|
| **禾维 AI** | 免费检测 / 榜单 | 中转站实测排名、真假鉴定、价格与在线率对比（域名亦见 [hvoyai.com](https://www.hvoyai.com/)） | https://hvoy.ai/ |
| **APIs.you** | 目录导航 | API / 中转目录聚合入口 | https://apis.you/catalog |

### IDE 额度补能
继续用 Cursor / Codex 等客户端本体、只想补高级模型配额时参考；风险与账号条款相关，不等同于 API 中转。

| 服务 | 公开价格参考 | 简述 | 链接 |
|---|---|---|---|
| **CodeRefill** | 日卡约 3.99 元；周卡 15.9 元；月卡 35.9 元；季卡 99.9 元 | 一套 License 覆盖 Cursor、Grok、Kiro、Codex（Codex 资源可能受限） | https://zy.harsidol.cn/codeRefill/ |

### 相关文档与仓库
- [什么是 API 中转站]({{< relref "ai-programming/api-relay-station" >}}) — 程序结构、成本倍率、渠道风险
- [公益站导航](https://ldoh.105117.xyz/) — 第三方资源导航页
- [LDOH 仓库](https://github.com/JoJoJotarou/LDOH) — 对应开源仓库
- [all-api-hub](https://github.com/qixing-jk/all-api-hub) — 统一管理兼容中转站账号、余额、用量和密钥分发
- [awesome-claude-api](https://github.com/peter123023/awesome-claude-api) — Claude API 相关资源与项目汇总
