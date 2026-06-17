import "./globals.css";
import Header from "./common/header";
import Footer from "./common/footer";
import SmoothScrollProvider from "./component/smooth-scroll-provider";
import ChatWidget from "./component/chat/chat-widget";

export const metadata = {
  title: "KODIT Agency — Delhi's Digital Agency for Web Development, SEO & Marketing",
  description:
    "Delhi-based digital agency helping clinics, coaching institutes, salons, restaurants, real estate firms, and startups across India get more customers through web development, SEO, Google Business Profile optimization, and marketing.",
  keywords: [
    "digital agency Delhi", "web development company Delhi", "SEO agency Delhi",
    "web design Delhi", "digital marketing agency Delhi", "Google Business Profile management Delhi",
    "local SEO services Delhi", "social media marketing Delhi", "graphic design Delhi",
    "AI automation Delhi", "KODIT agency", "website developer Delhi",
    "SEO services India", "digital marketing India"
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "KODIT Agency — Delhi's Digital Agency for Web Development, SEO & Marketing",
    description: "Delhi-based digital agency helping businesses across India get more customers through web development, SEO, Google Business Profile optimization, and integrated marketing.",
    url: 'https://kodit.agency',
    siteName: 'KODIT Agency',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://kodit.agency/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KODIT Agency — Delhi Digital Agency for Web Dev, SEO & Marketing',
    description: 'Delhi-based digital agency helping businesses across India get more customers through web development, SEO, and marketing.',
    images: ['https://kodit.agency/og-image.png'],
  },
  alternates: {
    canonical: 'https://kodit.agency',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://kodit.agency/#organization",
                  "name": "KODIT Agency",
                  "url": "https://kodit.agency",
                  "logo": "https://kodit.agency/logo.svg",
                  "description": "Delhi-based digital agency offering web development, SEO, Google Business Profile optimization, graphic design, social media marketing, and AI automation for businesses across India.",
                  "foundingDate": "2020",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+917428276525",
                    "contactType": "sales",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  "sameAs": [
                    "https://www.instagram.com/koditagency/",
                    "https://www.facebook.com/profile.php?id=61587046054985",
                    "https://discord.gg/KpZQwxbCBH"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://kodit.agency/#website",
                  "url": "https://kodit.agency",
                  "name": "KODIT Agency",
                  "description": "Delhi-based digital agency helping businesses across India generate qualified leads through web development, SEO, and integrated marketing.",
                  "publisher": { "@id": "https://kodit.agency/#organization" },
                  "inLanguage": "en-IN"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://kodit.agency/#localbusiness",
                  "name": "KODIT Agency",
                  "image": "https://kodit.agency/logo.svg",
                  "description": "Web development, SEO, Google Business Profile optimization, graphic design, social media marketing, and AI automation for businesses across India. Based in South Delhi.",
                  "url": "https://kodit.agency",
                  "telephone": "+917428276525",
                  "email": "hello@kodit.agency",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Delhi",
                    "addressRegion": "Delhi",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 28.6448,
                    "longitude": 77.2167
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Delhi"
                    },
                    {
                      "@type": "Country",
                      "name": "India"
                    }
                  ],
                  "priceRange": "₹₹",
                  "openingHours": "Mo-Sa 09:00-19:00"
                }
              ]
            })
          }}
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
