#!/usr/bin/env node
import brainProgression from '../games/brainProgression.js';
import playing from '../src/index.js';

const whatToDo = 'What number is missing in the progression?';

playing(whatToDo, brainProgression);
