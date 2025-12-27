import { Resend } from "resend";

export async function POST(req: Request) {
  const { message } = await req.json();

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing");
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }

  // ✅ 여기서 초기화 (런타임)
  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["jaeyeonwon@gmail.com"],
    subject: "📩 New Portfolio Message",
    html: `
      <p>You received a new message:</p>
      <p>${message}</p>
    `,
  });

  return Response.json({ success: true });
}

