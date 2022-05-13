//* EX : 1

//* a ) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//* Resposta : O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
//* Declarando : const accountA = new UserAccount(123, "Gabriel", 24)
//* Chamando : console.log(accoutA.getName()) // Gabriel

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
  public getName = (): string => this.name;
};

//* b ) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//* Resposta : 1 vez.
const userGabriel = new UserAccount("123", "Gabriel", 24);
console.log(userGabriel.getName());

//* c ) Como conseguimos ter acesso às propriedades privadas de uma classe?
//* Resposta : Através dos getters e setters para alterar-las.
//* Exemplo: public getName = (): string => this.name

//* ===============================================

///* EX : 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor (  description: string,  value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  };
};

//* ================================================

//* EX : 3

class Bank {
  private accounts: UserAccount[];

  constructor ( accounts: UserAccount[] ) {
    this.accounts = accounts;
  };

  public getAccounts = (): UserAccount[] => this.accounts;
  public setAccounts = (user: UserAccount) => this.accounts.push(user);
};

const insertUsers = new Bank([]);
insertUsers.setAccounts(userGabriel);

console.log(insertUsers.getAccounts());

//* ================================================