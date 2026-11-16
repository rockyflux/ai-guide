# 开工准备

想法要变成别人能打开的应用，通常还得准备：**托管 / 服务器**、**域名**，以及（面向国内正式上线时）**备案与合规**。

## 部署要准备什么

| 资源 | 解决什么 | 典型形态 |
|------|----------|----------|
| **服务器 / 托管** | 放前端、后端、数据库、文件 | 静态托管、Serverless、容器 PaaS、云主机（VPS） |
| **域名** | 稳定入口与 HTTPS | `.com` / `.cn` 等 |

个人 Demo 可先用平台自带域名（如 `*.vercel.app`），确认要长期对外再买域名。

## 国内、香港、海外：怎么选

先想清楚用户主要在哪访问，再选机房与是否备案。

### 国内：要备案

- 国内云主机 / CDN 挂**自己的域名**做网站，一般要做 **ICP 备案**（有时还有公安备案等）。
- 微信小程序等国内上线流程，往往也要求主体与域名备案齐全——**该备就得备**。
- 备案常要数周，别排到上线前一天。

备案站的内容必须合法。域名过期被他人拿去做违规站，**原主体仍可能被追责**；UGC、外链若不管好，也会牵连运营方。内容拿不准时，不要硬走备案站，可改用海外 / 香港验证，或做成小程序内、内网、桌面端等不依赖自有备案站的形态。

### 香港 CN2：免备案，又照顾国内访问

香港机房**不走大陆 ICP 备案**，但比美欧节点更近大陆。选带 **CN2**（尤其是 CN2 GIA 一类优化回国线路）的 VPS 时，电信用户延迟通常更稳；联通 / 移动要看商家是否三网优化，下单前建议自己 ping / 测速。

适合：主要服务大陆用户、又想尽快上线、暂不备案的个人站 / API / 小型业务。这是**付费**路线，商家与线路质量参差不齐。选型时可交叉看：

