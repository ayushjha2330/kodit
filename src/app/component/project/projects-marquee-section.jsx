"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const clientLogos = [
  "Delhi Ortho Center", "South Ex Bistro", "Rajouri Salon", "CP Law Firm",
  "Dwarka RE Group", "CP Dental", "Lajpat Furniture", "Premium Fitness",
];

export default function ProjectsMarqueeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Client logos marquee */
      gsap.to(".pj-logos-inner", {
        xPercent: -50, duration: 18, ease: "none", repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pj-logos-section">
      <div className="pj-logos-inner">
        {[...clientLogos, ...clientLogos].map((name, i) => (
          <span key={i} className="pj-logo-item">{name}</span>
        ))}
      </div>
    </section>
  );
}
