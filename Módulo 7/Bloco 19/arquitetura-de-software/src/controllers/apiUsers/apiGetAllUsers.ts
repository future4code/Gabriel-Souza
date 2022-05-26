import { Request, Response } from "express";

import { KnexGetAllUsersRepository } from "../../repositories/knex/knex-user-repository";
import { CasesGetAllUsers } from "../../application/Users/GetAllUsers";

import { CustomError } from "../../customError/CustomError";

export const apiGetAllUsers = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const knexGetAllUsersRepository = new KnexGetAllUsersRepository();
    const casesGetAllUsers = new CasesGetAllUsers(knexGetAllUsersRepository);

    // const allUsers =  await casesGetAllUsers.execute();
    const request = await Promise.all([casesGetAllUsers.execute()]);

    //* Testando so para ver o tempo de resposta
    //* E realmente e mais ligeiro.
    return res.status(200).json({ users: request[0] });
    
  } catch ( error ) {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).send(error.message);
    } else {
      return res.status(500).send(error.message || error.sqlMessage);
    };
  };
};