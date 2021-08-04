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
  const numberOfOperations = operations.length() - 1;
  const operation = operations[generateRandomInt(numberOfOperations, 0)];
  const firstNumber = generateRandomInt();
  const secondNumber = generateRandomInt();

  const expression = `${firstNumber} ${operation} ${secondNumber}`;

  const expectedAnswer = calculate(operation, firstNumber, secondNumber).toString();

  return [expression, expectedAnswer];
};

export default () => run(gameTask, generateNewRound);
