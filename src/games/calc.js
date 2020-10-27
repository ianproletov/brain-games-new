import makeGame from '..';
import getRandomNumber from '../utils';

const task = 'What is the result of the expression?';

const operator = {
  1: { operation: (a, b) => a + b, sign: '+' },
  2: { operation: (a, b) => a - b, sign: '-' },
  3: { operation: (a, b) => a * b, sign: '*' },
};

const makeStep = () => {
  const operationNumber = getRandomNumber(1, 3);
  const firstArgument = getRandomNumber(1, 99);
  const secondArgument = getRandomNumber(1, 99);
  const { operation, sign } = operator[operationNumber];
  const rightAnswer = `${operation(firstArgument, secondArgument)}`;
  return ({ rightAnswer, question: `${firstArgument} ${sign} ${secondArgument}` });
};

export default () => makeGame(makeStep, task);
