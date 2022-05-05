import { Request, Response } from "express";

import { connection } from "../../data/connection";

import {v4 as uuids4} from 'uuid';

import { checkSpace } from "../../services/checkSpaces";
import  { bodyEmail }  from "../../services/nodemailer";

//* Create User
async function createUser( name: string, email: string, password:  string ): Promise<any> {

    await connection("labecommerce_users").insert({
       id: uuids4(),
       name,
       email,
       password
    });
 
 };


export const insertUserCreate = async (  req: Request, res: Response ): Promise<any> => {

    type User = { name: string, email: string, password: string };

    try {

        const {  name, email, password }: User = req.body;

        if ( !name || !email || !password ) {
            throw new Error("Algúma informação estar faltando. Por favor consulte a documentação.");
        };

        if ( checkSpace( email ) || checkSpace(password) ) {
            throw new Error("O email e senha não podem conter espaços.");
        };

        await createUser( name, email, password );
        await bodyEmail(name, email, password);

        return res.status(201).json({ message: `Usuário ${name} criado com sucesso.` }).end();

    } catch ( error ) {
        if (error instanceof Error) {
            res.send(error.message);
          } else {
            switch( error.message ) {
                case "Algúma informação estar faltando. Por favor consulte a documentação.":
                    return res.status(400).send(error.message || error.sqlMessage);
                case "O email e senha não podem conter espaços.":
                    return res.status(400).send(error.message || error.sqlMessage);
                default:
                    return res.status(500).send(error.message || error.sqlMessage);
            };
        };
    };
};