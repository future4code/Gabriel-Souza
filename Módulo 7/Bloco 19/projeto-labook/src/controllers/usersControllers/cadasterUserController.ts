import { Request, Response } from "express";

import { CadasterUsersRepository } from "../../repositories/database-repositories/Cadaster-users-database-repository";
import { CadasterUsersCases } from "../../business/UsersCases/CadasterUsersCases";

import { CustomError } from "../../Erros/CustomError";

export const cadasterUsersController = async ( req: Request, res: Response ): Promise<any> => {
  try {

    const { name, email, password } = req.body;

    const cadasterUsersRepository = new CadasterUsersRepository();

    const cadasterUsersCases = new CadasterUsersCases(
      cadasterUsersRepository
    );

    await cadasterUsersCases.cadasterUser({
      name,
      email,
      password
    });

    return res.status(201).json({ message: `Usuário: ${name}, cadastrado com sucesso.` });
  } catch ( error ) {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).send(error.message);
    };
    return res.status(500).send(error.message || error.sqlMessage);
  };
};