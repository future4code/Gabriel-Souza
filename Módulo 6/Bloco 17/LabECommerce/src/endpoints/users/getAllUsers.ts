import { Request, Response } from "express";

import { connection } from "../../data/connection";

//* Get, Filter, Order All Users
async function selectAllUsers(  buyerName?: string ): Promise<any> {
    
    if ( buyerName ) {
        const result = await connection("labecommerce_users As lu")
        .innerJoin(
            "labecommerce_purchases AS lp",
            "lu.id",
            "lp.user_id"
        )
        .where( "name", buyerName );
        return result;
    } else {
        const result = await connection("labecommerce_users").select();
        return result;
    };
 };

   
export const getAllUsers = async (req: Request,res: Response): Promise<any> =>{

    let statusCode = 500;

    try {

        const name: string = req.query.name as string;

        const listUsers: Array<any> = await selectAllUsers(name);

        const listProducts: Array<any> = await connection("labecommerce_products").select();
  
        const userListProducts: Array<any> =  listUsers.map((item) => {
            const listProductsUser = listProducts.filter(( id ) => id.id ===  item?.product_id);
            return listProductsUser[0];
        });

        if ( !name ) {
            return res.status(200).json( listUsers ).end();
        } else {
            return res.status(200).json({
                buyerName: `${name}`,
                purchases: userListProducts.length ? userListProducts :  "Nenhúma compra efetuada"
            }).end();
        };

    } catch ( error ) {
        if (error instanceof Error) {
            res.send(error.message);
          } else {
            return res.status(statusCode).send(error.message || error.sqlMessage);
        };
    };
};

