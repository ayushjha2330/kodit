"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const faqs = [
  { q: "How quickly can you launch my website?", a: "Most business websites are designed, developed, and launched within 10 to 14 business days. Projects with custom features like booking systems or product catalogues take 3 to 4 weeks. We share a detailed timeline before starting." },
  { q: "Do you work with businesses outside Delhi?", a: "Yes. While we are based in South Delhi, we serve clients across India — from metros like Mumbai, Bangalore, and Hyderabad to tier-2 and tier-3 cities. Our web development, SEO, design, and social media services are location-agnostic." },
  { q: "What is your pricing model?", a: "We offer project-based pricing for websites and design work, and monthly retainers for ongoing services like SEO, social media, and GMB management. Pricing depends on scope, industry, and goals. We provide a clear proposal after a free discovery call." },
  { q: "Will I be able to update the website myself?", a: "Yes. We integrate CMS systems (Sanity, Prismic) that make content updates as straightforward as using Google Docs. We also provide a walkthrough so your team can manage day-to-day changes independently." },
  { q: "How long does SEO take to show results?", a: "Most clients see measurable ranking improvements within 60 to 90 days. Significant traffic growth typically takes 4 to 6 months. We share monthly reports so you can track every improvement with transparent metrics." },
  { q: "Are there long-term contracts?", a: "No. We work on monthly rolling agreements for retainer services. You can pause or cancel with 30 days notice. We believe in earning your business every month through performance." },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <p className="section-eyebrow">Common Questions</p>
      <h2 className="ct-faq-title">Frequently Asked Questions</h2>

      <div className="ct-faq-list">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} idx={i} />
        ))}
      </div>
    </section>
  );
}
