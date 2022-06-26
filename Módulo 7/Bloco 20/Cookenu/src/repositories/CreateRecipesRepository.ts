import { ICreateRecipesModel, ICreateRecipesModelData } from "../model/createRecipesModel";

import { Database } from "../data/database/Database";

export class CreateRecipesRepository extends Database implements ICreateRecipesModel {
  async create ( data: ICreateRecipesModelData ) {
    await Database.connectionDatabase("Cookenu_Recipes").insert({
      id: data.id,
      title: data.title,
      description: data.description,
      created_at: data.createdAt,
      author_id: data.authorId
    });
  };
};