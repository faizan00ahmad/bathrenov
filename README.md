# NEW ART Bathrooms: static Next.js site

Pure static export (no backend, no database).

```bash
npm install
npm run dev        # local dev
npm run build      # outputs ./dist (upload to any static host)
npm run check:seo  # validates titles, descriptions, H1, canonical, JSON-LD in ./dist
```

## Before launch (TODO)
Edit `src/config/site.ts`: domain, phone, WhatsApp, email, real service areas. Add the Google Search Console token in `src/app/layout.tsx` (`verification.google`). Then rebuild, deploy and submit `/sitemap.xml` in Search Console.

Content lives in `src/data/services.ts` and `src/data/content.ts`. Hero video credit: `public/media/CREDITS.md`.
