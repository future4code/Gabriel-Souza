import { DeleteUserRepository } from "../../repositories/user-repository";
import { CustomError } from "../../customError/CustomError";

interface DeleteUserCasesData {
  id: string;
};


export class DeleteUserCases {
  
  constructor(
    private deleteUserRepository: DeleteUserRepository
  ){};

  async execute( request: DeleteUserCasesData ){

    const { id } = request;

    const user = await this.deleteUserRepository.searchUser(id);

    if ( !user[0] ) {
      throw new CustomError("Usuário não encontrado!", 404);
    };

    await this.deleteUserRepository.deleteUser(id);
  };
};