<h1 align="center">Exercícios</h1>

## EX: 1

### a )
- A resposta que temos e um objeto com as informações do actor de qual o id foi passado.
```TypeScript
{
  id: 11,
  name: 'Gabriel Silva',
  salary: 320000000,
  birth_date: 1998-02-23T03:00:00.000Z,
  gender: 'male',
  hometown: null,
  movie_quantity: '5'
}
```

<br>

### b )  Faça uma função que busque um ator pelo nome;
```TypeScript
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
```

<br>

### c ) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*
```TypeScript
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
	// o valor no resultado!
  const count = result[0][0].count;
  return count;
};
  });
```

<br>

## EX : 2

<br>

### a ) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
```TypeScript
    const updateActor = async (id: string, salary: number): Promise<any> => {
     await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

<br>

### b ) Uma função que receba um id e delete um ator da tabela
```TypeScript
   const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
    .delete()
    .where("id", id);
}; 
```

<br>

### c )  Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
```TypeScript
      const avgSalary = async (gender: string): Promise<any> => {
      const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

      return result[0].average;
};
```

<br>

## EX : 3

<br>

### a ) Crie um endpoint com as especificações acima
```TypeScript
const id = req.params.id;
        const actor = await getActorById(Number(id));

        res.status(200).send(actor);
```

<br>

### b )  Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

```TypeScript
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
  ```

  <br>

  ## EX : 4

  <br>

  ### a ) - Endpoint para atualizar salário com id
    - Deve ser um PUT (`/actor`)
    - Receber o salário e o id pelo body
    - Simplesmente atualizar o salário do ator com id em questão
  ```TypeScript
    app.put("/actor", async ( req: Request, res: Response) => {

    try {

        const { id, salary } = req.body

        updateActor(Number(id), salary);

        res.status(202).send({ message: `Salario atualiza para ${salary}` });

    } catch ( error: any ) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });
  ```

  <br>

  ### b )- b) Endpoint para deletar ator da tabela
    - Deve ser um DELETE (`/actor/:id`)
    - Receber id do ator como *path param*
    - Simplesmente deletar o ator da tabela
```TypeScript
  app.delete("/actor/:id", async ( req: Request, res: Response) => {
    try { 
    
      const UserId = req.params.id;

      await deleteActor(Number(UserId));

      res.status(200).send({ message: "Usuário deletado."})

    } catch ( error: any ) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });;
  ```