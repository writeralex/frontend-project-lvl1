import randomNumberGenerator from '../random.js';
import gameRounds from '../index.js';

const description = 'Find the greatest common divisor of given numbers. ';

const gcdCalculator = (number1, number2) => {
  let result = 0;
  let randomNumber1 = number1;
  let randomNumber2 = number2;
  while (randomNumber1 !== 0 && randomNumber2 !== 0) {
    if (randomNumber1 > randomNumber2) {
      randomNumber1 %= randomNumber2;
    } else {
      randomNumber2 %= randomNumber1;
    }
  } result = randomNumber1 + randomNumber2;
  return result;
};

export const brainGcd = () => {
  const randomNumber1 = randomNumberGenerator(1, 10);
  const randomNumber2 = randomNumberGenerator(1, 10);
  const randomTwoNumbers = `${randomNumber1} ${randomNumber2}`;

  let rightAnswer = gcdCalculator(randomNumber1, randomNumber2);
  rightAnswer = String(rightAnswer);
  return [randomTwoNumbers, rightAnswer];
};

const startBrainGcdGame = () => {
  gameRounds(description, brainGcd);
};

export default startBrainGcdGame;
