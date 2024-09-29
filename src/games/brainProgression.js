import playing from '../index.js';
import generateNumber from '../helpers.js';

const whatToDo = 'What number is missing in the progression?';

const encryptProgressionDigit = (array) => {
  const encryptedArray = array;
  const symbol = '..';
  const randomNumberIndexWithSymbol = Math.floor(Math.random() * array.length);
  const secretNumber = encryptedArray[randomNumberIndexWithSymbol];
  encryptedArray[randomNumberIndexWithSymbol] = symbol;
  return [encryptedArray.join(' '), secretNumber];
};

const makeProgression = (startNumber, step, progressionLength) => {
  const array = [startNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    array.push(array[i] + step);
  }
  return encryptProgressionDigit(array);
};

const game = () => {
  const startNumber = generateNumber();
  const step = generateNumber();
  const progressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const [array, secretNumber] = makeProgression(startNumber, step, progressionLength);
  const question = (`${array}`);
  const answer = secretNumber.toString();
  return [question, answer];
};

const brainProgression = () => playing(whatToDo, game);
export default brainProgression;
