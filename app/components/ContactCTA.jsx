export default function ContactCTA() {
  return (
    <section className="section py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 border-t border-black/5">
      <div className="max-w-5xl mx-auto min-h-[320px] md:min-h-[380px] flex flex-col items-center justify-center text-center">
        <p className="text-amber-600 font-semibold uppercase tracking-wide">Ready to talk?</p>

        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
          Let’s make your accounting stress-free
        </h2>

        <p className="mt-3 text-gray-600 text-lg max-w-3xl">
          Book a quick chat and we’ll outline the simplest next steps for your business.
        </p>

        <div className="mt-8 md:mt-10 flex items-center justify-center gap-3">
          <a
            href="/contact"
            className="px-6 md:px-7 py-3 md:py-3.5 rounded-tl-2xl rounded-br-2xl
                       bg-amber-500 text-slate-900 hover:bg-amber-400
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Book a free consultation
          </a>
          <a
            href="/services"
            className="px-6 md:px-7 py-3 md:py-3.5 rounded-tl-2xl rounded-br-2xl
                       bg-white text-gray-900 border hover:bg-gray-50"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
