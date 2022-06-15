enum NormalOrEvent {
  NORMAL = "normal",
  EVENT = "event"
};

export interface ICreatePostsData {
  id: string;
  photo: string;
  description: string;
  type?: NormalOrEvent;
  createdAt: Date;
  authorId: string;
};

export interface ICreatePostsRepository {
  create: ( data: ICreatePostsData ) => Promise<void>;
};
