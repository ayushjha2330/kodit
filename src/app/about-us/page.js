import AboutClient from "./AboutClient";

export const metadata = {
  title: "About KODIT Agency — Delhi-Based Digital Agency Serving India",
  description:
    "Learn about KODIT Agency, New Delhi's premier digital marketing & custom web development company. Meet our team, understand our values, and trace our journey of delivering MERN stack websites, SEO results, and AI automations since 2026. We help clinics, coaching institutes, salons, restaurants, and startups across India grow.",
  keywords: [
    "About KODIT Agency",
    "about KODIT agency",
    "digital agency team Delhi",
    "web developers New Delhi",
    "MERN stack development history Delhi",
    "KODIT Agency founders",
    "Delhi SEO experts team",
    "digital agency Delhi India",
    "web development company Delhi",
    "SEO agency India",
    "digital marketing Delhi",
    "local business growth agency",
    "Delhi based digital agency",
    "MERN stack agency Delhi",
    "React Next.js development company Delhi",
    "answer engine optimization Delhi"
  ],
  alternates: {
    canonical: "https://kodit.agency/about-us",
  },
  openGraph: {
    title: "About KODIT Agency — New Delhi's Digital Experts",
    description: "Learn about our journey, core values, and dedicated team delivering custom MERN stack websites, Local SEO, and AI workflow automations since 2026.",
    url: "https://kodit.agency/about-us",
    images: [{ url: "https://kodit.agency/opengraph.png", width: 1200, height: 630, alt: "About KODIT Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About KODIT Agency — New Delhi's Digital Experts",
    description: "Learn about our journey, core values, and dedicated team delivering custom MERN stack websites, Local SEO, and AI workflow automations since 2026.",
    images: ["https://kodit.agency/opengraph.png"],
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
