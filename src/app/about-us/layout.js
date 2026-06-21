export const metadata = {
  title: "About KODIT Agency — Delhi-Based Digital Agency Serving India",
  description:
    "KODIT is a Delhi-based digital agency helping clinics, coaching institutes, salons, restaurants, and startups across India grow with web development, SEO, and marketing. Founded in 2026 in New Delhi.",
  keywords: [
    "about KODIT agency", "digital agency Delhi India", "web development company Delhi",
    "SEO agency India", "digital marketing Delhi", "local business growth agency",
    "Delhi based digital agency", "MERN stack agency Delhi",
    "React Next.js development company Delhi", "answer engine optimization Delhi"
  ],
  openGraph: {
    title: "About KODIT Agency — Delhi-Based Digital Agency Serving India",
    description: "Delhi-based digital agency helping Indian businesses grow through web development, SEO, Google Business Profile optimization, and integrated marketing since 2026.",
    url: 'https://kodit.agency/about-us',
    siteName: 'KODIT Agency',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://kodit.agency/opengraph.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About KODIT Agency — Delhi-Based Digital Agency',
    description: 'Delhi-based digital agency helping Indian businesses grow through web development, SEO, and marketing since 2026.',
    images: ['https://kodit.agency/opengraph.png'],
  },
  alternates: {
    canonical: 'https://kodit.agency/about-us',
  },
};

export default function AboutLayout({ children }) {
  return children;
}
