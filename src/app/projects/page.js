"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../component/projects-hero-section";
import Grid from "../component/project/projects-grid-section";
import Numbers from "../component/project/projects-numbers-section";
import Process from "../component/project/projects-process-section";
import Marquee from "../component/project/projects-marquee-section";
import CTA from "../component/project/projects-cta-section";
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Glow parallax */
      gsap.to(".pj-glow", {
        y: -80, ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="pj-root">
      <div className="pj-glow" />
      <Hero />
      <Grid />
      <Numbers />
      <Process />
      <Marquee />
      <CTA />
    </main>
  );
}
