// import { ApiResponseSuccess } from "@/dbConf/ApiConf";
// import nodemailer from "nodemailer";

// const fromEmail = "samplemaildevriser@gmail.com"
// const password = "jjwg qfwj znvl czza"

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // `true` for port 465, `false` for all other ports
//     auth: {
//         user: fromEmail,
//         pass: password,
//     },
// });

// export default async function sendMail({ email, subject, text, html }: { email: string, subject: string, text?: string, html?: string }) {
//     // send mail with defined transport object
//     const info: any = await transporter.sendMail({
//         from: fromEmail, // sender address
//         to: email, // list of receivers
//         subject: subject, // Subject line
//         text: text, // plain text body
//         html: html, // html body
//     });
//     const { messageId, messageSize, messageTime } = info
//     const res_json = ApiResponseSuccess({ status_code: 200, message: "Email sent!", data: { messageId, messageSize, messageTime } })
//     return res_json
// }