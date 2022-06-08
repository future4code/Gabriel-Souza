import { Request, Response } from "express";

import { CreatePostsRepository } from "../../repositories/database-repositories/Create-posts-database-repository";
import { CreatePostsCases } from "../../business/PostsCases/CreatePostsCases";

import { CustomError } from "../../Erros/CustomError";

export const createPostsController = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const { 
      photo,
      description,
      type,
      authorId
     } = req.body;

     const createPostsRepository =new CreatePostsRepository();

     const createPostsCases = new CreatePostsCases(
       createPostsRepository
     );

     await createPostsCases.createPost({
       photo,
       description,
       type,
       authorId
     });

     return res.status(201).json({ message: "Post criado com sucesso." });
  } catch (error) {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).send(error.message);
    };
    return res.status(500).send(error.message || error.sqlMessage);
  }
};
