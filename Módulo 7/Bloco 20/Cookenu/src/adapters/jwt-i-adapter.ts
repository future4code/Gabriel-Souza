export interface IJwtAdapterAuthenticationData {
  id: string;
  role?: string;
};

export interface IJwtGetTokenData {
  token: string;
};

export interface IJwtAdapter{
  generateToken: ( data: IJwtAdapterAuthenticationData ) => string;
  getTokenData: ( data: IJwtGetTokenData ) => IJwtAdapterAuthenticationData; 
};