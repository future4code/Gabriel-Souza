export interface ICreateUserModelData {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface CreateUserModel {
  create: ( data: ICreateUserModelData ) => Promise<void>;
  searchUser: ( email: string ) => Promise<ICreateUserModelData[]>;
};