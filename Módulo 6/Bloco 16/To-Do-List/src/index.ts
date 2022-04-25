import express, { Express ,Request, Response } from "express";
import cors from "cors";

import { connection } from "./connection";

import { AddressInfo } from "net";

import {v4 as uuidv4} from "uuid";

import {  removeSpace, convertDate, currentDate, revertDate } from "./fuctions";

const app: Express = express();

app.use(express.json());
app.use(cors());


//* Get All Users
app.get("/users", async ( req: Request, res: Response ): Promise<any> => {
    const userList =  await connection("TodoListUser").select();

   return  res.status(200).send(userList);
});


//* Get Specific User
app.get("/users/:id", async ( req: Request, res: Response ): Promise<any> => {

    const UserId: string = req.params.id;

    try {

        const user = await connection("TodoListUser").where({ id: UserId });

        if  ( !user[0] ) {
            throw new Error("Usuário não encontrado.");
        };       

        return res.status(200).json( user[0] );

    } catch ( error: any ) {
        switch( error.message ) {
            case "Usuário não encontrado":
                return res.status(404).send(error.message);
            default:
                return res.status(500).send(error.sqlMessage || error.message);
        };
    };

});


//* Create User
app.post("/user", async ( req: Request, res: Response ): Promise<any> => {

    type UserInformations = {
        name: string,
        nickName: string,
        email: string
    };

    const { name, nickName, email }: UserInformations  = req.body;

    try {

        if ( !name || !nickName || !email ) { 
            throw new Error("Alguma informação estar faltando. Por favor verifique e tente novamente.") ;
        };

        if( removeSpace(nickName) || removeSpace(email)){
            throw new Error("Email e NickName não podem conter espaços em branco")
        }

        await connection("TodoListUser")
        .insert({
            id:uuidv4(),
            name,
            nickName,
            email
        });

        return res.status(201).json({message: "Usuário criado."});

    } catch ( error: any ){
        switch( error.message ) {
            case "Alguma informação estar faltando. Por favor verifique e tente novamente.":
                return res.status(400).send(error.message)
            case "Email e NickName não podem conter espaços em branco":
                return res.status(400).send(error.message)
            default:
                return res.status(500).send(error.sqlMessage || error.message);
        };
    };

});


//* Editt User
app.put("/user/edit/:id", async ( req: Request, res: Response ): Promise<any> => {

    const UserId: string = req.params.id;

    type EditUser = { name: string, nickName: string };

    const { name, nickName }: EditUser = req.body;

    try {

        const user: any = await connection("TodoListUser").where({ id: UserId});

        if ( !user[0] ) {
            throw new Error("Usuário não encontrado.");
        };

        if ( !name || !nickName ) {
            throw new Error("Alguma informação esta faltando. Por favor verifique e tente novamente.");
        };

        if ( removeSpace(nickName) ) {
            throw new Error("O Nick Name não pode conter espaços.");
        };

        //* update User Informations
        await connection("TodoListUser").update({
            name,
            nickname: nickName
        }).where({ id: UserId });

        return res.status(201).json({ message: "Informações atualizadas com sucesso." });

    } catch ( error: any ) {
        switch( error.message ) {
            case "Usuário não encontrado.":
                return res.status(404).send(error.message)
            case "Alguma informação esta faltando. Por favor verifique e tente novamente.":
                return res.status(400).send(error.message);
            case "O Nick Name não pode conter espaços.":
                return res.status(400).send(error.message);
            default:
                return res.status(500).send(error.sqlMessage || error.message);
        };
    };

});



//* Get All Tasks User
app.get("/task", async ( req: Request, res: Response): Promise<any> => {

    const creatorUserId: string = req.query.creatorUserId as string;

    try {

        if( !creatorUserId && creatorUserId?.length <= 0 ){
            throw new Error("Por favor insira o id do usuário na query creatorUserId.");
        };

        const  UserTasks: any = await connection("TodoListTask")
        .innerJoin(
            "TodoListUser",
            "TodoListUser.id",
            "TodoListTask.creator_user_id"
        )
        .select()
        .where({ "TodoListTask.creator_user_id": creatorUserId });

        if( UserTasks?.length <= 0 || !UserTasks ){
            return res.status(200).json({ tasks: [] });
        };

        return res.status(200).json(UserTasks );

    } catch (  error: any ) {
        switch( error.message ) {
            case "Por favor insira o id do usuário na query creatorUserId.":
                return res.status(404).send(error.message);
            default:
                return res.status(500).send(error.sqlMessage || error.message);
        };
    };

});


//*  Get Specific Task User
app.get("/task/:id", async ( req: Request, res: Response ): Promise<any> => {

    const UserId: string = req.params.id;

    try {

       const  UserTask: any = await connection("TodoListTask")
       .innerJoin(
           "TodoListUser",
           "TodoListTask.creator_user_id",
           "TodoListUser.id"
       )
       .select("TodoListTask.*", "TodoListUser.nickname")
       .where({ "TodoListTask.id": UserId })

        if ( !UserTask[0] ) {
            throw new Error("Tarefa não encontrada.");
        };

       UserTask[0].limit_date = revertDate(UserTask[0].limit_date);

       return res.status(200).json(UserTask[0]);

    } catch ( error: any ) {
        switch( error.message ) {
            case "Tarefa não encontrada.":
                return res.status(404).send(error.message);
            default:
                return res.status(500).send(error.sqlMessage || error.message);
        };
    };

});


//* Create task
app.post("/task", async ( req: Request, res: Response): Promise<any> => {

    type Task = {
        title: string,
        description: string,
        status?: string,
        limitDate: string,
        creatorUserId: string
    };

    const { title, description, status, limitDate, creatorUserId }: Task = req.body;

    try {

        if ( !title || !description || !limitDate || !creatorUserId ) {
            throw new Error("Alguma informação estar faltando. Por favor verifique e tente novamente.");
        };

        if ( convertDate(limitDate) < currentDate ){
            throw new Error("A data da tarefa não pode ser menor que a data atual.");
        };

        await connection("TodoListTask").insert({
            id: uuidv4(),
            title,
            description,
            status,
            limit_date: convertDate(limitDate),
            creator_user_id: creatorUserId
        });

        return res.status(201).json({ message: `Tarefa ${title} criada.`});;

    } catch ( error: any ) {
        switch ( error.message ) {
            case "Alguma informação estar faltando. Por favor verifique e tente novamente.":
                return res.status(400).send(error.message);
            case "A data da tarefa não pode ser menor que a data atual.":
                return res.status(400).send(error.message)
            default:
                return res.status(500).send(error.sqlMessage || error.message);
        };
    };

});



//* Server Running.....
const server = app.listen( process.env.PORT || 3003, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }
});