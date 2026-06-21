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
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
      );
      gsap.fromTo(".au-code-card",
        { scale: 0.92, opacity: 0, x: 50 },
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
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
            Built for businesses that want <em>real growth, not retainer fees.</em>
          </h2>
          <p className="au-body-text">
            KODIT was founded in New Delhi to solve a specific problem: local
            businesses were either stuck with generic template websites from
            freelancers or paying enterprise prices for agencies that treated
            them as small accounts. We built an agency that delivers enterprise-grade
            web development, SEO, design, and marketing at a price point and
            attention level that works for growing businesses.
          </p>
          <p className="au-body-text">
            Today, we work with clinics, coaching institutes, salons, restaurants,
            real estate firms, e-commerce brands, and startups across India. Every
            project starts with the same question: what does this business need
            to generate more qualified leads? Everything else follows from that answer.
          </p>
          <div className="au-story-row-stats">
            <div>
              <span className="au-story-big">1.6x</span>
              <span className="au-story-lbl">Avg. client growth</span>
            </div>
            <div>
              <span className="au-story-big">Top 3</span>
              <span className="au-story-lbl">Google Maps ranking</span>
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
            <p className="cl ind"><span className="ckey">focus</span>: <span className="cstr">&quot;Lead Generation &amp; Revenue&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">speed</span>: <span className="cstr">&quot;14-Day Website Launch&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">seo</span>: <span className="cstr">&quot;Local Pack Dominance&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">clients</span>: <span className="cstr">&quot;Pan-India&quot;</span>,</p>
            <p className="cl ind"><span className="ckey">founded</span>: <span className="cnum">2026</span>,</p>
            <p className="cl ind"><span className="ckey">hq</span>: <span className="cstr">&quot;Jahangirpuri, New Delhi&quot;</span></p>
            <p className="cl">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
