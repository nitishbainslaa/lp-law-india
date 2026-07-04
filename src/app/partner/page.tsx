import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const partners = [
  {
    name: "Advocate AK Tiwari",
    designation: "Senior Litigation Partner",
    image: "/images/partners/Partner-1.jpeg",
    link: "/partners/aktiwari",
  },
  {
    name: "Advocate Janamejaya",
    designation: "Head of Litigation",
    image: "/images/partners/Partner-3.jpeg",
    link: "/partners/janamejaye",
  },
  {
    name: "Advocate Dipasha",
    designation: "Associate Partner",
    image: "/images/partners/Partner-6.jpeg",
    link: "/partners/dipasha",
  },
  {
    name: "Advocate Muskan",
    designation: "Associate Partner",
    image: "/images/partners/Partner-5.jpeg",
    link: "/partners/muskan",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF] min-h-screen">

        {/* Hero */}

        <section className="border-b border-[#E7DED1] py-24">

          <div className="container mx-auto px-6 text-center">

            <span className="rounded-full bg-[#EFE4D3] px-5 py-2 text-sm font-semibold tracking-[4px] text-[#B08D57]">
              OUR LEGAL TEAM
            </span>

            <h1 className="mt-8 text-5xl font-bold text-[#2D2A26] md:text-6xl">
              Meet Our Partners
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#666]">
              Our experienced legal professionals combine legal
              excellence, strategic thinking and client-focused
              representation to deliver exceptional legal services
              across a wide range of practice areas.
            </p>

          </div>

        </section>

        {/* Partners */}

        <section className="py-24">

          <div className="container mx-auto px-6">

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {partners.map((partner) => (

                <Link
                  key={partner.name}
                  href={partner.link}
                  className="group overflow-hidden rounded-3xl border border-[#E7DED1] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="relative h-[420px] overflow-hidden">

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  </div>

                  <div className="p-8 text-center">

                    <h2 className="text-2xl font-bold text-[#2D2A26]">
                      {partner.name}
                    </h2>

                    <p className="mt-2 text-[#B08D57] font-medium">
                      {partner.designation}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 font-medium text-[#B08D57] transition-all duration-300 group-hover:gap-4">

                      View Profile

                      <ArrowRight size={18} />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
