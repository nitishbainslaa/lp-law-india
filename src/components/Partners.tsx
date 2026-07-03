import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { link } from "fs";

const partners = [
  {
    name: "Advocate AK Tiwari",
    designation: "Founder",
    experience: "18+ Years Experience",
    practice: "Matrimonial Cases",
    image: "/images/partners/Partner-1.jpeg",
    link: "/partners/aktiwari",
  },
  {
    name: "Advocate Janamejaya",
    designation: "Senior Partner",
    experience: "10+ Years Experience",
    practice: "Corporate Cases",
    image: "/images/partners/Partner-3.jpeg",
    link: "/partners/janamejaye",
  },
  {
    name: "Advocate Dipasha",
    designation: "Partner",
    experience: "5+ Years Experience",
    practice: "Civil Cases",
    image: "/images/partners/partner-6.jpeg",
    link: "/partners/dipasha",
  },
  {
    name: "Advocate Muskan",
    designation: "Partner",
    experience: "3+ Years Experience",
    practice: "Criminal Cases",
    image: "/images/partners/partner-5.jpeg",
    link: "/partners/muskan",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="bg-[#F8F5EF] py-10 mb-10 border-t border-[#E7DED1]"
    >
      <div className="container mx-auto px-6">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[4px] text-[#B08D57]">
            Our Partners
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#2D2A26]">
            Meet Our Legal Experts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#666]">
            Our partners bring years of courtroom experience,
            strategic legal insight and client-focused advocacy
            across diverse areas of law.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group overflow-hidden rounded-3xl border border-[#E7DED1] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-85 overflow-hidden">

                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="rounded-full bg-[#F8F5EF] px-4 py-1 text-sm text-[#B08D57]">
                  {partner.designation}
                </span>

                <h3 className="mt-5 text-2xl font-semibold text-[#2D2A26]">
                  {partner.name}
                </h3>

                <p className="mt-2 text-[#666]">
                  {partner.practice}
                </p>

                <p className="mt-2 text-sm text-[#888]">
                  {partner.experience}
                </p>

              <Link
                href={partner.link}
                className="mt-8 inline-flex items-center gap-2 text-[#B08D57] font-medium transition-all duration-300 group-hover:gap-4"
              >
                View Profile
                <ArrowRight size={18} />
              </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
