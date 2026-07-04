import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/about/AboutIntro";
import WhoWeAre from "@/components/about/WhoWeAre";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        <AboutIntro />
        <WhoWeAre />
        <CoreValues />
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}
