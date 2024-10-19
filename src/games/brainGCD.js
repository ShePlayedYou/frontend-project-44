import playing from '../index.js';
import generateNumber from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const number1 = generateNumber(1, 30);
  const number2 = generateNumber(1, 30);
  const question = `${number1} ${number2}`;
  const answer = calculateGcd(number1, number2).toString();
  return [question, answer];
};

const brainGcd = () => playing(gameDescription, generateRound);

export default brainGcd;
