"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const timeline = [
  { year: "2020", title: "Founded", body: "Kodit Agency started as a 2-person design studio in South Delhi." },
  { year: "2021", title: "First 10 Clients", body: "Expanded into SEO and GMB — landed our first dentist, salon, and law firm." },
  { year: "2022", title: "Full-Stack Growth", body: "Built development team, adopted Next.js and headless CMS architecture." },
  { year: "2023", title: "25+ Projects", body: "Crossed 25 shipped projects with 95% client retention rate." },
  { year: "2024", title: "Agency of Record", body: "Became retained growth partner for 8 Delhi businesses." },
];

export default function AboutTimelineSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Timeline */
      gsap.fromTo(".au-tl-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".au-timeline", start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="au-timeline">
      <div className="au-container">
        <p className="section-eyebrow">Our Journey</p>
        <h2 className="au-section-h2">From a small studio to <em>Delhi&apos;s growth partner.</em></h2>

        <div className="au-tl-track">
          {timeline.map((t, i) => (
            <div key={t.year} className="au-tl-item">
              <div className="au-tl-dot-wrap">
                <span className="au-tl-dot" />
                {i < timeline.length - 1 && <div className="au-tl-connector" />}
              </div>
              <div className="au-tl-content">
                <span className="au-tl-year">{t.year}</span>
                <h3 className="au-tl-title">{t.title}</h3>
                <p className="au-tl-body">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
