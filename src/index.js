import readlineSync from 'readline-sync';

export const gameEngine = (description, gameData) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(description);

    const roundsNumber = 3;

    for (let i = 0; i < roundsNumber; i += 1) {
        const answer = readlineSync.question(`Question: ${gameData[0]}`);
        if (answer === (gameData[1])()) {
            console.log('Correct!');
        }
        else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${(gameData[1])()}".`);
            return console.log(`Lets try again, ${userName} !`);
        };
        
    }
    console.log(`Congratulations, ${userName} !`);
}