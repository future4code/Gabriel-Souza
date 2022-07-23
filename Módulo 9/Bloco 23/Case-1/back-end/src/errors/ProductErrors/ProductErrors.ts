import { CustomError } from "../CustomError";

export class VerifyIfExistProducts extends CustomError {
  constructor(public name: string){
    super(`Esse produto: ( ${name} ). Não foi encontrado na lista ou não existe!`, 404);
  };
};

export class VerifyIfExistAllProducts extends CustomError {
  constructor(){
    super(`Lista de produtos vázia!`, 404);
  };
};