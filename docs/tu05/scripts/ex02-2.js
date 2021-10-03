'use strict';

/**
 * Funcion to check if someone is 18 years old or older
 * @param {number} age Age for check
 * @returns True or False
 */
let checkAge = (age) => (age >= 18 ? true : false);

console.info(checkAge(17));
console.info(checkAge(18));
console.info(checkAge(19));
