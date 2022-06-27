import { CreateUserModel } from "../../model/createUserModel";
import { IBCryptAdapter } from "../../adapters/bcrypt-i-adapter";

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
} from "../../errors/usersErrors/CreateUsersErrors";

interface CreateUsersCasesRequest {
  name: string;
  email: string;
  password: string;
  role: string
};

export class CreateUsersCases {
  constructor (
    private createUserModel: CreateUserModel,
    private bcryptAdapter: IBCryptAdapter
  ) {};

  async createUser ( request: CreateUsersCasesRequest ): Promise<void> {
      let { name, email, password, role } = request;

      if ( !name || !email || !password ) throw new VerifyInformationsRequest();

      if ( validateEmail(email) === false ) throw new VerifyEmail(email);

      if ( checkSpace(password) === true ) throw new VerifySpacesPassword(password);

      if ( password.length > 6 ) throw new VerifyPasswordQuantityLine(password);

      if ( !role ) role = "normal";
      
      const [ user ] = await this.createUserModel.searchUser(email);

      if ( user ) throw new VerifyIfUserExist(email);

    const id = generateId();
    
    const encryptPassword = await this.bcryptAdapter.hashEncrypt({ password });

    await this.createUserModel.create({
      id,
      name,
      email,
      password: encryptPassword,
      role
    });
  };
};