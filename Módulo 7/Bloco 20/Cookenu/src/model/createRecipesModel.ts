export interface ICreateRecipesModelData {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  authorId: string;
};

export interface ICreateRecipesModel {
  create: ( data: ICreateRecipesModelData ) => Promise<void>;
};