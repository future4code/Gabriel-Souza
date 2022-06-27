import { Request, Response } from "express";

import { UpdatePasswordRepository } from "../../repositories/UpdatePasswordRepository";
import { UpdatePasswordCases } from "../../business/updatePasswordCases/UpdatePasswordCases";

import { BCryptAdapter } from "../../adapters/bcrypt/BcryptAdapter";
import { NodemailerMailAdapter } from "../../adapters/nodemailer/nodemailer-adapter";

import { CustomError } from "../../errors/CustomError";

export const updatePasswordControllers = async ( req: Request, res: Response): Promise<any> => {
  try {

    const userId = req.userId;

    const updatePasswordRepository = new UpdatePasswordRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const bcryptAdapter = new BCryptAdapter();

    const updatePasswordCases = new UpdatePasswordCases(
      updatePasswordRepository,
      bcryptAdapter,
      nodemailerMailAdapter
    );
    
    //* Si de certo retorna o email do usuário.
    const email = await updatePasswordCases.updatePassword({userId});

    return res.status(200).json({
      message: `Senha atualizada com sucesso. Sua nova senha foi enviada para seu email: ${email}.`
    });
  } catch (error) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  }
};