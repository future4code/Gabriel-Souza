import { Request, Response } from "express";

import { connection } from "../../data/connection";


async function getAllProductsFunction ( productName: string, orderList: string ): Promise<any> {

    const productList = await connection("labecommerce_products")
    .where("name", "like", `%${productName}%`)
    .orderBy("name",`${orderList}`)

    return productList;

};


export const getAllProducts =  async ( req: Request, res: Response ): Promise<any> => {

    let statusCode = 500;

    enum Order {
        ASC = "ASC",
        DESC = "DESC",
        ALL = "%"
    };

    try {

        const productName: any = req.query.search ?? "%";
        const orderList: any = req.query.order ?? Order.ALL;

        const productList: Array<any> = await getAllProductsFunction( productName, orderList );

        if ( productList.length == 0 ) {
            statusCode = 404;
            throw new Error(`Produto: ${productName} não encontrado.`);
        };

        return res.status(200).json( productList ).end();

    } catch ( error ) {
        if (error instanceof Error) {
            return res.status(statusCode).send(error.message);
          } else {
            return res.send(error.message || error.sqlMessage);
          };
    };
};