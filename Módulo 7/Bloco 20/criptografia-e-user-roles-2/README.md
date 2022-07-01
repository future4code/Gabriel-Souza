# Introdução Autenticação

<br />

### EX : 1

#### Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 

`O uso dele é simples, veja abaixo:`
``` ts
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
```

#### a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
` Resposta: ` `Sim concordo. Por que com ( strings ) dar para você colocar números, letras é caracteres especiais. Deixando assim o ( id ) do usuário único.`

<br />

#### b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
```ts
 import { v4 } from "uuid"

 const generateId = (): string => v4();
```

<br />

### EX : 2

#### Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

`Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:`

```ts
 import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

#### a) O que a linha ` as string ` faz? Por que precisamos usar ela ali?
`Resposta:` `Serve para especificar  e garantir que aquela variável vai ser daquele tipo escolhido. Que nesse caso e uma ( string ).`

<br />

#### b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função
```ts
import * as jwt from "jsonwebtoken";

interface AuthenticationData {
   id: string
};

const expiresIn = "1min";
const generateToken = (input: AuthenticationData): string =>{
   const token = jwt.sign(
   {
      id: input.id,
   },
      process.env.JWT_KEY as string,
   {
      expiresIn
   }
   );
   return token;
};
```

<br />

### EX : 6

#### a) O que a linha `as any` faz? Por que precisamos usá-la ali?
`Resposta:` `Ela dis que o tipo daquela variável vai ser qualquer coisa.`

<br />

#### b) Crie uma função que realize a mesma funcionalidade da função acima
```ts
import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

<br />

# EX: Criptografia

### EX : 1

<br />

#### a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
`Resposta:` `O salt a ser usado para fazer o hash da senha. se especificado como um número, um salt será gerado com o número especificado de rodadas. Round e o número de nivel de segurança que essa hash vai ter para fornecer uma hash segura.`

#### b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.   
```ts
async hashEncrypt ( { password }: IBcryptAdapterData ) {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    return result;
  };
```

#### Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs
```ts
 async compareHash ( { password, hash  }: IBcryptAdapterData ) {
    return bcrypt.compare(password, hash!);
  };
```

<br />

### EX: 2

#### a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
`Resposta:` `O cadastro. Para poder gerar uma hash existente de uma senha e pode-lá compara-la depois ao fazer o login.`