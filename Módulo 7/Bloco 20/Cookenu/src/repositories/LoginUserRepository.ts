import { ILoginUserModel } from "../model/loginUserModel";

import { Database } from "../data/database/Database";

export class LoginUserRepository extends Database implements ILoginUserModel {
  async searchUser ( email: string ) {
    const user = await Database.connectionDatabase("Cookenu_Users")
    .where("email", email);
    
    return user;
  };
};