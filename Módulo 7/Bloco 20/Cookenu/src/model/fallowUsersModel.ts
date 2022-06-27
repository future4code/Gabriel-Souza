export interface IFallowUsersModelData {
  userId: string;
  friendId: string;
};

export interface IOutputSearchFriendData {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  user_id: string;
  friend_id: string;
};

export interface IOutputModelFriendData {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface IFallowUsersModel {
  fallow: ( data: IFallowUsersModelData ) => Promise<void>;
  searchFriend: ( userId: string, friendId: string ) => Promise<IOutputSearchFriendData>;
  findYourself: ( friendId: string ) => Promise<IOutputSearchFriendData>;
};