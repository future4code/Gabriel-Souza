//* Exercicío Normal

//* 1
function checaTriangulo(a: number , b: number, c: number): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
//   console.log(checaTriangulo(1,2, 3))
//* ===========================================

//* 2
function imprimeTresCoresFavoritas(): void {
    const cor1: string = prompt("Insira sua primeira cor favorita")
    const cor2: string = prompt("Insira sua segunda cor favorita")
    const cor3: string = prompt("Insira sua terceira cor favorita")
    const cores = [cor1, cor2, cor3]
    console.log(cores)
 }
//  imprimeTresCoresFavoritas()
//* =============================================

//* 3
function checaAnoBissexto(ano: number): boolean {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
//  console.log(checaAnoBissexto(2000))

function comparaDoisNumeros(num1: number, num2: number):number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return diferenca
  }
//   console.log(comparaDoisNumeros(9, 10))
//* ===============================================

//* 4
function checaRenovacaoRG(): boolean {
    const anoAtual: number = Number(prompt("Digite o ano atual"))
    const anoNascimento: number = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao: number = Number(prompt("Digite o ano de emissão do documento"))
 
    const idade: number = anoAtual - anoNascimento
    const tempoCarteira: number = anoAtual - anoEmissao
 
    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
//  checaRenovacaoRG();
//* =========================================================================



//* Desafio

//* 1
const  numberValues = (a: number, b: number): void => {
    const value1 = a + b;
    const value2 = a - b;
    const value3 = a * b;
    const value4 = a - b ? b : a;
    console.log(`
    A soma destes valores são: ${value1},
    A subtração é: ${value2},
    A multiplicação é: ${value3},
    O maior deles é: ${value4}
    `);
};
// numberValues(10, 100);
//* ===============================================================


//* 2
const valueString = ( value: string ): void => {
    console.log( value.split("").reverse().join("") ); 
};
// valueString("pai")
//* =================================================================

//* 3

//* ==================================================================

//* 4
const  requirementsForLabenu = (): void => {
    const age: number = Number(prompt("Qual e a sua idade?"));
    const completeHighSchool: boolean = confirm("Você completou o ensino médio?");
    const hoursAvailableWeek: boolean = confirm("Você tem 40 horas livres na semana para o curso integral ou 20 horas para o curso noturno.?");
    const nightOrDay: string =  prompt("O seu curso será o “integral” ou “noturno”?");

    const valueBoolean1 = age >= 18;
    const valueBoolean2 = completeHighSchool === true;
    const valueBoolean3 = hoursAvailableWeek === true;
    const valueBoolean4 = nightOrDay.includes("integral") || nightOrDay.includes("noturno");

    if ( valueBoolean1 && valueBoolean2 === valueBoolean3 && valueBoolean4) {
        alert("Você pode fazer o curso da Labenu.😊")
    } else {
        alert("Você não pode fazer o curso da Labenu.😢");
    };
};
// requirementsForLabenu();
//* =======================================================================