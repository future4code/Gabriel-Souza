import { Buy } from "./ex-1";

describe ("Testando sí a classe Buy esta atendendo todos os requisitos.", () => {

  it ("Faça um teste com um usuário com o saldo maior do que o valor de compra.", () => {
    const user = new Buy({name: "Gabriel", balance: 2000}, 1000);
    // const result = user.getBalanceUser() > user.getValue();

    expect(user.getBalanceUser()).toBeGreaterThan(user.getValue());
  });

  it ("Faça um teste com um usuário com o saldo igual ao valor de compra.", () => {
    const user = new Buy({name: "Gabriel", balance: 1000}, 1000);
    // const result = user.getBalanceUser() === user.getValue();

    expect(user.getBalanceUser()).toEqual(user.getValue());
  });

  it ("Faça um teste com um usuário com o saldo menor do que o valor de compra.", () => {
    const user = new Buy({name: "Gabriel", balance: 900}, 1000);
    // const result = user.getBalanceUser() < user.getValue();

    expect(user.getBalanceUser()).toBeLessThan(user.getValue());
  });
});