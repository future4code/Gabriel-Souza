import { GetAllUsersRepository } from "../../repositories/user-repository";
import { CustomError } from "../../customError/CustomError";

export class CasesGetAllUsers {
  constructor (
    private getAllUsersRepository: GetAllUsersRepository
  ){};

  async execute(){
    const allUsers = await this.getAllUsersRepository.get();

    if ( allUsers.length === 0 ) {
      throw new CustomError("Ainda não existe usuários na lista!", 404);
    };

    return allUsers;
  };
};