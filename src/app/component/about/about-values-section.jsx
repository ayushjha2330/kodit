"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const values = [
  { num: "01", title: "Radical Transparency", body: "No hidden costs, no fluff. You see exactly where every rupee goes." },
  { num: "02", title: "Delhi Market Edge", body: "Local expertise in micro-markets, search intent, and audience language." },
  { num: "03", title: "Speed as a Weapon", body: "We build, test, and optimise in days — not months." },
  { num: "04", title: "Design That Commands Trust", body: "Premium aesthetics that signal authority and justify higher pricing." },
];

export default function AboutValuesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Values */
      gsap.fromTo(".au-value-card",
        { y: 60, opacity: 0, rotateX: 8 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.75, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: ".au-values", start: "top 78%" } }
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
