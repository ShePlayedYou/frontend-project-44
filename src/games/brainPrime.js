import playing from '../index.js';
import generateNumber from '../helpers.js';

const whatToDo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= randomNumber / 2) {
    if (randomNumber % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const game = () => {
  const question = generateNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => playing(whatToDo, game);

export default brainPrime;
