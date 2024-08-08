import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const playing = (whatToDo, func = () => {}) => {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();
  console.log(whatToDo);
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [question, correctAnswer] = func();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playing;
