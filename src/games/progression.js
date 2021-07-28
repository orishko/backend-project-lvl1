import generateRandomInt from '../utilities.js';
import run from '../index.js';

const gameTask = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const currentElement = startNumber + (i * step);
    result.push(currentElement);
  }

  return result;
};

const generateNewRound = () => {
  const startNumber = generateRandomInt(10);
  const progressionStep = generateRandomInt(10, 1);
  const progressionLength = generateRandomInt(10, 5);
  const hiddenIndex = generateRandomInt(progressionLength - 1);

  const progression = generateProgression(startNumber, progressionStep, progressionLength);

  const expectedAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const result = progression.join(' ');

  return [result, expectedAnswer];
};

export default () => run(gameTask, generateNewRound);
