# NEW ART Bathrooms: static Next.js site

Pure static export (no backend, no database).

```bash
npm install
npm run dev        # local dev
npm run build      # outputs ./out (upload to any static host)
npm run check:seo  # validates titles, descriptions, H1, canonical, JSON-LD in ./out
```

## Before launch (TODO)
Edit `src/config/site.ts`: domain, phone, WhatsApp, email, real service areas. Add the Google Search Console token in `src/app/layout.tsx` (`verification.google`). Then rebuild, deploy and submit `/sitemap.xml` in Search Console.

Content lives in `src/data/services.ts` and `src/data/content.ts`. Hero video credit: `public/media/CREDITS.md`.

## Deploy on Vercel
1. Push to GitHub, then in Vercel choose **Add New → Project** and import the repo.
2. Framework is auto-detected (Next.js, static export → `out`); `vercel.json` only adds headers; leave Output Directory empty (do not set it to `out`). No env vars needed.
3. After the first deploy, set the real domain in `src/config/site.ts` (`url`), redeploy, and submit `https://<domain>/sitemap.xml` in Google Search Console.
