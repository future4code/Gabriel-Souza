import { Request, Response } from "express";

import { connection } from "../../data/connection";

import {v4 as uuids4} from 'uuid';

//* Relacionado produto com o usuário que o escolheu 1:N
async function relationalPurchases( totalPrice: number, quantity: number, userId: string, productId: string ) {
    
    await connection("labecommerce_purchases").insert({
        id: uuids4(),
        quantity,
        total_price: totalPrice,
        user_id: userId,
        product_id: productId
    });

};


export const insertRelationalPurchases = async ( req: Request, res: Response ): Promise<any> => {

    type RelationalPurchases = { quantity?: number, idUser: string , idProduct: string };

    try {

        let { quantity, idUser, idProduct }: RelationalPurchases = req.body;

        if (!idUser || !idProduct ) {
            throw new Error("Algúma informação estar faltando. Por favor consulte a documentação.");
        };

        if ( !quantity || quantity <= 0 ) {
            quantity = 1;
        };

        const user: any  = await connection("labecommerce_users").where({id: idUser});
        const product: any  = await connection("labecommerce_products").where({id: idProduct});

        if ( !user[0] ) {
            throw new Error("Usuario não encontrado ou não existe.");
        };

        if ( !product[0] ) {
            throw new Error("Produto não encontrado.");
        };

        const valueTotalProduct = quantity * product[0]?.price;

        await relationalPurchases( valueTotalProduct, quantity, idUser, idProduct );

        return res.status(201).json({
            message: `Produto: ${product[0]?.name} adicionado com sucesso`,
            buyerName: user?.name,
            quantity,
            totalPurchaseAmount: valueTotalProduct, 
            status: "Aguardando pagamento."
        }).end();

    } catch ( error ) {
        if (error instanceof Error) {
            switch( error.message ) {
                case "Alguma informação esta faltando. Por favor consulte a documentação.":
                    return res.status(400).send(error.message);
                case "Produto não encontrado.":
                    return res.status(404).send(error.message);
                case "Usuário não encontrado ou não existe.":
                    return res.status(404).send(error.message);
                default:
                    return res.status(500).send(error.message);
            };
          } else {
            res.send(error.message || error.sqlMessage);
        };
    };
};