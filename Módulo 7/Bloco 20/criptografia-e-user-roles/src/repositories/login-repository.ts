export interface ISearchUserOutputData {
  id: string;
  email: string;
  password: string;
};

export interface ILoginRepository {
  searchUser: ( email: string ) => Promise<ISearchUserOutputData[]>;
};