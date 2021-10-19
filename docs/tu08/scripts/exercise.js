'use strict';

/**
 * Validate a password if have a minimus security with his methods
 * @param {String} password string to validate
 * @method haveMinChars
 * @method haveLowerCases
 * @method haveUpperCases
 * @method haveNumbers
 * @method haveSpecialChars
 * @returns {Boolean|Number}
 */
function ValidatePassword(password) {
	const letters = 'aáàbcçdeéèfghiíìjklmnñoóòppqrstuúüùvwxyz';
	const numbers = '0123456789';
	this.pass = password;

	this.haveMinChars = () => this.pass.length >= 8;

	this.haveLowerCases = () => {
		for (const ch of this.pass) {
			if (letters.includes(ch)) {
				return 1;
			}
		}
		return 0;
	};

	this.haveUpperCases = () => {
		for (let i = 0; i < this.pass.length; i++) {
			if (letters.toUpperCase().indexOf(this.pass[i], 0) != -1) {
				return 1;
			}
		}
		return 0;
	};

	this.haveNumbers = () => {
		for (let i = 0; i < this.pass.length; i++) {
			if (numbers.indexOf(this.pass.charAt(i), 0) != -1) {
				return true;
			}
		}
		return false;
	};

	this.haveSpecialChars = () => {
		for (const ch of this.pass) {
			if (!numbers.includes(ch) && !letters.includes(ch.toLowerCase())) {
				return true;
			}
		}
		return false;
	};
}

export { ValidatePassword };
