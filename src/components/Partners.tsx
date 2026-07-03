from pathlib import Path

code = r'''"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    image: "/images/partners/partner-3.jpeg",
    link: "/partners/janamejaye",
  },
  {
    name: "Advocate Dipasha",
    designation: "Partner",
    experience: "5+ Years Experience",
    practice: "Civil Cases",
    image: "/images/partners/partner-2.jpeg",
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
      className="bg-[#F8F5EF] py-20 border-t border-[#E7DED1]"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[4px] text-[#B08D57]">
            Our Partners
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2D2A26]">
            Meet Our Legal Experts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#666]">
            Our partners bring years of courtroom experience,
            strategic legal insight and client-focused advocacy
            across diverse areas of law.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="group overflow-hidden rounded-[30px] border border-[#E7DED1] bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur">
                    <span className="text-sm font-semibold text-[#B08D57]">
                      {partner.experience}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-[#B08D57] px-4 py-2 text-sm text-white">
                      {partner.designation}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#2D2A26]">
                    {partner.name}
                  </h3>

                  <p className="mt-3 leading-7 text-[#666]">
                    {partner.practice}
                  </p>

                  <Link
                    href={partner.link}
                    className="mt-8 inline-flex items-center gap-2 font-medium text-[#B08D57] transition-all duration-300 hover:gap-4"
                  >
                    View Profile
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
'''

path = Path("/mnt/data/Partners.tsx")
path.write_text(code, encoding="utf-8")

print(str(path))
