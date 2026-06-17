"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "Custom websites and web apps built to convert — fast, responsive, and designed around your business goals.",
    tags: ["Next.js", "React", "UI/UX", "CMS"],
    color: "#E84D0E",
  },
  {
    id: "02",
    title: "SEO",
    desc: "Rank higher, get found, and dominate search. We build SEO systems that compound over time.",
    tags: ["On Page", "Technical", "Link Building", "Local SEO"],
    color: "#E84D0E",
  },
  {
    id: "03",
    title: "GMB Optimization",
    desc: "Get your business in the Google Maps pack — maximum local visibility for Delhi customers searching right now.",
    tags: ["Google Maps", "Reviews", "Local Pack", "Citations"],
    color: "#E84D0E",
  },
  {
    id: "04",
    title: "Graphic Design & Branding",
    desc: "Brand identity, social media creatives, and marketing collateral that makes your brand impossible to forget.",
    tags: ["Branding", "Social Media", "Print", "Motion"],
    color: "#E84D0E",
  },
  {
    id: "05",
    title: "Social Media Marketing",
    desc: "Consistent, creative social presence that builds community, trust, and brand loyalty in your city.",
    tags: ["Instagram", "Content", "Reels", "Strategy"],
    color: "#E84D0E",
  },
  // ========== REPLACED "Paid Ads" with "AI Automation & Agents" ==========
  {
    id: "06",
    title: "AI Automation & Agents",
    desc: "Intelligent agents that automate lead nurturing, appointment scheduling, content generation, and customer support — freeing your team for high‑value work.",
    tags: ["Chatbots", "Workflows", "Zapier", "Custom GPTs"],
    color: "#E84D0E",
  },
];

