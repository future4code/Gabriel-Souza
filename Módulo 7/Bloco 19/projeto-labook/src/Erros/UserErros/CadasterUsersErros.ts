import { CustomError } from "../CustomError";

export class ValidateInformations extends CustomError {
  constructor(){
    super("Algúma das informações: ( name, email, password ). estão faltando.", 400);
  };
};

export class EmailExists extends CustomError {
  constructor(){
    super("Já existe um usuário com esse email cadastrado!", 409);
  };
};

export class ValidateEmail extends CustomError {
  constructor(){
    super("O email não corresponde ao formato correto. Exemplo: usuario@gmail.com.", 400);
  };
};

export class CheckSpaceEmail extends CustomError {
  constructor(){
    super("O email não pode conter espaços em branco!", 400);
  };
};

export class CheckSpacePassword extends CustomError {
  constructor(){
    super("Á senha não pode conter espaços em branco!", 400);
  };
};

export class CheckQuantitiesCharactersPassword extends CustomError {
  constructor(){
    super("Á senha tem que ter no minímo 8 caracteres!", 400);
  };
};

export class CheckName extends CustomError {
  constructor(){
    super("O nome tem que ter no minímo 6 caracteres!", 400);
  };
};