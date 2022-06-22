interface IOutputUserData {
  id: string;
  email: string;
  password: string;
};

export interface IGetUserData {
  email: string;
};

export interface IGetUserRepository {
  get: ( data: IGetUserData ) => Promise<IOutputUserData[]>;
};