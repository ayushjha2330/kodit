"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const services = [
  { id: "web", num: "01", title: "Web Development", tagline: "Fast, conversion-focused websites in 14 days", slug: "web-development" },
  { id: "seo", num: "02", title: "SEO", tagline: "Rank page 1 for buyer-intent keywords", slug: "seo" },
  { id: "gmb", num: "03", title: "Google Business Profile", tagline: "Dominate Google Maps in your local area", slug: "gmb-optimization" },
  { id: "design", num: "04", title: "Graphic Design", tagline: "Visual authority that builds trust", slug: "graphic-design" },
  { id: "social", num: "05", title: "Social Media Marketing", tagline: "Strategic content that drives engagement", slug: "social-media-marketing" },
  { id: "ai", num: "06", title: "AI Automation", tagline: "Workflow automation that saves time & money", slug: "ai-automation" },
];

export default function ServiceListSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* List rows */
      gsap.fromTo(".sv-row",
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sv-list sv-container">
      <p className="section-eyebrow">All Services</p>
      <h2 className="sv-section-h2">Everything under <em>one roof.</em></h2>
      <div className="sv-rows">
        {services.map((svc) => (
          <Link key={svc.id} href={`/service/${svc.slug}`} className="sv-row" style={{ textDecoration: "none" }}>
            <span className="sv-row-num">{svc.num}</span>
            <span className="sv-row-title">{svc.title}</span>
            <span className="sv-row-tag">{svc.tagline}</span>
            <svg className="sv-row-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
