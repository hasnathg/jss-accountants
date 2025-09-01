export default function Hero() {
  return (
    <section
      className="relative min-h-[75vh] flex items-center"
      style={{
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-24">
        {/* optional amber eyebrow */}
        <p className="text-amber-400 font-semibold tracking-wide text-3xl">Trusted accountants in Buckinghamshire</p>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-200">
          Stress-free Accounts &amp; Tax for Small,medium Businesses
        </h1>
        <p className="mt-4 text-white/85 max-w-2xl">
          Year-end accounts, VAT, payroll, and advisory — done right and on time.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="/contact"
            className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Book a free consultation
          </a>
          <a
            href="/services"
            className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-white/90 text-gray-900 border hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}
