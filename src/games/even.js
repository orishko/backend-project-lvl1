import { randomInt, isEven } from '../index.js';

export default () => {
  const randomNumber = randomInt();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};
