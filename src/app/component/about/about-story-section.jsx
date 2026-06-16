"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutStorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Story */
      gsap.fromTo(".au-story-text > *",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".au-story", start: "top 78%" } }
      );
      gsap.fromTo(".au-code-card",
        { scale: 0.92, opacity: 0, x: 50 },
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".au-story", start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="au-story">
      <div className="au-container au-story-inner">
        <div className="au-story-text">
          <p className="section-eyebrow">Our Mission</p>
          <h2 className="au-section-h2">
            Bypassing agency fluff to deliver <em>raw business growth.</em>
          </h2>
          <p className="au-body-text">
            Founded in Delhi, Kodit Agency was born from frustration with large
            agencies that charge premium rates for slow execution and templates.
          </p>
          <p className="au-body-text">
            We focus on lightning-fast custom websites, dominating Google Maps for
            local searches, and SEO strategies that map directly to inbound calls
            and qualified leads.
          </p>
          <div className="au-story-row-stats">
            <div>
              <span className="au-story-big">3.4x</span>
              <span className="au-story-lbl">Avg. ROI improvement</span>
            </div>
            <div>
              <span className="au-story-big">24h</span>
              <span className="au-story-lbl">Typical support response</span>
            </div>
          </div>
        </div>

        {/* Code card */}
        <div className="au-code-card">
          <div className="au-code-dots">
            <span className="cd red" /><span className="cd yellow" /><span className="cd green" />
          </div>
          <div className="au-code-body">
            <p className="cl"><span className="ck">const</span> kodit = {"{"}</p>
            <p className="cl ind"><span className="ckey">focus</span>: <span className="cstr">&quot;Revenue &amp; Conversion&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">speed</span>: <span className="cstr">&quot;100/100 Lighthouse&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">seo</span>: <span className="cstr">&quot;Dominating Local Pack&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">clients</span>: <span className="cstr">&quot;Delhi NCR&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">founded</span>: <span className="cnum">2020</span></p>
            <p className="cl">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
