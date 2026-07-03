import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Experienced legal professionals",
  "Transparent communication",
  "Client-focused legal strategies",
  "Ethical & confidential representation",
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#FFFDF9] py-10">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="relative h-162.5 overflow-hidden rounded-4xl">

              <Image
                src="/images/about.jpg"
                alt="LP Law India Team"
                fill
                sizes="(max-width:768px) 100vw,50vw"
                className="object-cover"
              />

            </div>

            {/* Experience Card */}

            <div className="absolute -bottom-10 left-10 rounded-3xl border border-[#E7DED1] bg-white px-8 py-6 shadow-xl">

              <h3 className="text-5xl font-bold text-[#B08D57]">
                15+
              </h3>

              <p className="mt-2 text-[#666]">
                Years of Professional Experience
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="text-sm uppercase tracking-[4px] text-[#B08D57]">
              WHO WE ARE
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-[#2D2A26]">
              Building Lasting
              Relationships Through
              Trust & Legal Excellence
            </h2>

            <p className="mt-8 text-justify leading-9 text-[#666]">
              LP Law India is a modern legal practice dedicated to
              providing strategic legal advice and practical solutions
              across a wide range of legal matters. Our philosophy is
              simple — understand every clients objectives first, then
              build the strongest legal strategy to protect their
              interests.
            </p>

            <p className="mt-6 text-justify leading-9 text-[#666]">
              Whether representing individuals, businesses or families,
              we focus on professionalism, integrity and timely legal
              assistance. Our team believes that every client deserves
              personal attention, transparent communication and complete
              confidence throughout the legal process.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2
                    size={24}
                    className="text-[#B08D57]"
                  />

                  <span className="text-lg text-[#444]">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            {/* Quote */}

            <div className="mt-12 rounded-3xl border-l-4 border-[#B08D57] bg-[#F8F5EF] p-8">

              <p className="text-2xl italic leading-10 text-[#2D2A26]">
                “Justice begins with trust, and trust begins with
                honest legal advice.”
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}