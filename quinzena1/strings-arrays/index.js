// EXERCICIO STRINGS E ARRAYS



/*

    1- Indique todas as mensagens impressas no console

    a.O console ira imprimir " a " e depois underfined.

    b. O console ira imprimir " b " e depois ( null ).
    
    c. O console ira imprimir o tamanho do array por que ele está com
    á propriédade ( length ) .

    d. O console ira imprimir o primeiro item da lista do array que nesse
    caso é ( 3 ).

    e. Ele ira pegar um indice a frente do ( 0 ) e ira trocar por ( 19 ) .

    f. Ele ira somar o primeiro indice do array com 6 que nesse caso vai 
    ( 9 ).

*/



/*

    2- Leia o código abaixo com atenção:

    Si ele digita essa string no prompt "Subi num ônibus em Marrocos"
    ira ser imprimido no console dessa forma:

   (  SUBI NUM ÔNIBUS EM MIRROCOS )

   e depois o tamanho dessa string.

*/



// 3-  Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

/*

    let nome = prompt("Digite seu nome");
    let email = prompt("Seu email de usuário");
    const emailSemEspaco = email.trim();

    const fraseCompleta = `O e-mail ${emailSemEspaco} foi cadastrado com sucesso. Seja bem vindo(a), ${nome}`

   console.log(fraseCompleta);

*/



// 4-  Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

/*

  const comidasPreferidas = [

    "cuzcuz",
    "lasanha",
    "peixes",
    "Arroz",
    "feijão"

  ];

  console.log(comidasPreferidas);

  console.log(`Essas são as minhas comidas preferidas: \n  ${comidasPreferidas[0]} \n ${comidasPreferidas[1]} \n ${comidasPreferidas[2]} \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}`);

  let umaComidaPref = prompt("Uma comida preferida");
  comidasPreferidas[1] = umaComidaPref ;

  console.log(comidasPreferidas);

*/



// 5-  Faça um programa.

/*

  let listaDeTarefas = []

  let suasTarefas1 = prompt("Digite a sua 1° tarefa do dia");
  let suasTarefas2 = prompt("Digite a sua 2° tarefa do dia");
  let suasTarefas3 = prompt("Digite a sua 3° tarefa do dia");

  listaDeTarefas = [

  suasTarefas1,
  suasTarefas2,
  suasTarefas3

  ];
  console.log(listaDeTarefas);

  let numeroIndices = Number(prompt("Digite um número de uma posição que voçê já realizou") -1);

  listaDeTarefas.splice(numeroIndices, 1);

  console.log(listaDeTarefas);

*/


//DESAFIO

//2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.

/*

  const arrayfrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

  const indiceAbacaxi = arrayfrutas[2];

  console.log("Tamanho do array é", arrayfrutas.length, "nesse array encontra-se o indice", indiceAbacaxi );

*/

//Não fiz a questão número 1 do desafio por não intender direito ela. Mais acho que foi um branco na minha cabeça vou tentar fazer ela depois.