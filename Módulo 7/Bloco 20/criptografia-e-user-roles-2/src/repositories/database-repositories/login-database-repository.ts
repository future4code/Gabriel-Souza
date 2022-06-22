import { ILoginRepository } from "../login-repository"; 

import { Database } from "../../data/database/Database";

export class LoginRepository extends Database implements ILoginRepository {
  async searchUser ( email: string ) {
    const user = await Database.connectionDatabase("Auth_users")
    .where("email", email);

    return user;
  };
};