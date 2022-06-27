import { CreateUserModel, ICreateUserModelData } from "../model/createUserModel";

import { Database } from "../data/database/Database";

export class CreateUserRepository extends Database implements CreateUserModel {
  async create ( { id, name, email, password, role }: ICreateUserModelData ) {
    await Database.connectionDatabase("Cookenu_Users").insert({
        id,
        name,
        email,
        password,
        role
    });
  };

  async searchUser ( email: string ) {
    const user = await Database.connectionDatabase("Cookenu_Users").where("email", email);
    return user;
  };
};