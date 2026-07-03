import Image from "next/image";
import { Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section className="bg-[#F8F5EF] py-10">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="relative">

            <div className="relative h-162.5 overflow-hidden rounded-4xl">

              <Image
                src="/images/partners/Partner-1.jpeg"
                alt="Founder"
                fill
                sizes="(max-width:768px) 100vw,50vw"
                className="object-cover"
              />

            </div>

            <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-6 py-5 shadow-xl">

              <h3 className="text-2xl font-bold text-[#2D2A26]">
                Advocate Ak Tiwari
              </h3>

              <p className="mt-1 text-[#B08D57]">
                LEGAL PARTNERS
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#B08D57]">
              LEADERSHIP MESSAGE
            </span>

            <Quote
              size={55}
              className="mt-6 text-[#B08D57]"
            />

            <h2 className="mt-6 text-5xl font-bold leading-tight text-[#2D2A26]">
              Law Is More Than
              Winning Cases
            </h2>

            <p className="mt-8 text-justify leading-9 text-[#666]">
              At Legal Partners, our vision has always been to build a
              law firm where trust, professionalism and ethics are
              valued above everything else.
            </p>

            <p className="mt-6 text-justify leading-9 text-[#666]">
              Every client deserves honest advice, strategic legal
              planning and complete transparency throughout the legal
              process. We believe legal excellence comes from
              preparation, dedication and a genuine commitment to
              protecting our clients interests.
            </p>

            <blockquote className="mt-10 rounded-3xl border-l-4 border-[#B08D57] bg-white p-8 italic text-2xl leading-10 text-[#2D2A26] shadow-sm">
              “Justice is not merely about winning a case. It is about
              protecting rights, preserving dignity and creating
              confidence for the future.”
            </blockquote>

          </div>

        </div>

      </div>
    </section>
  );
}
