import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface AuthenticationData {
   id: string;
};

const expiresIn = "1h";
export const generateToken = (input: AuthenticationData): string =>{
   const token = jwt.sign(
   {
      id: input.id,
   },
      process.env.JWT_KEY as string,
   {
      expiresIn
   }
   );
   return token;
};