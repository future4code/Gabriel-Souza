import { IUpdatePasswordModel } from "../../model/updatePasswordModel";

import { IBCryptAdapter } from "../../adapters/bcrypt-i-adapter";
import { IMailAdapter } from "../../adapters/nodemailer-i-adapter";

import { generateId }from "../../services/generateId"

interface IUpdatePasswordCasesRequest {
  userId: string;
};

export class UpdatePasswordCases {
  constructor (
    private updatePasswordModel: IUpdatePasswordModel,
    private bcryptAdapter: IBCryptAdapter,
    private mailAdapter: IMailAdapter
  ){};

  async updatePassword ( request: IUpdatePasswordCasesRequest ) {
    const { userId } = request;

    const [ user ] = await this.updatePasswordModel.searchUser(userId);
    const {id, name, email, password } = user;

    //* Sem tempo para fazer com uma biblioteca de gera senhas então botei o gerador
    //* de ids.
    const newPassword = generateId();

    const encryptPassword = await this.bcryptAdapter.hashEncrypt({ 
      password: newPassword 
    });

    await this.updatePasswordModel.update({
        userId,
        newPassword: encryptPassword
    });

      await this.mailAdapter.sendMail({
        email: `${email}`,
        subject: "Nova senha",
        body:  [
          `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
          `<p><strong>Senha atualizada.</strong></p>`,
          `<p>Nova senha: <i style="color: greenyellow;">${newPassword}</i></p>`,
          `</div>`
        ].join("\n")
      });

      return email;
  };
};