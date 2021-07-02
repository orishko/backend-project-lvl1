import randomInt from '../utilities.js';
import generalLogicGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }

  return Math.abs(a);
};

const gcdGame = () => {
  const firstNumber = randomInt();
  const secondNumber = randomInt();

  const expectedAnswer = gcd(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, String(expectedAnswer)];
};

export default () => generalLogicGame(gameTask, gcdGame);
