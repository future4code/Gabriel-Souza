import { ICreateRecipesModel } from "../../model/createRecipesModel";

import { generateId } from "../../services/generateId";

import { 
  VerifyInformationsRequest 
} from "../../errors/recipesErrors/CreateRecipesErrors";

interface ICreateRecipesRequestCases {
  title: string;
  description: string;
  authorId: string;
};

export class CreateRecipesCases {
  constructor (
    private createRecipesModel: ICreateRecipesModel
  ) {};

  async createRecipe ( request: ICreateRecipesRequestCases ) {
    const { title, description, authorId } = request;

    if ( !title || !description || !authorId ) throw new VerifyInformationsRequest();

    const id = generateId();

    await this.createRecipesModel.create({
      id,
      title,
      description,
      createdAt: new Date(),
      authorId
    });
  };
};