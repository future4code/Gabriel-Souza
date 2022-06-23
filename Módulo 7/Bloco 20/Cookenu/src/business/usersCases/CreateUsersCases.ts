import { CreateUserModel } from "../../model/createUserModel";

//* Services
import { generateId } from "../../services/generateId";
import { validateEmail } from "../../services/validateEmail";
import { checkSpace } from "../../services/checkSpace";

//* Erros Messages
import {
  VerifyEmail,
  VerifyIfUserExist,
  VerifyInformationsRequest,
  VerifyPasswordQuantityLine,
  VerifySpacesPassword
} from "../../erros/usersErros/CreateUsersErros";

interface CreateUsersCasesRequest {
  name: string;
  email: string;
  password: string;
};

export class CreateUsersCases {
  constructor (
    private createUserModel: CreateUserModel
  ) {};

  async createUser ( request: CreateUsersCasesRequest ): Promise<void> {
      const { name, email, password } = request;

      if ( !name || !email || !password ) throw new VerifyInformationsRequest();

      if ( validateEmail(email) === false ) throw new VerifyEmail(email);

      const [ user ] = await this.createUserModel.searchUser(email);

      if ( user ) throw new VerifyIfUserExist(email);

      if ( checkSpace(password) === true ) throw new VerifySpacesPassword(password);

      if ( password.length > 6 ) throw new VerifyPasswordQuantityLine(password);

    const id = generateId();

    await this.createUserModel.create({
      id,
      name,
      email,
      password
    });
  };
};