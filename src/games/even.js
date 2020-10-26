import makeGame from '..';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const makeStep = () => {
  const currentNumber = getRandomNumber(1, 99);
  const rightAnswer = isEven(currentNumber) ? 'yes' : 'no';
  return ({ rightAnswer, question: `${currentNumber}` });
};

export default () => makeGame(makeStep, task);
