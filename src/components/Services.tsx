import Link from "next/link";
import {
  Scale,
  BriefcaseBusiness,
  Building2,
  FileText,
  Landmark,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Civil Litigation",
    description:
      "Expert representation in civil disputes, property matters and recovery suits.",
    icon: Scale,
    link: "/services/civil-litigation",
  },
  {
    title: "Corporate Law",
    description:
      "Business formation, legal compliance, contracts and corporate advisory.",
    icon: BriefcaseBusiness,
    link: "/services/corporate-law",
  },
  {
    title: "Property Law",
    description:
      "Property verification, documentation, registration and dispute resolution.",
    icon: Building2,
    link: "/services/property-law",
  },
  {
    title: "Legal Documentation",
    description:
      "Agreements, notices, contracts, affidavits and legal drafting services.",
    icon: FileText,
    link: "/services/legal-documentation",
  },
  {
    title: "Court Representation",
    description:
      "Professional representation before courts, tribunals and authorities.",
    icon: Landmark,
    link: "/services/court-representation",
  },
  {
    title: "Legal Consultation",
    description:
      "One-to-one consultation with experienced legal professionals.",
    icon: ShieldCheck,
    link: "/services/legal-consultation",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FFFDF9] py-10"
    >
      <div className="container mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#B08D57]">
            Our Services
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#2D2A26]">
            Legal Services We Offer
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#666]">
            We provide strategic legal solutions for individuals,
            startups, companies and institutions with professionalism,
            transparency and dedication.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.link}
                className="group block rounded-3xl border border-[#E7DED1] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#B08D57]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F5EF] text-[#B08D57] transition group-hover:bg-[#B08D57] group-hover:text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#2D2A26]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-[#666]">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-[#B08D57] transition group-hover:gap-4">

                  Learn More

                  <ArrowRight size={18} />

                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">

         <Link href="/contact" 
           className="rounded-full bg-[#B08D57] px-10 py-4 text-white transition hover:scale-105 hover:bg-[#9A7848]">

            Schedule Consultation

          </Link>

        </div>

      </div>
    </section>
  );
}
