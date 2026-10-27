# Pull Request

## 变更类型

- [ ] 内容修复（错别字/链接/表述）
- [ ] 新增内容（新页面/新章节）
- [ ] 重构整理（结构调整/归档）
- [ ] 构建/工程（VitePress/CI）

## 背景与动机

<!-- 说明为什么要做这个变更（面向读者/贡献者的价值） -->

## 变更内容

<!-- 列出关键改动点，尽量用条目描述 -->

## 关联问题

- Closes #

## 自检清单

- [ ] 本地 `npm run dev` 预览正常
- [ ] 新增/修改页面的链接可用（避免 404）
- [ ] 若调整章节，已同步 `.vitepress/book.mjs`，并运行 `npm run check`（改动较大时再跑 `npm run verify`，见 WEBSITE.md）
- [ ] 若升级 VitePress 或改动 `overrides`：已重新验证覆盖组合（`npm run verify`，必要时再跑 Playwright；见 WEBSITE.md）
- [ ] 新增插图优先放 `assets/images/` 并用相对路径；外链图床需可访问（构建会补 lazy / no-referrer）
- [ ] 文案清晰，结构符合任务导向（目标/步骤/验证）
