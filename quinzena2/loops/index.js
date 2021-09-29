// -------------------------  Exercícios de interpretação de código  -------------------------


//  1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

//   Ele esta inclementando ( 1 número de uma vez ) na variavel valor é somando. Até chega no número ( 10 )..

// ----------------------------------------------------------------------------------------------------------------------------------------------

//  2 - 

//  a ) 19, 21, 23, 25, 27, 30.

//  b ) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se não, o que poderia ser usado para fazer isso?
//      Não é suficiente. O que pode ser usado nesse caso é : numero[ número do índice ].

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

//  Ele esta acrescentando um ( * ) a cada linha até chega no total de asteristicos digitado pelo úsuario.



// -------------------------  Exercícios de escrita de códigoo  -------------------------
 

//  1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

const bichos = () => {
let bichosDeEstimacao = [prompt("Quantos bichos de estimação você tem?")];

if(Number(bichosDeEstimacao) === 0) {
    console.log("Que pena! Você pode adotar um pet!");
};

for (let i = 0; i < bichosDeEstimacao.length; i++) {
    console.log(bichosDeEstimacao);
  };
}
//  console.log(bichos());


//  2 - onsidere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const funcaoArrayOriginal = () => {

    let arrayOriginal1 = [80,
        30,
        130,
        40,
        60,
        21,
        70,
        120,
        90,
        103,
        110,
        55];

return arrayOriginal1
};
let arrayOriginal1V = funcaoArrayOriginal()
 
const funcaoArrayDivision = (array2) => {
    array2 = [...arrayOriginal1V];
    for (let i = 0; i < array2.length; i++) {
        let array = array2[i] / 10
        console.log(array)
    };
};
// funcaoArrayDivision(arrayOriginal1V);

const arrayPares = (array3) => {
 array3 = [...arrayOriginal1V];

for(let i = 0; i < array3.length; i++) {
 if (i % 2 === 0){
     console.log(`Números pares: ${array3[i]}`);
     };
  };
};
// arrayPares(arrayOriginal1V);

const arrayString = (array4) => {
array4 = [
    {nome : "O elemento do índex 0", é : 80},
    {nome : "O elemento do índex 1", é : 30},
    {nome : "O elemento do índex 2", é : 130},
    {nome : "O elemento do índex 3", é : 40},
    {nome : "O elemento do índex 4", é : 60},
    {nome : "O elemento do índex 5", é : 21},
    {nome : "O elemento do índex 6", é : 70},
    {nome : "O elemento do índex 7", é : 120},
    {nome : "O elemento do índex 8", é : 90},
    {nome : "O elemento do índex 9", é : 103},
    {nome : "O elemento do índex 10", é : 110},
    {nome : "O elemento do índex 11", é : 55}
];
for (let i = 0; i < array4.length; i++) {
console.log(array4[i]);
    };
};
// arrayString(arrayOriginal1V);

funcaoArrayMaiorMenorN = (array5) => {

    array5 = [...arrayOriginal1V];

    for (let i = 0; i < array5.length; i++) {

        if (array5[2] === 130 && array5[5] === 21){

            console.log(`O maior número é ${array5[2]} é o menor é ${array5[5]}`);
        };
    };
};
// funcaoArrayMaiorMenorN(arrayOriginal1V);

