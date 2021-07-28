import generateRandomInt from '../utilities.js';
import run from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b) {
    return findGcd(b, a % b);
  }

  return Math.abs(a);
};

const generateNewRound = () => {
  const firstNumber = generateRandomInt();
  const secondNumber = generateRandomInt();

  const expectedAnswer = findGcd(firstNumber, secondNumber).toString();

  return [`${firstNumber} ${secondNumber}`, expectedAnswer];
};

export default () => run(gameTask, generateNewRound);
