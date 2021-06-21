#!/usr/bin/env node
import greeting from '../src/cli.js';
import even from '../src/games/even.js';
import { generalLogicGame } from '../src/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
generalLogicGame(userName, even);
