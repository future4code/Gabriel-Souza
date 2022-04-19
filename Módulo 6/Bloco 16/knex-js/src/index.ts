import express, { Express, Request, Response } from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

//* Esse arquivo seria o index.ts

// const getActorById = async (id: number): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM actor WHERE id = '${id}'
//     `)
  
//       return result[0][0]
//   }
  
//   //* Assim a chamada funciona fora dos endpoints com .then()/.catch
//   getActorById(11)
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// //* Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById(11) )
// })()

// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id
  
//       console.log(await getActorById(Number(id)))
//     //   res.status(200).send(await getActorById(Number(id)))
  
//       res.end()
//     } catch (error: any) {
//           console.log(error.message)
//       res.status(500).send("Unexpected error")
//     }
//   }) //* bata no http://localhost:3003/users/001 e veja o que acontece no terminal


  app.get("/users", async (req: Request, res: Response): Promise<void> => {
    try {

        const name = req.query.name;

        //* Fazendo com Raw
        // const result = await connection.raw(`
        //     SELECT * FROM actor WHERE name = "${name}"
        // `);
        
        const result = await connection("actor").where(`name`, 'like', `%${name}%`)

        res.status(200).send(result[0]);

    } catch( error: any ) {
        res.status(500).send(error.sqlMessage || error.message);
    }
  });


  app.get("/users/genders", async (req: Request, res: Response): Promise<void> => {
    try {

        //* Fazendo com Raw
        const result = await connection.raw(`
        SELECT COUNT(*), gender
        FROM actor
        GROUP BY gender
        `);

        res.status(200).send(result[0]);

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

function S(arg0: string, S: any, arg2: any) {
    throw new Error("Function not implemented.");
}