import { CustomError } from "../CustomError";

export class PostNotExist extends CustomError {
  constructor(){
    super("Esse post não existe ou não foi encontrado!", 404);
  };
};