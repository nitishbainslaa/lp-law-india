import Link from "next/link";
import { ArrowRight, Scale, Award, Users, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Scale,
    title: "Legal Excellence",
    description:
      "Delivering strategic legal solutions with professionalism and integrity.",
  },
  {
    icon: Award,
    title: "Trusted Representation",
    description:
      "Dedicated advocacy focused on protecting the interests of every client.",
  },
  {
    icon: Users,
    title: "Client First",
    description:
      "Every legal strategy is tailored to the client's unique requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Advice",
    description:
      "Honest guidance with complete confidentiality and ethical practice.",
  },
];

export default function AboutIntro() {
  return (
    <section className="bg-[#F8F5EF] pt-15 pb-4 ">
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}

        <div className="mb-8 flex items-center gap-2 text-sm text-[#77706A]">
          <Link
            href="/"
            className="transition hover:text-[#B08D57]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-[#B08D57]">
            About Us
          </span>
        </div>

        {/* Heading */}

        <span className="inline-flex rounded-full bg-[#EFE7DA] px-5 py-2 text-sm font-semibold tracking-wider text-[#B08D57]">
          ABOUT LP LAW INDIA
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight text-[#2D2A26] md:text-7xl">
          Building Trust Through
          <br />
          <span className="text-[#B08D57]">
            Legal Excellence
          </span>
        </h1>

        <p className="mb-8 max-w-4xl text-justify leading-9 text-[#5A534D]">
          At LP Law India, we believe that legal services are built on trust,
          integrity and long-term relationships. Our team is committed to
          providing practical legal guidance, strategic representation and
          personalised solutions that help individuals, families and businesses
          confidently navigate legal challenges.
        </p>


        {/* Who We Are */}

        <div className="py-10 mt-0 grid gap-16 lg:grid-cols-2 mb-0 border-t border-[#E7DED1]">

          <div>

            <span className="text-sm uppercase tracking-[4px] text-[#B08D57]">
              WHO WE ARE
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2D2A26]">
              A Modern Law Firm Built On
              Integrity, Knowledge &
              Commitment
            </h2>

            <p className="mt-8 text-justify leading-9 text-[#666]">
              LP Law India was established with a clear vision of providing
              accessible, reliable and result-oriented legal services. We
              understand that every legal matter is unique, and therefore our
              approach focuses on understanding the individual circumstances,
              identifying practical legal strategies and delivering solutions
              that protect our clients rights and interests.
            </p>

            <p className="mt-6 text-justify leading-9 text-[#666]">
              Our lawyers combine legal expertise with commercial awareness,
              enabling us to serve individuals, entrepreneurs, startups,
              corporations and institutions across a broad range of legal
              disciplines. We strive to simplify complex legal issues while
              maintaining transparency, ethics and professional excellence in
              every matter we handle.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 text-white transition hover:bg-[#9A7848]">
              Contact Our Team
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right Cards */}

          <div className="grid gap-6">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-[#E7DED1] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5EF]">

                    <Icon
                      size={28}
                      className="text-[#B08D57]"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#2D2A26]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#666]">
                    {item.description}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}