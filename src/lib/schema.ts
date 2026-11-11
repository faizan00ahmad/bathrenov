import { abs, site } from "@/config/site";
import { services, type Service } from "@/data/services";

const ORG_ID = abs("/#business");
const SITE_ID = abs("/#website");

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": ORG_ID,
  name: site.legalName,
  alternateName: [site.name, "NEW ART Bathrooms"],
  slogan: "You choose the materials. We take care of the transformation.",
  description: site.description,
  url: abs("/"),
  logo: abs("/icon-512.png"),
  image: abs("/og-image.jpg"),
  telephone: site.phone,
  email: site.email,
  priceRange: "££",
  openingHours: "Mo-Sa 08:00-18:00",
  address: { "@type": "PostalAddress", addressCountry: site.country },
  areaServed: site.areas.map((a) => ({ "@type": "Place", name: a })),
  knowsAbout: ["Bathroom renovation", "Wet room installation", "Walk-in showers", "Bathroom tiling", "Bathroom plumbing", "Underfloor heating"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bathroom renovation and installation services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: abs(`/services/${s.slug}/`) },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: abs("/"),
  name: `${site.name} ${site.tagline}`,
  inLanguage: "en-GB",
  publisher: { "@id": ORG_ID },
};

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.description,
  url: abs(`/services/${s.slug}/`),
  provider: { "@id": ORG_ID },
  areaServed: site.areas.map((a) => ({ "@type": "Place", name: a })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: s.name,
    itemListElement: s.items.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: i } })),
  },
});
