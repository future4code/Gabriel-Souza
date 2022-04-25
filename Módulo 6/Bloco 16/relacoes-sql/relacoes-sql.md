<h1 align="center">Relações em SQL</h1>

<br/>

## EX : 1

<br/>

### a )  `Explique o que é uma chave estrangeira`
- Resposta: **As chaves estrangeiras permitem que os administradores de banco de dados identifiquem facilmente as diferentes conexões existentes em um sistema de gerenciamento de banco de dados SQL.**

<br/>

### b ) ` Crie a tabela e, ao menos, uma avaliação para cada um dos filmes`
```SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES 
("001", "Muito bom!", 7, "001"),
("002", "Excelente Filme", 10, "002");
```

<br/>

### c ) `Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.`
<br />

- `Error gerado`: **15:29:18 INSERT INTO Rating ( id, comment, rate, movie_id ) VALUES ( "003", "Bom", 5, "005" ) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`joy-419598-gabriel-souza`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movies` (`id`)) 0,187 seg**

<br />

- `Explicando o erro. Achei essa explicão no StackOverflow:` **Os relacionamentos de chave estrangeira envolvem uma tabela pai que contém os valores centrais dos dados e uma tabela filha com valores idênticos apontando para o pai. A cláusula FOREIGN KEY é especificada na tabela filho.**

 - **Ele rejeitará qualquer operação INSERT ou UPDATE que tente criar um valor de chave estrangeira em uma tabela filha se não houver um valor de chave candidato correspondente na tabela pai.**

- **Portanto, seu erro Error Code: 1452. Cannot add or update a child row: a foreign key constraint failssignifica essencialmente que você está tentando adicionar uma linha à sua Ordrelinjetabela para a qual nenhuma linha correspondente (CódigoDoPedido) está presente na Ordretabela.**

- **Você deve primeiro inserir a linha na sua Ordretabela.**

<br/>

### d ) `Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.`
```SQL
ALTER TABLE Movies DROP COLUMN rating;
```

<br/>

### e ) `Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.`
```SQL
DELETE FROM Movies WHERE rating;
```
- `Erro gerado:` **15:47:51 DELETE FROM Movies WHERE classificação Código de erro: 1054. Coluna desconhecida 'classificação' na 'cláusula where' 0,188 seg**

- `Explicando o erro:` **Este erro aconteceu por que eu anteriormente apaguei a coluna `rating` então ela deixou de existir e a clausula `WHERE` não conseguiu acha-la para poder apagar o filme.**

<br />

## EX : 2

<br />

### a ) `Explique, com as suas palavras, essa tabela`
```SQL
CREATE TABLE MovieCast (
    movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
- `Resposta:` **Essa tabela esta criando dois ids e usando eles como uma chave estrangeira e usando-as como referencia para outras duas tabelas passando os ids dos valores que vem dessas tabelas já criadas.**

<br />

### b ) `Crie, ao menos, 6 relações nessa tabela `
```SQL
INSERT INTO MovieCast (movie_id, actor_id)
Values (
"001",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"002",
"003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"003",
"004"
);
```

<br />

### c ) `Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query`
```SQL
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"010",
"011"
);
```

- `Erro gerado:` **19:33:16 INSERT INTO MovieCast (movie_id, actor_id) VALUES( "010", "011" ) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`joy-419598-gabriel-souza `.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movies` (`id`)) 0,203 seg**

- `Resposta:` **Os relacionamentos de chave estrangeira envolvem uma tabela pai que contém os valores centrais dos dados e uma tabela filha com valores idênticos apontando para o pai. A cláusula FOREIGN KEY é especificada na tabela filho.

- Ele rejeitará qualquer operação INSERT ou UPDATE que tente criar um valor de chave estrangeira em uma tabela filha se não houver um valor de chave candidato correspondente na tabela pai.**

<br />

### d ) ` Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query`
```SQL
DELETE FROM Actor WHERE id = "002"	Error Code: 
```

- `Erro gerado:` **19:40:54 DELETE FROM Actor WHERE id = "002" Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`joy-419598-gabriel-souza`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2 ` FOREIGN KEY (`actor_id`) REFERÊNCIAS `Actor` (`id`)) 0,203 seg**

- `Explicação:` **Ele não pode apagar o ator em quanto sua referencia na tabela filho não for excluida também.**

<br />

## EX : 3

<br />

```SQL
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### a ) `Explique, com suas palavras, a query acima. O que é o operador ON?`
- `Resposta:` **Ele estar selecionando todos os filmes da tabela Movies em que o Rating seja igual ao Id da tabela Movies que si indentifique com o id da chave FOREIGN KEY trazendo todos os filmes que possuam um Rating em só query.**

<br />

### b ) `Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.`
```SQL
SELECT Movies.id, Movies.title AS nome, Rating.rate As nota
FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```