import { Ambient, Breadcrumbs } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Free Bathroom Quote",
  description:
    "Book a free bathroom consultation and site visit with NEW ART. Call, WhatsApp or email for a detailed, transparent labour quotation.",
  path: "/contact/",
  keywords: ["free bathroom quote", "bathroom fitter near me", "bathroom renovation quote", "contact bathroom installer"],
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />
      <section className="section page-hero">
        <Ambient />
        <div className="wrap two">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h1>Request Your Free Bathroom Quote</h1>
            <p className="lead">Free consultation and site visit, followed by a clear labour quotation.</p>
            <div className="glass panel" style={{ marginTop: 28 }}>
              <h2>Contact details</h2>
              <ul className="ticks">
                <li><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></li>
                <li>{site.hours}</li>
              </ul>
            </div>
          </div>
          <div className="glass panel"><h2>Tell us about your project</h2><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
