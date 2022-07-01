import { IGetInformationsUserRepository } from "../getInformationsUser-repository";

import { Database } from "../../data/database/Database";

export class GetInformatiosUserRepository extends Database implements IGetInformationsUserRepository {
  async search ( id: string ) {
    const user = await Database.connectionDatabase("Auth_users")
    .where("id", id);

    return user;
  };
};