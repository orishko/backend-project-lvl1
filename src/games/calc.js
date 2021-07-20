import generateRandomInt from '../utilities.js';
import gameConstruct from '../index.js';

const gameTask = 'What is the result of the expression?';

const generateNewRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[generateRandomInt(2, 0)];
  const randomNumber1 = generateRandomInt();
  const randomNumber2 = generateRandomInt();

  return [operation, randomNumber1, randomNumber2];
};

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

const getCalculateData = () => {
  const [operation, firstNumber, secondNumber] = generateNewRound();

  const expression = `${firstNumber} ${operation} ${secondNumber}`;

  const expectedAnswer = calculate(operation, firstNumber, secondNumber);

  return [expression, String(expectedAnswer)];
};

export default () => gameConstruct(gameTask, getCalculateData);
