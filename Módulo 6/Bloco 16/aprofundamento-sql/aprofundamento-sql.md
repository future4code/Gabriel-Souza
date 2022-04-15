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

### EX 3