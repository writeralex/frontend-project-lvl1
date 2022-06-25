import { randomOperations } from '../src/random.js';
import gameEngine from '../src/index.js';

const description = 'What is the result of the expression? ';

export const brainCalc = () => {
  const randomOperation = randomOperations();
  const separator = ' ';
  const rightAnswerArray = randomOperation.split(separator);
  const operation = rightAnswerArray[1];
  const number1 = Number(rightAnswerArray[0]);
  const number2 = Number(rightAnswerArray[2]);
  let rightAnswer = 0;
  if (operation === '*') {
    rightAnswer = number1 * number2;
  }
  if (operation === '+') {
    rightAnswer = number1 + number2;
  }
  if (operation === '-') {
    rightAnswer = number1 - number2;
  }
  toString(rightAnswer);
  return [randomOperation, rightAnswer];
};

const startBrainCalcGame = () => {
  gameEngine(description, brainCalc);
};

export default startBrainCalcGame;
