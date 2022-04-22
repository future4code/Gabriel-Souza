<h1 align="center">Relações em SQL</h1>

<br/>

## EX : 1

<br/>

### a )  Explique o que é uma chave estrangeira
- Resposta: **As chaves estrangeiras permitem que os administradores de banco de dados identifiquem facilmente as diferentes conexões existentes em um sistema de gerenciamento de banco de dados SQL.**

<br/>

### b )  Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
```SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES 
("001", "Muito bom!", 7, "001"),
("002", "Excelente Filme", 10, "002");
```

<br/>

### c ) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

<br/>

### d ) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

<br/>

### e ) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.