import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | KODIT Agency",
  description: "Get in touch with KODIT Agency in New Delhi. Contact us for custom web development (React, Next.js, MERN), local SEO, GBP optimization, graphic design, social media marketing, and AI automation. Schedule a consultation or visit us.",
  keywords: [
    "Contact KODIT Agency",
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
    title: "Contact Us | KODIT Agency — New Delhi's Digital Experts",
    description: "Get in touch with KODIT Agency in New Delhi. Contact us for custom web development, local SEO, GBP optimization, and AI automation. Start your digital journey today.",
    url: "https://kodit.agency/contact",
    images: [{ url: "https://kodit.agency/og-image.png", width: 1200, height: 630, alt: "Contact KODIT Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | KODIT Agency — New Delhi's Digital Experts",
    description: "Get in touch with KODIT Agency in New Delhi. Contact us for custom web development, local SEO, GBP optimization, and AI automation. Start your digital journey today.",
    images: ["https://kodit.agency/og-image.png"],
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
