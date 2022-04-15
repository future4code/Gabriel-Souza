<h1 align=center>Aprofundamento SQL</h1>

<br>

### EX : 1

<br>

- a ) Explique o que este comando faz :
```sql
    ALTER TABLE Actor DROP COLUMN salary;
```
- Resposta : `ALTER TABLE` :  é usada para adicionar, excluir ou modificar colunas em uma tabela existente. É também é usada para adicionar e descartar várias restrições em uma tabela existente.

- Resposta : `DROP COLUMN` : esse comando é usado para excluir uma coluna em uma tabela existente.

- Resposta final : Esse comando esta excluindo da tabela **Actor** a coluna **salary**. 

<br>

- b ) Explique o que este comando faz :
```sql
    ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

- Resposta : Este comando esta redeclarando o nome e o tipo de **gender** para **sex** com o `VARCHAR` de 6 caracteres.

<br>

- c ) Explique o que este comando faz :
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

- Resposta : Este comando esta redeclarando o tipor de **gender** para o tipo `VARCHAR` de 255 caracteres.

<br>

- d ) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
- Resposta : 
```sql
ALTER TABLE actor CHANGE gender gender VARCHAR(100) NOT NULL;
```

<br>

### EX : 2

<br>

- a ) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
- Resposta : 
```sql
UPDATE actor SET 
name = "Barão", 
birth_date = "2019-08-08", 
gender = "male" 
WHERE id = 3;
```

<br>

- b ) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

- 1° Resposta :
```sql
UPDATE actor SET 
name = "JULIANA PAES" 
WHERE name = "Juliana Paes";
```

- 2° Resposta :
```sql
UPDATE actor SET 
name = "Juliana Paes" 
WHERE name = "JULIANA PAES";
```

<br>

- c ) Escreva uma query que atualize todas as informações do ator com o id 005
- Resposta :
```sql
UPDATE actor SET
name = "Crocodilo do Pântano",
salary = 150000,
birth_date = "1999-01-01",
gender = "male"
WHERE id = 5;
```

<br>

- d ) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

- Menssagem após tentar atualizar o nome : **23:24:42	UPDATE actor SET name = "Crocodilo da Praia" WHERE id = "10"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.204 sec**

- Resposta : Para mim não gerou nenhum error. Ele so avisou que nenhuma linha foi afetada.

<br>

### EX : 3
#### Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela.

- a )  Escreva uma query que apague a atriz com o nome Fernanda Montenegro
```sql
    # Escolhir o Tony Ramos
    DELETE FROM actor WHERE name = "Tony Ramos";
```

<br>

b ) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
```sql
DELETE FROM actor WHERE 
gender = "male" AND salary > 1000000;
```

<br>

### EX : 4

<br>

- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
```sql
    SELECT MAX(salary) AS max_salary FROM actor;
```

<br>

- b ) Escreva uma query que pegue o menor salário das atrizes
```sql
    SELECT MIN(salary) FROM 
    actor WHERE gender = "female";
```

<br>

- c ) Escreva uma query que pegue a quantidade de atrizes
```sql
    SELECT COUNT(*) FROM
    actor WHERE gender = "female";
```

<br>

- d ) Escreva uma query que pegue a soma de todos os salários
```sql
    SELECT SUM(salary) FROM actor;
```

<br>

### EX :  5

<br>

- a ) Releia a última query. Teste-a. Explique o resultado com as suas palavras
```sql
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
```
- Resposta : Ele retornou uma tabela como a primerira coluna com o nome `COUNT(*)` e a segunda coluna com o nome `gender`. Na primeira linha ele trouxe a quantidade de atores do sexo **feminino** e a segunda linha trouxe a quantidade de atores do sexo **masculino**.

<br>

- b ) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
```sql
    SELECT id, name FROM actor ORDER BY name DESC;
```

<br>

- c ) Faça uma query que retorne todos os atores ordenados pelo salário
```sql
    SELECT * FROM actor ORDER BY salary ASC;
```

<br>

- d ) Faça uma query que retorne os atores com os três maiores salarios
```sql
    SELECT * FROM actor ORDER BY salary DESC LIMIT 3;
```

<br>

- e ) Faça uma query que retorne a média de salário por gênero
```sql
    SELECT AVG(salary), gender 
    FROM actor GROUP BY gender;
```

<br>

### EX : 6
#### Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!

<br>

- a ) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
```sql
    ALTER TABLE movies
    ADD playing_limit_date DATE;
```

<br>

- b ) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
```sql
    ALTER TABLE movies
    CHANGE rating rating FLOAT NOT NULL;
```

<br>

- c ) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
```sql
    UPDATE movies
    SET playing_limit_date = "2018-01-01"
    WHERE id = "003";
```

<br>

- d ) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
- Resposta: Eu não conseguir DELETA sem guardar o id.