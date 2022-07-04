import randomNumberGenerator from '../random.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression? ';

const calculation = (number1, operator, number2) => {
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
  return rightAnswer;
};

export const brainCalc = () => {
  const operations = ['+', '-', '*'];
  const number1 = randomNumberGenerator(1, 10);
  const number2 = randomNumberGenerator(1, 10);
  const operator = operations[randomNumberGenerator(0, (operations.length - 1))];
  const randomOperation = `${number1} ${operator} ${number2}`;

  const rightAnswer = calculation(number1, operator, number2);

  return [randomOperation, rightAnswer];
};

const startBrainCalcGame = () => {
  gameRounds(description, brainCalc);
};

export default startBrainCalcGame;
