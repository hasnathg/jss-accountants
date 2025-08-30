// app/components/TailoredExpertise.jsx
import Image from "next/image";

export default function TailoredExpertise() {
  return (
    <section className="section border-b">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-amber-500 font-semibold uppercase tracking-wide">Tailored expertise</p>
          <h2 className="section-title">Expert support at every stage</h2>
          <p className="mt-4 text-gray-600">
            Launching, scaling, or planning ahead — we’ll guide you with clear, proactive advice.
            Our team handles accounts, audit, tax, and business advisory with the personal care and
            commercial insight you expect.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
              <span><strong>Start & comply:</strong> registrations, bookkeeping, year-end.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
              <span><strong>Grow & optimise:</strong> cash flow, KPIs, management reports.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
              <span><strong>Tax planning:</strong> VAT, R&amp;D, allowances, director pay.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
              <span><strong>Personal tax:</strong> self-assessment, dividends, pensions.</span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="/services" className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-slate-900 text-white hover:opacity-85">
              Explore services
            </a>
            <a href="/contact" className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-white text-gray-900 border hover:bg-gray-50">
              Book a call
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div
          className="relative w-full aspect-[4/3] overflow-hidden shadow
                     [border-radius:4rem_0_4rem_0]"
        >
          <Image
            src="/s1.JPG"
            alt="Advisors working with a client"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
