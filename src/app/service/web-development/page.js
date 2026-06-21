import Link from "next/link";
import "../service.css";
import "../service-detail.css";
import ServicePricing from "../../component/service/service-pricing";

const webDevPackages = [
  {
    name: "Startup Website",
    priceINR: 9999,
    priceUSD: 119,
    period: " / one-time",
    features: [
      "Up to 5 Pages Custom Layout",
      "Next.js & Tailwind CSS",
      "Fully Responsive Design",
      "Basic SEO + Schema Markup",
      "Delivery in 10-14 Days"
    ],
    ctaText: "Get Started"
  },
  {
    name: "E-Commerce / Corporate",
    priceINR: 17999,
    priceUSD: 215,
    period: " / one-time",
    featured: true,
    badge: "Most Popular",
    features: [
      "Full E-Commerce Store (Unlimited Products)",
      "Payment Gateway Integration",
      "Advanced GSAP Animations",
      "On-page Schema & Core Web Vitals",
      "Contact Form & Lead Routing",
      "30 Days Priority Support"
    ],
    ctaText: "Choose Growth"
  },
  {
    name: "Enterprise / SaaS",
    priceINR: 34999,
    priceUSD: 419,
    period: " / one-time",
    features: [
      "Unlimited Pages & Complex Apps",
      "Full Stack MERN Architecture",
      "Custom Database & Payment Gateway",
      "Admin Panel & Analytics Integration",
      "Continuous Deployment Pipeline"
    ],
    ctaText: "Get Quote"
  }
];

