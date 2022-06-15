import { CustomError } from "../CustomError";

export class ValidateInformationsPosts extends CustomError {
  constructor(){
    super("Algúma das informações: ( photo, description, authorId ). estão faltando.", 400);
  };
};

export class CheckDescriptionLength extends CustomError {
  constructor(){
    super("A descrição não pode estar vázia!", 400);
  };
};

export class CheckTypePost extends CustomError {
  constructor(){
    super("O tipo não pode ser diferente de ( normal ) ou ( event )", 400);
  };
};