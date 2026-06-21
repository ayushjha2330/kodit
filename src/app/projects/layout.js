export const metadata = {
  title: "Portfolio — Web Development, SEO & Design Projects | KODIT Agency Delhi",
  description:
    "View KODIT Agency's portfolio of custom websites, SEO campaigns, Google Business Profile optimization, and design work for businesses across India. Real results from our Delhi-based team.",
  keywords: [
    "KODIT agency portfolio", "web development projects Delhi", "SEO portfolio India",
    "Delhi web design portfolio", "digital agency projects", "website design examples Delhi",
    "SEO case studies India", "MERN stack projects", "React Next.js portfolio Delhi",
    "HTML CSS JS website examples", "Bootstrap website portfolio"
  ],
  openGraph: {
    title: "Portfolio — Web Development, SEO & Design Projects | KODIT Agency Delhi",
    description: "Custom websites, SEO campaigns, Google Business Profile optimization, and design for businesses across India — delivered by our Delhi-based team.",
    url: 'https://kodit.agency/projects',
    siteName: 'KODIT Agency',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://kodit.agency/opengraph.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Web Development, SEO & Design Projects | KODIT Agency Delhi',
    description: 'Custom websites, SEO, Google Business Profile optimization from our Delhi-based team.',
    images: ['https://kodit.agency/opengraph.png'],
  },
  alternates: {
    canonical: 'https://kodit.agency/projects',
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
