#!/usr/bin/env node
import brainEven from '../games/brainEven.js';
import playing from '../src/index.js';

const whatToDo = 'Answer "yes" if the number is even, otherwise answer "no".';

playing(whatToDo, brainEven);
