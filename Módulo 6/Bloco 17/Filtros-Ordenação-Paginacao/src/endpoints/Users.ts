import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers( name: string ):Promise<any> {
   const result = await connection("aula48_exercicio")
   .select().where("name", "like", `%${name}%`);

   return result;
};


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {

      let userName: string = req.query.name as string;

      if ( !userName ) {
         userName = "%"
      }

      const users = await selectAllUsers(userName)

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
};