- [VPS Picks](https://vps.appsail.dev/?sort=testip&dir=asc)：按测试 IP 延迟排序，可筛 CN2 / 香港 / 运营商
- [VPStarter 家宽测速榜](https://vpstarter.com/rankings/)：大陆家庭宽带实测（含晚高峰），看下行与稳定度

商家示例：[DMIT](https://dmit.io/)（香港 / 洛杉矶 / 东京等，常见 CN2 GIA 档）。重要业务还要看清带宽、防御与售后；内容仍须守法，免备案不等于没有法规约束。

### 海外：免备案，延迟另算

Vercel、Cloudflare、美欧免费 VPS 等一般免备案，适合原型、个人项目、海外用户。代价是大陆直连更抖，免费层常有休眠、额度、非商用限制；支付 / 短信等也可能要另接国内服务。

## 免费资源怎么用

1. 先验证产品：静态站用 GitHub Pages / Cloudflare Pages；全栈 Demo 用 Vercel + 免费库。
2. 免费层默认会休眠、会过期，别当生产 SLA；商用条款与账单告警先看清。
3. 要国内低延迟或小程序配套：腾讯云 CloudBase，或国内轻量机 + 备案。
4. 要 SSH / 常驻进程：见下文 VPS；面向大陆又不备案时，优先考虑香港 CN2。

额度与活动常变，下单前以官网为准（清单参考 [免费云开发资源对比表](https://feishu.doubao.com/sheets/PSrEsMaN7hFzHUtp4cXc4bKTnrA)）。

## 免费资源对比

### 静态 / 全栈托管

| 服务 | 官网 | 免费层要点 | 休眠 / 限制 | 适用场景 |
|------|------|------------|-------------|----------|
| Vercel | [vercel.com](https://vercel.com/) | 函数 / CDN 约百万次级；传输约 100GB 等 | Hobby 仅非商用；超额暂停 | Next.js / SSR / Demo |
| GitHub Pages | [pages.github.com](https://pages.github.com/) | 仓约 1GB；免费 SSL、自定义域名 | 仅静态 | 文档站、博客、VitePress |
| Netlify | [netlify.com](https://www.netlify.com/) | 约 300 分钟构建、100GB 带宽 | 函数与构建额度紧 | Git 部署、轻量 API、预览 |
| Deno Deploy | [deno.com/deploy](https://deno.com/deploy) | 约百万请求、内置 KV | 有 CPU / 请求上限 | 轻量 API、MCP、边缘后端 |
| Surge.sh | [surge.sh](https://surge.sh/) | CLI 一键静态托管 | 无后端 | 临时 Demo |
| Firebase Hosting | [文档](https://firebase.google.com/docs/hosting) | 约 10GB 存储；流量按日限额 | 超限暂停 | Google 生态、带 Auth 前端 |

### 数据库

| 服务 | 官网 | 免费层要点 | 休眠 / 限制 | 适用场景 |
|------|------|------------|-------------|----------|
| Supabase | [supabase.com](https://supabase.com/) | 约 2 个活跃项目；每库约 500MB 等 | 闲置约 7 天休眠 | Postgres、Auth、Realtime、RAG |
| Turso | [turso.tech](https://turso.tech/) | 约百库、总存储约 5GB | 按读写计，额度内不扣费 | SQLite / 多租户隔离、Agent 记忆 |
| Neon | [neon.tech](https://neon.tech/) | 多项目；每库约 1GB；可分支 | 约 5 分钟闲置休眠 | Postgres 原型、分支测试 |
| Upstash | [upstash.com](https://upstash.com/) | Redis 按日命令限额；有 Vector | 日限额 | 缓存、会话、限流、向量 |
| MongoDB Atlas | [Atlas](https://www.mongodb.com/atlas/database) | M0 约 512MB | 会休眠 | 文档型数据 |

### PaaS / 边缘 / 配套

| 服务 | 官网 | 免费层要点 | 休眠 / 限制 | 适用场景 |
|------|------|------------|-------------|----------|
| Render | [render.com](https://render.com/) | Hobby 约 750 小时/月 | 闲置约 15 分钟休眠 | Docker / 常驻后端 Demo |
| Koyeb | [koyeb.com](https://www.koyeb.com/) | 约 1 服务、512MB | 闲置约 1 小时休眠 | 轻量 API |
| Zeabur | [zeabur.com](https://zeabur.com/) | 有免费额度；Git / Docker | 额度有限、会休眠 | 国内访问相对友好的原型 |
| Cloudflare | [cloudflare.com](https://cloudflare.com/) | Pages / Workers / D1 / KV / R2 等 | Workers 免费 CPU 极短 | 边缘全栈、CDN、DNS |
| Resend | [resend.com](https://resend.com/) | 约 3000 封邮件/月 | 需验域名 | 验证码、通知邮件 |
| Vercel KV | [文档](https://vercel.com/docs/storage/vercel-kv) | Hobby 内额度 | 商用需 Pro | Vercel 内缓存 / 会话 |

### 国内备选

| 服务            | 官网                                           | 说明                                   |
| ------------- | -------------------------------------------- | ------------------------------------ |
| 腾讯云 CloudBase | [产品页](https://cloud.tencent.com/product/tcb) | 免费档含托管 / 云函数 / 库 / 存储；需实名；适合小程序与微信生态 |
| 阿里云           | [函数计算等](https://www.aliyun.com/product/fc)   | 现多为 FC / SAE / 云效等试用，**无长期免费层**      |

## 组合方案与避坑

| 目标 | 推荐组合 |
|------|----------|
| Web + AI Agent | Vercel + Turso + Cloudflare Workers |
| 带账号的 Web | Vercel + Supabase |
| 轻量边缘 | Cloudflare Pages + Workers + D1 |
| Postgres 原型 | GitHub Pages / Vercel + Neon |
| Agent 缓存 + 向量 | Deno Deploy + Upstash |
| 大陆访问且暂不备案 | 香港 CN2 VPS（自建）或 Zeabur 等国内访问较好的托管 |

| 要点 | 说明 |
|------|------|
| 休眠 | Neon ~5 分钟、Render ~15 分钟、Koyeb ~1 小时、Supabase ~7 天 |
| CPU | 别把大模型推理塞进免费 Cloudflare Workers |
| 商用 | Vercel Hobby 禁商用；超额多为暂停，一般不自动扣费 |
| 分库 | 大量隔离库用 Turso；少量 Postgres 用 Supabase / Neon |
| 账单 | 凡绑卡或开云主机，先设告警；试用结束前关机删盘 |

## 轻量服务器（VPS）

适合要 SSH、常驻进程、自定义运行时的场景。

| 产品 | 类型 | 说明 |
|------|------|------|
| [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) | 永久免费 | 额度内 Always Free；热门区常排队，国内访问一般 |
| [Google Cloud Always Free](https://cloud.google.com/free) | 永久免费 | 指定美区 e2-micro；选错区域会扣费 |
| [AWS Free Tier](https://aws.amazon.com/free/) | 限期试用 | 约 12 个月 micro，到期转付费 |
| [Azure 免费账户](https://azure.microsoft.com/zh-cn/free/) | 限期试用 | 新客额度，到期转付费 |
| [香港 CN2 等优化线路](https://vps.appsail.dev/?sort=testip&dir=asc) | 付费、免备案 | 大陆延迟通常好于美欧；用 Picks / [家宽榜](https://vpstarter.com/rankings/) 对照后再买 |
| [DMIT](https://dmit.io/) | 付费、免备案 | CN2 GIA 等优化线路，香港 / 美西 / 东京等机房；价位偏高端 |
| [腾讯云轻量](https://cloud.tencent.com/product/lighthouse) | 国内试用 | 活动套餐；挂域名做站需备案 |
| [阿里云轻量](https://www.aliyun.com/product/swas) | 国内试用 | 同上，常用于备案站 |
| [华为云 Flexus L](https://www.huaweicloud.com/intl/zh-cn/product/flexus-l.html) | 国内试用 | 免费专区活动，以官网为准 |

付费优化线路不必死记商家名单：用 [VPS Picks](https://vps.appsail.dev/?sort=testip&dir=asc) 按延迟筛，用 [VPStarter 榜](https://vpstarter.com/rankings/) 看家宽晚高峰，再核对流量与售后。国内机挂自有域名做网站，仍要 **备案 + 内容合规**。

## 开工建议

1. **用户在哪**：大陆正式运营 → 国内机 + 备案；大陆要快、暂不备案 → 香港 CN2；只验证想法 / 海外用户 → 免费海外托管。
2. **形态**：静态 / 带后端 / 小程序 / 要 SSH，再从表里挑组合，别一次开齐所有云。
3. **域名**：默认域名够用就先迭代；备案与买域名可并行，别堵第一版。
4. **钱**：绑卡或开主机立刻设预算告警；试用结束前关停。
5. **合规**：备案站上线前过一遍内容与外链；免备案也不碰违法内容。

下一章按形态动手：浏览器插件、桌面应用、小程序、移动 App、Web——部署资源可随时回查本章。
