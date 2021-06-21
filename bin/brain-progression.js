#!/usr/bin/env node
import greeting from '../src/cli.js';
import progression from '../src/progression.js';
import { generalLogicGame } from '../src/index.js';

const userName = greeting();
console.log('What number is missing in the progression?');
generalLogicGame(userName, progression);
