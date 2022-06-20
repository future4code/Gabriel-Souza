import { IGetUserRepository } from "../../repositories/getUser-repository";

interface IGetUserCasesRequest {
  email: string;
};

export class GetUserCases {
  constructor (
    private getUserRepository: IGetUserRepository
  ){};

  async getUser ( request: IGetUserCasesRequest ) {
    const { email } = request;

    const [ user ] = await this.getUserRepository.get({email});

    return user;
  };
};