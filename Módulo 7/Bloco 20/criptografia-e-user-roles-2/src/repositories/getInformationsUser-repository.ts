interface ISearchUserOutputData {
  id: string;
  email: string;
  role: string;
};

export interface IGetInformationsUserRepository {
  search: ( id: string ) => Promise<ISearchUserOutputData[]>;
};