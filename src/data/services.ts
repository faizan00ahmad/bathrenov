export type Service = {
  slug: string;
  icon: string;
  name: string;
  short: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  items: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "complete-bathroom-renovations",
    icon: "◈",
    name: "Complete Bathroom Renovations",
    short: "Full refurbishment from strip-out to handover.",
    h1: "Complete Bathroom Renovations & Refurbishment",
    title: "Complete Bathroom Renovations & Installations",
    description:
      "Complete bathroom renovation and installation from start to finish. Removal, layout changes and luxury refits. You supply the materials, we do the work.",
    keywords: ["bathroom renovation", "bathroom refurbishment", "bathroom fitter", "new bathroom installation", "luxury bathroom renovation", "bathroom layout change"],
    intro:
      "We transform outdated bathrooms into modern, stylish and functional spaces, managing every stage: preparation, removal, installation and final finishing. You choose the materials and products; we provide the labour, expertise and project management.",
    items: [
      "Full bathroom refurbishment",
      "Removal of existing bathrooms",
      "Complete bathroom transformations",
      "Bathroom layout changes",
      "New bathroom installations",
      "Modern and luxury bathroom renovations",
    ],
    faqs: [
      { q: "How long does a complete bathroom renovation take?", a: "Most full bathroom renovations take 1 to 3 weeks depending on size, layout changes and drying times for waterproofing and tiling. We confirm the schedule in your quotation." },
      { q: "Can you change the layout of my bathroom?", a: "Yes. We relocate toilets, basins, showers and baths, including the plumbing, electrics and boxing-in required to make the new layout work." },
    ],
  },
  {
    slug: "walk-in-showers-wet-rooms",
    icon: "◌",
    name: "Walk-In Showers & Wet Rooms",
    short: "Waterproofed, tanked and beautifully finished.",
    h1: "Walk-In Shower & Wet Room Installation",
    title: "Walk-In Shower & Wet Room Installers",
    description:
      "Walk-in shower and wet room installation with shower trays, glass screens, drainage and full waterproofing and tanking. Expert labour, you choose the materials.",
    keywords: ["walk-in shower installation", "wet room installer", "wet room installation", "shower tray installation", "tanking and waterproofing", "shower screen fitting"],
    intro:
      "From a sleek walk-in shower to a fully tanked wet room, we build watertight, long-lasting showering spaces with correct falls, drainage and flawless glass installation.",
    items: [
      "Walk-in shower installation",
      "Wet room installation",
      "Shower tray installation",
      "Shower screens and glass enclosures",
      "Shower drainage installation",
      "Waterproofing and tanking",
    ],
    faqs: [
      { q: "Do you waterproof and tank wet rooms?", a: "Yes. Every wet room and walk-in shower is professionally waterproofed and tanked before tiling to protect your property for years." },
      { q: "Can I supply my own shower screen and tray?", a: "Absolutely. You choose and supply the products; we fit them precisely and seal them to a high standard." },
    ],
  },
  {
    slug: "bathroom-plumbing-heating",
    icon: "◍",
    name: "Plumbing & Heating",
    short: "Pipework, connections, radiators and underfloor heating.",
    h1: "Bathroom Plumbing & Heating Installation",
    title: "Bathroom Plumbing, Radiators & Underfloor Heating",
    description:
      "Bathroom plumbing installation: hot and cold pipework, shower, bath, toilet and basin connections, heated towel rails and underfloor heating.",
    keywords: ["bathroom plumbing", "bathroom plumber", "heated towel rail installation", "underfloor heating bathroom", "radiator installation", "shower and bath connections"],
    intro:
      "Clean, reliable plumbing is the foundation of every great bathroom. We install and connect everything neatly and test it thoroughly before handover.",
    items: [
      "Bathroom plumbing installation",
      "Hot and cold water pipework",
      "Shower, bath and toilet connections",
      "Basin and tap installation",
      "Radiator and heated towel rail installation",
      "Underfloor heating installation",
    ],
    faqs: [
      { q: "Can you install underfloor heating in a bathroom?", a: "Yes. We install underfloor heating beneath your tiles, with floor preparation and levelling included in our labour." },
    ],
  },
  {
    slug: "bathroom-tiling-flooring",
    icon: "▦",
    name: "Tiling & Flooring",
    short: "Large-format, marble-effect and mosaic tiling.",
    h1: "Bathroom Wall & Floor Tiling Specialists",
    title: "Bathroom Tiling & Flooring Installation",
    description:
      "Bathroom wall and floor tiling: porcelain, ceramic, large-format, marble-effect and mosaic. Floor levelling, precise grouting and silicone finishing.",
    keywords: ["bathroom tiler", "bathroom tiling", "large format tile installation", "porcelain tiles bathroom", "marble effect tiles", "mosaic tiling", "floor levelling"],
    intro:
      "Tiling makes or breaks a bathroom. Our tilers work with porcelain, ceramic, stone-effect and large-format tiles to deliver straight lines, tight joints and a flawless finish.",
    items: [
      "Bathroom wall and floor tiling",
      "Porcelain and ceramic tile installation",
      "Large-format tile installation",
      "Marble-effect and stone-effect tiling",
      "Mosaic and decorative tiling",
      "Floor preparation and levelling",
      "Grouting and silicone finishing",
    ],
    faqs: [
      { q: "Can you fit large-format tiles?", a: "Yes. We fit large-format porcelain and marble-effect tiles, including careful substrate preparation so they lay perfectly flat." },
    ],
  },
  {
    slug: "bathroom-furniture-installation",
    icon: "▭",
    name: "Bathroom Furniture Installation",
    short: "Vanity units, basins, mirrors, baths and toilets.",
    h1: "Bathroom Furniture & Fittings Installation",
    title: "Vanity Unit, Bath & Toilet Installation",
    description:
      "Vanity unit, washbasin, bath, toilet, concealed cistern, cabinet and LED mirror installation. Precise fitting of the bathroom products you choose.",
    keywords: ["vanity unit installation", "washbasin fitting", "LED mirror installation", "concealed cistern toilet", "bath fitting", "bathroom cabinet installation"],
    intro:
      "Bought your dream bathroom suite? We fit it perfectly: levelled, secured, connected and sealed.",
    items: [
      "Vanity unit installation",
      "Washbasin installation",
      "Bathroom cabinets and storage",
      "Mirror and LED mirror installation",
      "Bath and shower fitting",
      "Toilet and concealed cistern installation",
      "Bathroom accessories",
    ],
    faqs: [
      { q: "Do you fit bathroom products I bought myself?", a: "Yes. Our service is labour and installation only, so you are free to buy from any supplier and we fit everything." },
    ],
  },
  {
    slug: "plastering-wall-preparation",
    icon: "▤",
    name: "Plastering & Wall Preparation",
    short: "Skimming, repairs, moisture-resistant boards.",
    h1: "Bathroom Plastering & Wall Preparation",
    title: "Bathroom Plastering, Skimming & Wall Prep",
    description:
      "Professional bathroom plastering and skimming, wall and ceiling repairs, moisture-resistant plasterboard and boxing-in of pipes for a perfect base.",
    keywords: ["bathroom plastering", "skimming", "moisture resistant plasterboard", "wall repairs", "boxing in pipes", "ceiling repairs"],
    intro:
      "Great finishes start with great preparation. We repair, board and skim your walls and ceilings so tiles and paint look flawless.",
    items: [
      "Professional plastering and skimming",
      "Wall repairs and preparation",
      "Ceiling repairs",
      "Moisture-resistant plasterboard installation",
      "Boxing-in pipes and concealed fittings",
    ],
    faqs: [
      { q: "Why use moisture-resistant plasterboard?", a: "It resists damp in humid bathrooms and provides a durable base for tiling and waterproofing." },
    ],
  },
  {
    slug: "bathroom-electrical-lighting",
    icon: "✦",
    name: "Electrical & Lighting",
    short: "Lighting, LED mirrors, extractor fans.",
    h1: "Bathroom Electrical & Lighting Installation",
    title: "Bathroom Lighting, Extractor Fans & Electrics",
    description:
      "Bathroom lighting, LED mirror connections, extractor fan installation and electrical upgrades, fitted safely and neatly as part of your renovation.",
    keywords: ["bathroom lighting installation", "LED mirror connection", "extractor fan installation", "bathroom electrician", "bathroom electrical upgrade"],
    intro:
      "Safe, well-designed lighting and ventilation complete the look and protect your bathroom from moisture.",
    items: [
      "Bathroom lighting installation",
      "LED lighting and mirror connections",
      "Extractor fan installation",
      "Bathroom electrical upgrades",
      "Electrical fittings and connections",
    ],
    faqs: [
      { q: "Can you install an extractor fan?", a: "Yes. We fit extractor fans to meet ventilation needs and reduce condensation and mould." },
    ],
  },
  {
    slug: "painting-final-finishing",
    icon: "◐",
    name: "Painting & Final Finishing",
    short: "Decorating, silicone sealing and final detailing.",
    h1: "Bathroom Painting & Final Finishing",
    title: "Bathroom Painting, Decorating & Finishing",
    description:
      "Bathroom painting and decorating, ceilings, wall finishing, silicone sealing and final detailing: the finishing touches that make a renovation perfect.",
    keywords: ["bathroom painting", "bathroom decorating", "silicone sealing", "bathroom finishing", "ceiling painting"],
    intro:
      "The final 5% is what clients notice most. We finish every bathroom with clean lines, perfect sealing and meticulous detailing.",
    items: [
      "Bathroom painting and decorating",
      "Ceiling painting",
      "Wall finishing",
      "Silicone sealing",
      "Final detailing and finishing",
    ],
    faqs: [
      { q: "Is the final inspection included?", a: "Yes. Every project ends with a thorough final inspection and handover so you are completely happy." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
