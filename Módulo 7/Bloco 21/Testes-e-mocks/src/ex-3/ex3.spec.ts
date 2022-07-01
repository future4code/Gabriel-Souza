import { performAttack } from "./ex3";

import { Character } from "../ex1-ex-2/ex1";

const validatorMockTrue = jest.fn(() => true);
const validatorMockFalse = jest.fn(() => false);

describe("Test performAttack", () => {
  it("Should perform attack", () => {
    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMockTrue);

    expect(defender.life).toEqual(1300);
    expect(validatorMockTrue).toHaveBeenCalled();
    expect(validatorMockTrue).toBeCalledTimes(2);
    expect(validatorMockTrue).toHaveReturnedTimes(2)
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMockFalse);
    } catch (err: any) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMockFalse).toHaveBeenCalled();
      expect(validatorMockFalse).toHaveBeenCalledTimes(1);
      expect(validatorMockFalse).toHaveReturnedTimes(1);
    }
  });
});