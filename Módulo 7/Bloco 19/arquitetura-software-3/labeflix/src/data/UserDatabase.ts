import { BaseDatabase } from "./BaseDatabase";
import { UserDataDTO } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email,  password }: UserDataDTO): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  allUsers =  async () => await UserDatabase.connection(UserDatabase.TABLE_NAME).select();
}
