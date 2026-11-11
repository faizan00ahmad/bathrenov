import Link from "next/link";
import { Ambient, Breadcrumbs } from "@/components/ui";
import { why } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About NEW ART Bathrooms",
  description:
    "NEW ART specialises in complete bathroom renovations: skilled tradespeople, project management and quality workmanship. You choose the materials.",
  path: "/about/",
  keywords: ["bathroom renovation company", "bathroom fitters", "skilled tradespeople", "bathroom installation experts"],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />
      <section className="section page-hero">
        <Ambient />
        <div className="wrap">
          <span className="eyebrow">About us</span>
          <h1>Your Bathroom, Our Expertise</h1>
          <p className="lead">
            NEW ART specialises in complete bathroom renovations, transforming outdated bathrooms into modern, stylish and functional spaces. We manage every stage of the project, from preparation and removal to installation and final finishing.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            We provide the labour, expertise and installation. Customers supply the materials and bathroom products of their choice, so the result is exactly the bathroom you imagined.
          </p>
          <div className="why">
            {why.map(([t, d]) => (
              <div key={t} className="glass reveal"><h2 style={{ fontSize: "1.3rem" }}>{t}</h2><p>{d}</p></div>
            ))}
          </div>
          <div className="actions"><Link href="/contact/" className="btn btn-primary">Get a free quote</Link></div>
        </div>
      </section>
    </>
  );
}
