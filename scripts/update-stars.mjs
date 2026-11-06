/**
 * 刷新 Markdown 表格中的 GitHub star 数，并按 star 降序重排。
 *
 * 用法：
 *   npm run update:stars
 *   npm run update:stars -- --dir programming
 *   npm run update:stars -- --dry-run
 *
 * 依赖：已登录的 GitHub CLI（`gh auth status`）。
 */
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const dirFlag = args.indexOf("--dir");
const dirArg = dirFlag >= 0 ? args[dirFlag + 1] : undefined;
if (dirFlag >= 0 && (!dirArg || dirArg.startsWith("--"))) {
  console.error("用法：npm run update:stars -- --dir <目录> [--dry-run]");
  process.exit(1);
}
const targetDir = dirArg || "agent-tools";

/** @param {number} n */
function formatStars(n) {
  const k = n / 1000;
  // ≥10k 且近似整千 → "48k"；其余一位小数 → "7.0k" / "0.2k"
  if (k >= 10 && Math.abs(k - Math.round(k)) < 0.05) {
    return `${Math.round(k)}k`;
  }
  return `${(Math.round(k * 10) / 10).toFixed(1)}k`;
}

/** @param {string} cell */
function parseStars(cell) {
  const s = cell.trim();
  if (s === "—") return -1;
  const m = s.match(/^(\d+(?:\.\d+)?)k$/i);
  return m ? Number(m[1]) * 1000 : -1;
}

/** @param {string} line */
function isSeparatorRow(line) {
  // `|---|` / `| --- | ---: | --- |`
  return (
    line.startsWith("|") &&
    !/^\|\s*\[/.test(line) &&
    /^[\s|:-]+$/.test(line)
  );
}

/**
 * 从表格行解析仓库：优先工具名列 github，再解读列 GitHub/Zread，再介绍列（跳过旁注仓库）。
 * @param {string} row
 */
function extractRepo(row) {
  const cells = row.split("|").slice(1, -1);
  if (cells.length < 2) return null;
  const [name, , intro = "", link = ""] = cells;

  const ghRe = /github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)/g;
  const zreadRe = /zread\.ai\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)/g;
  const collect = (text, re) =>
    [...text.matchAll(re)].map((m) => m[1].replace(/\/$/, ""));

  const nameGh = collect(name, ghRe);
  if (nameGh.length) return nameGh[0];

  const linkGh = collect(link, ghRe);
  if (linkGh.length) return linkGh[0];
  const linkZr = collect(link, zreadRe);
  if (linkZr.length) return linkZr[0];

  const introGh = collect(intro, ghRe);
  if (introGh.length) {
    // 介绍里常夹带旁注仓库，不当作本行主仓库
    const skip = new Set([
      "deepseek-ai/deepseek-harness",
      "earendil-works/pi",
    ]);
    return introGh.find((r) => !skip.has(r)) || introGh[0];
  }
  return null;
}

const starCache = new Map();

/** @param {string} repo */
function fetchStars(repo) {
  if (starCache.has(repo)) return starCache.get(repo);
  try {
    const out = execFileSync(
      "gh",
      ["api", `repos/${repo}`, "--jq", ".stargazers_count"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    ).trim();
    const n = Number(out);
    if (!Number.isFinite(n)) throw new Error(`invalid count: ${out}`);
    starCache.set(repo, n);
    return n;
  } catch (e) {
    const detail =
      (e.stderr && String(e.stderr).trim()) || e.message || String(e);
    console.error(`FAIL ${repo}: ${detail}`);
    starCache.set(repo, null);
    return null;
  }
}

/**
 * @param {string} text
 * @returns {{ text: string, changes: object[] }}
 */
function updateFile(text) {
  const lines = text.split("\n");
  const changes = [];
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    // 匹配「star 数」或「| star |」表头（中文后不能用 \b）
    if (
      line.startsWith("|") &&
      (/\bstar\s*数/i.test(line) || /\|\s*star\s*\|/i.test(line))
    ) {
      out.push(line);
      i++;
      // `|---` 或 `| --- | ---: |`
      if (i < lines.length && isSeparatorRow(lines[i])) {
        out.push(lines[i]);
        i++;
      }

      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        // 误入的分隔行不参与排序
        if (isSeparatorRow(lines[i])) {
          i++;
          continue;
        }
        rows.push(lines[i]);
        i++;
      }

      const updated = rows.map((row) => {
        // agent-tools: `|[...]`；ccg-workflow 等: `| [...]`
        if (!/^\|\s*\[/.test(row)) return row;
        const cells = row.split("|");
        if (cells.length < 5) return row;
        const old = cells[2].trim();
        if (old === "—" || /star/i.test(old)) return row;

        const repo = extractRepo(row);
        if (!repo) {
          changes.push({ old, repo: null, note: "no-repo" });
          return row;
        }
        const stars = fetchStars(repo);
        if (stars == null) {
          changes.push({ old, repo, note: "fetch-fail" });
          return row;
        }
        const formatted = formatStars(stars);
        if (formatted !== old) {
          // 保留单元格两侧空白（`| 1.2k |` vs `|1.2k|`）
          const pad = cells[2].match(/^(\s*).*?(\s*)$/);
          cells[2] = pad
            ? `${pad[1]}${formatted}${pad[2]}`
            : formatted;
          changes.push({
            repo,
            old,
            stars,
            formatted,
            note: "updated",
          });
          return cells.join("|");
        }
        changes.push({ repo, old, stars, formatted, note: "same" });
        return row;
      });

      updated.sort((a, b) => {
        const as = parseStars(a.split("|")[2] || "");
        const bs = parseStars(b.split("|")[2] || "");
        return bs - as;
      });
      out.push(...updated);
      continue;
    }
    out.push(line);
    i++;
  }

  return { text: out.join("\n"), changes };
}

function main() {
  try {
    execFileSync("gh", ["auth", "status"], { stdio: "pipe" });
  } catch {
    console.error("需要已登录的 GitHub CLI：先运行 `gh auth login`");
    process.exit(1);
  }

  const absDir = path.join(root, targetDir);
  const files = readdirSync(absDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  console.log(
    `${dryRun ? "[dry-run] " : ""}更新 ${targetDir}/ （${files.length} 个 md）…`,
  );

  let updatedCount = 0;
  let sameCount = 0;
  let failCount = 0;
  const highlights = [];

  for (const file of files) {
    const fp = path.join(absDir, file);
    const before = readFileSync(fp, "utf8");
    const { text: after, changes } = updateFile(before);

    const updated = changes.filter((c) => c.note === "updated");
    const same = changes.filter((c) => c.note === "same");
    const failed = changes.filter(
      (c) => c.note !== "updated" && c.note !== "same",
    );
    updatedCount += updated.length;
    sameCount += same.length;
    failCount += failed.length;

    for (const c of updated) {
      highlights.push({
        file,
        repo: c.repo,
        from: c.old,
        to: c.formatted,
      });
    }
    for (const c of failed) {
      console.warn(`  ! ${file}: ${c.note}${c.repo ? ` (${c.repo})` : ""}`);
    }

    if (!dryRun && after !== before) writeFileSync(fp, after, "utf8");
  }

  console.log(
    `完成：更新 ${updatedCount}，未变 ${sameCount}，失败 ${failCount}`,
  );
  if (highlights.length) {
    console.log("变更：");
    for (const h of highlights) {
      console.log(`  ${h.file}  ${h.repo}  ${h.from} → ${h.to}`);
    }
  }
  if (failCount) process.exit(1);
}

const isDirectRun = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false;
if (isDirectRun) main();
