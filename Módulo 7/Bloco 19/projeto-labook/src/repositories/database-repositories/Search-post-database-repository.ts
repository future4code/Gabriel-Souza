import { Database } from "../../data/database/Database";

import { ISearchPostRepository } from "../search-post-repository";

export class SearchPostRepository extends Database implements ISearchPostRepository {
  async searchPost ( id: string ) {
    const [ post ] = await Database.connectionDatabase("labook_posts").select().where("id", id);
    return post;
  }; 
};