"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../component/service/service-hero-section";
import Marquee from "../component/service/service-marquee-section";
import Tabs from "../component/service/service-tabs-section";
import Compare from "../component/service/service-compare-section";
import Testimonials from "../component/service/service-testimonials-section";
import List from "../component/service/service-list-section";
import "./service.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceClient() {
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Parallax */
      gsap.to(".sv-glow", {
        y: -80, ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="sv-root">
      <div className="sv-glow" />
      <Hero />
      <Marquee />
      <Tabs active={active} setActive={setActive} />
      <Compare />
      <Testimonials />
      <List />
    </main>
  );
}
