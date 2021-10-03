'use strict';
/**
 * Check if the received number is even or odd
 * @param {number} num Number to check
 * @returns True if is even or False if is odd
 */
let checkEvenOdd = (num) => (num % 2 == 0 ? true : false);

console.info(checkEvenOdd(7));
console.info(checkEvenOdd(104));
console.info(checkEvenOdd(2760));
