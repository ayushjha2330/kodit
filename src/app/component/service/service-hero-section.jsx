"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ServiceHeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero */
      gsap.fromTo(".sv-title-line",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.13, ease: "power4.out" }
      );
      gsap.fromTo(".sv-hero-sub",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power3.out" }
      );

      /* Floating orbs */
      gsap.to(".sv-orb-1", { y: -20, x: 10, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".sv-orb-2", { y: 18, x: -15, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sv-hero sv-container">
      <div className="sv-orb sv-orb-1" />
      <div className="sv-orb sv-orb-2" />

      <p className="section-eyebrow">Our Capabilities</p>
      <h1 className="sv-title">
        <span className="au-clip"><span className="sv-title-line">Digital services built</span></span>
        <span className="au-clip"><span className="sv-title-line">to generate <em className="accent-italic">qualified leads</em></span></span>
        <span className="au-clip"><span className="sv-title-line">and measurable revenue.</span></span>
      </h1>
      <p className="sv-hero-sub">
        No standard packages. Every engagement starts with understanding your
        business model, customer journey, and local competition — then building
        a strategy that fits.
      </p>
    </section>
  );
}
