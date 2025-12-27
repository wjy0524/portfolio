import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { message } = await req.json();
  console.log("📨 incoming message:", message);
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["wonjaeyeon0524@gmail.com"],
    subject: "📩 New Portfolio Message",
    html: `
      <p>You received a new message:</p>
      <p>${message}</p>
    `,
  });

  return Response.json({ success: true });
}

