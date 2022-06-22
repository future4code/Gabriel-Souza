export interface ISignupRepositoryData {
  id: string;
  email: string;
  password: string;
};

export interface ISignupRepository {
  create: ( data: ISignupRepositoryData ) => Promise<void>;
};