export interface ISearchUserOutputData {
  id: string;
  email: string;
  password: string;
  role: string;
};

export interface ILoginRepository {
  searchUser: ( email: string ) => Promise<ISearchUserOutputData[]>;
};