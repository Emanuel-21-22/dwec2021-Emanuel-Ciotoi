'use strict';

function createUser() {
	let user = {};

	user.name = 'John';
	user.surname = 'Smith';
	user.name = 'Pete';
	delete user.name;

	return user;
}

function isEmpty(obj) {
	let hasProperties = true;

	for (let key in obj) {
		if (obj[key] != '') {
			hasProperties = false;
		}
	}

	return hasProperties;
}

function sum(obj) {
	let total = 0;
	for (let key in obj) {
		total += obj[key];
	}
	return total;
}

/**
 * Multiply the numerics properties by 2
 * @param {object} obj
 */
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (!isNaN(obj[key])) {
			obj[key] *= 2;
		}
	}
}

export { createUser, isEmpty, sum, multiplyNumeric };
