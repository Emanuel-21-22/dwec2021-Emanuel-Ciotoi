import { checkAge as checkAgeV1 } from '../../../docs/tu06/scripts/ex2-1';

describe('CheckAge as normal function Test Suite', () => {
	it('returns a false if you have under 18', () => {
		expect(checkAgeV1(17)).toBeFalsy();
	});

	it('returns a true if you have 18', () => {
		expect(checkAgeV1(18)).toBeTruthy();
	});

	it('returns a true if you have 19', () => {
		expect(checkAgeV1(19)).toBeTruthy();
	});
});
