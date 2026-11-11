// TODO: replace every value marked TODO with the client's real details before launch.
export const site = {
  name: "NEW ART",
  tagline: "Bathrooms • Interiors • Renovations",
  legalName: "NEW ART Bathrooms Interiors Renovations",
  url: "https://newartbathrooms.co.uk", // TODO real domain
  locale: "en-GB",
  phone: "+447000000000", // TODO
  phoneDisplay: "07000 000000", // TODO
  whatsapp: "447000000000", // TODO (digits only, country code first)
  email: "info@newartbathrooms.co.uk", // TODO
  country: "GB",
  region: "United Kingdom", // TODO
  areas: ["Your City", "Surrounding Areas"], // TODO real service areas
  hours: "Mon–Sat 8:00–18:00",
  description:
    "Complete bathroom renovations, walk-in showers, wet rooms, plumbing and tiling. You choose the materials, we take care of the transformation.",
} as const;

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/process/", label: "Process" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const abs = (path: string) => new URL(path, site.url).toString();
