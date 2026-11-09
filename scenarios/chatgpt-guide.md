# ChatGPT 上手指南

现在 AI 工具越来越多，豆包、DeepSeek、Claude、Gemini、ChatGPT 等等，几乎每隔一段时间就会出现新的产品。

但如果只推荐一个作为长期使用的主力 AI，我更推荐 ChatGPT。

原因很简单：**综合能力、记忆能力、绘画能力、工具生态和整体使用体验都比较均衡。**

其他 AI 并不是不好，只是如果你想认真学习并长期使用一个 AI 工具，ChatGPT 值得优先考虑。产品横向对比见 [AI 对话工具](/products/ai-chat-tools.html)。

这篇文章从注册、网络环境、账号套餐到实际使用，带你快速上手。

## 一、如何使用 ChatGPT？

官方网站：https://chatgpt.com/

ChatGPT 目前支持网页端、Windows、macOS、Android 和 iOS 客户端。

### 1. 国内如何访问

ChatGPT 官方服务在国内通常无法直接打开，需要先准备可用的网络环境（科学上网），再访问官网或客户端。

工具与订阅：[FlClash](https://flclash.cc/download.html)；[低价机场推荐](https://github.com/DiningFactory/panda-vpn-pro)

注意：网络访问与代理工具的使用受所在地法律法规约束，请自行确认合规后再使用。


### 2. 账号注册

能打开官网后，用邮箱注册或登录即可。如果注册不上，可以考虑第三方成品账号。

- ChatGPT 账号价格对比：[PriceAI · ChatGPT 普号](https://priceai.cc/products/chatgpt-free-account)（聚合各卡网有货报价）
- 购买入口：[https://wzyp.cn/shop/AEUQ8PP3](https://wzyp.cn/shop/AEUQ8PP3)、[wafase.com](https://wafase.com/)



## 二、ChatGPT 为什么值得长期使用？

单点能力很多产品都能做到；值得长期用的，是它几件事叠在一起后的整体体验。

- **够均衡**：写作、搜资料、读文件、写代码、生图、语音，一个入口就能覆盖日常大部分场景，不必每件事换一个工具。
- **记得住你**：记忆 + 历史聊天引用，用得越久越懂你的习惯和长期项目，少反复交代背景。入口在 **设置 → 个性化 → 记忆**；重要信息仍建议自己留存。
- **生态完整**：Projects、Codex、Agent 等把对话延伸到项目管理和实际执行，适合当成主力工作台，而不是偶尔问一句的聊天框。

## 三、ChatGPT 套餐怎么选？多少钱？

| 套餐 | 官方参考价 | 最低地区价 | 怎么选 |
|---|---:|---:|---|
| Free | 免费 | — | 先体验；偶尔聊几句够用 |
| Go | $8/月 | ￥23.95（埃及） | 日常高频用，额度不够时优先升这一档 |
| Plus | $20/月 | ￥104.20（菲律宾） | 每天重度用、要更强模型 / 生图 / Codex 等 |
| Pro | $100/月起 | ￥587.98（埃及，100 刀档） | 专业重度；普通用户一般不用考虑 |

价格因地区、税费和渠道会有差异，以 [官方定价](https://chatgpt.com/pricing/) 为准；别把第三方人民币标价当成官方统一定价。

**建议：免费 → 不够再 Go → 还要更强再 Plus。**
> ChatGPT 获取方式大体可以分成三类：官方订阅、第三方渠道、API/CDK。你要先判断自己想要的是长期稳定使用、便宜试用，还是把模型接进 Codex、Cursor、OpenCode 这类工具。不要先看最低价。
订阅优惠购买地址：[PriceAI · ChatGPT 官方地区价](https://priceai.cc/official-prices?platform=chatgpt) 、[常见问题](https://priceai.cc/guides/chatgpt-subscription-options)

## 四、提问说清楚就行

别只丢一句「帮我写篇文章」。说清对象、目标、约束即可，比如：

「面向普通人，写一篇 AI 科普，1500 字以内，结构清楚、少术语。」

公式记一句：**谁来做 + 做什么 + 给谁看 + 有什么限制**。

不满意就接着改：「短一点」「加个例子」「按这个提纲重写」。不用每次重开话题。更多写法见 [Prompt](/agent/prompt.html)。

## 五、装几个插件，ChatGPT 才能真正干活

光会聊天还不够。在 **设置 → Apps**（有的界面叫 Plugins / Connectors）里接上工具，它才能读写你的文档、仓库，甚至操作本机。

### 必装：Desktop Commander

让 ChatGPT 连上你的电脑：读本地文件、改文档、跑终端命令，结果直接回对话里，不用来回复制粘贴。

1. 在 ChatGPT 安装 [Remote Desktop Commander](https://chatgpt.com/plugins/plugin_asdk_app_6a057d268ebc81919918d37eec718425)（或设置里搜 Desktop Commander）。
2. 到 [mcp.desktopcommander.app](https://mcp.desktopcommander.app) 登录，按提示在本机终端跑一条配对命令，把电脑挂上。
3. 新开对话，用 `@` 选中该插件，再让它整理下载目录、改本地文件、跑脚本即可。

本机配对进程要开着才连得上；不用就关掉。它能动你机器上的文件和命令，当账号凭证来管。产品说明见 [desktopcommander.app](https://desktopcommander.app/)。

### 另外建议装这几个

| 插件 | 干什么 | 适合谁 |
|---|---|---|
| **GitHub** | 查仓库、Issue、PR，少切网页 | 写代码、跟开源 |
| **Notion** 或 **Google Drive** | 直接读你的笔记 / 网盘文档 | 写材料、整理资料 |
| **Canva** | 在对话里出海报、封面、社媒图 | 做图、运营素材 |

官方应用商店里按名字搜就能装；装完在对话里 `@` 点名用。自定义远程 MCP 一般要先开 **Settings → Apps → Advanced → Developer mode**，再填服务端 URL（Desktop Commander 的是 `https://mcp.desktopcommander.app/mcp`）。

## 六、再往下用这三样就够

拖文件、联网搜、语音聊、随手生图——对话框里自带，用到再说。真正值得单独开一下的是：

- **Projects**：长期主题把相关聊天和资料收一块，少反复贴背景。
- **生图进阶**：海报、改图、风格控制见 [GPT-Image](/scenarios/gpt-image.html)。
- **Codex / Agent**：要从「给建议」变成「改代码、跑任务」时再开；选型见 [AI 超级智能体](/products/ai-super-agent.html)。

本机文件和终端优先走上一节的 Desktop Commander；云端仓库、文档用 GitHub / Notion 等插件。

## 七、上手顺序

1. 能打开官网 → 注册 → 免费聊几天，确认提问方式习惯。
2. **设置 → 个性化 → 记忆**打开；长期主题建 Projects。
3. 装 Desktop Commander，再按需加 GitHub / Notion（或 Drive）。
4. 额度不够再升 Go / Plus，别一上来买 Pro。
