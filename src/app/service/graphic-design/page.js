import Link from "next/link";
import "../service.css";
import "../service-detail.css";
import ServicePricing from "../../component/service/service-pricing";

const graphicDesignPackages = [
  {
    name: "Identity Essentials",
    priceINR: 4999,
    priceUSD: 69,
    period: " / project",
    features: [
      "Custom Logo Design (3 Concepts)",
      "Primary & Secondary Typography",
      "Brand Color Palette Codes",
      "High-Res Vector Source Files",
      "Delivery in 7 Days"
    ],
    ctaText: "Get Started"
  },
  {
    name: "Premium Brand System",
    priceINR: 9999,
    priceUSD: 129,
    period: " / project",
    featured: true,
    badge: "Complete Identity",
    features: [
      "Logo Suite + Submarks (5 Concepts)",
      "Full Typography & Visual Hierarchy",
      "6 Custom Social Media Templates",
      "Stationery (Business Card/Letterhead)",
      "Comprehensive Brand Style Guide PDF",
      "Unlimited Creative Revisions"
    ],
    ctaText: "Choose Premium"
  },
  {
    name: "Creative Retainer",
    priceINR: 14999,
    priceUSD: 199,
    period: " / month",
    features: [
      "Monthly Creative Content Assets",
      "Unlimited Short-form Ad Creatives",
      "Pitch Deck/Capability Guide Updates",
      "Priority 24-48 Hour Turnaround",
      "Dedicated Art Director"
    ],
    ctaText: "Get Retainer"
  }
];

