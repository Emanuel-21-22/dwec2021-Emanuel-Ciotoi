'use strict';

function calculates(numbers) {
	let sum = 0;

	for (const num of numbers) {
		sum += num;
	}

	return sum;
}

export { calculates };
