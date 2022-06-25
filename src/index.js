import readlineSync from 'readline-sync';

const gameEngine = (description, brainGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundsNumber = 3;

  for (let i = 0; i < roundsNumber; i += 1) {
    const [randomNumberOrOperation, rightAnswer] = brainGame();
    console.log(`Question: ${randomNumberOrOperation}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
