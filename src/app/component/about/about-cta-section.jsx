"use client";
import Link from "next/link";

export default function AboutCtaSection() {
  return (
    <section className="au-cta-section">
      <div className="au-container">
        <div className="au-cta-inner">
          <div className="au-cta-orb" />
          <h2 className="au-cta-title">Let&apos;s talk about your project</h2>
          <p className="au-cta-sub">
            Get a free digital audit — we analyse your site speed, local SEO
            visibility and map ranking, then deliver an actionable report.
          </p>
          <Link href="/contact" className="btn-primary">Claim Free Audit</Link>
        </div>
      </div>
    </section>
  );
}
