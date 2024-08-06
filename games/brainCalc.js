import {
  cons, car, cdr,
} from '@hexlet/pairs';

const randomSymbol = () => {
  const symbols = ['*', '+', '-'];
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomSymbolIndex];
};

const toCalc = (firstNumber, secondNumber, getRandomSymbol) => {
  if (getRandomSymbol === '+') {
    return firstNumber + secondNumber;
  }
  if (getRandomSymbol === '-') {
    return firstNumber - secondNumber;
  }
  if (getRandomSymbol === '*') {
    return firstNumber * secondNumber;
  }
  return '';
};

const pairs = () => cons(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));

const brainCalc = () => {
  const pair = pairs();
  const firstNumber = car(pair);
  const secondNumber = cdr(pair);
  const getRandomSymbol = randomSymbol();
  const question = (`${firstNumber} ${getRandomSymbol} ${secondNumber}`);
  const correctAnswer = toCalc(firstNumber, secondNumber, getRandomSymbol).toString();
  return [question, correctAnswer];
};

export default brainCalc;
