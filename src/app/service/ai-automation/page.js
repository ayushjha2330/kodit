import Link from "next/link";
import "../service.css";
import "../service-detail.css";
import ServicePricing from "../../component/service/service-pricing";

const aiAutomationPackages = [
  {
    name: "Basic Workflows",
    priceINR: 7999,
    priceUSD: 99,
    period: " / one-time",
    features: [
      "Up to 3 Active n8n Workflows",
      "Lead Capture & CRM Integrations",
      "Slack / Email Instant Alerts",
      "Data Syncing with Google Sheets",
      "14 Days Support & Tweaks"
    ],
    ctaText: "Get Started"
  },
  {
    name: "Advanced Operations",
    priceINR: 14999,
    priceUSD: 199,
    period: " / one-time",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 8 Complex API Workflows",
      "WhatsApp Business API Alerts",
      "OpenAI GPT-4 Agent Integration",
      "Invoice generation & Payment Sync",
      "Self-Hosted n8n VPS Server Setup",
      "30 Days Systems Support"
    ],
    ctaText: "Choose Advanced"
  },
  {
    name: "Custom Enterprise",
    priceINR: 29999,
    priceUSD: 399,
    period: " / one-time",
    features: [
      "Full Operations Automation Suite",
      "Custom API Connector Coding",
      "Internal Database ETL Pipelines",
      "Complete CRM Custom Configuration",
      "Dedicated Automation Retainer"
    ],
    ctaText: "Get Custom Quote"
  }
];

