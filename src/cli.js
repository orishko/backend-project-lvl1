import readlineSync from 'readline-sync';

// Wait for user's response.
const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export default askName;
