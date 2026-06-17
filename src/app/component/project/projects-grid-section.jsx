"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const projects = [
  { title: "Godsend Tortoise", desc: "Ecommerce website for premium wallets, gift packs, and accessories.", tags: ["WordPress", "WooCommerce"], year: "2024", img: "/project/1.avif" },
  { title: "RS Skin & Hair Transplant", desc: "Clinic website for skin care and hair transplant services with consultation booking.", tags: ["HTML", "CSS", "JS"], year: "2024", img: "/project/2.avif" },
  { title: "Rastra24", desc: "News portal with real-time article publishing, category management, and editorial workflow.", tags: ["HTML", "CSS", "JS"], year: "2024", img: "/project/3.avif" },
  { title: "Suryansh Foundation Trust", desc: "Trust website for donation management, campaign showcases, and beneficiary stories.", tags: ["HTML", "CSS", "JS"], year: "2024", img: "/project/4.avif" },
  { title: "Fragrance XO", desc: "Brand website for premium fragrances with product catalog and inquiry system.", tags: ["HTML", "CSS", "JS"], year: "2024", img: "/project/5.avif" },
  { title: "Meducare", desc: "Hospital website with department pages, doctor profiles, and appointment booking.", tags: ["HTML", "CSS", "JS"], year: "2023", img: "/project/6.avif" },
  { title: "IHR (International Human Rights)", desc: "Human rights organization website for case reporting, resources, and awareness campaigns.", tags: ["WordPress", "Custom Theme"], year: "2023", img: "/project/7.avif" },
  { title: "Mourtary", desc: "Ecommerce website for curated products with shopping cart and payment integration.", tags: ["HTML", "CSS", "JS"], year: "2024", img: "/project/8.avif" },
];

function ProjectCard({ project: p }) {
  return (
    <div className="pj-card">
      <div className="pj-card-img-wrap">
        <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="pj-card-img" />
        <div className="pj-card-img-overlay" />
      </div>
      <div className="pj-card-content">
        <span className="pj-year">{p.year}</span>
        <h3 className="pj-card-title">{p.title}</h3>
        <p className="pj-card-desc">{p.desc}</p>
        <div className="pj-tags">
          {p.tags.map(t => <span key={t} className="pj-tag">{t}</span>)}
        </div>
      </div>
      <div className="pj-hover-bar" />
    </div>
  );
}

export default function ProjectsGridSection() {
  const [page, setPage] = useState(0);
  const gridRef = useRef(null);
  const totalPages = 2;

  const pages = [projects.slice(0, 4), projects.slice(4, 8)];

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".pj-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }
    );
  }, [page]);

  const current = pages[page];

  return (
    <section className="pj-grid-section pj-container">
      <div className="pj-slider-wrap">
        <button
          className="pj-slider-btn pj-slider-prev"
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div ref={gridRef} className="pj-slider-track">
          <div className="pj-row pj-row-3">
            {current.slice(0, 3).map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
          {current[3] && (
            <div className="pj-row pj-row-full">
              <ProjectCard project={current[3]} />
            </div>
          )}
        </div>

        <button
          className="pj-slider-btn pj-slider-next"
          onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div className="pj-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} className={`pj-dot ${i === page ? "pj-dot-active" : ""}`} onClick={() => setPage(i)} aria-label={`Page ${i + 1}`} />
        ))}
      </div>

      <style jsx global>{`
        .pj-slider-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }
        .pj-slider-track {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 300px;
        }
        .pj-row {
          display: grid;
          gap: 16px;
        }
        .pj-row-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .pj-row-full {
          grid-template-columns: 1fr;
        }
        .pj-row-full .pj-card-img-wrap {
          height: 280px;
        }
        .pj-slider-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(18,18,18,0.9);
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .pj-slider-btn:hover:not(:disabled) {
          border-color: rgba(232,77,14,0.5);
          color: #fff;
          background: rgba(232,77,14,0.1);
        }
        .pj-slider-btn:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
        .pj-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }
        .pj-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .pj-dot-active {
          background: #E84D0E;
          width: 24px;
          border-radius: 4px;
        }

        .pj-card-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .pj-card-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .pj-card:hover .pj-card-img {
          transform: scale(1.05);
        }
        .pj-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
        }
        .pj-card-content {
          padding: 14px 16px 18px;
        }
        .pj-year {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.08em;
        }
        .pj-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #F0EDE8;
          margin: 6px 0 0;
          letter-spacing: -0.02em;
        }
        .pj-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 8px 0 12px;
        }
        .pj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .pj-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
          padding: 4px 10px;
          border-radius: 999px;
        }
        .pj-hover-bar {
          height: 2px;
          background: #E84D0E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .pj-card:hover .pj-hover-bar {
          transform: scaleX(1);
        }

        .pj-card {
          background: #111;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pj-card:hover {
          border-color: rgba(232,77,14,0.2);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        @media (max-width: 768px) {
          .pj-row-3 {
            grid-template-columns: 1fr;
          }
          .pj-slider-btn {
            display: none;
          }
          .pj-row-full .pj-card-img-wrap {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
