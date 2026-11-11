import Link from "next/link";
import { Ambient, Breadcrumbs } from "@/components/ui";
import { process } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Bathroom Renovation Process",
  description:
    "Our 10-step bathroom renovation process: free site visit, design, labour quotation, plumbing, tiling, installation and final handover.",
  path: "/process/",
  keywords: ["bathroom renovation process", "how bathroom fitting works", "bathroom installation steps"],
});

export default function ProcessPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Our Process", path: "/process/" }]} />
      <section className="section page-hero">
        <Ambient />
        <div className="wrap">
          <span className="eyebrow">Our working process</span>
          <h1>From Free Consultation to Final Handover</h1>
          <p className="lead">A clear, managed process so you always know what happens next.</p>
          <ol className="timeline">
            {process.map(([t, d]) => (
              <li key={t} className="glass reveal"><h2 style={{ fontSize: "1.15rem", marginBottom: 6 }}>{t}</h2><p>{d}</p></li>
            ))}
          </ol>
          <div className="actions"><Link href="/contact/" className="btn btn-primary">Book your free consultation</Link></div>
        </div>
      </section>
    </>
  );
}
