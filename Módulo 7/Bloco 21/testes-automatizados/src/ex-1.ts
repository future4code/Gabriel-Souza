interface User {
  name: string;
  balance: number;
};

//* Eu fiz com classe por que estava vontade.
export class Buy {
  constructor (  
    private user: User, 
    private value: number
  ){};

  public getBalanceUser = () => this.user.balance;
  public getValue = () => this.value;

  public authBuy () {
    if ( this.user.balance < this.value ) {
      throw new Error(
        //* Escolhir uma menssagem em vez de underfined!
        `Desculpe ${this.user.name}, você não possui saldo o suficiente para efetuar a compra!.`
        );
    };
    this.user.balance = this.user.balance - this.value;
    return this.user;
  };
};