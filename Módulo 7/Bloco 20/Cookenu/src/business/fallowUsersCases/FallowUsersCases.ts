import { IFallowUsersModel } from "../../model/fallowUsersModel";

import {
   CheckIfThereIsFollower,
   VerifyInformationsRequest
  } from "../../errors/fallowUsersErrors/FallowUsersErrors";

interface IFallowUsersCasesRequest {
  userId: string;
  friendId: string;
};

export class FallowUsersCases {
  constructor (
    private fallowUsersModel: IFallowUsersModel
  ){};

  async fallowUser ( { userId, friendId }: IFallowUsersCasesRequest) {

    if (  !userId || !friendId ) throw new VerifyInformationsRequest();

    const friend = await this.fallowUsersModel.searchFriend(userId, friendId);
    const you = await this.fallowUsersModel.findYourself(friendId)
    // console.log(you)

    if ( friend ) throw new CheckIfThereIsFollower();

    await this.fallowUsersModel.fallow({
      userId,
      friendId
    });

    return you;
  };
};