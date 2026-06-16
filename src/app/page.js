import Hero from "./component/home/home-hero-section";
import About from "./component/home/home-about-section";
import Services from "./component/home/home-services-section";
import WhyUs from "./component/home/home-whyus-section";
import Team from "./component/home/home-team-section";
import FAQ from "./component/home/home-faq-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <FAQ />
    </>
  );
}
