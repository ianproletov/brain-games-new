import makeGame from '..';
import getRandomNumber from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const makeStep = () => {
  const firstArgument = getRandomNumber(1, 99);
  const step = getRandomNumber(1, 10);
  const hiddenArgumentPosition = getRandomNumber(1, progressionLength - 1);
  const questionData = [];
  let rightAnswer;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenArgumentPosition) {
      rightAnswer = `${firstArgument + step * i}`;
      questionData.push('..');
    } else {
      questionData.push(firstArgument + step * i);
    }
  }
  return ({ rightAnswer, question: questionData.join(' ') });
};

export default () => makeGame(makeStep, task);
