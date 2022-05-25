import { CreateUserRepository } from "../../repositories/user-repository";
import { CustomError } from "../../customError/CustomError";

import { v4 as uuid } from 'uuid';

import { validateEmail } from "../../utils/validateEmail";
import { checkSpace } from "../../utils/checkSpace";

interface CreateUsersCases {
  name: string;
  email: string;
  password: string;
};

export class CasesCreateUsers {

  constructor ( 
    private createUserRepository: CreateUserRepository,
   ){};

   public async execute( request: CreateUsersCases ){

    const { 
      name,
      email,
      password
    } = request;

    if ( !name || !email || !password ) {
      throw new CustomError(
        "Algúma informação no corpo da requisição esta faltando!. Por favor consulte a documentação.",
        400
        );
    };

    if (  checkSpace(email)  ){
      throw new CustomError(`O email: "${email}" não pode conter espaços em branco!`, 400);
    };

    if ( validateEmail(email) === false ) {
      throw new CustomError(
        `O email não segue o padrão correto. Ex: ${name.toLocaleLowerCase().replace(/ /g, "")}@gmail.com`, 
        400
        );
    };

    if ( password.length < 8 || password.length > 200 ) {
      throw new CustomError("A sua senha deve ter no minímo 8 caracteres!", 400)
    };

    const emailExists =  await this.createUserRepository.verifyEmailExists(email);
    const emailVerify = emailExists.find(( findEmail ) => findEmail.email === email);

    if ( emailVerify ){
      throw new CustomError(`Esse email: "${email}". Já possui um cadastro!. Por favor tente outro email.`, 409);
    };

    await this.createUserRepository.create({
      id: uuid(),
      name,
      email,
      password
    })
   };
};