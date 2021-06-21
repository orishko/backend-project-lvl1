import readlineSync from 'readline-sync';

const questionNumber = 3;
const randomInt = (max = 100, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

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

export { generalLogicGame, randomInt, questionNumber };
