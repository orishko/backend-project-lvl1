import { randomInt, gcd } from '../index.js';

export default () => {
  const firstNumber = randomInt();
  const secondNumber = randomInt();

  const expectedAnswer = gcd(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, String(expectedAnswer)];
};
