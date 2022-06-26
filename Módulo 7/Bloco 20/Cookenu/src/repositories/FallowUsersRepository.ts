import { 
  IFallowUsersModel, 
  IFallowUsersModelData,
  IOutputSearchFriendData,
  IOutputModelFriendData
 } from "../model/fallowUsersModel";

import { Database } from "../data/database/Database";

export class FallowUsersRepository extends Database implements IFallowUsersModel {
  async fallow ( { userId,  friendId }: IFallowUsersModelData ) {
    await Database.connectionDatabase("Cookenu_Follow_Users").insert({
      user_id: userId,
      friend_id: friendId
    });
  };

  //* Achar amigo na lista de amigos do usuário logado.
  async searchFriend ( friendId: string ) {

    const [friendFound]: IOutputSearchFriendData[] =
     await Database.connectionDatabase.from("Cookenu_Follow_Users")
    .innerJoin(
        "Cookenu_Users",
        "Cookenu_Follow_Users.user_id",
        "Cookenu_Users.id"
    ).where("Cookenu_Follow_Users.friend_id", friendId);
    
    if ( friendFound ) {
      const friend: IOutputModelFriendData[] =
       await Database.connectionDatabase("Cookenu_Users")
      .where("id", friendFound?.friend_id);

      return friend;
    };
    return [];
  };
};