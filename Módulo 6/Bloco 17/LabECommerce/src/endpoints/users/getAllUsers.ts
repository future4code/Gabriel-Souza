import { Request, Response } from "express";

import { connection } from "../../data/connection";

//* Get, Filter, Order All Users
async function selectAllUsersIsPurchases(  buyerName?: string ): Promise<any> {
    const result = await connection("labecommerce_users").where("name", buyerName);
    if ( result ) {
        const result = await connection("labecommerce_users As lu")
        .innerJoin(
            "labecommerce_purchases AS lp",
            "lu.id",
            "lp.user_id"
        ).where("name", buyerName);
        return result;
    };;
 };

   
export const getAllUsers = async (req: Request,res: Response): Promise<any> =>{

    try {

        const name: string = req.query.name as string ?? "%";

        const listUsersPurshase: Array<any> = await selectAllUsersIsPurchases(name);

        const  listUsers = await connection("labecommerce_users").where("name", "like", `%${name}%`);

        if ( listUsers.length === 0 ) {
            throw new Error("Usuário não encontrado na lista.");
        };

        
        //* Lista de produtos comprados do usuário si ele tiver
        const listProducts: Array<any> = await connection("labecommerce_products").select();
        const userListProducts: Array<any> =  listUsersPurshase.map((item) => {
            const listProductsUser = listProducts.filter(( id ) => id.id ===  item?.product_id);
            return listProductsUser[0];
        });

        if ( listUsersPurshase[0] !== undefined) {
            return res.status(200).json({
                buyerName: `${name}`,
                purchases: userListProducts
            }).end();
        } else{
            return res.status(200).json(listUsers).end();
        };

    } catch ( error ) {
        if (error instanceof Error) {
            return res.status(404).send(error.message);
          } else {
            res.send(error.message || error.sqlMessage);
        };
    };
};

