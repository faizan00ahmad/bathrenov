import type { MetadataRoute } from "next";
import { abs } from "@/config/site";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/services/", 0.9, "monthly"],
    ["/process/", 0.7, "yearly"],
    ["/about/", 0.7, "yearly"],
    ["/contact/", 0.8, "yearly"],
    ["/privacy/", 0.2, "yearly"],
    ...services.map((s) => [`/services/${s.slug}/`, 0.85, "monthly"] as [string, number, "monthly"]),
  ];
  return pages.map(([p, priority, changeFrequency]) => ({ url: abs(p), lastModified: now, changeFrequency, priority }));
}
