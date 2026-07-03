import {
  Scale,
  ShieldCheck,
  Users,
  Clock3,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Expert Legal Representation",
    description:
      "Our experienced legal professionals provide strategic advice and effective representation across diverse legal matters.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Confidentiality",
    description:
      "Every consultation and legal matter is handled with the highest level of privacy and professional ethics.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Every legal strategy is carefully tailored to suit the unique goals and circumstances of each client.",
  },
  {
    icon: Clock3,
    title: "Timely Communication",
    description:
      "We believe clients deserve regular updates, transparent communication and prompt legal assistance.",
  },
  {
    icon: Landmark,
    title: "Comprehensive Legal Services",
    description:
      "From advisory services to litigation, we provide complete legal solutions under one roof.",
  },
  {
    icon: BadgeCheck,
    title: "Commitment to Excellence",
    description:
      "We strive to deliver practical legal solutions while maintaining the highest standards of professionalism.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FFFDF9] py-10">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-[#B08D57]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-[#2D2A26]">
            Trusted Legal Solutions
            <br />
            Built Around Your Success
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#666]">
            We combine legal expertise, strategic thinking and a
            client-first approach to deliver practical solutions
            that protect your rights and support your long-term
            interests.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid text-justify gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-[30px] border border-[#E7DED1] bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#B08D57] hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F5EF] transition-all duration-500 group-hover:bg-[#B08D57]">

                  <Icon
                    size={30}
                    className="text-[#B08D57] transition-all duration-500 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#2D2A26]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-[#666]">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}