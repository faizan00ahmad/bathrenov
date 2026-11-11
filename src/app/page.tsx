import Link from "next/link";
import { HeroVideo, VideoCard } from "@/components/HeroVideo";
import { Faq, JsonLd } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceTile } from "@/components/ServiceTile";
import { homeFaqs, process, why } from "@/data/content";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bathroom Renovations & Installations | NEW ART Bathrooms",
  absoluteTitle: true,
  description:
    "Complete bathroom renovations, walk-in showers, wet rooms, tiling and plumbing. Expert labour and project management. You choose the materials. Free quote.",
  path: "/",
  keywords: [
    "bathroom renovation", "bathroom fitter", "bathroom installation", "walk-in shower installation", "wet room installer",
    "bathroom tiling", "bathroom plumbing", "labour only bathroom fitting", "complete bathroom refurbishment", "NEW ART bathrooms",
  ],
});

const features = [
  ["◈", "Complete start-to-finish service", "One team managing removal, plumbing, tiling, installation and finishing."],
  ["✦", "Skilled tradespeople", "Professional workmanship and attention to detail in every joint."],
  ["◐", "You choose the materials", "Supply your own tiles, suites and fittings. We handle the labour."],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-card-wrap">
          <HeroVideo />
          <div>
            <span className="eyebrow">{site.tagline}</span>
            <h1 id="hero-title">Transform Your Bathroom into a <em>Dream Oasis</em></h1>
            <p className="lead">
              Complete bathroom renovations and installations, from start to finish. Professional workmanship, every step of the way.
            </p>
          </div>
          <div className="hero-bottom">
            <div className="actions">
              <Link href="/contact/" className="btn btn-primary">Get a Free Quote</Link>
              <Link href="/services/" className="btn btn-ghost-dark">Our Services</Link>
            </div>
            <div className="chips" aria-label="Key benefits">
              <span className="chip">Labour &amp; project management</span>
              <span className="chip">You supply the materials</span>
              <span className="chip">Transparent quotes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="welcome-title">
        <div className="wrap">
          <div className="section-title">
            <h2 id="welcome-title">Welcome to NEW ART, elevating your bathroom experience</h2>
          </div>
          <div className="welcome">
            <ul className="feat">
              {features.map(([i, t, d]) => (
                <li key={t}>
                  <span className="ico" aria-hidden="true">{i}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </li>
              ))}
            </ul>
            <VideoCard label="▶ Play" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="services-title">
        <div className="wrap">
          <div className="head-row">
            <div>
              <span className="eyebrow">Our services</span>
              <h2 id="services-title">Tailored solutions for every need.<br />Discover our bathroom services</h2>
            </div>
            <Link href="/services/" className="btn btn-glass">View all</Link>
          </div>
          <div className="tiles">
            {services.map((s, i) => <ServiceTile key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="materials-title">
        <div className="wrap">
          <div className="cta-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/cta.webp" alt="" width={1400} height={900} loading="lazy" decoding="async" />
            <div className="cta-inner glass glass-white">
              <h2 id="materials-title" style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>You choose the materials. We take care of the transformation.</h2>
              <p>We provide the labour, expertise and installation. You supply the bathroom products of your choice.</p>
              <ul className="ticks">
                <li>Choose any tiles, suites, showers and fittings</li>
                <li>Fully managed installation from strip-out to handover</li>
                <li>Clear labour-only quotation with no surprises</li>
              </ul>
              <Link href="/contact/" className="btn btn-primary">Request a labour quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-title">
            <span className="eyebrow">Our working process</span>
            <h2 id="process-title">Ten clear steps from first visit to final handover</h2>
          </div>
          <ol className="timeline">
            {process.map(([t, d]) => (
              <li key={t} className="glass reveal"><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sand)" }} aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-title">
            <span className="eyebrow">Why choose us</span>
            <h2 id="why-title">Bathroom renovation done properly</h2>
          </div>
          <div className="why">
            {why.map(([t, d]) => (
              <div key={t} className="glass reveal"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="section-title">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-title">Bathroom renovation questions, answered</h2>
          </div>
          <Faq faqs={homeFaqs} />
        </div>
        <JsonLd data={faqSchema(homeFaqs)} />
      </section>

      <section className="section" style={{ background: "var(--sand)" }} aria-labelledby="quote-title">
        <div className="wrap two">
          <div>
            <span className="eyebrow">Free consultation</span>
            <h2 id="quote-title">Your bathroom, our expertise.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Book a free consultation and site visit. We will measure up, discuss ideas and send a detailed labour quotation.
            </p>
            <div className="actions"><a className="btn btn-primary" href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a></div>
          </div>
          <div className="glass panel"><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
