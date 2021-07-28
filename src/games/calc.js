import generateRandomInt from '../utilities.js';
import run from '../index.js';

const gameTask = 'What is the result of the expression?';

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operation: '${operation}'`);
  }
};

const generateNewRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[generateRandomInt(2, 0)];
  const firstNumber = generateRandomInt();
  const secondNumber = generateRandomInt();

  const expression = `${firstNumber} ${operation} ${secondNumber}`;

  const expectedAnswer = calculate(operation, firstNumber, secondNumber).toString();

  return [expression, expectedAnswer];
};

export default () => run(gameTask, generateNewRound);
