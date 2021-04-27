import readlineSync from 'readline-sync';

// Wait for user's response.
const askName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
}
export {askName};
