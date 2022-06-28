import { randomNumberGenerator } from '../random.js';
import gameEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber !== i && randomNumber % i === 0) {
      return 'no';
    }
  } return 'yes';
};

export const brainPrime = () => {
  const randomNumber = randomNumberGenerator(2, 10);
  const rightAnswer = isPrime(randomNumber);
  return [randomNumber, rightAnswer];
};

const startBrainPrimeGame = () => {
  gameEngine(description, brainPrime);
};

export default startBrainPrimeGame;
