// --------------------------------- Exercicio de Interpretação ---------------------------------


//  1 - 

//  a )
/*
       O código faz no primeiro if si o resto do numero digitado pelo usuario e divisivel por
       2 e é igual a 0. Si for ele passou no teste si não o else entra com á menssagem dizendo
       "Não passou no teste".

*/ 

//  b )
//     Números divisiveis por 2 tem que ser igula á 0. Para ele passar no teste.

//  c )
//     Números que não sao divisiveis por 2 e não são igual á 0 no seu resultado.


//  2 -

//  a )
/*
       O codigo serve para dizer a o usuario o nome e em seguida o preço da fruta
       e os que não estão nessa lista são 5 reais .
*/

//  b )
//     O preço da fruta Maçã é R$ 2.25.

//  c )
//     Ele iria dizer que o valor da pêra é 5 reais.


//  3 -

//  a )
//     Esta verificando si o primeiro número e maior que 0.

//  b )
/*
       Esse número passou no teste.
       Si fosse -10 iria aparecer nada.
*/

//  c )
//     Sim. Por que a variavel esta declarada dentro do escopo e esta sendo chamada do lado de fora do escopo.



// --------------------------------- Exercicio de Escrita de Código ---------------------------------


//  1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// const suaIdade = Number(prompt("Qual é a sua idade ?"));

const funcaoDirigir = (idade) => {

if (idade >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.")
    };
};
// funcaoDirigir(suaIdade);


//  2 - Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// Fazendo com ( Swith Case )

// const TurnoDia = prompt("Digite umas das opções: M para (matutino) ou V para (Vespertino) ou N para (Noturno)")
// let turno

const funcaoTurnoDia = (turnos) => {

    switch (turnos.toUpperCase()) {
        case "M":
            turno = "Bom dia!"
            console.log(turno);
        break

        case "V":
            turno = "Boa Tarde!"
            console.log(turno);
        break

        case "N":
            turno = "Boa noite!"
            console.log(turno);
        break

        default:
            console.log("Digite umas das opções 'M', 'V' ou 'N'.");
        break

    };

};
// funcaoTurnoDia(TurnoDia);

// Fazendo com ( if / else )

// const turnoDia2 = prompt("Digite umas das opções: M para (matutino) ou V para (Vespertino) ou N para (Noturno)")
// const turnoDia2M =turnoDia2.toLocaleUpperCase();

const funcaoTurnoIfElse = (turnos1) => {

if (turnos1 === "M") {
    console.log("Bom dia!");
} else if (turnos1 === "V") {
    console.log("Boa tarde!");
} else if (turnos1 === "N") {
    console.log("Boa noite!");
} else {
    console.log("Digite umas das opções 'M', 'V' ou 'N'.")
   };

};
// funcaoTurnoIfElse(turnoDia2M);


// 3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const filmeGenero = prompt("Qual é o tipo de gênero que vocês irão assistir?"); 
// const precoDoIngresso = Number(prompt("Qual é o preço do ingresso?")) ;

const funcaoCinema = (genero,  ingresso) => {

    switch (genero === ingresso) {
        case "Fantasia":
        case (ingresso > 15) :
            console.log("Bom filme!")
         break

        default:
            console.log("Escolha outro filme :(");
        break
    };

};
// funcaoCinema(filmeGenero, precoDoIngresso);