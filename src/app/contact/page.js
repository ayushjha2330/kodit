import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact KODIT Agency Delhi — Book a Free Digital Discovery Call",
  description:
    "Get in touch with KODIT Agency in New Delhi. Contact us for custom web development (React, Next.js, MERN), local SEO, GBP optimization, graphic design, social media marketing, and AI automation. Book a free discovery call. We typically reply within 4 hours.",
  keywords: [
    "Contact KODIT Agency",
    "contact KODIT agency",
    "digital agency Delhi contact",
    "web development Delhi quote",
    "SEO services Delhi",
    "free discovery call digital agency",
    "website design Delhi contact",
    "marketing agency Delhi",
    "MERN stack developer Delhi contact",
    "React Next.js developer Delhi",
    "HTML CSS JS designer Delhi",
    "digital marketing consultation Delhi",
    "hire web developers Delhi NCR",
    "hire SEO experts Delhi",
    "KODIT Agency phone number",
    "KODIT Agency email address",
    "KODIT Agency New Delhi office"
  ],
  alternates: {
    canonical: "https://kodit.agency/contact",
  },
  openGraph: {
    title: "Contact KODIT Agency Delhi — Free Discovery Call",
    description: "Get in touch with KODIT Agency in New Delhi for web development, SEO, and marketing. Free consultations. We reply within 4 hours.",
    url: "https://kodit.agency/contact",
    images: [{ url: "https://kodit.agency/opengraph.png", width: 1200, height: 630, alt: "Contact KODIT Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KODIT Agency Delhi — Free Discovery Call",
    description: "Contact us in New Delhi for web development, SEO, and marketing. Free consultations.",
    images: ["https://kodit.agency/opengraph.png"],
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
