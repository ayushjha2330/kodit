"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectsHeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero entrance */
      gsap.fromTo(".pj-title-line",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.13, ease: "power4.out" }
      );
      gsap.fromTo(".pj-hero-sub",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.5, stagger: 0.12, ease: "power3.out" }
      );

      /* Floating orbs */
      gsap.to(".pj-orb-1", { y: -30, x: 15, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".pj-orb-2", { y: 25, x: -20, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pj-hero pj-container">
      {/* Floating orbs */}
      <div className="pj-orb pj-orb-1" />
      <div className="pj-orb pj-orb-2" />

      <p className="section-eyebrow">Our Portfolio</p>
      <h1 className="pj-title">
        <span className="au-clip"><span className="pj-title-line">Selected projects built</span></span>
        <span className="au-clip"><span className="pj-title-line">to drive <em className="accent-italic">qualified leads</em></span></span>
        <span className="au-clip"><span className="pj-title-line">and measurable revenue.</span></span>
      </h1>
      <p className="pj-hero-sub">
        Every project starts with a business goal and ends with measurable outcomes.
        Here are some of the businesses we have helped grow.
      </p>


    </section>
  );
}
