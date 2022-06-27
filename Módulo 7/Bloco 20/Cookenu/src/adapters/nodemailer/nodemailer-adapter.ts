import { IMailAdapter, ISendMailData } from "../nodemailer-i-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525, //* true para a porta 465 e false para as outras.
  secure: false,
  auth: {
    user: "d96a7a69b294e4",
    pass: "0ce0449d8ace46"
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail ({ subject, body, email }: ISendMailData) {
    await transport.sendMail({
      from: `"Dev Gabriel Silva"  <gabriel127.gk@gmail.com>`,
      to: `<${email}>`,
      subject,
      html: body
    });
  };
};