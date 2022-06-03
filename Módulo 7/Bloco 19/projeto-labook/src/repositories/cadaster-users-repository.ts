export interface ICadasterUsersData {
  id: string;
  name: string;
  email: string;
  password : string;
};

export interface ICadasterUsersRepository {
  cadaster: ( data : ICadasterUsersData ) => Promise<void>;
  searchEmail: ( email: string ) => Promise<ICadasterUsersData[]>;
};