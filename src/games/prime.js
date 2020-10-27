import makeGame, { getRandomNumber, getYesOrNo } from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeStep = () => getYesOrNo(isPrime, getRandomNumber(3, 99));

export default (playerName) => makeGame(makeStep, task, playerName);
