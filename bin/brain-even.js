#!/usr/bin/env node
import askName from '../src/cli.js';
import getRandomInt from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = askName();
getRandomInt(userName);
