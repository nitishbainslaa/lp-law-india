import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { link } from "fs";



export default function Partners() {
  return (
    <section
  id="partners"
  className="bg-[#F8F5EF] py-10 border-t border-[#E7DED1]"
>
  <div className="container mx-auto max-w-5xl px-6 text-center">

    <span className="inline-flex rounded-full bg-[#EFE7DA] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#B08D57]">
      OUR LEGAL NETWORK
    </span>

    <h2 className="mt-8 text-5xl font-bold text-[#2D2A26]">
      Trusted Legal Professionals
      <br />
      Across India
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#666]">
      Legal Partners brings together experienced advocates,
      legal consultants and litigation professionals who
      work collaboratively to provide reliable legal
      representation across India. Our team is committed
      to delivering strategic legal advice, effective
      courtroom advocacy and practical solutions for
      individuals, families, startups, businesses and
      corporate clients.
    </p>

    <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-[#666]">
      With expertise spanning matrimonial disputes,
      criminal defence, civil litigation, corporate law,
      property matters, consumer disputes, arbitration,
      cheque bounce cases and regulatory compliance, we
      strive to provide transparent, ethical and
      result-oriented legal services while maintaining
      the highest standards of professionalism.
    </p>

    <Link
      href="/partner"
      className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#B08D57] px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-[#977446]"
    >
      Meet Our Partners
      <ArrowRight size={18} />
    </Link>

  </div>
</section>
  );
}
