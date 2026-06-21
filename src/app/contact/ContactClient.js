"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../component/contact/contact-hero-section";
import Grid from "../component/contact/contact-grid-section";
import Trust from "../component/contact/contact-trust-section";
import FAQ from "../component/contact/contact-faq-section";
import "./contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactClient() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Glow parallax */
      gsap.to(".ct-glow", {
        y: -80, ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="ct-root">
      <div className="ct-glow" />
      <Hero />
      <Grid />
      <Trust />
      <FAQ />
    </main>
  );
}
