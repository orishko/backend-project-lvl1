#!/usr/bin/env node
import greeting from '../src/cli.js';
import prime from '../src/prime.js';
import { generalLogicGame } from '../src/index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
generalLogicGame(userName, prime);