export const metadata = {
  title: "Custom Website Development Delhi — React, Next.js, MERN Stack | KODIT Agency",
  description: "KODIT Agency is Delhi's top web development company. We build custom websites & e-commerce stores using React, Next.js, Node.js, and MongoDB. Startup websites from ₹9,999, E-Commerce from ₹17,999. Delivered in 14 days. SEO-optimised & mobile-first.",
  keywords: [
    "web development company Delhi",
    "custom website development Delhi",
    "React Next.js developer Delhi",
    "Node.js web development India",
    "e-commerce website development Delhi",
    "MongoDB Express website Delhi",
    "website design company New Delhi",
    "full stack web developer Delhi",
    "MERN stack development Delhi",
    "affordable website development Delhi NCR",
    "website development price Delhi",
    "best web development agency Noida Gurugram",
    "HTML CSS JS developer Delhi"
  ],
  openGraph: {
    title: "Custom Website & E-Commerce Development Delhi | KODIT Agency",
    description: "Hand-crafted websites built with React, Next.js, Node.js & MongoDB. Startup sites from ₹9,999, E-Commerce from ₹17,999. 14-day delivery, lightning-fast, SEO-ready.",
    url: "https://kodit.agency/service/web-development",
    siteName: "KODIT Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kodit.agency/service/web-development",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency offers custom website development in Delhi starting at ₹9,999 for a 5-page startup website. E-commerce and corporate websites start at ₹17,999. Enterprise and SaaS applications start at ₹34,999. All prices include responsive design, basic SEO setup, and deployment. There are no hidden monthly platform fees — you own the code."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a custom website in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency delivers standard 5-page business websites within 10 to 14 business days. E-commerce stores and corporate websites typically take 3 to 4 weeks. For complex full-stack applications with custom databases, payment gateways, and admin panels built on MERN stack (MongoDB, Express, React, Node.js), timelines range from 4 to 8 weeks depending on scope."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use WordPress, Shopify, or Elementor for website development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. KODIT Agency does not build on WordPress, Shopify, or visual page builders like Elementor. We hand-code every website using React.js and Next.js for maximum page speed, security, and scalability. For content management, we integrate headless CMS platforms like Sanity.io. Full-stack applications are powered by Node.js, Express, and MongoDB."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website rank on Google and be mobile-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every website KODIT Agency builds is designed mobile-first and optimized for Core Web Vitals. We configure XML sitemaps, robots.txt for AI crawlers (GPTBot, PerplexityBot), JSON-LD schemas (BreadcrumbList, Organization, LocalBusiness, HowTo, FAQPage), and deploy to high-speed hosting on Vercel or Render for sub-1-second load times."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build an e-commerce website with payment gateway in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our E-Commerce / Corporate package starting at ₹17,999 includes a full product catalog, cart system, Razorpay or Stripe payment gateway integration, order management, and responsive design. We build custom e-commerce using Next.js (no Shopify dependency) so you pay no platform commission fees."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best web development company in Delhi NCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency is one of Delhi NCR's top-rated web development companies, specializing in custom React, Next.js, and MERN stack websites. Unlike generic agencies, we hand-code every project, implement expert SEO and schema markup from day one, and deliver in as little as 14 days. We serve clients across Delhi, Noida, and Gurugram."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Website Development Delhi NCR",
  "alternateName": "Web Design Company Delhi",
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
  "serviceType": "Web Development",
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ],
  "description": "Custom full-stack web development in Delhi using React, Next.js, Node.js, MongoDB. Startup websites from ₹9,999, E-Commerce from ₹17,999. Mobile-first, SEO-optimised, Core Web Vitals ready.",
  "url": "https://kodit.agency/service/web-development",
  "offers": [
    {
      "@type": "Offer",
      "name": "Startup Website Package",
      "price": "9999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "E-Commerce / Corporate Website",
      "price": "17999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Enterprise / SaaS Application",
      "price": "34999",
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
    { "@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://kodit.agency/service/web-development" }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How KODIT Agency Builds a Custom Website in Delhi",
  "description": "Step-by-step process for strategy, UI/UX design, Next.js development, and deploying high-performance websites for Delhi NCR businesses.",
  "totalTime": "P14D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "9999" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery & Copywriting Strategy",
      "text": "We plan the sitemap, define user journeys, map keywords, and write high-converting copy for every page before design begins.",
      "url": "https://kodit.agency/service/web-development#step1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "UI/UX Design",
      "text": "We design pixel-perfect, brand-aligned interface layouts with modern aesthetics, clear CTAs, and conversion-focused hierarchy.",
      "url": "https://kodit.agency/service/web-development#step2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Next.js & React Development",
      "text": "We hand-code clean React and Next.js frontend with GSAP animations, responsive Tailwind styles, and server-side rendering for speed.",
      "url": "https://kodit.agency/service/web-development#step3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Technical SEO, GEO & Deployment",
      "text": "We configure JSON-LD schemas, sitemap, robots.txt for AI crawlers, optimize Core Web Vitals, and deploy to Vercel with zero-downtime pipelines.",
      "url": "https://kodit.agency/service/web-development#step4"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KODIT Agency — Web Development Delhi",
  "description": "Top custom website development agency in Delhi NCR. React, Next.js, MERN stack websites for businesses. Startup sites from ₹9,999, E-Commerce from ₹17,999.",
  "url": "https://kodit.agency/service/web-development",
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

export default function WebDevelopmentPage() {
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
        <span className="det-tag">Service 01</span>
        <h1 className="det-title">
          Web Development <em>Built for Growth.</em>
        </h1>
        <p className="det-subtitle">
          No slow templates, no bloated page builders. We code custom, lightning-fast React and Next.js websites that load under a second, dominate on Google, and convert visitors into high-value leads.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          Start Your Project
        </Link>
      </section>

      {/* Grid Content */}
      <section className="det-grid">
        <div className="det-main">
          {/* Card: Why it matters */}
          <div className="det-card">
            <h2 className="det-card-title">Why Web Speed & Architecture is Your Secret Weapon</h2>
            <p className="det-card-text" style={{ marginBottom: "20px" }}>
              Most digital agencies build on cheap, bloated WordPress setups. These sites take 5+ seconds to load, causing 40% of visitors to bounce before the page even renders.
            </p>
            <p className="det-card-text">
              We handcraft our websites using the MERN stack (MongoDB, Express.js, React, Node.js) with Next.js for server-side rendering and static site generation. Combined with optimized media pipelines, Tailwind CSS for responsive design, and Bootstrap for rapid prototyping, the result is load times under 2.6 seconds, near-perfect SEO scores, and an interface that responds instantly to user interaction.
            </p>
          </div>

          {/* Metrics */}
          <div className="det-metrics-grid">
            <div className="det-metric-card">
              <div className="det-metric-value">&lt; 2.6s</div>
              <div className="det-metric-label">Avg Load Time</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">14 Days</div>
              <div className="det-metric-label">Average Delivery</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">100%</div>
              <div className="det-metric-label">Mobile Responsive</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="det-card-title" style={{ marginBottom: "28px" }}>Our Core Engineering Focus</h2>
            <div className="det-features">
              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                </div>
                <div>
          <h3 className="det-feature-title">Stitch to React Precision</h3>
                   <p className="det-card-text">We translate pixel-perfect UI/UX layouts from Stitch into clean, production-ready React code. No templates, no shortcuts.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Full-Stack MERN Development</h3>
                  <p className="det-card-text">We build complete web applications using MongoDB for databases, Express.js and Node.js for the backend, and React for the frontend — giving you a modern, scalable architecture from day one.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Responsive Design & SEO Architecture</h3>
                  <p className="det-card-text">Every site is built mobile-first with HTML5 semantic structure, CSS Grid/Flexbox, and Bootstrap-compatible layouts. We bake technical SEO, schema markup, and performance optimization into the build process from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="det-sidebar">
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Our Tech Stack</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">HTML5 / CSS3</span>
              <span className="det-tech-pill">JavaScript (ES6+)</span>
              <span className="det-tech-pill">React.js</span>
              <span className="det-tech-pill">Next.js</span>
              <span className="det-tech-pill">Node.js</span>
              <span className="det-tech-pill">Express.js</span>
              <span className="det-tech-pill">MongoDB</span>
              <span className="det-tech-pill">Tailwind CSS</span>
              <span className="det-tech-pill">Bootstrap</span>
              <span className="det-tech-pill">GSAP</span>
              <span className="det-tech-pill">Stitch</span>
              <span className="det-tech-pill">Vercel / Render</span>
              <span className="det-tech-pill">Sanity CMS</span>
            </div>
          </div>

          <div className="det-card" style={{ background: "linear-gradient(135deg, #1e1310, #111)" }}>
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Fast-Track Project</h4>
            <p className="det-card-text" style={{ marginBottom: "20px", fontSize: "14px" }}>
              Need a project delivered urgently? We offer expedited development pipelines for high-priority projects. Talk to our leads.
            </p>
            <Link href="/contact" className="det-tag" style={{ color: "#fff", textDecoration: "underline", margin: 0 }}>
              Enquire About Fast-Track &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="det-process-sec">
        <span className="det-tag">Workflow</span>
        <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Our Development Blueprint</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num">01</div>
            <h3 className="det-process-card-title">Strategy & Copy</h3>
            <p className="det-card-text">Meticulous planning of your site structure, copy, and buyer-journeys. We frame high-converting content outlines before designing.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">02</div>
            <h3 className="det-process-card-title">UI Design in Stitch</h3>
            <p className="det-card-text">Visual design of custom layouts in Stitch tailored to your brand style, ensuring breathtaking aesthetics before coding starts.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">03</div>
            <h3 className="det-process-card-title">Next.js Development</h3>
            <p className="det-card-text">Hand-coding with high performance, GSAP micro-interactions, complete mobile responsiveness, and standard technical SEO compliance.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">04</div>
            <h3 className="det-process-card-title">Deploy & Support</h3>
            <p className="det-card-text">Rigorous page speed audits, domain mapping, custom database setups, training, and 30-day post-launch support.</p>
          </div>
        </div>
      </section>

      <ServicePricing packages={webDevPackages} />


      {/* FAQ Section */}
      <section className="det-faq-wrap">
        <div className="det-faq-grid">
          <div>
            <span className="det-tag">FAQs</span>
            <h2 className="det-title" style={{ fontSize: "36px" }}>Common Questions</h2>
            <p className="det-card-text">Here is everything you need to know about our web development process.</p>
          </div>
          <div className="det-faq-list">
            <div className="det-faq-item">
              <h3 className="det-faq-q">How long does it take to build a custom website in Delhi?</h3>
              <p className="det-faq-a">At KODIT Agency, custom landing pages and standard 5-to-12 page business websites are typically delivered within 10 to 14 business days. For more complex full-stack web applications featuring bespoke databases (MongoDB), secure payment gateways, administrative control panels, or tailored e-commerce systems built on React, Next.js, and Node.js, the project duration usually ranges between 3 to 6 weeks depending on the exact scope and functional complexity.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Do you use WordPress, Shopify, or Elementor?</h3>
              <p className="det-faq-a">No, KODIT Agency does not build on WordPress, Shopify, or visual page builders like Elementor. To guarantee maximum page speed, strong security, and robust scalability, we hand-code websites using React.js and Next.js for the frontend, styled with Tailwind CSS or Bootstrap. For dynamic content management, we integrate headless CMS platforms like Sanity.io or Prismic, while full-stack software applications are powered by Node.js, Express, and MongoDB backends.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Will my website be mobile-friendly and SEO-optimised?</h3>
              <p className="det-faq-a">Yes, every website built by KODIT Agency is designed mobile-first and optimized for speed and accessibility using modern responsive layout systems like HTML5, CSS Flexbox/Grid, and Tailwind CSS. We perform an exhaustive technical SEO and GEO checklist prior to deployment, configuring dynamic XML sitemaps, search engine friendly robots.txt rules (optimizing for AI crawlers like GPTBot and PerplexityBot), JSON-LD schemas (such as BreadcrumbList, Organization, LocalBusiness, and HowTo), optimized Core Web Vitals, and secure hosting setups on Vercel or Render.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Can you build a custom full-stack web application with database integration?</h3>
              <p className="det-faq-a">Absolutely. KODIT Agency specializes in MERN stack development (MongoDB, Express.js, React.js, Node.js). We build bespoke software systems including patient appointment boards for clinics, student directories for coaching centers, custom CRM dashboards, multi-role SaaS platforms, and automated workflow integrations using tools like n8n, ensuring secure JWT/OAuth authentications and scalable API performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="sv-cta sv-container">
        <div className="sv-cta-inner">
          <div className="sv-cta-orb" />
          <h2 className="sv-cta-title">Let&apos;s Build a High-Performance Website</h2>
          <p className="sv-cta-sub">
            Convert visitors into recurring clients. Reach out to Ayush and team for a custom quote today.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
