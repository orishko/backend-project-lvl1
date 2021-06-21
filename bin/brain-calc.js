#!/usr/bin/env node
import greeting from '../src/cli.js';
import calc from '../src/games/calc.js';
import { generalLogicGame } from '../src/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
generalLogicGame(userName, calc);
