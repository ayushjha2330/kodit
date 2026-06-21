import Link from "next/link";
import "../service.css";
import "../service-detail.css";
import ServicePricing from "../../component/service/service-pricing";

const smmPackages = [
  {
    name: "Brand Starter",
    priceINR: 7999,
    priceUSD: 95,
    period: " / month",
    features: [
      "12 Custom Posts Per Month",
      "Instagram & Facebook Management",
      "Basic Creative Copywriting",
      "Grid Planning & Scheduling",
      "Monthly Engagement Summary"
    ],
    ctaText: "Get Started"
  },
  {
    name: "Accelerated Growth",
    priceINR: 14999,
    priceUSD: 179,
    period: " / month",
    featured: true,
    badge: "Most Popular",
    features: [
      "24 Posts + 6 Reels/Videos Monthly",
      "Insta, FB, LinkedIn & YouTube Shorts",
      "Premium Graphic Templates",
      "Community DM/Comment Management",
      "Influencer Outreach Setup",
      "In-Depth Monthly Reports"
    ],
    ctaText: "Choose Growth"
  },
  {
    name: "Premium Omnichannel",
    priceINR: 29999,
    priceUSD: 359,
    period: " / month",
    features: [
      "Daily High-Quality Creative Assets",
      "12 Video Reels Produced Monthly",
      "Paid Social Ads Campaign Management",
      "Brand Reputation Monitoring",
      "Dedicated Content Strategist"
    ],
    ctaText: "Get Retainer"
  }
];

export const metadata = {
  title: "Social Media Marketing Agency Delhi — Instagram, Facebook, LinkedIn | KODIT",
  description:
    "KODIT Agency is Delhi's top social media marketing agency. We manage Instagram, Facebook, LinkedIn, and YouTube for Delhi NCR businesses. Custom content calendars, Reels, carousels, community management, and monthly analytics — starting at ₹7,999/month.",
  keywords: [
    "social media marketing agency Delhi",
    "Instagram marketing services Delhi",
    "Facebook ads management Delhi",
    "LinkedIn marketing India",
    "social media manager Delhi NCR",
    "content creation agency Delhi",
    "Reels and short video marketing India",
    "social media growth strategy Delhi",
    "digital marketing agency New Delhi",
    "affordable social media management Delhi",
    "best social media agency Noida Gurugram",
    "social media packages India"
  ],
  openGraph: {
    title: "Social Media Marketing Agency Delhi | KODIT Agency",
    description:
      "Custom content calendars, platform-specific creative (Reels, carousels, stories), community management, and analytics for Instagram, Facebook, LinkedIn, and YouTube.",
    url: "https://kodit.agency/service/social-media-marketing",
    siteName: "KODIT Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kodit.agency/service/social-media-marketing",
  },
};

