import Link from "next/link";
import { notFound } from "next/navigation";
import { Ambient, Breadcrumbs, Faq, JsonLd } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { getService, services } from "@/data/services";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.description, path: `/services/${s.slug}/`, keywords: s.keywords });
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);
  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: s.name, path: `/services/${s.slug}/` },
        ]}
      />
      <section className="section page-hero">
        <Ambient />
        <div className="wrap two">
          <div>
            <span className="eyebrow">{s.name}</span>
            <h1>{s.h1}</h1>
            <p className="lead">{s.intro}</p>
            <div className="glass panel reveal" style={{ marginTop: 30 }}>
              <h2>What&apos;s included</h2>
              <ul className="ticks">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
          <aside className="glass panel" aria-label="Request a quote">
            <h2>Free quote</h2>
            <QuoteForm />
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 style={{ textAlign: "center" }}>{s.name}: common questions</h2>
          <Faq faqs={s.faqs} />
          <p className="lead" style={{ margin: "40px auto 0", textAlign: "center" }}>
            Like every NEW ART service, this is labour and installation only, so you choose and supply the materials.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sand)" }}>
        <div className="wrap">
          <h2>More bathroom services</h2>
          <div className="why">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}/`} className="glass card">
                <h3>{o.name}</h3>
                <p>{o.short}</p>
                <span className="more">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs)]} />
    </>
  );
}
