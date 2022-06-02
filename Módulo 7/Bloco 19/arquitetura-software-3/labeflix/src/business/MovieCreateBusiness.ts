import { MovieDatabase } from '../data/MovieDatabase'
import { MovieDTO } from '../model/Movie';
import { InvalidInformationsMovie } from "../Erros/MovieErros";
import { uuid } from '../services/generateUuid';

export class CreateMovieBusiness {

  async create({title, description, durationInMinutes, yearOfRrelease }: MovieDTO):Promise<void> {

    if ( !title || !description || !durationInMinutes || !yearOfRrelease) {
      throw new InvalidInformationsMovie();
    }

    const id = uuid();

    const userDatabase = new MovieDatabase()
    await userDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
      yearOfRrelease
    })
  }
};