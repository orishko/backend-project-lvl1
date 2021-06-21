import { randomInt, isPrime } from './index.js';

export default () => {
  const randomNumber = randomInt();
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};
