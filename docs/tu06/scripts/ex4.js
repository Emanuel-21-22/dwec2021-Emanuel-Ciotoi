'use strict';

/**
 * Function to check if the number is positive
 * @param {number} num Number to check
 * @returns
 */
const isPositiveNumber = (num) => num >= 0;

/**
 * Function to check if a number is positive, in addition a function must be
 * provided if it is positive and another for when it is negative.
 * @param {number} number Number to check
 * @param {function} yes It is necessary to provide a function if the number is
 * positive
 * @param {function} no It is necessary to provide a function if the number is
 * negativo
 */
export function ask(number, yes, no) {
	if (isPositiveNumber(number)) yes();
	else no();
}
