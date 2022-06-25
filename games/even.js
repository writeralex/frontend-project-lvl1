import { randomNumberGenerator } from '../src/random.js';
import gameEngine from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no". ';

const isEven = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return true;
  }
  return false;
};

export const brainEven = () => {
  const randomNumber = randomNumberGenerator(0, 10);
  const rightAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [randomNumber, rightAnswer];
};

const startBrainEvenGame = () => {
  gameEngine(description, brainEven);
};

export default startBrainEvenGame;
