import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Partners", href: "#partners" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Civil Litigation",
  "Corporate Law",
  "Property Law",
  "Family Law",
  "Legal Documentation",
  "Arbitration",
];

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-white">

      <div className="container mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold">

              <span className="text-[#B08D57]">
                LEGAL
              </span>{" "}
              PARTNERS

            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Legal Partners is committed to delivering trusted,
              ethical and client-focused legal services with
              professionalism, transparency and dedication.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#B08D57]">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition hover:text-[#B08D57]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#B08D57]">
              Practice Areas
            </h3>

            <ul className="space-y-4">

              {services.map((item) => (
                <li
                  key={item}
                  className="text-gray-300"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#B08D57]">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <MapPin
                  className="mt-1 text-[#B08D57]"
                  size={20}
                />

                <p className="text-gray-300">
                  Noida,
                  Uttar Pradesh,
                  India
                </p>

              </div>

              <div className="flex gap-4">

                <Phone
                  className="text-[#B08D57]"
                  size={20}
                />

                <p className="text-gray-300">
                  +91 98765 43210
                </p>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="text-[#B08D57]"
                  size={20}
                />

                <p className="text-gray-300">
                  info@legalpartners.in
                </p>

              </div>

            </div>

            {/* Social */}

  <div className="mt-8 flex gap-4">

  <a
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B3733] transition hover:bg-[#B08D57]"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B3733] transition hover:bg-[#B08D57]"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B3733] transition hover:bg-[#B08D57]"
  >
    <FaLinkedinIn size={18} />
  </a>

</div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#44403C]">

        <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row">

          <p className="text-gray-400">
            © {new Date().getFullYear()} LEGAL PARTNERS.
            All Rights Reserved.
          </p>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D57] transition hover:scale-110"
          >

            <ArrowUp />

          </a>

        </div>

      </div>

    </footer>
  );
}
