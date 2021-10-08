import { checkEvenOdd } from '../../../docs/tu06/scripts/ex1';

describe('EvenOdd Test Suite', () => {
	it('check if 7 is an odd number', () => {
		expect(checkEvenOdd(7)).toBeFalsy();
	});

	it('check if 104 is an even number', () => {
		expect(checkEvenOdd(104)).toBeTruthy();
	});

	it('check if 2760 is not an odd number', () => {
		expect(checkEvenOdd(2760)).not.toBeFalsy();
	});
});
