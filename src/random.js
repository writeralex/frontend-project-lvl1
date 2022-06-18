export const randomNumber = Math.floor(Math.random() * 100);
const operands = ['+', '-', '*'];
export const randomOperand = operands[randomNumber % 3];