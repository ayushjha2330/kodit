"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const faqs = [
  { q: "How quickly can you launch my website?", a: "Most custom websites are designed, built, and deployed within 2–3 weeks depending on the scope. We use an agile process with weekly check-ins so you always know what's happening." },
  { q: "Do you work with businesses outside Delhi?", a: "Yes — we work with clients across India and internationally. Our local Delhi expertise particularly helps with GMB and local SEO campaigns, but our web and design work is location-agnostic." },
  { q: "What is your pricing model?", a: "We work on project-based fixed quotes, not hourly billing. You get a clear breakdown before we start — no hidden costs, no surprise invoices." },
  { q: "Will I be able to update the website myself?", a: "Yes. We integrate headless CMS systems (Sanity, Prismic) that make content updates as easy as Google Docs. We also provide a walkthrough video so you're fully confident." },
  { q: "How long does SEO take to show results?", a: "Typically 60–90 days to see measurable ranking movement, and 4–6 months for significant traffic growth. We share monthly reports so you can track every improvement." },
];

function FAQItem({ faq, idx }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(bodyRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(bodyRef.current,
        { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" }
      );
    }
  }, [open]);

  return (
    <div className={`faq-item ${open ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span className="faq-num">0{idx + 1}</span>
        <span className="faq-q-text">{faq.q}</span>
        <span className={`faq-icon ${open ? "faq-icon-open" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div ref={bodyRef} className="faq-body" style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p className="faq-answer">{faq.a}</p>
      </div>
    </div>
  );
}

export default function ContactFaqSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* FAQ reveal */
      gsap.fromTo(".faq-item",
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: ".ct-faq", start: "top 78%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ct-faq ct-container">
      <p className="section-eyebrow">Common Questions</p>
      <h2 className="ct-faq-title">We&apos;ve answered the obvious ones</h2>

      <div className="ct-faq-list">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} idx={i} />
        ))}
      </div>
    </section>
  );
}
