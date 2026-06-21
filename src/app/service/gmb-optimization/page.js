import Link from "next/link";
import "../service.css";
import "../service-detail.css";
import ServicePricing from "../../component/service/service-pricing";

const gmbPackages = [
  {
    name: "Basic Tune-up",
    priceINR: 2999,
    priceUSD: 39,
    period: " / one-time",
    features: [
      "Google Business Profile Audit",
      "Primary/Secondary Category Setup",
      "Description & Service List Update",
      "15 Core Citations Created",
      "NAP Consistency Verification"
    ],
    ctaText: "Get Started"
  },
  {
    name: "3-Pack Dominator (Monthly GMB)",
    priceINR: 4999,
    priceUSD: 59,
    period: " / month",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Basic Setup",
      "Weekly Optimization Posts (Offers/Events)",
      "Review Generation Automation Setup",
      "Local Competitor Rank Tracking",
      "50+ New Local Citations Monthly",
      "Monthly Q&A Setup & Monitoring"
    ],
    ctaText: "Choose Dominator"
  },
  {
    name: "Multi-Location Brand",
    priceINR: 11999,
    priceUSD: 149,
    period: " / month",
    features: [
      "Bulk Location Profile Optimization",
      "Centralized Review Inbox Dashboard",
      "Location Storefinder Maps API Setup",
      "Corporate Citation Distributions",
      "Dedicated Local SEO Specialist"
    ],
    ctaText: "Contact Team"
  }
];

export const metadata = {
  title: "Google Business Profile Optimization Delhi — Local SEO & GMB | KODIT Agency",
  description: "Rank in Google Maps 3-Pack with KODIT Agency's expert GMB optimization in Delhi. NAP cleanup, citation building, review automation & weekly posts. Monthly GMB management from ₹4,999/mo. Results in 4-8 weeks.",
  keywords: [
    "Google Business Profile optimization Delhi",
    "GMB optimization agency Delhi",
    "Google Maps ranking Delhi",
    "local SEO agency Delhi NCR",
    "local 3-Pack ranking service India",
    "NAP consistency SEO Delhi",
    "citation building service India",
    "Google review generation Delhi",
    "local business SEO New Delhi",
    "GBP management service Noida Gurugram",
    "Google Business Profile cost Delhi"
  ],
  openGraph: {
    title: "Google Business Profile Optimization Delhi | KODIT Agency",
    description: "Rank in Google Maps 3-Pack with expert GMB optimization. NAP cleanup, local citations, review automation & weekly posts. From ₹4,999/month.",
    url: "https://kodit.agency/service/gmb-optimization",
    siteName: "KODIT Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kodit.agency/service/gmb-optimization",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Google Business Profile optimization cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency offers GMB optimization packages starting at ₹2,999 (one-time Basic Tune-up). Monthly GMB management starts at ₹4,999/month with the 3-Pack Dominator plan, which includes weekly posts, review automation, 50+ new citations monthly, and competitor rank tracking. Multi-location plans are ₹11,999/month."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to rank in the Google Maps 3-Pack in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Delhi NCR businesses see a noticeable increase in Google Maps visibility, direction requests, and phone calls within 2 to 4 weeks of initial GBP optimization and citation cleanup. Securing a consistent position in the Google Maps 3-Pack for competitive niches (clinics, salons, restaurants, real estate) typically takes 4 to 8 weeks of continuous review generation, citation building, and weekly profile posting."
      }
    },
    {
      "@type": "Question",
      "name": "What is NAP consistency and why does it matter for local SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAP stands for Name, Address, and Phone number. Having identical NAP data across the web is critical because Google uses it to verify your business location. Mismatched details, old phone numbers, or different addresses across directories confuse Google, lowering trust signals and dropping your local map rankings. KODIT Agency audits and aligns your NAP across 50+ local platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle review responses and ongoing GBP updates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. KODIT Agency provides full Google Business Profile management including: responding to customer reviews professionally within 24 hours, publishing weekly GMB posts (offers, updates, events), monitoring and answering user Q&As, uploading geocoded photos, and keeping operational hours accurate. All included in the monthly 3-Pack Dominator plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can you manage Google Business Profiles for multiple locations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Multi-Location Brand plan at ₹11,999/month covers bulk profile optimization, centralized review inbox management, Google Maps Storefinder API setup, corporate citation distribution, and a dedicated local SEO specialist — ideal for restaurant chains, clinic networks, and retail franchises across Delhi NCR."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Business Profile & Local SEO Services Delhi NCR",
  "alternateName": "GMB Optimization Agency Delhi",
  "provider": {
    "@type": "Organization",
    "name": "KODIT Agency",
    "url": "https://kodit.agency",
    "logo": "https://kodit.agency/kodit-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jahangirpuri",
      "addressRegion": "Delhi",
      "postalCode": "110033",
      "addressCountry": "IN"
    }
  },
  "serviceType": "Google Business Profile Optimization",
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ],
  "description": "Expert Google Business Profile optimization, local citation building, NAP alignment, and review automation to rank Delhi NCR businesses in the Google Maps 3-Pack. Monthly GMB management from ₹4,999.",
  "url": "https://kodit.agency/service/gmb-optimization",
  "offers": [
    {
      "@type": "Offer",
      "name": "GMB Basic Tune-up (One-time)",
      "price": "2999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "3-Pack Dominator Monthly GMB Management",
      "price": "4999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Multi-Location Brand GMB Management",
      "price": "11999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kodit.agency" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kodit.agency/service" },
    { "@type": "ListItem", "position": 3, "name": "GMB Optimization", "item": "https://kodit.agency/service/gmb-optimization" }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How KODIT Agency Optimizes Your Local Maps Rankings in Delhi",
  "description": "Step-by-step system to audit, fix NAP issues, build citation equity, and automate customer reviews to rank Delhi businesses in Google Maps 3-Pack.",
  "totalTime": "P60D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "4999" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "GBP Audit & Keyword Setup",
      "text": "We review your Google Business Profile completeness, analyze local competitors, configure primary/secondary business categories, and identify target search keywords for your Delhi area.",
      "url": "https://kodit.agency/service/gmb-optimization#step1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "NAP Verification & Cleanup",
      "text": "We audit and correct inconsistent Name, Address, and Phone data across 50+ online directories, ensuring Google can confidently verify your business location.",
      "url": "https://kodit.agency/service/gmb-optimization#step2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Local Citation Building",
      "text": "We submit accurate business listings to high-authority local and industry-specific directory sites, building citation equity signals that boost your Maps ranking.",
      "url": "https://kodit.agency/service/gmb-optimization#step3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Review Automation & Weekly Posts",
      "text": "We set up automated review request systems (QR codes, SMS follow-ups) and publish weekly GMB posts with offers and updates to drive engagement and 3-Pack rankings.",
      "url": "https://kodit.agency/service/gmb-optimization#step4"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KODIT Agency — GMB Optimization Delhi",
  "description": "Expert Google Business Profile optimization agency in Delhi NCR. Monthly GMB management from ₹4,999. Rank in Google Maps 3-Pack within 4-8 weeks.",
  "url": "https://kodit.agency/service/gmb-optimization",
  "priceRange": "₹₹",
  "telephone": "+917428276525",
  "email": "koditagency@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jahangirpuri",
    "addressRegion": "Delhi",
    "postalCode": "110033",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 28.7320, "longitude": 77.1673 },
  "areaServed": ["Delhi", "New Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"]
};

