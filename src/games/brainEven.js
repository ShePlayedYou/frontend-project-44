import playing from '../index.js';
import generateNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => playing(gameDescription, generateRound);

export default brainEven;
