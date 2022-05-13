//* =============================== HERANÇA ===============================

//* EX : 1 - Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário.
import { userGabriel } from "./classes/Users/Users";
// console.log(userGabriel);
// console.log( userGabriel.getId() ,userGabriel.getName(), userGabriel.getEmail());

//* a ) Seria possível imprimir a senha (password) atrelada a essa instância?
//* Resposta : Sim chamando só mente a classe com essa estanâcia. Mais para tentar
//* Acessar ela diretamente chamando userGabriel.password não funciona por que ela e privada.
//! console.log(userGabriel.password);

//* b )  Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//* Resposta : Só aparece uma vez ( 1 ).
// console.log(userGabriel);

// * ============================================================================================

//* EX : 2
import { userGabrielCustomer } from "./classes/Customer/UsersCustomers";
// console.log(userGabrielCustomer);;

//* a ) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
//* Resposta : Só aparece uma vez ( 1 ).

//* b ) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
//* Resposta : Só aparece uma vez ( 1 ).

//* ===============================================================================================================


//* EX : 3 - Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

//*  a ) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
//* Resposta : Só mente no console.log(). Mas ainda não da para chamar ela direto por que ela continua sendo
//* uma propriedade publica. 
// console.log(userGabrielCustomer.password)

// * ================================================================================================================

//* EX : 4 - Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método
// console.log(userGabrielCustomer.introduceYourself());

//* ========================================================================================================================================

//* EX : 5 - Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.
// console.log(userGabrielCustomer.introduceYourself());

//* =========================================================================================================================================


//* =============================== POLIMORFISMO ===============================

//* EX : 1
import { ClientGabriel } from "./classes/Inergy-System/Clients";

//* a ) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//* Resposta : Apareceu todas menos a função "calculateBill". Eu acho que isso aconteceu por que ele e uma função e tem que.
//* E ttem que ser chamanda diretamente tipo : ClientGabriel.calculateBill().
// console.log(ClientGabriel);

//* ===============================================================================

// * EX : 2
import { Place } from "./classes/Place/Place";

//* a ) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
//* Resposta : O Erro gerado foi : Não é possível criar uma instância de uma classe abstrata.
// const testPlace = new Place(...);

//* b ) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
//* Resposta : Segundo o que eu pesquisei isso não é possivel. Mais

//* ================================================================================================


//* EX : 3

//* 1 ) O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)
//* Resposta : Não sei. Não foi falado isso na aula de classes.

//* 2 ) Por que a Place não é uma interface?
//* Resposta : Por que interfaces se para fazer tipagens de algo. E abstract não. Ele só mente abstrai algo eu acho.

//* 3 ) Por que a classe Place é uma Classe Abstrata?
//* Resposta : Por que ela só vai servir para abstrair e armazenar. Eu acho.

