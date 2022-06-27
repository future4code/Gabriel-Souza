export interface IUpdatePasswordModelData {
  userId: string;
  newPassword: string;
}; 

interface IOutputUserModelData {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface IUpdatePasswordModel {
  update: ( data: IUpdatePasswordModelData ) => Promise<void>;
  searchUser: (  id: string ) =>Promise<IOutputUserModelData[]>;
};