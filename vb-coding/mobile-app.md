# 移动 App

借助 Codex、Cursor、Claude Code 等 AI 编程工具开发 Android / iOS App，重点是选对技术路线、参考成熟项目，再分阶段实现。

本文讨论可独立安装和发布的手机 App。微信小程序见[微信小程序](./mini-program.md)。

## 1. 先选开发路线

| 路线 | 代表方案 | 特点 | 适合场景 |
|---|---|---|---|
| 跨平台 | **uni-app**、Flutter、React Native | 一套主要代码开发多端 | 大多数工具、业务和内容类 App |
| 原生开发 | Kotlin、Swift | 系统能力完整，平台适配直接 | 高性能、复杂硬件能力或深度系统集成 |
| Web 封装 | Capacitor、Ionic | 复用 Vue / React 网站 | 已有 Web 产品，需要 App 分发 |

**怎么选：**

- 熟悉 Vue，希望同时覆盖 App、小程序和 H5：优先看 **uni-app**。
- 希望使用 Dart，重视跨平台 UI 一致性：考虑 Flutter。
- 熟悉 React / TypeScript：考虑 React Native + Expo。
- 只做 Android 或 iOS，且依赖大量系统能力：考虑原生开发。
- 已有成熟 Web 网站，只需轻量封装：评估 Capacitor。

不要只看框架宣传。蓝牙、推送、后台任务、支付、地图等能力，要先确认目标平台和插件是否支持。

## 2. 主流跨平台框架

