import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ name, email,  password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  allUsers =  async () => await UserDatabase.connection(UserDatabase.TABLE_NAME).select();
}
