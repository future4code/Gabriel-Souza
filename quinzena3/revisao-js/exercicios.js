// EXERCÍCIO 01
function inverteArray(array) {

  let arrayInvertido = []

  for ( let i = array.length - 1 ; i  >= 0 ; i--) {

   arrayInvertido.push(array[i])
  
  };
  return arrayInvertido
};


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

let array1Pa = (numeros) => {
  if (numeros % 2 == 0) 
  return numeros
    };

let arrayPa = array.filter(array1Pa);

let paVezes = arrayPa.map((aPa) =>{
return aPa * aPa
});

return paVezes

};



// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let numerosPares = array.filter((arrayPa) => {

    return arrayPa % 2 === 0

  });
  return numerosPares

};


// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let newArray = (array5) => {
   return Math.max.apply(Math, array5)
  };

  return newArray (array);
  

};-


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const arrayQuantidade = array.length

  return arrayQuantidade
  
};

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  let arrayLogico = [];


  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2 ;
  const booleano4 = !booleano3 ;

  const a = booleano1 && booleano2 && !booleano4;

const b = (booleano1 && booleano2) || !booleano3;

const c = (booleano2 || booleano3) && (booleano4 || booleano1);

const d = !(booleano2 && booleano3) || !(booleano1 && booleano3) ;

const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3);

 arrayLogico.push(a, b, c, d, e);

 return arrayLogico;

};

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

 let arrayPar = [];

 for ( let i = 0;  arrayPar.length < n ; i++) {

  if (i % 2 === 0){
    arrayPar.push(i);

    };

 };

 return arrayPar;
    
};


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  const funcaoDescobreTriangulo = (a1, b2, c3) => {

    if (a1 === b2 && a1 === c3){
      return "Equilátero"
    } else if (a1 === b2){
      return "Isósceles"
    } else {
      return "Escaleno"
    }
  };
  
  return funcaoDescobreTriangulo(a, b, c);
   
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
};

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {


 let maiorN 
 let menorN 

 if (num1 > num2) {
   maiorN = num1
   menorN = num2

 } else {
   menorN = num1
   maiorN = num2
 }

 let eDivisivel = maiorN % menorN === 0;

 let eDiferente = maiorN - menorN

const objeto = {
  maiorNumero: maiorN,
  maiorDivisivelPorMenor: eDivisivel,
   diferenca: eDiferente
  
};

return objeto;


  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  
 let newArray = [];

 let segundoMaior = array.sort((a, b) => {

  return a - b
 })[1];

 let segundoMenor = array.sort((a, b) => {

  return b - a
 })[1];

 newArray.push(segundoMenor, segundoMaior);

 return  newArray;

};


// EXERCÍCIO 11
function ordenaArray(array) {

  let arrayOrdenado = array.sort((a, b) =>{
   return a - b
  });
  return arrayOrdenado

};

// EXERCÍCIO 12
function filmeFavorito() {

  const objetoFilme = {

    nome:"O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

  };

  return objetoFilme;

};

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELEN
  
  const frasePegandoObjetoFilme = filmeFavorito()

    const funcaoImprimeFrase = (filme) =>{

    const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return frase;

    };

  const filmefrase = funcaoImprimeFrase(frasePegandoObjetoFilme);
  return filmefrase

};

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  const objetoRetangulo = {

    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: (lado1 * lado2)

  };

  return objetoRetangulo;

};

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  const objetoPessoaAnonima = {
   ...pessoa,
   nome: "ANÔNIMO"
  };

  return objetoPessoaAnonima;

};

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

    const maioressDe18 = arrayDePessoas.filter((idade) =>{
      return idade.idade >= 18
     });
  
 return maioressDe18;
 
};

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

  const menorDe18 =  arrayDePessoas.filter((idade2) =>{
    return idade2.idade < 18
  });

  return menorDe18;

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  let a = [];

  for(let i = 0; i < array.length; i++) {
  a.push(array[i] * 2);
  };

  return a

};

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

  let a = [];

  for(let i = 0; i < array.length; i++) {
    
  a.push(array[i] * 2)
  
  };

const aString = a.map(array1)

function array1(elemento) {

  return elemento.toString()
};

return aString

};

// EXERCÍCIO 17C
function verificaParidade(array) {

 let a = [...array];

 let aFrase = a.map(array5)
 function array5(element) {

  let y = element + 0;

  if (y % 2 === 0) {
    return y + " é par"

  }else if (y % 2 !== 0) {
    return y + " é ímpar"

    };

 };
 return aFrase

};

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

  const pessoasComPermissoes = pessoas.filter((pessoasP) =>{

   let a = pessoasP.altura >= 1.5
   let b = pessoasP.idade > 14
   let c = pessoasP.idade < 60

   return a && b && c

  });

  return pessoasComPermissoes;

};

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  
const pessoasNaoAutorizadas = pessoas.filter((pessoasN) =>{

   let a = pessoasN.altura < 1.5
   let b = pessoasN.idade <= 14
   let c = pessoasN.idade > 60

   return a || b || c

  });

  return pessoasNaoAutorizadas;

};

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

const arrayOrdenado  = consultasNome.sort((a, b) => {

  return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0 );
});

return arrayOrdenado;

};

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

  // Fiz esse codigo na mão copiando pra enteder a lógica. Mais na verdade não intendi foi quase nada o código esta bem confuso pra mim.

  for(let i = 0; i < consultasData.length; i++) {
    for(let j = 0; j < consultasData.length - i - 1; j++) {

      const arrayData1 = consultasData[j].dataDaConsulta.split('/');
      const dia1 = Number(arrayData1[0]);
      const mes1 = Number(arrayData1[1]);
      const ano1 = Number(arrayData1[2]);

      const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/');
      const dia2 = Number(arrayData2[0]);
      const mes2 = Number(arrayData2[1]);
      const ano2 = Number(arrayData2[2]);

      const data1 = new Date(ano1, mes1 -1, dia1).getTime();
      const data2 = new Date(ano2, mes2-1, dia2).getTime();

      if(data1 > data2) {
        const temp = consultasData[j];
        consultasData[j] = consultasData[j + 1];
        consultasData[j + 1] = temp;
      };
    };
  };
  return consultasData;


/*

Já tentei de diversas forma mais e impossivel acessar o objeto dentro do array. (consultasDatas.Data)

  let consultas = [
    { nome: "João", dataDaConsulta:new Date  ("01/10/2021") },
    { nome: "Pedro", dataDaConsulta:new Date ("02/07/2021") },
    { nome: "Paula", dataDaConsulta: new Date ("03/11/2021") },
    { nome: "Márcia",  dataDaConsulta: new Date ("04/05/2021") }
  ]

  consultas.sort ((a,b) => {

    return a.dataDaConsulta.getTime() - b.dataDaConsulta.getTime()
  })

  return consultas
*/

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

// Codigo copiado da lista de resolução de exercicios. Por que não conseguir fazer só.

  contas.forEach((conta) => {

    let totalDeCompras = 0

    conta.compras.forEach((valor) => {

      totalDeCompras += valor

    });
    conta.saldoTotal -= totalDeCompras

  });

  return contas;

};
