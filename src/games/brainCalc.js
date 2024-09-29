import generateNumber from '../helpers.js';
import playing from '../index.js';

const whatToDo = 'What is the result of the expression?';

const randomSymbol = () => {
  const symbols = ['*', '+', '-'];
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomSymbolIndex];
};

const calculate = (number1, number2, getRandomSymbol) => {
  switch (getRandomSymbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown error! Sorry');
  };
};

const game = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const getRandomSymbol = randomSymbol();
  const question = (`${number1} ${getRandomSymbol} ${number2}`);
  const correctAnswer = calculate(number1, number2, getRandomSymbol).toString();
  return [question, correctAnswer];
};

const brainCalc = () => playing(whatToDo, game)

export default brainCalc;
