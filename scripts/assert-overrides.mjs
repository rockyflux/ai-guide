import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { overrides = {} } = JSON.parse(readFileSync("package.json", "utf8"));
const names = Object.keys(overrides);
const errors = [];

if (!names.length) {
  console.error("package.json has no overrides to assert");
  process.exit(1);
}

for (const [name, expected] of Object.entries(overrides)) {
  let actual;
  try {
    actual = require(`${name}/package.json`).version;
  } catch (error) {
    errors.push(`${name}: not installed (${error.message})`);
    continue;
  }
  if (actual !== expected) {
    errors.push(`${name}: expected ${expected}, got ${actual}`);
  } else {
    console.log(`${name}@${actual} matches override (resolved)`);
  }
}

// Also walk npm ls so nested copies cannot drift past overrides.
let tree;
const lsCmd = `npm ls ${names.join(" ")} --all --json`;
try {
  const raw = execSync(lsCmd, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  tree = JSON.parse(raw);
} catch (error) {
  // npm ls exits non-zero when the tree has extraneous/peer warnings;
  // still parse stdout if present so version asserts can run.
  const stdout = error.stdout?.toString?.() ?? "";
  try {
    tree = JSON.parse(stdout);
  } catch {
    errors.push(`npm ls failed: ${error.message}`);
    tree = null;
  }
}

function walk(node, path = []) {
  if (!node || typeof node !== "object") return;
  const deps = node.dependencies;
  if (!deps) return;
  for (const [name, info] of Object.entries(deps)) {
    const nextPath = [...path, name];
    if (name in overrides) {
      const actual = info.version;
      const expected = overrides[name];
      if (actual !== expected) {
        errors.push(
          `${nextPath.join(" > ")}: expected ${expected}, got ${actual ?? "(missing)"}`,
        );
      }
    }
    walk(info, nextPath);
  }
}

if (tree) {
  walk(tree);
  if (!errors.length) {
    console.log(`npm ls ${names.join(" ")}: all override versions match`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
