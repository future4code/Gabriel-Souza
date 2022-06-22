import { ILoginRepository } from "../../repositories/login-repository";

import { IBCryptAdapter } from "../../adapters/bcrypt-adapter";

import { generateToken } from "../../services/generateToken";
import { validateEmail } from "../../services/validateEmail";

import { 
  VerifyContainsValuesBody,
  VerifyEmail,
  VerifyEmailExist,
  VerifyPassword,
  VerifyRole
 } from "../../Erros/LoginErros/LoginErros";;

interface LoginCasesRequest {
  email: string;
  passwordUser: string;
};

export class LoginCases {
  constructor ( 
    private loginRepository: ILoginRepository,
    private bCryptAdapter: IBCryptAdapter
  ){};

  async loginUser ( request: LoginCasesRequest ) {
    const { email, passwordUser } = request;

    if ( !email || !passwordUser ) throw new VerifyContainsValuesBody();

    if ( validateEmail(email) === false ) throw new VerifyEmail();

    const [ user ] = await this.loginRepository.searchUser(email);

    if ( !user ) throw new VerifyEmailExist();
    const { password, role } = user;

    const verifyPasswordHash = await this.bCryptAdapter.compareHash({passwordUser, password});

    if ( !verifyPasswordHash ) throw new VerifyPassword();

    return generateToken({ id: user.id, role });
  };
};