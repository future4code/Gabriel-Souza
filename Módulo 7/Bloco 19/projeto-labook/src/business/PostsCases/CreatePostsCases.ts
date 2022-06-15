import { ICreatePostsRepository } from "../../repositories/create-posts-repository";

import { generateId } from "../../services/generateId";

import { 
  ValidateInformationsPosts,
  CheckTypePost,
  CheckDescriptionLength
} from "../../Erros/PostErros/PostsCreateErros";

//* ====================================================================

enum NormalOrEvent {
  NORMAL = "normal",
  EVENT = "event"
};

export interface ICreatePostsCasesData {
  photo: string;
  description: string;
  type?: NormalOrEvent;
  authorId: string;
};

export class CreatePostsCases {
  constructor (
    private createPostsRepository: ICreatePostsRepository
  ){};

  async createPost ( request: ICreatePostsCasesData ) {

    const {
       photo, 
      description, 
      type, 
      authorId 
    } = request;

    if ( !photo || !description || !authorId ) throw new ValidateInformationsPosts();

    if ( !type )  request.type = NormalOrEvent.NORMAL;

    if ( request.type !== NormalOrEvent.EVENT && request.type !== NormalOrEvent.NORMAL ) {
      throw new CheckTypePost();
    };

    if ( description.trim().length < 1 ) throw new CheckDescriptionLength();
    
    const id: string = generateId();

    await this.createPostsRepository.create({
      id,
      photo,
      description,
      type,
      createdAt: new Date(),
      authorId
    });

  };
};