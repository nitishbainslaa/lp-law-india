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

      <main className="min-h-screen bg-[#F8F5EF]">

        {/* Breadcrumb */}

        <section className="py-10">
          <div className="mx-auto max-w-6xl px-6">

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

<section className="pb-12">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

      {partners.map((partner) => (

        <Link
          key={partner.name}
          href={partner.link}
          className="group w-[170px] overflow-hidden rounded-lg border border-[#E7DED1] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        >

<div className="relative h-[210px] overflow-hidden rounded-t-lg">
  <Image
    src={partner.image}
    alt={partner.name}
    fill
    sizes="170px"
    className="object-cover object-top transition duration-700 group-hover:scale-105"
  />
</div>

          <div className="border-t-4 border-[#B08D57] p-3">

            <h2 className="text-lg font-semibold text-[#2D2A26]">
              {partner.name}
            </h2>

            <p className="mt-1 text-xs text-[#666]">
              {partner.designation}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#B08D57] transition-all duration-300 group-hover:gap-3">
              View Profile
              <ArrowRight size={14} />
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
