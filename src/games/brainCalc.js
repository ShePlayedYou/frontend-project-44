import generateNumber from '../helpers.js';
import playing from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operator}'! Sorry`);
  }
};

const generateRound = () => {
  const number1 = generateNumber(0, 10);
  const number2 = generateNumber(0, 10);
  const symbols = ['*', '+', '-'];
  const randomOpertor = symbols[generateNumber(0, 2)];
  const question = (`${number1} ${randomOpertor} ${number2}`);
  const answer = calculate(number1, number2, getRandomSymbol).toString();
  return [question, answer];
};

const brainCalc = () => playing(gameDescription, generateRound);

export default brainCalc;
