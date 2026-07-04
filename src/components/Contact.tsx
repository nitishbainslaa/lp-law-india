import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "Noida, Uttar Pradesh, India",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@legalpartner.in",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8F5EF] py-0 mb-10"
    >
      <div className="container mx-auto px-6">

        <div className="mb-10 text-center">

          <p className="uppercase tracking-[4px] text-[#B08D57]">
            Contact Us
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#2D2A26]">
            Let's Discuss Your Legal Matter
          </h2>
          <P>Whether you require legal consultation, litigation support, 
            corporate advisory or family law assistance, our experienced legal 
            professionals are here to guide you with practical, transparent and 
            result-oriented legal solutions.</P>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            {contactInfo.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-3xl border border-[#E7DED1] bg-white p-6"
                >

                  <div className="flex h-10 w-6 items-center justify-center rounded-2xl bg-[#B08D57] text-white">

                    <Icon size={24} />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-[#2D2A26]">
                      {item.title}
                    </h3>


                  </div>

                </div>
              );
            })}

          </div>

          {/* Right */}

          <form className="rounded-3xl border border-[#E7DED1] bg-white p-8 shadow-sm">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-[#E7DED1] p-4 outline-none focus:border-[#B08D57]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-[#E7DED1] p-4 outline-none focus:border-[#B08D57]"
              />

            </div>

            <div className="mt-6">

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-[#E7DED1] p-4 outline-none focus:border-[#B08D57]"
              />

            </div>

            <div className="mt-6">

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-[#E7DED1] p-4 outline-none focus:border-[#B08D57]"
              />

            </div>

            <div className="mt-6">

              <textarea
                rows={6}
                placeholder="Tell us about your legal matter..."
                className="w-full rounded-xl border border-[#E7DED1] p-4 outline-none focus:border-[#B08D57]"
              />

            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 text-white transition hover:bg-[#9A7848]"
            >

              Send Message

              <Send size={18} />

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
