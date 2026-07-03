import {
  Building2,
  Trophy,
  BriefcaseBusiness,
  Users,
  Landmark,
} from "lucide-react";

const timeline = [
  {
    year: "2012",
    title: "Foundation of Legal Partners",
    description:
      "Our journey began with a vision to provide ethical, transparent and result-oriented legal services.",
    icon: Building2,
  },
  {
    year: "2015",
    title: "Expanding Practice Areas",
    description:
      "We expanded into civil, criminal, corporate and matrimonial litigation while building a strong client base.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2018",
    title: "Recognized for Excellence",
    description:
      "Successfully handled numerous complex matters and earned the confidence of individuals and businesses.",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "1000+ Happy Clients",
    description:
      "Our commitment to quality legal representation helped us serve clients across multiple legal domains.",
    icon: Users,
  },
  {
    year: "Today",
    title: "Building the Future",
    description:
      "Legal Partners continues to evolve with technology, innovation and client-focused legal services.",
    icon: Landmark,
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#FFFDF9] py-10">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-[#B08D57]">
            OUR JOURNEY
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#2D2A26]">
            Milestones That
            <br />
            Define Our Growth
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#666]">
            Every milestone reflects our commitment to excellence,
            trust and continuous growth in the legal profession.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#E7DED1] lg:block"></div>

          <div className="space-y-20">

            {timeline.map((item, index) => {

              const Icon = item.icon;

              const isLeft = index % 2 === 0;

              return (

                <div
                  key={item.year}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    !isLeft ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  {/* Card */}

                  <div>

                    <div className="rounded-[30px] border border-[#E7DED1] bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

                      <span className="text-sm font-semibold tracking-[4px] text-[#B08D57]">
                        {item.year}
                      </span>

                      <h3 className="mt-4 text-3xl font-bold text-[#2D2A26]">
                        {item.title}
                      </h3>

                      <p className="mt-6 leading-8 text-[#666]">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  {/* Timeline Circle */}

                  <div className="relative flex justify-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#FFFDF9] bg-[#B08D57] shadow-xl">

                      <Icon
                        size={34}
                        className="text-white"
                      />

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}
