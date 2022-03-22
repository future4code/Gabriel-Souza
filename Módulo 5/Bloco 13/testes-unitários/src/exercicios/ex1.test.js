import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    const result = checaBissexto(1996);

    expect(result).toEqual(true)
  });

  test("retorna true pra 2008", () => {
    const result = checaBissexto(2008);

    expect(result).toEqual(true);
  });

  test("retorna false pra 2007", () => {
    const result = checaBissexto(2007);

    expect(result).toEqual(false);
  });
});

//* Criando Tests

test("retorna true para 2016", () => {
  const result = checaBissexto(2016);

expect(result).toEqual(true);
});

test("retorna false para 2011", () => {
  const result = checaBissexto(2011);

expect(result).toEqual(false);
});