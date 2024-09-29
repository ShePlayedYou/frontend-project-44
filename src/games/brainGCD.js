import playing from '../index.js';
import generateNumber from '../helpers.js';

const whatToDo = 'Find the greatest common divisor of given numbers.';

const calculate = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const game = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const brainGcd = () => playing(whatToDo, game);

export default brainGcd;
