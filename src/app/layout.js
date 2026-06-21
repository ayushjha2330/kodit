import "./globals.css";
import Header from "./common/header";
import Footer from "./common/footer";
import SmoothScrollProvider from "./component/smooth-scroll-provider";
import ChatWidget from "./component/chat/chat-widget";

export const metadata = {
  metadataBase: new URL('https://kodit.agency'),
  title: {
    default: "KODIT Agency — Delhi's Web Development, SEO & Digital Marketing Agency",
    template: "%s | KODIT Agency"
  },
  description:
    "KODIT Agency is a Delhi-based digital agency specialising in custom web development (React, Next.js, Node.js, MongoDB, Express), SEO, Google Business Profile optimization, graphic design, social media marketing, and AI automation for clinics, coaching institutes, salons, restaurants, real estate, and startups across India.",
  keywords: [
    "digital agency Delhi",
    "web development company Delhi",
    "SEO agency Delhi",
    "React Next.js developer Delhi",
    "Node.js Express web developer Delhi",
    "MongoDB MERN stack developer Delhi",
    "Tailwind Bootstrap developer Delhi",
    "HTML CSS JS developer Delhi",
    "custom website design Delhi NCR",
    "Google Business Profile management Delhi",
    "local SEO services Delhi",
    "social media marketing agency Delhi",
    "graphic design branding Delhi",
    "Stitch designer Delhi",
    "AI automation n8n Delhi",
    "affordable digital marketing Delhi",
    "KODIT Agency",
    "digital marketing for clinics Delhi",
    "website for coaching institute Delhi",
    "real estate digital marketing Delhi",
    "answer engine optimization agency",
    "generative engine optimization services",
    "GEO optimization Delhi India",
    "AEO services for local business",
    "AI overview optimization"
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "KODIT Agency — Delhi's Web Development, SEO & Digital Marketing Agency",
    description: "Delhi-based digital agency helping businesses across India grow with custom websites (React, Next.js, Node, MongoDB), SEO, Google Maps ranking, social media, and AI automation.",
    url: 'https://kodit.agency',
    siteName: 'KODIT Agency',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://kodit.agency/og-image.png', width: 1200, height: 630, alt: 'KODIT Agency — Delhi Digital Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KODIT Agency — Delhi Web Development, SEO & Marketing Agency',
    description: 'Custom websites, SEO, Google Maps ranking, social media, and AI automation for businesses across India. Based in New Delhi, Jahangirpuri.',
    images: ['https://kodit.agency/og-image.png'],
  },
  alternates: {
    canonical: 'https://kodit.agency',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

// GEO/AEO: Comprehensive structured data for AI citation and answer engine optimization
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kodit.agency/#organization",
      "name": "KODIT Agency",
      "alternateName": "Kodit",
      "url": "https://kodit.agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kodit.agency/logo.svg",
        "width": 200,
        "height": 60
      },
      "description": "KODIT Agency is a Delhi-based digital agency founded in 2026, offering six core services: custom web development using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js, SEO (Search Engine Optimization), Google Business Profile (GBP) optimization, graphic design and brand identity, social media marketing, and AI workflow automation using n8n. The agency serves small and medium businesses across Delhi, Noida, Gurgaon, and all of India.",
      "foundingDate": "2026",
      "foundingLocation": { "@type": "Place", "name": "Jahangirpuri, New Delhi, India" },
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 3 },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+917428276525",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "email": "koditagency@gmail.com",
          "contactType": "customer support",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "sameAs": [
        "https://www.instagram.com/koditagency/",
        "https://www.facebook.com/profile.php?id=61587046054985",
        "https://discord.gg/KpZQwxbCBH"
      ],
      "knowsAbout": [
        "React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS",
        "Bootstrap", "HTML5", "CSS3", "JavaScript", "Stitch", "SEO",
        "Google Business Profile Optimization", "Local SEO", "Technical SEO",
        "Social Media Marketing", "Graphic Design", "Brand Identity",
        "AI Automation", "n8n", "Workflow Automation", "MERN Stack",
        "Full Stack Development", "Answer Engine Optimization",
        "Generative Engine Optimization", "Web Performance Optimization"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development", "description": "React, Next.js, Node.js, MongoDB, Express.js websites delivered in 14 days", "url": "https://kodit.agency/service/web-development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services", "description": "Technical SEO, keyword research, link building — page-1 results in 60-90 days", "url": "https://kodit.agency/service/seo" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Optimization", "description": "NAP cleanup, citation building, review generation for Google Maps 3-Pack ranking", "url": "https://kodit.agency/service/gmb-optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design & Branding", "description": "Logo design, brand identity systems, social templates using Stitch and Adobe tools", "url": "https://kodit.agency/service/graphic-design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing", "description": "30+ posts/month, Reels, carousels, and community management for Instagram, Facebook, LinkedIn, YouTube", "url": "https://kodit.agency/service/social-media-marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Workflow Automation", "description": "n8n-powered automations for lead capture, CRM integration, WhatsApp reminders — saves 70% manual work", "url": "https://kodit.agency/service/ai-automation" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://kodit.agency/#website",
      "url": "https://kodit.agency",
      "name": "KODIT Agency",
      "description": "Delhi-based digital agency helping businesses across India generate leads through custom web development, SEO, and integrated marketing.",
      "publisher": { "@id": "https://kodit.agency/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://kodit.agency/?s={search_term_string}" },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-IN",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-title", ".hero-subtitle", "h1", "h2"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://kodit.agency/#localbusiness",
      "name": "KODIT Agency",
      "image": "https://kodit.agency/logo.svg",
      "description": "KODIT Agency is a digital marketing and web development company based in Jahangirpuri, New Delhi, India. We build custom websites using React and Next.js, run SEO campaigns that achieve page-1 Google rankings within 60-90 days, optimize Google Business Profiles for local 3-Pack placement, create brand identities and logos, manage social media accounts on Instagram, Facebook, LinkedIn and YouTube, and build AI automation workflows using n8n. We serve businesses in Delhi, Noida, Gurgaon, and across India.",
      "url": "https://kodit.agency",
      "telephone": "+917428276525",
      "email": "koditagency@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jahangirpuri",
        "addressRegion": "Delhi",
        "postalCode": "110033",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.7320,
        "longitude": 77.1673
      },
      "areaServed": [
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Gurgaon" },
        { "@type": "State", "name": "Delhi NCR" },
        { "@type": "Country", "name": "India" }
      ],
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Bank Transfer, UPI, Credit Card",
      "openingHours": "Mo-Sa 09:00-19:00",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" }
      ]
    },
    {
      "@type": "Person",
      "name": "Ayush Jha",
      "jobTitle": "Founder & CEO",
      "worksFor": { "@id": "https://kodit.agency/#organization" },
      "url": "https://kodit.agency/about-us",
      "knowsAbout": ["Web Development", "SEO", "Digital Marketing", "React", "Next.js", "MERN Stack"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kodit.agency/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kodit.agency" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kodit.agency/service" },
        { "@type": "ListItem", "position": 3, "name": "About", "item": "https://kodit.agency/about-us" },
        { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://kodit.agency/projects" },
        { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://kodit.agency/contact" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://kodit.agency/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What digital services does KODIT Agency offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KODIT Agency offers six core digital services from its New Delhi office: (1) Custom Web Development using HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Bootstrap — with 14-day delivery for standard websites; (2) SEO with technical audits, keyword intent mapping, and link building for page-1 rankings in 60-90 days; (3) Google Business Profile (GBP) Optimization for local 3-Pack ranking on Google Maps; (4) Graphic Design and Brand Identity using Stitch and Adobe tools; (5) Social Media Marketing with 30+ posts per month on Instagram, Facebook, LinkedIn, and YouTube; and (6) AI Workflow Automation using n8n to save 70% of manual business operations."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does KODIT Agency use for web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KODIT Agency uses the MERN stack — MongoDB, Express.js, React, and Node.js — as the core technology. For the frontend, they use Next.js for server-side rendering and static generation, Tailwind CSS and Bootstrap for responsive layouts, GSAP for animations, and HTML5/CSS3/JavaScript. For design-to-code workflows, they translate Stitch UI designs directly into production React components. Websites are deployed on Vercel or Render, with Sanity CMS used for content management when needed."
          }
        },
        {
          "@type": "Question",
          "name": "Where is KODIT Agency located and which cities do they serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KODIT Agency is headquartered in Jahangirpuri, New Delhi, India. They serve businesses across Delhi NCR (including Noida and Gurgaon) and accept projects from anywhere in India. The agency is reachable at +91 74282 76525 or koditagency@gmail.com, and operates Monday to Saturday, 9 AM to 7 PM."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website with KODIT Agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KODIT Agency delivers most standard business websites and landing pages within 14 days. Complex web applications — such as e-commerce platforms with payment integration, MERN stack dashboards, or SaaS products — typically take 3 to 6 weeks depending on the number of features and integrations required."
          }
        },
        {
          "@type": "Question",
          "name": "What is GEO (Generative Engine Optimization) and does KODIT Agency offer it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generative Engine Optimization (GEO) is the practice of optimizing a website so that AI-powered search engines and chatbots — such as ChatGPT, Perplexity, Google Gemini, and Claude — cite your content in their answers. This involves structured data (schema markup), authoritative and specific content, allowing AI bots to crawl your site, and using clear question-and-answer formats. KODIT Agency provides GEO and AEO (Answer Engine Optimization) services as part of their advanced SEO offerings."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a website cost at KODIT Agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KODIT Agency's website pricing is in the mid-range (₹₹) category. Basic landing pages and business websites start from an affordable price point for Delhi standards, while full-stack web applications with custom backend, CMS, and e-commerce capabilities are priced higher. The agency accepts payment via bank transfer, UPI, and credit card. Contact koditagency@gmail.com or call +91 74282 76525 for a custom quote."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#E84D0E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0C0C0C] text-[#F0EDE8]">
        <div className="global-spotlight" />
        <script dangerouslySetInnerHTML={{
          __html: `
            let pending = false;
            document.addEventListener('mousemove', (e) => {
              if (!pending) {
                pending = true;
                requestAnimationFrame(() => {
                  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
                  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
                  pending = false;
                });
              }
            });
          `
        }} />
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
