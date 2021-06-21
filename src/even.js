import { randomInt } from './index.js';

export default () => {
  const randomNumber = randomInt();
  const isEven = (number) => number % 2 === 0;
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};
