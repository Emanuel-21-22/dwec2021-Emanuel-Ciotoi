'use strict';

/**
 * Function to obtain the value of the base by the exponent
 * @param {number} x Value to be multiplied
 * @param {number} y Number of times to multiply
 * @returns Returns the power value
 */
function pow(x, y) {
	let resultado = x;
	for (let i = 1; i < y; i++) {
		resultado *= x;
	}
	return resultado;
}
console.info(pow(2, 6));
console.info(pow(0, 5));
console.info(pow(-5, 3));
