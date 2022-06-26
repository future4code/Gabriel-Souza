interface IUserModelOutputData {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface ILoginUserModelOutputData {
  name: string;
  role: string;
  token: string;
};

export interface ILoginUserModel {
  searchUser: ( email: string ) => Promise<IUserModelOutputData[]>;
};