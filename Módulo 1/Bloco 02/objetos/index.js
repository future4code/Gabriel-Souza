
// --------------------------------------  Exercícios de interpretação de código  -------------------------------------- 

//  1 -

/* 

     a )  
        No primeiro console ira ser impresso : "Matheus Nachtergaele" .
        No segundo console ira ser impresso : "Virginia Cavendish".
        No terçeiro console ira ser impresso : "Globo" e o horario : 14h.

*/

//  2 -

/*
   
    a )
       No primeiro console ira ser impresso : "Juca", 3, "SRD".
       No segundo console ira ser impresso : "Juba", 3, "SRD".
       No terçeiro console ira ser impresso : "Jubo", 3, "SRD".

    b )
          O que faz a sintaxe dos três pontos antes do nome de um objeto?
          Copia todas as informações de outro objeto.

*/

//  3 -

/*

    a )
       No primeiro console ira ser impresso : "false".
       No segundo console ira ser impresso : "underfined".

    b )
       Sim. Ele fez uma função que recebe parâmetros (pessoa, "backender") e retorna os valores para poderem ser acessados fora da função.
       Depois ele criar um objeto ( pessoa ) e usa os parâmetros da função como argumentos, assim dando um trabalho para essa função que é de
       acessar o objeto.
       É ( underfined ) por que a função não achou  á propriedade no objeto  com o seu valor.

*/


//--------------------------------------  Exercícios de escrita de código  --------------------------------------

// 1 -

//      Resolva os passos a seguir: 

//a )  Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoaGabriel = {

    nome : "Gabriel Silva",
    arrayApelidos : ["China", "Japônes", "Gabgol"]

};

const funcaoPessoa = (objeto) => {
return objeto
};

const nome = funcaoPessoa(pessoaGabriel.nome);
const array = funcaoPessoa(pessoaGabriel.arrayApelidos);
const frase = `Eu sou ${nome}, mas pode me chamar de: ${array[0]}, ${array[1]} ou ${array[2]}`;

//console.log(frase);

// b )  Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoaGabrielAtualizado = {

    ...pessoaGabriel,
    arrayApelidos2 :["Gab", "Bigode", "Korea"]

}

const funcaoPessoa2 = (objeto1) => {
    return objeto1
    };

    const nome2 = funcaoPessoa2(pessoaGabrielAtualizado.nome);
    const array2 = funcaoPessoa2(pessoaGabrielAtualizado.arrayApelidos2);
    const frase2 = `Eu sou ${nome2}, mas pode me chamar de: ${array2[0]}, ${array2[1]} ou ${array2[2]}`;
    
    //console.log(frase2);

    
    //  2 -

    //  Resolva os passos a seguir: 

    // a )  Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

    // Objeto 1 :
    const objeto1 = {nome: "Gabriel Silva", idade: "23 anos", profissao: "programador" }
    //console.log(objeto1)

    //  Objeto 2 :
    const objeto2 = [
        {nome: "Gabriel Silva"},
        {idade: "23 anos"},
        {profissao: "programador"}
    ]
    //console.log(objeto2[0]);
    //console.log(objeto2[1]);
    //console.log(objeto2[2]);

    //  b )  Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
/*
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
*/

const funcaoObjeto1 = () => {

    const objeto333 = {
    nome: "Gabriel Silva",
    idade: 23,
    profissao: "programador"
    }
const nomeTamnho = objeto333.nome.length
const idadeObjeto = objeto333.idade
const profissaoTamanho = objeto333.profissao.length

console.log(objeto333)
  console.log(nomeTamnho);
  console.log(idadeObjeto);
  console.log(profissaoTamanho);

}
//funcaoObjeto1()

// forma : 2

const objetoTeste = {
    nome: "Gabriel Silva",
    idade: 23,
    profissao: "programador"
};

const funcaoTeste = (objetoTeste) => {
    return objetoTeste
};

const linhasNome = objetoTeste.nome.length
const idadeValor = objetoTeste.idade
const linhasProfissao = objetoTeste.profissao.length

const template = `${linhasNome}, ${idadeValor}, ${linhasProfissao}`;
//console.log(template);


//  3 -

// Resolva os passos a seguir: 

// a ) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
let arrayCarrinho = [ ];



//  b )  Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
const  fruta1 = {
    nome: "Manga",
    disponibilidade: true
};

const fruta2 = {
    nome: "Laranja",
    disponibilidade: true
};

const fruta3 = {
    nome: "Abacate",
    disponibilidade: true
};

// c )  Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
const funcaoListaDeFrutas = (arrayCarrinho) => {

arrayCarrinho =[fruta1, fruta2, fruta3]
console.log(arrayCarrinho)

};
//funcaoListaDeFrutas()
