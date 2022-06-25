export const randomNumberGenerator = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

export const randomOperations = () => {
  let result = '';
  const operations = ['+', '-', '*'];
  const i = randomNumberGenerator(1, 10) % 3;
  result = `${randomNumberGenerator(1, 10)} ${operations[i]} ${randomNumberGenerator(1, 10)}`;
  return result;
};
