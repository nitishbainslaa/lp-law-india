import Image from "next/image";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

const features = [
  "Experienced Legal Professionals",
  "Transparent Legal Advice",
  "Client-Centric Representation",
  "Strategic & Practical Solutions",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F5EF] py-10"
    >
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center rounded-full bg-[#EFE7DA] px-5 py-2 text-sm font-medium text-[#B08D57]">
              ABOUT LEGAL PARTNERS
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2D2A26] md:text-6xl">
              Trusted Legal
              <br />
              Excellence For
              <span className="text-[#B08D57]">
                {" "}Every Client
              </span>
            </h2>

            <p className="mt-8 text-justify leading-9 text-[#666]">
              Legal Partners is dedicated to providing reliable,
              practical and result-oriented legal services for
              individuals, businesses and institutions. Our team
              believes every client deserves honest advice,
              strategic planning and strong representation.
            </p>

            <p className="mt-6 text-justify leading-9 text-[#666]">
              We combine legal expertise with a client-first
              approach to deliver effective solutions while
              maintaining the highest standards of ethics,
              professionalism and confidentiality.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-[#E7DED1] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F5EF]">

                    <BadgeCheck
                      size={22}
                      className="text-[#B08D57]"
                    />

                  </div>

                  <p className="font-medium text-[#2D2A26]">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

            {/* Button */}

            <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 text-white transition hover:scale-105 hover:bg-[#9A7848]">

              Learn More

              <ArrowRight size={18} />

            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Image */}

            <div className="relative h-162.5 overflow-hidden rounded-[40px]">

            <Image
              src="/images/map.jpg"
              alt="About LP Law India"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            </div>

            {/* Experience Card */}

            

            {/* Bottom Card */}

            <div className="absolute -bottom-8 right-6 rounded-3xl bg-[#2D2A26] p-8 text-white shadow-2xl">

              <div className="flex items-center gap-4">

                <ShieldCheck
                  size={42}
                  className="text-[#B08D57]"
                />

                <div>

                  <h3 className="text-2xl font-bold">
                    Trusted
                  </h3>

                  <p className="text-gray-300">
                    Legal Professionals
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      
      </div>
    </section>
  );
}
