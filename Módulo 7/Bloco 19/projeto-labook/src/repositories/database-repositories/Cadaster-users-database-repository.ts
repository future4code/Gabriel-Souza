import { Database } from "../../data/database/Database";
import { ICadasterUsersData, ICadasterUsersRepository } from "../cadaster-users-repository";

export class CadasterUsersRepository extends Database implements ICadasterUsersRepository {
  async cadaster ( data: ICadasterUsersData ): Promise<void> {
    await Database.connectionDatabase("labook_users").insert({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
    });
  };

  async searchEmail ( email: string ): Promise<ICadasterUsersData[]>{
    const user = await Database.connectionDatabase("labook_users").where("email", email);
    return user;
  };
};