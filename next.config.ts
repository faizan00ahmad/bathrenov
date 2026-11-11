import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static -> ./out (Vercel, Netlify, Cloudflare Pages, any CDN)
  ...(process.env.DIST ? { distDir: process.env.DIST } : {}), // optional local override
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
