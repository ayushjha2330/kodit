import Link from "next/link";
import "../service.css";
import "../service-detail.css";
import ServicePricing from "../../component/service/service-pricing";

const seoPackages = [
  {
    name: "Local SEO / Kickstart",
    priceINR: 4999,
    priceUSD: 69,
    period: " / month",
    features: [
      "Up to 15 Target Keywords",
      "On-page Optimization",
      "Google Business Profile Setup",
      "Basic Schema Markup",
      "Monthly Traffic Report"
    ],
    ctaText: "Get Started"
  },
  {
    name: "National Growth",
    priceINR: 9999,
    priceUSD: 129,
    period: " / month",
    featured: true,
    badge: "Best ROI",
    features: [
      "Up to 40 Target Keywords",
      "Technical SEO Resolution",
      "Content Hub Development",
      "5 High-Authority Backlinks/mo",
      "Competitor Rank Analysis",
      "Detailed Monthly Strategy"
    ],
    ctaText: "Choose Growth"
  },
  {
    name: "E-Commerce SEO",
    priceINR: 14999,
    priceUSD: 199,
    period: " / month",
    features: [
      "Unlimited Product Optimization",
      "Advanced Schema for Products",
      "Core Web Vitals Audit & Fixes",
      "10+ Premium Link Placements",
      "Revenue & ROI Tracking"
    ],
    ctaText: "Get Quote"
  }
];

