import { CreateUserRepositoryData, CreateUserRepository } from "../create-user-repository";
import { ConnectionDatabase } from "../../data/connection/ConnectionDatabase";

export class KnexCreateUserRepository extends ConnectionDatabase implements CreateUserRepository {
  
 async create({ id, name, email, password }: CreateUserRepositoryData){
    await ConnectionDatabase.connection("User_Arq").insert({
      id,
      name,
      email,
      password
    })
  };
};