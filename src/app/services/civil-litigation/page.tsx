import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  Building2,
  Landmark,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Landmark,
    title: "Property Disputes",
    description:
      "Representation in ownership disputes, possession matters, partition suits and title litigation.",
  },
  {
    icon: FileText,
    title: "Recovery Suits",
    description:
      "Recovery of outstanding dues, contractual payments and commercial claims before competent courts.",
  },
  {
    icon: Scale,
    title: "Civil Appeals",
    description:
      "Filing and defending appeals before District Courts, High Courts and the Supreme Court of India.",
  },
  {
    icon: Building2,
    title: "Commercial Litigation",
    description:
      "Legal representation in contractual disputes, business conflicts and commercial litigation.",
  },
  {
    icon: ShieldCheck,
    title: "Injunction Matters",
    description:
      "Temporary and permanent injunctions to safeguard your legal and proprietary rights.",
  },
  {
    icon: CheckCircle2,
    title: "Specific Performance",
    description:
      "Enforcement of contractual obligations through specific performance proceedings.",
  },
];

export default function CivilLitigationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF]">

        {/* Breadcrumb */}

        <section className="border-b border-[#E7DED1] py-8">
          <div className="container mx-auto px-6">

            <div className="flex items-center gap-2 text-sm">

              <Link
                href="/"
                className="text-[#666] transition hover:text-[#B08D57]"
              >
                Home
              </Link>

              <span className="text-[#B08D57]">/</span>

              <Link
                href="/services"
                className="text-[#666] transition hover:text-[#B08D57]"
              >
                Services
              </Link>

              <span className="text-[#B08D57]">/</span>

              <span className="font-medium text-[#B08D57]">
                Civil Litigation
              </span>

            </div>

          </div>
        </section>

        {/* Hero */}

        <section className="py-24">

          <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-[#EFE7DA] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#B08D57] uppercase">
                Civil Litigation
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-[#2D2A26] lg:text-6xl">
                Strategic Civil Litigation
                <br />
                Backed by Experience.
              </h1>

              <p className="mt-8 text-justify leading-9 text-[#666]">
                Civil disputes can significantly affect your personal,
                financial and business interests. At LP Law India, we
                provide comprehensive legal representation across a wide
                spectrum of civil matters, including property disputes,
                recovery suits, injunctions, contractual disagreements,
                commercial litigation and appellate proceedings.
              </p>

              <p className="mt-6 text-justify leading-9 text-[#666]">
                Our litigation team combines strategic legal analysis,
                practical courtroom advocacy and client-focused solutions
                to safeguard your rights at every stage of the legal
                process.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 font-semibold text-white transition hover:bg-[#98713E]"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/partner"
                  className="inline-flex items-center rounded-full border border-[#B08D57] px-8 py-4 font-semibold text-[#B08D57] transition hover:bg-[#B08D57] hover:text-white"
                >
                  Speak With Our Lawyers
                </Link>

              </div>

            </div>

            <div className="relative overflow-hidden rounded-3xl">

              <Image
                src="/images/services/civil-litigation.jpg"
                alt="Civil Litigation"
                width={700}
                height={850}
                className="h-auto w-full object-cover"
                priority
              />

            </div>

          </div>

        </section>

        {/* About */}

        <section className="pb-24">

          <div className="container mx-auto px-6">

            <div className="mx-auto max-w-5xl text-center">

              <span className="uppercase tracking-[4px] text-[#B08D57]">
                About Civil Litigation
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
                Resolving Civil Disputes with Precision and Professionalism
              </h2>

              <p className="mt-8 text-justify leading-9 text-[#666]">
                Civil litigation involves the resolution of disputes
                between individuals, businesses, organizations and other
                entities where monetary compensation, property rights,
                contractual obligations or legal remedies are sought.
                Unlike criminal proceedings, civil cases primarily focus
                on enforcing private rights and obtaining equitable
                relief through the judicial process.
              </p>

              <p className="mt-6 text-justify leading-9 text-[#666]">
                LP Law India represents clients before Civil Courts,
                Commercial Courts, District Courts, High Courts and
                various tribunals across India. Our advocates carefully
                evaluate every dispute, formulate effective litigation
                strategies and work towards achieving practical,
                commercially viable and legally sustainable outcomes.
              </p>

            </div>

          </div>

        </section>
                {/* Our Civil Litigation Services */}

        <section className="bg-white py-24">

          <div className="container mx-auto px-6">

            <div className="mx-auto mb-16 max-w-3xl text-center">

              <span className="uppercase tracking-[4px] text-[#B08D57]">
                Our Expertise
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
                Civil Litigation Services We Provide
              </h2>

              <p className="mt-6 text-justify leading-9 text-[#666]">
                We represent individuals, startups, businesses and
                corporate clients across a wide range of civil disputes,
                ensuring practical legal solutions backed by strategic
                courtroom advocacy.
              </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {services.map((service) => {

                const Icon = service.icon;

                return (

                  <div
                    key={service.title}
                    className="group rounded-3xl border border-[#E7DED1] bg-[#FDFBF8] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B08D57] hover:shadow-xl"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFE7DA] transition-all duration-300 group-hover:bg-[#B08D57]">

                      <Icon
                        size={30}
                        className="text-[#B08D57] group-hover:text-white"
                      />

                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-[#2D2A26]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[#666]">
                      {service.description}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

        {/* Why Choose Us */}

        <section className="py-24">

          <div className="container mx-auto px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <span className="uppercase tracking-[4px] text-[#B08D57]">
                  Why Choose LP Law India
                </span>

                <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
                  Trusted Representation in Every Civil Matter
                </h2>

                <p className="mt-8 text-justify leading-9 text-[#666]">
                  Every civil dispute is unique. Our litigation strategy
                  is built after carefully understanding the facts,
                  applicable law and the commercial implications of each
                  matter. We focus on practical outcomes while protecting
                  our clients' legal rights.
                </p>

                <div className="mt-10 space-y-6">

                  {[
                    "Experienced civil litigation lawyers",
                    "Strategic case assessment and planning",
                    "Transparent legal advice and communication",
                    "Representation before courts across India",
                    "Efficient documentation and drafting",
                    "Client-focused dispute resolution",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        size={24}
                        className="mt-1 text-[#B08D57]"
                      />

                      <p className="text-lg text-[#555]">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              <div className="rounded-3xl border border-[#E7DED1] bg-white p-10 shadow-sm">

                <h3 className="text-3xl font-bold text-[#2D2A26]">
                  Our Commitment
                </h3>

                <p className="mt-6 leading-9 text-[#666]">
                  We believe effective litigation is not merely about
                  appearing before a court—it is about understanding the
                  client's objectives, identifying legal risks and
                  developing a strategy that delivers sustainable
                  results.
                </p>

                <p className="mt-6 leading-9 text-[#666]">
                  From the initial consultation to the final hearing,
                  our advocates remain committed to protecting your
                  interests with professionalism, integrity and
                  meticulous preparation.
                </p>

                <div className="mt-10 rounded-2xl bg-[#F8F5EF] p-6">

                  <h4 className="text-xl font-semibold text-[#2D2A26]">
                    Areas We Frequently Handle
                  </h4>

                  <ul className="mt-6 space-y-3 text-[#666]">

                    <li>• Property & Ownership Disputes</li>
                    <li>• Recovery Suits</li>
                    <li>• Contractual Disputes</li>
                    <li>• Commercial Litigation</li>
                    <li>• Partition Suits</li>
                    <li>• Injunction Matters</li>
                    <li>• Specific Performance</li>
                    <li>• Civil Appeals</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Our Process */}

        <section className="bg-white py-24">

          <div className="container mx-auto px-6">

            <div className="mx-auto mb-16 max-w-3xl text-center">

              <span className="uppercase tracking-[4px] text-[#B08D57]">
                Our Process
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
                How We Handle Civil Litigation Matters
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  text: "Understand your dispute, objectives and legal position.",
                },
                {
                  step: "02",
                  title: "Case Evaluation",
                  text: "Review documents, evidence and applicable legal provisions.",
                },
                {
                  step: "03",
                  title: "Legal Representation",
                  text: "Draft pleadings, appear before courts and protect your interests.",
                },
                {
                  step: "04",
                  title: "Resolution",
                  text: "Pursue judgment, settlement or any other appropriate legal remedy.",
                },
              ].map((item) => (

                <div
                  key={item.step}
                  className="rounded-3xl border border-[#E7DED1] bg-[#FDFBF8] p-8"
                >

                  <div className="text-5xl font-bold text-[#B08D57]">
                    {item.step}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#2D2A26]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#666]">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
                {/* Important Civil Laws */}

        <section className="py-24">

          <div className="container mx-auto px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="uppercase tracking-[4px] text-[#B08D57]">
                Legal Framework
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
                Important Laws Governing Civil Litigation
              </h2>

              <p className="mt-6 text-justify leading-9 text-[#666]">
                Our advocates regularly represent clients under various
                civil laws and procedural statutes applicable to disputes
                involving property, contracts, commercial transactions,
                recovery proceedings and other civil matters.
              </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {[
                {
                  title: "Code of Civil Procedure",
                  text: "Procedural framework governing civil suits and execution proceedings.",
                },
                {
                  title: "Indian Contract Act",
                  text: "Disputes relating to contractual obligations and breach of contract.",
                },
                {
                  title: "Specific Relief Act",
                  text: "Specific performance, injunctions and declaratory reliefs.",
                },
                {
                  title: "Transfer of Property Act",
                  text: "Property ownership, transfers and related civil disputes.",
                },
              ].map((law) => (

                <div
                  key={law.title}
                  className="rounded-3xl border border-[#E7DED1] bg-white p-8 transition hover:-translate-y-2 hover:shadow-lg"
                >

                  <h3 className="text-2xl font-semibold text-[#2D2A26]">
                    {law.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#666]">
                    {law.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="bg-white py-24">

          <div className="container mx-auto px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="uppercase tracking-[4px] text-[#B08D57]">
                Frequently Asked Questions
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
                Civil Litigation FAQs
              </h2>

            </div>

            <div className="mx-auto mt-16 max-w-5xl space-y-8">

              {[
                {
                  q: "What is civil litigation?",
                  a: "Civil litigation refers to legal proceedings involving disputes between individuals, businesses or organisations where compensation, enforcement of rights or other civil remedies are sought.",
                },
                {
                  q: "How long does a civil case take?",
                  a: "The duration depends on the nature of the dispute, court workload, complexity of evidence and procedural requirements. Some matters settle early, while others may continue through appeals.",
                },
                {
                  q: "Can civil disputes be settled outside court?",
                  a: "Yes. Many disputes are resolved through negotiation, mediation or settlement before the final judgment, depending on the willingness of the parties.",
                },
                {
                  q: "What documents are required?",
                  a: "Relevant agreements, property records, correspondence, notices, invoices, financial records and any supporting evidence related to the dispute are generally required.",
                },
              ].map((faq) => (

                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#E7DED1] bg-[#FDFBF8] p-8"
                >

                  <h3 className="text-xl font-semibold text-[#2D2A26]">
                    {faq.q}
                  </h3>

                  <p className="mt-4 leading-8 text-[#666]">
                    {faq.a}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="py-24">

          <div className="container mx-auto px-6">

            <div className="rounded-[32px] bg-[#2D2A26] px-10 py-20 text-center text-white">

              <span className="uppercase tracking-[4px] text-[#D6B57A]">
                Need Legal Assistance?
              </span>

              <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight">
                Protect Your Rights with
                <br />
                Experienced Civil Litigation Lawyers
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-justify leading-9 text-gray-300">
                Whether you are dealing with a property dispute,
                contractual conflict, recovery proceedings or commercial
                litigation, our legal team is ready to provide strategic
                advice and effective courtroom representation tailored to
                your specific needs.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 font-semibold text-white transition hover:bg-[#98713E]"
                >
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#2D2A26]"
                >
                  Explore More Services
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
