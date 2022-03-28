//* Exercício 1

//* A ) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//! const minhaString: string = 12345;
//* O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322);


//* B ) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
const meuNumero: number | string = "Hellow World";
//* Para isso é usado o "union types"


//* C ) c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
type pessoa  = {
    name: string,
    eight: number,
    favouriteColour: string
};

enum Colors {
    VERMELHO = "Vermelho",
    AZUL = "Azul",
    ROXO = "Roxo",
    VERDE = "verde",
    AMARELO = "Amarelo"
}

const personOne: pessoa = {
    name: "Gabriel Silva",
    eight: 24,
    favouriteColour: Colors.VERMELHO
};

const personTwo: pessoa = {
    name: "Lany Santos",
    eight: 21,
    favouriteColour: Colors.AMARELO
};

const personThree: pessoa = {
    name: "Nathan Silva",
    eight: 27,
    favouriteColour: Colors.AZUL
};

