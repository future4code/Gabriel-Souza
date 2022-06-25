import {  Request, Response } from "express";

import { CreateRecipesRepository } from "../../repositories/CreateRecipesRepository";
import { CreateRecipesCases } from "../../business/CreateRecipesCases/CreateRecipesCases";

import { CustomError } from "../../errors/CustomError";

export const createRecipesControllers = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    
    //* Token jwt
    const authorId = req.userId;
    const { title, description } = req.body;

    const createRecipesRepository = new CreateRecipesRepository();

    const createRecipesCases = new CreateRecipesCases(
      createRecipesRepository
    );

    await createRecipesCases.createRecipe({
      title,
      description,
      authorId
    });

    return res.status(201).json({ message: `Receita: ${title}, criada com sucesso.` });
  } catch (error) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};