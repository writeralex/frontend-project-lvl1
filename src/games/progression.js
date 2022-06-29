import { randomNumberGenerator } from '../random.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression? ';

const arrayOfProgressions = (infoProgression) => {
  let arrayOfProgression = [infoProgression[2]];
  const lengthOfProgression = infoProgression[0];
  const iterationOfProgression = infoProgression[1];
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

export const brainProgression = () => {
  const lengthOfProgression = randomNumberGenerator(5, 10);
  const iterationOfProgression = randomNumberGenerator(1, 10);
  const firstElementOfProgression = randomNumberGenerator(1, 10);
  const infoProgression = [lengthOfProgression, iterationOfProgression, firstElementOfProgression];

  const brainGameResult = arrayOfProgressions(infoProgression);

  return brainGameResult;
};

const startBrainProgressionGame = () => {
  gameRounds(description, brainProgression);
};

export default startBrainProgressionGame;
