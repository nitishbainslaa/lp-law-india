import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const practiceAreas = [
  "Matrimonial Litigation",
  "Criminal Law",
  "Civil Litigation",
  "Cheque Bounce Matters",
  "Family Law",
  "Corporate Advisory",
];

const achievements = [
  "20+ Years of Professional Legal Experience",
  "1000+ Clients Successfully Represented",
  "500+ Litigation Matters Handled",
  "Strategic Advisor for Individuals & Businesses",
];

export default function MuskanPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF]">

        {/* Hero */}

        <section className="py-10">
          <div className="container mx-auto px-6">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              <div className="relative">

                <div className="relative h-175 overflow-hidden rounded-[40px]">

                  <Image
                    src="/images/partners/Partner-5.jpeg"
                    alt="Advocate Muskan"
                    fill
                    sizes="(max-width:768px)100vw,50vw"
                    className="object-cover"
                  />

                </div>

                <div className="absolute bottom-8 left-8 rounded-3xl bg-white px-8 py-6 shadow-xl">

                  <h3 className="text-4xl font-bold text-[#B08D57]">
                    20+
                  </h3>

                  <p className="mt-2 text-[#666]">
                    Years Experience
                  </p>

                </div>

              </div>

              <div>

                <span className="rounded-full bg-[#EFE4D3] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#B08D57]">
                  Associate Partner
                </span>

                <h1 className="mt-8 text-6xl font-bold leading-tight text-[#2D2A26]">
                  Adv. A. K. Tiwari
                </h1>

                <p className="mt-8 text-justify leading-9 text-[#666]">
                  Advocate A. K. Tiwari is an experienced legal
                  professional committed to delivering practical,
                  ethical and result-oriented legal services. Over the
                  years, he has represented individuals, families and
                  businesses across a broad spectrum of legal matters,
                  combining strategic litigation with practical legal
                  advice.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  {practiceAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E7DED1] bg-white px-5 py-2 text-sm text-[#2D2A26]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <Link
                  href="/contact"
                  className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 font-medium text-white transition hover:bg-[#9A7848]"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* Biography */}

        <section className="bg-[#FFFDF9] py-10">
          <div className="container mx-auto max-w-5xl px-6">

            <div className="text-center">

              <span className="text-sm font-semibold uppercase tracking-[5px] text-[#B08D57]">
                Biography
              </span>

              <h2 className="mt-5 text-5xl font-bold text-[#2D2A26]">
                Professional Journey
              </h2>

            </div>

            <div className="mt-16 rounded-[30px] border border-[#E7DED1] bg-white p-12">

              <p className="text-justify leading-10 text-[#666]">
                Advocate Arun Kumar Tiwari is a seasoned legal professional and the Founder of AK Tiwari & Associates, a law firm committed to delivering practical, ethical, and result-oriented legal solutions. With more than 20 years of professional experience, he has successfully represented clients across a wide spectrum of legal matters and has earned a reputation for his dedication, strategic thinking, and unwavering commitment to justice.
                <br /><br />
                Over the course of his legal career, Advocate Arun Kumar Tiwari has handled numerous cases before Family Courts, Civil Courts, Criminal Courts, District Courts, and various judicial forums. His extensive courtroom experience enables him to understand the complexities of litigation while providing clients with clear legal guidance at every stage of the proceedings.<br /><br />
                One of his primary areas of practice is Matrimonial Law. He has represented clients in a wide range of matrimonial disputes, including divorce petitions, mutual consent divorce, contested divorce, child custody matters, maintenance and alimony claims, domestic violence proceedings, restitution of conjugal rights, judicial separation, and other family-related disputes. Recognizing that family matters are often emotionally challenging, he approaches every case with professionalism, sensitivity, and a focus on achieving fair and practical outcomes for his clients.<br /><br />
                In addition to matrimonial litigation, Advocate Arun Kumar Tiwari has significant experience in Civil Law. He regularly advises and represents individuals, families, and businesses in matters involving property disputes, recovery suits, injunctions, partition suits, contractual disputes, declaration suits, specific performance, succession-related matters, and various other civil proceedings. His analytical approach and thorough understanding of procedural and substantive law enable him to develop effective legal strategies tailored to each client&apos;s unique circumstances.

              </p>

            </div>

          </div>
        </section>

        {/* Practice Areas */}

        <section className="py-10">

          <div className="container mx-auto px-6">

            <div className="text-center">

              <span className="text-sm uppercase tracking-[5px] text-[#B08D57]">
                Practice Areas
              </span>

              <h2 className="mt-5 text-5xl font-bold text-[#2D2A26]">
                Areas of Expertise
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {practiceAreas.map((item) => (

                <div
                  key={item}
                  className="rounded-3xl border border-[#E7DED1] bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <Scale
                    className="text-[#B08D57]"
                    size={34}
                  />

                  <h3 className="mt-6 text-2xl font-bold text-[#2D2A26]">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Qualifications */}

        <section className="bg-[#FFFDF9] py-10">

          <div className="container mx-auto px-6">

            <div className="grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-8 border border-[#E7DED1]">
                <GraduationCap className="text-[#B08D57]" size={34} />
                <h3 className="mt-6 text-2xl font-bold">Education</h3>
                <p className="mt-4 text-[#666]">
                  LL.B. • LL.M. (Update with actual qualifications)
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 border border-[#E7DED1]">
                <Briefcase className="text-[#B08D57]" size={34} />
                <h3 className="mt-6 text-2xl font-bold">Experience</h3>
                <p className="mt-4 text-[#666]">
                  20+ Years in Litigation & Advisory Practice.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 border border-[#E7DED1]">
                <BookOpen className="text-[#B08D57]" size={34} />
                <h3 className="mt-6 text-2xl font-bold">Membership</h3>
                <p className="mt-4 text-[#666]">
                  Bar Council & Professional Associations
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Achievements */}

        <section className="py-10">

          <div className="container mx-auto px-6">

            <div className="text-center">

              <span className="text-sm uppercase tracking-[5px] text-[#B08D57]">
                Achievements
              </span>

              <h2 className="mt-5 text-5xl font-bold text-[#2D2A26]">
                Professional Highlights
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">

              {achievements.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-5 rounded-3xl border border-[#E7DED1] bg-white p-8"
                >

                  <Award
                    className="mt-1 text-[#B08D57]"
                    size={30}
                  />

                  <p className="text-lg leading-8 text-[#666]">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Contact */}

        <section className="bg-[#AD905A] py-10 text-white">

          <div className="container mx-auto px-6 text-center">

            <h2 className="text-5xl font-bold">
              Contact Advocate Muskan
            </h2>

            <div className="mt-4 grid gap-8 md:grid-cols-3">

              <div>
                <Phone className="mx-auto mb-4 text-[#B08D57]" size={30} />
                <p>+91 9876543210</p>
              </div>

              <div>
                <Mail className="mx-auto mb-4 text-[#B08D57]" size={30} />
                <p>info@legalpartner.in</p>
              </div>

              <div>
                <MapPin className="mx-auto mb-4 text-[#B08D57]" size={30} />
                <p>Noida, Uttar Pradesh</p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
