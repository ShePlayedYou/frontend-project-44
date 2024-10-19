import readlineSync from 'readline-sync';
import getUserNameAndGreetHim from './greeting.js';

const requiredCorrectAnswers = 3;

const playing = (gameDescription, generateRound = () => {}) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserNameAndGreetHim();
  console.log(gameDescription);
  for (let correctAnswers = 0; correctAnswers < requiredCorrectAnswers; correctAnswers += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    continue;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playing;
