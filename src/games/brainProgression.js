import playing from '../index.js';
import generateNumber from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (startNumber, step, progressionLength) => {
  const progression = [startNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const generateRound = () => {
  const startNumber = generateNumber(1, 10);
  const step = generateNumber(1, 10);
  const progressionLength = generateNumber(5, 10);

  const progression = makeProgression(startNumber, step, progressionLength);

  const randomIndex = generateNumber(0, progressionLength - 1);
  const secretNumber = progression[randomIndex];

  progression[randomIndex] = '..';

  const question = progression.join(' ');

  const answer = secretNumber.toString();

  return [question, answer];
};

const brainProgression = () => playing(gameDescription, generateRound);

export default brainProgression;
