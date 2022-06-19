import { randomNumber } from '../src/random.js';
import { playerName, game } from '../src/index.js';

export const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    game(randomNumber(1, 100));
}