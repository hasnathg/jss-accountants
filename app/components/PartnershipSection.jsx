export default function PartnershipSection() {
  const cards = [
    {
      title: "Side-by-side from day one",
      body:
        "We learn how you work, then build a plan that fits—so you can make confident decisions at every stage.",
      grid: "md:col-span-2", // top #1
    },
    {
      title: "Action on what matters",
      body:
        "We focus on the levers that move results—cash flow, compliance, and the insights that drive growth.",
      grid: "md:col-span-2", // top #2
    },
    {
      title: "Local roots, wider reach",
      body:
        "Based in Buckinghamshire and working across the UK, you get personal support with the reach you need.",
      grid: "md:col-span-2", // top #3
    },
    {
      title: "Expertise that adapts",
      body:
        "Rules change and goals evolve. Our accounting, tax, audit and advisory services scale with you.",
      grid: "md:col-span-2 md:col-start-2", // bottom #1 (centered)
    },
    {
      title: "Clarity from complexity",
      body:
        "We turn the numbers into plain next steps—so you always know what to do and why it matters.",
      grid: "md:col-span-2 md:col-start-4", // bottom #2 (centered)
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      {/* Heading + intro */}
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
          A partnership that lasts
        </h2>
        <p className="mt-4 text-gray-600 text-lg text-balance">
          For years we’ve built long-term relationships with businesses and individuals—being
          responsive, reliable, and focused on smarter decisions that keep you a step ahead.
        </p>
      </div>


      {/* 3 over 2 staggered grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-6">
        {cards.map(({ title, body, grid }, i) => (
          <div
            key={i}
            className={`p-6 bg-gray-50 border border-black/5 shadow transition hover:-translate-y-0.5
                        ${grid} min-h-56 flex flex-col justify-between
                        overflow-hidden [border-radius:2.5rem_0_2.5rem_0]`}
          >
            <div>
              <div className="h-1 w-10 bg-amber-500 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-gray-600">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
