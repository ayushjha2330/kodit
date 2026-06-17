"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How long does it take to build a website with KODIT?",
    a: "Most business websites are designed, developed, and launched within 10 to 14 business days. Projects with custom features like booking systems, product catalogues, or multi-language support typically take 3 to 4 weeks. We share a detailed timeline before starting so you always know what to expect.",
  },
  {
    q: "Does KODIT work with businesses outside Delhi?",
    a: "Yes. While we are based in South Delhi, we serve clients across India — from metros like Mumbai, Bangalore, and Hyderabad to tier-2 and tier-3 cities. Our web development, SEO, design, and social media services are location-agnostic. For GMB and local SEO, our Delhi expertise gives us a framework that we adapt to any city.",
  },
  {
    q: "What makes KODIT's SEO different from other agencies?",
    a: "We do not follow generic SEO checklists. Every campaign starts with understanding your business model, customer journey, and local competition. We build technical foundations, create intent-mapped content, and develop local authority signals that compound over time. Most clients begin seeing measurable ranking improvements within 60 to 90 days.",
  },
  {
    q: "How does Google Business Profile optimization work?",
    a: "We audit your existing GBP profile, fix inconsistencies in your name, address, and phone number (NAP), optimize categories and descriptions, build local citations, set up a review generation system, and post weekly updates. The goal is to improve your visibility in Google Maps and the local 3-pack for searches in your service area.",
  },
  {
    q: "What social media platforms does KODIT manage?",
    a: "We create and manage content for Instagram, Facebook, LinkedIn, and YouTube — depending on where your audience actually spends time. Every platform gets a tailored content strategy, not a one-size-fits-all posting schedule.",
  },
  {
    q: "What is KODIT's pricing structure?",
    a: "We offer project-based pricing for websites and design work, and monthly retainers for ongoing services like SEO, social media, and GMB management. Pricing depends on scope, industry, and goals. We provide a clear proposal after a free discovery call — no hidden fees, no surprise invoices.",
  },
  {
    q: "Are there long-term contracts or lock-in clauses?",
    a: "No. We work on monthly rolling agreements for retainer services. You can pause or cancel with 30 days' notice. We believe in earning your business every month through performance, not binding you with contracts.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const itemRef = useRef(null);

  const toggle = () => {
    const body = bodyRef.current;
    if (!open) {
      gsap.fromTo(body,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.35, ease: "power2.in" });
    }
    setOpen(!open);
  };

  return (
    <div ref={itemRef} className={`faq-item ${open ? "faq-item-open" : ""}`}>
      <button className="faq-trigger" onClick={toggle} aria-expanded={open}>
        <span className="faq-q">{faq.q}</span>
        <span className="faq-icon">
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            style={{
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <div ref={bodyRef} className="faq-body" style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p className="faq-a">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current.querySelectorAll(".faq-reveal"),
        { y: "100%", opacity: 0 },
        {
          y: "0%", opacity: 1, duration: 0.85, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 82%" },
        }
      );

      const items = listRef.current.querySelectorAll(".faq-item");
      gsap.fromTo(items,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="faq-root">
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
      <div className="faq-glow" />
      <div className="faq-wrap">
        <div className="faq-layout">
          {/* Left sticky head */}
          <div ref={headRef} className="faq-head">
            <div className="clip-row"><div className="section-eyebrow faq-reveal">FAQ</div></div>
            <div className="clip-row">
              <h2 className="faq-h2 faq-reveal">Common Questions,</h2>
            </div>
            <div className="clip-row">
              <h2 className="faq-h2 faq-reveal"><em className="faq-em">Straight Answers</em></h2>
            </div>
            <div className="clip-row">
              <p className="faq-head-desc faq-reveal">
                Everything you need to know before working with us. Still have questions?
              </p>
            </div>
            <div className="clip-row faq-reveal">
              <a href="mailto:hello@kodit.agency" className="faq-contact-link">
                Ask us directly
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            {/* Creative support card – redesigned */}
            <div className="faq-support-card faq-reveal">
              <div className="faq-sc-header">
                <div className="faq-sc-avatar-row">
                  <div className="faq-sc-avatar"><img src="/icon.png" alt="KODIT" width={24} height={24} style={{ borderRadius: "50%", objectFit: "cover" }} /></div>
                  <div>
                    <span className="faq-sc-name">Kodit Support</span>
                    <span className="faq-sc-status">
                      <span className="faq-sc-dot" />
                      Online now
                    </span>
                  </div>
                </div>
              </div>
              <div className="faq-sc-chat">
                <div className="faq-sc-bubble faq-sc-them">
                  Hi! How can I help with your project?
                </div>
                <div className="faq-sc-bubble faq-sc-us">
                  What&apos;s your typical response time?
                </div>
                <div className="faq-sc-bubble faq-sc-them">
                  Under 4 hours, always. Often within minutes.
                </div>
              </div>
              <div className="faq-sc-footer">
                <span className="faq-sc-typing">
                  <span className="faq-sc-typing-dot" />
                  <span className="faq-sc-typing-dot" />
                  <span className="faq-sc-typing-dot" />
                </span>
                <span className="faq-sc-typing-label">Typing...</span>
              </div>
            </div>
          </div>

          {/* Right accordion */}
          <div ref={listRef} className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .faq-root {
          background: #0a0a0a;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        .faq-glow {
          position: absolute;
          bottom: -100px;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(232,77,14,0.05) 0%, transparent 68%);
          pointer-events: none;
        }
        .faq-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 2;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 80px;
          align-items: start;
        }
        .faq-head {
          position: sticky;
          top: 100px;
        }

        .faq-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 3.2vw, 44px);
          font-weight: 700;
          color: #F0EDE8;
          letter-spacing: -0.035em;
          line-height: 1.08;
          display: block;
          opacity: 0;
        }
        .faq-em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-weight: 400;
          color: #E84D0E;
        }
        .faq-head-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.35);
          line-height: 1.72;
          margin-top: 16px;
          display: block;
          opacity: 0;
        }
        .faq-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #E84D0E;
          text-decoration: none;
          border-bottom: 1px solid rgba(232,77,14,0.3);
          padding-bottom: 2px;
          transition: gap 0.2s ease, border-color 0.2s ease;
        }
        .faq-contact-link:hover {
          gap: 10px;
          border-color: #E84D0E;
        }

        /* Accordion */
        .faq-list {
          display: flex;
          flex-direction: column;
        }
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          opacity: 0;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-item:first-child {
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .faq-item:hover {
          background: rgba(255,255,255,0.015);
          transform: translateX(4px);
        }
        .faq-item-open {
          background: rgba(255,255,255,0.03);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: padding-left 0.3s ease;
        }
        .faq-item-open .faq-trigger {
          padding-left: 20px;
        }
        .faq-q {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #F0EDE8;
          letter-spacing: -0.015em;
          transition: color 0.2s ease;
        }
        .faq-item-open .faq-q {
          color: #fff;
        }
        .faq-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .faq-item-open .faq-icon {
          background: #E84D0E;
          border-color: #E84D0E;
          color: #fff;
        }
        .faq-item:hover .faq-icon {
          border-color: rgba(232,77,14,0.3);
        }

        .faq-body {
          overflow: hidden;
        }
        .faq-a {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          padding: 0 16px 22px 16px;
          padding-left: 20px;
        }

        /* Support card – redesigned */
        .faq-support-card {
          margin-top: 32px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          transition: border-color 0.3s ease;
        }
        .faq-support-card:hover {
          border-color: rgba(232,77,14,0.2);
        }
        .faq-sc-header {
          padding: 16px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .faq-sc-avatar-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .faq-sc-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .faq-sc-name {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }
        .faq-sc-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #22c55e;
        }
        .faq-sc-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22c55e;
          animation: blink 2s ease-in-out infinite;
        }

        .faq-sc-chat {
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-sc-bubble {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          line-height: 1.55;
          padding: 8px 14px;
          border-radius: 12px;
          max-width: 85%;
        }
        .faq-sc-them {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.65);
          border-bottom-left-radius: 4px;
          align-self: flex-start;
        }
        .faq-sc-us {
          background: rgba(232,77,14,0.12);
          color: rgba(255,255,255,0.7);
          border-bottom-right-radius: 4px;
          align-self: flex-end;
        }

        .faq-sc-footer {
          padding: 10px 18px;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .faq-sc-typing {
          display: flex;
          gap: 3px;
        }
        .faq-sc-typing-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          animation: typing-bounce 1.4s ease-in-out infinite;
        }
        .faq-sc-typing-dot:nth-child(2) { animation-delay: 0.15s; }
        .faq-sc-typing-dot:nth-child(3) { animation-delay: 0.3s; }
        .faq-sc-typing-label {
          font-size: 10px;
          color: rgba(255,255,255,0.25);
          font-style: italic;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }

        @media (max-width: 900px) {
          .faq-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .faq-head {
            position: static;
          }
        }
        @media (max-width: 560px) {
          .faq-root {
            padding: 80px 0;
          }
          .faq-wrap {
            padding: 0 20px;
          }
          .faq-q {
            font-size: 14px;
          }
          .faq-trigger {
            padding: 18px 12px;
          }
          .faq-support-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}