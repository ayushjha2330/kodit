import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | KODIT Agency",
  description: "Learn about KODIT Agency, New Delhi's premier digital marketing & custom web development company. Meet our team, understand our values, and trace our journey of delivering MERN stack websites, SEO results, and AI automations since 2026.",
  keywords: [
    "About KODIT Agency",
    "digital agency team Delhi",
    "web developers New Delhi",
    "MERN stack development history Delhi",
    "KODIT Agency founders",
    "Delhi SEO experts team"
  ],
  alternates: {
    canonical: "https://kodit.agency/about-us",
  },
  openGraph: {
    title: "About Us | KODIT Agency — New Delhi's Digital Experts",
    description: "Learn about our journey, core values, and dedicated team delivering custom MERN stack websites, Local SEO, and AI workflow automations since 2026.",
    url: "https://kodit.agency/about-us",
    images: [{ url: "https://kodit.agency/og-image.png", width: 1200, height: 630, alt: "About KODIT Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | KODIT Agency — New Delhi's Digital Experts",
    description: "Learn about our journey, core values, and dedicated team delivering custom MERN stack websites, Local SEO, and AI workflow automations since 2026.",
    images: ["https://kodit.agency/og-image.png"],
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
