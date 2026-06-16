"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Marquee from "../service/service-marquee-section";

export default function Hero() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(eyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(h1Ref.current.querySelectorAll(".h1-line"), { opacity: 0, y: 60, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
        .fromTo(subRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(ctaRef.current.querySelectorAll("a"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .fromTo(statsRef.current.querySelectorAll(".stat-item"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, "-=0.2")
        .fromTo(".hero-float-card", { opacity: 0, y: 40, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" }, "-=0.8");

      gsap.to(glowRef.current, { y: -24, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-float-1", { y: -15, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-float-2", { y: 15, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-float-3", { y: -10, x: 10, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1 });

      const section = sectionRef.current;
      const cards = section.querySelectorAll(".hero-float-card");
      const cardData = Array.from(cards).map(el => ({ el, rect: null }));

      const updateRects = () => cardData.forEach(item => { item.rect = item.el.getBoundingClientRect(); });

      section.addEventListener("mouseenter", updateRects);
      window.addEventListener("resize", updateRects);

      const onMove = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 10;
        gsap.to(".hero-dot-grid", { x: xPos, y: yPos, duration: 1.2, ease: "power2.out" });

        cardData.forEach(item => {
          if (!item.rect) item.rect = item.el.getBoundingClientRect();
          const rect = item.rect;
          const deltaX = (e.clientX - (rect.left + rect.width / 2)) / 30;
          const deltaY = (e.clientY - (rect.top + rect.height / 2)) / 30;
          gsap.to(item.el, { rotateX: -deltaY, rotateY: deltaX, duration: 0.5, ease: "power2.out" });
        });
      };

      section.addEventListener("mousemove", onMove);
      return () => {
        section.removeEventListener("mousemove", onMove);
        section.removeEventListener("mouseenter", updateRects);
        window.removeEventListener("resize", updateRects);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-root">
      <div className="noise-overlay" />
      <div ref={glowRef} className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-grid-lines" />
      <div className="hero-dot-grid" />

      <div className="hero-float-card hero-float-1">
        <div className="hf-dot" style={{ background: "#e84d0e" }} />
        <div className="hf-text">Custom Builds</div>
      </div>
      <div className="hero-float-card hero-float-2">
        <div className="hf-dot" style={{ background: "#22c55e" }} />
        <div className="hf-text">Speed Optimized</div>
      </div>
      <div className="hero-float-card hero-float-3">
        <div className="hf-dot" style={{ background: "#3b82f6" }} />
        <div className="hf-text">Results Driven</div>
      </div>

      <div className="hero-center">
        <div ref={eyebrowRef} className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Brand. Grow. Dominate.
        </div>

        <h1 ref={h1Ref} className="hero-h1">
          <span className="h1-line">We Build Brands</span>
          <span className="h1-line h1-line-2">
            That <span className="hero-h1-stroke">Actually</span> Work.
          </span>
        </h1>

        <p ref={subRef} className="hero-sub">
          Delhi-based digital growth agency helping businesses across India scale through custom websites, SEO, Google Business Profile optimization, AI automation, and conversion-focused design.
        </p>

        <div ref={ctaRef} className="hero-ctas">
          <Link href="/contact" className="btn-primary">
            Start a Project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/projects" className="btn-ghost">
            See Our Work
          </Link>
        </div>

        <div ref={statsRef} className="hero-stats">
          {[
            { n: "100%", l: "Bespoke" },
            { n: "95%", l: "Satisfaction" },
            { n: "2+", l: "Yrs Experience" },
            { n: "6", l: "Core Services" },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-num">{s.n}</span>
              <span className="stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hero-root {
          min-height: 100svh;
          background: #0c0c0c;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 80px;
          perspective: 1200px;
        }
        .noise-overlay {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          z-index: 1;
          pointer-events: none;
        }
        .hero-glow-1,
        .hero-glow-2 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(232,77,14,0.12) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }
        .hero-glow-1 { top: -200px; left: -200px; }
        .hero-glow-2 { bottom: -200px; right: -200px; }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
        }
        .hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px);
          background-size: 30px 30px;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }
        .hero-float-card {
          position: absolute;
          background: rgba(20,20,20,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
          pointer-events: none;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          opacity: 0;
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }
        .hf-dot { width: 8px; height: 8px; border-radius: 50%; }
        .hf-text {
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.02em;
        }
        .hero-float-1 { top: 20%; left: 10%; }
        .hero-float-2 { top: 50%; right: 8%; }
        .hero-float-3 { bottom: 25%; left: 15%; }

        .hero-center {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 880px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e84d0e;
          margin-bottom: 28px;
          opacity: 0;
        }
        .hero-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e84d0e;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-h1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 26px;
          overflow: hidden;
        }
        .h1-line {
          display: block;
          font-size: clamp(44px, 8.5vw, 96px);
          color: #f0ede8;
          opacity: 0;
        }
        .h1-line-2 {
          display: flex;
          align-items: baseline;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-h1-stroke {
          font-family: "Instrument Serif", serif;
          font-style: italic;
          font-weight: 400;
          -webkit-text-stroke: 1.5px #e84d0e;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-sub {
          font-family: "Inter", sans-serif;
          font-size: clamp(14px, 1.8vw, 17px);
          color: rgba(255,255,255,0.38);
          line-height: 1.72;
          max-width: 560px;
          margin-bottom: 32px;
          opacity: 0;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 52px;
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
          opacity: 0;
        }
        .btn-primary:hover {
          background: #f06030;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(232,77,14,0.35);
        }
        .btn-ghost {
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          padding: 13px 28px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          opacity: 0;
        }
        .btn-ghost:hover {
          color: #f0ede8;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
        }

        .hero-stats {
          display: flex;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
          width: 100%;
          max-width: 560px;
        }
        .stat-item {
          flex: 1;
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-right: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          transition: background 0.2s ease;
          opacity: 0;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: rgba(255,255,255,0.04); }
        .stat-num {
          font-family: "Space Grotesk", sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
        }
        .stat-label {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.06em;
          text-align: center;
        }

        @media (max-width: 900px) {
          .hero-grid-lines { background-size: 80px 80px; }
        }
        @media (max-width: 600px) {
          .hero-ctas {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary,
          .btn-ghost {
            text-align: center;
            justify-content: center;
            width: 100%;
          }
          .hero-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-float-card { display: none; }
        }
      `}</style>
    </section>
  );
}
