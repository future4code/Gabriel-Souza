import { CustomError } from "../CustomError";

export class VerifyIfContainsDate extends CustomError {
  constructor(){
    super("Por favor escolha uma data para agendamento!", 400);
  };
};

export class VerifyIfProductNotExist extends CustomError {
  constructor(){
    super("Esse produto não existe na lista. Por favor tente outro!", 404);
  };
};

export class VerifyQuantity extends CustomError {
  constructor(){
    super(`A quantidade escolhida de produtos não pode ser maior que a do stock!`, 406);
  };
};

export class VerifyIfContainsQuantity extends CustomError {
  constructor(){
    super(`Por favor digite uma quantidade de produtos!`, 406);
  };
};

export class VerifyScheduleDate extends CustomError {
  constructor( public date: string ){
    super(`A data de agendamento escolhida: ( ${date} ) não pode ser menor que a data atual!`, 406);
  };
};

//* GetAllPurchasesCase

export class VerifyIfExistPurchases extends CustomError {
  constructor( public name: string ){
    super(`Esse produto: ( ${name} ). Não foi encontrado na lista ou não existe!`, 404);
  };
};

export class VerifyIfExistAllPurchases extends CustomError {
  constructor(){
    super(`Você ainda não possui nenhúma compra!`, 400);
  };
};

//* UpdateQuantityCase

export class VerifyIfContainsNewQuantity extends CustomError {
  constructor(){
    super(`Por favor digite sua nova quantidade!`, 406);
  };
};