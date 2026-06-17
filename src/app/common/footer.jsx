"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/service" },
  { label: "SEO", href: "/service" },
  { label: "GMB Optimization", href: "/service" },
  { label: "Graphic Design & Branding", href: "/service" },
  { label: "Social Media Marketing", href: "/service" },
  { label: "AI Automation", href: "/service" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/koditagency/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/KpZQwxbCBH",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0c-.145-.343-.354-.776-.53-1.097a16.299 16.299 0 0 0-4.129 1.3C2.132 10.602 1.118 15.512 1.601 20.334a16.482 16.482 0 0 0 5.065 2.595c.408-.56.775-1.155 1.088-1.783a10.663 10.663 0 0 1-1.715-.834c.144-.106.283-.217.418-.328 3.29 1.542 6.86 1.542 10.094 0 .136.114.275.225.42.33a10.667 10.667 0 0 1-1.72.834c.313.628.68 1.223 1.089 1.783a16.48 16.48 0 0 0 5.065-2.594c.566-5.603-.97-10.458-4.058-14.778zM8.013 17.308c-1.341 0-2.437-1.242-2.437-2.756s1.073-2.756 2.437-2.756c1.364 0 2.46 1.242 2.437 2.756 0 1.514-1.074 2.756-2.437 2.756zm7.974 0c-1.341 0-2.437-1.242-2.437-2.756s1.073-2.756 2.437-2.756c1.364 0 2.46 1.242 2.437 2.756 0 1.514-1.073 2.756-2.437 2.756z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917428276525",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587046054985",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const btn = document.querySelector('.footer-scroll-top');
    if (btn) {
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    gsap.to('.footer-year-marquee-inner', {
      xPercent: -50, duration: 30, ease: 'none', repeat: -1,
    });
  }, []);

  return (
    <footer ref={footerRef} className="footer-root">
      {/* CTA Banner */}
      <div className="footer-cta-banner">
        <div className="footer-cta-glow" />
        <div className="footer-cta-inner">
          <p className="footer-cta-label">Ready to grow?</p>
          <h2 className="footer-cta-heading">
            Let&apos;s Build Something
            <br />
            <em>That Means Business.</em>
          </h2>
          <div className="footer-cta-actions">
            <Link href="/contact" className="footer-cta-btn-primary">
              Start a Project
            </Link>
            <Link href="/service" className="footer-cta-btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Animated gradient border line */}
      <div className="footer-gradient-line" />

      {/* Big brand name background text */}
      <div className="footer-body">
        <div className="footer-bg-text">kodit</div>

        <div className="footer-grid-wrap">
          {/* Brand column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <div >
               <img src="/logo.svg" alt="Kodit Agency Logo" width={100} height={100} /> 
              </div>
            </Link>
            <p className="footer-tagline">
              Delhi-based growth partner for local businesses. We build brands that dominate — custom websites, SEO, GMB optimization, graphic design, social media marketing, and AI automation.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="footer-link-col">
            <h4 className="footer-col-head">Pages</h4>
            <ul className="footer-link-list">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="footer-link">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-link-col">
            <h4 className="footer-col-head">Services</h4>
            <ul className="footer-link-list">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="footer-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-link-col">
            <h4 className="footer-col-head">Contact</h4>
            <ul className="footer-link-list">
              <li>
                <a href="mailto:hello@kodit.agency" className="footer-link">hello@kodit.agency</a>
              </li>
              <li>
                <a href="tel:+917428276525" className="footer-link">+91 74282 76525</a>
              </li>
              <li>
                <span className="footer-link-plain">Delhi, India</span>
              </li>
              <li className="footer-availability">
                <span className="footer-dot" />
                Available for new projects
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Kodit Agency. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="#" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="#" className="footer-bottom-link">Terms of Service</Link>
          </div>
          <button className="footer-scroll-top" aria-label="Scroll to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </button>
        </div>

        {/* Year marquee */}
        <div className="footer-year-marquee">
          <div className="footer-year-marquee-inner">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="footer-year-item">
                Kodit Agency · Delhi, India ·
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-root {
          background: #0A0A0A;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }

        /* Animated gradient border */
        .footer-gradient-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #E84D0E, #fb923c, #E84D0E, transparent);
          background-size: 200% 100%;
          animation: gradient-shift 4s linear infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* CTA banner */
        .footer-cta-banner {
          background: #E84D0E;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .footer-cta-glow {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
                      radial-gradient(circle at 70% 50%, rgba(0,0,0,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .footer-cta-inner { position: relative; z-index: 2; }
        .footer-cta-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.65); margin-bottom: 18px;
        }
        .footer-cta-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(30px, 5vw, 58px);
          font-weight: 700; color: #fff;
          line-height: 1.08; letter-spacing: -0.03em;
          margin-bottom: 36px;
        }
        .footer-cta-heading em {
          font-family: 'Instrument Serif', serif;
          font-style: italic; font-weight: 400;
          color: rgba(255,255,255,0.88);
        }
        .footer-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .footer-cta-btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 600;
          color: #E84D0E; background: #fff;
          text-decoration: none; padding: 13px 32px;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .footer-cta-btn-primary:hover { transform: scale(1.04); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
        .footer-cta-btn-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 500;
          color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.12);
          text-decoration: none; padding: 13px 32px;
          border-radius: 999px; border: 1px solid rgba(255,255,255,0.25);
          transition: background 0.2s ease;
        }
        .footer-cta-btn-secondary:hover { background: rgba(255,255,255,0.18); }

        /* Footer body */
        .footer-body {
          position: relative; overflow: hidden;
        }
        .footer-bg-text {
          position: absolute;
          bottom: -20px; left: 50%;
          transform: translateX(-50%);
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(80px, 16vw, 200px);
          font-weight: 700; letter-spacing: -0.05em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .footer-grid-wrap {
          max-width: 1280px; margin: 0 auto;
          padding: 72px 40px 48px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          position: relative; z-index: 2;
        }

        /* Brand col */
        .footer-logo {
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .footer-logo-mark {
          width: 34px; height: 34px; background: #E84D0E;
          border-radius: 8px; display: flex;
          align-items: center; justify-content: center; flex-shrink: 0;
        }
        .footer-logo-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 15px; color: #F0EDE8;
          line-height: 1.15; letter-spacing: -0.02em;
        }
        .footer-logo-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 400; font-size: 10px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.14em; text-transform: uppercase;
        }
        .footer-tagline {
          font-size: 13.5px; color: rgba(255,255,255,0.4);
          line-height: 1.75; max-width: 270px; margin-bottom: 28px;
        }
        .footer-socials { display: flex; gap: 8px; }
        .footer-social-icon {
          width: 36px; height: 36px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.09);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.45); text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-social-icon:hover {
          border-color: rgba(232,77,14,0.5);
          color: #E84D0E; background: rgba(232,77,14,0.08);
        }

        /* Link cols */
        .footer-col-head {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.15em; text-transform: uppercase;
          margin-bottom: 22px;
        }
        .footer-link-list {
          list-style: none; display: flex; flex-direction: column; gap: 13px;
        }
        .footer-link {
          font-size: 13.5px; color: rgba(255,255,255,0.5);
          text-decoration: none; transition: color 0.2s ease;
        }
        .footer-link:hover { color: #F0EDE8; }
        .footer-link-plain { font-size: 13.5px; color: rgba(255,255,255,0.5); }
        .footer-availability {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: rgba(255,255,255,0.35);
          margin-top: 4px;
        }
        .footer-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1280px; margin: 0 auto;
          padding: 20px 40px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
          position: relative; z-index: 2;
        }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.25); }
        .footer-bottom-links { display: flex; gap: 24px; }
        .footer-bottom-link {
          font-size: 12px; color: rgba(255,255,255,0.25);
          text-decoration: none; transition: color 0.2s ease;
        }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.6); }

        /* Scroll to top button */
        .footer-scroll-top {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.4); cursor: pointer;
          transition: all 0.25s ease;
        }
        .footer-scroll-top:hover {
          background: rgba(232,77,14,0.12);
          border-color: rgba(232,77,14,0.3);
          color: #E84D0E;
          transform: translateY(-2px);
        }

        /* Year marquee */
        .footer-year-marquee {
          overflow: hidden; padding: 12px 0;
          border-top: 1px solid rgba(255,255,255,0.03);
        }
        .footer-year-marquee-inner {
          display: flex; width: max-content; white-space: nowrap;
        }
        .footer-year-item {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          padding: 0 20px;
        }

        @media (max-width: 960px) {
          .footer-grid-wrap { grid-template-columns: 1fr 1fr; padding: 56px 32px 40px; }
          .footer-cta-banner { padding: 60px 28px; }
        }
        @media (max-width: 560px) {
          .footer-grid-wrap { grid-template-columns: 1fr; padding: 48px 20px 36px; gap: 36px; }
          .footer-bottom { padding: 18px 20px; flex-direction: column; align-items: flex-start; }
          .footer-cta-banner { padding: 56px 20px; }
        }
      `}</style>
    </footer>
  );
}