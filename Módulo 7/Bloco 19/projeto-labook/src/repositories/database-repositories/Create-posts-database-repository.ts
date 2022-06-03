import { ICreatePostsData, ICreatePostsRepository } from "../create-posts-repository";

import { Database } from "../../data/database/Database";

export class CreatePostsRepository extends Database implements ICreatePostsRepository {
  async create ( data: ICreatePostsData ){
    await Database.connectionDatabase("labook_posts").insert({
      id: data.id,
      photo: data.photo,
      description: data.description,
      type: data.type,
      created_at: data.createdAt,
      author_id: data.authorId
    });
  };
};