interface ISearchUserOutputData {
  id: string;
  email: string;
};

export interface IGetInformationsUserRepository {
  search: ( id: string ) => Promise<ISearchUserOutputData[]>;
};