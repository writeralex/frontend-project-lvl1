export const randomNumberGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomOperations = () => {
    let result = '';
    const operations = ['+', '-', '*'];
    let i = randomNumberGenerator(1, 10) % 3;
    result = `${randomNumberGenerator(1, 10)} ${operations[i]} ${randomNumberGenerator(1, 10)}`;
    return result;
}