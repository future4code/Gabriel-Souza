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
  role: string
};

export class SignupCases {
  constructor (
    private signupRepository: ISignupRepository,
    private bCryptAdapter: IBCryptAdapter
  ) {};

  async createSignup ( request: ISignupCasesRequest ) {
    let { email, password, role } = request;

    if ( !email || !password ) throw new VerifyBodyReq();
    
    if ( role !== "normal" && role !== "admin" ) role = "normal"

    if ( validateEmail(email) === false ) throw new VerifyEmail();

    if ( password.length > 6 ) throw new VerifyPassword();

    const id = generateId();
    const encryptPassword = await this.bCryptAdapter.hashEncrypt({password});

    await this.signupRepository.create({
        id,
        email,
        password: encryptPassword,
        role
    });

    return generateToken({id, role});
  };
};