import { randomNumberGenerator } from '../src/random.js';
import { gameEngine } from '../src/index.js';

const startBrainGcdGame = () => {
    gameEngine(description, brainGcd);
}

const description = 'Find the greatest common divisor of given numbers. ';

export const brainGcd = () => {
    const randomNumber1 = randomNumberGenerator(1, 10);
    const randomNumber2 = randomNumberGenerator(1, 10);
    const randomTwoNumbers = `${randomNumber1} ${randomNumber2}`;

    let arrayOfNumber1 = [];
    let arrayOfNumber2 = [];

    for (let i = 1; i <= randomNumber1; i += 1) {
        if (randomNumber1 % i === 0) {
            arrayOfNumber1.push(i);
        };

    };

    for (let i = 1; i <= randomNumber2; i += 1) {
        if (randomNumber2 % i === 0) {
            arrayOfNumber2.push(i);
        };

    };

    let equalNumbers = [];

    for (const element of arrayOfNumber1) {
        if (arrayOfNumber2.includes(element)) {
            equalNumbers.push(element);
        };

    };

    const rightAnswer = Math.max(...equalNumbers);
    
    return [randomTwoNumbers, rightAnswer];
}

export default startBrainGcdGame;