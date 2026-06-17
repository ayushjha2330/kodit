"use client";
import Link from "next/link";

export default function AboutCtaSection() {
  return (
    <section className="au-cta-section">
      <div className="au-container">
        <div className="au-cta-inner">
          <div className="au-cta-orb" />
          <h2 className="au-cta-title">Ready to grow your business?</h2>
          <p className="au-cta-sub">
            Book a free discovery call. We will review your current digital presence,
            identify gaps, and outline a strategy to generate more qualified leads.
          </p>
          <Link href="/contact" className="btn-primary">Book Free Discovery Call</Link>
        </div>
      </div>
    </section>
  );
}
