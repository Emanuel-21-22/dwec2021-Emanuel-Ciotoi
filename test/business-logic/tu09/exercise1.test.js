import { calculates } from '../../../docs/tu09/scripts/module';

describe('Sum Array Test Suite', () => {
	it('sum the array and returns 542', () => {
		const arr = [24, 84, 1, 0, 78, -89, 444];

		expect(calculates(arr)).toEqual(542);
	});

	it('sum the array and returns -463', () => {
		const arr = [343, 45, -984, 56, 77];

		expect(calculates(arr)).toEqual(-463);
	});
});
