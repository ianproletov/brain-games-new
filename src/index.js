import readlineSync from 'readline-sync';
import makeEvenGame from './games/even';
import makeProgressionGame from './games/progression';
import makeGcdGame from './games/gcd';
import makePrimeGame from './games/prime';
import makeCalcGame from './games/calc';

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  let choice;
  do {
    console.log('Please, choose your game:\n');
    console.log('1) - brain-even');
    console.log('2) - brain-progression');
    console.log('3) - brain-gcd');
    console.log('4) - brain-prime');
    console.log('5) - brain-calc');
    console.log('q - quit\n');
    choice = readlineSync.question('Make your choice: ');
    switch (choice) {
      case '1':
        makeEvenGame(playerName);
        break;
      case '2':
        makeProgressionGame(playerName);
        break;
      case '3':
        makeGcdGame(playerName);
        break;
      case '4':
        makePrimeGame(playerName);
        break;
      case '5':
        makeCalcGame(playerName);
        break;
      case 'q':
        console.log(`Good-bye, ${playerName}!`);
        break;
      default:
        console.log('Wrong! Please, try again!');
    }
  } while (choice !== 'q');
};
