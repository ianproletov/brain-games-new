import readlineSync from 'readline-sync';

export default (min, max) => Math.floor(Math.random() * max) + min;

export const makeGame = (makeStep, task, playerName = 'guest') => {
  const steps = 3;
  console.log(task);
  for (let i = 0; i < steps; i += 1) {
    const { rightAnswer, question } = makeStep();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Answer: ');
    if (playerAnswer !== rightAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      readlineSync.keyInPause();
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratilations, ${playerName}!`);
  readlineSync.keyInPause();
};
