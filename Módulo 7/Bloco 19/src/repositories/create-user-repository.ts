export interface CreateUserRepositoryData {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface CreateUserRepository {
  create: ( data: CreateUserRepositoryData ) => Promise<void>;
};