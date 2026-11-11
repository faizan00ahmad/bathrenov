// Generates icons + OG image from existing media. Run: node scripts/optimize-images.mjs
import sharp from "sharp";
await sharp("public/media/hero-poster.webp").resize(1200, 630, { fit: "cover" }).jpeg({ quality: 80 }).toFile("public/og-image.jpg");
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" rx="112" fill="#ee6a55"/><text x="256" y="340" font-family="Arial,sans-serif" font-weight="700" font-size="280" text-anchor="middle" fill="#fff">N</text></svg>`);
for (const [n, s] of [["icon-512", 512], ["icon-192", 192], ["apple-touch-icon", 180]]) await sharp(svg).resize(s).png().toFile(`public/${n}.png`);
console.log("done");
