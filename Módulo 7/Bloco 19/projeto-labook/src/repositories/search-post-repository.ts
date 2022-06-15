interface IOutputPostData {
  id: string,
  photo: string,
  description: string,
  type: string,
  created_at: Date,
  author_id: string,
};

export interface ISearchPostRepository {
  searchPost: ( id: string ) => Promise<IOutputPostData>;
};