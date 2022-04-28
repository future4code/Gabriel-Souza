import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers( type: string ):Promise<any> {
   const result = await connection("aula48_exercicio")
   .select().where({type: type});

   return result;
};


export const getUsersType = async(req: Request,res: Response): Promise<void> =>{
   try {

      let userType: string = req.params.type as string;

      const users: Array<any> = await selectAllUsers(userType)

      if(users.length === 0){
          res.status(404);
          throw new Error("Tipo não encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
};