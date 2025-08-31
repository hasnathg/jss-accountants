import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  company: z.string().max(0).optional(), // honeypot must remain empty
});

export async function POST(req) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // TODO (next step): save to MongoDB and/or send email
    // For now, just acknowledge
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err?.issues?.[0]?.message || "Invalid request";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
