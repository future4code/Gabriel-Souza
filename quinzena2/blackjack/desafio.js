/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * */


// Parte das variaveis que vou usar
    const carta1 = comprarCarta();
    const carta12 = comprarCarta();
    const carta13 = comprarCarta();
    
    const carta2 = comprarCarta();
    const carta22 = comprarCarta();
    const carta23 = comprarCarta();

    
    //  Função 1 igualdade reinicie
    const cartaAiguais = () => {

      const igualdade = carta1.texto === "A♦️" && carta2.texto === "A♦️"
      
      if (igualdade === true) {
         return carta1 && carta2

       } ;

    };
   // cartaAiguais();


// Funcão de usuario e computador e também da carta oculta.
    const carta2OcultaUsuario = () => {
       
    if (confirm("Comprar carta") === true) {
       console.log("Sua primeira carta é:", carta1.texto);

       if (confirm("Comprar mais uma carta?") === true);
       console.log("Sua segunda carta é:", carta12.texto);

       };

       // Função dentro da outra. Ela trabalha com os números do computador 
       const cpuCarta = () => {

         if (carta2.texto) {
            console.log("Carta do Computador:", carta2.texto);

            if (carta22.texo) {
               carta22.texto

            };

         };

       };
       
       // Mais uma função dentro de outra. Ela trabalha com á construção da frase
       const frase = () =>{

         const frase1 = `Suas cartas são ${carta1.texto} é ${carta12.texto}. A carta revelada do computador é ${carta22.texto}.`
         console.log(frase1);

         if(confirm("Deseja comprar mais uma carta?") === true) {

            const ultimaCarta = comprarCarta();
            console.log(`Sua ultima carta foi ${ultimaCarta.texto}`);

          };

       };
       // Chamada da funções dentro da função ( carta2OcultaUsuario )
       //cpuCarta();
       //frase();
    
    };
   // carta2OcultaUsuario();




// Função de soma
const usuarioSomaDasCartas = () => {

   let soma1 = carta1.valor + carta12.valor + carta13.valor
   let soma2 = carta2.valor + carta22.valor

   if (confirm("Quer iniciar uma nova rodada?") === true) {

     const menssagemDeInicio = `Suas cartas são ${carta1.texto} ${carta12.texto}` 
     console.log(menssagemDeInicio);

         if (confirm("Deseja comprar mais uma carta? ") === true){
            const menssagemDeInicio2 = `Suas cartas são ${carta1.texto} ${carta12.texto} ${carta13.texto}. A carta revelada do computador é ${carta2.texto}` 
            console.log(menssagemDeInicio2);
            
            }

        if ( soma1 > 21) {

      alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto} é ${carta22.texto} a potuação do computador é: ${soma2}. Você perdeu !`)

         } else {

      alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto} é ${carta22.texto} a potuação do computador é: ${soma2}. Você ganhou !`)

         };

      } else {

         console.log("Jogo encerrado!")
      };
        
   };
//usuarioSomaDasCartas();



// 11 - Quando o jogador parar de comprar cartas (Ter clicado cancel ao receber a pergunta "Deseja comprar mais uma carta?") e tiver a pontuação menor ou igual a 21, inicia-se a rodada do computador. Ele deverá comprar cartas até que sua pontuação seja igual ou superior a do usuário. Veja abaixo, uma sequência possível de mensagens mostradas ao usuário.

// fFunçâo copiada com algumas alterações para atender ao criterio desse exercicio número 11.
const usuarioSomaDasCartasCopy = () => {

   let soma1 = carta1.valor + carta12.valor + carta13.valor
   let soma2 = carta2.valor + carta22.valor + carta23.valor

   if (confirm("Quer iniciar uma nova rodada?") === true) {

     const menssagemDeInicio = `Suas cartas são ${carta1.texto} ${carta12.texto}` 
     console.log(menssagemDeInicio);

         if (confirm("Deseja comprar mais uma carta? ") === true){
            const menssagemDeInicio2 = `Suas cartas são ${carta1.texto} ${carta12.texto} ${carta13.texto}. A carta revelada do computador é ${carta2.texto}` 
            console.log(menssagemDeInicio2);
            
            }

        if ( soma1 > 21) {

      alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto},  ${carta22.texto} é ${carta23.texto} sua potuação do computador é: ${soma2}. Você perdeu !`)

         } else {

      alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto},  ${carta22.texto} é ${carta23.texto} a potuação do computador é: ${soma2}. Você ganhou !`)

         };

      } else {

         console.log("Jogo encerrado!")
      };
        
   };
// usuarioSomaDasCartasCopy();

// usuarioSomaDasCart12 - Se a pontuação do usuário for maior que 21, ele perde o jogo. Se a pontuação do computador for maior que 21 (e a do usuário não for), o usuário ganha o jogo.  Se as pontuações do usuário e do computador forem iguais, o jogo termina em empate.
 // Pequenas alterações para atender aos criterios deste exercicio.

 const usuarioSomaDasCartasCopy2 = () => {

   let soma1 = carta1.valor + carta12.valor + carta13.valor
   let soma2 = carta2.valor + carta22.valor + carta23.valor

   if (confirm("Quer iniciar uma nova rodada?") === true) {

     const menssagemDeInicio = `Suas cartas são ${carta1.texto} ${carta12.texto}` 
     console.log(menssagemDeInicio);

         if (confirm("Deseja comprar mais uma carta? ") === true){
            const menssagemDeInicio2 = `Suas cartas são ${carta1.texto} ${carta12.texto} ${carta13.texto}. A carta revelada do computador é ${carta2.texto}` 
            console.log(menssagemDeInicio2);
            
            }

        if ( soma1 > 21) {

      alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto},  ${carta22.texto} é ${carta23.texto} sua potuação do computador é: ${soma2}. Você perdeu !`)

         }
         
         if (soma1 < soma2) {

      alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto},  ${carta22.texto} é ${carta23.texto} a potuação do computador é: ${soma2}. Você ganhou !`)

         } else if (soma1 === soma2) {

            alert (`Suas cartas são: ${carta1.texto}, ${carta12.texto} é ${carta12.texto} sua pontuação é: ${soma1}. As cartas do computador são: ${carta2.texto},  ${carta22.texto} é ${carta23.texto} a potuação do computador é: ${soma2}. Jogo empatado!`)
            
           }

      } else {

         console.log("jogo encerrado!");

      };
        
   };
 // usuarioSomaDasCartasCopy2();


 //   O CODIGO ESTA MEIO BIZARRO MAIS ESTA FUNCIONANDO. 



    