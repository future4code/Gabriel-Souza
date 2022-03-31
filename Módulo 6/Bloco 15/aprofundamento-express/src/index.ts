import express, { Request, Response } from "express";
import cors from "cors";

import { todos } from "./todos";

const app = express();

app.use(express.json());
app.use(cors());



//* EX : 1
app.get("/ping", ( request: Request, response: Response ) => {
    response.status(200).send("Pong 🏓");
});


//* EX : 2
//* Feito no arquivo ""todos"


//* EX : 3
//* Feito no arquivo ""todos"


//* EX : 4
app.get("/todos/:boolean", ( request: Request, response: Response) => {
    const valueBoolean = request.params.boolean;

    const todoFillter = todos.filter(( todo ) => {
        if ( valueBoolean.toLocaleLowerCase() === "true" ) {
            return todo.completed === true;
        } else if ( valueBoolean.toLocaleLowerCase() ===  "false" ) {
            return todo.completed === false;
        } else {
            return response.status(400).send("Params deve ser true ou false.");
        };
    });

    response.status(200).send(todoFillter);
});


//* EX : 5
app.post("/create/:userId", ( request: Request, response: Response) => {
    const idUser = request.params.userId;
    const objt =request.body.obj

    if ( !idUser ) { response.status(400).send("Id do usuario necessario")};
    if ( !objt.completed && !objt.title) {
        response.status(400).send("error")
    };

    const y = {
        userId: Number(idUser),
        id: 1,
        title: objt.title,
        completed: objt.completed
    };

    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === y.id) {
            y.id = todos[i].id++
        }
    }

    const jj = [...todos, y]

    response.status(200).send(jj)
   
});


//* EX : 6


app.listen( 3003, () =>{ console.log("Servidor rodando......"); });

