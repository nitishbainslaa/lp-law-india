"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFDF9]/95 backdrop-blur-lg shadow-md"
          : "bg-[#F8F5EF]"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="select-none">
          <h1 className="text-3xl font-bold tracking-wide text-[#2D2A26]">
            <span className="text-[#B08D57]">LP</span> Law India
          </h1>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[15px] font-medium text-[#2D2A26] transition hover:text-[#B08D57]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#B08D57] transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-[#2D2A26]"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="border-t border-[#E7DED1] bg-[#FFFDF9] md:hidden">
          <div className="flex flex-col px-6 py-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="border-b border-[#E7DED1] py-4 text-[#2D2A26] transition hover:text-[#B08D57]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}