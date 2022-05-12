import { Request, Response } from "express";

import { connection } from "../../data/connection";

import {v4 as uuids4} from 'uuid';


//* Criar Produtos no banco de dados.
async function insertProductsCreate( name: string, price: number, imageUrl: string ): Promise<any> {
    
    await connection("labecommerce_products").insert({
        id: uuids4(),
        name,
        price,
        image_url: imageUrl
    });

};


export const createProduct = async ( req: Request, res: Response ): Promise<any> => {

    type Product = { name: string, price: number, imageUrl: string };

    try {

        const { name, price, imageUrl }: Product = req.body;

        if ( !name || !price || !imageUrl ) {
            throw new Error("Alguma informação esta faltando. Por favor consulte a documentação.");
        };

        const checkingProductExists = await connection("labecommerce_products").where("name", `${name}`);

        if (checkingProductExists[0]) {
            throw new Error("Já existe um produto com esse nome.");
        };

        if ( price < 0.99 ) {
            throw new Error("O preço não pode ser menor que 0.99.");
        };

        await insertProductsCreate( name, price, imageUrl );

        return res.status(201).json({ message: `Produto ${name} criado com sucesso.` }).end();

    } catch ( error ) {
        if (error instanceof Error) {
            switch( error.message ) {
                case "Alguma informação esta faltando. Por favor consulte a documentação.":
                    return res.status(400).send(error.message);
                case "O preço não pode ser menor que 0.99.":
                    return res.status(400).send(error.message);
                case "Já existe um produto com esse nome.":
                    return res.status(409).send(error.message);
                default:
                    return res.status(500).send(error.message);
            };
          } else {
            res.send(error.message || error.sqlMessage);
        };
    };
};