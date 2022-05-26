export interface CreateUserRepositoryData {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface CreateUserRepository {
  create: ( data: CreateUserRepositoryData ) => Promise<void>;
  verifyEmailExists: ( email: string ) => Promise<CreateUserRepositoryData[]>;
};

export interface GetAllUsersRepository {
  get: () => Promise<CreateUserRepositoryData[]>;
};

export interface DeleteUserRepository {
  deleteUser: ( id: string ) => Promise<void>;
  searchUser: ( id: string ) => Promise<CreateUserRepositoryData[]>;
};