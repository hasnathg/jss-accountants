"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* --- Icons --- */
function Icon({ name, className = "h-6 w-6" }) {
  switch (name) {
    case "accountancy":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="4" width="14" height="16" rx="2" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M7 8h6M7 12h6M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 8h2a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case "bookkeeping":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "vat":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="16.5" r="2.5" fill="currentColor" />
        </svg>
      );
    case "payroll":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
          <circle cx="7.5" cy="14" r="1.5" fill="currentColor" />
          <path d="M12 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "reporting":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 20V7M9 20V4M14 20v-6M19 20V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "tax":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "cashflow":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3 12h6l2-3 4 6 2-3h4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 6v12" stroke="currentColor" strokeWidth="2" opacity=".25" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

/* --- Data --- */
const SERVICES = [
  {
    key: "accountancy",
    title: "Accountancy",
    intro:
      "Annual accounts prepared in line with Companies Act and HMRC requirements, explained in plain English so you can act on the numbers.",
    points: [
      "Statutory accounts for Companies House & tax authorities",
      "Clear review of your Profit & Loss and Balance Sheet",
      "Tax calculations and filing, with deadline reminders",
      "Insights to support growth and funding conversations",
    ],
  },
  {
    key: "bookkeeping",
    title: "Book-keeping",
    intro:
      "We take the burden off your team with tidy, timely records and useful monthly packs.",
    points: [
      "Regular posting and reconciliations",
      "VAT return preparation & submission",
      "Monthly/quarterly management accounts",
      "Setup & training on leading software (Xero/QuickBooks etc.)",
    ],
  },
  {
    key: "vat",
    title: "VAT Returns & Advice",
    intro:
      "Practical VAT support—from first registration to complex queries and HMRC disputes.",
    points: [
      "VAT registration and scheme selection",
      "Preparation, review and submission of returns",
      "Control checks and reconciliations",
      "HMRC queries and tribunal representation",
    ],
  },
  {
    key: "payroll",
    title: "Payroll",
    intro:
      "Accurate and confidential payroll run on your schedule, with HMRC filings handled.",
    points: [
      "Weekly, fortnightly, 4-weekly or monthly payroll",
      "Auto-enrolment pensions and statutory pay",
      "HMRC RTI (FPS/EPS) and year-end P60/P45",
      "Secure delivery of payslips and reports",
    ],
  },
  {
    key: "reporting",
    title: "Management Reporting",
    intro:
      "Don’t wait for year-end—use timely reports and KPIs to steer the business.",
    points: [
      "Monthly or quarterly management accounts",
      "KPI dashboards & ratio analysis",
      "Cash flow and margin tracking",
      "Review meetings with clear next steps",
    ],
  },
  {
    key: "tax",
    title: "HMRC Tax Enquiries",
    intro:
      "If HMRC opens an enquiry, we manage the process, correspondence and defence.",
    points: [
      "Representation and liaison with HMRC",
      "Records review and disclosure strategy",
      "Mitigate penalties and protect your position",
      "Calm guidance from start to resolution",
    ],
  },
  {
    key: "cashflow",
    title: "Cash Flow Forecasting",
    intro:
      "Look ahead with rolling forecasts and scenarios so you can plan hiring and investment.",
    points: [
      "12-month and rolling forecasts",
      "‘What-if’ scenarios for hiring and capex",
      "Link to budgets and management accounts",
      "Regular updates or fully managed service",
    ],
  },
];

/* --- Component --- */
export default function ServicesClient() {
  const [active, setActive] = useState(SERVICES[0].key);
  const contentRef = useRef(null);

  // deep-link via hash (#payroll, etc.)
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    if (hash && SERVICES.some((s) => s.key === hash)) setActive(hash);
  }, []);

  // scroll content into view on mobile when changing
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  const current = useMemo(() => SERVICES.find((s) => s.key === active) || SERVICES[0], [active]);

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <header className="mb-8">
          <p className="text-amber-600 font-semibold uppercase tracking-wide">Our Services</p>
          <h1 className="section-title text-gray-950">How we can help</h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Select a service to see what’s included. Initial meetings are free and without obligation.
          </p>
        </header>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <nav aria-label="Services" className="md:sticky md:top-24">
              <ul className="space-y-2">
                {SERVICES.map((s) => {
                  const isActive = s.key === active;
                  return (
                    <li key={s.key}>
                      <a
                        href={`#${s.key}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s.key);
                          if (typeof history !== "undefined") {
                            history.replaceState(null, "", `#${s.key}`);
                          }
                        }}
                        className={`group flex items-center gap-3 rounded-xl border px-3 py-2 transition
                          ${isActive
                            ? "border-amber-300 bg-amber-50 text-amber-900"
                            : "border-black/10 bg-white hover:bg-slate-50"
                          }`}
                      >
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full
                            ${isActive ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700"}`}
                        >
                          <Icon name={s.key} />
                        </span>
                        <span className="font-medium">{s.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <div className="mt-6 p-4 rounded-2xl border border-black/10 bg-white">
                <p className="text-sm text-gray-700">Not sure where to start?</p>
                <a
                  href="/contact"
                  className="mt-2 inline-block px-4 py-2 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400"
                >
                  Book a free consultation
                </a>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <div className="md:col-span-8 lg:col-span-9" ref={contentRef}>
            <article className="p-6 md:p-8 bg-white border border-black/5 shadow overflow-hidden [border-radius:3rem_0_3rem_0]">
              <header className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon name={current.key} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{current.title}</h2>
                  <p className="mt-2 text-gray-700">{current.intro}</p>
                </div>
              </header>

              <hr className="my-6 border-black/10" />

              <ul className="space-y-3">
                {current.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400">
                  Talk to an advisor
                </a>
                <a href="tel:01753650554" className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-white text-gray-900 border hover:bg-gray-50">
                  Call 01753 650554
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
