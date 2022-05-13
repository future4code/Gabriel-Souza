export class User {
  static getId(getId: any) {
    throw new Error("Method not implemented.")
  }
 
   constructor(
      private id: string,
      private email: string,
      private name: string,
      private password: string
    ){
       console.log("Chamando o construtor da classe User")
    };
 
    public getId(): string {
       return this.id
    }
 
    public getEmail(): string {
       return this.email
    }
 
    public getName(): string {
       return this.name
    };

    public introduceYourself  = () => `Olá, sou ${this.name}. Bom dia!`;
 };