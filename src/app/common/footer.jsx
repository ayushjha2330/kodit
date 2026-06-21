"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import "./footer.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/service/web-development" },
  { label: "SEO", href: "/service/seo" },
  { label: "GMB Optimization", href: "/service/gmb-optimization" },
  { label: "Graphic Design & Branding", href: "/service/graphic-design" },
  { label: "Social Media Marketing", href: "/service/social-media-marketing" },
  { label: "AI Automation", href: "/service/ai-automation" },
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
                <a href="mailto:koditagency@gmail.com" className="footer-link">koditagency@gmail.com</a>
              </li>
              <li>
                <a href="tel:+917428276525" className="footer-link">+91 74282 76525</a>
              </li>
              <li>
                <span className="footer-link-plain">Jahangirpuri, New Delhi</span>
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
                Kodit Agency · Jahangirpuri, New Delhi ·
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}