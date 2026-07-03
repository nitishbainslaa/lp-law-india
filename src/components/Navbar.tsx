"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Partners",
    href: "#partners",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {

  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-[#F8F5EF]"
      }`}
    >

      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="group">

          <h1 className="text-3xl font-bold tracking-wide text-[#2D2A26] transition">

            <span className="text-[#B08D57]">
              LP
            </span>{" "}

            Law India

          </h1>

        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-3 lg:flex">

          {menuItems.map((item) => {

            const active = pathname === item.href;

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-5 py-2 text-[15px] font-medium transition-all duration-300

                ${
                  active
                    ? "bg-[#B08D57] text-white shadow-lg"
                    : "text-[#2D2A26] hover:bg-[#EFE4D3] hover:text-[#B08D57]"
                }

                `}
              >

                {item.name}

              </Link>

            );

          })}

        </nav>

        {/* CTA */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#B08D57] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9A7848]"
          >

            Free Consultation

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />

          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-[#2D2A26]"
        >

          {mobileMenu ? (

            <X size={28} />

          ) : (

            <Menu size={28} />

          )}

        </button>

      </div>

            {/* Mobile Menu */}

      {mobileMenu && (
        <div className="border-t border-[#E7DED1] bg-[#FFFDF9] shadow-xl lg:hidden">

          <div className="container mx-auto px-6 py-6">

            <div className="flex flex-col gap-2">

              {menuItems.map((item) => {

                const active = pathname === item.href;

                return (

                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className={`rounded-xl px-5 py-4 text-base font-medium transition-all duration-300

                    ${
                      active
                        ? "bg-[#B08D57] text-white shadow-lg"
                        : "text-[#2D2A26] hover:bg-[#EFE4D3] hover:text-[#B08D57]"
                    }

                    `}
                  >

                    {item.name}

                  </Link>

                );

              })}

              <Link
                href="/contact"
                onClick={() => setMobileMenu(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#B08D57] px-6 py-4 text-white font-semibold transition hover:bg-[#9A7848]"
              >
                Free Consultation

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>
      )}

    </header>

  );

}
