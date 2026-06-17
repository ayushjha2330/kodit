"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const services = [
  {
    id: "web", num: "01",
    title: "Web Development",
    tagline: "Fast, conversion-focused websites",
    body: "No WordPress bloat, no generic templates. Every website is hand-crafted using Next.js and React, built to load in under a second, rank on Google, and convert visitors into leads. Most projects go live within 14 days.",
    deliverables: ["2.6s avg page load times", "Fully responsive custom UI/UX", "SEO-ready architecture from day one", "CMS integration (Sanity / Prismic)", "Hosting, domain, and SSL setup"],
    stack: ["Next.js", "React", "GSAP", "Tailwind", "Vercel"],
  },
  {
    id: "seo", num: "02",
    title: "SEO",
    tagline: "Rank page 1 for buyer-intent keywords",
    body: "We build SEO strategies around your business model, not generic checklists. Technical foundations, intent-mapped content, and local authority signals that compound over time. Most clients see measurable ranking improvements within 60 to 90 days.",
    deliverables: ["Full technical SEO audit", "Keyword intent mapping", "Schema markup implementation", "Monthly link-building campaigns", "Transparent performance reports"],
    stack: ["Ahrefs", "GSC", "Screaming Frog", "Schema.org"],
  },
  {
    id: "gmb", num: "03",
    title: "Google Business Profile",
    tagline: "Dominate your local market on Google Maps",
    body: "Google Maps is the primary source of calls and visits for local businesses. We audit your profile, fix NAP inconsistencies, optimize categories and descriptions, build local citations, set up review generation, and post weekly updates to improve your Maps visibility.",
    deliverables: ["Full GBP profile optimization", "NAP consistency audit & cleanup", "Local citation building", "Automated review generation system", "Weekly GBP posts and updates"],
    stack: ["Google Business", "BrightLocal", "Yext", "Local Rank Tracking"],
  },
  {
    id: "design", num: "04",
    title: "Graphic Design",
    tagline: "Visual authority that builds trust",
    body: "Your visual identity shapes how customers perceive your business before they read a single word. We design logos, brand guidelines, social media templates, marketing materials, and pitch decks that signal professionalism and justify premium pricing.",
    deliverables: ["Logo and brand mark design", "Typography and color system", "Social media template kit", "Pitch deck and brochure layout", "Complete brand style guide"],
    stack: ["Figma", "Illustrator", "Photoshop", "After Effects"],
  },
  {
    id: "social", num: "05",
    title: "Social Media Marketing",
    tagline: "Strategic content that drives engagement",
    body: "We build content strategies tailored to your audience, create platform-specific visuals, and manage communities across Instagram, Facebook, LinkedIn, and YouTube. Every post is tied to a business objective, not random publishing.",
    deliverables: ["Custom content calendar (30+ posts/mo)", "Platform-specific creative (Reels, carousels, stories)", "Community engagement and outreach", "Monthly analytics and growth report", "Competitor and hashtag research"],
    stack: ["Meta Business Suite", "Later", "Canva", "CapCut", "Sprout Social"],
  },
  {
    id: "ai", num: "06",
    title: "AI Automation",
    tagline: "Workflow automation that saves time and money",
    body: "Stop doing repetitive tasks manually. We build n8n-powered automation workflows that handle lead capture, CRM updates, appointment reminders, customer follow-ups, and reporting — freeing your team to focus on growth.",
    deliverables: ["Lead capture automation from website forms", "CRM integration and auto-update workflows", "Automated appointment reminders and follow-ups", "Custom dashboard and reporting automation", "n8n workflow setup and maintenance"],
    stack: ["n8n", "Make", "Zapier", "OpenAI API", "Google Sheets API"],
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