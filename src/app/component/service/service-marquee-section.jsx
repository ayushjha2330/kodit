"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  { title: "Web Development" },
  { title: "SEO" },
  { title: "GMB Optimization" },
  { title: "Graphic Design & Branding" },
  { title: "Social Media Marketing" },
  { title: "AI Automation" },
];

export default function ServiceMarqueeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Marquee */
      gsap.to(".sv-marquee-inner", { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="sv-marquee">
      <div className="sv-marquee-inner">
        {[...services, ...services].map((s, i) => (
          <span key={i} className="sv-marquee-item">{s.title} &nbsp;·&nbsp;</span>
        ))}
      </div>
    </div>
  );
} 
