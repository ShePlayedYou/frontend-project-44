import playing from '../index.js';
import generateNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRound = () => {
  const question = generateNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => playing(gameDescription, generateRound);

export default brainPrime;
