"use client";

const marqueeItems = [
  "Web Development",
  "SEO Optimization",
  "GMB Optimization",
  "Graphic Design",
  "AI Automation",
  "Social Media",
  "Brand Identity",
  "Video Editing",
];

export default function HomeMarqueeSection() {
  return (
    <>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep">·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          padding: 14px 0;
          background: rgba(10,10,10,0.6);
          backdrop-filter: blur(10px);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollMarquee 28s linear infinite;
          will-change: transform;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding: 0 24px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          white-space: nowrap;
        }
        .marquee-sep {
          font-size: 4px;
          color: rgba(232,77,14,0.45);
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}