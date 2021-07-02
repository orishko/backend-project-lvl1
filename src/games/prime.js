import randomInt from '../utilities.js';
import generalLogicGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGame = () => {
  const randomNumber = randomInt();
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => generalLogicGame(gameTask, primeGame);
