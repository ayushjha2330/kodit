"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactHeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero title */
      gsap.fromTo(".ct-title-line",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.13, ease: "power4.out" }
      );
      gsap.fromTo(".ct-hero-sub",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power3.out" }
      );

      /* Floating orbs */
      gsap.to(".ct-orb-1", { y: -22, x: 10, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".ct-orb-2", { y: 18, x: -14, duration: 5.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ct-hero ct-container">
      <div className="ct-orb ct-orb-1" />
      <div className="ct-orb ct-orb-2" />
      <p className="section-eyebrow">Get in Touch</p>

      <h1 className="ct-title">
        <span className="au-clip"><span className="ct-title-line">Let&apos;s discuss your</span></span>
        <span className="au-clip"><span className="ct-title-line">growth <em className="accent-italic">strategy.</em></span></span>
      </h1>

      <p className="ct-hero-sub">
        Book a free discovery call. We will review your current digital presence,
        identify gaps, and outline a plan to generate more qualified leads.
      </p>
    </section>
  );
}
