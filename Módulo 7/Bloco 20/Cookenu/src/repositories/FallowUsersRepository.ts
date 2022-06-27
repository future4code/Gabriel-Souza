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
  async searchFriend ( userId: string, friendId: string ) {

    const userFriendsList: IOutputSearchFriendData[] =
     await Database.connectionDatabase.from("Cookenu_Follow_Users")
    .innerJoin(
        "Cookenu_Users",
        "Cookenu_Follow_Users.user_id",
        "Cookenu_Users.id"
    ).where("Cookenu_Follow_Users.user_id", userId);

    const friendFound = userFriendsList.find(( user ) => user.friend_id === friendId);
    
    return friendFound ? friendFound : undefined;
  };

  //* Achar sí proprio na lista de quem você quer da seguir para dar um match
  async findYourself (  friendId: string ) {

    const userFriendsList: IOutputSearchFriendData[] =
     await Database.connectionDatabase.from("Cookenu_Follow_Users")
    .innerJoin(
        "Cookenu_Users",
        "Cookenu_Follow_Users.user_id",
        "Cookenu_Users.id"
    ).where("Cookenu_Follow_Users.user_id", friendId);

    const yourself = userFriendsList.find(( user ) => user.user_id === friendId);
    
    return yourself ? yourself : undefined;
  };
};