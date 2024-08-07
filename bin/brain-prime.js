#!/usr/bin/env node
import brainPrime from '../games/brainPrime.js';
import playing from '../src/index.js';

const whatToDo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

playing(whatToDo, brainPrime);
