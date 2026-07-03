import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  },
  {
    icon: Gavel,
    title: "Criminal Law",
    description:
      "Bail matters, criminal trials, FIRs, investigations and legal defence.",
  },
  {
    icon: Landmark,
    title: "Civil Litigation",
    description:
      "Civil disputes, recovery suits, injunctions and property litigation.",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description:
      "Company advisory, contracts, compliance and business legal solutions.",
  },
  {
    icon: CreditCard,
    title: "Cheque Bounce",
    description:
      "Representation in cheque dishonour cases under the Negotiable Instruments Act.",
  },
  {
    icon: Home,
    title: "Property Law",
    description:
      "Property disputes, sale deeds, partition matters and title verification.",
  },
  {
    icon: Laptop,
    title: "Cyber Law",
    description:
      "Cyber crime, online fraud, digital evidence and data privacy matters.",
  },
  {
    icon: Shield,
    title: "Consumer Cases",
    description:
      "Consumer complaints, compensation claims and unfair trade practices.",
  },
  {
    icon: ScrollText,
    title: "RERA Matters",
    description:
      "Real estate disputes, builder issues and RERA legal representation.",
  },
  {
    icon: Briefcase,
    title: "Labour Law",
    description:
      "Employment disputes, workplace compliance and labour litigation.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Marriage, succession, guardianship and other family-related legal matters.",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description:
      "Agreements, notices, contracts, wills and legal drafting services.",
  },
];
export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF]">
        {/* Hero */}

          <section className="relative overflow-hidden py-24">
          
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
          
                <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#666]">
                  LP Law India provides professional legal representation,
                  strategic advisory services and practical legal solutions
                  across a wide range of practice areas for individuals,
                  families, startups and businesses.
                </p>
          
              </div>
          
            </div>
          
          </section>
        {/* Services */}

        <section className="pb-28">
        
          <div className="container mx-auto px-6">
        
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        
              {services.map((service) => {
        
                const Icon = service.icon;
        
                return (
        
                  <div
                    key={service.title}
                    className="group rounded-[30px] border border-[#E7DED1] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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
        
                    <button className="mt-8 inline-flex items-center gap-2 font-medium text-[#B08D57] transition-all group-hover:gap-4">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
        
                  </div>
        
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
