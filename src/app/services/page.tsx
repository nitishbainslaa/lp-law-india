import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Scale,
  Shield,
  Building2,
  Landmark,
  Home,
  Briefcase,
  Users,
  FileText,
  CreditCard,
  Gavel,
  Laptop,
  ScrollText,
  ArrowRight,
} from "lucide-react";
const services = [
  {
    icon: Scale,
    title: "Matrimonial Law",
    description:
      "Divorce, maintenance, child custody, domestic violence and family disputes.",
    link: "/services/matrimonial-law",
  },
  {
    icon: Gavel,
    title: "Criminal Law",
    description:
      "Bail matters, criminal trials, FIRs, investigations and legal defence.",
    link: "/services/criminal-law",
  },
  {
    icon: Landmark,
    title: "Civil Litigation",
    description:
      "Civil disputes, recovery suits, injunctions and property litigation.",
    link: "/services/civil-litigation",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description:
      "Company advisory, contracts, compliance and business legal solutions.",
    link: "/services/corporate-law",
  },
  {
    icon: CreditCard,
    title: "Cheque Bounce",
    description:
      "Representation in cheque dishonour cases under the Negotiable Instruments Act.",
    link: "/services/cheque-bounce",
  },
  {
    icon: Home,
    title: "Property Law",
    description:
      "Property disputes, sale deeds, partition matters and title verification.",
    link: "/services/property-law",
  },
  {
    icon: Laptop,
    title: "Cyber Law",
    description:
      "Cyber crime, online fraud, digital evidence and data privacy matters.",
    link: "/services/cyber-law",
  },
  {
    icon: Shield,
    title: "Consumer Cases",
    description:
      "Consumer complaints, compensation claims and unfair trade practices.",
    link: "/services/consumer-case",
  },
  {
    icon: ScrollText,
    title: "RERA Matters",
    description:
      "Real estate disputes, builder issues and RERA legal representation.",
    link: "/services/RERA-matters",
  },
  {
    icon: Briefcase,
    title: "Labour Law",
    description:
      "Employment disputes, workplace compliance and labour litigation.",
    link: "/services/labour-law",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Marriage, succession, guardianship and other family-related legal matters.",
    link: "/services/family-law",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description:
      "Agreements, notices, contracts, wills and legal drafting services.",
    link: "#",
  },
];
export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF]">
        {/* Hero */}

          <section className="relative overflow-hidden py-15">
          
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#B08D57]/10 blur-3xl"></div>
          
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#B08D57]/10 blur-3xl"></div>
          
            <div className="container relative mx-auto px-6">
          
              <div className="mx-auto max-w-5xl text-center">
          
                <span className="rounded-full bg-[#EFE4D3] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#B08D57]">
                  OUR LEGAL SERVICES
                </span>
          
                <h1 className="mt-8 text-5xl font-bold leading-tight text-[#2D2A26] md:text-6xl">
                  Comprehensive Legal
                  <br />
                  Solutions For Every Need
                </h1>
          
                <p className="mx-auto mt-8 max-w-3xl text-justify leading-8 text-[#666]">
                  Legal Partners provides professional legal representation,
                  strategic advisory services and practical legal solutions
                  across a wide range of practice areas for individuals,
                  families and businesses.
                </p>
          
              </div>
          
            </div>
          
          </section>
        {/* Services */}

        <section className="pb-10">
        
          <div className="container mx-auto px-6">
        
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <Link
        key={service.title}
        href={service.link}
        className="group block rounded-[30px] border border-[#E7DED1] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B08D57] hover:shadow-2xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F5EF] transition group-hover:bg-[#B08D57]">
          <Icon
            size={30}
            className="text-[#B08D57] group-hover:text-white"
          />
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-[#2D2A26]">
          {service.title}
        </h3>

        <p className="mt-5 leading-8 text-[#666]">
          {service.description}
        </p>

        <div className="mt-8 inline-flex items-center gap-2 font-medium text-[#B08D57] transition-all duration-300 group-hover:gap-4">
          Learn More
          <ArrowRight size={18} />
        </div>
      </Link>
    );
  })}
</div>
        
          </div>
        
        </section>
        
        
      </main>

      <Footer />

    </>
  );
}
