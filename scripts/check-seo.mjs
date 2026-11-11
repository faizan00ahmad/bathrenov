// node scripts/check-seo.mjs  (after `npm run build`)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(process.argv[2] || "dist").filter((f) => f.endsWith("index.html"));
const titles = new Set();
let bad = 0;
for (const f of files) {
  const h = readFileSync(f, "utf8");
  const title = h.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  const desc = h.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "";
  const canon = h.match(/<link rel="canonical" href="(.*?)"/)?.[1] ?? "";
  const h1 = (h.match(/<h1/g) || []).length;
  const ld = [...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  let ldOk = true;
  for (const m of ld) { try { JSON.parse(m[1].replace(/\\u003c/g, "<")); } catch { ldOk = false; } }
  const probs = [];
  if (!title || title.length > 65) probs.push(`title(${title.length})`);
  if (!desc || desc.length > 160) probs.push(`desc(${desc.length})`);
  if (!canon && !f.includes("404")) probs.push("canonical");
  if (h1 !== 1 && !f.includes("404")) probs.push(`h1=${h1}`);
  if (!ldOk) probs.push("jsonld");
  if (titles.has(title)) probs.push("dupe-title");
  titles.add(title);
  if (probs.length) bad++;
  console.log(probs.length ? "✗" : "✓", f.replace(/\\/g, "/"), `| ${title.length}/${desc.length} h1=${h1} ld=${ld.length}`, probs.join(","));
}
console.log(bad ? `${bad} page(s) need attention` : "All pages OK");
