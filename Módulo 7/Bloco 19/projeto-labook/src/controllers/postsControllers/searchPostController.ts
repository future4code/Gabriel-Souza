import { Request, Response } from "express";

import { SearchPostRepository } from "../../repositories/database-repositories/Search-post-database-repository";
import { SearchPostCases } from "../../business/PostsCases/SearchPostCases";

import { CustomError } from "../../Erros/CustomError";

export const searchPostController = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const id: string = req.params.id;

    const searchPostRepository = new SearchPostRepository();

    const searchPostCases = new SearchPostCases(
      searchPostRepository
    );

    const post = await searchPostCases.search(id);

    return res.status(200).json(post);
  } catch ( error ) {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).send(error.message);
    };
    return res.status(500).send(error.message || error.sqlMessage);
  };
};