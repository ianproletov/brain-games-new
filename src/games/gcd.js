import makeGame, { getRandomNumber } from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const getDivisor = (firstArgument, secondArgument) => {
  let nod = Math.min(firstArgument, secondArgument);
  while (firstArgument % nod !== 0 || secondArgument % nod !== 0) {
    nod -= 1;
  }
  return nod;
};

const makeStep = () => {
  const firstArgument = getRandomNumber(1, 99);
  const secondArgument = getRandomNumber(1, 99);
  const rightAnswer = `${getDivisor(firstArgument, secondArgument)}`;
  return ({ rightAnswer, question: `${firstArgument} ${secondArgument}` });
};

export default (playerName) => makeGame(makeStep, task, playerName);
