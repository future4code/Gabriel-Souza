// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
};


// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
};

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  
  let altura = Number(prompt("Digite um número para altura"));
  let largura = Number(prompt("Digite um número para largura"));

  let resultado = largura * altura

  console.log(resultado);
};

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

const anoAtual = Number(prompt("Digite o ano atual"));
const anoDeNascimento = Number(prompt("Digite o seu ano de nascimento"));
const resultadoSub = anoAtual - anoDeNascimento ;

console.log(resultadoSub);
};

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  let peso = Number(prompt("Digite o seu peso em Kg"));
  let altura = Number(prompt("Digite á sua  altura metros"));
  const calculoImc = peso / (altura * altura);

console.log(calculoImc);
};

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let email = prompt("Digite seu e-mail");
const emailSemSpace = email.trim();

const fraseCompleta = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${emailSemSpace}.`;

console.log(fraseCompleta);
};

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  let coresFavoritas1 = prompt("Qual é a sua 1° cor favorita?");
  let coresFavoritas2 = prompt("Qual é a sua 2° cor favorita?");
  let coresFavoritas3 = prompt("Qual é a sua 3° cor favorita?");
  
const arrayCores = [
  coresFavoritas1,
  coresFavoritas2,
  coresFavoritas3
];
 console.log(arrayCores);
};

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let seuNome = prompt("Digite seu nome");
  const nomeMaiuscula = seuNome.toUpperCase();

  console.log(nomeMaiuscula);
};

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui

  const valorDoEspetaculo = Number(prompt("Digite o valor do espetáculo de teatro"));
  const valorDoIngresso = Number(prompt("Digite o valor do ingresso"));

  const calculoDoCusto = valorDoEspetaculo / valorDoIngresso

  console.log(calculoDoCusto);
};

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let nome1 = prompt("Digite um nome");
  let nome2 = prompt("Digite mais um nome");
  const nomeTa = nome1.length
  const nomeTa2 = nome2.length
  const nomeTaTa = nomeTa === nomeTa2

  console.log(nomeTaTa);
};

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let nome1 = prompt("Digite um nome");
  let nome2 = prompt("Digite mais um nome");
  const nome3 = nome1.toLowerCase();
  const nome4 = nome2.toLowerCase();
  const nome5 = nome3 === nome4;

  console.log(nome5);
};

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

let anoAtual = Number(prompt("Em que ano nois estamos?"));
let anoDeNascimento = Number(prompt("Qual é o seu ano de nascimneto?"));
let anoDaCarteira = Number(prompt("Qual foi o ano que sua cateira de identidade foi emitida?"));

let anoDeVida = anoAtual - anoDeNascimento;
let anoRg = anoAtual - anoDaCarteira;

console.log((anoDeVida <= 20 && anoRg >= 5) || ((anoDeVida > 20 && anoDeVida < 50) && anoRg >= 10) || (anoDeVida >= 50 && anoRg >= 15));
};

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  let ano = Number(prompt("Digite algúm ano?"));
  const anoBiss = ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0
  console.log(anoBiss);
};

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  const idade = prompt("Você tem mais de 18 anos?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");
  const horarioDisponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");
  
  const idadeDeMaior = idade.includes("sim");
  const ensino = ensinoMedio.includes("sim");
  const ho = horarioDisponivel.includes("sim");

  console.log(idadeDeMaior && ensino && ho);
};