| 项目 | 技术栈 | 特点 | 适合人群 |
|---|---|---|---|
| [uni-app](https://uniapp.dcloud.net.cn/) | Vue、JavaScript / TypeScript | 一套代码发布到 App、小程序、H5 等平台 | Vue 开发者、国内多端项目 |
| [Flutter](https://flutter.dev/) | Dart | 自带 UI 渲染体系，跨平台界面一致性好 | 新项目、重视 UI 控制 |
| [React Native](https://reactnative.dev/) | React、TypeScript / JavaScript | 使用原生 UI，React 生态丰富 | React 团队 |
| [Expo](https://expo.dev/) | React Native 工具链 | 简化开发、调试和构建流程 | React Native 新项目 |
| [Kotlin Multiplatform](https://kotlinlang.org/multiplatform/) | Kotlin | 可共享业务逻辑，UI 可保留原生 | Kotlin 团队 |
| [.NET MAUI](https://dotnet.microsoft.com/apps/maui) | C# / .NET | 微软跨平台开发方案 | .NET 团队 |

### uni-app 值得重点关注

官网：[https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)

uni-app 基于 Vue 开发体验，支持将项目编译到多个平台，适合希望复用前端技术、同时开发 App、小程序和 H5 的项目。

常见特点：

- 使用 Vue 风格开发页面和组件。
- 可通过条件编译处理不同平台的差异。
- 通过插件和原生扩展接入设备能力。
- 可配合 HBuilderX，也可按官方支持的方式使用 CLI 与其他编辑器。
- 适合业务表单、商城、信息展示、工具类等应用。

需要注意：多端并不代表所有 API 和插件完全通用。尤其是蓝牙、推送、地图、后台运行等功能，应先确认 Android / iOS 的支持情况和插件维护状态。

可进一步了解：[uni-app 文档](https://uniapp.dcloud.net.cn/)、[uni-app 插件市场](https://ext.dcloud.net.cn/)。

### Flutter 与 React Native

| 对比 | Flutter | React Native + Expo |
|---|---|---|
| 语言 | Dart | TypeScript / JavaScript |
| UI | Flutter 自身组件与渲染 | React 组件映射到原生 UI |
| 优势 | UI 一致性、布局控制 | React 生态、前端团队上手快 |
| 适合 | 新项目、定制化界面 | 已有 React 技术积累 |

如果团队熟悉 Vue，先评估 uni-app；熟悉 React，优先评估 React Native；没有明显技术偏好，再用实际业务原型比较 Flutter 等方案。

## 3. 原生开发与 Web 封装

| 方案 | 技术 | 说明 |
|---|---|---|
| [Android](https://developer.android.com/) | Kotlin + Jetpack Compose | Android 原生开发 |
| [iOS](https://developer.apple.com/) | Swift + SwiftUI | iPhone / iPad 原生开发 |
| [Capacitor](https://capacitorjs.com/) | Web + TypeScript | 将现有 Web 应用封装为移动 App |
| [Ionic](https://ionicframework.com/) | Web + UI 组件 | 使用 Web 技术构建移动应用 |

原生方案适合深度系统集成；Web 封装适合轻量业务。两者都不应仅凭模拟器或网页预览判断体验，必须在真实设备上验证。

## 4. UI、后端与常用能力

### UI 与工程工具

| 技术栈 | 常用方案 |
|---|---|
| uni-app | [uni-ui](https://uniapp.dcloud.net.cn/component/)、[uView](https://uviewui.com/) |
| Flutter | [Material 3](https://m3.material.io/)、[Cupertino](https://docs.flutter.dev/ui/widgets/cupertino)、[Riverpod](https://riverpod.dev/) |
| React Native | [React Navigation](https://reactnavigation.org/)、[Expo Router](https://docs.expo.dev/router/introduction/)、[NativeWind](https://www.nativewind.dev/) |

组件库要与框架匹配。一个项目尽量只使用一套主要 UI 体系，不要混装多个组件库。

### 后端与数据

| 需求 | 可选方案 |
|---|---|
| 业务 API | Java Spring Boot、NestJS、现有后端 |
| 数据库与认证 | [Supabase](https://supabase.com/)、[Firebase](https://firebase.google.com/) 或自有服务 |
| 本地数据 | SQLite；Flutter 可看 [Drift](https://drift.simonbinder.eu/)，Expo 可看 [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/) |
| 推送通知 | [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)、[Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) |
| 崩溃监控 | [Sentry](https://sentry.io/)、[Firebase Crashlytics](https://firebase.google.com/docs/crashlytics) |

典型架构：

```text
Android / iOS App
       │ HTTPS
       ▼
    业务 API
       ├── 用户认证与权限
       ├── 业务逻辑
       ├── 数据库 / Redis
       ├── 文件存储
       └── 推送 / AI 服务
```

注意：密钥和敏感业务校验放在服务端；权限由服务端验证；支付、推送和文件上传要按目标平台的规则实现。

## 5. 值得参考的开源项目

让 AI 参考官方文档和具体代码，比只提供框架名称更有效。

| 技术 | 项目 | 参考方向 |
|---|---|---|
| uni-app | [uni-app](https://github.com/dcloudio/uni-app) | 框架源码与工程规范 |
| uni-app | [uni-ui](https://github.com/dcloudio/uni-ui) | 常用 UI 组件 |
| Flutter | [Flutter Samples](https://github.com/flutter/samples) | 官方示例与常见功能 |
| Flutter | [Flutter Gallery](https://github.com/flutter/gallery) | 组件与交互展示 |
| React Native | [Expo Examples](https://github.com/expo/examples) | Expo API 与集成示例 |
| Android | [Now in Android](https://github.com/android/nowinandroid) | Kotlin、Compose 工程实践 |

参考时让 AI 指明借鉴的文件和实现方式，并核对版本与许可证。不要直接复制整个项目。

## 6. 移动端开发需要注意什么

- **设备适配**：屏幕尺寸、安全区域、刘海、横竖屏和字体缩放。
- **系统权限**：相机、相册、定位、麦克风、蓝牙等，按需申请。
- **生命周期**：切后台、恢复、进程被系统回收。
- **网络异常**：弱网、断网、超时、重复提交和离线数据。
- **性能与耗电**：图片、列表、动画、后台任务和内存。
- **隐私合规**：只收集必要数据，准备隐私政策和权限说明。
- **平台差异**：返回手势、通知、文件访问、支付和第三方 SDK。

模拟器能运行不代表真机体验合格；Android 能运行也不代表 iOS 已完成适配。

## 7. 构建、签名与发布

| 项目 | Android | iOS |
|---|---|---|
| 工具 | Android Studio / SDK | Xcode |
| 安装包 | APK / AAB | IPA |
| 签名 | Keystore | Apple 证书与描述文件 |
| 发布 | Google Play、厂商应用市场 | App Store、TestFlight |

需要特别注意：

1. iOS 最终构建、签名和真机调试通常需要 macOS + Xcode。
2. 没有 Mac 时，可以先开发 Android，iOS 使用 Mac 或合规的 macOS CI 构建。
3. 上架前准备开发者账号、图标、截图、隐私政策和权限用途说明。
4. 不同应用商店的审核规则不同，发布前查看对应平台的最新要求。

参考：[Google Play Console](https://play.google.com/console/about/)、[Apple Developer](https://developer.apple.com/)。

## 8. 给 AI 编程工具的提示词

建议分阶段使用，不要一次性要求 AI 生成完整 App。

### 提示词一：技术选型

```text
请根据我的需求规划一个 Android / iOS App。

产品用途：[填写]
核心功能：[填写]
目标平台：[Android / iOS / 两者]
技术背景：[Vue / React / Java / 其他]
设备能力：[相机、定位、蓝牙、推送等]
后端：[已有 API / 需要新建]

请比较 uni-app、Flutter、React Native + Expo 和原生开发。
重点检查目标平台、设备 API、插件和第三方 SDK 的实际支持情况。
给出一个主推方案和选择理由，并输出页面清单、架构和开发计划。

当前只做调研，不要创建或修改项目。
```

### 提示词二：创建项目并开发

```text
请使用已确认的技术方案开发当前 App。

项目框架：[uni-app / Flutter / React Native / 原生]
目标平台：[Android / iOS / 两者]
核心功能：[填写]
UI 方向：[填写]
后端 API：[填写]

要求：
1. 先检查现有目录和代码，不覆盖无关文件。
2. 阅读当前版本官方文档，按推荐方式初始化和开发。
3. 沿用项目已有技术栈，不擅自更换框架。
4. 先搭建导航、主题、公共组件和请求层，再逐个实现页面。
5. 处理加载、空数据、错误和无权限状态。
6. 密钥放在服务端，不把敏感信息写进客户端。
7. 每完成一个阶段就执行检查、构建和测试。

先输出实施计划，再开始开发，不要一次性生成全部功能。
```

### 提示词三：测试与发布检查

```text
请检查当前 App 是否达到测试和发布条件。

检查：
1. 目标平台是否能正常构建和安装。
2. 核心页面、导航和业务流程是否完整。
3. 真机上的屏幕适配、权限、推送和设备能力是否正常。
4. 弱网、断网、重复提交和后台恢复是否处理。
5. 是否存在客户端密钥、隐私泄露或不必要的权限。
6. 应用图标、版本号、签名和上架材料是否准备好。

先列出问题并按严重程度排序，再修复。
重新执行构建和测试，明确区分已验证项目与需要人工验证的项目，不要虚构测试结果。
```

## 9. 推荐开发流程

| 阶段 | 工作内容 |
|---|---|
| 1. 需求梳理 | 明确用户、平台和核心功能 |
| 2. 技术选型 | 确定 uni-app、Flutter、React Native 或原生 |
| 3. UI 设计 | 确定页面结构和交互 |
| 4. 工程搭建 | 初始化项目和公共能力 |
| 5. 功能开发 | 按页面和模块逐步实现 |
| 6. 接口联调 | 接入登录、数据、推送等 |
| 7. 测试发布 | 真机测试、构建、签名和上架 |

**核心思路：先选对技术路线，再让 AI 参考官方文档和成熟项目，分阶段开发并在真机验证。**

## 参考资料

- [uni-app 官方文档](https://uniapp.dcloud.net.cn/) · [uni-app 插件市场](https://ext.dcloud.net.cn/)
- [Flutter](https://docs.flutter.dev/) · [Flutter Samples](https://github.com/flutter/samples)
- [React Native](https://reactnative.dev/) · [Expo](https://docs.expo.dev/)
- [Android Developers](https://developer.android.com/) · [Apple Developer](https://developer.apple.com/)
- [Capacitor](https://capacitorjs.com/) · [.NET MAUI](https://dotnet.microsoft.com/apps/maui)
- [开工准备](./prep.md) · [微信小程序](./mini-program.md) · [桌面应用](./desktop-app.md)

---
