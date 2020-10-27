import getRandomNumber, { makeGame } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeStep = () => {
  const currentNumber = getRandomNumber(1, 99);
  const rightAnswer = isEven(currentNumber) ? 'yes' : 'no';
  return ({ rightAnswer, question: `${currentNumber}` });
};

export default (playerName) => makeGame(makeStep, task, playerName);
