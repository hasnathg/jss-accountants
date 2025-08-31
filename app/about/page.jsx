import Image from "next/image";

export const metadata = {
  title: "About Us | JSS & Co Accountants",
  description:
    "Modern, friendly and proactive accountants in the Thames Valley with 20+ years’ experience. Accounts, tax, payroll and advisory for SMEs and individuals.",
};

function Icon({ name, className = "h-6 w-6" }) {
  switch (name) {
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="relative min-h-[50vh] md:min-h-[60vh] flex items-end"
        style={{
          backgroundImage: 'url("/images/about-hero.jpg")', // put a wide image here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pb-12">
          <span className="inline-flex items-center gap-2 text-amber-300 font-semibold">
            <Icon name="spark" className="h-5 w-5" /> Since 2004
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Trusted accountants for 20+ years
          </h1>
          <p className="mt-3 max-w-2xl text-white/85 text-lg">
            Modern, friendly, and proactive support for small &amp; medium businesses and individuals across the Thames
            Valley and beyond.
          </p>
          {/* Stat badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/90 backdrop-blur text-slate-900 rounded-tl-2xl rounded-br-2xl px-4 py-2 shadow">
            <Icon name="clock" />
            <span><strong>20+ years</strong> experience</span>
          </div>
        </div>
      </section>

      {/* INTRO / QUESTIONS + IMAGE */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title text-gray-950">About JSS &amp; Co Accountants</h2>
            <p className="mt-4 text-gray-700">
              JSS &amp; Co Accountants is a modern, approachable firm based in the heart of the Thames Valley. We provide
              a comprehensive range of accounts, taxation, business advisory and support services to small and medium
              sized businesses and individuals.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Are you struggling with your tax returns?",
                "Do you need help with your accounts?",
                "Looking for proactive accountants who help you make more profit and pay less tax?",
                "Whatever your needs, we can help.",
              ].map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="/contact" className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400">
                Book a free meeting
              </a>
              <a href="/services" className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-white text-gray-900 border hover:bg-gray-50">
                Our services
              </a>
            </div>
          </div>

          <div
            className="relative w-full aspect-[4/3] overflow-hidden shadow
                       [border-radius:3rem_0_3rem_0]"
          >
            <Image
              src="/images/about-team.jpg" // add a photo to public/images/about-team.jpg
              alt="Our team working with clients"
              fill
              className="object-cover"
              sizes="(min-width:768px) 600px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* VALUES / WHY CHOOSE US */}
      <section className="section bg-slate-50 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-gray-950 text-center">Why choose us</h2>
          <p className="mt-3 text-center text-gray-700 max-w-3xl mx-auto">
            We combine rigorous technical expertise with practical, plain-English advice—so you can focus on running
            your business and plan with confidence.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "shield",
                title: "Proactive & reliable",
                text: "We don’t wait for year-end. Expect timely reminders, useful insights and clear next steps.",
              },
              {
                icon: "spark",
                title: "Sector experience",
                text: "Hands-on experience with SMEs across trades, services, e-commerce and more.",
              },
              {
                icon: "clock",
                title: "On time, every time",
                text: "Deadlines handled with care so you avoid penalties and keep cash flow steady.",
              },
              {
                icon: "check",
                title: "Clarity, not jargon",
                text: "We break down complex tax and accounting rules into simple, actionable guidance.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-black/5 shadow h-full
                           overflow-hidden [border-radius:2.5rem_0_2.5rem_0]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon name={c.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-gray-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section bg-gradient-to-b from-white to-slate-50 border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 font-semibold uppercase tracking-wide">Let’s talk</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
            Initial meetings are free and without obligation
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Tell us where you are today and where you want to go. We’ll outline the simplest, most tax-efficient path.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/contact"
              className="px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400"
            >
              Book a free consultation
            </a>
            <a
              href="tel:01753650554"
              className="px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-white text-gray-900 border hover:bg-gray-50"
            >
              Call 01753 650554
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
