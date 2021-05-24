import readlineSync from 'readline-sync';

const getRandomInt = (userName) => {
  const questionNumber = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= questionNumber; i += 1) {
    const randomInt = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (number) => number % 2 === 0;
    const expectedAnswer = isEven(randomInt) ? 'yes' : 'no';
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getRandomInt;
