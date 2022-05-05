import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config();

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER ,
    pass: process.env.NODEMAILER_PASS
  }
});

export const bodyEmail = async ( nameUser: string, emailUser: string, passwordUser: string ): Promise<void> => {
  await transport.sendMail({
    from: "De Gabriel Silva <gabriel127.gk@gmail.com>",
    to: `${nameUser} <${emailUser}>`,
    subject: `Olá ${nameUser} você acabou de ser adicionado no banco de dados do LabEcommerce 🙂`,
    html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p style="font-weight: bold;">Informaões de cadastro</p>`,
        `<p>Nome: <strong style="color: red;">${nameUser}</strong></p>`,
        `<p>Email: <strong style="color: blue">${emailUser}</strong></p>`,
        `<p>Senha: ${passwordUser}</p>`,
        `</div>`
      ].join("\n")
  });
};