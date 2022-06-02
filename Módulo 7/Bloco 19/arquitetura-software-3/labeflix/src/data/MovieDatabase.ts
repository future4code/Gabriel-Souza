import { BaseDatabase } from "./BaseDatabase";
import { MovieDataDTO } from "../model/Movie";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, durationInMinutes, yearOfRrelease }: MovieDataDTO): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes: durationInMinutes,
        year_of_release: yearOfRrelease
      })
      .into(MovieDatabase.TABLE_NAME);
  }
}