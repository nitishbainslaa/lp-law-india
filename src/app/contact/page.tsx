"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  Send,
} from "lucide-react";
const faqs = [
  {
    question: "How can I schedule a legal consultation?",
    answer:
      "You can call us, send an email, or submit the contact form on this page. Our team will get in touch to schedule a suitable appointment.",
  },
  {
    question: "Do you provide online consultations?",
    answer:
      "Yes. Depending on the nature of the matter, consultations can be arranged through phone or video conferencing.",
  },
  {
    question: "Which legal services do you provide?",
    answer:
      "We assist clients in matrimonial matters, civil litigation, criminal cases, corporate advisory, cheque bounce matters and several other legal areas.",
  },
  {
    question: "What documents should I bring for my first meeting?",
    answer:
      "Please bring any relevant agreements, notices, court documents, identification and other records related to your legal matter.",
  },
  {
    question: "What are your office timings?",
    answer:
      "Our office is open Monday to Saturday from 10:00 AM to 7:00 PM. Appointments are recommended.",
  },
];

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F5EF]">
{/* Hero */}

<section className="relative overflow-hidden py-24">

  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#B08D57]/10 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#B08D57]/10 blur-3xl"></div>

  <div className="container relative mx-auto px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-[#EFE4D3] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#B08D57]">
        CONTACT LP LAW INDIA
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight text-[#2D2A26] md:text-6xl">
        Let's Discuss Your
        <br />
        Legal Matter
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#666]">
        Whether you require legal consultation, litigation support,
        corporate advisory or family law assistance, our experienced
        legal professionals are here to guide you with practical,
        transparent and result-oriented legal solutions.
      </p>

    </div>

  </div>

</section>
        {/* Contact Information */}

<section className="pb-28">

  <div className="container mx-auto px-6">

    <div className="grid gap-12 lg:grid-cols-2">

      {/* Left */}

      <div>

        <span className="text-sm uppercase tracking-[4px] text-[#B08D57]">
          GET IN TOUCH
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
          We'd Love To Hear
          <br />
          From You
        </h2>

        <p className="mt-6 text-base leading-8 text-[#666]">
          Whether you are seeking legal advice, representation, or
          simply wish to discuss your legal concerns, our team is here
          to assist you. Contact us using the information below or
          complete the enquiry form.
        </p>

        {/* Contact Cards */}

        <div className="mt-10 space-y-6">

          {/* Address */}

          <div className="flex gap-5 rounded-3xl border border-[#E7DED1] bg-white p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5EF]">
              <MapPin className="text-[#B08D57]" />
            </div>

            <div>

              <h3 className="text-xl font-semibold text-[#2D2A26]">
                Office Address
              </h3>

              <p className="mt-2 leading-7 text-[#666]">
                Galaxy Blue Sapphire Plaza
                <br />
                Greater Noida West
                <br />
                Uttar Pradesh – India
              </p>

            </div>

          </div>

          {/* Phone */}

          <div className="flex gap-5 rounded-3xl border border-[#E7DED1] bg-white p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5EF]">
              <Phone className="text-[#B08D57]" />
            </div>

            <div>

              <h3 className="text-xl font-semibold text-[#2D2A26]">
                Phone
              </h3>

              <p className="mt-2 text-[#666]">
                +91 XXXXXXXXXX
              </p>

            </div>

          </div>

          {/* Email */}

          <div className="flex gap-5 rounded-3xl border border-[#E7DED1] bg-white p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5EF]">
              <Mail className="text-[#B08D57]" />
            </div>

            <div>

              <h3 className="text-xl font-semibold text-[#2D2A26]">
                Email
              </h3>

              <p className="mt-2 text-[#666]">
                info@legalpartner.in
              </p>

            </div>

          </div>

          {/* Office Hours */}

          <div className="flex gap-5 rounded-3xl border border-[#E7DED1] bg-white p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5EF]">
              <Clock3 className="text-[#B08D57]" />
            </div>

            <div>

              <h3 className="text-xl font-semibold text-[#2D2A26]">
                Office Hours
              </h3>

              <p className="mt-2 leading-7 text-[#666]">
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="rounded-[36px] border border-[#E7DED1] bg-white p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-[#2D2A26]">
          Send Us A Message
        </h2>

        <p className="mt-4 text-[#666]">
          Fill out the form below and our legal team will contact you shortly.
        </p>

        <form className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-2xl border border-[#E7DED1] bg-[#F8F5EF] px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-[#E7DED1] bg-[#F8F5EF] px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-[#E7DED1] bg-[#F8F5EF] px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-2xl border border-[#E7DED1] bg-[#F8F5EF] px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-2xl border border-[#E7DED1] bg-[#F8F5EF] px-5 py-4 outline-none focus:border-[#B08D57]"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 text-white transition hover:bg-[#9A7848]"
          >
            Send Message

            <Send size={18} />

          </button>

        </form>

      </div>

    </div>

  </div>

</section>
        {/* Google Map */}

<section className="pb-28">

  <div className="container mx-auto px-6">

    <div className="mb-12 text-center">

      <span className="text-sm uppercase tracking-[4px] text-[#B08D57]">
        OUR LOCATION
      </span>

      <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
        Visit Our Office
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#666]">
        Our office is conveniently located at Galaxy Blue Sapphire Plaza,
        Greater Noida West. We welcome clients by appointment and are
        committed to providing a professional and comfortable consultation
        experience.
      </p>

    </div>

    <div className="overflow-hidden rounded-[36px] border border-[#E7DED1] shadow-lg">

      <iframe
        src="https://www.google.com/maps?q=Galaxy+Blue+Sapphire+Plaza+Greater+Noida+West&output=embed"
        width="100%"
        height="550"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>

    </div>

  </div>

</section>
        {/* FAQ */}

<section className="pb-28">

  <div className="container mx-auto max-w-4xl px-6">

    <div className="mb-14 text-center">

      <span className="text-sm uppercase tracking-[4px] text-[#B08D57]">
        FREQUENTLY ASKED QUESTIONS
      </span>

      <h2 className="mt-4 text-4xl font-bold text-[#2D2A26]">
        Have Questions?
      </h2>

      <p className="mt-6 text-base leading-8 text-[#666]">
        Here are answers to some of the most common questions our
        clients ask before scheduling a consultation.
      </p>

    </div>

    <div className="space-y-5">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-[#E7DED1] bg-white"
        >

          <button
            onClick={() =>
              setOpenFAQ(openFAQ === index ? null : index)
            }
            className="flex w-full items-center justify-between px-8 py-6 text-left"
          >

            <h3 className="text-lg font-semibold text-[#2D2A26]">
              {faq.question}
            </h3>

            <ChevronDown
              className={`transition duration-300 ${
                openFAQ === index ? "rotate-180" : ""
              }`}
            />

          </button>

          {openFAQ === index && (

            <div className="border-t border-[#E7DED1] px-8 py-6">

              <p className="leading-8 text-[#666]">
                {faq.answer}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>

  </div>

</section>
      </main>

      <Footer />
    </>
  );
}
