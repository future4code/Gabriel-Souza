//* Exercicio 4

//* A ) a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários para responder as questões.


//* B ) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//* Resposta; Eu faria um objeto para cada pokemon tipo :
//* const pokemon1{
//*     name: "Charmander",
//*     types: "Fire",
//*     healthPoints: 28
//* };


//* C ) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
//* Resposta: eu acho que não. Por que não é obrigado a tipar as variaveis no typescript. E também não sei dizer deireito por
//* que não existe eu acho nem um compilador de javascript para typescript. Posso estar errado.  


//* D ) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//* Resposta: Eu acho que sim. Uma maneira que eu acho que resolva é : importando todos os arquivos typescript para
//* um arquivos index.ts e transpilar só mente ele. Eu acho que poderia estar  certo.

type pokemon = {
  name: string,
  types: string,
  healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}