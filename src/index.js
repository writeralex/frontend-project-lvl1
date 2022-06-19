import readlineSync from 'readline-sync';
import { brainEven } from '../games/even.js'
import { randomNumber } from './random.js';

export const playerName = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question(console.log('May I have your name? '));
    console.log('Hello, ' + userName + '!');
    return userName;
}

export const userName = playerName();

export const game = (str) => {
    for (let i = 0; i < 3;) {
    const answer = readlineSync.question('Question: ' + str);
    if ((answer === str) || (((answer === 'yes') && (str % 2 === 0)) || ((answer === 'no') && (str % 2 === 1)))) {
        i += 1;
        console.log('Correct!');
    };
    if (answer !== str && answer !== 'yes' && answer !== 'no') {
        console.log('`' + answer + '` is wrong answer ;(. Correct answer was `' + str + '`.');
        return console.log('Let`s try again,' + userName + '!');
    };
    if (answer === 'yes' && str % 2 === 1) {
        console.log('`yes` is wrong answer ;(. Correct answer was `no`.');
        return console.log('Let`s try again,' + userName + '!');
    };
    if (answer === 'no' && str % 2 === 0) {
        console.log('`yes` is wrong answer ;(. Correct answer was `no`.');
        return console.log('Let`s try again,' + userName + '!');
    };
    }
    console.log('Congratulations, ' + userName + '!');
}

