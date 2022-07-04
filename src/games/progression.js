import randomNumberGenerator from '../random.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression? ';

const progressionGen = (lengthOfProgress, iterationOfProgress, firstElementOfProgress) => {
  const arrayOfProgress = [];
  arrayOfProgress.push(firstElementOfProgress);
  for (let i = 0; i < lengthOfProgress; i += 1) {
    arrayOfProgress.push(arrayOfProgress[i] + iterationOfProgress);
  }
  return arrayOfProgress;
};

export const brainProgression = () => {
  const lengthOfProgress = randomNumberGenerator(5, 10);
  const iterationOfProgress = randomNumberGenerator(1, 10);
  const firstElementOfProgress = randomNumberGenerator(1, 10);

  const progression = progressionGen(lengthOfProgress, iterationOfProgress, firstElementOfProgress);
  let arrayOfProgress = progression;
  const i = randomNumberGenerator(5, lengthOfProgress);
  let rightAnswer = arrayOfProgress[i];
  arrayOfProgress[i] = '..';
  arrayOfProgress = arrayOfProgress.join(' ');

  rightAnswer = String(rightAnswer);

  return [progression, rightAnswer];
};

const startBrainProgressionGame = () => {
  gameRounds(description, brainProgression);
};

export default startBrainProgressionGame;
