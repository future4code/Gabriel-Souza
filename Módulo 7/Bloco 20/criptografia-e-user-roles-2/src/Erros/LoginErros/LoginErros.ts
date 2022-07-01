import { CustomError } from "../CustomError";

export class VerifyContainsValuesBody extends CustomError {
  constructor(){
    super("Email e senha são obrigatorios!", 406);
  };
};

export class VerifyEmail extends CustomError {
  constructor(){
    super("O email não segue o padrão correto!", 406);
  };
};

export class VerifyEmailExist extends CustomError {
  constructor(){
    super("Esse email não existe!", 406);
  };
};

export class VerifyPassword extends CustomError {
  constructor(){
    super("A senha inserida esta errada!", 406);
  };
};

export class VerifyRole extends CustomError {
  constructor (){
    super("Usúario não autorizado!", 401);
  };
};