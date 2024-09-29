import playing from '../index.js';
import generateNumber from '../helpers.js';

const whatToDo = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNumber) => randomNumber % 2 === 0;

const game = () => {
  const question = generateNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => playing(whatToDo, game);

export default brainEven;
