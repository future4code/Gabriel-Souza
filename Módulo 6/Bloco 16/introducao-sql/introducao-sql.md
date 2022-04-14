<h1 align=center>Introdução SQL</h1>


### EX : 1

```sql
# Criando a tabela de atores
CREATE  TABLE actor(
	id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

#### a ) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

<br>

- **VARCHAR(n) ou NVARCHAR(n)** : Serve para tipos de dados de caracteres de valor grande.

- **DATE** : Serve para representa uma data no formato (YYYY-MM-DD).

- **PRIMARY KEY**: Restricão identifica exclusivamente cada registro em uma tabela. As chaves primárias devem conter **UNIQUE** e não podem conter valores **NULL**. 

- **NOT NULL**: Restrição impõe que uma coluna não aceite valores **NULL**, o que significa que você não pode inserir  ou atualizar um registro sem adicionar  um valor a esse campo.

<br>

#### b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.

<br>

- **SHOW DATABASE**: Retornou para min o nome do meu banco de dados criado e mais algumas informações dele como: Table : schemata, Type: VARCHAR e mais alguns.

- **SHOW TABLES**: Ele mim retornou as tabelas criadas no momento por min que no caso ate agora é so a tabela "actors".

<br>

#### c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.

- **DESCRIBE**: `DESCRIBE actor` Este comando mim retornou a estrutura da minha tabela com os nomes valores e tipos dela.

<br>

### EX: 2 

``` sql
# Criando ator
INSERT INTO actor(id, name, salary, birth_date, gender)
VALUES(
	"001",
    "Tony Ramos",
     400000,
    "1948-08-25",
    "male"
);
```

<br>

#### a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

```sql
# Criando um ator Glória Pires
INSERT INTO actor(id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
     1.200,
    "1963-08-23",
    "female"
);
```

<br>

#### b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

- Menssagem de error **Código de erro: 1062. Entrada duplicada '002' para chave 'PRIMARY' 0,188 seg**

#### Pelo que eu intender este error aconteceu por que eu tentei criar  outro ator com o mesmo id que ja existe. Isto iria causa problemas futuros por conta de ids duplicados.

<br>

#### c )  Query com o nome errado e faltando colunas
```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
- Error gerado: **Código do erro: 1146. Tabela 'joy-419598 -gabriel-souza.Actor' não existe 0,188 seg**. Este error aconteceu poe que estou tentando criar um ator numa tabela que não existe que a "Actors".

- Query concertada sua resposta foi : **08:14:32 INSERT INTO ator (id, nome, salário, data_nascimento, sexo) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "feminino" ) 1 linha(s) afetada(s) 0,187 segundos**

<br>

#### d ) Query com o nome errado e os valores da coluna faltando neste caso: o "name" 
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

- 1° Error gerado : **Código do erro: 1146. Tabela 'joy-419598-gabriel- souza.Actor' não existe 0.187 seg**

- 2° Error gerado : **Código de erro: 1364. O campo 'name' não possui um valor padrão 0,188 seg**

- Query concertada : Codigo de sucesso : **08:24:15 INSERT INTO ator (id, nome, salário, data_nascimento, sexo) VALUES( "004", "Gta", 400000, "1949-04-18", "male" ) 1 linha(s) afetada(s) 0,187 segundo**

<br>

#### d ) Estava faltado a string em volta da data. Mais já ageitei o error
```sql
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

<br>

- 1° Error gerado : **Código de erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,172 seg**

- 2° Query concertada : codigo gerado : **15:50:05 INSERT INTO ator (id, nome, salário, data_nascimento, sexo) VALUES( "005", "Juliana Paes", 719333.33, "1979-03-26", "female" ) 1 linha(s) afetada(s) 0,188 segundos**

<br>

#### f ) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

```sql
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
	"006",
	"Fernanda Montenegro",
	300000,
	"1929-10-19", 
	"female"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

<br>

### EX: 3

<br>

- a ) Escreva uma query que retorne todas as informações das atrizes
```sql
SELECT * FROM actor WHERE gender = "female";
```

- b ) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
```sql
SELECT salary FROM actor WHERE name = "Tony Ramos";
```

- c )  Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

-  Resposta : Todas as colunas da tabela voltaram com o valor  NULL
```sql
SELECT * FROM actor WHERE gender = "invalid";
```

- d ) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
```sql
SELECT id, name, salary FROM actor WHERE salary <= 500;
```

- e )Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
```sql
SELECT id, nome from actor WHERE id = "002"

# Codigo cocertado
SELECT id, name from actor WHERE id = "002";
```

- 1° Codigo do error : **133 / 5.000
Resultados de tradução
16:18:58 SELECT id, nome do ator WHERE id = "002" LIMIT 0, 1000 Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,187 seg**

- 2° Menssagem de sucesso: **16:21:32 SELECT id, nome do ator WHERE id = "002" LIMIT 0, 1000 1 linha(s) retornada(s) 0,172 seg / 0,000 seg**

<br>

#### EX : 4
#### Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

```sql
# Codigo que faz isso
SELECT * FROM actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

<br>

- a ) Aquery acima pelo que eu itendir ela prorcurar por todos os atores que atendem as condições impostas. Por exemplo o nome tem que comecar coma letra "A" ou a letra "J" e o salario tem que ser maior que 300000. Si tiver alguem que atende essa condição ele achar e trás ela para nós.

- b )  Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
```sql
SELECT * FROM actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

- c )  Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
```sql
SELECT * FROM actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

- d ) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
```sql
name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary  350000 AND salary < 900000;
```

<br>

### EX : 5
```sql
# Tabela de filmes criada
CREATE TABLE movies(
	  id VARCHAR(50),
    title VARCHAR(30) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

<br>

- a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente. 

- Resposta da letra ( a ): Já pesquisei essa query é usada para tipos de dados de strings grandes.

<br>

- b )  Filme criado
```sql
INSERT INTO movies(id, title, synopsis,  release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
    Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
    7
);
```

- c ) Filme criado
```sql
INSERT INTO movies(id, title, synopsis, release_date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
    empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

- d ) Filme criado
```sql
INSERT INTO movies(id, title, synopsis, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
    A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

- e ) Pesquise algum filme brasileiro e crie ele na tabela
```sql
# Filme criado
INSERT INTO movies(id, title, synopsis, release_date, rating)
VALUES(
	"004",
    "O auto da compadecida",
    "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso,
    Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno
    vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa
    Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.",
    "2000-10-10",
    10
);
```

<br>

### EX : 6

#### Escreva uma query que:

<br>

- a ) Retorne o id, título e avaliação a partir de um id específico;
```sql
SELECT id, title, rating FROM movies WHERE id = "004";
```

- b ) Retorne um filme a partir de um nome específico;
```sql
SELECT * FROM movies WHERE title = "Dona Flor e Seus Dois Maridos";
```

- c ) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
```sql
SELECT id, title, synopsis FROM movies WHERE rating >= 7;
```

<br>

### EX : 7
#### Escreva uma query que:

<br>

- a ) Retorna um filme cujo título contenha a palavra vida
```sql
SELECT * FROM movies WHERE title LIKE "%vida%";
```

- b ) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
```sql
SELECT * FROM movies WHERE title LIKE "%auto%" OR synopsis LIKE "%nordestinos%";
```

-  c ) Procure por todos os filmes que já tenham lançado
```sql
SELECT * FROM movies WHERE release_date < CURDATE();
```

- d ) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.
```sql
SELECT * FROM movies WHERE release_date < CURDATE() AND (title LIKE "%doce%" OR synopsis LIKE "%senhora%");
```
