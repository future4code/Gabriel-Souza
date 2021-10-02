/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    //  Montando o jogo 

   // Menssagem de boas vindas
   // const  nomeDoJogador = prompt("Qual è o seu nome?");
    //console.log("Boas vindas ao jogo de Blackjack!", nomeDoJogador);

// Pendindo comfirmação
 // const telaDeIniciarJogo = confirm("Quer iniciar uma nova rodada?");

// Função de processo do jogo
   const iniciarJogo = (iniciarJogo) => {

      // Parte de chamar cartas
      const cartaUsuario = comprarCarta() ;
      const cartaCpu = comprarCarta();
      
      // Parte de soma
      let soma1 = cartaUsuario.valor + cartaCpu.valor
      let soma2 = cartaCpu.valor + cartaCpu.valor

      // Parte de condição de entrada
      if (iniciarJogo == true) {

          let usuarioCarta = `Usuário - carta: ${cartaUsuario.texto} - pontuação: ${soma1}`
         console.log(usuarioCarta);

         let cpu = `Computador - carta: ${cartaCpu.texto}  - pontuação: ${soma2}`
         console.log(cpu);

         // Ganhador do jogo
         if (soma1 > soma2) {
            console.log("O usuário ganhou!");
         } else if (soma1 < soma2) {
            console.log("O computador ganhou!");
         }else{
            console.log("Empate!");
             };

          } else {
             console.log("O jogo acabou");
          };
         
      };
      // iniciarJogo(telaDeIniciarJogo);



     
   
   