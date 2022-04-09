import express, { Request, Response } from "express";
import cors from "cors";

import { users, Types, Users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

const convertString = ( string: string): string => {
    return string.toLocaleUpperCase();
};

app.get("/teste", ( req: Request, res: Response ) => {
    res.status(200).send("OK");
});

//* EX : 1
//* A ) O GET
//* Com o users
// app.get("/users", (req: Request, res: Response) => {
//     res.status(200).send(users);
// });


//* EX : 2
//* a ) Passei via params por que achei mais correto para fazer com algo que já é especifico.
//* b ) Já fiz abaixo e testado.
app.get("/users/:types", ( req: Request, res: Response) => {
    let errorStatus = 400;

    try {
        const type: string = req.params.types as string

        if( convertString(type) !==  Types.ADMIN && convertString(type) !== Types.NORMAL ) {
            throw new Error("Este type não é valido.");
        };

        const types = users.filter(( types ) => convertString(types.type) === convertString(type) );

        res.status(200).send(types);

    } catch ( error: any ) {
        res.status(errorStatus).send(error.message);
    };
});


//* EX : 3
//* query
//* Já feito e testado a baixo.
app.get("/users", ( req: Request, res: Response) => {
    let errorStatus = 400;

    try {
        const name: string = req.query.name as string;

        const user = users.find(( userName ) => {
           return  convertString(userName.name) === convertString(name);
        });

        if( !user ){ 
            errorStatus = 404;
            throw new Error("Nome do usuario não encontrado.");
        };

        res.status(200).send(user);

    } catch ( error: any ) {
        res.status(errorStatus).send(error.message);
    };
});


//* EX : 4
//* a ) Nessse exemplo mudou nada.
//* b ) Não. Por que o metodo PUT serve para fazer atualizações ou modificações nos dados.
app.post("/users", (req: Request, res: Response) => {
    let errorStatus = 400;

    try {
        const { name, type, age } = req.body;

        if( !name || !type || !age ){
         throw new Error("Algo estar faltando na body. Por favor verifique a documentação"); 
        };

        const newUser: Users| any = {
            id: 1,
            name,
            type,
            age
        };

        const lastUser = users[users.length -1];
        
        if ( newUser.id < lastUser.id ) {
            newUser.id = lastUser.id + 1;
            users.push(newUser);
        };

        res.status(200).send(newUser);

    } catch ( error: any ) {
        res.status(errorStatus).send(error.message);
    };
});


app.listen(3003, () => console.log("Servidor rodando...."));