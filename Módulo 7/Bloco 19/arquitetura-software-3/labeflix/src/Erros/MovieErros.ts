import { CustomError }from "./CustomError";

export class InvalidInformationsMovie extends CustomError {
  constructor(){
    super( 400, "Dados inválidos (title, description, durationInMinutes, yearOfRrelease)" )
  };
};