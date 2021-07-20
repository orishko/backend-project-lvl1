import generateRandomInt from '../utilities.js';
import gameConstruct from '../index.js';

const gameTask = 'What number is missing in the progression?';

const generateNewRound = () => {
  const startNumber = generateRandomInt(10);
  const progressionStep = generateRandomInt(10, 1);
  const progressionLength = generateRandomInt(10, 5);
  const hiddenElement = generateRandomInt(progressionLength);

  return [startNumber, progressionStep, progressionLength, hiddenElement];
};

const generateProgression = (startNumber, progressionStep, progressionLength) => {
  const result = [];
  let currentElement = startNumber;
  result.push(startNumber);

  for (let i = 0; i < progressionLength; i += 1) {
    currentElement += progressionStep;
    result.push(currentElement);
  }
  return result;
};

const getProgressionData = () => {
  const [startNumber, progressionStep, progressionLength, hiddenElement] = generateNewRound();

  const progression = generateProgression(startNumber, progressionStep, progressionLength);

  const expectedAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const result = progression.join(' ');

  return [result, String(expectedAnswer)];
};

export default () => gameConstruct(gameTask, getProgressionData);
