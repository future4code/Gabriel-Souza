import { ICadasterUsersRepository } from "../../repositories/cadaster-users-repository";

import { validateEmail } from "../../services/validateEmail";
import { checkSpace } from "../../services/checkSpace";

//* Erros: Cadaster Users Erros
import { 
  ValidateInformations,
  ValidateEmail,
  EmailExists,
  CheckSpaceEmail,
  CheckSpacePassword,
  CheckQuantitiesCharactersPassword,
  CheckName
} from "../../Erros/CadasterUsersErros/CadasterUsersErros";

import { generateId } from "../../services/generateId";

interface ICadasterUsersRequest {
  name: string;
  email: string;
  password: string;
};

export class CadasterUsersCases {
  constructor(
    private cadasterUsersRepository: ICadasterUsersRepository
  ){};

  public async cadasterUser ( request: ICadasterUsersRequest ) {

    const { name, email, password } = request;

    if ( !name || !email || !password ) throw new ValidateInformations();

    if ( name.length < 6 ) throw new CheckName();

    if ( validateEmail(email) === false ) throw new ValidateEmail();

    if ( checkSpace(email) === true ) throw new CheckSpaceEmail();

    if ( checkSpace(password) === true ) throw new CheckSpacePassword();

    if ( password.length < 8 ) throw new CheckQuantitiesCharactersPassword();

    const [ userExists ] = await this.cadasterUsersRepository.searchEmail(email);

    if ( userExists ) throw new EmailExists();

    const id: string = generateId(); 

    await this.cadasterUsersRepository.cadaster({
      id,
      name,
      email,
      password
    });

  };
};