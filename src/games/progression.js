import { randomInt } from '../index.js';

export default () => {
  const progressionStep = randomInt(10);
  const progressionLength = randomInt(10, 5);
  const hiddenElement = randomInt(progressionLength);
  const result = [];
  let member = randomInt(10);
  let expectedAnswer = 0;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (hiddenElement === i) {
      expectedAnswer = member;
      result.push('...');
    } else {
      result.push(member);
    }

    member += progressionStep;
  }

  const progression = result.join(' ');

  return [progression, String(expectedAnswer)];
};
