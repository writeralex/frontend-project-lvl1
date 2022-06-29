import randomNumberGenerator from '../random.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression? ';

const randomOperationGenerator = () => {
  let result = '';
  const operations = ['+', '-', '*'];
  const i = randomNumberGenerator(1, 10) % 3;
  result = `${randomNumberGenerator(1, 10)} ${operations[i]} ${randomNumberGenerator(1, 10)}`;
  return result;
};

export const brainCalc = () => {
  const randomOperation = randomOperationGenerator();
  const separator = ' ';
  const operation = randomOperation.split(separator);
  const operator = operation[1];
  const number1 = Number(operation[0]);
  const number2 = Number(operation[2]);
  let rightAnswer = 0;
  if (operator === '*') {
    rightAnswer = number1 * number2;
  }
  if (operator === '+') {
    rightAnswer = number1 + number2;
  }
  if (operator === '-') {
    rightAnswer = number1 - number2;
  }
  rightAnswer = String(rightAnswer);
  return [randomOperation, rightAnswer];
};

const startBrainCalcGame = () => {
  gameRounds(description, brainCalc);
};

export default startBrainCalcGame;
