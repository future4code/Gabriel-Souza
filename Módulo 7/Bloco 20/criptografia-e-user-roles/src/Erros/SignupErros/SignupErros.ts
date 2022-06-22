import { CustomError } from "../CustomError"

export class VerifyBodyReq extends CustomError {
  constructor (){
    super("Email, é senha são necessários!", 406);
  };
};

export class VerifyEmail extends CustomError {
  constructor (){
    super("O email inserido não segue o padrão correto!", 406);
  };
};

export class VerifyPassword extends CustomError {
  constructor (){
    super("A senha só pode ter no minímo 6 caracteres!", 406);
  };
};