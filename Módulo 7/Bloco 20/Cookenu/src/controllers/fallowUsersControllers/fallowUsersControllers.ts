import {  Request, Response } from "express";

import { FallowUsersRepository } from "../../repositories/FallowUsersRepository";
import { FallowUsersCases } from "../../business/fallowUsersCases/FallowUsersCases";

import { CustomError } from "../../errors/CustomError";

export const fallowUsersControllers = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    const userId = req.userId;
    const { friendId } = req.body;

    const fallowUsersRepository = new FallowUsersRepository();

    const fallowUsersCases = new FallowUsersCases(
      fallowUsersRepository
    );

    //* Retorna 1 usuário ou underfined
    const result = await fallowUsersCases.fallowUser({
      userId,
      friendId
    });
    
    if ( result ) {
      return res.status(200).json({message: `Parabéns, você e ${result.name}, estão seguindo um ao outro.`});
    }
    
    return res.status(200).json({message: `Agora você agora esta seguindo essa pessoa.`});
  } catch (error) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};