# 修复 hugo-book submodule 不可达 commit

- 现象：CI 在拉取 submodule `themes/hugo-book` 时失败，报错 `not our ref <sha>`，并出现对上游仓库 push 的 403。
- 根因：主仓库记录的 submodule gitlink 指向 `0242658d0a546fc0f1c729f7210afa6f64ae8c51`，该 commit 不存在于上游 `alex-shpak/hugo-book` 可获取的历史中；CI 只能按 `.gitmodules` 的 URL 去上游抓取，因此失败。
- 选择：用户确认走方案 B（不保留 submodule 本地改动），将 submodule 回退到上游存在的 tag/commit。

## 计划（简要）

1. 在 `themes/hugo-book` 确认工作区干净。
2. `git fetch origin --tags --prune` 获取上游引用并选择最新 tag。
3. `git checkout <tag>` 切到上游可达 commit。
4. 回到主仓库 `git add themes/hugo-book`，提交并 push，更新 submodule gitlink。
5. `git submodule update --init --recursive` 验证本地可正常拉取。

## 执行结果

- submodule 已切换到 `v13`（commit `cec082b8dd9b31d0c52b2de95d86ced9909cc7ec`）。
- 主仓库已提交并推送：`chore: update hugo-book submodule to v13`。
- 本地 `git submodule update --init --recursive` 通过，`git submodule status --recursive` 显示 `themes/hugo-book (v13)`.
