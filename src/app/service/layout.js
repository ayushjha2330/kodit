export const metadata = {
  title: "Web Development, SEO, GMB & AI Automation Services — KODIT Agency Delhi",
  description:
    "KODIT Agency offers 6 digital services from Delhi: Web Development, SEO, Google Business Profile Optimization, Graphic Design, Social Media Marketing, and AI Automation. Help your business get more customers online.",
  keywords: [
    "web development services Delhi", "SEO company Delhi", "Google Business Profile optimization",
    "graphic design services Delhi", "social media marketing agency Delhi",
    "AI automation services India", "digital services Delhi NCR",
    "website design Delhi", "SEO services India"
  ],
  openGraph: {
    title: "Digital Services — Web Dev, SEO, GMB & AI Automation | KODIT Agency Delhi",
    description: "6 digital services from Delhi: Web Development, SEO, Google Business Profile Optimization, Design, Social Media, and AI Automation for businesses across India.",
    url: 'https://kodit.agency/service',
    siteName: 'KODIT Agency',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://kodit.agency/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services — Web Dev, SEO, GMB & AI Automation | KODIT Agency Delhi',
    description: '6 digital services from Delhi: Web Development, SEO, Google Business Profile Optimization, Design, Social Media, AI Automation.',
    images: ['https://kodit.agency/og-image.png'],
  },
  alternates: {
    canonical: 'https://kodit.agency/service',
  },
};

export default function ServiceLayout({ children }) {
  return children;
}
