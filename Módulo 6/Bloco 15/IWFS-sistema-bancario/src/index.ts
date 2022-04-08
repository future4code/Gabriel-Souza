import express, { Request, Response } from "express";
import cors from "cors";

import { usersList, User, Transactions } from "./bankUsers";

const app = express();

app.use(express.json());
app.use(cors());

const Errors: { [chave: string]: { status: number, message: string } } = {
    BAD_REQUEST: {status: 400, message: "Propriedades não estão com os valores corretos."},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Usúario não autorizado. Tem que ser maior de 18 anos."},
    USER_NOT_FOUND: {status: 404, message: "Usúario ou CPF não encontrado."},
    USER_EXISTS: {status: 409, message: "Esse usúario já existe."},
    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado."},
 };

//* Criar usúario

app.get("/users", (req: Request, res: Response) => {
    if( usersList.length === 0 || usersList === undefined) {
        res.status(400).send("O banco ainda não possui usúarios.");
    } else {
        res.status(200).send(usersList);
    };
});


app.get("/user-information", (req: Request, res: Response) => {

    try{
        const queryBalance: string = req.query.cpf as string;

        const userBalance = usersList.find(( user ) => user.cpf === queryBalance);

        if ( !userBalance ) { throw new Error(Errors.USER_NOT_FOUND.message)};

        res.status(200).send(userBalance);

    }catch( error ){
        res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message);
    } 

});


app.post("/user-create-account", (req: Request, res: Response) => {

    type body = { name: string, age: string, cpf: string }
  
    try {

        const { name, age, cpf  }: body = req.body;

        const calculateAge = (birthDate: any): number =>{ 
            const currentDate = new Date();
            var anoAtual = currentDate.getFullYear();
            var anoNascParts = birthDate.split('/');
            var diaNasc = anoNascParts[0];
            var mesNasc = anoNascParts[1];
            var anoNasc = anoNascParts[2];
            var idade = anoAtual - anoNasc;
            var mesAtual = currentDate.getMonth() + 1; 

            if(mesAtual < mesNasc){
            idade--; 
            } else {
            if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 

            idade--; 
            
                    }
                }
                } 
            return idade; 
        };

        const findCpf =  usersList.find(( cpfs ) => cpfs.cpf === cpf);

        if( !name || !age || !cpf ){throw new Error(Errors.BAD_REQUEST.message)};
        if( calculateAge(age) < 18 ){throw new Error(Errors.AUTHORIZATION_NOT_FOUND.message)}
        if( findCpf  ){throw new Error(Errors.USER_EXISTS.message)};

        const lastId = usersList[usersList.length - 1];
        const userListSize = usersList.length;

        const newUser: User = {
            id: 1,
            name,
            age,
            cpf,
            balance: 0,
            extract: []
        };

        if( lastId === undefined || userListSize === 0 ){
            usersList.push(newUser);
        } else {
            newUser.id = lastId.id + 1;
            usersList.push(newUser);
        };
        
    res.status(201).send(usersList);

    }catch( error: any ) {
        switch( error.message ){
            case Errors.BAD_REQUEST.message:
                res.status(Errors.BAD_REQUEST.status).send(Errors.BAD_REQUEST.message);
                break;
            case Errors.AUTHORIZATION_NOT_FOUND.message:
                res.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
                break;
            case Errors.USER_EXISTS.message:
                res.status(Errors.USER_EXISTS.status).send(Errors.USER_EXISTS.message);
                break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };
});


app.put("/user-add-balance/:name", (req: Request, res: Response) => {

    type userUpdate = { balance: number }
 
    try{
        const authorization: string = req.headers.authorization as string;
        const userName = req.params.name;
        const { balance }: userUpdate = req.body;

        const users: User | any  =  usersList.find(( user ) => user.cpf === authorization);

        if( !users || users.name !== userName ){throw new Error(Errors.USER_NOT_FOUND.message)};
        if(  !balance ){throw new Error(Errors.BAD_REQUEST.message)};
        if( balance < 5 ){throw new Error("Valor tem que ser acima de 5 reais")};

        users.balance = balance;
        
        res.status(200).send(users);

    }catch( error: any ){
        switch( error.message ){
            case Errors.USER_NOT_FOUND.message:
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message);
                break;
            case Errors.BAD_REQUEST.message:
                res.status(Errors.BAD_REQUEST.status).send(Errors.BAD_REQUEST.message);
                break;
            case "Valor tem que ser acima de 5 reais":
                res.status(400).send("Valor tem que ser acima de 5 reais");
                break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };
});


app.listen(3003, () => { console.log("Servidor rodando.....") });