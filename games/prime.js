import { randomNumberGenerator } from '../src/random.js';
import { gameEngine } from '../src/index.js';

const startBrainPrimeGame = () => {
    gameEngine(description, brainPrime);
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

export const brainPrime = () => {
    const randomNumber = randomNumberGenerator(2, 10);
    const rightAnswer = isPrime(randomNumber);
    return [randomNumber, rightAnswer];
}

const isPrime = (randomNumber) => {
    for (let i = 2; i < randomNumber; i += 1) {
        if (randomNumber !== i && randomNumber % i === 0) {
            return 'no';
        };
        
    }; return 'yes';
}

export default startBrainPrimeGame;