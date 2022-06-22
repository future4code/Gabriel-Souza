import { Request, Response } from "express";

import { SignupRepository } from "../../repositories/database-repositories/signup-database-repository";
import { SignupCases } from "../../business/signupCases/SignupCases";

import { BCryptAdapter } from "../../adapters/bcrypt/bcrypt.encrypt-adapter";

import { CustomError } from "../../Erros/CustomError";

export const signupControllers = async (req: Request, res: Response): Promise<{}> => {
  try {
    const { email, password, role } = req.body;

    const signupRepository = new SignupRepository();
    const bCryptAdapter = new BCryptAdapter();

    const signupCases = new SignupCases(
      signupRepository,
      bCryptAdapter
    );

    const successToken = await signupCases.createSignup({
      email,
      password,
      role
    });
    
    return res.status(201).json({ token:  successToken});
  } catch (error: any) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};