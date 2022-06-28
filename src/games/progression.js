import { randomNumberGenerator } from '../random.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression? ';

export const brainProgression = () => {
  const lengthOfProgression = randomNumberGenerator(5, 10);
  const iterationOfProgression = randomNumberGenerator(1, 10);
  const firstElementOfProgression = randomNumberGenerator(1, 10);

  let arrayOfProgression = [firstElementOfProgression];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    arrayOfProgression.push(arrayOfProgression[i] + iterationOfProgression);
  }

  const i = randomNumberGenerator(5, lengthOfProgression);
  let rightAnswer = arrayOfProgression[i];
  arrayOfProgression[i] = '..';
  arrayOfProgression = arrayOfProgression.join(' ');

  rightAnswer = String(rightAnswer);

  return [arrayOfProgression, rightAnswer];
};

const startBrainProgressionGame = () => {
  gameRounds(description, brainProgression);
};

export default startBrainProgressionGame;
