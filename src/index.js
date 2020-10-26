import readlineSync from 'readline-sync';

const task = 'Answer "yes" if number even otherwise answer "no".';
const steps = 3;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 0; i < steps; i += 1) {
    const currentNumber = getRandomNumber(1, 99);
    console.log(`Question: ${currentNumber}`);
    const playerAnswer = readlineSync.question('Answer: ');
    const rightAnswer = isEven(currentNumber) ? 'yes' : 'no';
    if (playerAnswer !== rightAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct anawer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratilations, ${playerName}`);
};
