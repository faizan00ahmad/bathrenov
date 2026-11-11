import { Ambient, Breadcrumbs } from "@/components/ui";
import { ServiceTile } from "@/components/ServiceTile";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bathroom Renovation Services",
  description:
    "Bathroom renovations, walk-in showers, wet rooms, plumbing, tiling, plastering, electrics and finishing. Labour-only, you supply materials.",
  path: "/services/",
  keywords: ["bathroom services", "bathroom fitting services", "bathroom renovation services", "wet room", "bathroom tiling"],
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />
      <section className="section page-hero">
        <Ambient />
        <div className="wrap">
          <span className="eyebrow">What we do</span>
          <h1>Bathroom Renovation &amp; Installation Services</h1>
          <p className="lead">Eight specialist services, one accountable team. We provide the labour and expertise; you choose the materials.</p>
          <div className="tiles">
            {services.map((s, i) => <ServiceTile key={s.slug} s={s} index={i} heading="h2" />)}
          </div>
        </div>
      </section>
    </>
  );
}
