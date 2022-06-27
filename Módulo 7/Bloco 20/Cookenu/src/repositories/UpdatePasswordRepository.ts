import { 
  IUpdatePasswordModel,
  IUpdatePasswordModelData
} from "../model/updatePasswordModel";

import { Database } from "../data/database/Database";

export class UpdatePasswordRepository extends Database implements IUpdatePasswordModel {
  async update ( { userId, newPassword  }: IUpdatePasswordModelData ) {
    await Database.connectionDatabase("Cookenu_Users")
    .update("password", newPassword)
    .where("id", userId);
  };

  async searchUser ( id: string ) {
    const user = await Database.connectionDatabase("Cookenu_Users")
    .where("id", id);

    return user;
  };
};