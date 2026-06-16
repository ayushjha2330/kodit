import "./globals.css";
import Header from "./common/header";
import Footer from "./common/footer";
import SmoothScrollProvider from "./component/smooth-scroll-provider";

export const metadata = {
  title: "Kodit | Delhi's Expert Growth Agency",
  description:
    "Expert Web Development, SEO, AEO, GMB Optimization & Design for businesses in Delhi, India.",
  openGraph: {
    title: "Kodit | Delhi's Expert Growth Agency",
    description: "Expert Web Development, SEO, AEO, GMB Optimization & Design for businesses in Delhi, India.",
    url: 'https://kodit.agency',
    siteName: 'Kodit',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kodit.agency',
  }
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
              "@type": "LocalBusiness",
              "name": "Kodit",
              "image": "https://kodit.agency/logo.png",
              "description": "Expert Web Development, SEO, AEO, GMB Optimization & Design for businesses in Delhi.",
              "url": "https://kodit.agency",
              "telephone": "+919999999999",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": "Delhi NCR",
              "priceRange": "$$"
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
      </body>
    </html>
  );
}