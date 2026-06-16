"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const comparisons = [
  { feature: "Custom strategy per client", us: true, them: false },
  { feature: "Sub-second page load", us: true, them: false },
  { feature: "Monthly growth reports", us: true, them: false },
  { feature: "Hand-coded architecture", us: true, them: false },
  { feature: "Dedicated account manager", us: true, them: false },
  { feature: "No long-term contracts", us: true, them: false },
];

export default function ServiceCompareSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Comparison table */
      gsap.fromTo(".sv-comp-row",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".sv-compare", start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sv-compare sv-container">
      <p className="section-eyebrow">Why Us</p>
      <h2 className="sv-section-h2">Kodit vs <em>typical agencies</em></h2>

      <div className="sv-compare-grid">
        <div className="sv-comp-col sv-comp-typical">
          <span className="sv-comp-them">Typical Agency</span>
          <ul className="sv-comp-list">
            <li>Slow communication</li>
            <li>Cookie-cutter templates</li>
            <li>No clear ROI tracking</li>
            <li>Outsourced junior work</li>
          </ul>
        </div>
        <div className="sv-comp-col sv-comp-us">
          <span className="sv-comp-us">Kodit</span>
          <ul className="sv-comp-list">
            <li>Direct Slack access</li>
            <li>Custom coded solutions</li>
            <li>Data-driven growth metrics</li>
            <li>In-house expert team</li>
          </ul>
        </div>
      </div>
      <div className="sv-comp-table">
        <div className="sv-comp-header sv-comp-row">
          <span className="sv-comp-feat">Feature</span>
          <span className="sv-comp-us">Kodit</span>
          <span className="sv-comp-them">Others</span>
        </div>
        {comparisons.map((c, i) => (
          <div key={i} className="sv-comp-row">
            <span className="sv-comp-feat">{c.feature}</span>
            <span className="sv-comp-us">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <span className="sv-comp-them">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
