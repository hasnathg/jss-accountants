// "use client";

// import { useEffect, useState } from "react";

// const TESTIMONIALS = [
//   {
//     quote:
//       "Our experience with JSS & Co Accountants has been outstanding. They’re highly knowledgeable, quick to respond, and great value. Their tax-efficient guidance means we can focus on our goals while staying fully compliant.",
//     author: "Raiyan",
//   },
//   {
//     quote:
//       "As a consultant physician, I found their personal tax support flawless. The team is responsive, friendly, and explains everything clearly. I confidently recommend them for anyone seeking expert help with tax affairs.",
//     author: "Marietta Pal-Magdics",
//   },
//   {
//     quote:
//       "With 10+ years’ experience in design sector accounting, JSS & Co were the perfect fit. They set up our full accounting system—VAT, payroll, pensions—and connected us with trusted specialists. A brilliant partner for a new business.",
//     author: "Joanne Quinn",
//   },
//   {
//     quote:
//       "From our first enquiry, their attention to detail impressed us. They respond quickly, go above and beyond, and make everything straightforward. We’ve had timely, tax-effective advice since 2014.",
//     author: "Daniel S Vythelingum",
//   },
//   {
//     quote:
//       "Professional, reliable, and genuinely helpful. They’ve supported me far beyond expectations, especially with company accounts and tax returns. I highly recommend JSS & Co for a personable, all-round service.",
//     author: "Sudeshna Choudhury",
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);

//   const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
//   const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

//   // Keyboard arrows for accessibility
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const t = TESTIMONIALS[index];

//   return (
//     <section className="section bg-white">
//       {/* Top: headings (full white) */}
//       <div className="max-w-3xl mx-auto text-center">
//         <p className="text-sm font-semibold tracking-widest uppercase text-amber-600">Testimonials</p>
//         <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
//           What our clients say
//         </h2>
//       </div>

//       {/* Quote panel */}
//       <div className="mt-10 md:mt-12 relative max-w-4xl mx-auto">
//         <div className="relative bg-slate-50 border border-black/5 rounded-3xl shadow px-6 md:px-10 py-12 md:py-16">
//           {/* Big quote mark at top center */}
//           <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow">
//             {/* quote icon */}
//             <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
//               <path
//                 d="M9 7c-2.8 0-5 2.2-5 5v5h5v-5H6.5C6.8 10.5 7.8 9 9 9V7zm11 0c-2.8 0-5 2.2-5 5v5h5v-5h-2.5c.3-1.5 1.3-3 2.5-3V7z"
//                 fill="currentColor"
//               />
//             </svg>
//           </div>

//           {/* Arrows */}
//           <button
//             type="button"
//             onClick={prev}
//             aria-label="Previous testimonial"
//             className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-black/10
//                        shadow flex items-center justify-center hover:bg-white focus:outline-none
//                        focus-visible:ring-2 focus-visible:ring-amber-400"
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
//             </svg>
//           </button>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next testimonial"
//             className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-black/10
//                        shadow flex items-center justify-center hover:bg-white focus:outline-none
//                        focus-visible:ring-2 focus-visible:ring-amber-400"
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
//             </svg>
//           </button>

//           {/* Quote content */}
//           <figure className="text-center">
//             <blockquote className="text-lg md:text-xl leading-relaxed text-gray-800 text-pretty">
//               {t.quote}
//             </blockquote>
//             <figcaption className="mt-6 font-semibold text-gray-900">{t.author}</figcaption>
//           </figure>
//         </div>

//         {/* Small index dots (optional) */}
//         <div className="mt-4 flex items-center justify-center gap-2">
//           {TESTIMONIALS.map((_, i) => (
//             <span
//               key={i}
//               className={`h-2 w-2 rounded-full transition ${
//                 i === index ? "bg-amber-500" : "bg-gray-300"
//               }`}
//               aria-hidden="true"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// app/components/Testimonials.jsx
"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Our experience with JSS & Co Accountants has been outstanding. They’re highly knowledgeable, quick to respond, and great value. Their tax-efficient guidance means we can focus on our goals while staying fully compliant.",
    author: "Thurstan",
  },
  {
    quote:
      "As a consultant physician, I found their personal tax support flawless. The team is responsive, friendly, and explains everything clearly. I confidently recommend them for anyone seeking expert help with tax affairs.",
    author: "Marietta Pal-Magdics",
  },
  {
    quote:
      "With 10+ years’ experience in design sector accounting, JSS & Co were the perfect fit. They set up our full accounting system—VAT, payroll, pensions—and connected us with trusted specialists. A brilliant partner for a new business.",
    author: "Joanne Quinn",
  },
  {
    quote:
      "From our first enquiry, their attention to detail impressed us. They respond quickly, go above and beyond, and make everything straightforward. We’ve had timely, tax-effective advice since 2014.",
    author: "Daniel S Vythelingum",
  },
  {
    quote:
      "Professional, reliable, and genuinely helpful. They’ve supported me far beyond expectations, especially with company accounts and tax returns. I highly recommend JSS & Co for a personable, all-round service.",
    author: "Sudeshna Choudhury",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="section py-20 md:py-28 bg-white">
      {/* headings */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-amber-600">Testimonials</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
          What our clients say
        </h2>
      </div>

      {/* quote panel */}
      <div className="mt-14 md:mt-16 relative max-w-4xl mx-auto">
        <div className="relative bg-slate-50 border border-black/5 rounded-[2rem] shadow
                        px-8 md:px-14 py-14 md:py-20 min-h-[420px] md:min-h-[500px]">
          {/* quote badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 7c-2.8 0-5 2.2-5 5v5h5v-5H6.5C6.8 10.5 7.8 9 9 9V7zm11 0c-2.8 0-5 2.2-5 5v5h5v-5h-2.5c.3-1.5 1.3-3 2.5-3V7z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-black/10
                       shadow flex items-center justify-center hover:bg-white focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border border-black/10
                       shadow flex items-center justify-center hover:bg-white focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </button>

          {/* content */}
          <figure className="text-center">
            <blockquote className="text-lg md:text-2xl leading-relaxed text-gray-800 text-pretty max-w-3xl mx-auto pt-20">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 font-semibold text-gray-900">{t.author}</figcaption>
          </figure>
        </div>

        {/* dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-amber-500" : "bg-gray-300"}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

