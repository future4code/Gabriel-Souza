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


}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

 const triangulo = (a1, a2, a3) => {
   if (a1 / a1  === a1){
     return "Equilátero"
   } else if (a2 / a2  === a2){
     return "Isósceles"
   } else if (a3 / a3 !== a3) {
    return "Escaleno"
   }

   }
   return triangulo(a, b, c)
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

const maiorNumero = (n1, n2) => {

  if (n1 > n2) {
    return n1
  } else {
    return n2
  }

}
const maior = maiorNumero(num1, num2);
/////////////////////////////////////////////////////////////////////////////////////////
const maiorDivisivelPorMenor = (n3, n4) => {

  if (n3 > n4){
    return n3 % n4 === 0
  } else if (n4 > n3){
    return n4 % n3 === 0
  }

}
const maiorDivisivelPorMenor1 = maiorDivisivelPorMenor(num1, num2)
////////////////////////////////////////////////////////////////////////////////////////////////
const diferencaNumeros = (n5, n6) => {

  if (n5 >= n6 || n5 <= n6){
    return  n5, n6
  }

}
const diferencaNumeros1 = diferencaNumeros(num1, num2)
///////////////////////////////////////////////////////////////////////////////////////////////
const objeto = {maiorNumero: maior,
  maiorDivisivelPorMenor: maiorDivisivelPorMenor1,
  diferenca: diferencaNumeros1}

  return objeto

  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  
  const arrayMaior = (array1) => {
    return Math.max.apply(Math, array1);
    };
const arrayMaior1 = arrayMaior(array);

    const arrayMenor = (array2) => {
      return Math.min.apply(Math, array2);
      };
const arrayMenor1 = arrayMenor(array);

const newArray = [arrayMaior1, arrayMenor1]

return newArray

}


// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
