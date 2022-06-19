import { randomNumberGenerator } from '../src/random.js';
import { gameEngine } from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no". ';

const randomNumber = randomNumberGenerator(0, 10);
const rightAnswer = (question) => (isEven(question) ? 'yes' : 'no');
const question = randomNumberGenerator(0, 10);
const gameData = [question, rightAnswer];

export const brainEven = () => {
    gameEngine(description, gameData);
    rightAnswer(randomNumber);
}

const isEven = (num) => {
    num % 2 === 0;
}
