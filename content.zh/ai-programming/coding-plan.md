---
title: Coding Plan 与渠道
weight: 30
bookToc: true
noTocArea: false
bookHidden: false
---

## AI 编程套餐与模型渠道

## 购买前的计费与选型要点

比价前先记住三点：

1. **按量计费通常看三项**：输入、输出和缓存。只报输入价、不说明输出价和缓存规则，不能直接比较。中转站还可能在官方价格上加倍率，见[API 中转站]({{< relref "ai-programming/api-relay-station" >}})。
2. **能力、价格、速度通常不能同时拉满**。包月套餐看似便宜，实际还要看日额度、可用模型和高峰限速。先确定自己最看重能力、成本还是速度。
3. **Agent 不要只看单价**。多轮工具调用更依赖首字速度，长会话则受缓存命中率影响。对比中转时，还要确认写缓存是否收费、能否跨会话命中，并参考文末 [Kan LLM](#中转检测与选型工具) 的延迟数据。

![购买前比价三点清单](/images/coding-plan/01-infographic-pricing-checklist.png)

## 第三方中转与接入渠道

主要风险：

- 稳定性、额度和风控由第三方决定。
- 上游来源可能不透明，套餐规则也可能频繁调整。
- 私有渠道可能违反平台服务条款，存在封号、额度缩水和跑路风险。
- 电商渠道要重点核实售后、退款、封号和更换策略。

### 中转服务分类

先按**用途**分类，再比较价格。订阅型中转、按量网关和电商代充的计费方式与风险不同。倍率和平台币换算见[API 中转站]({{< relref "ai-programming/api-relay-station" >}})，检测工具见文末[检测工具与补充资源](#检测工具与补充资源)。

![中转渠道三类与风险](/images/coding-plan/02-comparison-relay-channels.png)

> [!NOTE]
> 下表为约 2026-09 公开页可见标价，中转站调价较快。「登录后见价」表示首页没有稳定公开套餐。重点核对：**人民币实付**、**额度口径**（美元额度、积分或日重置）、**倍率和缓存规则**。

#### 1. Coding 订阅 / 月付型中转（偏 Claude Code、Codex、Gemini CLI）

适合想用人民币购买包月或充值额度，并通过 Base URL 接入主流 Coding Agent 的用户。这类服务接近 Sub2API 或订阅分发，稳定性和上游来源差异较大。

| 服务 | 公开价格参考 | 简述 | 链接 |
|---|---|---|---|
| **foxcode** | 按量约 35 元起（1 亿额度）；月卡约 218 至 369 元/月（日重置） | 低门槛试用；支持多渠道，按量和月卡可叠加 | https://foxcode.rjj.cc/ |
| **88code** | PAYGO ¥66 / $165 额度；月付约 ¥198/月（日额度不滚动） | 统一接入主流 Coding 客户端；按官方价计 token | https://www.88code.ai/ |
| **AICodeMirror** | PRO ¥259（约 ¥305 额度）/ MAX ¥559 / ULTRA ¥1259（约 30 天） | 偏 Claude Code、Codex、Gemini CLI；企业可开票 | https://www.aicodemirror.com/ |
| **AIGetCode** | 标准 ¥399 / 专业 ¥899 / 大师 ¥1799（每 4 周，额度按周发放） | 支持周期订阅和按量预充，额度可多 Agent 共享 | https://www.aigocode.com/ |
| **YesCode** | 按量，宣称无加价；团队可设席位配额 | 单 Key 路由 Claude Code、Codex、Gemini，支持故障切换 | https://co.yes.vg/ |
| **XCode** | 登录后见价 | 套餐较多，适合按预算选择 | https://xcode.best/ |
| **rightCodes** | 登录后见价，宣传按量或包月成本约官网 1/10 | 企业向 Agent 中转，支持 Codex、Claude Max 等号池 | https://www.right.codes/ |
| **IKunCode** | 登录后见价，偏按量 | 轻量按量接入 | https://api.ikuncode.cc/ |

#### 2. 聚合 API / 按量网关（New API 类）

适合已有工具链、接受按 token 或倍率计费，并需要统一接入 GPT、Claude、Gemini 和国产模型的用户。具体价格通常要登录控制台查看。

| 服务 | 公开价格参考 | 简述 | 链接 |
|---|---|---|---|
| **B.AI** | 充值 / Credits，具体档位以控制台为准 | 多模型接入和 Agent 基础设施，偏高频及加密支付场景 | https://b.ai/ |
| **packyapi** | 登录后见价，按量 | LLM 网关，支持个人和团队管理 | https://www.packyapi.com/ |
| **快跑API** | 登录后见价，按量 | 多模型聚合，OpenAI 兼容，500+ 模型 | https://kuaipao.ai/ |
| **AtlasAPI** | 登录后见价，按量 | 多供应商路由和故障切换 | https://aixoras.com/ |
| **UniAPI** | 按量，站点示例汇率约 1 USD = 7.3 CNY | 多模型聚合，偏企业和高校 | https://uniapi.ai/ |
| **ToAPIs** | 登录后见价，按量 | 文本、图像、视频多模型接入 | https://toapis.com/ |
| **APIKEY.FUN** | 登录后见价，按量 | 适配 Claude Code、Codex 的多模型网关 | https://apikey.fun/ |
| **CodexAPIs** | 登录后见价，CDK 充值兑换 | 可查模型价格，偏 Codex 和 Coding | https://codexapis.com/ |
| **合租巴士** | 登录后见价，宣传低倍率，可开票 | 偏 Claude Code、Codex 的按量中转 | https://hezubus.cc/ |
| **ooioo** | 登录后见价 | Coding Agent 接入，兼容 OpenAI、Anthropic | https://ooioo.work/ |
| **嘀嘀嘀 AI** | 登录后见价 | New API 架构多模型网关 | https://dddai.dev/ |
| **SHUAI API** | 登录后见价 | 统一网关和管理面板 | https://api.shuaiapi.com/ |
| **CodeRelay** | 登录后见价 | New API 架构统一网关 | https://cdn.coderelay.cn/ |
| **GateAI** | 登录后见价 | 单 Key 多模型，支持智能路由 | https://gateai.cc/ |
| **FastAIToken** | 登录后见价 | OpenAI 兼容中转，提供统一鉴权和路由 | https://www.fastaitoken.com/ |
| **露娜（freeapi）** | 登录后见价，按量 | AI API Gateway，多模型聚合接入 | https://freeapi.site/register?aff=F22JVN2537PW |
| **Wokey** | 按量，宣称相对官价约 1/10；USDT 充值 | OpenRouter 类聚合，兼容 OpenAI / Anthropic；每条响应带 TEE 证明，可离线核官方上游 | https://wokey.ai/ |

#### 3. 电商与非官方店铺（代充、拼车、账号）

风险最高，售后、封号、额度缩水和跑路更常见。只适合临时试用，购买前务必确认退款和换号策略。

| 渠道 | 价格口径 | 简述 | 链接 |
|---|---|---|---|
| **淘宝** | 卖家自标 | 搜索不同卖家套餐 | [淘宝搜索](https://s.taobao.com/search?q=claude+code) |
| **闲鱼** | 卖家自标 | 常见拼车、代购和转售 | [闲鱼搜索](https://www.goofish.com/search?q=claude+code) / [team 拼车](https://www.goofish.com/search?q=team拼车) |
| **AtlasAI 店铺** | 店铺标价 | Atlas 聚合中转卡密和充值 | https://shop.aixoras.com/ |
| **ldxp 小店（xxdlzs）** | 店铺标价 | IDE 额度、代充 | https://pay.ldxp.cn/shop/xxdlzs |
| **ldxp 小店（xcursor）** | 店铺标价 | 偏 Cursor | https://pay.ldxp.cn/shop/xcursor |
| **ldxp 小店（AEUQ8PP3）** | 店铺标价 | 非官方店铺 | https://pay.ldxp.cn/shop/AEUQ8PP3 |
| **wzyp 小店（2VWX76A4）** | 店铺标价 | 非官方店铺 | https://wzyp.cn/shop/2VWX76A4 |
| **wzyp 小店（A8KYS0FY）** | 店铺标价 | 非官方店铺 | https://wzyp.cn/shop/A8KYS0FY |
| **wafase** | 店铺标价 | 非官方店铺 | https://wafase.com/ |
| **Acc-OTAOR** | 店铺标价 | Google、ChatGPT 等账号采购 | https://acc.otaor.com/ |

### 配套工具

已有 ChatGPT Web session 时，可用 [GPTSession2CPAandSub2API](https://github.com/gtxx3600/GPTSession2CPAandSub2API) 在浏览器本地转换为 CPA 或 Sub2API JSON，面向 Plus，与上表中转套餐无关。

> [!WARNING]
> 上表服务适合补接入能力或短期试用，不适合高敏感、强稳定性或长期不可中断的生产流程。部分私有渠道可能违反平台服务条款，链接仅供参考，不构成推荐或担保。重要项目优先选择官方订阅或企业采购。

## 企业团队采购

团队统一采购通常有三类：

- 直接采购 Cursor 或 GitHub Copilot 团队版。
- 采购 Claude Code Max、OpenRouter 等可统一分发的上游能力。
- 采购国内聚合平台，统一下发 Key 和接入规范。

可参考：[AI 大模型 API 聚合平台]({{< relref "ai-programming/api-aggregation-platforms" >}})，了解 OpenRouter、小马算力、DMXAPI 等平台。

## 国内官方 Coding Plan

以下用于快速横向比较，价格和套餐以平台页面为准。

![国内官方 Coding Plan 三条路](/images/coding-plan/03-framework-domestic-plans.png)

### 云厂商聚合方案

适合需要多模型切换和统一管理的开发者。

| 平台 | 套餐 | 价格（首月 / 次月 / 续费） | 适合人群 | 核心亮点 | 官方链接 |
|---|---|---|---|---|---|
| **阿里云百炼** | Lite | 7.9 元 / 20 元 / 40 元/月 | 低成本试用、预算有限 | 通义千问、GLM、Kimi、MiniMax 多模型聚合 | https://www.aliyun.com/benefit/ai/aistar |
|  | Pro | 39.9 元 / 100 元 / 200 元/月 | 高频开发、复杂项目、团队协作 | 高额度、企业支持、兼容主流 IDE | https://bailian.console.aliyun.com/cn-beijing/?tab=model#/efm/coding_plan |
| **腾讯云 Coding Plan** | Lite | 7.9 元 / 20 元 / 40 元/月（限时至 2026.04.19） | 混元用户、需要兼容主流工具 | 混元 2.0、GLM、Kimi、MiniMax 多模型 | https://cloud.tencent.com/act/pro/codingplan |
|  | Pro | 39.9 元 / 100 元 / 200 元/月（限时至 2026.04.19） | 复杂项目、团队协作、高频使用 | 高配额、企业服务、腾讯云生态 | https://cloud.tencent.com/act/pro/codingplan |
| **火山引擎方舟** | Lite | 9.9 元 / 20 元 / 40 元/月 | 豆包用户、需要自动路由 | 豆包、DeepSeek、Kimi、GLM 等多模型，支持自动路由 | https://www.volcengine.com/activity/codingplan |
|  | Pro | 49.9 元 / 100 元 / 200 元/月 | 高配额和企业开发 | 高额度、稳定性较强 | https://www.volcengine.com/product/ark |
| **百度千帆** | Lite | 9.9 元 / 20 元 / 40 元/月 | 文心用户、需要控制台切换模型 | 多模型支持，控制台切换，无需改代码 | https://cloud.baidu.com/product/codingplan.html |
|  | Pro | 49.9 元 / 100 元 / 200 元/月 | 高频开发、企业用户 | 高额度、企业支持、百度云生态 | https://cloud.baidu.com/product/qianfan |
| **无问芯穹** | Lite | 19.9 元/月 | 预算有限、需要 IDE / CLI 接入 | 轻量多模型，支持 IDE 和 CLI | https://cloud.infini-ai.com/genstudio/code |
|  | Pro | 49.9 元/月 | 小团队长期协作 | 团队功能更完整 | https://docs.infini-ai.com/gen-studio/coding-plan/ |
| **华为云码道** | 公测版 | 免费 | 想体验行业方案、华为生态用户 | 华为自研模型，公测期间全功能免费 | https://www.huaweicloud.com/product/codearts/ai.html |
| **OpenCode Go** | Go | $10/月，可按需充值 | 想低成本使用开源编程模型 | 官方订阅，覆盖主流开源 Coding 模型 | https://opencode.ai/zh/go |

---

### 模型厂商原生方案

适合明确偏好某家模型、希望使用原生能力的开发者。

> [!NOTE]
> 价格和额度调整较快。下表为约 2026-09 的公开标价，连续包月、包季和包年折扣也可能变化，下单前以平台页面为准。

| 平台 | 套餐 | 价格（月付标价） | 适合人群 | 核心亮点 | 官方链接 |
|---|---|---|---|---|---|
| **智谱 AI（GLM）** | Lite | 118 元/月 | GLM Coding 用户、普通个人开发者 | GLM-5.3 / Flash；积分制；兼容 Claude Code、Cursor、TRAE | https://www.bigmodel.cn/glm-coding |
|  | Pro | 538 元/月 | 高额度需求、专业开发者、小团队 | 约 6× Lite 额度；支持图像、视频理解和 MCP | https://docs.bigmodel.cn/cn/coding-plan/overview |
|  | Max | 1078 元/月 | 高频、长时段、重度 Agent | 约 14× Lite 额度；非高峰积分消耗减半 | 同上 |
| **MiniMax（国内 Token Plan）** | Plus | 49 元/月 | 个人项目、日常工作流 | M3 / M2.7 等多模态共额度；约 3 至 4 Agent 并发 | https://platform.minimaxi.com/subscribe/token-plan |
|  | Max | 119 元/月 | 高频编码和 Agent | 更高周额度和 5 小时窗口额度；约 4 至 5 Agent 并发 | 同上 |
|  | Ultra | 469 元/月 | 重度高频、多项目并行 | 最高额度；约 6 至 7 Agent 并发 | 同上 |
| **月之暗面（Kimi Code）** | Andante | 约 39 元/月（连续包月，原价约 49） | 轻度 Coding、学习和业余项目 | CLI / IDE 入门档，支持长上下文分析 | https://www.kimi.com/code |
|  | Moderato | 约 79 元/月（连续包月，原价约 99） | 中频日常开发 | 起支持 K3，额度约为 Andante 数倍 | 同上 |
|  | Allegretto | 约 159 元/月（连续包月，原价约 199） | 高频个人开发 | 更高 Code 额度和 Agent 容量 | 同上 |
|  | Allegro | 约 559 元/月（连续包月，原价约 699） | 重度使用或小团队共用 | 最高档 Code 额度，适合长时间高并发 | 同上 |

### 国内 AI 编程工具订阅

适合主要在 IDE 内编码、不想折腾 API 和接入细节的用户。

| 工具 | 开发商 | 个人版价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **Trae** | 字节跳动 | Lite $3 / Pro $10 / Pro+ $30 / Ultra $100（连续包月，单月更高） | Dollar Usage 计费；Pro 起含 SOLO；新用户可试用 7 天 Pro | https://www.trae.ai/pricing |
| **Qoder** | 阿里云 | Pro $20 / Pro+ $60 / Ultra $200 | Credits 制；Pro 含 Quest Mode、Repo Wiki；支持 BYOK 免费档 | https://qoder.com/pricing |
| **CodeBuddy** | 腾讯云 | Pro $10/月（年付约 $8/月）；Team $40/坐席/月 | Pro 每月 2,000 积分；支持插件、IDE、CLI，国内支付友好 | https://www.codebuddy.ai/docs/zh/ide/Account/pricing |
| **CodeArts 码道** | 华为云 | 公测免费 | 面向企业和华为云生态 | https://www.huaweicloud.com/product/codearts/ai.html |

## 海外官方 Coding Plan

支付、网络和账号环境稳定时，海外原厂订阅通常接入更直接，产品更新也更快。

### IDE 集成工具

| 产品 | 套餐 | 价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **GitHub Copilot** | Free | $0 | 轻量试用 | https://github.com/features/copilot/plans |
|  | Pro | $10/月 | 补全和聊天，含基础 AI credits | 同上 |
|  | Pro+ | $39/月 | 更高高级模型和 credits 额度 | 同上 |
|  | Max | $100/月 | 个人最高用量档 | 同上 |
|  | Business | $19/用户/月 | 团队管理和安全审计 | 同上 |
| **Cursor** | Hobby | $0 | 体验基础 Agent / Composer | https://cursor.com/pricing |
|  | Pro | $20/月 | 主流个人开发档 | 同上 |
|  | Pro+ | $60/月 | 约 3× Pro Agent 额度 | 同上 |
|  | Ultra | $200/月 | 约 20× Pro Agent 额度，优先新功能 | 同上 |
| **Windsurf** | Free | $0 | 轻量日 / 周配额，可试用 Agent | https://windsurf.com/pricing |
|  | Pro | $20/月 | 标准配额，含 Cascade 和云会话 | 同上 |
|  | Max | $200/月 | 重度 Agent 和前沿模型用户 | 同上 |

### 模型厂商编程订阅

| 产品 | 套餐 | 价格 | 特点 | 官方链接 |
|---|---|---|---|---|
| **Claude（含 Claude Code）** | Pro | $20/月（年付约 $17/月） | 含 Claude Code、Cowork；代码推理和终端流能力强 | https://claude.com/pricing |
|  | Max 5x | $100/月 | 约 5× Pro 用量，优先高峰访问 | 同上 |
|  | Max 20x | $200/月 | 约 20× Pro 用量，适合重度使用 | 同上 |
| **Gemini Code Assist（Google）** | Standard | $22.80/用户/月（年付约 $19） | 团队 IDE / CLI 助手；个人路径已调整 | https://codeassist.google/products/business |
|  | Enterprise | $54/用户/月（年付约 $45） | 代码定制、更高 Agent / CLI 配额、企业治理 | 同上 |
| **OpenAI Codex（随 ChatGPT）** | Free / Go | $0 / $8/月 | 轻量试用；Go 适合轻度任务 | https://learn.chatgpt.com/docs/pricing |
|  | Plus | $20/月 | Web、CLI、IDE、iOS 标准档 | 同上 |
|  | Pro | $100/月起，可选 5x / 20x，20x 为 $200 | 更高速率和额度，适合高频 Agent 编码 | 同上 |

## 选购建议

按这个顺序判断：

1. 确定购买的是`工具订阅`、`原厂订阅`还是`聚合型 Coding Plan`。
2. 确定主要工作位置：IDE、CLI、网页控制台还是 API。
3. 对齐输入、输出、缓存价格，并确认额度、模型名单和上下文长度。
4. 重度使用 Agent 时，额外比较首字速度和缓存命中率。

简单经验：

- 不想折腾接入，选工具订阅。
- 想要原厂体验，选原厂计划。
- 想兼顾成本、模型切换和多工具复用，选聚合型计划。
- 能力、价格、速度很难同时拉满，先确定最看重的 1 至 2 项。

![选购判断顺序](/images/coding-plan/04-flowchart-purchase-path.png)

## 检测工具与补充资源

### 中转检测与选型工具

中转接入前，可以按“延迟与可用率 → 可信度排行 → 模型指纹检测”的顺序检查。若渠道宣称走官方上游，还可对照 TEE 远程证明（见下表 Proof of Observation），不必只信运营方口头保证。

| 服务 | 价格口径 | 简述 | 链接 |
|---|---|---|---|
| **Kan LLM** | 免费监测 | 对比首 Token 延迟、TPS、可用率和稳定性 | https://www.kanllm.com/ |
| **真测 Ztest** | 免费排行 | 测试模型真实性、响应质量和可用性，提供可信度评分 | https://ztest.ai/ |
| **PriceAI 中转检测** | 需登录，按检测强度消耗临时 Key | 检测协议外观、能力指纹、线路和计费口径，主站不保存 Key | https://priceai.cc/api-transit/detector |
| **meow 模型检测** | 自费，使用自己的 API 账户 | 通过模型指纹比对申报模型和实际线路 | https://meowllm.top/ |
| **ModelTrace** | 免费，浏览器本地计算 | 三次长整数挑战提取输出指纹，对照统一指纹库判断模型家族与版本，适合中转降智 / 路由验真 | https://xqy2006.github.io/ModelTrace/ |
| **禾维 AI** | 免费检测 / 榜单 | 对比中转实测排名、真假、价格和在线率，域名亦见 [hvoyai.com](https://www.hvoyai.com/) | https://hvoy.ai/ |
| **HLWY AI Checker** | 开源工具 | 检查第三方 AI API 是否掺假以及渠道一致｜基于 LLM 指纹的 AI 模型识别 | https://github.com/hanlinwenyuan/hlwy-ai-checker |
| **APIs.you** | 目录导航 | API 和中转目录聚合入口 | https://apis.you/catalog |
| **Proof of Observation** | 免费演示 | TEE 远程证明 + 响应签名：核 PCR0、验签、链到 AWS Nitro，用来自证中转没有偷换模型或改响应 | https://focuxdot.github.io/proof-of-observation/tee-attestation-demo.html |

### IDE 配额补充

继续使用 Cursor、Codex 等客户端，只补高级模型配额时可参考。它与 API 中转不同，仍需注意账号和服务条款。

| 服务 | 公开价格参考 | 简述 | 链接 |
|---|---|---|---|
| **CodeRefill** | 日卡约 3.99 元；周卡 15.9 元；月卡 35.9 元；季卡 99.9 元 | 一套 License 覆盖 Cursor、Grok、Kiro、Codex，Codex 资源可能受限 | https://zy.harsidol.cn/codeRefill/ |

### 延伸阅读与开源项目

- [API 中转站]({{< relref "ai-programming/api-relay-station" >}})：程序结构、成本倍率和渠道风险
- [公益站导航](https://ldoh.105117.xyz/)：第三方资源导航
- [LDOH 仓库](https://github.com/JoJoJotarou/LDOH)：对应开源仓库
- [all-api-hub](https://github.com/qixing-jk/all-api-hub)：管理中转站账号、余额、用量和密钥分发
- [awesome-claude-api](https://github.com/peter123023/awesome-claude-api)：Claude API 资源与项目汇总
- [Proof of Observation](https://focuxdot.github.io/proof-of-observation/tee-attestation-demo.html)：TEE 远程证明如何自证中转未偷换
- [Wokey](https://wokey.ai/)：按量聚合，响应可离线核官方上游
