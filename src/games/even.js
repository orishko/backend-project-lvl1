import generateRandomInt from '../utilities.js';
import gameConstruct from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenData = () => {
  const randomNumber = generateRandomInt();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => gameConstruct(gameTask, getEvenData);
