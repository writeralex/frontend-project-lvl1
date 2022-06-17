#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const greeting = () => {
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
return userName;
};
export const nameGamer = greeting();
import { brainEven } from '../src/even.js';
brainEven();