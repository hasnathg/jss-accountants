"use client";

import { useForm as useFormspree, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "mgvlylqy";
  const [state, handleSubmit] = useFormspree(formspreeId);

  if (state.succeeded) {
    return (
      <section className="section min-h-[60vh] md:min-h-[70vh] grid place-items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
          Thanks — we’ve got your message!
        </h1>
        <p className="mt-3 text-gray-600">
          We’ll reply shortly with the next steps. If it’s urgent, feel free to call or email us.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
    );
  }

  return (
    <section className="section">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">Contact us</h1>
        <p className="mt-3 text-gray-600">
          Tell us a little about your needs. We’ll reply promptly with next steps.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          {/* Honeypot (kept in DOM, hidden visually) */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="phone">Phone (optional)</label>
            <input
              id="phone"
              name="phone"
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400 disabled:opacity-60"
            >
              {state.submitting ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
