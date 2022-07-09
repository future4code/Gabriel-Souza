import { Character } from "../ex1-ex-2/ex1";

//* A diferança para me e que a primeira função depende diretamente da função
//* validateCharacter para funcionar no seu escopo.

//* Já a segunda não depende diretamente da função validateCharacter para funcionar
//* mais sim de uma callback no seu parametro.

// export const performAttack = (attacker: Character, defender: Character) => {
//   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//     throw new Error("Invalid character");
//   }

//   if (attacker.strength > defender.defense) {
//     defender.life -= attacker.strength - defender.defense;
//   }
// };

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};