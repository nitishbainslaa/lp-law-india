import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

import AboutIntro from "@/components/about/AboutIntro";
import WhoWeAre from "@/components/about/WhoWeAre";
//import WhyChooseUs from "@/components/about/WhyChooseUs";
import CoreValues from "@/components/about/CoreValues";
import Timeline from "@/components/about/Timeline";
import Leadership from "@/components/about/Leadership";
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
        <Timeline />
        <Leadership />
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}