// Updated icons – the last one is for AI Automation
const icons = [
  // Web
  <svg key="web" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  // SEO
  <svg key="seo" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>,
  // GMB
  <svg key="gmb" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  // Design
  <svg key="design" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>,
  // Social Media
  <svg key="social" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  // AI Automation – new brain/sparkle icon
  <svg key="ai" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>,
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current.querySelectorAll(".srv-reveal"),
        { y: "100%", opacity: 0 },
        {
          y: "0%", opacity: 1,
          duration: 0.85, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 82%" },
        }
      );

      const cards = gridRef.current.querySelectorAll(".srv-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 56, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        }
      );

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
          const deltaX = (x - centerX) / 10;
          const deltaY = (y - centerY) / 10;
          gsap.to(card, { rotateX: -deltaY, rotateY: deltaX, duration: 0.3, ease: "power2.out", transformPerspective: 1000 });
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
    <section ref={sectionRef} className="srv-root">
      <div className="srv-glow" />

      <div className="srv-wrap">
        <div ref={headRef} className="srv-header">
          <div className="clip-row"><div className="section-eyebrow srv-reveal">What We Do</div></div>
          <div className="clip-row">
            <h2 className="srv-h2 srv-reveal">Services Built to</h2>
          </div>
          <div className="clip-row">
            <h2 className="srv-h2 srv-reveal">
              <em className="srv-h2-em">Drive Real Results</em>
            </h2>
          </div>
          <div className="clip-row">
            <p className="srv-desc srv-reveal">
              We don&apos;t offer cookie cutter packages. Every service we deliver is tailored to your market, your audience, and your growth stage.
            </p>
          </div>
        </div>

        <div className="srv-ticker">
          {['Discovery', 'Strategy', 'Design', 'Build', 'Launch', 'Optimise', 'Scale'].map((step, i) => (
            <span key={i} className="srv-ticker-item">
              <span className="srv-ticker-num">{String(i + 1).padStart(2, '0')}</span>
              {step}
              {i < 6 && <span className="srv-ticker-arrow">→</span>}
            </span>
          ))}
        </div>

        <div ref={gridRef} className="srv-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`srv-card ${active === i ? "srv-card-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(0)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="srv-card-content-wrap">
                <div className="srv-card-top">
                  <span className="srv-card-num">{s.id}</span>
                  <div className="srv-card-icon">{icons[i]}</div>
                </div>
                <h3 className="srv-card-title">{s.title}</h3>
                <p className="srv-card-desc">{s.desc}</p>
                <div className="srv-card-tags">
                  {s.tags.map((t, j) => (
                    <span key={j} className="srv-tag">{t}</span>
                  ))}
                </div>
                <Link href="/service" className="srv-card-cta">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="srv-card-bar" />
            </div>
          ))}
        </div>

        <div className="srv-bottom">
          <p className="srv-bottom-text">Not sure which service fits your business?</p>
          <Link href="/contact" className="btn-primary">
            Get a Free Consultation
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .srv-root {
          background: #0a0a0a; padding: 120px 0;
          position: relative; overflow: hidden;
        }
        .srv-glow {
          position: absolute; bottom: -200px; right: -100px;
          width: 700px; height: 700px;
          background: radial-gradient(ellipse, rgba(232,77,14,0.06) 0%, transparent 68%);
          pointer-events: none;
        }
        .srv-wrap {
          max-width: 1200px; margin: 0 auto;
          padding: 0 48px; position: relative; z-index: 2;
        }

        .clip-row { overflow: hidden; }
        .srv-header { margin-bottom: 64px; }
        .srv-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 52px);
          font-weight: 700; color: #F0EDE8;
          letter-spacing: -0.035em; line-height: 1.08;
          display: block; opacity: 0;
        }
        .srv-h2-em {
          font-family: 'Instrument Serif', serif;
          font-style: italic; font-weight: 400; color: #E84D0E;
        }
        .srv-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.38);
          line-height: 1.75; max-width: 520px;
          margin-top: 18px; display: block; opacity: 0;
        }

        .srv-ticker {
          display: flex; align-items: center; flex-wrap: nowrap;
          overflow-x: auto; gap: 0;
          padding: 16px 0; margin-bottom: 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          scrollbar-width: none;
        }
        .srv-ticker::-webkit-scrollbar { display: none; }
        .srv-ticker-item {
          display: flex; align-items: center; gap: 10px;
          white-space: nowrap; padding: 0 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.03em;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .srv-ticker-item:last-child { border-right: none; }
        .srv-ticker-num {
          font-size: 10px; color: #E84D0E;
          letter-spacing: 0.1em; font-weight: 700;
        }
        .srv-ticker-arrow {
          color: rgba(255,255,255,0.15); font-size: 12px;
        }

        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; overflow: hidden;
          margin-bottom: 56px;
          perspective: 1200px;
        }
        .srv-card {
          background: #0C0C0C;
          padding: 36px 32px;
          position: relative;
          transition: background 0.35s ease, box-shadow 0.35s ease;
          opacity: 0;
          cursor: default;
          will-change: transform;
        }
        .srv-card-active { 
           background: #0f0f0f;
           box-shadow: 0 10px 30px rgba(0,0,0,0.5);
           z-index: 10;
        }
        .srv-card-content-wrap {
          display: flex; flex-direction: column; gap: 14px;
          transform: translateZ(20px);
          height: 100%;
        }
        .srv-card-bar {
          position: absolute; bottom: 0; left: 0;
          height: 2px; width: 0;
          background: #E84D0E;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .srv-card-active .srv-card-bar { width: 100%; }

        .srv-card-top {
          display: flex; align-items: center;
          justify-content: space-between;
        }
        .srv-card-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.1em;
        }
        .srv-card-icon {
          width: 40px; height: 40px;
          background: rgba(232,77,14,0.07);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #E84D0E;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .srv-card-active .srv-card-icon {
          background: rgba(232,77,14,0.14);
          transform: scale(1.08);
        }
        .srv-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 700; color: #F0EDE8;
          letter-spacing: -0.02em;
        }
        .srv-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: rgba(255,255,255,0.38);
          line-height: 1.7; flex: 1;
        }
        .srv-card-tags {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .srv-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px; padding: 3px 10px;
          transition: color 0.2s, border-color 0.2s;
        }
        .srv-card-active .srv-tag {
          color: rgba(232,77,14,0.7);
          border-color: rgba(232,77,14,0.2);
        }
        .srv-card-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .srv-card:hover .srv-card-cta { color: #E84D0E; gap: 10px; }

        .srv-bottom {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 20px;
          padding: 32px 36px;
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
        }
        .srv-bottom-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: rgba(255,255,255,0.45);
        }

        .btn-primary {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: #e84d0e;
          text-decoration: none;
          padding: 13px 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          opacity: 1;
        }
        .btn-primary:hover {
          background: #f06030;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(232,77,14,0.35);
        }

        @media (max-width: 900px) {
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .srv-root { padding: 80px 0; }
          .srv-wrap { padding: 0 20px; }
          .srv-grid { grid-template-columns: 1fr; border-radius: 14px; }
          .srv-card { padding: 28px 22px; }
          .srv-bottom { flex-direction: column; align-items: flex-start; padding: 24px 20px; }
        }
      `}</style>
    </section>
  );
}