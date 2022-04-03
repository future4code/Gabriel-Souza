import express, { Request, Response } from "express";
import cors from "cors";

//* Isntall Noddemon
//* npm i nodemon ts-node --save-dev

const app = express();

app.use(express.json());
app.use(cors());


app.get( "/Gabriel/:id", ( request: Request, response: Response ) => {
    console.log("Deu Certo!");

    const id = request.params.id;
    const senha = request.headers;
    const nome = request.body;
    
    console.log(id, senha, nome)

    response.status(201).send("GTA OK!");
});

app.listen( 3003, () => {
    console.log("Servidor estar rodando....");
});