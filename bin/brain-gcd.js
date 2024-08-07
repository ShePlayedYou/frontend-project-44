#!/usr/bin/env node
import brainGCD from '../games/brainGCD.js';
import playing from '../src/index.js';

const whatToDo = 'Find the greatest common divisor of given numbers.';

playing(whatToDo, brainGCD);
