#!/usr/bin/env node
import playing from '../src/index.js';
import brainCalc from '../games/brainСalc.js';

const whatToDo = 'What is the result of the expression?';

playing(whatToDo, brainCalc);