export default function GMBPage() {
  return (
    <main className="det-root">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="sv-glow" />
      <div className="sv-orb sv-orb-1" />
      <div className="sv-orb sv-orb-2" />

      {/* Hero */}
      <section className="det-hero">
        <span className="det-tag">Service 03</span>
        <h1 className="det-title">
          Google Business Profile <em>Dominate Local Search.</em>
        </h1>
        <p className="det-subtitle">
          Your Google Maps listing is the first thing customers see when they search for your business. We optimize your profile, fix NAP inconsistencies, build local citations, and generate reviews so you own the local 3-Pack.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          Boost Your Local Ranking
        </Link>
      </section>

      {/* Grid Content */}
      <section className="det-grid">
        <div className="det-main">
          <div className="det-card">
            <h2 className="det-card-title">Your Google Maps Ranking is a Revenue Asset</h2>
            <p className="det-card-text" style={{ marginBottom: "20px" }}>
              Over 70% of local searches result in a store visit within 24 hours. Yet most businesses have incomplete profiles, wrong contact details across directories, and zero review generation strategy.
            </p>
            <p className="det-card-text">
              We treat your GBP as a high-value digital asset. From profile completeness audits to local citation cleanup and automated review requests, our process is designed to push you into the top 3 local results and keep you there.
            </p>
          </div>

          <div className="det-metrics-grid">
            <div className="det-metric-card">
              <div className="det-metric-value">Top 3</div>
              <div className="det-metric-label">Google Maps 3-Pack</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">4.8+</div>
              <div className="det-metric-label">Avg Client Rating</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">100%</div>
              <div className="det-metric-label">White Hat Local SEO</div>
            </div>
          </div>

          <div>
            <h2 className="det-card-title" style={{ marginBottom: "28px" }}>Our Local Domination System</h2>
            <div className="det-features">
              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Profile Optimization & Audit</h3>
                  <p className="det-card-text">We optimize every section of your GBP — categories, descriptions, services, Q&A, photos, and posts — to match exactly what Google looks for in top-ranking local profiles.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">NAP Consistency & Citation Building</h3>
                  <p className="det-card-text">We scan 50+ directories to find and fix Name, Address, and Phone inconsistencies, then build new citations on high-authority local platforms to boost your local relevance signals.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Review Generation System</h3>
                  <p className="det-card-text">We set up automated QR codes, SMS links, and email sequences that make it effortless for happy customers to leave 5-star reviews — the single strongest local ranking signal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="det-sidebar">
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Local SEO Arsenal</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">Google Business Profile</span>
              <span className="det-tech-pill">BrightLocal</span>
              <span className="det-tech-pill">Yext</span>
              <span className="det-tech-pill">Local Rank Tracker</span>
              <span className="det-tech-pill">Google Maps API</span>
              <span className="det-tech-pill">Whitespark</span>
            </div>
          </div>
          <div className="det-card" style={{ background: "linear-gradient(135deg, #1e1310, #111)" }}>
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Free GMB Scan</h4>
            <p className="det-card-text" style={{ marginBottom: "20px", fontSize: "14px" }}>
              We will scan your business listing for errors, duplicates, and ranking drops completely free of charge.
            </p>
            <Link href="/contact" className="det-tag" style={{ color: "#fff", textDecoration: "underline", margin: 0 }}>
              Scan My Profile Now &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="det-process-sec">
        <span className="det-tag">Workflow</span>
        <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Our Optimization Process</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num">01</div>
            <h3 className="det-process-card-title">Profile Audit</h3>
            <p className="det-card-text">We review your current ranking, keyword categorization, photo tags, and competitor listing profiles in detail.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">02</div>
            <h3 className="det-process-card-title">NAP Cleanup</h3>
            <p className="det-card-text">We scan 50+ business directories to find, clean, and resolve mismatched address or phone details for ranking consistency.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">03</div>
            <h3 className="det-process-card-title">Optimization & Citations</h3>
            <p className="det-card-text">We rewrite business descriptions, publish local geo-tagged images, and build new citations on local authority sites.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">04</div>
            <h3 className="det-process-card-title">Ongoing Growth</h3>
            <p className="det-card-text">We schedule weekly GBP updates, set up automated customer review sequences, and track your local map ranks monthly.</p>
          </div>
        </div>
      </section>

      <ServicePricing packages={gmbPackages} />



      {/* FAQ Section */}
      <section className="det-faq-wrap">
        <div className="det-faq-grid">
          <div>
            <span className="det-tag">FAQs</span>
            <h2 className="det-title" style={{ fontSize: "36px" }}>Common Questions</h2>
            <p className="det-card-text">Everything you need to know about Google Business Profile optimization.</p>
          </div>
          <div className="det-faq-list">
            <div className="det-faq-item">
              <h3 className="det-faq-q">How long does it take to rank in the Google Maps 3-Pack?</h3>
              <p className="det-faq-a">At KODIT Agency, most local businesses in Delhi NCR observe a noticeable increase in Google Maps visibility, direction requests, and phone calls within 2 to 4 weeks of completing our initial profile optimizations and citation cleanup. However, securing a consistent position in the coveted Google Maps 3-Pack within competitive niches (such as clinics, salons, real estate, or restaurants) typically takes between 4 to 8 weeks of continuous review generation, citation building, and profile posting.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">What is NAP consistency and why does it matter for local SEO?</h3>
              <p className="det-faq-a">NAP stands for Name, Address, and Phone number. Having accurate and identical NAP data distributed across the web is critical because search engine crawlers rely on this structured data to verify your physical business location. Mismatched details, old phone numbers, or slightly different addresses across directories confuse Google, lowering trust signals and dropping your local map rankings. We audit and align your details across 50+ local platforms.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Do you handle review responses and ongoing GBP updates?</h3>
              <p className="det-faq-a">Yes, KODIT Agency provides full Google Business Profile management. This includes responding to customer reviews professionally within 24 hours, publishing weekly GMB posts (offers, updates, and events), monitoring and answering user Q&As, uploading high-resolution geocoded photos of your location, and keeping operational hours and product lists accurate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="sv-cta sv-container">
        <div className="sv-cta-inner">
          <div className="sv-cta-orb" />
          <h2 className="sv-cta-title">Ready to Own Your Local Market?</h2>
          <p className="sv-cta-sub">
            Dominate Google Maps and turn local searchers into paying customers. Get a free GBP audit from the KODIT team.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Get a Free GBP Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
