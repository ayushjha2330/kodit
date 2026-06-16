"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const categories = ["All", "Web Dev", "SEO & GMB", "Design"];

const projects = [
  {
    title: "Delhi Ortho Center",
    category: "Web Dev",
    desc: "High-performance clinic website with instant appointment booking. Achieved 100/100 Lighthouse score.",
    metric: "+124% Inbound Calls",
    tags: ["Next.js", "GSAP", "Tailwind"],
    year: "2024",
    img: "https://picsum.photos/seed/ortho/800/500",
    size: "wide",
  },
  {
    title: "The South Ex Bistro",
    category: "SEO & GMB",
    desc: "Ranked #1 in the Google Maps 3-Pack for 'Best Italian Restaurant' across South Delhi.",
    metric: "+310% Map Views",
    tags: ["GMB Opt", "Citations", "SEO"],
    year: "2024",
    img: "https://picsum.photos/seed/bistro/600/440",
    size: "normal",
  },
  {
    title: "Rajouri Garden Salon",
    category: "Design",
    desc: "Complete visual identity rebrand — logo, typography system, social assets, and launch campaign.",
    metric: "Full Brand Launch",
    tags: ["Logo", "Identity", "Style Guide"],
    year: "2023",
    img: "https://picsum.photos/seed/salon/600/440",
    size: "normal",
  },
  {
    title: "Chanakyapuri Law Firm",
    category: "Web Dev",
    desc: "Modern corporate site with attorney profiles, publication index, and CMS editorial workflow.",
    metric: "0.4s Load Speed",
    tags: ["React", "Sanity CMS", "SEO"],
    year: "2024",
    img: "https://picsum.photos/seed/lawfirm/800/500",
    size: "wide",
  },
  {
    title: "Dwarka Real Estate Group",
    category: "SEO & GMB",
    desc: "Targeted organic strategy for property keywords — 500+ premium leads in 6 months.",
    metric: "540+ Qualified Leads",
    tags: ["Keyword Strategy", "SEO", "Reporting"],
    year: "2023",
    img: "https://picsum.photos/seed/realestate/600/440",
    size: "normal",
  },
  {
    title: "CP Dental Clinic",
    category: "SEO & GMB",
    desc: "Review automation and local map ranking for dental implant keywords in Central Delhi.",
    metric: "220+ New Reviews",
    tags: ["Review Funnel", "GMB Rank", "SEO"],
    year: "2024",
    img: "https://picsum.photos/seed/dental/600/440",
    size: "normal",
  },
  {
    title: "Lajpat Nagar Furniture Co.",
    category: "Web Dev",
    desc: "Product catalogue with WhatsApp inquiry flow and localised SEO for furniture queries.",
    metric: "3.2x More Enquiries",
    tags: ["Next.js", "Catalogue", "SEO"],
    year: "2023",
    img: "https://picsum.photos/seed/furniture/800/500",
    size: "wide",
  },
  {
    title: "Premium Fitness Studio",
    category: "Design",
    desc: "Energetic brand identity and social media template system for a premium fitness studio.",
    metric: "Brand Identity",
    tags: ["Logo", "Social Kit", "Ad Creatives"],
    year: "2024",
    img: "https://picsum.photos/seed/fitness/600/440",
    size: "normal",
  },
];

export default function ProjectsGridSection() {
  const [cat, setCat] = useState("All");
  const gridRef = useRef(null);

  /* Re-animate grid on filter change */
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".pj-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 36, rotateX: 8 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
    );
  }, [cat]);

  const filtered = cat === "All" ? projects : projects.filter(p => p.category === cat);

  return (
    <section className="pj-grid-section pj-container">
      <div className="pj-filters">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`pj-filter-btn ${cat === c ? "pj-filter-active" : ""}`}
          >
            {c}
            {cat === c && <span className="pj-filter-dot" />}
          </button>
        ))}
      </div>

      {/* Masonry-like grid */}
      <div ref={gridRef} className="pj-grid">
        {filtered.map((p, i) => (
          <div key={`${p.title}-${i}`} className={`pj-card pj-card-${p.size}`}>
            {/* Image */}
            <div className="pj-card-img-wrap">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes={p.size === "wide" ? "800px" : "600px"}
                className="pj-card-img"
              />
              <div className="pj-card-img-overlay" />
              {/* Metric badge floating on image */}
              <span className="pj-metric-badge">{p.metric}</span>
            </div>

            {/* Content */}
            <div className="pj-card-content">
              <div className="pj-card-top">
                <span className="pj-cat-tag">{p.category}</span>
                <span className="pj-year">{p.year}</span>
              </div>
              <h3 className="pj-card-title">{p.title}</h3>
              <p className="pj-card-desc">{p.desc}</p>
              <div className="pj-tags">
                {p.tags.map(t => (
                  <span key={t} className="pj-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="pj-hover-bar" />
          </div>
        ))}
      </div>
    </section>
  );
}
