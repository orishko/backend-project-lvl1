import { randomInt } from '../index.js';

export default (i) => {
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
