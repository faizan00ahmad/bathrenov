import { Breadcrumbs } from "@/components/ui";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the NEW ART Bathrooms website. We do not store form data or use tracking cookies.",
  path: "/privacy/",
});

export default function Privacy() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy/" }]} />
      <section className="section page-hero">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <h1>Privacy Policy</h1>
          <p className="lead">This website is fully static. It has no database and does not store the details you type into the quote form.</p>
          <h2 style={{ fontSize: "1.6rem", margin: "32px 0 10px" }}>What happens to your message</h2>
          <p className="lead">When you use the quote form, your message opens in WhatsApp or your email app so you can send it directly to us. We only receive what you choose to send.</p>
          <h2 style={{ fontSize: "1.6rem", margin: "32px 0 10px" }}>Cookies and analytics</h2>
          <p className="lead">We do not set tracking cookies. If analytics are added in future, this page will be updated.</p>
          <h2 style={{ fontSize: "1.6rem", margin: "32px 0 10px" }}>Contact</h2>
          <p className="lead">Questions? Email <a href={`mailto:${site.email}`}><u>{site.email}</u></a>.</p>
        </div>
      </section>
    </>
  );
}
