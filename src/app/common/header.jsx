"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/service/web-development" },
  { label: "SEO", href: "/service/seo" },
  { label: "GMB Optimization", href: "/service/gmb-optimization" },
  { label: "Graphic Design", href: "/service/graphic-design" },
  { label: "Social Media Marketing", href: "/service/social-media-marketing" },
  { label: "AI Automation", href: "/service/ai-automation" },
];

const mobileSocials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/koditagency/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917428276525",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587046054985",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`header-root ${scrolled ? "header-scrolled" : ""}`}>
        {/* Logo */}
        <Link href="/" className="header-logo">
          <div>
          <img src="/logo.svg" alt="Kodit Agency Logo" width={120} height={30} style={{ objectFit: "contain" }} /> 
          </div>
        </Link>

        {/* Center pill nav */}
        <nav className="pill-nav desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.label === "Services") {
              return (
                <div key={link.href} className="pill-dropdown-container">
                  <Link
                    href={link.href}
                    className={`pill-link ${isActive || pathname.startsWith("/service/") ? "pill-link-active" : ""}`}
                  >
                    {(isActive || pathname.startsWith("/service/")) && <span className="pill-active-dot" />}
                    {link.label}
                  </Link>
                  <div className="pill-dropdown-menu">
                    {serviceLinks.map((sub) => (
                      <Link key={sub.href} href={sub.href} className="pill-dropdown-item">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pill-link ${isActive ? "pill-link-active" : ""}`}
              >
                {isActive && <span className="pill-active-dot" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="header-right">
          <Link href="/contact" className="header-cta desktop-cta">
            Start a Project
          </Link>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${menuOpen ? "ham-line-1-open" : ""}`} />
            <span className={`ham-line ${menuOpen ? "ham-line-2-open" : ""}`} />
            <span className={`ham-line ${menuOpen ? "ham-line-3-open" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-glow" />
        <div className="mobile-nav-links">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            if (link.label === "Services") {
              return (
                <div key={link.href} className="mobile-services-group">
                  <Link
                    href={link.href}
                    className={`mobile-link ${isActive || pathname.startsWith("/service/") ? "mobile-link-active" : ""}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="mobile-link-num">0{i + 1}</span>
                    {link.label}
                  </Link>
                  <div className="mobile-sub-links">
                    {serviceLinks.map((sub, j) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="mobile-sub-link"
                        style={{ animationDelay: `${(i + j + 1) * 40}ms` }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-link ${isActive ? "mobile-link-active" : ""}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mobile-link-num">0{i + 1}</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Social Links instead of CTA button */}
        <div className="mobile-socials-wrap">
          <p className="mobile-socials-title">Connect with us</p>
          <div className="mobile-socials-grid">
            {mobileSocials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="mobile-social-icon-btn"
                style={{ animationDelay: `${(navLinks.length + i) * 60}ms` }}
              >
                <span className="mobile-icon-circle">{s.icon}</span>
                <span className="mobile-icon-label">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}