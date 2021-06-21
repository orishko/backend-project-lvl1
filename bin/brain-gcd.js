#!/usr/bin/env node
import greeting from '../src/cli.js';
import gcd from '../src/games/gcd.js';
import { generalLogicGame } from '../src/index.js';

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');
generalLogicGame(userName, gcd);
