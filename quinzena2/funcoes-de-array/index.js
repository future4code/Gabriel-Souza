// ------------------------------ Exercícios de interpretação de código -----------------------------


//  1 -
//     a ) Vai ser impresso no console o array de objetos completo com os indices de cada um.


//  2 -
//    a ) Vai ser impresso no console os nomes dentro do array de objetos.


// 3 -
//    a ) Vai ser impresso no console so o 1° e o 2° indice do array de objetos. Por quê a comparação do filter vai ser (false).



// ------------------------------ Exercícios de escrita de código ------------------------------


//  1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];

 //  a ) Crie um novo array que contenha apenas o nome dos doguinhos
const arrayNomeDosDogs = pets.map((nomePets) => {
    return `Nome dos pets: ${nomePets.nome}`
});
// console.log(arrayNomeDosDogs);


// b ) Crie um novo array apenas com os cachorros salsicha
const petSalsicha = pets.filter((nomeSalsicha) => {
    return nomeSalsicha.raca === "Salsicha"
});
// console.log(petSalsicha);


//  c ) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const poodle13 = pets.filter((nome11) => {
    let frase = `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome11.nome}`
    if (nome11.nome === "Madame") {
        //console.log(frase)
    } else if (nome11.nome === "Fluffy") {
        //console.log(frase)
    };
});
// poodle13


//  2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ];

 //  a ) Crie um novo array que contenha apenas o nome de cada item

const nomesDosItens = produtos.map((itens) => {
    return itens.nome
});
//console.log(nomesDosItens)

//  b ) b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const desconto = produtos.map((desconto1) => {
   return desconto1.nome + "  " + (desconto1.preco * 0.05 );

});
// console.log(desconto)


//  c ) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((bebidas1) => {
    return bebidas1.categoria === "Bebidas"
})
// console.log(bebidas);


// d ) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const ypeNome = produtos.filter((nome) => {
    return nome.nome.includes("Ypê")
})
// console.log(ypeNome);

//  e ) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const ypeNome5 = produtos.map((nome5) => {
    if (nome5.nome.includes("Ypê")){
      return    "Compre  " + nome5.nome  + "  por   " + nome5.preco
    }
});
// console.log(ypeNome5[6]);
// console.log(ypeNome5[9]);


