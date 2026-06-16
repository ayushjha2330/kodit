"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const services = [
  {
    id: "web", num: "01",
    title: "Web Development",
    tagline: "Ultra-fast Next.js & React sites",
    body: "No WordPress bloat. Pure hand-crafted code designed to load in under a second and convert visitors.",
    deliverables: ["Lighthouse score 95+", "Fully responsive custom UI/UX", "Conversion-optimised structure", "CMS integration (Sanity / Prismic)", "Hosting & domain setup"],
    stack: ["Next.js", "React", "GSAP", "Tailwind", "Vercel"],
  },
  {
    id: "seo", num: "02",
    title: "SEO Optimisation",
    tagline: "Rank page 1 for buyer-intent keywords",
    body: "Comprehensive keyword maps tied to business intent. Technical fixes + top-tier backlinks = qualified calls.",
    deliverables: ["Full technical SEO audit", "Keyword intent mapping", "Schema markup implementation", "Monthly link-building campaigns", "Transparent performance reports"],
    stack: ["Ahrefs", "GSC", "Screaming Frog", "Schema.org"],
  },
  {
    id: "gmb", num: "03",
    title: "GMB Optimisation",
    tagline: "Dominate Google Maps 3-Pack in Delhi",
    body: "Google Maps is the #1 source of calls for local businesses. We optimise your profile and automate review pipelines.",
    deliverables: ["GMB profile full optimisation", "Local citation cleanup", "Geotagged image uploads", "Review generation campaign", "Grid rank tracking & reports"],
    stack: ["Google Business", "BrightLocal", "Yext", "Local Rank Tracking"],
  },
  {
    id: "design", num: "04",
    title: "Graphic Design & Branding",
    tagline: "Visual authority that commands premium pricing",
    body: "Your design tells customers what to expect. We craft bespoke identity systems, logos, and full brand guidelines.",
    deliverables: ["Logo & brand mark design", "Typography & colour system", "Social media template kit", "Pitch deck & brochure layout", "Full brand style guide"],
    stack: ["Figma", "Illustrator", "Photoshop", "After Effects"],
  },
  {
    id: "social", num: "05",
    title: "Social Media Marketing",
    tagline: "Organic growth + engaged communities",
    body: "Stop posting into the void. We build content strategies, create scroll-stopping visuals, and grow your brand's presence on platforms that matter.",
    deliverables: ["Custom content calendar (30+ posts/mo)", "Platform-specific creative (Reels, carousels, stories)", "Community engagement & outreach", "Monthly analytics & growth report", "Competitor & hashtag research"],
    stack: ["Meta Business Suite", "Later", "Canva", "CapCut", "Sprout Social"],
  },
  {
    id: "ads", num: "06",
    title: "Paid Ads (PPC)",
    tagline: "High-ROI Google & Meta campaigns",
    body: "Stop burning ad budget. We run data-driven PPC campaigns that target ready-to-buy users and scale profitably with daily optimisation.",
    deliverables: ["Google Ads & Meta Ads setup", "Audience & keyword research", "Ad copy & creative production", "Daily bid & budget management", "Conversion tracking & weekly reporting"],
    stack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Hotjar", "Microsoft Clarity"],
  },
];

export default function ServiceTabsSection({ active, setActive }) {
  const sectionRef = useRef(null);

  /* Animate panel on switch */
  useEffect(() => {
    gsap.fromTo(".sv-panel",
      { opacity: 0, x: 24 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }
    );
  }, [active]);

  const s = services[active];

  return (
    <section ref={sectionRef} className="sv-tab-section sv-container">
      <div className="sv-tabs">
        {services.map((svc, i) => (
          <button key={svc.id} onClick={() => setActive(i)}
            className={`sv-tab ${active === i ? "sv-tab-active" : ""}`}>
            <span className="sv-tab-num">{svc.num}</span>
            <span className="sv-tab-label">{svc.title}</span>
          </button>
        ))}
      </div>

      <div className="sv-panel">
        <p className="section-eyebrow">{s.tagline}</p>
        <h2 className="sv-panel-title">{s.title}</h2>
        <p className="sv-panel-body">{s.body}</p>

        <div className="sv-panel-grid">
          <div>
            <h4 className="sv-col-head">What you get</h4>
            <ul className="sv-deliverables">
              {s.deliverables.map((d, i) => (
                <li key={i} className="sv-ditem">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E84D0E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="sv-col-head">Technologies</h4>
            <div className="sv-stack">
              {s.stack.map((tech) => <span key={tech} className="sv-badge">{tech}</span>)}
            </div>
            <Link href="/contact" className="btn-primary sv-cta-btn">Get a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}