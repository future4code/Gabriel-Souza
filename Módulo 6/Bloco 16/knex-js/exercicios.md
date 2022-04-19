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
const result = await connection.raw(`
            SELECT * FROM actor WHERE name = "${name}"
        `);
```

<br>

### c ) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*