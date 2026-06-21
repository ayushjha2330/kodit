export const metadata = {
  title: "Web Development, SEO, GMB & AI Automation Services — KODIT Agency Delhi",
  description:
    "KODIT Agency offers 6 digital services from Delhi: Web Development (HTML, CSS, JS, React, Next.js, Node.js, Express, MongoDB, Tailwind, Bootstrap), SEO, Google Business Profile Optimization, Graphic Design, Social Media Marketing, and AI Automation. Help your business get more customers online.",
  keywords: [
    "web development services Delhi", "SEO company Delhi", "Google Business Profile optimization",
    "graphic design services Delhi", "social media marketing agency Delhi",
    "AI automation services India", "digital services Delhi NCR",
    "website design Delhi", "SEO services India",
    "MERN stack development Delhi", "full stack web development Delhi",
    "HTML CSS JS developer Delhi", "answer engine optimization agency",
    "generative engine optimization services", "AEO GEO optimization Delhi"
  ],
  openGraph: {
    title: "Digital Services — Web Dev, SEO, GMB & AI Automation | KODIT Agency Delhi",
    description: "6 digital services from Delhi: Web Development (MERN stack, React, Next.js), SEO, Google Business Profile Optimization, Design, Social Media, and AI Automation for businesses across India.",
    url: 'https://kodit.agency/service',
    siteName: 'KODIT Agency',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://kodit.agency/opengraph.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services — Web Dev, SEO, GMB & AI Automation | KODIT Agency Delhi',
    description: '6 digital services from Delhi: Web Development (React, Next.js, MERN stack), SEO, Google Maps optimization, Design, Social Media, and AI Automation.',
    images: ['https://kodit.agency/opengraph.png'],
  },
  alternates: {
    canonical: 'https://kodit.agency/service',
  },
};

export default function ServiceLayout({ children }) {
  return children;
}
