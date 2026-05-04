import nodemailer from "nodemailer";

type contactBody = {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "All fields required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}