import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

import AboutIntro from "@/components/about/AboutIntro";
import WhoWeAre from "@/components/about/WhoWeAre";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
//import Gallery from "@/components/about/Gallery";
//import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        <AboutIntro />
        <WhoWeAre />
        <Partners />
        <CoreValues />
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}
