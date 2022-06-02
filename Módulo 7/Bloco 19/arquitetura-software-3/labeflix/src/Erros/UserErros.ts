import { CustomError }from "./CustomError";

export class InvalidInformations extends CustomError {
  constructor(){
    super( 400, "Dados inválidos (email, name, password)" )
  };
};

export class NotFoundUsers extends CustomError {
  constructor(){
    super( 404, "Não existe usuários na lista ainda!" )
  };
};
