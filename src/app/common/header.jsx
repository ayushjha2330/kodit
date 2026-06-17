"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
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

      <style jsx global>{`
        .header-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, padding 0.3s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .header-scrolled {
          background: rgba(10,10,10,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 14px 40px;
        }
        .header-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .logo-mark {
          width: 34px; height: 34px;
          background: #E84D0E;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .logo-text { display: flex; flex-direction: column; }
        .logo-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700; font-size: 15px;
          color: #F0EDE8; line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .logo-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 400; font-size: 10px;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .pill-nav {
          display: flex; align-items: center; gap: 2px;
          background: rgba(18,18,18,0.95);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 999px;
          padding: 5px 6px;
          backdrop-filter: blur(16px);
          box-shadow: 0 0 30px rgba(0,0,0,0.3), inset 0 0 0 0.5px rgba(255,255,255,0.04);
        }
        .pill-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          padding: 7px 17px;
          border-radius: 999px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .pill-link:hover { color: #fff; }
        .pill-link-active {
          color: #fff;
          background: rgba(255,255,255,0.07);
          position: relative;
        }
        .pill-active-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #E84D0E;
          position: absolute; bottom: 2px; left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 6px rgba(232,77,14,0.5);
        }
        .header-right { display: flex; align-items: center; gap: 12px; }
        .header-cta {
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #fff;
          background: #E84D0E;
          text-decoration: none;
          padding: 9px 20px;
          border-radius: 999px;
          transition: background 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .header-cta:hover { background: #F06030; transform: scale(1.03); }
        .header-cta {
          animation: cta-glow 3s ease-in-out infinite;
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232,77,14,0); }
          50% { box-shadow: 0 0 20px rgba(232,77,14,0.25); }
        }

        .hamburger {
          background: none;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          width: 40px; height: 40px;
          cursor: pointer;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 0;
          z-index: 1001;
          position: relative;
        }
        .ham-line {
          display: block;
          width: 18px; height: 1.5px;
          background: #F0EDE8;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .ham-line-1-open { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .ham-line-2-open { opacity: 0; }
        .ham-line-3-open { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 999;
          background: #080808;
          display: flex; flex-direction: column;
          align-items: center; justify-content: space-between;
          padding: 120px 24px 60px;
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0; pointer-events: none;
          transform: scale(0.96);
          overflow-y: auto;
        }
        .mobile-menu-open { opacity: 1; pointer-events: all; transform: scale(1); }
        
        .mobile-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(232,77,14,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .mobile-nav-links {
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          width: 100%;
        }
        .mobile-link {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 8vw, 48px);
          font-weight: 700; letter-spacing: -0.03em;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
          display: flex; align-items: baseline; gap: 12px;
          opacity: 0;
          transform: translateY(20px);
        }
        .mobile-menu-open .mobile-link {
          animation: mobileFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mobile-link:hover { color: #fff; transform: translateY(-2px); }
        .mobile-link-active { color: #E84D0E; }
        .mobile-link-num {
          font-size: 12px; font-family: 'Inter', sans-serif;
          color: #E84D0E; font-weight: 600;
          letter-spacing: 0.08em;
        }

        /* Mobile Socials styles */
        .mobile-socials-wrap {
          width: 100%;
          max-width: 320px;
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .mobile-socials-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .mobile-socials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          width: 100%;
        }
        .mobile-social-icon-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(15px);
        }
        .mobile-menu-open .mobile-social-icon-btn {
          animation: mobileFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mobile-social-icon-btn:hover {
          border-color: rgba(232,77,14,0.4);
          background: rgba(232,77,14,0.06);
          color: #E84D0E;
        }
        .mobile-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-icon-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
        }

        @keyframes mobileFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
          .header-root { padding: 16px 20px; }
          .header-scrolled { padding: 13px 20px; }
        }
      `}</style>
    </>
  );
}