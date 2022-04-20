import express, { Express, Request, Response } from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());


//* Pegar lista de Atores
app.get("/actor",  async ( req: Request, res: Response): Promise<void> => {
    try {

        //* Usando o metódo Raw
        // const result = await connection.raw(`
        //     SELECT * FROM actor;
        // `);
        // result[0]

        //* Usando o Query Builder
        const result = await connection("actor").select();

        res.status(200).send(result);
    } catch( error: any ) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});


//* Criar um  Ator
app.post("/actor", async ( req: Request, res: Response ): Promise<void> => {
    try {

        //* Fazendo com o metódo Raw
        // await connection.raw(`
        // INSERT INTO actor(name, salary, birth_date, gender)
        // VALUES(
        //     "${req.body.name}",
        //      ${req.body.salary},
        //     "${req.body.birthDate}",
        //     "${req.body.gender}"
        //      );
        // `);

        //* usando o Query Builder
        await connection("actor").insert({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender
        });

        res.status(201).send("Criado com sucesso.");
    } catch( error: any ) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});


//* Atualizar informações de um Ator
app.put("/actor/:id",  async ( req: Request, res: Response): Promise<void> => {

    try {

        await connection("actor")
        .update({
            salary: req.body.salary
        })
        .where({ id: req.params.id })

        res.status(200).send({message: "Editado com sucesso."});
    } catch( error: any ) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});


//* Deletar um Ator existente
app.delete("/actor/:id",  async ( req: Request, res: Response): Promise<void> => {

    try {

        await connection("actor").delete().where({ id: req.params.id })

        res.status(200).send({message: "Deletado com sucesso."});
    } catch( error: any ) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// function S(arg0: string, S: any, arg2: any) {
//     throw new Error("Function not implemented.");
// }
