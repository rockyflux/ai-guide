# 微信小程序

这篇教程重点介绍：**个人 / 企业账号怎么选、后端怎么配，以及用哪些参考项目与提示词让 AI 稳定写出可上线的小程序。** 不展开讲解小程序 API 和底层语法。

目标是借助 Codex、Claude Code、Cursor、WorkBuddy 等 AI 编程工具，把「注册 → 开发 → 联调 → 上线」跑通。部署资源可回看 [开工准备](./prep.md)。

## 1. 先注册：个人还是企业

正式开发前先在 [微信公众平台](https://mp.weixin.qq.com/) 注册小程序账号，拿到 **AppID**。个人试玩可在注册页创建[测试号](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html)，免完整注册；要上线、收款、开完整类目，必须按真实主体注册。主体一旦确认，**注册后不可随意变更**。

官方接入说明：[小程序接入指南](https://developers.weixin.qq.com/miniprogram/introduction/)。

### 个人 vs 企业：能力差异（选型用）

| 能力 | 个人 | 企业 / 个体工商户 |
|---|---|---|
| 开发、预览、上传体验版 | 可以 | 可以 |
| 可选服务类目 | [个人开放类目](https://developers.weixin.qq.com/miniprogram/product/material/)（较少） | [非个人开放类目](https://developers.weixin.qq.com/miniprogram/product/material/)（更广） |
| 微信支付 | 不可 | 可按官方流程申请 |
| 获取手机号等受限接口 | 通常不可用 | 按当前官方规则开放 |
| 项目成员 / 体验成员上限 | 较少 | 更高（随账号状态阶梯提高） |

规则与人数上限以 [接入指南](https://developers.weixin.qq.com/miniprogram/introduction/) 和后台实时提示为准；上线前还要完成 [小程序备案](https://developers.weixin.qq.com/miniprogram/product/record/record_guidelines.html)（与域名 ICP 备案相关，见 [开工准备](./prep.md)）。

**怎么选：**

- 工具、内容展示、个人 Demo、不收款 → 个人主体够用。
- 要支付、电商、行业资质、长期运营 → 企业或个体工商户。

## 2. 后端服务怎么选

小程序前端跑在微信里，业务数据、登录态、支付回调几乎都要后端。AI 写页面之前，先定后端形态，并写进提示词，避免生成一堆无法联调的假接口。

| 方案 | 适合 | 优点 | 注意 |
|---|---|---|---|
| **微信云开发 / 腾讯云 CloudBase** | 快速上线、微信生态、个人或小团队 | 云函数、数据库、存储一体；开发者工具集成好；AI 教程与 Skills 齐全 | 按量计费与免费额；复杂权限与多端共用要提前设计 |
| **自建 HTTPS API**（云主机 / PaaS / Serverless） | 已有服务、要完整控制、多端共用一套 API | 技术栈自由；可复用现有后端 | 必须在小程序后台配置 **request / uploadFile / downloadFile / socket 合法域名**；正式环境域名一般需备案 |
| **仅本地 / mock** | 先做 UI 与流程 | 零后端成本 | 真机与提审前要换成真实后端；审核常要求功能可完整走通 |

推荐阅读：

- [用 AI 写微信小程序（CloudBase）](https://docs.cloudbase.net/ai/cloudbase-ai-toolkit/tutorials/ai-develop-miniprogram)
- [CloudBase 产品页](https://cloud.tencent.com/product/tcb)（免费档与小程序配套见 [开工准备](./prep.md)）
- 自建后端域名与服务器选型见 [开工准备](./prep.md)

**实操要点：**

1. 云开发：在开发者工具创建环境，让 AI 按 CloudBase / 云函数约定写读写，少手写运维。
2. 自建：先部署可访问的 HTTPS API → 后台配置合法域名 → 再让 AI 封装 `wx.request` / 统一请求层。
3. 登录：常用 `wx.login` 换 `code`，由后端换 session / 自定义登录态；需要 UnionID 时，把小程序绑到已资质认证的 [微信开放平台](https://open.weixin.qq.com/) 同主体账号。
4. 支付：个人主体不可用；企业侧按官方开通后，支付参数与回调必须在服务端完成，不要把密钥写进小程序包。

## 3. 先了解两类 AI 开发能力

小程序 AI 编程不只是生成页面，还要让 AI 读规范、查文档、按主体与后端约束实现，并在微信开发者工具里编译预览。

| 能力 | 解决的问题 | 推荐方案 |
|---|---|---|
| 项目开发规范 | 让 AI 理解小程序约定和平台限制 | 微信官方文档、文档 Skill |
| 项目代码生成 | 生成页面、组件、接口和业务逻辑 | Codex、Claude Code、Cursor、WorkBuddy 等 |
| 编译与预览 | 触发编译、模拟器 / 真机预览 | 微信开发者工具 |
| 业务能力复用 | 复用 UI、组件和业务代码 | 开源项目、组件库、项目模板 |
| UI 组件 | 统一视觉与交互，少手写样式 | [TDesign 小程序](https://tdesign.tencent.com/miniprogram/overview) |
| 云开发后端 | 云函数、数据库、存储 | CloudBase / 官方云开发 |

## 4. 值得优先使用的 AI 开发项目

### 4.1 TDesign 小程序组件库

**文档：[TDesign 小程序](https://tdesign.tencent.com/miniprogram/overview)**

腾讯出品的企业级设计体系在微信小程序上的落地，提供按钮、表单、列表、弹层、导航等常用组件，文档含安装、按需引入与主题定制说明。

适合：原生小程序希望快速统一 UI、减少 AI 自造样式；让 AI 按官方组件 API 拼页面，而不是手写一整套控件。

使用建议：新项目默认采用 TDesign；已有项目若已有 UI 库则沿用，不要混装多套组件库。接入方式以官网当前文档为准。

### 4.2 腾讯云 CloudBase AI Toolkit

**文档：[用 AI 写微信小程序](https://docs.cloudbase.net/ai/cloudbase-ai-toolkit/tutorials/ai-develop-miniprogram)**

提供 AI 辅助开发小程序的实践流程，并涉及云数据库、云函数和云存储。

适合：需要快速接入云开发后端、希望 AI 协助搭前后端的项目。使用前检查开发者工具版本和工具链要求。

### 4.3 微信官方小程序文档 Skill

- [微信小程序文档 Skill（SkillHub）](https://skillhub.cn/skills/tencent-adm/weixin-docs)：按文档查找组件、API 和开发规范。
- [微信小程序开发经验文章](https://mp.weixin.qq.com/s/2VuxtS14-epAa1WFCZg8oA)：补充阅读。

官方文档入口：[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)。

### 4.4 WorkBuddy：做出你的第一个小程序

**教程：[用 WorkBuddy，轻松做出你的第一个小程序！](https://mp.weixin.qq.com/s/uAAPifrMZnhVlqCVNlpujA)**

用桌面端 Agent [WorkBuddy](https://www.codebuddy.cn/work/) 用自然语言生成小程序工程，再导入微信开发者工具做预览、真机与提审。适合零基础或想先跑通闭环的个人 Demo；正式上线仍须走账号、备案与审核（见上文第 1、2 节）。产品与办公场景见 [WorkBuddy 与豆包工作](/scenarios/workbuddy-doubao-work.html)。

## 5. 小程序开发框架怎么选

如果还没有现成项目，先根据目标选框架。不要让 AI 在同一项目里混用多套框架。UI 层在原生小程序上优先 [TDesign 小程序](https://tdesign.tencent.com/miniprogram/overview)。

| 项目 | 特点 | 适合场景 |
|---|---|---|
| [微信原生小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/) | 官方原生，平台能力直接 | 只做微信、依赖原生能力多 |
| [uni-app](https://github.com/dcloudio/uni-app) | Vue 风格，一套代码多端 | Vue 3、未来可能多端 |
| [Taro](https://github.com/nervjs/taro) | 跨端，支持 Vue / React 等 | 已有 Taro 或要统一跨端工程 |

**选择建议：**

- 只做微信、少跨端适配 → 优先原生 + TDesign。
- 熟悉 Vue 3、可能多平台 → 优先 uni-app（UI 按其生态组件库选型，勿强行混入无关库）。
- 已有 Taro → 继续用，不要为了 AI 编程而迁移。

## 6. 给 AI 编程工具的项目提示词

可直接用于 Codex、Claude Code、Cursor。新项目和已有项目均可；AI 应先识别项目类型再动手。默认 UI 使用 [TDesign 小程序](https://tdesign.tencent.com/miniprogram/overview)。

### 提示词一：小程序项目调研与开发规划

```text
你是一名经验丰富的微信小程序产品与开发工程师，请协助我使用 AI 编程完成小程序项目。

【账号与约束】
- 主体类型：[个人 / 企业 / 个体工商户 / 其他]
- 是否需要支付、手机号等受限能力：[列出]
- 后端方案：[CloudBase 云开发 / 自建 HTTPS API / 暂用 mock]
- 若自建：合法域名与接口文档位置：[填写]
- UI 组件库：默认 TDesign 小程序（https://tdesign.tencent.com/miniprogram/overview）；已有项目若已有 UI 库则沿用，不要混装

【目标】
根据我的需求，开发一个体验完整、结构清晰、可持续维护的微信小程序。

【工作要求】
1. 先检查当前目录、项目文件和 README，识别是微信原生、uni-app 还是 Taro。
2. 已有项目必须沿用现有技术栈和规范，不要擅自迁移或重建。
3. 新项目先比较微信原生、uni-app、Taro，再推荐，不要默认引入多套框架。
4. 阅读对应框架官方文档；原生新项目按 TDesign 文档安装与按需引入组件，优先用 TDesign 拼页面。
5. 可使用微信小程序文档 Skill 获取 API、组件和平台限制信息；TDesign 组件用法以官网文档为准。
6. 实现必须符合当前主体能力：个人主体不要设计微信支付。
7. 不确定的 API 和配置必须查阅官方文档，不要凭经验猜测。

【开发流程】
第一步：梳理需求，列出页面、功能、用户流程和数据接口。
第二步：检查项目结构与后端接入方式，给出简洁开发计划（含 TDesign 接入方式）。
第三步：先完成核心页面和主要业务流程。
第四步：在微信开发者工具中编译预览，检查交互和日志。
第五步：修复问题，完成主要流程回归。
第六步：整理 README、运行方式、提审与备案注意事项。

【开发原则】
- 页面风格统一：按钮、表单、列表、弹层、导航等优先用 TDesign，避免手写重复控件。
- 不随意增加依赖，不引入第二套 UI 库，不随意重构无关代码。
- 考虑加载中、空数据、失败和无权限等状态（尽量用 TDesign 对应组件）。
- 注意平台限制和真机兼容性；密钥只放服务端。
- 不要只报告代码已生成，要说明如何在开发者工具中验证。
- 每完成一个阶段先检查结果，再继续下一阶段。

【我的项目需求】
在这里填写具体的小程序产品需求、目标用户和核心功能。

现在先调研项目并输出实施计划，不要立即大规模生成代码。
```

### 提示词二：按页面开发功能

```text
请在当前小程序项目中开发以下页面或功能：[填写名称]。

【需求说明】
- 页面目的：[说明页面解决什么问题]
- 用户入口：[用户从哪里进入]
- 页面内容：[需要展示哪些信息]
- 用户操作：[点击、输入、提交、跳转等]
- 数据来源：[云开发 / 自建接口 / 本地 / mock]
- 异常情况：[加载失败、空数据、重复提交等]

【UI 要求】
- 使用 TDesign 小程序组件实现界面：https://tdesign.tencent.com/miniprogram/overview
- 先查项目是否已接入 TDesign；未接入则按官网文档安装并按需引入。
- 对照 TDesign 文档选用合适组件（如 Button、Input、Cell、Dialog、Tabs 等），不要自造同类控件。
- 保持与现有页面一致的间距、主题色与交互反馈。

【开发要求】
1. 先查看现有页面、组件和接口封装，沿用当前项目规范。
2. 参考微信官方文档确认平台 API；参考 TDesign 文档确认组件 props / 事件。
3. 不要再引入其他 UI 框架。
4. 完成后在微信开发者工具中编译并预览。
5. 检查交互流程和运行日志。
6. 修复发现的问题，并说明修改了哪些文件、用了哪些 TDesign 组件。

先给出简短实施计划，再开始开发。
```

### 提示词三：联调后端与登录

```text
请为当前微信小程序接通后端与登录，不要只做前端假数据。

【后端】
- 方案：[CloudBase / 自建 API]
- 环境或接口基址：[填写]
- 需要的能力：[登录态、读写业务数据、上传文件、支付回调等]

【要求】
1. 使用 wx.login 等官方方式获取 code，由后端换取自定义登录态；不要在前端保存 AppSecret。
2. 统一封装请求层（错误码、超时、未登录跳转）。
3. 自建后端时说明需配置的合法域名列表。
4. 云开发时按当前项目 / CloudBase 文档使用云函数与数据库，权限规则最小化。
5. 在开发者工具中验证登录与至少一条读写链路，汇报结果与待人工确认项。

先给出方案对比与实施计划，再改代码。
```

### 提示词四：提审前自检

```text
请对照微信小程序常见审核要求，对当前项目做一次提审前检查（可参考官方「常见拒绝情形」）。

检查并输出清单：
1. 主体与类目是否匹配实际功能；个人主体是否误用支付等能力。
2. 首页能否到达主要服务类目页面；功能是否完整可运行。
3. 是否存在诱导分享、空白广告位、测试页、崩溃或无法返回。
4. 用户隐私：授权说明、隐私协议、收集字段是否必要。
5. 若有账号体系，是否准备了审核用测试号。
6. 后端域名、备案、HTTPS 是否就绪。

对每个问题给出：现状、风险、建议修改。不要虚构已通过审核。
```

## 7. 参考资料

- [小程序接入指南](https://developers.weixin.qq.com/miniprogram/introduction/)
- [小程序备案指引](https://developers.weixin.qq.com/miniprogram/product/record/record_guidelines.html)
- [常见拒绝情形](https://developers.weixin.qq.com/miniprogram/product/reject.html)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [微信开发者工具下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [TDesign 小程序](https://tdesign.tencent.com/miniprogram/overview)
- [微信小程序文档 Skill](https://skillhub.cn/skills/tencent-adm/weixin-docs)
- [CloudBase：AI 写微信小程序](https://docs.cloudbase.net/ai/cloudbase-ai-toolkit/tutorials/ai-develop-miniprogram)
- [用 WorkBuddy，轻松做出你的第一个小程序！](https://mp.weixin.qq.com/s/uAAPifrMZnhVlqCVNlpujA)
- [CloudBase mp-skills](https://github.com/TencentCloudBase/mp-skills)
- [uni-app](https://github.com/dcloudio/uni-app)
- [Taro](https://github.com/nervjs/taro)
- [开工准备](./prep.md)

---

**核心思路：** 先定个人 / 企业与后端形态，UI 优先用 TDesign，再让 AI 按官方规范分阶段开发，并在微信开发者工具里验证——而不是只生成前端页面。

