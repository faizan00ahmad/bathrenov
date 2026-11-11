import Link from "next/link";
import { abs, nav, site } from "@/config/site";
import { services } from "@/data/services";
import { Logo } from "@/components/Logo";
import { breadcrumbSchema } from "@/lib/schema";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Header() {
  return (
    <header className="header">
      <nav className="nav glass" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label={`${site.name} ${site.tagline} home`}>
          <span className="logo-badge"><Logo size={36} /></span>
          <span className="txt">
            {site.name}
            <small>BATHROOMS • INTERIORS</small>
          </span>
        </Link>
        <div className="links">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="l">{n.label}</Link>
          ))}
          <a className="btn btn-primary" href="/contact/">Get a Quote</a>
        </div>
        <details className="mm">
          <summary className="btn btn-glass">Menu</summary>
          <div className="mobile-menu glass">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
            <Link href="/contact/" className="btn btn-primary" style={{ justifyContent: "center" }}>Get a Free Quote</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div>
            <p className="brand"><Logo size={46} /><span className="txt">{site.name}</span></p>
            <p className="note" style={{ marginTop: 14, maxWidth: 320 }}>
              Complete bathroom renovations and installations. Professional workmanship, every step of the way. You choose the materials — we take care of the transformation.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
              <li><Link href="/privacy/">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`https://wa.me/${site.whatsapp}`} rel="noopener noreferrer" target="_blank">WhatsApp us</a></li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function StickyCta() {
  return (
    <div className="sticky-cta glass" role="complementary" aria-label="Quick contact">
      <a className="btn btn-primary" href={`tel:${site.phone}`}>Call</a>
      <a className="btn btn-brass" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          {trail.map((t, i) => (
            <li key={t.path}>
              {i < trail.length - 1 ? <Link href={t.path}>{t.name}</Link> : <span aria-current="page">{t.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail.map((t) => ({ name: t.name, path: t.path })))} />
    </>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.q} className="glass reveal">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="orb a" />
      <span className="orb b" />
    </div>
  );
}

export { abs };
