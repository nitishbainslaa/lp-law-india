import {
  Scale,
  ShieldCheck,
  Handshake,
  Target,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "Every legal opinion and action is guided by honesty, ethics and professional responsibility.",
  },
  {
    icon: ShieldCheck,
    title: "Justice",
    description:
      "We protect our clients' rights with fairness, transparency and unwavering commitment.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Strong client relationships are built through confidentiality, transparency and consistency.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "Our legal strategies are practical, focused and designed to achieve meaningful outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Commitment",
    description:
      "We stand beside our clients from the first consultation to the final resolution.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Modern legal challenges require smart thinking, strategic planning and innovative solutions.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#F8F5EF] py-10">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-[#B08D57]">
            OUR CORE VALUES
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-[#2D2A26]">
            The Principles That
            <br />
            Guide Everything We Do
          </h2>

          <p className="mt-8 leading-9 text-[#666]">
            At Legal Partners, our values define every interaction,
            every strategy and every legal solution we deliver.
            They are the foundation of our professional identity
            and long-term client relationships.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid text-justify gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#E7DED1] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Gold line */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-[#B08D57] transition-all duration-500 group-hover:w-full" />

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F5EF] transition-all duration-500 group-hover:bg-[#B08D57]">

                  <Icon
                    size={30}
                    className="text-[#B08D57] transition-all duration-500 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#2D2A26]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-[#666]">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
