import readlineSync from 'readline-sync';

export const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let result = 0; result < 3;) {
      let randomNumber = Math.floor(Math.random() * 100);
      const answerYesOrNo = readlineSync.question(console.log('Question: ' + randomNumber));
      toString(answerYesOrNo);

        if ((answerYesOrNo === 'yes' && randomNumber % 2 === 0) || ((answerYesOrNo === 'no' && randomNumber % 2 === 1))) {
            result += 1;
            console.log('Correct!');
        };
        if (answerYesOrNo === 'yes' && randomNumber % 2 === 1) {
            console.log('"yes" is wrong answer ;(. Correct answer was "no"');
            console.log('Let`s try again, ' + userName + '!');
            result = 0;
        };
        if (answerYesOrNo === 'no' && randomNumber % 2 === 0) {
            console.log('"no" is wrong answer ;(. Correct answer was "yes"');
            console.log('Let`s try again, ' + userName + '!');
            result = 0;
        };
        if (answerYesOrNo !== 'yes' && answerYesOrNo !== 'no') {
            console.log('Let`s try again, ' + userName + '!');
            result = 0;
        };
    };
    console.log('Congratulations, ' + userName + '!');
}
