"use client";
import Link from "next/link";

export default function ServiceCtaSection() {
  return (
    <section className="sv-cta sv-container">
      <div className="sv-cta-inner">
        <div className="sv-cta-orb" />
        <h2 className="sv-cta-title">Not sure which service fits your business?</h2>
        <p className="sv-cta-sub">
          Book a free discovery call. We will review your current digital presence,
          identify gaps, and recommend the right services to generate more leads.
        </p>
        <Link href="/contact" className="btn-primary">Book Free Discovery Call</Link>
      </div>
    </section>
  );
}
