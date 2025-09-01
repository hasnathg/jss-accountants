// app/components/ServicesGlance.jsx

const services = [
  { key: "accountancy", title: "Accountancy" },
  { key: "bookkeeping", title: "Book-keeping" },
  { key: "vat",         title: "VAT Returns" },
  { key: "payroll",     title: "Payroll" },
  { key: "reporting",   title: "Management Reporting" },
  { key: "tax",         title: "Tax Enquiries" },
  { key: "cashflow",    title: "Cash Flow Forecasting" },
  { key: "selfassessment", title: "Self Assessment" },
];

// inline SVGs (no extra deps)
function Icon({ name, className = "h-12 w-12 md:h-16 md:w-16" }) {
  switch (name) {
    case "accountancy":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="4" width="14" height="16" rx="2" stroke="currentColor" fill="none" strokeWidth="2"/>
          <path d="M7 8h6M7 12h6M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 8h2a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      );
    case "bookkeeping":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "vat":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="16.5" r="2.5" fill="currentColor"/>
        </svg>
      );
    case "payroll":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7.5" cy="14" r="1.5" fill="currentColor"/>
          <path d="M12 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "reporting":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 20V7M9 20V4M14 20v-6M19 20V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "tax":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
      


  case "selfassessment":
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 3v5h5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M8.5 15.5l2 2 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
    case "cashflow":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3 12h6l2-3 4 6 2-3h4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6v12" stroke="currentColor" strokeWidth="2" opacity=".25"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesGlance() {
  return (
    <section className="section py-20 md:py-28 border-amber-300">
      {/* top row: left heading, right paragraph */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-amber-500 font-semibold uppercase tracking-wide text-3xl">Our Services</p>
          <h2 className="section-title text-gray-950 font-medium">We’re here to help</h2>
        </div>
        <p className="text-gray-600 text-lg">
          With deep technical know-how and specialized experience, we help you solve problems and
          build a business that fits your goals. Expect advice that’s practical, proactive, and
          always in your best interest.
        </p>
      </div>

      {/* auto-scrolling row */}
      <div className="mt-14 md:mt-16 marquee py-6 md:py-10">
        <div className="marquee__track gap-5">
          {[...services, ...services].map((s, i) => (
            <div
              key={`${s.key}-${i}`}
              className="min-w-[260px] max-w-[260px] p-7 md:p-8 
                         min-h-56 md:min-h-64
                         bg-zinc-50 border border-black/5 shadow
                         flex flex-col items-center justify-between text-center
                         overflow-hidden [border-radius:3rem_0_3rem_0]
                         transition hover:-translate-y-0.5"
            >
              {/* TOP: big icon in a soft badge */}
              <span className="inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-amber-100 text-amber-700 shadow-inner">
                <Icon name={s.key} />
              </span>

              {/* BOTTOM: service title */}
              <h3 className="mt-6 text-base md:text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
