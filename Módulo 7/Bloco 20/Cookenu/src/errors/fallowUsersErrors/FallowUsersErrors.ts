import { CustomError } from "../CustomError";

export class VerifyInformationsRequest extends CustomError {
  constructor () {
    super (
      "Verifique si não esta faltando nenhúma dessas informaçõs ( userId, friendId )!.",
      406
    )
  };
};

//* Erro desnecessario mais eu já fiz então deixa ai.
export class CheckIfThereIsFollower extends CustomError {
  constructor () {
    super (
      `Você já esta seguindo esse usuário!.`,
      409
    )
  };
};