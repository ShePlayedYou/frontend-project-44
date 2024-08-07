const brainProgressionFunc = (startNumber, step, progressionLength) => {
  const array = [startNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    array.push(array[i] + step);
  }
  const symbol = '..';
  const randomNumberIndexWithSymbol = Math.floor(Math.random() * array.length);
  const secretNumber = array[randomNumberIndexWithSymbol];
  array[randomNumberIndexWithSymbol] = symbol;
  return [array.join(' '), secretNumber];
};

const brainProgression = () => {
  const startNumber = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const progressionLength = 5 + Math.floor(Math.random() * 10);
  const [array, secretNumber] = brainProgressionFunc(startNumber, step, progressionLength);
  const question = (`${array}`);
  const correctAnswer = secretNumber.toString();
  return [question, correctAnswer];
};

export default brainProgression;
