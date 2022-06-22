import { randomNumberGenerator } from '../src/random.js';
import { gameEngine } from '../src/index.js';

const startBrainEvenGame = () => {
    gameEngine(description, brainEven);
}

const description = 'Answer "yes" if the number is even, otherwise answer "no". ';

export const brainEven = () => {
    const randomNumber = randomNumberGenerator(0, 10);
    const rightAnswer = (isEven(randomNumber) ? 'yes' : 'no');
    return [randomNumber, rightAnswer];
}

const isEven = (randomNumber) => {
    if (randomNumber % 2 === 0) {
        return true;
    };
    if (randomNumber % 2 === 1) {
        return false;
    };
}

export default startBrainEvenGame;
