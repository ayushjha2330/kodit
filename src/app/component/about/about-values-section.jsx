"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const values = [
  { num: "01", title: "Radical Transparency", body: "No hidden costs, no inflated metrics, no jargon. You see exactly where every rupee goes and what it produced." },
  { num: "02", title: "Delhi Roots, India-Wide", body: "Headquartered in New Delhi with deep local market knowledge. We serve businesses across metros, tier-2, and tier-3 cities with strategies adapted to each market." },
  { num: "03", title: "Speed as a Weapon", body: "Websites go live in under 14 days. SEO audits in 48 hours. We move fast without cutting corners on quality." },
  { num: "04", title: "Design That Commands Trust", body: "Premium aesthetics that signal authority, build credibility, and justify the pricing your business deserves." },
];

export default function AboutValuesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Values */
      gsap.fromTo(".au-value-card",
        { y: 60, opacity: 0, rotateX: 8 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.75, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="au-values">
      <div className="au-container">
        <p className="section-eyebrow">Our Values</p>
        <h2 className="au-section-h2">How We Do Business</h2>
        <div className="au-values-grid">
          {values.map((v) => (
            <div key={v.num} className="au-value-card">
              <span className="au-vnum">{v.num}</span>
              <h3 className="au-vtitle">{v.title}</h3>
              <p className="au-vbody">{v.body}</p>
              <div className="au-vbar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
