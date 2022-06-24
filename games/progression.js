import { randomNumberGenerator } from '../src/random.js';
import { gameEngine } from '../src/index.js';

const startBrainProgressionGame = () => {
    gameEngine(description, brainProgression);
}

const description = 'What number is missing in the progression? ';

export const brainProgression = () => {
    const lengthOfProgression = randomNumberGenerator(5, 10);
    const iterationOfProgression = randomNumberGenerator(1, 10);
    const firstElementOfProgression = randomNumberGenerator(1, 10);

    let arrayOfProgression = [firstElementOfProgression];

    for (let i = 0; i < lengthOfProgression; i += 1) {
        arrayOfProgression.push(arrayOfProgression[i] + iterationOfProgression);
    }

    let i = randomNumberGenerator(5, lengthOfProgression);
    const rightAnswer = arrayOfProgression[i];
    arrayOfProgression[i] = '...';

    
    return [arrayOfProgression, rightAnswer];
}

export default startBrainProgressionGame;