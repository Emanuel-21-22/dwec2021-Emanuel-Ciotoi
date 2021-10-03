'use strict';

/**
 * Funcion to check if someone is 18 years old or older
 * @param {number} age Age for check
 * @returns True or False
 */

function checkAge(age) {
	return age >= 18 || false;
}

console.info(checkAge(17));
console.info(checkAge(18));
console.info(checkAge(19));