export const metadata = {
  title: "SEO Services Delhi — Rank Page 1 on Google | KODIT Agency",
  description: "KODIT Agency is Delhi's expert SEO agency. Technical audits, keyword research, schema markup, GEO (AI search optimization), link building & monthly reports. Local SEO from ₹4,999/mo. Most clients rank page 1 in 60-90 days.",
  keywords: [
    "SEO services Delhi",
    "SEO company Delhi NCR",
    "Google ranking services Delhi",
    "local SEO agency Delhi",
    "technical SEO audit India",
    "GEO generative engine optimization Delhi",
    "AEO answer engine optimization India",
    "keyword research and content strategy",
    "link building services India",
    "SEO for small business Delhi",
    "search engine optimisation Delhi",
    "SEO agency price Delhi",
    "affordable SEO packages Noida Gurugram"
  ],
  openGraph: {
    title: "SEO Services Delhi — Rank Page 1 on Google | KODIT Agency",
    description: "Expert SEO, GEO & AEO for Delhi businesses — technical audits, intent-mapped keywords, AI search optimization, link building, and monthly reports. From ₹4,999/month.",
    url: "https://kodit.agency/service/seo",
    siteName: "KODIT Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kodit.agency/service/seo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do SEO services cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency offers SEO packages in Delhi starting at ₹4,999/month for Local SEO (up to 15 keywords, Google Business Profile, on-page SEO). National Growth SEO is ₹9,999/month covering 40 keywords, content hubs, and backlinks. E-Commerce SEO starts at ₹14,999/month. All packages include monthly GA4 + Search Console reports."
      }
    },
    {
      "@type": "Question",
      "name": "How long until we see first-page Google rankings in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Initial keyword improvements and indexation fixes typically show within 30 days. Sustainable page-one rankings for competitive Delhi NCR keywords generally require 60 to 90 days of consistent white-hat SEO — including technical fixes, content optimization, and authority link building. Local SEO for service businesses often ranks faster due to lower competition."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee No. 1 rankings on Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No ethical SEO agency can guarantee permanent #1 rankings as Google's algorithm updates hundreds of times per year. KODIT Agency guarantees measurable organic traffic growth, improved keyword rankings, higher-quality backlinks, and transparent monthly reporting — with a focus on commercial-intent keywords that drive actual business leads."
      }
    },
    {
      "@type": "Question",
      "name": "What is GEO — Generative Engine Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO (Generative Engine Optimization) is the practice of optimizing your website to appear in AI-generated search results from tools like Google's AI Overviews, ChatGPT Search, Perplexity AI, and Gemini. KODIT Agency implements GEO by writing authoritative, citation-worthy content, implementing comprehensive structured data (JSON-LD schemas), optimizing robots.txt to allow AI crawlers (GPTBot, PerplexityBot), and building topical authority through content hubs."
      }
    },
    {
      "@type": "Question",
      "name": "What is AEO — Answer Engine Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO (Answer Engine Optimization) focuses on getting your content featured as direct answers in Google's featured snippets, People Also Ask boxes, and voice search results. KODIT Agency optimizes for AEO by implementing FAQPage JSON-LD schema, structuring content with clear question-and-answer formats, using HowTo markup, and writing concise authoritative answers that match user search intent."
      }
    },
    {
      "@type": "Question",
      "name": "What SEO reports will I receive every month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency provides transparent monthly SEO reports covering: keyword ranking changes, organic traffic growth (Google Analytics 4), Search Console impressions and CTR, backlinks built, Core Web Vitals scores, and direct lead conversions. You always know exactly what's happening with your SEO campaign."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO, GEO & AEO Services Delhi NCR",
  "alternateName": "Search Engine Optimization Agency Delhi",
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
  "serviceType": "Search Engine Optimisation",
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ],
  "description": "Expert SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) services in Delhi NCR. Keyword research, technical SEO, schema markup, content hubs, and authority link building. Local SEO from ₹4,999/month.",
  "url": "https://kodit.agency/service/seo",
  "offers": [
    {
      "@type": "Offer",
      "name": "Local SEO Kickstart Package",
      "price": "4999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "National Growth SEO Package",
      "price": "9999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "E-Commerce SEO Package",
      "price": "14999",
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
    { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://kodit.agency/service/seo" }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How KODIT Agency Executes a High-ROI SEO Campaign in Delhi",
  "description": "Step-by-step technical SEO, GEO, and AEO process used by KODIT Agency for Delhi NCR businesses to rank on page 1 within 60-90 days.",
  "totalTime": "P90D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "4999" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Technical SEO & Core Web Vitals Audit",
      "text": "We audit page speed, Core Web Vitals, canonical URLs, XML sitemap, and robots.txt. We configure AI crawler access (GPTBot, PerplexityBot) for GEO optimization.",
      "url": "https://kodit.agency/service/seo#step1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Keyword & Search Intent Mapping",
      "text": "We identify high-commercial-intent keywords for Delhi NCR, map them to target pages, and create a content strategy covering informational, navigational, and transactional queries.",
      "url": "https://kodit.agency/service/seo#step2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "On-Page Optimization & Structured Data",
      "text": "We optimize title tags, meta descriptions, heading hierarchy, internal linking, and implement rich JSON-LD schemas (FAQPage, HowTo, LocalBusiness, BreadcrumbList, Offer) for AEO and featured snippets.",
      "url": "https://kodit.agency/service/seo#step3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Authority Link Building & Monthly Reporting",
      "text": "We acquire contextually relevant, high-DA backlinks through editorial outreach. Monthly GA4 + Search Console reports show keyword rankings, traffic growth, and lead conversions.",
      "url": "https://kodit.agency/service/seo#step4"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KODIT Agency — SEO Services Delhi",
  "description": "Expert SEO, GEO, and AEO agency in Delhi NCR. Local SEO from ₹4,999/month. Technical audits, schema markup, link building for Delhi businesses.",
  "url": "https://kodit.agency/service/seo",
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

export default function SEOPage() {
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
        <span className="det-tag">Service 02</span>
        <h1 className="det-title">
          SEO built for <em>Real Revenue.</em>
        </h1>
        <p className="det-subtitle">
          Stop counting vanity metrics like generic traffic. We audit, research, and execute search campaigns targeting high-intent keywords that bring paying customers directly to your inbox.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          Start Ranking Today
        </Link>
      </section>

      {/* Grid Content */}
      <section className="det-grid">
        <div className="det-main">
          {/* Card: Why it matters */}
          <div className="det-card">
            <h2 className="det-card-title">Ranking on Google is Not About Luck — It's About Science</h2>
            <p className="det-card-text" style={{ marginBottom: "20px" }}>
              Most SEO companies copy-paste standard checklists, write AI content that Google immediately filters out, and buy cheap spammy backlinks that flag your domain.
            </p>
            <p className="det-card-text">
              Our strategy is built on solid data: thorough technical architecture audit, keyword intent mapping (uncovering exactly what terms users search when they want to buy), structured data/schema setup, and high-quality outreach to build real domain authority.
            </p>
          </div>

          {/* Metrics */}
          <div className="det-metrics-grid">
            <div className="det-metric-card">
              <div className="det-metric-value">60-90 Days</div>
              <div className="det-metric-label">Avg Ranking Boost</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">1.6x</div>
              <div className="det-metric-label">Avg Lead Growth</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">100%</div>
              <div className="det-metric-label">White Hat Process</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="det-card-title" style={{ marginBottom: "28px" }}>Our Search Optimization Engine</h2>
            <div className="det-features">
              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Keyword Intent Mapping</h3>
                  <p className="det-card-text">We filter keywords based on transaction intent, mapping user problems directly to your service pages for immediate conversions.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">On-Page Content & Authority</h3>
                  <p className="det-card-text">Writing detailed content hubs, optimizing title structures, headings, internal links, image sizes, and rendering speed.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">High-Quality Link Building</h3>
                  <p className="det-card-text">No cheap guest posts. We reach out to actual editorial sites in your niche to secure natural, authority-passing link associations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="det-sidebar">
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>SEO Arsenal</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">Ahrefs</span>
              <span className="det-tech-pill">Google Search Console</span>
              <span className="det-tech-pill">Screaming Frog</span>
              <span className="det-tech-pill">Google Analytics 4</span>
              <span className="det-tech-pill">Schema.org Creator</span>
              <span className="det-tech-pill">SEMrush</span>
            </div>
          </div>
          <div className="det-card" style={{ background: "linear-gradient(135deg, #1e1310, #111)" }}>
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Free Audit Report</h4>
            <p className="det-card-text" style={{ marginBottom: "20px", fontSize: "14px" }}>
              Get a manual 25-point technical SEO and keyword opportunities audit for your domain completely free.
            </p>
            <Link href="/contact" className="det-tag" style={{ color: "#fff", textDecoration: "underline", margin: 0 }}>
              Claim Your Free Audit &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="det-process-sec">
        <span className="det-tag">Workflow</span>
        <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Our SEO Process</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num">01</div>
            <h3 className="det-process-card-title">Technical Audit</h3>
            <p className="det-card-text">Resolving structural errors, crawl problems, speed bugs, and mobile index errors to prepare your site for Google.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">02</div>
            <h3 className="det-process-card-title">Intent Analysis</h3>
            <p className="det-card-text">Grouping keywords by searcher goals (Commercial, Informational, Transactional) to capture high-intent buyers.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">03</div>
            <h3 className="det-process-card-title">Content Hubs</h3>
            <p className="det-card-text">Developing topical maps and high-quality guides that establish search engine trust and topical authority.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">04</div>
            <h3 className="det-process-card-title">Link Acquisition</h3>
            <p className="det-card-text">Outreaching to authoritative journals, securing high-quality backlinks, and sharing monthly ranking reports.</p>
          </div>
        </div>
      </section>

      <ServicePricing packages={seoPackages} />



      {/* FAQ Section */}
      <section className="det-faq-wrap">
        <div className="det-faq-grid">
          <div>
            <span className="det-tag">FAQs</span>
            <h2 className="det-title" style={{ fontSize: "36px" }}>Common Questions</h2>
            <p className="det-card-text">Find detailed answers about our search engine optimization campaigns.</p>
          </div>
          <div className="det-faq-list">
            <div className="det-faq-item">
              <h3 className="det-faq-q">How long until we see first-page Google rankings?</h3>
              <p className="det-faq-a">At KODIT Agency, we typically see initial keyword ranking improvements and indexation fixes within 30 days due to immediate technical SEO corrections. However, achieving sustainable, page-one rankings for moderately to highly competitive target keywords in Delhi NCR and across India generally requires 60 to 90 days of consistent, white-hat search engine optimization effort, including keyword intent mapping and content optimization.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Do you guarantee No. 1 rankings on Google?</h3>
              <p className="det-faq-a">No professional or ethical digital marketing agency can guarantee a permanent #1 ranking on Google, as search algorithms undergo hundreds of updates every year. Instead, KODIT Agency guarantees to target transaction-oriented keywords with high commercial intent, clean up structural code issues, generate schema markups, audit core web vitals, and deliver measurable organic traffic and conversion growth.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">What SEO reports will I receive monthly?</h3>
              <p className="det-faq-a">KODIT Agency provides transparent monthly SEO reports. These reports contain detailed insights from Google Analytics 4 (GA4) and Google Search Console (GSC), highlighting keyword positioning trends, month-over-month organic traffic increases, domain authority and backlink profiles built, along with key performance indicator tracking for total business leads, form completions, and click-to-calls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="sv-cta sv-container">
        <div className="sv-cta-inner">
          <div className="sv-cta-orb" />
          <h2 className="sv-cta-title">Ready to Dominate Search Results?</h2>
          <p className="sv-cta-sub">
            Capture intent-driven leads as they search. Work with Nitin, Ayush, and our SEO experts today.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Get a Free SEO Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
