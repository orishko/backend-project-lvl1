import randomInt from '../utilities.js';
import generalLogicGame from '../index.js';

const gameTask = 'What number is missing in the progression?';

const progressionGame = () => {
  const progressionStep = randomInt(10, 1);
  const progressionLength = randomInt(10, 5);
  const hiddenElement = randomInt(progressionLength);
  const result = [];
  let member = randomInt(10);
  let expectedAnswer = 0;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (hiddenElement === i) {
      expectedAnswer = member;
      result.push('..');
    } else {
      result.push(member);
    }

    member += progressionStep;
  }

  const progression = result.join(' ');

  return [progression, String(expectedAnswer)];
};

export default () => generalLogicGame(gameTask, progressionGame);
