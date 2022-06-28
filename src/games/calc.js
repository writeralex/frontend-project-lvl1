import randomNumberGenerator from '../random.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression? ';

const randomOperations = () => {
  let result = '';
  const operations = ['+', '-', '*'];
  const i = randomNumberGenerator(1, 10) % 3;
  result = `${randomNumberGenerator(1, 10)} ${operations[i]} ${randomNumberGenerator(1, 10)}`;
  return result;
};

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
  rightAnswer = String(rightAnswer);
  return [randomOperation, rightAnswer];
};

const startBrainCalcGame = () => {
  gameRounds(description, brainCalc);
};

export default startBrainCalcGame;
