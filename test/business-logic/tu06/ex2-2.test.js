import { checkAge as checkAgeV2 } from '../../../docs/tu06/scripts/ex2-2';

describe('CheckAge as arrow function Test Suite', () => {
	it('returns a false if you have under 18', () => {
		expect(checkAgeV2(17)).toBeFalsy();
	});

	it('returns a true if you have 18', () => {
		expect(checkAgeV2(18)).toBeTruthy();
	});

	it('returns a true if you have 19', () => {
		expect(checkAgeV2(19)).toBeTruthy();
	});
});
