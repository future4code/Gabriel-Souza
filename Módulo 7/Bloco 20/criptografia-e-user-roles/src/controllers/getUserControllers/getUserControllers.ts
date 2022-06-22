import { Request, Response } from "express";

import { GetUserRepository } from "../../repositories/database-repositories/getUser-database-repository";
import { GetUserCases } from "../../business/getUserCases/GetUserCases";

import { CustomError } from "../../Erros/CustomError";

export const getUserControllers = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    const { email } = req.params;

    const getUserRepository = new GetUserRepository();

    const getUserCases = new GetUserCases(
      getUserRepository
    );

    const userResponse = await getUserCases.getUser({email});
    
    return res.status(200).json({ user: userResponse });
  } catch (error: any) {
   return  error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};