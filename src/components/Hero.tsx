"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  "/images/hero/hero-new.png",
  "/images/hero/hero2.png",
  "/images/hero/hero3.png",
  "/images/hero/hero4.png",
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[90vh] w-full">

              <Image
                src={image}
                alt={`Hero ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm uppercase tracking-[6px] text-[#E8D3A8]">
              Legal Partners
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Trusted Legal
              <br />
              Partners For
              <span className="text-[#D4AF37]">
                {" "}
                Every Justice.
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-gray-200">
              Professional legal guidance with integrity,
              dedication and years of courtroom experience.
              We stand beside individuals, businesses and
              families with practical legal solutions.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                href="#contact"
                className="rounded-full bg-[#B08D57] px-8 py-4 text-white transition hover:scale-105 hover:bg-[#9C7849]"
              >
                Book Consultation
              </Link>

              <Link
                href="#services"
                className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-[#2D2A26]"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
