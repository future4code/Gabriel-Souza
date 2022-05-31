import { Request, Response } from "express";
import { CreateMovieBusiness  } from "../business/MovieCreateBusiness";

export class CreateMovieControllers {
  async create(req: Request, res: Response):Promise<any> {
    try {
      const { title, description, durationInMinutes, yearOfRrelease } = req.body;

      const createMovieBusiness = new CreateMovieBusiness();
      await createMovieBusiness.create({ title, description, durationInMinutes, yearOfRrelease });

      res.status(201).send({ message: "Filme criado." });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}