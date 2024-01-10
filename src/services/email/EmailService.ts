import { ApiResponseSuccess } from "@/dbConf/ApiConf";
import nodemailer from "nodemailer";

const fromEmail = "no-reply@devriser.com";
const password = "dgyh gdnc bacg hkhc";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // `true` for port 465, `false` for all other ports
  auth: {
    user: fromEmail,
    pass: password,
  },
});

function formatValue(value: any) {
  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value, null, 2);
  }
  return value;
}

function formatPayload(payload: any) {
  let formattedText = "";

  for (const [key, value] of Object.entries(payload)) {
    formattedText += `${key}: ${formatValue(value)}\n`;
  }

  return formattedText;
}

export default async function sendMail({
  email,
  subject,
  text,
  payload,
  html,
}: {
  email: string;
  subject: string;
  text?: string;
  payload?: any;
  html?: string;
}) {
  // send mail with defined transport object
  const info: any = await transporter.sendMail({
    from: fromEmail, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: `Hello Sales Team,

A new query has been raised. Please go through the following details and contact the person who raised the query.

${formatPayload(payload)}

Best regards
Team DevRiser

`,
    // plain text body
    html: html, // html body
  });
  const { messageId, messageSize, messageTime } = info;
  const res_json = ApiResponseSuccess({
    status_code: 200,
    message: "Email sent!",
    data: { messageId, messageSize, messageTime },
  });
  return res_json;
}
