"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const processSteps = [
  { num: "01", title: "Discovery", body: "We audit your business model, target audience, competitors, and current digital presence to identify growth opportunities." },
  { num: "02", title: "Strategy", body: "A custom roadmap with clear KPIs, timelines, and milestones — aligned to your revenue goals, not vanity metrics." },
  { num: "03", title: "Execution", body: "Our team builds, designs, optimizes, and launches your digital assets. Most projects go live within 14 days." },
  { num: "04", title: "Growth", body: "Continuous iteration, A/B testing, and transparent monthly reporting. We measure success by leads generated, not activity reports." },
];

export default function ProjectsProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Process steps reveal */
      gsap.fromTo(".pj-step",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".pj-process", start: "top 78%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pj-process pj-container">
      <p className="section-eyebrow">How We Work</p>
      <h2 className="pj-section-h2">From brief to <em>breakthrough.</em></h2>

      <div className="pj-steps-row">
        {processSteps.map((s) => (
          <div key={s.num} className="pj-step">
            <div className="pj-step-line" />
            <span className="pj-step-num">{s.num}</span>
            <h3 className="pj-step-title">{s.title}</h3>
            <p className="pj-step-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
