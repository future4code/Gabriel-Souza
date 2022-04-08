import express, { Request, Response } from "express";
import cors from "cors";

import { users, Types } from "./data";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/teste", ( req: Request, res: Response ) => {
    res.status(200).send("OK");
});

//* EX : 1
//* A ) O GET
//* Com o users
// app.get("/users", (req: Request, res: Response) => {
//     res.status(200).send(users);
// });


//* EX : 2
app.get("/users/:types", ( req: Request, res: Response) => {
    let errorStatus = 400;

    try {
        const type: any = req.params.types

        if( type.toLocaleUpperCase() !==  Types.ADMIN && type.toLocaleUpperCase() !== Types.NORMAL ) {
            throw new Error("Este type não é valido.");
        };

        const types = users.filter(( types ) => types.type === type.toLocaleUpperCase() );

        res.status(200).send(types);

    } catch ( error: any ) {
        res.status(errorStatus).send(error.message);
    };
});



app.listen(3003, () => console.log("Servidor rodando...."));