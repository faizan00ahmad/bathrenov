"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { services } from "@/data/services";

export function QuoteForm() {
  const [err, setErr] = useState("");

  function build(form: HTMLFormElement) {
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const phone = String(d.get("phone") || "").trim();
    const service = String(d.get("service") || "");
    const msg = String(d.get("message") || "").trim();
    if (!name || !phone) {
      setErr("Please enter your name and phone number.");
      return null;
    }
    setErr("");
    return `Hello NEW ART, I'd like a free quote.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${msg || "-"}`;
  }

  return (
    <form
      className="quote"
      onSubmit={(e) => {
        e.preventDefault();
        const text = build(e.currentTarget);
        if (text) window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      }}
    >
      <div className="row2">
        <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
      </div>
      <div className="field">
        <label htmlFor="service">Service needed</label>
        <select id="service" name="service" defaultValue={services[0].name}>
          {services.map((s) => <option key={s.slug}>{s.name}</option>)}
        </select>
      </div>
      <div className="field"><label htmlFor="message">Tell us about your bathroom</label><textarea id="message" name="message" placeholder="Size, layout changes, wet room, tiling..." /></div>
      {err && <p role="alert" className="note" style={{ color: "#b3261e" }}>{err}</p>}
      <div className="actions" style={{ marginTop: 4 }}>
        <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
        <button
          type="button"
          className="btn btn-glass"
          onClick={(e) => {
            const f = e.currentTarget.form!;
            const text = build(f);
            if (text) window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Free bathroom quote request")}&body=${encodeURIComponent(text)}`;
          }}
        >
          Send by Email
        </button>
      </div>
      <p className="note">No data is stored. Your message opens in WhatsApp or your email app.</p>
    </form>
  );
}
