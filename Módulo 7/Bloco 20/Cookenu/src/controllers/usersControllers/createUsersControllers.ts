import { Request, Response } from "express";

import { CreateUserRepository } from "../../repositories/CreateUserRepository";
import { CreateUsersCases } from "../../business/usersCases/CreateUsersCases";

import { CustomError } from "../../erros/CustomError";

export const createUsersControllers = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    const { name, email, password } = req.body;

    const createUserRepository = new CreateUserRepository();

    const createUsersCases = new CreateUsersCases(
      createUserRepository
    );

    await createUsersCases.createUser({
      name,
      email,
      password
    });
    
    return res.status(201).json({ message: `Usuário: ${name}, criado com sucesso` });
  } catch ( error ) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};