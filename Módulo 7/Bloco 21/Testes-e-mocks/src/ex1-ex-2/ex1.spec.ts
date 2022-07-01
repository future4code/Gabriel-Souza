import { validateCharacter } from "./ex1";

describe("Test validateCharacter", () => {
  it("should validateCharacter return false if name empty", () => {
    const result = validateCharacter({
      name: "",
      life: 50,
      defense: 10,
      strength: 80
    });
    expect(result).toBe(false);
  });

  it("should validateCharacter return false if life equal to 0", () => {
    const result = validateCharacter({
      name: "Goku",
      life: 0,
      defense: 10,
      strength: 80
    });
    expect(result).toBe(false);
  });

  it("should validateCharacter return false if strength equal to 0", () => {
    const result = validateCharacter({
      name: "Goku",
      life: 100,
      defense: 100,
      strength: 0
    });
    expect(result).toBe(false);
  });

  it("should validateCharacter return false if defense equal to 0", () => {
    const result = validateCharacter({
      name: "Goku",
      life: -200,
      defense: -100,
      strength: -10
    });
    expect(result).toBe(false);
  });

  it("should validateCharacter return true if all properties contain positive values", () => {
    const result = validateCharacter({
      name: "Goku",
      life: 100,
      defense: 100,
      strength: 100
    });
    expect(result).toBe(true);
  });
});