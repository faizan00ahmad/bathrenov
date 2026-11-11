import type { Metadata } from "next";
import { abs, site } from "@/config/site";

type Opts = {
  title: string;
  description: string;
  path: string; // e.g. "/services/"
  keywords?: string[];
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, keywords, absoluteTitle, noindex }: Opts): Metadata {
  const url = abs(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
      type: "website",
      url,
      siteName: `${site.name} ${site.tagline}`,
      title: fullTitle,
      description,
      locale: "en_GB",
      images: [{ url: abs("/og-image.jpg"), width: 1200, height: 630, alt: "Luxury classic bathroom renovation by NEW ART" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [abs("/og-image.jpg")],
    },
  };
}
