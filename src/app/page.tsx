import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}