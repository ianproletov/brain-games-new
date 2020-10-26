#!/usr/bin/env node

import { getPlayerName } from '..';

console.log('Welcome to the Brain Games!\n');
const playerName = getPlayerName();
console.log(`Hello, ${playerName}!`);