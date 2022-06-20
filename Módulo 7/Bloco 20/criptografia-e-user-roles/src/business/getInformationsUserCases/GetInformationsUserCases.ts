import { IGetInformationsUserRepository } from "../../repositories/getInformationsUser-repository";

import { getTokenData } from "../../services/getTokenData";

interface IGetInformationsUserCasesRequest {
  token: string;
};

export class GetInformationsUserCases {
  constructor(
    private getInformationsUserRepository: IGetInformationsUserRepository
  ){};

  async getInformationsUser ( request:  IGetInformationsUserCasesRequest) {
    const { token } = request;

    const authenticationData = getTokenData(token);

    const [ user ] = await this.getInformationsUserRepository.search(authenticationData.id);

    return user;
  };
};