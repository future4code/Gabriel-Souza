import express, { Request, Response } from "express";
import cors from "cors";

import { usersList, User } from "./bankUsers";

const app = express();

app.use(express.json());
app.use(cors());

//* Satus de Erros
const Errors: { [chave: string]: { status: number, message: string } } = {
    BAD_REQUEST: {status: 400, message: "Propriedades não estão com os valores corretos."},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Usúario não autorizado ou não encontrado."},
    USER_NOT_FOUND: {status: 404, message: "Usúario ou CPF não encontrado."},
    USER_EXISTS: {status: 409, message: "Esse usúario já existe."},
    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado."}
 };

 //* Calcular data de nascimento
 const calculateAge = (birthDate: any): number =>{ 
    const currentDate = new Date();
    let anoAtual = currentDate.getFullYear();
    let anoNascParts = birthDate.split('/');
    let diaNasc = anoNascParts[0];
    let mesNasc = anoNascParts[1];
    let anoNasc = anoNascParts[2];
    let idade = anoAtual - anoNasc;
    let mesAtual = currentDate.getMonth() + 1; 

    if(mesAtual < mesNasc){
    idade--; 
    } else {
    if(mesAtual == mesNasc){ 
    if(new Date().getDate() < diaNasc ){ 
    idade--;
            };
        };
    } ;
    return idade; 
};

//* Formatar data do usuário
const convertDate = ( date: any ): any => {
    const dataSplit = date.split('/');
    const day = dataSplit[0]; // 30
    const month = dataSplit[1]; // 03
    const year= dataSplit[2]; // 2019
    const dateFinal: Date = new Date(Number(year), Number(month) - 1, Number(day));
    return dateFinal;
};


//* Pegar todos os usuários
app.get("/users", (req: Request, res: Response) => {
    if( usersList.length === 0 || usersList === undefined) {
        res.status(400).send("O banco ainda não possui usúarios.");
    } else {
        res.status(200).send(usersList);
    };
});


//* Pegar informação de apenas um usuario especifico por CPF
app.get("/user-information", (req: Request, res: Response) => {

    try{
        const queryBalance: string = req.query.cpf as string;

        const userBalance = usersList.find(( user ) => user.cpf === queryBalance);

        if ( !userBalance ) { throw new Error(Errors.USER_NOT_FOUND.message)};

        res.status(200).send(userBalance);

    }catch( error ){
        res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message);
    } ;
});


//* Criar um usuário
app.post("/user-create-account", (req: Request, res: Response) => {

    type body = { name: string, age: string, cpf: string }
  
    try {

        const { name, age, cpf  }: body = req.body;

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


//* Adicionar saldo a um usuario
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

        users.balance += balance;
        
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


//* Pagar extrato do usúario.
app.put("/user-pay-the-bill", (req: Request, res: Response) => {
    type Pay = { value:  number, date?: string,  description: string };

    try{
        const authorization = req.headers.authorization;
        const { value, description, date }: Pay | any = req.body;

        const users: User | any = usersList.find(( user ) => user.cpf === authorization);
        const searchId = (id: number) => {
            return users. extract.find(( idExtract: any ) => idExtract.id === id);
        };

        const balances = users.extract.map(( balance: any ) => balance.value);
        const dateExtract = users.extract.map(( extract: any ) => extract.date);

        if( !users ){ throw new Error(Errors.USER_NOT_FOUND.message) };
        if( !description ){ throw new Error("Passe uma descrição.") }
        if( !value || value > users.balance ){throw new Error("Você não possui esse saldo na sua conta.")};
        if( value < balances ){ throw new Error("O valor passado não dar para comprar o produto.") };

        if( date === undefined ){ 
            users.balance -= value;
            searchId(1).status = "Pago";
            res.status(200).send(`Sua foi paga. Obrigado. Extrato ${JSON.stringify(users.extract)}`)
         } else if ( convertDate(date) === convertDate(dateExtract[0]) === false) {
            users.balance -= value;
            searchId(1).status = "Pago";
            res.status(200).send(`Sua fatura foi paga na data: ${date}`)
         } else if (convertDate(date) < convertDate(dateExtract[0])) {
            searchId(1).status = "Agendado";
            res.status(200).send(`Sua fatura foi agendada para: ${date}`);
         } else if (convertDate(date) > convertDate(dateExtract[0])) {
            throw new Error("Esta data informada é maior que a data de validade do extrato");
         };

    }catch( error: any ){
        switch( error.message ){
            case Errors.USER_NOT_FOUND.message:
                res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message);
                break;
            case "Passe uma descrição.":
                res.status(400).send("Passe uma descrição.");
                break;
            case "Você não possui esse saldo na sua conta.":
                res.status(400).send("Você não possui esse saldo na sua conta.");
                break;
            case "O valor passado não dar para comprar o produto.":
                res.status(400).send("O valor passado não dar para comprar o produto.");
                break;
            case "Esta data informada é maior que a data de validade do extrato":
                    res.status(400).send("Esta data informada é maior que a data de validade do extrato");
                    break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };
});


app.put("/user/:name/transfer-money", (req: Request, res: Response)=> {
    type ReceiverUser= { amountToBeSent: number, receiverName: string, receiverCpf: string }
    //* Transfer user
    const userName: string = req.params.name as string;
    const authorization = req.headers.authorization;
    //* Receiver user
    const { amountToBeSent, receiverName, receiverCpf }: ReceiverUser = req.body;

    try{

        if( !authorization || !amountToBeSent || !receiverName || !receiverCpf ){
            throw new Error(Errors.MISSING_PARAMETERS.message);
        };

        const userTransfer: any = usersList.find(( user ) => user.cpf === authorization);
        const receiverUser: any = usersList.find(( user ) => user.cpf === receiverCpf);

        if( !userTransfer || userTransfer.name !== userName ){
            throw new Error(
                "Não existe nenhum usuário com esse CPF e nome informado. Por favor informe um CPF e nome valido para poder enviar o dinheiro."
            );
        };
        if( !receiverUser || receiverUser.name !== receiverName ){
            throw new Error("O CPF e o nome do usuário para quem você quer enviar o dinheiro não existe.");
        };
        if( userTransfer.balance < amountToBeSent ){throw new Error("Você não possui saldo suficiente para enviar o dinheiro.")};
        
        userTransfer.balance -= Number(amountToBeSent.toFixed(2));
        receiverUser.balance += Number(amountToBeSent.toFixed(2));

        res.status(200).send(`Você acabou de enviar R$${amountToBeSent} para ${receiverUser.name}`);

    }catch( error: any ){

        switch( error.message ){
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(error.message);
                break;
            case "Não existe nenhum usuário com esse CPF e nome informado. Por favor informe um CPF e nome valido para poder enviar o dinheiro.":
                res.status(Errors.MISSING_PARAMETERS.status).send(error.message);
                break;
            case "O CPF e o nome do usuário para quem você quer enviar o dinheiro não existe.":
                res.status(404).send("O CPF e o nome do usuário para quem você quer enviar o dinheiro não existe.");
                break;
            case "Você não possui saldo suficiente para enviar o dinheiro.":
                res.status(400).send("Você não possui saldo suficiente para enviar o dinheiro.");
                break;
            default:
                res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        };
    };

});


app.listen(3003, () => { console.log("Servidor rodando.....") });