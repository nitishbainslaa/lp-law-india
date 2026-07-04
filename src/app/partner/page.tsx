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

        {/* Breadcrumb */}

        <section className="py-10">
          <div className="container mx-auto px-6">

            <div className="flex items-center gap-2 text-sm">

              <Link
                href="/"
                className="text-[#666] transition hover:text-[#B08D57]"
              >
                Home
              </Link>

              <span className="text-[#B08D57]">/</span>

              <span className="font-medium text-[#B08D57]">
                Partners
              </span>

            </div>

            <h1 className="mt-5 text-5xl font-bold text-[#2D2A26]">
              Partners
            </h1>

            <div className="mt-4 h-1 w-24 rounded-full bg-[#B08D57]" />

          </div>
        </section>

        {/* Partners */}

        <section className="pb-10">

          <div className="container mx-auto px-6">

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {partners.map((partner) => (

                <Link
                  key={partner.name}
                  href={partner.link}
                  className="group overflow-hidden bg-white border border-[#E7DED1] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="relative h-[250px] overflow-hidden">

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="border-t-4 border-[#B08D57] p-6">

                    <h2 className="text-2xl font-semibold text-[#2D2A26]">
                      {partner.name}
                    </h2>

                    <p className="mt-2 text-[#666]">
                      {partner.designation}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 font-medium text-[#B08D57] transition-all duration-300 group-hover:gap-4">

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
