//* Exercicío 2

//* A )  Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros ?
//* Output : { maior: 10, menor: 1, media: 5.5 }; a saida botei "any" e as entradas um array de "numbers".


//* B ) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas  ?
//* Não entendir direito a pergunta. Mas só vi variaveis do tipo "Number".


//* C ) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
//* Não entendi o que esta pergunta que eu faça. Pelo o que eu entendi e converter esse objeto em um "type". foi o que eu fiz. 
type amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number[]) => {
        maior: number, 
        menor: number, 
        media: number
    };
};
//* ==========================================


function obterEstatisticas(numeros: number[]): any {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    );

    let soma = 0;

    for (let num of numeros) {
        soma += num;
    };

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas;
};
// console.log(obterEstatisticas([5, 2, 1, 3, 4, 7, 10, 8, 9, 6]));
//* Output : { maior: 10, menor: 1, media: 5.5 };
