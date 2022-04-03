import express, { Request, Response } from "express";
import cors from "cors";

import { todos } from "./todos";

const app = express();

app.use(express.json());
app.use(cors());


//* EX 0
app.get("/todos",  ( request: Request, response: Response) => {

    const todosOrganization = todos.sort(( a, b ) => a.id - b.id);

    response.status(200).send(todosOrganization);
});


//* EX : 1
app.get("/ping", ( request: Request, response: Response ) => {
    response.status(200).send("Pong 🏓");
});


//* EX : 2
//* Feito no arquivo ""todos"


//* EX : 3
//* Feito no arquivo ""todos"


//* EX : 4
app.get("/todos-filters/:boolean", ( request: Request, response: Response) => {
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
app.post("/create-todo/:userId", ( request: Request, response: Response) => {
    const idUser = request.params.userId;
    const { Autorization } = request.body

    if ( !idUser ) { response.status(400).send("Id do usuario necessario")};
    if ( !Autorization.title && !Autorization.completed) { response.status(400).send("error")};

   const newTodo = {
    userId: Number(idUser),
    id: 1,
    title: Autorization.title,
    completed: Autorization.completed
   };

   const ids = todos.sort((a, b) => a.id - b.id);
   let lastId = ids[ids.length - 1];

   if( newTodo.id < lastId.id ) {
       newTodo.id = lastId.id + 1;
       todos.push(newTodo);
   };

    response.status(200).send(newTodo);
});


//* EX : 6
app.put("/modify-todo/:userId", ( request: Request, response: Response) => {
    const IDUser = request.params.userId;
    const { Autorization } = request.body;

    if ( !IDUser && !Autorization ){
        response.status(400).send("Você precisa informar o id do usuario e do post");
    };

    const idsPosts = todos.find((idPost) => idPost.id === Autorization.id);

    if( Autorization.userId === Number(IDUser) ){
        idsPosts.completed = Autorization.completed
    } else {
        response.status(400).send("Esse Não existe");
    };

    response.status(200).send(idsPosts);
});


//* EX : 7
app.delete("/delete-todo/:userId", ( request: Request, response: Response ) => {
    const IDUser = request.params.userId;
    const { Autorization } = request.body;

    const keys = Object.keys(Autorization);

    if ( !IDUser && keys[0] !== "id" ) {
        return response.status(400).send("O ID do usuario e da tarefa é necessario");
    };

    todos.forEach(( todo ) => {
        if( todo.userId === Number(IDUser)  && todo.id === Autorization.id){
            delete todo.completed  && delete todo.title && delete todo.id;
        };
    });

    response.status(200).send("Tarefa Deletada");
});


//* EX : 8
app.get("/get-todos-user/:userId", ( request: Request, response: Response) => {
    const IDUser = request.params.userId;

    if( !IDUser ) { response.status(400).send(" Id do usuario necessario.") };

    const todosUser = todos.filter(( todo ) => todo.userId === Number(IDUser));

    response.status(200).send(todosUser);
});


//* EX  : 9
//* Já feito no Postma


//* Verificando si o servidor estar rodando
app.listen( 3003, () =>{ console.log("Servidor rodando......"); });

