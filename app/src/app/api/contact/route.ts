import { NextResponse, NextRequest } from "next/server";
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

type bodyData = {
  name: string,
  email: string,
  message: string,
}

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function POST(req: NextRequest, _res: NextResponse) {
  const body: bodyData = await req.json();
  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({username: 'api', key: API_KEY});

  const messageData = {
  from: body.email,
  to: process.env.MY_EMAIL,
  subject: 'Contact Form Portfolio / Nome da pessoa: ' + body.name,
  text: body.message
  };

  try {
    await client.messages.create(DOMAIN, messageData);
    return NextResponse.json({ status: 201, message: 'Email enviado com sucesso!' });
  } catch (err) {
    return NextResponse.json({ status: 500, message: 'Algo deu Errado!' });
  }
}
