'use strict';

/**
 * Function to obtain the value of the base by the exponent
 * @param {number} x Value to be multiplied
 * @param {number} y Number of times to multiply
 * @returns Returns the power value
 */
export function pow(x, y) {
	if ((+x != NaN, +y != NaN)) {
		return x ** y;
	} else {
		return null;
	}
}

// TO-DO delete this
// console.info(pow(2, 6));
// console.info(pow(0, 5));
// console.info(pow(-5, 3));
