import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers( valueType: string, valueOrder: string ):Promise<any> {
   const result = await connection("aula48_exercicio")
   .select()
   .where("name", "like", `%${valueType}%`)
   .orWhere("type", "like", `%${valueType}%`)
   .orderBy("name",`${valueOrder}`).orderBy("type", `${valueOrder}`);

   return result;
};


export const orderUsers = async(req: Request,res: Response): Promise<void> =>{

    enum OrderList {
        DESC = "DESC",
        ASC = "ASC"
    }

   try {

      let nameOrType = req.query.type as string || "%";
      let orderList: OrderList = req.query.order as OrderList; 

      if ( !orderList ) {
          orderList = OrderList.ASC
      }

      let orderListUpperCase = orderList.toLocaleUpperCase();
  
      if ( orderListUpperCase !== OrderList.ASC && orderListUpperCase !== OrderList.DESC ) {
          orderList = OrderList.ASC
      }

      const users: Array<any> = await selectAllUsers(nameOrType, orderList)

      if ( users.length == 0 ) {
          res.status(404)
        throw new Error("Nada foi encontrado.")
    }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
};