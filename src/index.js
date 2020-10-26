import readlineSync from 'readline-sync';

const steps = 3;

export default (makeStep, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 0; i < steps; i += 1) {
    const { rightAnswer, question } = makeStep();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Answer: ');
    if (playerAnswer !== rightAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct anawer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratilations, ${playerName}`);
};
