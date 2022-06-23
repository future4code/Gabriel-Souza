import { CustomError } from "../CustomError";

export class VerifyInformationsRequest extends CustomError {
  constructor () {
    super (
      "Verifique si uma dessas informações não estaõ faltando: ( name, email, password )!", 
        406
      )
  };
};

export class VerifyEmail extends CustomError {
  constructor ( public email: string ) {
    super (
      `O email passado: ( ${email} ), não segue o padrão correto!. Exemplo: ( usuario@gmail.com ).`, 
        406
      )
  };
};

export class VerifyIfUserExist extends CustomError {
  constructor ( public email: string ) {
    super (
      `Já existe um usuário cadastrado com esse email passado: ( ${email} )!.`, 
        409
      )
  };
};

export class VerifySpacesPassword extends CustomError {
  constructor ( public password: string ) {
    super (
      `A senha passada não pode conter espaços em branco: ( ${password} )!.`, 
        406
      )
  };
};

export class VerifyPasswordQuantityLine extends CustomError {
  constructor ( public password: string ) {
    super (
      `A senha deve ter no mínimo 6 caracteres. Sua senha possui: ( ${password.length} )!.`, 
        406
      )
  };
};