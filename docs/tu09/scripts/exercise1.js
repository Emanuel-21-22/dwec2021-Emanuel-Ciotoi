'use strict';
import { calculates } from './module.js';

const numbers = [];

function userInput() {
	let input, canceled;

	do {
		input = prompt('Introduce a number');

		canceled = isNaN(input) || input == '' || input == null;

		if (!canceled) {
			numbers.push(+input);
		}
	} while (!canceled);
}

userInput();

function showResult() {
	const sum = calculates(numbers);
	console.log(`The total of the numbers is ${sum}`);
}

if (numbers.length != 0) {
	showResult();
}
