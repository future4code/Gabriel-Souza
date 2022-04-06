import express, { Request, Response } from "express";
import cors from "cors";

import {v4 as uuidv4} from 'uuid';

import { arrayProducts } from "./utils/data";

const app = express();

app.use(express.json());
app.use(cors());

//* EX : 1
app.get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API Rodando....");
});


//* 2 :
//* Feito no aarquivo data.


// [authorization_nao_encontrado] 401 - Favor enviar header authorization
// [playlist_nao_encontrada] 404 - Playlist não encontrada
// [track_com_conflito] 409 - Essa faixa já existe na playlist
// [parametros_faltantes] 422 - Alguma informação está faltando. Consulte a documentação.
// [algo_deu_errado] 500 - Algo deu errado.

// como fazer enums de objetos?

const Errors: { [chave: string]: { status: number, message: string } } = {
    BAD_REQUEST: {status: 400, message: "Propriedades não estão com os valores corretos."},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
    PRODUCT_NOT_FOUND: {status: 404, message: "Produto não encontrada"},
    TRACK_EXISTS: {status: 409, message: "Essa produto já existe na playlist"},
    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
 };

//* 3 :
app.post("/products/create", (req: Request, res: Response) => {
    
    try {

        const { name, price } = req.body;

        if ( !name || !price  ) { throw Error(Errors.MISSING_PARAMETERS.message); };
        if ( typeof name !== "string" || typeof price !== "number" || price <= 0 ) { 
            throw Error(Errors.BAD_REQUEST.message);
        };

        arrayProducts.push({
            id: uuidv4(),
            name,
            price
        });

    } catch ( error: any ) {
        switch ( error.message ) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message);
                break;
            case Errors.BAD_REQUEST.message:
               res.status(Errors.BAD_REQUEST.status).send(Errors.BAD_REQUEST.message);
               break;
               default:
                   res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };

    res.status(201).send("Produto criado.");
});


//* 4 : 
app.get("/products", (req: Request, res: Response) => {
    const { product }: any  = req.query;

    if ( product !== undefined ) {
        const filterProducts = arrayProducts.filter(( products ) =>{
            if ( products.name.toLocaleLowerCase().includes(product.toLocaleLowerCase()) ) {
                return true;
            };
        });
        res.status(200).send(filterProducts);
        return;
    };

    res.status(200).send(arrayProducts);
});


//* 5 :
app.put("/products/edit-price/:id", (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const { price } = req.body;

        const productExist =  arrayProducts.find(( idProduct ) => idProduct.id === id);

        if ( !productExist ) { throw Error(Errors.PRODUCT_NOT_FOUND.message);};
         if ( !price ) { throw Error(Errors.BAD_REQUEST.message); };
        if ( typeof price !== "number" || price <= 0 ) { throw Error(Errors.BAD_REQUEST.message); };

        productExist.price = price;

        res.status(200).send(productExist);

    } catch ( error: any ) {
        switch ( error.message )  {
            case Errors.PRODUCT_NOT_FOUND.message:
                res.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
                break;
            case Errors.BAD_REQUEST.message:
                res.status(Errors.BAD_REQUEST.status).send(Errors.BAD_REQUEST.message);
                break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };
});


//* EX: 6
app.delete("/products/delete-product/:id", (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        const productExist = arrayProducts.find(( idProduct ) => idProduct.id === id);

        if ( !productExist ) { throw Error( Errors.PRODUCT_NOT_FOUND.message ); };

        arrayProducts.forEach((item, index, array) => {
            if ( item.id === id ) {
                return array.splice(index, 1)
            };
        });

    } catch ( error: any ) {
        switch ( error.message ) {
            case Errors.PRODUCT_NOT_FOUND.message:
                res.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
                break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };
  
    res.status(200).send(arrayProducts);
});

//* Desafios
//* Só o 10 foi feito não conseguir fazer á 11.


app.listen( 3003, () => { console.log("Servidor rodando......") });