/* ─── Structured Data (SEO + AEO + GEO) ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many posts will KODIT Agency create per month for our social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At KODIT Agency, our Accelerated Growth social media package delivers 30+ highly-curated post layouts every month — comprising 6 to 8 Reels or short-form videos and 22-24 carousel or static posts, plus daily Instagram/Facebook stories to maintain maximum brand touchpoints."
      }
    },
    {
      "@type": "Question",
      "name": "Which social media platforms does KODIT Agency manage in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manage Instagram, Facebook, LinkedIn, and YouTube (including Shorts) for businesses across Delhi, Noida, and Gurugram. KODIT Agency customizes content formats and copywriting tone for each platform's audience — professional B2B for LinkedIn, aesthetic Reels for Instagram, and local community ads for Facebook."
      }
    },
    {
      "@type": "Question",
      "name": "How much does social media management cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency offers social media management starting at ₹7,999 per month for the Brand Starter package (Instagram + Facebook, 12 posts). The Accelerated Growth plan is ₹14,999/month and includes Reels, LinkedIn, YouTube Shorts, and community management. Premium Omnichannel retainers start at ₹29,999/month."
      }
    },
    {
      "@type": "Question",
      "name": "How do you measure social media success?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We track business-oriented KPIs beyond follower counts: engagement rates, total reach & impressions, website CTR from social, WhatsApp/DM enquiries, and monthly conversion data — all delivered in a transparent dashboard report."
      }
    },
    {
      "@type": "Question",
      "name": "Can KODIT Agency help with Instagram Reels and video content creation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Growth and Omnichannel plans include scripting, filming assistance guidance, and professional editing of Reels and short-form videos. We produce 6-12 video Reels per month, fully captioned and audio-optimized for maximum reach on Instagram and YouTube Shorts."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing Agency Delhi NCR",
  "alternateName": "SMM Agency Delhi",
  "provider": {
    "@type": "Organization",
    "name": "KODIT Agency",
    "url": "https://kodit.agency",
    "logo": "https://kodit.agency/kodit-logo.png",
    "telephone": "+917428276525",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jahangirpuri",
      "addressRegion": "Delhi",
      "postalCode": "110033",
      "addressCountry": "IN"
    }
  },
  "serviceType": "Social Media Marketing",
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ],
  "description": "Expert social media management for Delhi NCR businesses. KODIT Agency creates custom content calendars, Reels, carousels, community management, paid ads, and monthly growth reports for Instagram, LinkedIn, Facebook, and YouTube.",
  "url": "https://kodit.agency/service/social-media-marketing",
  "offers": [
    {
      "@type": "Offer",
      "name": "Brand Starter Social Media Package",
      "price": "7999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Accelerated Growth Social Media Package",
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
    { "@type": "ListItem", "position": 3, "name": "Social Media Marketing", "item": "https://kodit.agency/service/social-media-marketing" }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How KODIT Agency Runs a Social Media Growth Campaign",
  "description": "Step-by-step framework KODIT Agency uses to discover target audiences, design graphic templates, build content calendars, and analyze performance for Delhi NCR businesses.",
  "totalTime": "P30D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "7999" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Target Audience & Competitor Audit",
      "text": "We analyze competitor content patterns, customer behavior trends, and platform algorithms to identify the best growth angles for your brand.",
      "url": "https://kodit.agency/service/social-media-marketing#step1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Brand Grid Design & Content Pillars",
      "text": "We create custom brand layout templates, define visual identity, choose content pillars, and design Reels scripts aligned with your business goals.",
      "url": "https://kodit.agency/service/social-media-marketing#step2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Content Calendar & Client Approval",
      "text": "We draft all posts, edit Reels, write captions, and share the full monthly content calendar with clients for review and approval before publishing.",
      "url": "https://kodit.agency/service/social-media-marketing#step3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Publishing, Community Management & Analytics",
      "text": "We publish content at peak engagement times, manage comments and DMs daily, run ad setups when required, and deliver detailed monthly analytics reports.",
      "url": "https://kodit.agency/service/social-media-marketing#step4"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KODIT Agency — Social Media Marketing Delhi",
  "description": "Top social media marketing agency in Delhi offering Instagram, Facebook, LinkedIn, and YouTube management for businesses in Delhi NCR.",
  "url": "https://kodit.agency/service/social-media-marketing",
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
  "areaServed": ["Delhi", "New Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Social Media Marketing Packages Delhi",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Starter Social Media Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accelerated Growth Social Media Package" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Omnichannel Social Media Retainer" } }
    ]
  }
};

export default function SocialMediaPage() {
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
        <span className="det-tag">Service 05</span>
        <h1 className="det-title">
          Social Media <em>That Drives Real Engagement.</em>
        </h1>
        <p className="det-subtitle">
          Posting randomly on social media does nothing for your business. KODIT Agency builds data-driven content strategies, designs platform-specific creative, manages communities, and delivers monthly growth reports tied to real business metrics — for businesses across Delhi, Noida &amp; Gurugram.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          Grow Your Social Presence
        </Link>
      </section>

      {/* Grid Content */}
      <section className="det-grid">
        <div className="det-main">
          <div className="det-card">
            <h2 className="det-card-title">Content is King — Strategy is the Crown</h2>
            <p className="det-card-text" style={{ marginBottom: "20px" }}>
              Most Delhi businesses post sporadically with no clear content pillars, target audience understanding, or performance tracking. This results in low engagement, zero conversions, and wasted time.
            </p>
            <p className="det-card-text">
              We build comprehensive social media strategies around your business goals. Every post serves a purpose — whether it is brand awareness, community engagement, or direct lead generation. Our designers create platform-optimized visuals and our community managers engage with your audience daily across Instagram, Facebook, LinkedIn, and YouTube.
            </p>
          </div>

          <div className="det-metrics-grid">
            <div className="det-metric-card">
              <div className="det-metric-value">30+</div>
              <div className="det-metric-label">Posts Per Month</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">3x</div>
              <div className="det-metric-label">Avg Reach Growth</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">4</div>
              <div className="det-metric-label">Platforms Managed</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">100%</div>
              <div className="det-metric-label">Custom Content</div>
            </div>
          </div>

          <div>
            <h2 className="det-card-title" style={{ marginBottom: "28px" }}>Our Social Growth Engine</h2>
            <div className="det-features">
              <div className="det-feature-item" id="step1">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Content Strategy &amp; Calendar Planning</h3>
                  <p className="det-card-text">We map out entire months of content in advance — including Reels, carousels, static posts, and stories — aligned with your brand voice, campaign goals, and seasonal opportunities.</p>
                </div>
              </div>

              <div className="det-feature-item" id="step2">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /><line x1="17" y1="17" x2="22" y2="17" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">High-Quality Content Production</h3>
                  <p className="det-card-text">Our designers and video editors create scroll-stopping Reels, educational carousel posts, professional graphics, and short-form videos tailored to each platform's best practices and Delhi audience trends.</p>
                </div>
              </div>

              <div className="det-feature-item" id="step3">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Community Management &amp; Analytics</h3>
                  <p className="det-card-text">We engage with your audience daily — responding to comments and DMs, monitoring brand mentions, and analyzing engagement data to continuously refine our content approach with monthly transparent reports.</p>
                </div>
              </div>

              <div className="det-feature-item" id="step4">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Paid Social Ads &amp; Influencer Campaigns</h3>
                  <p className="det-card-text">We run targeted Meta and LinkedIn ad campaigns for Delhi NCR audiences, and connect brands with relevant micro-influencers for authentic reach expansion and community building.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="det-sidebar">
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Platforms We Manage</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">Instagram</span>
              <span className="det-tech-pill">Facebook</span>
              <span className="det-tech-pill">LinkedIn</span>
              <span className="det-tech-pill">YouTube Shorts</span>
              <span className="det-tech-pill">Google Business</span>
              <span className="det-tech-pill">Pinterest</span>
            </div>
          </div>
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Tools We Use</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">Meta Business Suite</span>
              <span className="det-tech-pill">Later</span>
              <span className="det-tech-pill">Canva Pro</span>
              <span className="det-tech-pill">CapCut</span>
              <span className="det-tech-pill">Sprout Social</span>
              <span className="det-tech-pill">Google Analytics 4</span>
            </div>
          </div>
          <div className="det-card" style={{ background: "linear-gradient(135deg, #1e1310, #111)" }}>
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Custom Campaigns</h4>
            <p className="det-card-text" style={{ marginBottom: "20px", fontSize: "14px" }}>
              Looking for influencer marketing activations, brand launches, or high-budget ad setups? Let&apos;s design custom operations.
            </p>
            <Link href="/contact" className="det-tag" style={{ color: "#fff", textDecoration: "underline", margin: 0 }}>
              Launch Custom Campaign &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="det-process-sec">
        <span className="det-tag">Workflow</span>
        <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>How We Grow Your Social Presence</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num">01</div>
            <h3 className="det-process-card-title">Audience Research</h3>
            <p className="det-card-text">We deep-dive into your target demographics, competitor social footprints, and trending formats to find growth angles specific to your Delhi NCR market.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">02</div>
            <h3 className="det-process-card-title">Brand Visual Identity</h3>
            <p className="det-card-text">We define core content pillars, design custom brand grid templates, and build a consistent visual language that stands out on every feed.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">03</div>
            <h3 className="det-process-card-title">Creation &amp; Approvals</h3>
            <p className="det-card-text">We write captions, edit Reels, schedule carousels, and share the full calendar with clients for approval before anything goes live.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">04</div>
            <h3 className="det-process-card-title">Publish, Engage &amp; Report</h3>
            <p className="det-card-text">We post at optimal times, manage community DMs, optimize hashtags, run ad campaigns, and deliver detailed monthly growth analytics reports.</p>
          </div>
        </div>
      </section>

      {/* Why Choose KODIT for Social Media */}
      <section className="det-process-sec" style={{ background: "rgba(232,77,14,0.04)", borderTop: "1px solid rgba(232,77,14,0.12)" }}>
        <span className="det-tag">Why KODIT</span>
        <h2 className="det-title" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>Why Delhi Businesses Choose KODIT Agency for Social Media</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num" style={{ fontSize: "28px" }}>🎯</div>
            <h3 className="det-process-card-title">Delhi-First Strategy</h3>
            <p className="det-card-text">We understand Delhi NCR market trends, local seasonal events, and audience behavior — our content is culturally relevant and commercially driven.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num" style={{ fontSize: "28px" }}>📊</div>
            <h3 className="det-process-card-title">100% Transparent Reporting</h3>
            <p className="det-card-text">Every month you receive a detailed analytics dashboard showing real reach, engagement, website clicks, and lead conversions — no vanity metrics.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num" style={{ fontSize: "28px" }}>✏️</div>
            <h3 className="det-process-card-title">All Original Content</h3>
            <p className="det-card-text">No stock photos, no templates. Every graphic, caption, Reel, and story is created from scratch specifically for your brand and audience.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num" style={{ fontSize: "28px" }}>🚀</div>
            <h3 className="det-process-card-title">Platform Algorithm Experts</h3>
            <p className="det-card-text">Our team stays ahead of Instagram, LinkedIn, and YouTube algorithm updates to ensure your content always gets maximum organic reach.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <ServicePricing packages={smmPackages} />

      {/* FAQ Section */}
      <section className="det-faq-wrap">
        <div className="det-faq-grid">
          <div>
            <span className="det-tag">FAQs</span>
            <h2 className="det-title" style={{ fontSize: "36px" }}>Common Questions</h2>
            <p className="det-card-text">Everything you need to know about our social media marketing packages for Delhi NCR businesses.</p>
          </div>
          <div className="det-faq-list">
            <div className="det-faq-item">
              <h3 className="det-faq-q">How many posts will you create per month for our social media?</h3>
              <p className="det-faq-a">Our standard Accelerated Growth social media package delivers 30+ highly-curated post layouts every month — 6 to 8 Reels or short-form video segments (fully captioned and audio-synced) and 22 to 24 carousel slides or static graphic posts, supplemented by daily story uploads to maintain high brand touchpoints.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Which social media platforms do you manage?</h3>
              <p className="det-faq-a">We manage Instagram, Facebook, LinkedIn, and YouTube (including Shorts). Rather than copying content blindly across platforms, KODIT Agency customizes visual layouts and copywriting for each channel — professional B2B marketing for LinkedIn, visual aesthetic reels for Instagram, and local community ads for Facebook.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">How much does social media management cost in Delhi?</h3>
              <p className="det-faq-a">Our social media packages start at ₹7,999/month (Brand Starter — 12 posts, Instagram + Facebook). The most popular Accelerated Growth plan is ₹14,999/month and covers 30+ posts, Reels, LinkedIn, YouTube Shorts, and community management. Enterprise retainers start at ₹29,999/month.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">How do you measure social media success?</h3>
              <p className="det-faq-a">We look beyond basic follower counts to measure actual business growth. KODIT Agency tracks and reports key engagement rates, total impressions, website CTRs, link clicks, and direct business conversions (Instagram DMs, WhatsApp chats, and client phone calls) in a transparent monthly dashboard.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Do you also run paid social media ads?</h3>
              <p className="det-faq-a">Yes — our Premium Omnichannel plan includes Meta Ads (Instagram + Facebook) and LinkedIn ad campaign management. We design creatives, set targeting for Delhi NCR audiences, manage budgets, and optimize for lead conversions. Ad spend budget is separate from our management fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="sv-cta sv-container">
        <div className="sv-cta-inner">
          <div className="sv-cta-orb" />
          <h2 className="sv-cta-title">Ready to Grow Your Social Presence in Delhi?</h2>
          <p className="sv-cta-sub">
            Stop posting into the void. Get a custom social media strategy with high-quality content that actually engages your audience and drives real business leads.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Get a Free Social Media Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
