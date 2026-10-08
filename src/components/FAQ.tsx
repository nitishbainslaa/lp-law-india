"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircleMore } from "lucide-react";

const faqs = [
  {
    question: "How can I schedule a legal consultation?",
    answer:
      "You can contact us through our Contact page, call our office, or submit an online consultation request. Our team will get back to you as soon as possible.",
  },
  {
    question: "What types of legal services do you provide?",
    answer:
      "We provide services in civil litigation, criminal law, family law, corporate law, property disputes, documentation, arbitration, and legal advisory.",
  },
  {
    question: "Do you provide online legal consultations?",
    answer:
      "Yes. We offer both online and in-person consultations based on your convenience and the nature of the legal matter.",
  },
  {
    question: "Are my discussions with your lawyers confidential?",
    answer:
      "Absolutely. Every consultation is handled with complete confidentiality and professional ethics.",
  },
  {
    question: "How much does the first consultation cost?",
    answer:
      "Consultation charges depend on the nature and complexity of your legal matter. Please contact us for detailed information.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#FFFDF9] py-10 mb-10 border-t border-[#E7DED1]"
    >
      <div className="container mx-auto px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-[#B08D57]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#2D2A26]">
              Have Questions?
            </h2>

            <p className="mt-6 text-justify leading-8 text-[#666]">
              We understand that choosing legal representation is
              an important decision. Here are answers to some of
              the most commonly asked questions.
            </p>

            <div className="mt-10 rounded-3xl border border-[#E7DED1] bg-[#F8F5EF] p-8">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B08D57] text-white">

                <MessageCircleMore size={30} />

              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Still Need Help?
              </h3>

              <p className="mt-3 leading-7 text-[#666]">
                Contact our legal team today and receive
                professional guidance for your legal matter.
              </p>

              <button className="mt-8 rounded-full bg-[#B08D57] px-8 py-4 text-white transition hover:bg-[#9A7848]">
                Contact Us
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-5">

            {faqs.map((faq, index) => {

              const open = active === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E7DED1] bg-white overflow-hidden"
                >

                  <button
                    onClick={() =>
                      setActive(open ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >

                    <span className="text-lg font-semibold text-[#2D2A26]">
                      {faq.question}
                    </span>

                    {open ? (
                      <Minus className="text-[#B08D57]" />
                    ) : (
                      <Plus className="text-[#B08D57]" />
                    )}

                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <p className="px-6 pb-6 leading-8 text-[#666]">
                        {faq.answer}
                      </p>

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