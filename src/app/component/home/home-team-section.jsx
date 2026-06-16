"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Aryan Sharma",
    role: "Founder & Creative Director",
    bio: "Obsessed with making local businesses look world class. Years turning Delhi brands into digital powerhouses through sharp design and strategy.",
    initials: "AS",
    color: "#E84D0E",
    accentBg: "rgba(232,77,14,0.06)",
    skills: ["Strategy", "Branding", "Web"],
    featured: true,
  },
  {
    name: "Priya Mehta",
    role: "Head of SEO & Growth",
    bio: "Technical SEO and content strategist who consistently lands Page 1 rankings for competitive local keywords across Delhi and beyond.",
    initials: "PM",
    color: "#3b82f6",
    accentBg: "rgba(59,130,246,0.06)",
    skills: ["SEO", "Content", "Analytics"],
  },
  {
    name: "Rahul Kapoor",
    role: "Lead Designer",
    bio: "Visual storyteller with a sharp eye for brand identity — every pixel has a purpose and a business reason.",
    initials: "RK",
    color: "#8b5cf6",
    accentBg: "rgba(139,92,246,0.06)",
    skills: ["UI/UX", "Figma", "Motion"],
  },
  {
    name: "Sanya Verma",
    role: "AI & Automation Lead",
    bio: "Builds smart n8n workflows, chatbots, and automated lead pipelines that save hours and scale operations without adding headcount.",
    initials: "SV",
    color: "#22c55e",
    accentBg: "rgba(34,197,94,0.06)",
    skills: ["n8n", "Workflows", "API Integrations"],
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current.querySelectorAll(".team-reveal"),
        { y: "100%", opacity: 0 },
        {
          y: "0%", opacity: 1, duration: 0.85, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 82%" },
        }
      );

      const cards = gridRef.current.querySelectorAll(".team-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 60, rotateX: 8 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.75, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        }
      );
      
      // 3D Tilt effect
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
    <section ref={sectionRef} className="team-root">
      <div className="team-glow" />
      <div className="team-wrap">

        {/* Header */}
        <div ref={headRef} className="team-header">
          <div className="clip-row"><div className="section-eyebrow team-reveal">The People</div></div>
          <div className="clip-row">
            <h2 className="team-h2 team-reveal">Meet the Team Behind</h2>
          </div>
          <div className="clip-row">
            <h2 className="team-h2 team-reveal"><em className="team-em">Your Growth</em></h2>
          </div>
          <div className="clip-row">
            <p className="team-desc team-reveal">
              A small, focused team of digital specialists with one shared obsession — making your brand win online.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="team-grid">
          {team.map((m, i) => (
            <div
              key={i}
              className={`team-card ${m.featured ? 'team-card-featured' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {m.featured && (
                <div className="team-card-glow" style={{ background: `radial-gradient(ellipse at top left, ${m.color}18 0%, transparent 60%)` }} />
              )}
              <div className="team-card-inner">
                {/* Index + Avatar row */}
                <div className="team-card-top-row">
                  <div className="team-avatar-wrap">
                    <div className="team-avatar" style={{ background: m.color }}>
                      {m.initials}
                    </div>
                    <div className="team-avatar-ring" style={{ borderColor: m.color }} />
                  </div>
                  <span className="team-card-index">0{i+1}</span>
                </div>

                {/* Info */}
                <div className="team-info">
                  <h3 className="team-name">{m.name}</h3>
                  <span className="team-role" style={{ color: m.color }}>{m.role}</span>
                  <p className="team-bio">{m.bio}</p>
                  <div className="team-skills">
                    {m.skills.map((s, j) => (
                      <span key={j} className="team-skill">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="team-card-border" style={{ background: m.color }} />
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="team-hiring">
          <div className="team-hiring-dot" />
          <p className="team-hiring-text">
            We&apos;re always looking for talented people.{" "}
            <a href="mailto:hello@kodit.agency" className="team-hiring-link">Say hello</a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        .team-root {
          background: #0A0A0A; padding: 120px 0;
          position: relative; overflow: hidden;
        }
        .team-glow {
          position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(ellipse, rgba(232,77,14,0.055) 0%, transparent 68%);
          pointer-events: none;
        }
        .team-wrap {
          max-width: 1200px; margin: 0 auto;
          padding: 0 48px; position: relative; z-index: 2;
        }

        .team-header { margin-bottom: 56px; }
        .team-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 52px); font-weight: 700;
          color: #F0EDE8; letter-spacing: -0.035em;
          line-height: 1.08; display: block; opacity: 0;
        }
        .team-em {
          font-family: 'Instrument Serif', serif;
          font-style: italic; font-weight: 400; color: #E84D0E;
        }
        .team-desc {
          font-family: 'Inter', sans-serif; font-size: 15px;
          color: rgba(255,255,255,0.38); line-height: 1.75;
          max-width: 480px; margin-top: 18px; display: block; opacity: 0;
        }

        /* Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px; margin-bottom: 40px;
          perspective: 1000px;
        }
        .team-card {
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 28px 22px;
          display: flex; flex-direction: column;
          position: relative;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          opacity: 0; will-change: transform;
          overflow: hidden;
        }
        .team-card-glow {
          position: absolute; inset: 0; pointer-events: none;
        }
        .team-card-featured {
          border-color: rgba(232,77,14,0.2);
          background: rgba(232,77,14,0.02);
        }
        .team-card-top-row {
          display: flex; align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .team-card-index {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.15);
          letter-spacing: 0.08em;
        }
        .team-card-inner {
           transform: translateZ(20px);
           display: flex; flex-direction: column;
           height: 100%;
        }
        .team-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          z-index: 5;
        }
        .team-card-border {
          position: absolute; bottom: 0; left: 0;
          height: 2px; width: 0; background: #E84D0E;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .team-card:hover .team-card-border { width: 100%; }

        /* Avatar */
        .team-avatar-wrap { position: relative; width: 64px; height: 64px; }
        .team-avatar {
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 700; color: #fff;
          position: relative; z-index: 2;
        }
        .team-avatar-ring {
          position: absolute; inset: -4px;
          border-radius: 50%; border: 1px solid transparent;
          transition: border-color 0.3s ease, transform 0.4s ease;
        }
        .team-card:hover .team-avatar-ring {
          border-color: inherit;
          transform: rotate(90deg) scale(1.05);
          opacity: 0.5;
        }

        /* Info */
        .team-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 700; color: #F0EDE8;
          letter-spacing: -0.02em; margin-bottom: 4px;
        }
        .team-role {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #E84D0E;
          font-weight: 500; letter-spacing: 0.04em;
          display: block; margin-bottom: 10px;
        }
        .team-bio {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.35);
          line-height: 1.68;
        }
        .team-skills {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;
        }
        .team-skill {
          font-family: 'Inter', sans-serif;
          font-size: 10px; font-weight: 500;
          color: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px; padding: 3px 10px;
          transition: all 0.2s ease;
        }
        .team-card:hover .team-skill {
          color: rgba(232,77,14,0.7);
          border-color: rgba(232,77,14,0.2);
        }

        /* Hiring bar */
        .team-hiring {
          display: flex; align-items: center; gap: 10px;
          padding: 18px 24px;
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; width: fit-content;
        }
        .team-hiring-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #22c55e;
          animation: blink 2s ease-in-out infinite; flex-shrink: 0;
        }
        .team-hiring-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: rgba(255,255,255,0.4);
        }
        .team-hiring-link {
          color: #E84D0E; text-decoration: none; font-weight: 500;
          border-bottom: 1px solid rgba(232,77,14,0.3);
          transition: border-color 0.2s ease;
        }
        .team-hiring-link:hover { border-color: #E84D0E; }

        @media (max-width: 960px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .team-root { padding: 80px 0; }
          .team-wrap { padding: 0 20px; }
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}