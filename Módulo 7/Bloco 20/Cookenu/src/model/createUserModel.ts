export interface CreateUserModelData {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface CreateUserModel {
  create: ( data: CreateUserModelData ) => Promise<void>;
  searchUser: ( email: string ) => Promise<CreateUserModelData[]>;
};