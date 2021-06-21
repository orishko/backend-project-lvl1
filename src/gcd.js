import { randomInt } from './index.js';

export default () => {
  const firstNumber = randomInt();
  const secondNumber = randomInt();

  const gcd = (a, b) => {
    if (b) {
      return gcd(b, a % b);
    }

    return Math.abs(a);
  };

  const expectedAnswer = gcd(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, String(expectedAnswer)];
};
