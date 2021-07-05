import randomInt from '../utilities.js';
import runGame from '../index.js';

const gameTask = 'What is the result of the expression?';

const calc = (i) => {
  let expression = '';
  let expectedAnswer = 0;
  const randomInt1 = randomInt();
  const randomInt2 = randomInt();

  switch (i) {
    case 1:
      expression = `${randomInt1} + ${randomInt2}`;
      expectedAnswer = randomInt1 + randomInt2;
      break;
    case 2:
      expression = `${randomInt1} - ${randomInt2}`;
      expectedAnswer = randomInt1 - randomInt2;
      break;
    case 3:
      expression = `${randomInt1} * ${randomInt2}`;
      expectedAnswer = randomInt1 * randomInt2;
      break;
    default:
      break;
  }
  return [expression, String(expectedAnswer)];
};

export default () => runGame(gameTask, calc);
