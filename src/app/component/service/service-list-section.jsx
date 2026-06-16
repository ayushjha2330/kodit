"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  { id: "web", num: "01", title: "Web Development", tagline: "Ultra-fast Next.js & React sites" },
  { id: "seo", num: "02", title: "SEO Optimisation", tagline: "Rank page 1 for buyer-intent keywords" },
  { id: "gmb", num: "03", title: "GMB Optimisation", tagline: "Dominate Google Maps 3-Pack in Delhi" },
  { id: "design", num: "04", title: "Graphic Design & Branding", tagline: "Visual authority that commands premium pricing" },
];

export default function ServiceListSection({ setActive }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* List rows */
      gsap.fromTo(".sv-row",
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sv-list sv-container">
      <p className="section-eyebrow">All Services</p>
      <h2 className="sv-section-h2">Everything under <em>one roof.</em></h2>
      <div className="sv-rows">
        {services.map((svc, i) => (
          <button key={svc.id} className="sv-row"
            onClick={() => { setActive(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <span className="sv-row-num">{svc.num}</span>
            <span className="sv-row-title">{svc.title}</span>
            <span className="sv-row-tag">{svc.tagline}</span>
            <svg className="sv-row-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        ))}
      </div>
    </section>
  );
}
