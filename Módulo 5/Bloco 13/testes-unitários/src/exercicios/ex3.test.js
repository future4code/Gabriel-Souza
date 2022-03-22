import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para [a, a, b, c]", () => {
        const arrayTest = checaItensDuplicados(["a", "b","b","a", 1, 1]);

        expect(arrayTest).toEqual(true);
    });
});