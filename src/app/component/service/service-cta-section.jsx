"use client";
import Link from "next/link";

export default function ServiceCtaSection() {
  return (
    <section className="sv-cta sv-container">
      <div className="sv-cta-inner">
        <div className="sv-cta-orb" />
        <h2 className="sv-cta-title">Unsure where to start?</h2>
        <p className="sv-cta-sub">
          Get a free video audit — we analyse your website speed, map ranking and
          SEO gaps, then present an actionable walkthrough.
        </p>
        <Link href="/contact" className="btn-primary">Request Free Audit</Link>
      </div>
    </section>
  );
}
