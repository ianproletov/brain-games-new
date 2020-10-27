import makeGame, { getRandomNumber, getYesOrNo } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeStep = () => getYesOrNo(isEven, getRandomNumber(1, 99));

export default (playerName) => makeGame(makeStep, task, playerName);
