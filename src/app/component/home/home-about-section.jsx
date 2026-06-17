"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Built for Revenue, Not Awards",
    text: "Every website, SEO campaign, and design decision we make is tied to a business outcome — more calls, more bookings, more qualified leads.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84D0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Delhi Roots, India-Wide Reach",
    text: "Headquartered in South Delhi, we serve clinics, coaching centres, salons, restaurants, real estate firms, and e-commerce brands across India.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84D0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: "One Team, Six Capabilities",
    text: "Web development, SEO, Google Business Profile optimization, graphic design, social media marketing, and AI automation — handled under one roof without outsourcing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84D0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);
  const rightRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------- Heading text reveal --------
      gsap.fromTo(headRef.current.querySelectorAll(".reveal-line"),
        { y: "100%", opacity: 0 },
        {
          y: "0%", opacity: 1, duration: 0.9, stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 82%" },
        }
      );

      // -------- Stat cards with counter animation --------
      const statCards = statsRef.current.querySelectorAll(".about-stat-card");
      gsap.fromTo(statCards,
        { opacity: 0, y: 48, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
        }
      );

      // Counter for stat numbers
      statCards.forEach((card) => {
        const numEl = card.querySelector(".about-stat-num");
        if (!numEl) return;
        const target = parseFloat(numEl.innerText);
        if (isNaN(target)) return;
        const suffix = numEl.innerText.replace(/[\d.]/g, "");
        gsap.fromTo(numEl,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reset",
            },
            onUpdate: () => {
              numEl.innerText = Math.floor(parseFloat(numEl.innerText)) + suffix;
            },
          }
        );
      });

      // -------- Highlight cards --------
      const cards = cardsRef.current.querySelectorAll(".hl-card");
      gsap.fromTo(cards,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%" },
        }
      );

      // -------- Dashboard cards (right side) --------
      gsap.fromTo(".abt-dash-card",
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 85%", toggleActions: "play none none reset" },
        }
      );

      // -------- Bar fills (with staggered delay) --------
      gsap.fromTo(".abt-bar-fill",
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".abt-dash-chart", start: "top 85%", toggleActions: "play none none reset" },
        }
      );

      // -------- Background glow parallax --------
      gsap.to(glowRef.current, {
        x: 40,
        y: 20,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-root">
      <div ref={glowRef} className="about-glow" />

      <div className="about-wrap">
        <div ref={headRef} className="about-header">
          <div className="overflow-clip-wrap">
            <span className="section-eyebrow reveal-line">About Us</span>
          </div>
          <div className="overflow-clip-wrap">
            <h2 className="about-h2 reveal-line">
              Digital Growth, Not Just
            </h2>
          </div>
          <div className="overflow-clip-wrap">
            <h2 className="about-h2 about-h2-italic reveal-line">
              <em>Pretty Websites.</em>
            </h2>
          </div>
          <div className="overflow-clip-wrap">
            <p className="about-desc reveal-line">
              KODIT is a Delhi-based digital agency that works with local businesses
              across India — clinics, coaching institutes, salons, restaurants, real estate
              firms, and startups. We combine web development, search engine optimization,
              Google Business Profile management, graphic design, social media marketing,
              and paid advertising into a single growth system. The focus is always the same:
              generate qualified leads and measurable revenue for your business.
            </p>
          </div>
        </div>

        <div ref={statsRef} className="about-stats">
          {[
            { num: "30+", label: "Projects Delivered", sub: "Across 8+ industries" },
            { num: "80%", label: "Client Retention", sub: "Built on trust & results" },
            { num: "2+",  label: "Years in Business", sub: "Founded in South Delhi" },
            { num: "6",   label: "Core Services", sub: "Web, SEO, GMB, Design, Social, AI" },
          ].map((s, i) => (
            <div key={i} className="about-stat-card">
              <span className="about-stat-num">{s.num}</span>
              <span className="about-stat-label">{s.label}</span>
              <span className="about-stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="about-two-col">
          <div ref={cardsRef} className="about-left">
            {highlights.map((h, i) => (
              <div key={i} className="hl-card">
                <div className="hl-icon">{h.icon}</div>
                <div>
                  <h3 className="hl-title">{h.title}</h3>
                  <p className="hl-text">{h.text}</p>
                </div>
              </div>
            ))}

            {/* Results strip — professional agency KPIs */}
            <div className="abt-result-strip">
              {[
                { val: "1.6x", lbl: "Avg. Client Growth" },
                { val: "14 Days", lbl: "Website Launch" },
                { val: "Page 1", lbl: "Search Rankings" },
              ].map((r, i) => (
                <div key={i} className="abt-result-item">
                  <span className="abt-result-val">{r.val}</span>
                  <span className="abt-result-lbl">{r.lbl}</span>
                </div>
              ))}
            </div>

            </div>
          <div ref={rightRef} className="about-right">
            {/* Performance dashboard */}
            <div className="abt-dash-card abt-dash-chart">
              <div className="abt-dash-head">
                <div>
                  <span className="abt-dash-label">Client Performance Overview</span>
                  <span className="abt-dash-sub">Average outcomes across active accounts</span>
                </div>
              </div>
              <div className="abt-bars">
                {[
                  { label: "Search Visibility", pct: 78, color: "#E84D0E" },
                  { label: "Google Maps Presence", pct: 85, color: "#F06030" },
                  { label: "Lead Conversion Rate", pct: 62, color: "#fb923c" },
                  { label: "Client Retention", pct: 98, color: "#22c55e" },
                ].map((b, i) => (
                  <div key={i} className="abt-bar-row">
                    <div className="abt-bar-info">
                      <span className="abt-bar-name">{b.label}</span>
                      <span className="abt-bar-pct">{b.pct}%</span>
                    </div>
                    <div className="abt-bar-track">
                      <div className="abt-bar-fill" style={{ width: `${b.pct}%`, background: b.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric cards */}
            <div className="abt-dash-card abt-dash-metric">
              <div className="abt-metric-row">
                <div className="abt-metric-item">
                  <span className="abt-metric-icon" style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  </span>
                  <div>
                    <span className="abt-metric-big">+85%</span>
                    <span className="abt-metric-sub">Avg. Search Visibility Increase</span>
                  </div>
                </div>
                <div className="abt-metric-divider" />
                <div className="abt-metric-item">
                  <span className="abt-metric-icon" style={{ background: 'rgba(232,77,14,0.1)', color: '#E84D0E' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <div>
                    <span className="abt-metric-big">2.6s</span>
                    <span className="abt-metric-sub">Average Page Load</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .about-root {
          background: #0C0C0C;
          padding: 100px 0 80px;
          position: relative; overflow: hidden;
        }
        .about-glow {
          position: absolute; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 600px;
          background: radial-gradient(ellipse, rgba(232,77,14,0.06) 0%, transparent 70%);
          pointer-events: none;
          will-change: transform;
        }
        .about-wrap {
          max-width: 1200px; margin: 0 auto;
          padding: 0 48px;
          position: relative; z-index: 2;
        }

        .overflow-clip-wrap { overflow: hidden; }

        .about-header { margin-bottom: 64px; }
        .about-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 50px);
          font-weight: 700; color: #F0EDE8;
          letter-spacing: -0.035em; line-height: 1.1;
          display: block; opacity: 0;
        }
        .about-h2 em {
          font-family: 'Instrument Serif', serif;
          font-style: italic; font-weight: 400; color: #E84D0E;
        }
        .about-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.38);
          line-height: 1.78; max-width: 580px;
          margin-top: 18px; display: block; opacity: 0;
        }
        .section-eyebrow { opacity: 0; }

        .about-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; overflow: hidden;
          margin-bottom: 56px;
        }
        .about-stat-card {
          background: #0C0C0C; padding: 36px 28px;
          display: flex; flex-direction: column; gap: 6px;
          transition: background 0.3s ease, transform 0.2s ease;
          opacity: 0;
        }
        .about-stat-card:hover {
          background: #0f0f0f;
          transform: translateY(-2px);
        }
        .about-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 700; color: #fff;
          letter-spacing: -0.04em; line-height: 1;
        }
        .about-stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.65);
        }
        .about-stat-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: rgba(255,255,255,0.25);
        }

        .about-two-col {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px; align-items: start;
        }
        .about-left { display: flex; flex-direction: column; gap: 14px; }

        .abt-result-strip {
          display: grid; grid-template-columns: repeat(3, 1fr);
          background: rgba(232,77,14,0.04);
          border: 1px solid rgba(232,77,14,0.12);
          border-radius: 14px; overflow: hidden;
          margin-top: 4px;
        }
        .abt-result-item {
          padding: 18px 16px; display: flex; flex-direction: column; gap: 4px;
          border-right: 1px solid rgba(232,77,14,0.08);
          transition: background 0.2s ease;
        }
        .abt-result-item:last-child { border-right: none; }
        .abt-result-item:hover { background: rgba(232,77,14,0.06); }
        .abt-result-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px; font-weight: 700; color: #E84D0E;
          letter-spacing: -0.03em;
        }
        .abt-result-lbl {
          font-family: 'Inter', sans-serif;
          font-size: 11px; color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
        }
        .hl-card {
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 24px;
          display: flex; gap: 16px; align-items: flex-start;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.2s ease;
          opacity: 0;
        }
        .hl-card:hover {
          border-color: rgba(232,77,14,0.3);
          background: rgba(232,77,14,0.03);
          transform: translateX(4px);
        }
        .hl-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          background: rgba(232,77,14,0.08); border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s ease;
        }
        .hl-card:hover .hl-icon { background: rgba(232,77,14,0.14); }
        .hl-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 600; color: #F0EDE8; margin-bottom: 6px;
        }
        .hl-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.38); line-height: 1.68;
        }

        .about-right { display: flex; flex-direction: column; gap: 16px; }
        .abt-dash-card {
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 28px;
          transition: border-color 0.25s ease, box-shadow 0.3s ease;
        }
        .abt-dash-card:hover {
          border-color: rgba(232,77,14,0.25);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .abt-dash-head {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 24px;
        }
        .abt-dash-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 700; color: #fff;
          margin-bottom: 4px;
        }
        .abt-dash-sub {
          display: block;
          font-size: 11px; color: rgba(255,255,255,0.3);
        }

        .abt-bars { display: flex; flex-direction: column; gap: 16px; }
        .abt-bar-row { display: flex; flex-direction: column; gap: 6px; }
        .abt-bar-info { display: flex; justify-content: space-between; }
        .abt-bar-name { font-size: 12px; color: rgba(255,255,255,0.5); }
        .abt-bar-pct {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.7);
        }
        .abt-bar-track {
          width: 100%; height: 6px; border-radius: 4px;
          background: rgba(255,255,255,0.04);
          overflow: hidden;
        }
        .abt-bar-fill {
          height: 100%; border-radius: 4px;
          transform-origin: left;
        }

        .abt-metric-row {
          display: flex; align-items: center; gap: 0;
        }
        .abt-metric-item {
          flex: 1;
          display: flex; align-items: center; gap: 12px;
          padding: 8px 0;
        }
        .abt-metric-divider {
          width: 1px; height: 40px;
          background: rgba(255,255,255,0.06);
          margin: 0 20px;
        }
        .abt-metric-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .abt-metric-big {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px; font-weight: 700; color: #fff;
          letter-spacing: -0.03em; line-height: 1;
        }
        .abt-metric-sub {
          display: block;
          font-size: 11px; color: rgba(255,255,255,0.35); margin-top: 3px;
        }

        @media (max-width: 960px) {
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-two-col { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .about-root { padding: 80px 0; }
          .about-wrap { padding: 0 20px; }
          .about-stat-card { padding: 24px 18px; }
          .abt-metric-row { flex-direction: column; align-items: flex-start; }
          .abt-metric-divider { width: 100%; height: 1px; margin: 12px 0; }
        }
      `}</style>
    </section>
  );
}