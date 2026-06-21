"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../component/about/about-hero-section";
import Story from "../component/about/about-story-section";
import Values from "../component/about/about-values-section";
import Timeline from "../component/about/about-timeline-section";
import Team from "../component/home/home-team-section";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClient() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Parallax */
      gsap.to(".au-glow", {
        y: -60, ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="au-root">
      <Hero />
      <Story />
      <Values />
      <Timeline />
      <Team />
    </main>
  );
}
