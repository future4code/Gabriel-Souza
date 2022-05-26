import { MovieDatabase } from '../data/MovieDatabase'
import { v4 as generateId } from 'uuid'

export class CreateMovieBusiness {

  async create({title, description, durationInMinutes, yearOfRrelease }: any):Promise<void> {
    if ( !title || !description || !durationInMinutes || !yearOfRrelease) {
      throw new Error("Dados inválidos")
    }

    const id = generateId()

    const userDatabase = new MovieDatabase()
    await userDatabase.create({
      id: id,
      title,
      description,
      durationInMinutes,
      yearOfRrelease
    })
  }
};