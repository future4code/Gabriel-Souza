import * as jwt from "jsonwebtoken";

interface AuthenticationData {
   id: string;
   role: string
};

// const expiresIn = "1h";

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role
  };
  return result;
};