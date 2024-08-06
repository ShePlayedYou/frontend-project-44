const isEven = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default brainEven;
