import {
   CreateUserRepositoryData,
    CreateUserRepository,
    GetAllUsersRepository,
    DeleteUserRepository
  } from "../user-repository";
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

  verifyEmailExists = async ( email: string ) => 
  await ConnectionDatabase.connection("User_Arq").where("email", email);
};

export class KnexGetAllUsersRepository extends ConnectionDatabase implements GetAllUsersRepository {
  get = async () => await ConnectionDatabase.connection("User_Arq").select();
 };

 export class KnexDeleteUserRepository extends ConnectionDatabase implements DeleteUserRepository {
   deleteUser = async ( id: string ) => {
    await ConnectionDatabase.connection("User_Arq").where("id", id).delete();
   };

   searchUser = async (id: string) => await ConnectionDatabase.connection("User_Arq").where("id", id); 
 };