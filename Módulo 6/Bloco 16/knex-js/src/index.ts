import express, { Express, Request, Response } from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

//* EX: 1

//* Esse arquivo seria o index.ts

const getActorById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
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

//* EX : 1 : a )
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
//* =====================================================================

//* EX : 1 : b )
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM actor WHERE name = "${name}"
  `)
  return result
};


  //* EX : 1 : c )
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM actor WHERE gender = "${gender}"
    `);
    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };

  //* ======================================================================
  
  //* EX: 2

  //* EX : 2 : a )
  const updateActor = async (id: number, salary: number): Promise<any> => {
    await connection("actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };


  //* EX : 2 : b )
  const deleteActor = async (id: number): Promise<void> => {
    await connection("actor")
      .delete()
      .where("id", id);
  }; 


//* EX : 2 : c )
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

  //* =====================================================================

  //* EX : 3

  //* EX : 3 : a )
  app.get("/actors/:id", async ( req: Request, res: Response) => {
      try {

        const id = req.params.id;
        const actor = await getActorById(Number(id));

        res.status(200).send(actor);

    } catch( error: any ) {
        res.status(500).send(error.sqlMessage || error.message);
    }
  });


  //* EX : 3 : b )
  app.get("/actors", async ( req: Request, res: Response ) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch ( error: any ) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });

  //* ==================================================================================

  //* EX : 4

  //* Criando um novo ator
  app.post("/actor", async ( req: Request, res: Response) => {
    try {

      await connection("actor").insert({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: new Date(req.body.birthDate),
        gender: req.body.gender
      });

      res.status(201).send({ message: `Ator ${req.body.name} criado  em ${new Date()}` });

    } catch ( error: any ){
      res.status(500).send(error.sqlMessage || error.message);
    }
  });

  //* EX : 4 : a )
  app.put("/actor", async ( req: Request, res: Response) => {

    try {

        const { id, salary } = req.body

        updateActor(Number(id), salary);

        res.status(202).send({ message: `Salario atualiza para ${salary}` });

    } catch ( error: any ) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });


  //* EX : 4 : b )
  app.delete("/actor/:id", async ( req: Request, res: Response) => {
    try { 
    
      const UserId = req.params.id;

      await deleteActor(Number(UserId));

      res.status(200).send({ message: "Usuário deletado."})

    } catch ( error: any ) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });;














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