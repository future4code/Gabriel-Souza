import { ILoginUserModel, ILoginUserModelOutputData } from "../../model/loginUserModel";

import { IJwtAdapter } from "../../adapters/jwt-i-adapter";
import { IBCryptAdapter } from "../../adapters/bcrypt-i-adapter";

import { 
  VerifyInformationsRequest,
  VerifyIfPasswordUserIsTrue,
  VerifyIfExistUser
} from "../../errors/usersErrors/LoginUserErrors";

interface ILoginUserCasesRequest {
  email: string;
  password: string;
};

export class LoginUserCases{
  constructor (
    private loginUserModel: ILoginUserModel,
    private jwtAdapter: IJwtAdapter,
    private bcryptAdapter: IBCryptAdapter
  ) {};

  async loginUser ( request: ILoginUserCasesRequest ) {
    const { email, password } = request;

    if ( !email || ! password ) throw new VerifyInformationsRequest();

    const [ user ] = await this.loginUserModel.searchUser(email);

    if ( !user ) throw new VerifyIfExistUser(email);

    const passwordDatabase = user.password;
    
    const comparePasswordUser = await this.bcryptAdapter
    .compareHash({ password, passwordDatabase });

    if ( !comparePasswordUser ) throw new VerifyIfPasswordUserIsTrue();

    const { id, role, name } = user;

    const token = this.jwtAdapter.generateToken({
      id,
      role
    });

    const jwtUser: ILoginUserModelOutputData ={
      name,
      token
    };

    return jwtUser;
  };
};;