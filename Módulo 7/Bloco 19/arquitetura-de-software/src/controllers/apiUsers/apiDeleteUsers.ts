import { Request, Response } from "express";

import { KnexDeleteUserRepository } from "../../repositories/knex/knex-user-repository";
import { DeleteUserCases } from "../../application/Users/DeleteUser";
import { CustomError } from "../../customError/CustomError";

export const apiDeleteUsers = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const id = req.params.id;

    const knexDeleteUserRepository = new KnexDeleteUserRepository();
    const deleteUserCases = new DeleteUserCases(knexDeleteUserRepository);

    await deleteUserCases.execute({ id });

    return res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    if( error instanceof CustomError ) {
      return res.status(error.statusCode).send(error.message);
    } else {
      return res.status(500).send(error.message || error.sqlMessage);
    }
  };
};