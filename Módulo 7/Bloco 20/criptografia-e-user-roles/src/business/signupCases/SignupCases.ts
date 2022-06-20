import { ISignupRepository } from "../../repositories/signup-repository";

import { generateToken } from "../../services/generateToken";
import { IBCryptAdapter } from "../../adapters/bcrypt-adapter";

import { generateId } from "../../services/generateId";
import { validateEmail } from "../../services/validateEmail";

import {  
  VerifyBodyReq,
  VerifyEmail,
  VerifyPassword
} from "../../Erros/SignupErros/SignupErros";

interface ISignupCasesRequest {
  email: string;
  password: string;
};

export class SignupCases {
  constructor (
    private signupRepository: ISignupRepository,
    private bCryptAdapter: IBCryptAdapter
  ) {};

  async createSignup ( request: ISignupCasesRequest ) {
    const { email, password } = request;

    if ( !email || !password ) throw new VerifyBodyReq();

    if ( validateEmail(email) === false ) throw new VerifyEmail();

    if ( password.length > 6 ) throw new VerifyPassword();

    const id = generateId();
    const encryptPassword = await this.bCryptAdapter.hashEncrypt({password});

    await this.signupRepository.create({
        id,
        email,
        password: encryptPassword
    });

    return generateToken({id});
  };
};