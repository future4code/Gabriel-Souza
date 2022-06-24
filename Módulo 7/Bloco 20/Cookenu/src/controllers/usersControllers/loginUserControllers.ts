import { Request, Response } from "express";

import { LoginUserRepository } from "../../repositories/LoginUserRepository";
import { LoginUserCases } from "../../business/usersCases/LoginUserCases";

import { JwtAdapter } from "../../adapters/jwt/Jwt-adapter";
import { BCryptAdapter } from "../../adapters/bcrypt/BcryptAdapter";

import { CustomError } from "../../errors/CustomError";

export const loginUserControllers = async (req: Request, res: Response): Promise<{}> => {
  try {
    const { email, password } = req.body;
    
    const loginUserRepository = new LoginUserRepository();

    const jwtAdapter = new JwtAdapter();
    const bCryptAdapter = new BCryptAdapter();

    const loginUserCases = new LoginUserCases(
      loginUserRepository,
      jwtAdapter,
      bCryptAdapter
    );

    const tokenAndName = await loginUserCases.loginUser({
      email,
      password
    });

    return res.status(200).json(tokenAndName);
  } catch (error) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};