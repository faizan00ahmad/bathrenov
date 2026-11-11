import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "80vh", display: "grid", placeItems: "center", textAlign: "center" }}>
      <div className="wrap glass panel" style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: "3rem" }}>404</h1>
        <p className="lead center" style={{ margin: "14px auto 24px" }}>This page has gone down the drain. Let&apos;s get you back.</p>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
