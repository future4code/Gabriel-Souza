import { IFallowUsersModel } from "../../model/fallowUsersModel";

interface IFallowUsersCasesRequest {
  userId: string;
  friendId: string;
};

export class FallowUsersCases {
  constructor (
    private fallowUsersModel: IFallowUsersModel
  ){};

  async fallowUser ( { userId, friendId }: IFallowUsersCasesRequest) {

    const [ friend ] = await this.fallowUsersModel.searchFriend(friendId);

    if ( friend ) throw new Error("Conflito");

    await this.fallowUsersModel.fallow({
      userId,
      friendId
    });
  };
};