import { randomNumberGenerator } from '../src/random.js';
import gameEngine from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers. ';

export const brainGcd = () => {
  const randomNumber1 = randomNumberGenerator(1, 10);
  const randomNumber2 = randomNumberGenerator(1, 10);
  const randomTwoNumbers = `${randomNumber1} ${randomNumber2}`;

  const arrayOfNumber1 = [];
  const arrayOfNumber2 = [];

  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      arrayOfNumber1.push(i);
    }
  }

  for (let i = 1; i <= randomNumber2; i += 1) {
    if (randomNumber2 % i === 0) {
      arrayOfNumber2.push(i);
    }
  }

  const equalNumbers = [];

  for (let i = 0; i < arrayOfNumber1.length; i += 1) {
    if (arrayOfNumber2.includes(arrayOfNumber1[i])) {
      equalNumbers.push(arrayOfNumber1[i]);
    }
  }

  let rightAnswer = Math.max(...equalNumbers);
  rightAnswer = String(rightAnswer);

  return [randomTwoNumbers, rightAnswer];
};

const startBrainGcdGame = () => {
  gameEngine(description, brainGcd);
};

export default startBrainGcdGame;
