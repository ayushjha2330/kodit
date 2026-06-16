"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { num: "25+", label: "Projects Delivered" },
  { num: "4+",  label: "Years in Delhi Market" },
  { num: "3.4x", label: "Avg. ROI Improvement" },
  { num: "95%", label: "Client Retention" },
];

export default function AboutHeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero lines */
      gsap.fromTo(".au-title-line",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.14, ease: "power4.out" }
      );
      gsap.fromTo(".au-hero-sub",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.55, ease: "power3.out" }
      );

      /* Floating orbs */
      gsap.to(".au-orb-1", { y: -25, x: 12, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".au-orb-2", { y: 20, x: -18, duration: 4.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".au-orb-3", { y: -15, x: 8, duration: 5.2, ease: "sine.inOut", yoyo: true, repeat: -1 });

      /* Floating cards */
      gsap.to(".au-float-card", { y: -18, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 });

      /* Stats trigger */
      gsap.fromTo(".au-stat",
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".au-stats", start: "top 80%" } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── HERO ── */}
      <section className="au-hero">
        <div className="au-glow" />
        {/* Animated orbs */}
        <div className="au-orb au-orb-1" />
        <div className="au-orb au-orb-2" />
        <div className="au-orb au-orb-3" />

        <div className="au-container">
          <p className="section-eyebrow">Who We Are</p>
          <h1 className="au-title">
            <span className="au-clip"><span className="au-title-line">We build digital</span></span>
            <span className="au-clip"><span className="au-title-line accent-italic">machines that grow</span></span>
            <span className="au-clip"><span className="au-title-line">Delhi businesses.</span></span>
          </h1>
          <p className="au-hero-sub">
            Kodit Agency is a collective of designers, developers, and search
            specialists focused on driving real revenue — not vanity metrics.
          </p>
        </div>

        {/* Floating metric cards */}
        <div className="au-hero-right">
          <div className="au-float-card">
            <div className="au-fc-dot green" />
            <p className="au-fc-label">Avg. ranking uplift</p>
            <p className="au-fc-big">+4.2</p>
            <p className="au-fc-sub">positions on Google Maps 3-Pack</p>
          </div>
          <div className="au-float-card au-float-card-2">
            <div className="au-fc-dot orange" />
            <p className="au-fc-label">Page speed score</p>
            <p className="au-fc-big">97</p>
            <p className="au-fc-sub">Lighthouse performance</p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="au-stats">
        <div className="au-container">
          <div className="au-stats-grid">
            {stats.map((s) => (
              <div key={s.num} className="au-stat">
                <span className="au-stat-num">{s.num}</span>
                <span className="au-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
