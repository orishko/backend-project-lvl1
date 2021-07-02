import randomInt from '../utilities.js';
import generalLogicGame from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const even = () => {
  const randomNumber = randomInt();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => generalLogicGame(gameTask, even);
