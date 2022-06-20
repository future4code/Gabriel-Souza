import { Request, Response } from "express";

import { LoginRepository } from "../../repositories/database-repositories/login-database-repository";
import { LoginCases } from "../../business/loginCases/LoginCases";

import { BCryptAdapter } from "../../adapters/bcrypt/bcrypt.encrypt-adapter";

import { CustomError } from "../../Erros/CustomError";

export const loginControllers = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    const { email, passwordUser } = req.body;

    const loginRepository = new LoginRepository();
    const bCryptAdapter = new BCryptAdapter();

    const loginCases = new LoginCases(loginRepository, bCryptAdapter);

    const tokenSuccess = await loginCases.loginUser({
      email,
      passwordUser
    });

    return res.status(201).json({token: tokenSuccess});
  } catch (error: any) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};