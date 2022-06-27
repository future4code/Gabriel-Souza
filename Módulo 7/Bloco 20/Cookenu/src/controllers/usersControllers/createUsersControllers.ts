import { Request, Response } from "express";

import { CreateUserRepository } from "../../repositories/CreateUserRepository";
import { CreateUsersCases } from "../../business/usersCases/CreateUsersCases";

import { BCryptAdapter } from "../../adapters/bcrypt/BcryptAdapter";

import { CustomError } from "../../errors/CustomError";

export const createUsersControllers = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    const { name, email, password, role } = req.body;

    const createUserRepository = new CreateUserRepository();
    const bcryptAdapter = new BCryptAdapter();

    const createUsersCases = new CreateUsersCases(
      createUserRepository,
      bcryptAdapter
    );

    await createUsersCases.createUser({
      name,
      email,
      password,
      role
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