// import { ICreatePostsData } from "../../repositories/create-posts-repository";

import { ISearchPostRepository } from "../../repositories/search-post-repository";

import { convertDataUs } from "../../services/convertDataUS";

import cloneDeep from "lodash/cloneDeep";

import { PostNotExist } from "../../Erros/PostErros/SearchPostErros";

export class SearchPostCases {
  constructor(
    private searchPostRepository: ISearchPostRepository
  ){};

  async search ( request: string ) {
    const id = request;
    const post = await this.searchPostRepository.searchPost(id);

    if ( !post ) throw new PostNotExist();

    const clonePost = cloneDeep(post);

    clonePost.created_at = convertDataUs(clonePost.created_at);

    return clonePost;
  };
};