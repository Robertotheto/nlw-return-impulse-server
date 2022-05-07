import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4802cc69d30d6d",
    pass: "5fc683f3dedb66"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendEmail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback <oi@feedback.com>',
      to: 'Roberto dos Santos <robertodossantosfilho1001@gmail.com>',
      subject,
      html: body
    })
  }
}