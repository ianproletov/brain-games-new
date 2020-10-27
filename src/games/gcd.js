import makeGame from '..';

const task = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const getDivisor = (firstArgument, secondArgument) => {
  const lessArgument = (firstArgument > secondArgument) ? secondArgument : firstArgument;
  for (let i = lessArgument; i > 1; i -= 1) {
    if (firstArgument % i === 0 && secondArgument % i === 0) {
      return i;
    }
  }
  return 1;
};

const makeStep = () => {
  const firstArgument = getRandomNumber(1, 99);
  const secondArgument = getRandomNumber(1, 99);
  const rightAnswer = `${getDivisor(firstArgument, secondArgument)}`;
  return ({ rightAnswer, question: `${firstArgument} ${secondArgument}` });
};

export default () => makeGame(makeStep, task);
