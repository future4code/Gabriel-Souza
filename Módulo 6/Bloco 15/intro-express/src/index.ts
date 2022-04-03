import express, { request, Request, Response } from "express";
import cors from "cors";

import { users } from "./utils/users";
import { posts } from "./utils/posts";

const app = express();

app.use(express.json());
app.use(cors());

//* EX : 1
app.get("/", ( request: Request, response: Response ) => {
    console.log("Deu certo");

    response.status(201).send("Tudo OK.");
});


//* EX : 2
//* Já foi feito no arquivo users.ts


//* EX : 3
//* Já foi feito no arquivo users.ts


//* EX : 4
app.get("/users", ( request: Request, response: Response ) => {
    response.status(200).send(users);
});


//* EX : 5
//* Feito no arquivo Posts


//* EX : 6
//* Preferir fazer fora para seguir o exemplo da api do JSONPlaceholder. O array
//* de Users fica so as informações do usuario. Acho que desta forma
//* fica mais organizado.


//* EX : 7
app.get("/posts", ( request: Request, response: Response ) => {
    response.status(200).send(posts);
});


//* EX : 8
app.get("/posts/:userId", ( request: Request, response: Response) => {
    const id = request.params.userId;
    if ( !id ) {
        return response.status(400).send("O id do usuario é necessario.");
    };

    const userPost = posts.find(( userPost ) => userPost.userId === Number(id) );

    response.status(200).send(userPost);
});

//* Desafios

//* EX : 9
app.delete("/posts/delete/:idPost", ( request: Request, response: Response) => {
    const postId = request.params.idPost;
    
    if ( !postId ) {
        return response.status(400).send("Id do post necessario.");
    };

    const newPost = posts.filter(( post ) => post.userId !== Number(postId));

    response.status(200).send(newPost);
});


//* EX 10
app.delete("/posts/delete-user/:idUser", ( request: Request, response: Response) => {
    const idUser = request.params.idUser;

    if( !idUser ) { return response.status(400).send("Id do usuario obrigatorio.") };

    const deleteUser = users.filter(( user ) => user.id !== Number(idUser) );

    response.status(200).send(deleteUser);
});


//* EX : 11
//* Já foi feito no Postman

app.listen( 3003, () => { console.log("Servidor rodando......") });