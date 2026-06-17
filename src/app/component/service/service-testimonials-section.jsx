"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  { name: "Dr. Sharma", role: "Delhi Ortho Center", text: "Kodit rebuilt our clinic website from scratch. It loads fast, looks professional, and new patient inquiries went up significantly within the first month." },
  { name: "Meera", role: "South Ex Bistro", text: "We were invisible on Google Maps. After working with Kodit, we started showing up in the top 3 for local searches. Our weekend reservations doubled." },
  { name: "Vikram", role: "Dwarka RE Group", text: "The SEO strategy Kodit built for us started generating qualified property leads within 3 months. Their reporting is transparent and the team is responsive." },
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
      <h2 className="sv-section-h2">Don&apos;t take our word for it. <em>Take theirs.</em></h2>

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
