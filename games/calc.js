import { randomNumber, randomOperand } from '../src/random.js';
import { playerName, game } from '../src/index.js';

export const brainCalc = () => {
    console.log('What is the result of the expression?');
    let result = randomNumber + randomOperand + randomNumber;
    toString(randomNumber);
    toString(randomOperand);
    let expression = randomNumber + randomOperand + randomNumber;
    game(expression);
}
