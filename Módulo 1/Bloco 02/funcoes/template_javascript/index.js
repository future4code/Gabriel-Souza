//----------------Exercícios de interpretação de código-------------------


// 1-  
      /*

       a) Sera impresso no console o resultado dos numeros 2 * 5
       que vai dar ( 10 ). E depois o resultado dos numeros 10 * 5
       que vai dar ( 50 ).

       b) Nada porque o console.log() só serve para imprimir coisas na tela.
       Mais a função continuara funcionado da forma que esta.

       */

//2-
      /*

      a) Essa função ira pegar o valor da variável global que é uma "string" recebida
      pelo ( prompt ). Depois ele ira pegar essa "string" e transforma ela em letras minusculas
      é verificar si tem á palavra "cenoura" na palavra. Ou seja, a utilidade e pegar informação do usúario,
      transforma as letras em minusculas e verificar si tem uma determinada palavra dentro do texto.

      b) Saidas :
         
      1°- eu gosto de cenoura. true
      2° - cenoura é bom pra vista. true
      3° - cenouras crescem na terra. true
      
      */


 //----------------------Exercícios de escrita de código----------------------


  // 1 - 
           // OBS : vou declarar minhas funções assim por que achei mais facíl.       
           
        // a)

           const pegandoFraseSobreMin = () => {
            let sobreMim = prompt("Fale um pouco sobre você");
            return sobreMim
           };
              //console.log(pegandoFraseSobreMin());

    
         //b)

           //let nome = prompt("Digite seu nome");
           //let idade = Number(prompt("Qual é a sua idade?"));
           //let cidade = prompt("Qual cidade voçê mora?");
           //let profissao = prompt("Qual é a sua profissão?");

           const pegandoInformacoesUsuario = (nome, idade, cidade, profissao) => {
             const fraseCompletaUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`;
             return fraseCompletaUsuario
           };
           //console.log(pegandoInformacoesUsuario());


    // 2 - 

         // a ) 

               const funcaoDeSoma = (numero1, numero2) => {

               const soma = numero1 + numero2
               return soma
               };
               //console.log(funcaoDeSoma(10, 90))

            // b ) 
            
                  const funcaoBoole = (numero1 , numero2) => {

                    const numeroBoole = numero1 > numero2
                     return numeroBoole
                   
                  };
                  //console.log(funcaoBoole(10, 5));
                 //console.log(funcaoBoole(10, 100));

            // c ) 
                   
                   const numerosImpasBoole = (numero1) => {
                   const teste = numero1 === 5
                   const frase = `Impa, ${teste}`;
                   console.log(frase) 
                   };
                   //numerosImpasBoole(5)
                  
                   

            // d )

                 const nome = "gabriel silva souza";

                 const nomeMaiusculo = (nome) => {
                   
                  const nomeM = nome.toUpperCase();
                  console.log(nomeM);

                 };
                 //nomeMaiusculo(nome);


     // 3 -
            
             //let nuNuNusuario = Number(prompt("Isira um número"));
             //let nuNuNusuario1 = Number(prompt("Isira mais um número"));

             const numerosNuSomas = (nuNuNusuario, nuNuNusuario1) => {
             const NuSoma = nuNuNusuario + nuNuNusuario1
             console.log(NuSoma);
             }
              numerosNuSomas(nuNuNusuario, nuNuNusuario1);

              const numerosNuMulti = (nuNuNusuario, nuNuNusuario1) => {
              const NuMulti = nuNuNusuario * nuNuNusuario1
              console.log(NuMulti);
             }
                numerosNuMulti(nuNuNusuario, nuNuNusuario1);


              const numerosNuDivi = (nuNuNusuario, nuNuNusuario1) => {
              const NuDivi = nuNuNusuario / nuNuNusuario1
              console.log(NuDivi);
              }
                numerosNuDivi(nuNuNusuario, nuNuNusuario1);

               const numerosNuSub = (nuNuNusuario, nuNuNusuario1) => {
               const NuSub = nuNuNusuario - nuNuNusuario1
               console.log(NuSub);
               }
                 numerosNuSub(nuNuNusuario, nuNuNusuario1);









       
