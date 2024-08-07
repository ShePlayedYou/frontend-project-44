const brainGcdFunc = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const brainGcd = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const question = (`${firstNumber} ${secondNumber}`);
  const correctAnswer = brainGcdFunc(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

export default brainGcd;