export const metadata = {
  title: "AI Automation & Workflow Services Delhi — n8n, Make, Zapier | KODIT Agency",
  description: "KODIT Agency builds custom AI automation workflows in Delhi using n8n, Make, and OpenAI GPT. Automate lead capture, CRM sync, WhatsApp reminders & reporting. Save 70% manual work time. From ₹7,999 one-time.",
  keywords: [
    "AI automation services Delhi",
    "n8n workflow automation India",
    "business process automation Delhi",
    "CRM automation agency India",
    "lead capture automation Delhi",
    "WhatsApp automation business India",
    "workflow automation agency Delhi NCR",
    "Make Integromat automation India",
    "AI business tools Delhi NCR",
    "n8n automation cost India",
    "business automation agency Noida Gurugram"
  ],
  openGraph: {
    title: "AI & Workflow Automation Services Delhi | KODIT Agency",
    description: "n8n-powered automation for lead capture, CRM, WhatsApp reminders, and reporting. Save 70% manual work time. From ₹7,999 one-time setup.",
    url: "https://kodit.agency/service/ai-automation",
    siteName: "KODIT Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://kodit.agency/service/ai-automation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does business automation cost in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency offers AI automation setup starting at ₹7,999 (one-time) for the Basic Workflows package covering up to 3 n8n workflows with CRM and lead capture integrations. The Advanced Operations package is ₹14,999 one-time for 8 complex workflows with WhatsApp Business API and OpenAI GPT-4 integration. Enterprise automation starts at ₹29,999."
      }
    },
    {
      "@type": "Question",
      "name": "What is n8n and why do you use it instead of Zapier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "n8n is a powerful open-source workflow automation tool. Unlike Zapier which charges per-task execution fees that scale exponentially, n8n can be self-hosted on private servers (like Render or AWS), eliminating expensive monthly subscriptions. n8n also provides advanced logic control, JavaScript execution blocks, direct webhook handling, and strict data privacy compliance — making it ideal for Indian businesses with sensitive customer data."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a business automation workflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard automations like lead capture, CRM syncing, and Slack/email notifications are completed within 2 to 3 days. Complex multi-layered workflows involving WhatsApp Business API, OpenAI GPT-4 agents, custom database pipelines, and invoice automation take 1 to 2 weeks of development and testing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate automation with my existing CRM and tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We integrate with 400+ applications including Salesforce, HubSpot, Zoho CRM, Google Workspace (Sheets, Gmail, Calendar), Stripe, Razorpay, Slack, WhatsApp Business API, Notion, and more. For tools without native n8n nodes, we build custom API integrations using REST webhooks and secure authentication."
      }
    },
    {
      "@type": "Question",
      "name": "What business processes can be automated with AI automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KODIT Agency automates: website lead capture to CRM, WhatsApp appointment reminders, invoice generation and payment tracking, daily sales report emails, social media post scheduling, customer follow-up sequences, inventory alerts, and AI-powered customer support chatbots. Essentially any repetitive manual task can be automated to save your team 10+ hours per week."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation & Workflow Integration Delhi NCR",
  "alternateName": "Business Process Automation Agency Delhi",
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
  "serviceType": "AI Workflow Automation",
  "areaServed": [
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" }
  ],
  "description": "Custom AI automation using n8n, Make, and OpenAI GPT for Delhi NCR businesses. Automate lead capture, CRM sync, WhatsApp alerts, and reporting. One-time setup from ₹7,999.",
  "url": "https://kodit.agency/service/ai-automation",
  "offers": [
    {
      "@type": "Offer",
      "name": "Basic Automation Workflows",
      "price": "7999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Advanced Operations Automation",
      "price": "14999",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Enterprise Automation Suite",
      "price": "29999",
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
    { "@type": "ListItem", "position": 3, "name": "AI Automation", "item": "https://kodit.agency/service/ai-automation" }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How KODIT Agency Automates Your Delhi Business Workflows",
  "description": "Complete process to discover bottlenecks, design n8n integration architecture, build and test workflows, and deploy live system synchronization for Delhi NCR businesses.",
  "totalTime": "P14D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "7999" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Process Audit & Automation Discovery",
      "text": "We review all your manual tasks, spreadsheets, and data inputs to identify the highest-impact automation opportunities and estimate time saved per week.",
      "url": "https://kodit.agency/service/ai-automation#step1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "API & Integration Architecture",
      "text": "We map all required API connections, define workflow logic, plan data transformations, and verify authentication setups before writing a single node.",
      "url": "https://kodit.agency/service/ai-automation#step2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "n8n Workflow Construction & Testing",
      "text": "We build visual n8n nodes, configure webhooks, add data filters and AI nodes, then run comprehensive sandbox tests with real sample data.",
      "url": "https://kodit.agency/service/ai-automation#step3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Production Launch & Team Handover",
      "text": "We deploy workflows to production, connect live environments, set up error monitoring logs, schedule runs, and train your team to manage the system.",
      "url": "https://kodit.agency/service/ai-automation#step4"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KODIT Agency — AI Automation Delhi",
  "description": "Expert AI automation and workflow integration agency in Delhi NCR. n8n, Make, and OpenAI GPT automation for businesses. Setup from ₹7,999.",
  "url": "https://kodit.agency/service/ai-automation",
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

export default function AIAutomationPage() {
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
        <span className="det-tag">Service 06</span>
        <h1 className="det-title">
          AI Automation <em>That Saves You Hours Every Day.</em>
        </h1>
        <p className="det-subtitle">
          Stop doing repetitive manual tasks. We build n8n-powered automation workflows that handle lead capture, CRM updates, appointment reminders, customer follow-ups, and reporting — so your team can focus on growth.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          Automate Your Workflows
        </Link>
      </section>

      {/* Grid Content */}
      <section className="det-grid">
        <div className="det-main">
          <div className="det-card">
            <h2 className="det-card-title">Stop Wasting Time on Tasks a Machine Can Do</h2>
            <p className="det-card-text" style={{ marginBottom: "20px" }}>
              Businesses lose countless hours manually entering leads into CRMs, sending follow-up emails, updating spreadsheets, and generating reports. These repetitive tasks kill productivity and introduce human error.
            </p>
            <p className="det-card-text">
              We design and deploy custom automation workflows using n8n — a powerful open-source alternative to Zapier. From lead capture on your website to auto-updating your CRM, sending WhatsApp reminders, and generating daily performance dashboards — we connect every tool you use into one seamless system.
            </p>
          </div>

          <div className="det-metrics-grid">
            <div className="det-metric-card">
              <div className="det-metric-value">70%</div>
              <div className="det-metric-label">Time Saved on Tasks</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">24/7</div>
              <div className="det-metric-label">Automated Operations</div>
            </div>
            <div className="det-metric-card">
              <div className="det-metric-value">Zero</div>
              <div className="det-metric-label">Human Errors</div>
            </div>
          </div>

          <div>
            <h2 className="det-card-title" style={{ marginBottom: "28px" }}>Our Automation Capabilities</h2>
            <div className="det-features">
              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Workflow Automation with n8n</h3>
                  <p className="det-card-text">We build visual automation workflows that connect your website, email, CRM, WhatsApp, Google Sheets, and more — processing data in real-time without expensive Zapier subscriptions.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Lead Capture & CRM Integration</h3>
                  <p className="det-card-text">When a visitor fills out a form on your website, our automation instantly adds them to your CRM, sends a welcome email, creates a task for your sales team, and logs the activity in Google Sheets.</p>
                </div>
              </div>

              <div className="det-feature-item">
                <div className="det-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <h3 className="det-feature-title">Scheduling, Reminders & Reporting</h3>
                  <p className="det-card-text">We set up automated appointment reminders via email and WhatsApp, schedule recurring invoice generation, and build live dashboards that give you a real-time view of your business performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="det-sidebar">
          <div className="det-card">
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Automation Stack</h4>
            <div className="det-tech-list" style={{ marginTop: "16px" }}>
              <span className="det-tech-pill">n8n</span>
              <span className="det-tech-pill">Make (Integromat)</span>
              <span className="det-tech-pill">Zapier</span>
              <span className="det-tech-pill">OpenAI API</span>
              <span className="det-tech-pill">Google Sheets API</span>
              <span className="det-tech-pill">WhatsApp Business API</span>
            </div>
          </div>
          <div className="det-card" style={{ background: "linear-gradient(135deg, #1e1310, #111)" }}>
            <h4 className="det-card-title" style={{ fontSize: "18px" }}>Custom Integrations</h4>
            <p className="det-card-text" style={{ marginBottom: "20px", fontSize: "14px" }}>
              Have legacy internal software or custom databases that need linking? We build custom API connectors in n8n.
            </p>
            <Link href="/contact" className="det-tag" style={{ color: "#fff", textDecoration: "underline", margin: 0 }}>
              Build Custom Connector &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="det-process-sec">
        <span className="det-tag">Workflow</span>
        <h2 className="det-title" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Our Automation Blueprint</h2>
        <div className="det-process-grid">
          <div className="det-process-card">
            <div className="det-process-num">01</div>
            <h3 className="det-process-card-title">Process Audit</h3>
            <p className="det-card-text">We analyze your current manual workflows in detail and identify the highest-impact repetitive tasks to automate.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">02</div>
            <h3 className="det-process-card-title">Architecture</h3>
            <p className="det-card-text">We map out custom API integrations, webhook triggers, database schemas, and AI prompt structures.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">03</div>
            <h3 className="det-process-card-title">Development</h3>
            <p className="det-card-text">We build, host, and test every automation workflow in our sandbox environment using n8n for absolute reliability.</p>
          </div>
          <div className="det-process-card">
            <div className="det-process-num">04</div>
            <h3 className="det-process-card-title">Deployment</h3>
            <p className="det-card-text">We push the systems live, connect production systems, and train your team to monitor execution logs.</p>
          </div>
        </div>
      </section>

      <ServicePricing packages={aiAutomationPackages} />



      {/* FAQ Section */}
      <section className="det-faq-wrap">
        <div className="det-faq-grid">
          <div>
            <span className="det-tag">FAQs</span>
            <h2 className="det-title" style={{ fontSize: "36px" }}>Common Questions</h2>
            <p className="det-card-text">Learn how AI automation can transform your business operations.</p>
          </div>
          <div className="det-faq-list">
            <div className="det-faq-item">
              <h3 className="det-faq-q">What is n8n and why do you use it instead of Zapier?</h3>
              <p className="det-faq-a">n8n is a powerful node-based workflow automation tool. Unlike Zapier, which charges per-task execution fees that scale exponentially, n8n can be self-hosted securely on private servers (like Render or AWS). This eliminates expensive monthly subscriptions. Additionally, n8n provides advanced logic control, direct webhook handling, JavaScript execution blocks, and strict data privacy compliance for enterprises.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">How long does it take to build an automation workflow?</h3>
              <p className="det-faq-a">At KODIT Agency, standard automation setups such as website lead capture, CRM database syncing, and instant Slack notifications are completed within 2 to 3 days. Bespoke, multi-layered workflows involving custom AI database queries, complex conditional branches, CRM automation, WhatsApp Business APIs, and daily reporting dashboards take 1 to 2 weeks of development and sandbox testing.</p>
            </div>
            <div className="det-faq-item">
              <h3 className="det-faq-q">Can you integrate with my existing tools and software?</h3>
              <p className="det-faq-a">Yes, we integrate with 400+ popular applications including Salesforce, HubSpot, Zoho CRM, Google Workspace (Sheets, Gmail, Calendar), Stripe, Slack, and WhatsApp Business API. If your software lacks a native integration block, we build custom API integrations utilizing secure REST webhooks, JSON parsing, and authentication handshakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="sv-cta sv-container">
        <div className="sv-cta-inner">
          <div className="sv-cta-orb" />
          <h2 className="sv-cta-title">Ready to Automate Your Business?</h2>
          <p className="sv-cta-sub">
            Stop doing repetitive tasks manually. Let us build custom automations that save you time, eliminate errors, and free your team to focus on what matters.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: "inline-block", padding: "14px 36px", borderRadius: "999px", background: "#E84D0E", color: "#fff", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Start Your Automation Project
          </Link>
        </div>
      </section>
    </main>
  );
}
