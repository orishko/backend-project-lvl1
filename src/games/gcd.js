import generateRandomInt from '../utilities.js';
import game from '../index.js';

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

  return [firstNumber, secondNumber];
};

const getGcdData = () => {
  const [firstNumber, secondNumber] = generateNewRound();

  const expectedAnswer = findGcd(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, String(expectedAnswer)];
};

export default () => game(gameTask, getGcdData);
