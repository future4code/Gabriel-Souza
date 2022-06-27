import { CustomError } from "../CustomError";

export class VerifyInformationsRequest extends CustomError {
  constructor () {
    super(
      "Verifique si não esta faltando algúma dessas informações: ( title, description )!.",
       406
    );
  };
};

// export class VerifyIfExistRecipe extends CustomError {
//   constructor (public title: string) {
//     super(
//       `Já existe uma receita criada com esse nome: ( ${title} )!.`,
//        409
//     );
//   };
// };