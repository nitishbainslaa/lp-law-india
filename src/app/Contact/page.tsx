import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF]">

        {/* Hero Section */}

        <section className="relative overflow-hidden py-28">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#B08D57]/10 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B08D57]/10 blur-3xl"></div>

          <div className="container relative mx-auto px-6">

            <div className="mx-auto max-w-5xl text-center">

              <span className="rounded-full bg-[#EFE4D3] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#B08D57]">
                CONTACT LP LAW INDIA
              </span>

              <h1 className="mt-8 text-6xl font-bold leading-tight text-[#2D2A26] md:text-7xl">
                Let's Discuss
                <br />
                Your Legal Matter
              </h1>

              <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#666]">
                Whether you require legal consultation, courtroom
                representation or professional legal guidance, our
                experienced legal team is ready to assist you with
                practical advice and strategic solutions tailored to
                your legal needs.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}