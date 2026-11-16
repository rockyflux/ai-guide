# 桌面应用

用 Vibe Coding 做桌面端：先定栈，再丢提示词。下面五条路线覆盖大多数场景；Electron 体积与内存偏高，一般不当默认首选。

## 选型一览

| 方案 | 语言 | UI | 跨平台 | 适合谁 |
| --- | --- | --- | --- | --- |
| [MyGo](https://github.com/egoist/mygo) | Go | WebView **或** 自绘原生 | Win / macOS / Linux（主张 `CGO_ENABLED=0`） | Go 小工具、要原生感 / 极小体积；接受 0.x |
| [Wails 3](https://wails.io/) | Go | 系统 WebView + 任意前端 | 三端（mac/Linux 常要 cgo） | Go 后端 + 已会 Vue/React |
| [Tauri](https://tauri.app/) | Rust | 系统 WebView | 桌面成熟；有移动端路线 | 要跨平台、安全边界、长期插件生态 |
| [GPUI Kit](https://gpui-kit.com/zh-CN/) | Rust | GPUI 原生自绘（非 WebView） | macOS / Windows / Linux（另有 WASM） | 全 Rust 桌面、信息密集型高性能 UI |
| [WPF](https://learn.microsoft.com/dotnet/desktop/wpf/) | C# / .NET | XAML 原生 | **仅 Windows** | 企业工具、复杂表单、系统级体验 |

**GPUI Kit vs Tauri**：GPUI Kit 用 Rust 写整个桌面界面；Tauri 用 Web 技术写界面，用 Rust 处理系统能力。

| 维度 | MyGo | Wails 3 | Tauri | GPUI Kit | WPF |
| --- | --- | --- | --- | --- | --- |
| 包体积 | 很小 | 小（靠系统 WebView） | 小 | 小（原生自绘） | 看是否自包含 .NET |
| 交叉编译 | 强 | 中 | 中（多靠平台 CI） | 中（多靠平台 CI） | 本机 Windows 为主 |
| 安全 | 常规桌面 | 较开放 | Capabilities / Permissions | 常规桌面 + 原生进程 | Windows ACL / 发布方式 |
| Vibe Coding | Skill + 短反馈环 | Go+Web 熟 | 资料多，盯 Rust 编译 | 资料偏新，盯 GPUI / 组件 API | C#/XAML 训练数据多 |

**怎么选**：只要 Windows → WPF。Go + Web 前端 → Wails 3（稳）或 MyGo Web（更轻、更新）。跨平台 + Web 前端 + 权限清单 → Tauri。全 Rust、不要 WebView → [GPUI Kit](https://gpui-kit.com/zh-CN/)。极致轻量 / 不想写前端 → MyGo 原生 UI。还要冲手机 → 优先评估 Tauri。

MyGo 完整起点可看 [Awesome MyGo 模板](https://awesomemygo.dev/templates)；`mygo init` 只给最小骨架。

## 复制即用的提示词

把「【】」换成产品与功能；先让 Agent **读官方脚手架文档再 init**，避免臆造 API。共性约束：能跑通主路径 + 有构建命令才算完成；先 MVP，再托盘 / 更新 / 多窗口；WPF 不写 macOS；GPUI Kit 不要套 WebView；MyGo 跟当前文档。

### MyGo

```text
用 MyGo 做桌面应用【产品名】。平台：Win / macOS / Linux。UI：【native 自绘 / web + WebView】。
功能：【3～5 条，如托盘、快捷键、本地文件、自动更新】。

要求：官方 CLI 或合适模板初始化；native 用 `ui`，web 用类型安全 TS 客户端；CGO_ENABLED=0 并说明三端交叉编译；结构清晰并补 README；API 以当前 MyGo 文档为准，有 Skill 先读再改。
```

### Wails 3

```text
用 Wails v3 做桌面应用【产品名】。后端 Go；前端【Vue 3 / React / Svelte / HTML】+ TypeScript。
功能：【多窗口 / 托盘 / 剪贴板 / SQLite / 设置页 等】。

要求：v3 脚手架；业务在 Go Service，前端只走官方 bindings；托盘/多窗口用 v3 API，勿套 v2；写清本机依赖与构建命令；补 README 与最小验收；不要引入 Electron 或套用 Tauri capabilities。
```

### Tauri

```text
用 Tauri 2 做桌面应用【产品名】。前端【Vue 3 / React / Svelte】+ TS + Vite。
功能：【列表】。权限：只开必要能力（文件 scope、窗口、通知等）。

要求：create-tauri-app 初始化；Rust command/插件 + 前端 invoke；配置 capabilities，默认拒绝未声明权限；说明三端打包；不嵌 Chromium；补 README 与环境前置；API 以 Tauri 2 为准。
```

### GPUI Kit

```text
用 GPUI Kit 做桌面应用【产品名】。全 Rust（界面也用 Rust / GPUI，不要 WebView 前端）。
功能：【3～5 条，如主窗口、表格/列表、设置、Dock 布局、主题】。

要求：按 https://gpui-kit.com/zh-CN/ 与 https://github.com/longbridge/gpui-kit 当前文档初始化；组件优先用 gpui-kit / gpui-component，勿臆造 API；说明本机 Rust 工具链与三端构建；补 README 与最小验收；不要套用 Tauri / Electron 结构。
```

### WPF

```text
用 WPF（.NET 8+ LTS）做 Windows 桌面应用【产品名】。MVVM（【CommunityToolkit.Mvvm / 自选】）；XAML 随系统浅/深色。
功能：【主窗口、设置、托盘、文件对话框等】。

要求：`dotnet new wpf`；Views / ViewModels / Services / Models；绑定优先、async 不卡 UI；说明【框架依赖/自包含】与 x64 发布（可选 MSIX）；补 README 与验收清单；仅 Windows。
```
