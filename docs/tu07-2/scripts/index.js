'use strict';

export function Calculator(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;

	this.sum = () => {
		return this.num1 + this.num2;
	};

	this.mul = () => {
		return this.num1 * this.num2;
	};

	this.avg = () => {
		return this.sum() / 2;
	};
}
