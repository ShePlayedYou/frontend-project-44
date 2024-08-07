const isPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return 'no';
  }
  let divider = 2;
  while (divider <= randomNumber / 2) {
    if (randomNumber % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const brainPrime = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default brainPrime;
