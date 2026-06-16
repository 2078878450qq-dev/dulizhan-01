import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, company, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "contact@yourdomain.com",
        to: process.env.CONTACT_EMAIL || "info@example.com",
        subject: "[Contact] Message from " + name,
        html: "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Phone: " + (phone || "-") + "</p><p>Company: " + (company || "-") + "</p><p>" + message + "</p>",
      });
    } catch (e) { console.error(e); }
  }
  return NextResponse.json({ success: true });
}
