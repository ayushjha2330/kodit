"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const industries = [
  { num: "01", title: "Clinics & Healthcare", body: "Patient booking websites, doctor profile pages, GMB optimization for hospitals, dental clinics, physiotherapy centres, and diagnostic labs." },
  { num: "02", title: "Coaching & Education", body: "Course listing sites, admission funnel pages, student inquiry automation, and local SEO for coaching institutes, training centres, and schools." },
  { num: "03", title: "Salons & Hospitality", body: "Booking-enabled websites, Instagram-first visual branding, Google Maps ranking for salons, spas, restaurants, and cafes across Delhi NCR." },
  { num: "04", title: "Real Estate & Property", body: "Property listing platforms, agent profile pages, local SEO for builder projects, and lead capture workflows for real estate firms." },
  { num: "05", title: "E-Commerce & Retail", body: "Online stores with payment integration, product catalogue sites, social media product feeds, and SEO for retail brands." },
  { num: "06", title: "Startups & Professional Services", body: "MVP websites, SaaS landing pages, law firm sites, consultant portfolios, and complete digital growth strategies for early-stage businesses." },
];

export default function AboutIndustriesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".au-ind-item",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="au-industries">
      <div className="au-container">
        <p className="section-eyebrow">Industries We Serve</p>
        <h2 className="au-section-h2">Who we work with <em>across India.</em></h2>

        <div className="au-ind-grid">
          {industries.map((ind) => (
            <div key={ind.num} className="au-ind-item">
              <span className="au-ind-num">{ind.num}</span>
              <h3 className="au-ind-title">{ind.title}</h3>
              <p className="au-ind-body">{ind.body}</p>
              <div className="au-ind-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
