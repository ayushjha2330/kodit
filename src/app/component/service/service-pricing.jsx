"use client";
import { useState } from "react";
import Link from "next/link";

export default function ServicePricing({ packages }) {
  const [currency, setCurrency] = useState("INR");

  return (
    <section className="det-pricing-sec">
      {/* Header row */}
      <div className="det-pricing-header">
        <div>
          <span className="det-tag" style={{ marginBottom: "14px" }}>Investment</span>
          <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 48px)", margin: 0 }}>
            Pricing <em>Packages</em>
          </h2>
        </div>

        {/* Currency Toggle */}
        <button
          onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
          className="det-currency-toggle"
          aria-label="Toggle currency"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          {currency === "INR" ? "Show in USD ($)" : "Show in INR (₹)"}
        </button>
      </div>

      {/* Cards */}
      <div className="det-pricing-grid">
        {packages.map((pkg, idx) => (
          <div key={idx} className={`det-pricing-card${pkg.featured ? " featured" : ""}`}>
            {pkg.featured && (
              <div className="det-price-badge">{pkg.badge || "Best Seller"}</div>
            )}

            <div className="det-price-name">{pkg.name}</div>

            <div className="det-price-amount">
              {currency === "INR" ? (
                <>₹{pkg.priceINR.toLocaleString("en-IN")}<span>{pkg.period}</span></>
              ) : (
                <>${pkg.priceUSD.toLocaleString("en-US")}<span>{pkg.period}</span></>
              )}
            </div>

            <div className="det-price-divider" />

            <ul className="det-price-features-list">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="det-price-feature-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`det-pricing-cta${pkg.featured ? " featured-cta" : ""}`}
            >
              {pkg.ctaText || "Get Started"}
            </Link>
          </div>
        ))}
      </div>

      {/* Trust line */}
      <p style={{
        textAlign: "center",
        marginTop: "32px",
        fontSize: "13px",
        color: "rgba(255,255,255,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          No hidden fees
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Free consultation
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Quick turnaround
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11.5a19.79 19.79 0 01-3-8.57A2 2 0 013.07 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.15a16 16 0 006 6l1.51-1.51a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15z" />
          </svg>
          WhatsApp support
        </span>
      </p>
    </section>
  );
}
