import generateRandomInt from '../utilities.js';
import run from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateNewRound = () => {
  const randomNumber = generateRandomInt();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => run(gameTask, generateNewRound);
