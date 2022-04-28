import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers( page: number, limit: number ):Promise<any> {
   const result = await connection("aula48_exercicio")
   .limit(limit).offset((page - 1) * limit);

   return result;
};


export const limitPages = async (req: Request,res: Response): Promise<void> =>{
   try {

      const page = req.query.page ?? 1;
      const limit = 5;

      const users = await selectAllUsers(Number(page), limit);

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
};