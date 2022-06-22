import { ISignupRepository, ISignupRepositoryData } from "../signup-repository";

import { Database } from "../../data/database/Database";

export class SignupRepository extends Database implements ISignupRepository {
  async create ( data: ISignupRepositoryData ) {
    await Database.connectionDatabase("Auth_users").insert({
      id: data.id,
      email: data.email,
      password: data.password
    });
  };
};