export const metadata = {
  title: "Logo Design & Brand Identity Services Delhi — KODIT Agency | Starting ₹4,999",
  description: "Professional logo design starting at ₹4,999 and full brand identity systems from ₹9,999 in Delhi NCR. KODIT Agency crafts logos, visual systems, social templates, and pitch decks that command authority. Serving Delhi, Noida, Gurugram, Faridabad, Ghaziabad.",
  keywords: [
    "logo design Delhi",
    "logo design cost Delhi",
    "brand identity design Delhi",
    "graphic design services Delhi NCR",
    "branding agency New Delhi",
    "affordable logo design Noida",
    "logo designer Gurugram",
    "brand identity agency Delhi",
    "social media graphic design India",
    "pitch deck design Delhi",
    "business card design Delhi",
    "visual identity agency Delhi NCR",
    "logo design 4999 Delhi",
    "brand design Faridabad Ghaziabad"
  ],
  openGraph: {
    title: "Logo Design & Brand Identity Services Delhi | Starting ₹4,999 | KODIT Agency",
    description: "Logo design from ₹4,999 and full brand identity systems from ₹9,999. Delhi NCR's trusted branding agency — serving Delhi, Noida, Gurugram, Faridabad, Ghaziabad.",
    url: "https://kodit.agency/service/graphic-design",
    siteName: "KODIT Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kodit.agency/service/graphic-design",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does logo design cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Logo design at KODIT Agency in Delhi starts at ₹4,999 (approximately $60 USD) for our Identity Essentials package, which includes 3 custom logo concepts, typography, color palette, and high-res vector source files delivered within 7 days. A full brand identity system with logo suite, social media templates, stationery, and style guide is available from ₹9,999. We serve clients across Delhi, Noida, Gurugram, Faridabad, and Ghaziabad."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a full brand identity package?",
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "At KODIT Agency, our premium brand identity system (₹9,999) includes 3 to 5 customized logo layout variations (primary, secondary, submarks, favicons), custom color palettes with HEX/RGB/CMYK values, typography scales (primary, secondary, body font pairings), design assets, 6 custom social media post/Reel templates, custom business cards, letterheads, and a comprehensive Brand Style Guide PDF outlining usage guidelines." 
      }
    },
    {
      "@type": "Question",
      "name": "How many design revisions do I get?",
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "We offer unlimited revisions during the initial creative refinement phases because client alignment is our priority. Most branding projects at KODIT Agency reach absolute satisfaction within 2 to 3 iterations. Our collaborative methodology involves presenting distinct conceptual pathways so you are in complete control of your brand's direction." 
      }
    },
    {
      "@type": "Question",
      "name": "Do I receive source files and full ownership?",
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "Yes, upon project completion and final approvals, KODIT Agency hands over 100% intellectual property ownership to the client. You receive organized, fully editable source files (in Stitch formats, Adobe Illustrator .ai, Photoshop .psd) along with clean production-ready export files (SVG vectors, print-ready PDF, high-res transparent PNG, and JPG layouts)." 
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best branding agency in Delhi NCR for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency is a top-rated branding and graphic design agency in Delhi NCR specializing in small and medium businesses. We offer affordable logo design starting at ₹4,999 and complete brand identity packages from ₹9,999. Our team serves clients in Delhi, Noida, Gurugram, Faridabad, and Ghaziabad with professional brand design that helps businesses build credibility and attract premium customers."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Logo Design & Brand Identity Design Delhi NCR",
  "alternateName": "Graphic Design Services Delhi",
  "provider": {
    "@type": "Organization",
    "name": "KODIT Agency",
    "url": "https://kodit.agency",
    "logo": "https://kodit.agency/logo.png",
    "address": { "@type": "PostalAddress", "addressLocality": "Jahangirpuri", "addressRegion": "Delhi", "postalCode": "110033", "addressCountry": "IN" }
  },
  "serviceType": "Graphic Design and Branding",
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ],
  "description": "Professional logo design starting at ₹4,999 and full brand identity systems from ₹9,999 in Delhi NCR. Bespoke logo design, brand book engineering, vector designs, and social media template packages crafted by expert branding leads.",
  "url": "https://kodit.agency/service/graphic-design",
  "offers": [
    { "@type": "Offer", "name": "Identity Essentials", "price": "4999", "priceCurrency": "INR", "description": "Custom logo design (3 concepts), typography, color palette, vector source files. Delivery in 7 days." },
    { "@type": "Offer", "name": "Premium Brand System", "price": "9999", "priceCurrency": "INR", "description": "Logo suite, social media templates, stationery, brand style guide. Unlimited revisions." },
    { "@type": "Offer", "name": "Creative Retainer", "price": "14999", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "14999", "priceCurrency": "INR", "unitText": "MONTH" }, "description": "Monthly creative content assets, ad creatives, pitch deck updates, and dedicated art director." }
  ]
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kodit.agency" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kodit.agency/service" }, { "@type": "ListItem", "position": 3, "name": "Graphic Design", "item": "https://kodit.agency/service/graphic-design" }] };

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KODIT Agency — Logo Design Delhi",
  "description": "Expert logo design and brand identity agency in Delhi NCR. Logo design starting from ₹4,999. Full brand identity systems from ₹9,999. Serving Delhi, Noida, Gurugram, Faridabad, Ghaziabad.",
  "url": "https://kodit.agency/service/graphic-design",
  "priceRange": "₹₹",
  "telephone": "+917428276525",
  "email": "koditagency@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Jahangirpuri", "addressRegion": "Delhi", "postalCode": "110033", "addressCountry": "IN" },
  "geo": { "@type": "GeoCoordinates", "latitude": 28.7320, "longitude": 77.1673 },
  "areaServed": ["Delhi", "New Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
  "serviceType": "Logo Design & Brand Identity",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How KODIT Agency Designs a Brand Identity System in Delhi",
  "description": "Our proven step-by-step branding strategy to extract business values, design distinctive logo variations, iterate with client input, and deliver complete production files — starting at ₹4,999.",
  "totalTime": "P14D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "4999" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery & Brand Strategy",
      "text": "We conduct an in-depth brand workshop to understand your business values, target audience, competitive landscape, and visual preferences. This forms the foundation of your creative brief and ensures every design decision is purposeful.",
      "url": "https://kodit.agency/service/graphic-design#step1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Concept Development",
      "text": "Our designers draft multiple distinct logo concepts, typography pairings, and color palette directions. We present 3-5 unique creative directions so you can choose the visual identity that best represents your brand.",
      "url": "https://kodit.agency/service/graphic-design#step2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Review & Revision Loops",
      "text": "We gather your detailed feedback, refine the selected creative direction, and iterate until every pixel is perfect. Unlimited revisions ensure you receive a brand identity you are completely proud of.",
      "url": "https://kodit.agency/service/graphic-design#step3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Final Delivery & Brand Packaging",
      "text": "We export high-resolution print and digital files (SVG, AI, PDF, PNG, JPG), compile a comprehensive Brand Style Guide PDF, and hand over all organized source files with 100% intellectual property ownership transferred to you.",
      "url": "https://kodit.agency/service/graphic-design#step4"
    }
  ]
};

