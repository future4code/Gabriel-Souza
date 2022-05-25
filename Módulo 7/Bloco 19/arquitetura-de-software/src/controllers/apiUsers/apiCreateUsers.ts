import { Request, Response } from "express";

import { KnexCreateUserRepository } from "../../repositories/knex/knex-user-repository"
import { CasesCreateUsers } from "../../application/Users/CreateUsers";

import { CustomError } from "../../customError/CustomError";

export const apiCreateUsers = async ( req: Request, res: Response ): Promise<{}> => {

  try {

    const { 
      name,
      email,
      password
    } = req.body;

    const knexCreateUserRepository = new KnexCreateUserRepository();
    const casesCreateUsers = new CasesCreateUsers( knexCreateUserRepository);

    await casesCreateUsers.execute({
      name,
      email,
      password
    });

    return res.status(201).json({ message: `Usuário: ${name}. Criado com sucesso.` });
  } catch( error ) {
    if ( error instanceof CustomError ) {
      res.status(error.statusCode).send(error.message);
    } else {
      return res.status(500).send( error.message || error.sqlMessage);
    };
  };
};