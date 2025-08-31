"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide a few details (min 10 chars)"),
  // honeypot (must stay empty)
  company: z.string().max(0).optional(),
});

export default function ContactPage() {
  const [status, setStatus] = useState({ ok: false, msg: "" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(values) {
    setStatus({ ok: false, msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong");
      setStatus({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      reset();
    } catch (e) {
      setStatus({ ok: false, msg: e.message || "Submission failed. Please try again." });
    }
  }

  return (
    <section className="section">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
          Contact us
        </h1>
        <p className="mt-3 text-gray-600">
          Tell us a little about your needs. We’ll reply promptly with next steps.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
          {/* Honeypot (hide visually, keep in DOM) */}
          <div className="hidden">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" {...register("company")} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                {...register("name")}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                {...register("email")}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input
              type="tel"
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              {...register("phone")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">How can we help?</label>
            <textarea
              rows={6}
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              {...register("message")}
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400 disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
            {status.msg && (
              <p className={`text-sm ${status.ok ? "text-emerald-600" : "text-red-600"}`}>{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