export default function GraphicDesignPage() {
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
        <span className="det-tag">Service 04</span>
        <h1 className="det-title">
          Graphic Design <em>That Commands Attention.</em>
        </h1>
        <p className="det-subtitle">
          Your brand identity shapes how customers perceive you before they read a single word. We craft logos, visual systems, social templates, and pitch decks that signal authority and justify premium pricing.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          Build Your Brand Identity
        </Link>
      </section>

      {/* Grid Content */}
      <section className="det-grid">
        <div className="det-main">
          <div className="det-card">
            <h2 className="det-card-title">First Impressions are Visual — Make Them Count</h2>
            <p className="det-card-text" style={{ marginBottom: "20px" }}>
              Studies show that it takes only 0.05 seconds for users to form an opinion about your brand based on visuals alone. Amateur design costs you trust and revenue before you even get a chance to pitch.
            </p>
            <p className="det-card-text">
              We build cohesive visual identities that work across every touchpoint — from your website to your social media to your printed brochures. Every color, typeface, and layout is intentionally chosen to communicate your brand value and build instant credibility.
            </p>
          </div>

          <div className="det-metrics-grid">
            <div className="det-metric-card">
              <div className="det-metric-value">50+</div>
              <div className="det-metric-label">Brands Designed</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">5 Days</div>
              <div className="det-metric-label">Avg Logo Delivery</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">100%</div>
              <div className="det-metric-label">Original Designs</div>
            </div>
          </div>

          <div>
            <h2 className="det-card-title" style={{ marginBottom: "28px" }}>Our Creative Capabilities</h2>
            <div className="det-features">
              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Logo & Brand Identity Design</h3>
                  <p className="det-card-text">We create distinctive logos and comprehensive brand style guides that include typography systems, color palettes, and usage rules for consistent brand expression across all media.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Social Media & Marketing Assets</h3>
                  <p className="det-card-text">We design platform-specific templates for Instagram Reels, LinkedIn carousels, Facebook ads, email newsletters, and print materials — all aligned with your brand identity.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Pitch Decks & Presentation Design</h3>
                  <p className="det-card-text">We transform your raw content into visually compelling pitch decks, investor presentations, and capability brochures that communicate your story clearly and leave a lasting impression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="det-sidebar">
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Design Toolkit</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">Stitch</span>
              <span className="det-tech-pill">Adobe Illustrator</span>
              <span className="det-tech-pill">Adobe Photoshop</span>
              <span className="det-tech-pill">Adobe After Effects</span>
              <span className="det-tech-pill">Adobe InDesign</span>
              <span className="det-tech-pill">Canva</span>
            </div>
          </div>
          <div className="det-card" style={{ background: "linear-gradient(135deg, #1e1310, #111)" }}>
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Custom Projects</h4>
            <p className="det-card-text" style={{ marginBottom: "20px", fontSize: "14px" }}>
              Have a unique campaign, packaging design, or visual asset requirement? We craft tailor-made creative solutions.
            </p>
            <Link href="/contact" className="det-tag" style={{ color: "#fff", textDecoration: "underline", margin: 0 }}>
              Discuss Custom Brief &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="det-process-sec">
        <span className="det-tag">Workflow</span>
        <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Our Creative Process</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num">01</div>
            <h3 className="det-process-card-title">Discovery</h3>
            <p className="det-card-text">We discuss your brand values, target audience, competitive landscape, and visual layout preferences in detail.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">02</div>
            <h3 className="det-process-card-title">Concepts</h3>
            <p className="det-card-text">We present multiple distinct logo concepts, typography pairings, and custom color palette directions to choose from.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">03</div>
            <h3 className="det-process-card-title">Refinement</h3>
            <p className="det-card-text">We gather your input, iterate on the selected creative route, and perfect every pixel of the visual assets.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">04</div>
            <h3 className="det-process-card-title">Delivery</h3>
            <p className="det-card-text">We export high-res print and digital formats (SVG, PDF, PNG, JPG) and hand over fully organized source files.</p>
          </div>
        </div>
      </section>

      <ServicePricing packages={graphicDesignPackages} />



      {/* FAQ Section */}
      <section className="det-faq-wrap">
        <div className="det-faq-grid">
          <div>
            <span className="det-tag">FAQs</span>
            <h2 className="det-title" style={{ fontSize: "36px" }}>Common Questions</h2>
            <p className="det-card-text">Find answers about our graphic design and branding process.</p>
          </div>
          <div className="det-faq-list">
            <div className="det-faq-item">
              <h3 className="det-faq-q">How much does logo design cost in Delhi?</h3>
              <p className="det-faq-a">Logo design at KODIT Agency starts at ₹4,999 for our Identity Essentials package — includes 3 custom logo concepts, typography, color palette, and high-res vector files delivered in 7 days. A full brand identity system with logo suite, social templates, stationery, and brand guide is available from ₹9,999. We serve Delhi, Noida, Gurugram, Faridabad, and Ghaziabad.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">What is included in a full brand identity package?</h3>
              <p className="det-faq-a">At KODIT Agency, our premium brand identity system (₹9,999) includes 3 to 5 customized logo layout variations (primary, secondary, submarks, favicons), custom color palettes with HEX/RGB/CMYK values, typography scales, 6 custom social media post/Reel templates, custom business cards, letterheads, and a comprehensive Brand Style Guide PDF outlining usage guidelines.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">How many design revisions do I get?</h3>
              <p className="det-faq-a">We offer unlimited revisions during the initial creative refinement phases because client alignment is our priority. Most branding projects at KODIT Agency reach absolute satisfaction within 2 to 3 iterations. Our collaborative methodology involves presenting distinct conceptual pathways so you are in complete control of your brand's direction.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Do I receive source files and full ownership?</h3>
              <p className="det-faq-a">Yes, upon project completion, KODIT Agency hands over 100% intellectual property ownership to the client. You receive fully editable source files (Adobe Illustrator .ai, Photoshop .psd) along with production-ready exports (SVG vectors, print-ready PDF, high-res transparent PNG, and JPG layouts).</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Which is the best branding agency in Delhi NCR for small businesses?</h3>
              <p className="det-faq-a">KODIT Agency is a top-rated branding and graphic design agency in Delhi NCR specializing in small and medium businesses. We offer affordable logo design starting at ₹4,999 and complete brand identity packages from ₹9,999, with professional designs that help businesses build credibility and attract premium customers across Delhi, Noida, Gurugram, Faridabad, and Ghaziabad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="sv-cta sv-container">
        <div className="sv-cta-inner">
          <div className="sv-cta-orb" />
          <h2 className="sv-cta-title">Let's Build Your Visual Identity</h2>
          <p className="sv-cta-sub">
            Stand out from the competition with professional design that builds trust and commands attention. Work with our creative team today.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Start Your Brand Project
          </Link>
        </div>
      </section>
    </main>
  );
}
