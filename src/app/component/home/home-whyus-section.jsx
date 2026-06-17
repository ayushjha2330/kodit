"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  { feature: "Custom strategy for every client", us: true, others: false },
  { feature: "Transparent monthly reporting", us: true, others: false },
  { feature: "Dedicated point of contact", us: true, others: false },
  { feature: "No lock-in annual contracts", us: true, others: false },
  { feature: "14-day average website delivery", us: true, others: false },
  { feature: "Top 3 on Google Maps", us: true, others: false },
  { feature: "Delhi-based team, serving all of India", us: true, others: false },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E84D0E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function WhyUsSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const tableRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(headRef.current.querySelectorAll(".wcu-reveal"),
        { y: "100%", opacity: 0 },
        {
          y: "0%", opacity: 1, duration: 0.9, stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 82%" },
        }
      );

      // Table rows stagger
      const rows = tableRef.current.querySelectorAll(".comp-row");
      gsap.fromTo(rows,
        { opacity: 0, x: -30, scale: 0.98 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 0.6, stagger: 0.05,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: tableRef.current, start: "top 80%" },
        }
      );

      // Reason cards
      const cards = cardsRef.current.querySelectorAll(".reason-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 50, rotateX: 10 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.8, stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%" },
        }
      );

      // 3D Tilt for reason cards
      cards.forEach(card => {
        let rect = null;
        card.addEventListener("mouseenter", () => {
          rect = card.getBoundingClientRect();
        });
        card.addEventListener("mousemove", (e) => {
          if (!rect) rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const deltaX = (x - centerX) / 12;
          const deltaY = (y - centerY) / 12;
          gsap.to(card, {
            rotateX: -deltaY,
            rotateY: deltaX,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        });
        card.addEventListener("mouseleave", () => {
          rect = null;
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wcu-root">
      <div className="wcu-glow" />
      <div className="wcu-wrap">
        {/* Header */}
        <div ref={headRef} className="wcu-header">
          <div className="clip-row"><div className="section-eyebrow wcu-reveal">Why Kodit</div></div>
          <div className="clip-row">
            <h2 className="wcu-h2 wcu-reveal">How We Work Differently</h2>
          </div>
          <div className="clip-row">
            <h2 className="wcu-h2 wcu-reveal"><em className="wcu-em">From Every Other Agency</em></h2>
          </div>
          <div className="clip-row">
            <p className="wcu-desc wcu-reveal">
              Most agencies sell retainers and deliver reports. We sell outcomes and deliver
              measurable business growth. Here is how the experience compares.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="comp-container">
          <div className="comp-thead">
            <div className="comp-thead-feature">Feature</div>
            <div className="comp-col comp-col-us">
              <span className="comp-thead-badge">Kodit Agency</span>
            </div>
            <div className="comp-thead-col comp-thead-others">Others</div>
          </div>

          <div ref={tableRef} className="comp-tbody">
            {comparisons.map((c, i) => (
              <div key={i} className="comp-row">
                <div className="comp-feature">{c.feature}</div>
                <div className="comp-cell comp-cell-us">
                  {c.us ? <CheckIcon /> : <CrossIcon />}
                </div>
                <div className="comp-cell comp-cell-others">
                  {c.others ? <CheckIcon /> : <CrossIcon />}
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Reason cards */}
        <div ref={cardsRef} className="reasons-grid">
          {[
            {
              num: "01",
              title: "Transparent Reporting",
              text: "Every month you receive a clear report showing rankings, leads, and spend. No jargon, no vanity metrics.",
            },
            {
              num: "02",
              title: "No Lock-In Contracts",
              text: "We work on rolling monthly agreements. You stay because of results, not because of a clause in a contract.",
            },
            {
              num: "03",
              title: "Delhi Roots, India-Wide",
              text: "Headquartered in South Delhi, we serve businesses across metros, tier-2, and tier-3 cities with strategies built for each market.",
            },
            {
              num: "04",
              title: "Fast Execution",
              text: "Websites go live in under 14 days. SEO audits delivered within 48 hours. Speed without cutting corners.",
            },
          ].map((r, i) => (
            <div key={i} className="reason-card" style={{ transformStyle: 'preserve-3d' }}>
              <div className="reason-card-content">
                <span className="reason-num">{r.num}</span>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-text">{r.text}</p>
              </div>
              <div className="reason-line" />
            </div>
          ))}
      </div>

        {/* Bold results strip – updated metric */}
        <div className="wcu-results-strip">
          {[
            { num: '30+', label: 'Projects Delivered' },
            { num: '6', label: 'Core Services' },
            { num: '80%', label: 'Client Retention' },
            { num: 'Top 3', label: 'Google Rankings' },
          ].map((r, i) => (
            <div key={i} className="wcu-results-item">
              <span className="wcu-results-num">{r.num}</span>
              <span className="wcu-results-label">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .wcu-root {
          background: #0C0C0C;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        .wcu-glow {
          position: absolute;
          top: 30%;
          left: -150px;
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(232,77,14,0.055) 0%, transparent 68%);
          pointer-events: none;
        }
        .wcu-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 2;
        }

        .wcu-header { margin-bottom: 56px; }
        .wcu-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 52px);
          font-weight: 700;
          color: #F0EDE8;
          letter-spacing: -0.035em;
          line-height: 1.08;
          display: block;
          opacity: 0;
        }
        .wcu-em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-weight: 400;
          color: #E84D0E;
        }
        .wcu-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          max-width: 500px;
          margin-top: 18px;
          display: block;
          opacity: 0;
        }

        /* Comparison table */
        .comp-container {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 48px;
        }
        .comp-thead {
          display: grid;
          grid-template-columns: 1fr 180px 180px;
          background: #111;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 16px 28px;
          align-items: center;
        }
        .comp-thead-feature {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .comp-thead-col {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.35);
        }
        .comp-thead-badge {
          background: #E84D0E;
          color: #fff;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
        }

        .comp-row {
          display: grid;
          grid-template-columns: 1fr 180px 180px;
          align-items: center;
          padding: 16px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          background: #0C0C0C;
          transition: background 0.2s ease, padding-left 0.2s ease;
          opacity: 0;
        }
        .comp-row:last-child { border-bottom: none; }
        .comp-row:hover {
          background: rgba(255,255,255,0.02);
          padding-left: 32px;
        }
        .comp-feature {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          font-weight: 450;
        }
        .comp-cell {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .comp-cell-us {
          background: rgba(232,77,14,0.05);
          position: relative;
        }
        .comp-cell-us::before,
        .comp-cell-us::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(232,77,14,0.15);
        }
        .comp-cell-us::before { left: 0; }
        .comp-cell-us::after { right: 0; }

        .comp-cell svg {
          transition: transform 0.2s ease;
        }
        .comp-row:hover .comp-cell-us svg {
          transform: scale(1.15);
        }

        /* Results strip */
        .wcu-results-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 48px;
        }
        .wcu-results-item {
          background: #0C0C0C;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-right: 1px solid rgba(255,255,255,0.05);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .wcu-results-item:last-child { border-right: none; }
        .wcu-results-item:hover {
          background: rgba(232,77,14,0.03);
          transform: translateY(-2px);
        }
        .wcu-results-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .wcu-results-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }

        /* Reason cards */
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          perspective: 1200px;
        }
        .reason-card {
          background: #111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 28px 24px;
          position: relative;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
          opacity: 0;
          will-change: transform;
        }
        .reason-card-content {
          transform: translateZ(20px);
        }
        .reason-card:hover {
          border-color: rgba(232,77,14,0.3);
          background: rgba(232,77,14,0.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          transform: translateY(-4px);
          z-index: 5;
        }
        .reason-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #E84D0E;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 14px;
        }
        .reason-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #F0EDE8;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .reason-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.48);
          line-height: 1.68;
        }
        .reason-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: #E84D0E;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reason-card:hover .reason-line { width: 100%; }

        /* Responsive */
        @media (max-width: 1024px) {
          .comp-thead,
          .comp-row {
            grid-template-columns: 1fr 140px 140px;
          }
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .comp-thead,
          .comp-row {
            grid-template-columns: 1fr 100px 100px;
            padding: 14px 18px;
          }
          .comp-feature { font-size: 13px; }
          .comp-thead-badge { font-size: 10px; padding: 3px 10px; }
          .wcu-results-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .wcu-results-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
        }
        @media (max-width: 540px) {
          .wcu-root { padding: 80px 0; }
          .wcu-wrap { padding: 0 20px; }
          .comp-thead,
          .comp-row {
            grid-template-columns: 1fr 70px 70px;
            padding: 12px 12px;
          }
          .comp-feature { font-size: 12px; }
          .comp-thead-badge { font-size: 9px; padding: 2px 8px; }
          .comp-thead-feature { font-size: 9px; }
          .comp-cell svg { width: 16px; height: 16px; }
          .reasons-grid { grid-template-columns: 1fr; }
          .wcu-results-strip { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}