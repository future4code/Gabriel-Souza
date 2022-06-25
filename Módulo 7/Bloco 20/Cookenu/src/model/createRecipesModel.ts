export interface ICreateRecipesModelData {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  authorId: string;
};

interface IRecipeOutputData {
  id: string,
  title: string,
  description: string,
  created_at: string,
  author_id: string
};

export interface ICreateRecipesModel {
  create: ( data: ICreateRecipesModelData ) => Promise<void>;
  search: ( title: string ) => Promise<IRecipeOutputData[]>;
};