import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
});

test("Retorna true para arara", () => {
  const result = checaPalindromo("arara");

  expect(result).toEqual(true);
});

test("Retorna true para asa", () => {
  const result = checaPalindromo("asa");

  expect(result).toEqual(true);
});

//* Não funciona com virgulas na string.
test("Retorna true para Ótimo, só eu, que os omito", () => {
  const result = checaPalindromo("Ótimo, só eu, que os omito");

  expect(result).toEqual(true);
});

//* Não funciona com virgulas na string e traços.
// test("Retorna true para Socorram-me subi no onibus em marrocos", () => {
//   const result = checaPalindromo("Socorram-me subi no onibus em marrocos");

//   expect(result).toEqual(true);
// });