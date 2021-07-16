import generateRandomInt from '../utilities.js';
import game from '../index.js';

const gameTask = 'What is the result of the expression?';

const generateNewRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[generateRandomInt(2, 0)];
  const randomNumber1 = generateRandomInt();
  const randomNumber2 = generateRandomInt();

  return [operation, randomNumber1, randomNumber2];
};

const getCalculateData = () => {
  let expression = '';
  let expectedAnswer = 0;

  const [operation, randomNumber1, randomNumber2] = generateNewRound();

  switch (operation) {
    case '+':
      expression = `${randomNumber1} + ${randomNumber2}`;
      expectedAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      expression = `${randomNumber1} - ${randomNumber2}`;
      expectedAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      expression = `${randomNumber1} * ${randomNumber2}`;
      expectedAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      return null;
  }
  return [expression, String(expectedAnswer)];
};

export default () => game(gameTask, getCalculateData);
