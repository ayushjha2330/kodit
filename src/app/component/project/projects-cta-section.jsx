"use client";
import Link from "next/link";

export default function ProjectsCtaSection() {
  return (
    <section className="pj-cta pj-container">
      <div className="pj-cta-inner">
        <div className="pj-cta-orb" />
        <h2 className="pj-cta-title">Want to see your business here?</h2>
        <p className="pj-cta-sub">
          Let&apos;s build your digital machine. Get in touch and we&apos;ll
          show you exactly how we&apos;d approach your growth.
        </p>
        <Link href="/contact" className="btn-primary">Start a Project</Link>
      </div>
    </section>
  );
}
