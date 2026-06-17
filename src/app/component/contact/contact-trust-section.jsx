"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const badges = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "SSL Encrypted", sub: "Your data is always protected" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Top 3 on Google Maps", sub: "Local SEO that puts you on top" },
  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "No Long Contracts", sub: "Rolling monthly agreements" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "40+ Clients Served", sub: "Across India from South Delhi" },
];

export default function ContactTrustSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Trust badges reveal */
      gsap.fromTo(".ct-trust-item",
        { opacity: 0, y: 32, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-trust", start: "top 82%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ct-trust ct-container">
      <div className="ct-trust-grid">
        {badges.map((t, i) => (
          <div key={i} className="ct-trust-item">
            <div className="ct-trust-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84D0E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={t.icon} />
              </svg>
            </div>
            <div>
              <span className="ct-trust-label">{t.label}</span>
              <span className="ct-trust-sub">{t.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
