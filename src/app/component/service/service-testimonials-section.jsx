"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  { name: "Dr. Arjun Bhatia", role: "Delhi Ortho Center", text: "Our new website loads in 0.3 seconds and inbound calls increased 124%. Best investment for the clinic." },
  { name: "Meera Gupta", role: "South Ex Bistro", text: "We went from invisible on Google Maps to #1 in 3 months. The review pipeline alone was worth the retainer." },
  { name: "Vikram Sethi", role: "Dwarka RE Group", text: "540 qualified property leads in 6 months through organic search alone. No paid ads needed." },
];

export default function ServiceTestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Testimonial cards */
      gsap.fromTo(".sv-testimonial",
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".sv-testimonials", start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sv-testimonials sv-container">
      <p className="section-eyebrow">Client Words</p>
      <h2 className="sv-section-h2">Don&apos;t take our word for it.</h2>

      <div className="sv-test-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="sv-testimonial">
            <div className="sv-test-quote">&ldquo;</div>
            <p className="sv-test-text">{t.text}</p>
            <div className="sv-test-footer">
              <div className="sv-test-avatar">{t.name[0]}</div>
              <div>
                <div className="sv-test-name">{t.name}</div>
                <div className="sv-test-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
