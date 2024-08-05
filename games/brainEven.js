import readlineSync from 'readline-sync';

const isEven = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const isNumberEven = isEven(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    if (isNumberEven === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${isNumberEven}.
Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
