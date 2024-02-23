import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: any, res: NextResponse) {
  try {
    const buffers = [];
    for await (const chunk of req.body) {
      buffers.push(chunk);
    }
    const data = JSON.parse(Buffer.concat(buffers).toString());
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOption = {
      from: `portfolio: ${email}`,
      to: "antoine.savreux06@gmail.com",
      subject: `Portfolio - Message de contact de ${email}`,
      html: `<h3>Nouveau message de portfolio</h3>
      <p><strong>Message :</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du mail" },
      { status: 500 }
    );
  }
}
