enum Roles {
  ADMIN = "admin",
  NORMAL = "normal"
};


export interface ISignupRepositoryData {
  id: string;
  email: string;
  password: string;
  role: string
};

export interface ISignupRepository {
  create: ( data: ISignupRepositoryData ) => Promise<void>;
};