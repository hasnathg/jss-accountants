// app/api/contact/route.js
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    // simple validation
    if (body._gotcha) return NextResponse.json({ ok: true }); // honeypot
    for (const f of ["name", "email", "message"]) {
      if (!body?.[f]) throw new Error(`Missing ${f}`);
    }

    const id = process.env.FORMSPREE_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!id) throw new Error("Formspree ID not set");

    const resp = await fetch(`https://formspree.io/f/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data?.errors?.[0]?.message || "Formspree error");
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message || "Invalid request" }, { status: 400 });
  }
}
