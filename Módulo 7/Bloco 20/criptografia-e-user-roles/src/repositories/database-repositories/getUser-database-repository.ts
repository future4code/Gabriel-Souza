import { IGetUserRepository, IGetUserData } from "../getUser-repository";

import { Database } from "../../data/database/Database";

export class GetUserRepository extends Database implements IGetUserRepository {
  async get ( data: IGetUserData ) {
    const user = await Database.connectionDatabase("Auth_users")
    .where("email", data.email);

    return user;
  };
};