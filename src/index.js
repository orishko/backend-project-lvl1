import readlineSync from 'readline-sync';

const questionNumber = 3;

const randomInt = (max = 100, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

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

const isEven = (number) => number % 2 === 0;

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }

  return Math.abs(a);
};

const generalLogicGame = (userName, game) => {
  for (let i = 1; i <= questionNumber; i += 1) {
    const [question, expectedAnswer] = game(i);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
const t = 'f';
export { generalLogicGame, randomInt, isPrime, isEven, gcd };
