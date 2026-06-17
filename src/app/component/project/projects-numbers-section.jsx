"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const numbers = [
  { big: "30+", sub: "Projects Delivered" },
  { big: "2.6s", sub: "Avg. Page Load Speed" },
  { big: "1.6x", sub: "Avg. Client Growth" },
  { big: "Top 3", sub: "Google Maps Rankings" },
];

export default function ProjectsNumbersSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Numbers counter */
      gsap.fromTo(".pj-counter",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".pj-numbers", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pj-numbers pj-container">
      <div className="pj-numbers-grid">
        {numbers.map((n, i) => (
          <div key={i} className="pj-counter">
            <span className="pj-counter-big">{n.big}</span>
            <span className="pj-counter-sub">{n.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
