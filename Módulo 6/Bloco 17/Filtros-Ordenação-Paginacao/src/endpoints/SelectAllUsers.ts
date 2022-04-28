import { Request, Response } from "express"
import { connection } from "../data/connection"

async function factoryQuerysFunctions( valueName: string, valueType: string, valueOrder: string, page: number, limit: number ) {

    const result = await connection("aula48_exercicio")
    .where("name", "like", `%${valueName}%`)
    .orWhere("type", "like", `%${valueType}%`)
    .orderBy("name",`${valueOrder}`)
    .limit(limit).offset((page - 1) * limit);
 
    return result;
 };
   

export const getUsers = async(req: Request,res: Response): Promise<any> =>{

    enum OrderList {
        DESC = "DESC",
        ASC = "ASC"
    };

   try {

    let name = req.query.name as string;
    let type = req.query.type as string ;
    const orderList: OrderList = req.query.order as OrderList ?? OrderList.ASC; 
console.log(name, type)
    const page = Number(req.params.page) || 1;
    const limit = 5;

    if ( !name && !type ){
        name = "%"
        type = "%"
    };

    const orderListUpper =  orderList.toUpperCase();

    const result: Array<any> = await factoryQuerysFunctions(name, type, orderListUpper, page, limit);

    if ( result.length === 0 ){
        throw new Error("Nada foi encontrado.")
    }

    return res.status(200).json(result);
      
   } catch (error: any) {
     return  res.send(error.message || error.sqlMessage)
   }
};

